/* KEMEKOL — minimal QR encoder: byte mode, EC level L, versions 1–5, mask 0.
   Enough for any Google Play URL (106 bytes). No network, no dependency. */
(function (root) {
  'use strict';

  /* capacity in bytes, data codewords, ec codewords (single block, level L) */
  const V = [
    null,
    { cap: 17,  dc: 19,  ec: 7,  ap: [] },
    { cap: 32,  dc: 34,  ec: 10, ap: [6, 18] },
    { cap: 53,  dc: 55,  ec: 15, ap: [6, 22] },
    { cap: 78,  dc: 80,  ec: 20, ap: [6, 26] },
    { cap: 106, dc: 108, ec: 26, ap: [6, 30] }
  ];
  const FORMAT_L_MASK0 = 0x77C4;

  /* ---- GF(256) ---- */
  const EXP = new Uint8Array(256), LOG = new Uint8Array(256);
  (function () {
    let x = 1;
    for (let i = 0; i < 255; i++) {
      EXP[i] = x; LOG[x] = i;
      x <<= 1; if (x & 0x100) x ^= 0x11D;
    }
    EXP[255] = EXP[0];
  })();
  const gmul = (a, b) => (a === 0 || b === 0) ? 0 : EXP[(LOG[a] + LOG[b]) % 255];

  function genPoly(n) {
    let p = [1];
    for (let i = 0; i < n; i++) {
      const q = [1, EXP[i]], r = new Array(p.length + 1).fill(0);
      for (let a = 0; a < p.length; a++) for (let b = 0; b < 2; b++) r[a + b] ^= gmul(p[a], q[b]);
      p = r;
    }
    return p;
  }

  function ecc(data, n) {
    const g = genPoly(n), res = new Array(data.length + n).fill(0);
    for (let i = 0; i < data.length; i++) res[i] = data[i];
    for (let i = 0; i < data.length; i++) {
      const f = res[i];
      if (!f) continue;
      for (let j = 0; j < g.length; j++) res[i + j] ^= gmul(g[j], f);
    }
    return res.slice(data.length);
  }

  /* ---- encode ---- */
  function utf8(str) {
    const out = [], s = encodeURIComponent(str);
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '%') { out.push(parseInt(s.substr(i + 1, 2), 16)); i += 2; }
      else out.push(s.charCodeAt(i));
    }
    return out;
  }

  function build(text) {
    const bytes = utf8(text);
    let v = 0;
    for (let i = 1; i <= 5; i++) if (bytes.length <= V[i].cap) { v = i; break; }
    if (!v) return null;
    const spec = V[v];

    /* bitstream */
    const bits = [];
    const put = (val, len) => { for (let i = len - 1; i >= 0; i--) bits.push((val >>> i) & 1); };
    put(4, 4);                 /* byte mode */
    put(bytes.length, 8);      /* count, versions 1–9 */
    bytes.forEach(b => put(b, 8));
    const total = spec.dc * 8;
    for (let i = 0; i < 4 && bits.length < total; i++) bits.push(0);
    while (bits.length % 8) bits.push(0);

    const dc = [];
    for (let i = 0; i < bits.length; i += 8) {
      let b = 0; for (let j = 0; j < 8; j++) b = (b << 1) | bits[i + j];
      dc.push(b);
    }
    const pad = [0xEC, 0x11];
    let k = 0;
    while (dc.length < spec.dc) dc.push(pad[k++ % 2]);

    const all = dc.concat(ecc(dc, spec.ec));

    /* ---- matrix ---- */
    const n = 17 + 4 * v;
    const m = [];
    for (let r = 0; r < n; r++) m.push(new Array(n).fill(null));

    function probe(row, col) {
      for (let r = -1; r <= 7; r++) for (let c = -1; c <= 7; c++) {
        const rr = row + r, cc = col + c;
        if (rr < 0 || cc < 0 || rr >= n || cc >= n) continue;
        m[rr][cc] = (r >= 0 && r <= 6 && (c === 0 || c === 6)) ||
                    (c >= 0 && c <= 6 && (r === 0 || r === 6)) ||
                    (r >= 2 && r <= 4 && c >= 2 && c <= 4);
      }
    }
    probe(0, 0); probe(n - 7, 0); probe(0, n - 7);

    spec.ap.forEach(a => spec.ap.forEach(b => {
      if (m[a][b] !== null) return;
      for (let r = -2; r <= 2; r++) for (let c = -2; c <= 2; c++)
        m[a + r][b + c] = (Math.abs(r) === 2 || Math.abs(c) === 2 || (r === 0 && c === 0));
    }));

    for (let i = 8; i < n - 8; i++) {
      const d = i % 2 === 0;
      if (m[i][6] === null) m[i][6] = d;
      if (m[6][i] === null) m[6][i] = d;
    }

    /* format info */
    for (let i = 0; i < 15; i++) {
      const bit = ((FORMAT_L_MASK0 >> i) & 1) === 1;
      if (i < 6) m[i][8] = bit;
      else if (i < 8) m[i + 1][8] = bit;
      else m[n - 15 + i][8] = bit;
      if (i < 8) m[8][n - i - 1] = bit;
      else if (i < 9) m[8][15 - i] = bit;
      else m[8][14 - i] = bit;
    }
    m[n - 8][8] = true; /* dark module */

    /* data, masked with pattern 0 */
    let inc = -1, row = n - 1, bi = 7, byi = 0;
    for (let col = n - 1; col > 0; col -= 2) {
      if (col === 6) col--;
      for (;;) {
        for (let c = 0; c < 2; c++) {
          if (m[row][col - c] !== null) continue;
          let dark = false;
          if (byi < all.length) dark = ((all[byi] >>> bi) & 1) === 1;
          if ((row + col - c) % 2 === 0) dark = !dark;
          m[row][col - c] = dark;
          if (--bi === -1) { byi++; bi = 7; }
        }
        row += inc;
        if (row < 0 || row >= n) { row -= inc; inc = -inc; break; }
      }
    }
    return m;
  }

  /** Draw a QR for `text` into a canvas element. */
  function draw(canvas, text, opts) {
    const o = opts || {};
    const m = build(text);
    if (!m) return false;
    const n = m.length, quiet = o.quiet == null ? 4 : o.quiet;
    const px = Math.max(1, Math.floor((o.size || 180) / (n + quiet * 2)));
    const side = px * (n + quiet * 2);
    const dpr = root.devicePixelRatio || 1;
    canvas.width = side * dpr; canvas.height = side * dpr;
    canvas.style.width = side + 'px'; canvas.style.height = side + 'px';
    const g = canvas.getContext('2d');
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    g.fillStyle = o.light || '#FFFFFF';
    g.fillRect(0, 0, side, side);
    g.fillStyle = o.dark || '#141413';
    for (let r = 0; r < n; r++) for (let c = 0; c < n; c++)
      if (m[r][c]) g.fillRect((c + quiet) * px, (r + quiet) * px, px, px);
    return true;
  }

  root.KEMEKOL_QR = { build, draw };
})(window);
