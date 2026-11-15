/* KEMEKOL — trilingual search (Fidel · Franco-Amharic · English). */
(function (root) {
  'use strict';

  const D = root.KEMEKOL_DATA;
  const I = root.I18N;

  /* Normalize Latin text: lowercase, strip apostrophes/punctuation, fold
     common Franco-Amharic spelling variants so "Wudase"≈"Widasie"≈"Wdase". */
  function nLat(s) {
    return String(s || '')
      .toLowerCase()
      .replace(/[‘’'`]/g, '')
      .replace(/[^a-z0-9 ]+/g, ' ')
      .replace(/ph/g, 'f')
      .replace(/ts|tz/g, 's')
      .replace(/kh|q/g, 'k')
      .replace(/ie|ee|ea/g, 'i')
      .replace(/ou|oo|uu/g, 'u')
      .replace(/([a-z])\1+/g, '$1')
      .replace(/\s+/g, ' ')
      .trim();
  }

  /* Fidel: drop punctuation marks, keep syllables. */
  function nEth(s) {
    return String(s || '').replace(/[፠-፨\s]+/g, ' ').trim();
  }

  const hasEth = (s) => /[ሀ-፿]/.test(s);
  function norm(s) { return hasEth(s) ? nEth(s) : nLat(s); }

  /* Consonant skeleton: Franco-Amharic spells the same word with different
     vowels ("Wudase" / "Widasie" / "Wdase"), so match on consonants alone. */
  function skel(s) {
    if (hasEth(s)) return '';
    return nLat(s).replace(/[aeiouy]/g, '').replace(/\s+/g, ' ').trim();
  }

  const INDEX = [];

  function add(entry) {
    const bag = [], sk = [];
    (entry.terms || []).forEach(t => {
      if (!t) return;
      bag.push(norm(t));
      const k = skel(t); if (k) sk.push(k);
    });
    entry._t = bag;
    entry._k = sk;
    INDEX.push(entry);
  }

  function build() {
    if (!D) return;

    /* Apps */
    (D.apps || []).forEach(a => add({
      kind: 'app', id: a.id, page: 'apps',
      title: a.name, sub: a.tag,
      terms: [a.name.en, a.name.am, a.id.replace(/-/g, ' ')].concat(a.keys || [])
    }));

    /* Bible books */
    (D.books || []).forEach(b => add({
      kind: 'book', id: b.id, page: 'bible-81',
      title: b.name, sub: b.summary,
      terms: [b.name.en, b.name.am, b.tr, 'bible 81', 'መጽሐፍ ቅዱስ']
    }));

    /* Wudase Mariam days */
    (D.days || []).forEach(d => add({
      kind: 'day', id: d.id, page: 'mezgebe-tselot',
      title: { en: 'Wudase Mariam — ' + d.en, am: 'ውዳሴ ማርያም — ' + d.am },
      sub: d.theme,
      terms: ['Wudase Mariam ' + d.en, 'ውዳሴ ማርያም ' + d.am, d.gz, d.ti, d.en, d.am]
    }));

    /* Prayers */
    (D.prayers || []).forEach(p => add({
      kind: 'prayer', id: p.id, page: 'mezgebe-tselot',
      title: p.name, sub: p.desc,
      terms: [p.name.en, p.name.am, p.tr, 'mezgebe tselot', 'መዝገበ ጸሎት']
    }));

    /* Church fathers */
    (D.fathers || []).forEach(f => add({
      kind: 'father', id: f.id, page: 'haymanote-abew',
      title: f.name, sub: f.role,
      terms: [f.name.en, f.name.am, f.tr, 'haymanote abew', 'ሃይማኖተ አበው']
    }));

    /* Fasts */
    (D.fasts || []).forEach(f => add({
      kind: 'fast', id: f.id, page: 'daily-gitsawe',
      title: f.name, sub: f.rule,
      terms: [f.name.en, f.name.am, f.tr, 'fasting', 'ጾም', 'አጽዋማት']
    }));

    /* Pillars & sacraments */
    (D.pillars || []).forEach(p => add({
      kind: 'pillar', id: p.id, page: 'christian-life',
      title: p.name, sub: p.body,
      terms: [p.name.en, p.name.am, p.tr, 'አዕማደ ምሥጢር', 'pillars of mystery']
    }));
    (D.sacraments || []).forEach(p => add({
      kind: 'sacrament', id: p.id, page: 'christian-life',
      title: p.name, sub: p.body,
      terms: [p.name.en, p.name.am, p.tr, 'ምሥጢራተ ቤተክርስቲያን', 'sacraments']
    }));

    /* FAQ */
    (D.faq || []).forEach(f => add({
      kind: 'faq', id: f.id, page: 'christian-life',
      title: f.q, sub: f.a,
      terms: [f.q.en, f.q.am]
    }));

    /* Christian names */
    (D.names || []).forEach(n => add({
      kind: 'name', id: n.id, page: 'christian-life',
      title: { en: n.gz + ' · ' + n.tr, am: n.gz },
      sub: { en: n.en, am: n.am },
      terms: [n.gz, n.tr, n.en, n.am, 'christian name', 'የክርስትና ስም']
    }));

    /* Products */
    (D.products || []).forEach(p => add({
      kind: 'product', id: p.id, page: 'ecommerce',
      title: p.name, sub: p.spec,
      terms: [p.name.en, p.name.am]
    }));

    /* Static pages */
    [
      ['home', 'Home', 'መነሻ', 'kemekol software ethiopia'],
      ['bible-81', 'Ethiopian Orthodox Bible 81 books', 'መጽሐፍ ቅዱስ ፹፩', 'canon enoch jubilees meqabyan'],
      ['mezgebe-tselot', 'Mezgebe Tselot — prayer treasury', 'መዝገበ ጸሎት', 'wudase mariam kidase kidasie liturgy tselot anqetse'],
      ['haymanote-abew', 'Haymanote Abew — faith of the fathers', 'ሃይማኖተ አበው', 'church fathers patristic haymanot abew'],
      ['daily-gitsawe', 'Daily Gitsawe & Sinksar', 'ዕለታዊ ግጻዌ እና ስንክሳር', 'gitsawe sinksar bahire hasab readings kidase'],
      ['christian-life', 'Christian life, names & Q&A', 'የክርስትና ሕይወት', 'baptism christian names pillars sacraments faq'],
      ['apps', 'Kemekol apps on Google Play', 'መተግበሪያዎች', 'android play store download apps'],
      ['ecommerce', 'Kemekol store', 'ከመኮል ገበያ', 'books icons incense shop store'],
      ['services', 'Software & digitization services', 'የሶፍትዌር እና ዲጂታይዜሽን አገልግሎቶች', 'web mobile ocr manuscript digitization'],
      ['about', 'About Kemekol', 'ስለ ከመኮል', 'company addis ababa engineering'],
      ['contact', 'Contact Kemekol', 'ያግኙን', 'email inquiry partnership']
    ].forEach(([page, en, am, kw]) => add({
      kind: 'page', id: page, page,
      title: { en, am }, sub: { en: 'Page', am: 'ገጽ' },
      terms: [en, am, kw]
    }));
  }

  const KIND = {
    app:        { en: 'App', am: 'መተግበሪያ' },
    book:       { en: 'Bible book', am: 'መጽሐፍ' },
    day:        { en: 'Wudase Mariam', am: 'ውዳሴ ማርያም' },
    prayer:     { en: 'Prayer', am: 'ጸሎት' },
    father:     { en: 'Church father', am: 'አባት' },
    fast:       { en: 'Fast', am: 'ጾም' },
    pillar:     { en: 'Pillar of mystery', am: 'አዕማደ ምሥጢር' },
    sacrament:  { en: 'Sacrament', am: 'ምሥጢር' },
    faq:        { en: 'Q&A', am: 'ጥያቄና መልስ' },
    name:       { en: 'Christian name', am: 'የክርስትና ስም' },
    product:    { en: 'Store', am: 'ገበያ' },
    page:       { en: 'Page', am: 'ገጽ' }
  };

  const WEIGHT = { app: 6, page: 5, book: 4, day: 4, prayer: 4, father: 3, fast: 3, faq: 3, pillar: 2, sacrament: 2, product: 2, name: 1 };

  function query(q, limit) {
    const raw = String(q || '').trim();
    if (raw.length < 2) return [];
    const nq = norm(raw);
    if (!nq) return [];
    const kq = skel(raw);
    const out = [];
    for (let i = 0; i < INDEX.length; i++) {
      const e = INDEX[i];
      let best = 0;
      for (let j = 0; j < e._t.length; j++) {
        const t = e._t[j];
        if (!t) continue;
        if (t === nq) { best = Math.max(best, 100); break; }
        if (t.indexOf(nq) === 0) best = Math.max(best, 70);
        else if (t.indexOf(' ' + nq) > -1) best = Math.max(best, 55);
        else if (t.indexOf(nq) > -1) best = Math.max(best, 35);
      }
      /* Franco-Amharic fallback: same consonants, different vowels. */
      if (!best && kq.length > 1) {
        for (let j = 0; j < e._k.length; j++) {
          const k = e._k[j];
          if (k === kq) { best = 60; break; }
          if (k.indexOf(kq) === 0) best = Math.max(best, 45);
          else if (k.indexOf(kq) > -1) best = Math.max(best, 25);
        }
      }
      if (best) out.push({ e, s: best + (WEIGHT[e.kind] || 0) });
    }
    out.sort((a, b) => b.s - a.s);
    return out.slice(0, limit || 10).map(x => x.e);
  }

  root.KEMEKOL_SEARCH = {
    build,
    query,
    kindLabel(k) { return I.t(KIND[k] || { en: k, am: k }); },
    get size() { return INDEX.length; }
  };
})(window);
