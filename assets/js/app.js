/* KEMEKOL — router, renderers, reader drawer, search UI, controls. */
(function (root) {
  'use strict';

  const D = root.KEMEKOL_DATA, I = root.I18N, S = root.KEMEKOL_SEARCH, QR = root.KEMEKOL_QR;
  const t = (k) => I.t(k);
  const esc = (s) => String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const q = (sel, ctx) => (ctx || document).querySelector(sel);
  const qa = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));
  const byId = (id) => D.apps.find(a => a.id === id);
  const PLAY = byId('tewahedo-one').url;
  const am = () => I.lang === 'am';

  const PAGES = ['home', 'bible-81', 'mezgebe-tselot', 'haymanote-abew', 'daily-gitsawe',
    'christian-life', 'ecommerce', 'apps', 'services', 'about', 'contact'];

  /* ---------- shared partials ---------- */

  /* Iridescent tail: gradient-clip everything after the last comma, as the
     Stitch hero does ("…, engineered for the phone in your hand."). */
  function gradTail(s) {
    const str = String(s || '');
    const i = Math.max(str.lastIndexOf(','), str.lastIndexOf('፣'));
    if (i < 1 || i > str.length - 4) return esc(str);
    return esc(str.slice(0, i + 1)) + ' <em>' + esc(str.slice(i + 1).trim()) + '</em>';
  }

  function head(eyebrow, title, lead) {
    return `<div class="sec-head">
      <p class="eyebrow">${esc(eyebrow)}</p>
      <h1 class="h-lg">${esc(title)}</h1>
      ${lead ? `<p class="lead">${esc(lead)}</p>` : ''}</div>`;
  }

  function playBtn(url, label) {
    return `<a class="btn btn-play" href="${esc(url)}" target="_blank" rel="noopener">${esc(label || t('getApp'))}</a>`;
  }

  function appCard(a) {
    const icon = root.KEMEKOL_ICONS ? root.KEMEKOL_ICONS.appIcon(a.id, a.glyph) : esc(a.glyph);
    return `<article class="card app-card">
      <div class="card-head">
        <div class="glyph tone-${esc(a.tone)}">${icon}</div>
        <div class="app-card-titles">
          <h3 class="h-md">${esc(t(a.name))}</h3>
          <p class="muted">${esc(t(a.tag))}</p>
        </div>
      </div>
      <div class="badge-row">
        <span class="badge badge-gold">★ ${esc(a.rating)}</span>
        <span class="badge">${esc(a.installs)} ${esc(t('installs'))}</span>
      </div>
      <div class="btn-row">
        ${playBtn(a.url, t('openPlay'))}
        <button type="button" class="btn btn-ghost btn-sm" data-open="app:${esc(a.id)}">${esc(t('readMore'))}</button>
      </div></article>`;
  }

  function cardGrid(items, cols) {
    return `<div class="grid grid-${cols || 3}">${items.join('')}</div>`;
  }

  /* ---------- page renderers ---------- */

  const R = {};

  R.home = function () {
    const f = byId('tewahedo-one');
    const flagIcon = root.KEMEKOL_ICONS ? root.KEMEKOL_ICONS.appIcon(f.id, f.glyph) : esc(f.glyph);
    const tiles = [
      ['daily-gitsawe', 'gitsawe', { en: 'Daily Gitsawe readings', am: 'ዕለታዊ ግጻዌ' }],
      ['daily-gitsawe', 'sinksar', { en: "Today's Sinksar", am: 'የዕለቱ ስንክሳር' }],
      ['bible-81', 'bible', { en: '81-Book Bible', am: 'መጽሐፍ ቅዱስ ፹፩' }],
      ['mezgebe-tselot', 'prayer', { en: 'Wudase Mariam by day', am: 'ውዳሴ ማርያም በዕለት' }],
      ['daily-gitsawe', 'fast', { en: 'Fasting calendar', am: 'የአጽዋማት ቀመር' }],
      ['christian-life', 'qa', { en: 'Orthodox Q&A', am: 'ጥያቄና መልስ' }]
    ].map(([page, iconKey, lbl]) => `<a class="tile" href="#${page}">
        <span class="glyph glyph-sm tone-ink">${root.KEMEKOL_ICONS ? root.KEMEKOL_ICONS.svg(iconKey, 'tile-icon', 22) : ''}</span>
        <span class="tile-label">${esc(t(lbl))}</span>
        <span class="tile-arrow" aria-hidden="true">→</span>
      </a>`);

    const svcIcons = ['services', 'apps', 'fathers', 'about'];

    return `<div class="band hero">
      <div class="shell hero-grid">
        <div>
          <p class="eyebrow">${esc(t('homeEyebrow'))}</p>
          <h1 class="h-xl">${gradTail(t('homeTitle'))}</h1>
          <p class="lead">${esc(t('homeLead'))}</p>
          <div class="btn-row">
            ${playBtn(PLAY)}
            <a class="btn btn-ghost" href="#services">${esc(t('forOrgs'))}</a>
          </div>
        </div>
        <aside class="flagship">
          <div class="flagship-top">
            <div class="glyph tone-crimson">${flagIcon}</div>
            <div>
              <p class="eyebrow">${esc(t('flagship'))}</p>
              <h2 class="h-md">${esc(f.store)}</h2>
              <p class="rating"><span class="stars">★★★★★</span> ${esc(f.rating)} · ${esc(f.installs)}</p>
            </div>
          </div>
          <ul class="flagship-body">${f.features.map(x => `<li>${esc(t(x))}</li>`).join('')}</ul>
          ${playBtn(f.url)}
          <div class="term">
            <div class="term-bar">kemekol-runtime :: offline-first</div>
            <div class="term-body"><pre><span class="k">platform</span>  <span class="v">Android · Web</span>
<span class="k">library</span>   <span class="v">81 books · ${esc(String((D.prayers || []).length))} prayers</span>
<span class="k">network</span>   <span class="v">not required</span>
<span class="k">latency</span>   <span class="v">0 ms</span></pre></div>
          </div>
        </aside>
      </div></div>

      <div class="band band-muted"><div class="shell sec">
        ${head(t('searchToday'), t('searchToday'), t('searchTodaySub'))}
        <div class="grid grid-3">${tiles.join('')}</div>
      </div></div>

      <div class="band band-ink"><div class="shell sec">
        <p class="eyebrow">${esc(t('impactTitle'))}</p>
        <div class="impact">
          <div><strong>1.5M+</strong><span>${esc(t('stat1'))}</span></div>
          <div><strong>4.9–5.0★</strong><span>${esc(t('stat2'))}</span></div>
          <div><strong>81</strong><span>${esc(t('stat3'))}</span></div>
          <div><strong>${esc(t('stat4v'))}</strong><span>${esc(t('stat4'))}</span></div>
        </div>
      </div></div>

      <div class="band"><div class="shell sec">
        ${head(t('nav_apps'), t('featuredApps'), t('appsLead'))}
        ${cardGrid(D.apps.slice(0, 3).map(appCard), 3)}
        <div class="btn-row"><a class="btn btn-ghost" href="#apps">${esc(t('nav_apps'))}</a></div>
      </div></div>

      <div class="band band-muted"><div class="shell sec">
        ${head(t('nav_services'), t('forOrgs'), t('forOrgsLead'))}
        ${cardGrid([1, 2, 3, 4].map(i => `<article class="card service-card">
          <div class="card-head">
            <div class="glyph glyph-sm tone-crimson">${root.KEMEKOL_ICONS ? root.KEMEKOL_ICONS.svg(svcIcons[i - 1], 'svc-icon', 22) : ''}</div>
            <span class="card-num">0${i}</span>
          </div>
          <h3 class="h-md">${esc(t('svc' + i))}</h3>
          <p class="muted">${esc(t('svc' + i + 'b'))}</p></article>`), 4)}
        <div class="btn-row"><a class="btn btn-primary" href="#contact">${esc(t('discuss'))}</a></div>
      </div></div>`;
  };

  R['bible-81'] = function () {
    const groups = ['law', 'history', 'wisdom', 'prophets', 'gospels', 'acts', 'epistles', 'revelation', 'order'];
    const gkey = (g) => 'group' + g.charAt(0).toUpperCase() + g.slice(1);
    const chips = [`<button type="button" class="chip is-active" data-filter="all">${esc(t('all'))}</button>`,
      `<button type="button" class="chip" data-filter="ot">${esc(t('ot'))}</button>`,
      `<button type="button" class="chip" data-filter="nt">${esc(t('nt'))}</button>`,
      `<button type="button" class="chip" data-filter="uniq">${esc(t('ethUnique'))}</button>`]
      .concat(groups.map(g => `<button type="button" class="chip" data-filter="g:${g}">${esc(t(gkey(g)))}</button>`));

    const rows = D.books.map((b, i) => `<button type="button" class="book" data-open="book:${esc(b.id)}"
        data-testament="${esc(b.testament)}" data-group="${esc(b.group)}" data-uniq="${b.uniq ? '1' : '0'}">
        <span class="book-ord">${i + 1}</span>
        <span>
          <span class="book-name">${esc(t(b.name))}</span>
          <span class="book-sub">${esc(b.tr)} · ${esc(t(b.summary)).slice(0, 90)}</span>
        </span>
        <span class="book-ch">${b.chapters} ${esc(t('chapters'))}</span>
      </button>`);

    return `<div class="band"><div class="shell sec">
      ${head('መጽሐፍ ቅዱስ ፹፩', t('bibleTitle'), t('bibleLead'))}
      <div class="toolbar">
        <div class="chips" id="bookChips">${chips.join('')}</div>
        <p class="muted" id="bookCount">81</p>
      </div>
      <div class="booklist" id="bookList">${rows.join('')}</div>
    </div></div>

    <div class="sticky-cta">
      <p>${esc(t('bibleCta'))}</p>
      ${playBtn(PLAY)}
    </div>`;
  };

  R['mezgebe-tselot'] = function () {
    const days = D.days.map((d, i) => `<button type="button" class="day${i === 0 ? ' is-active' : ''}" data-day="${esc(d.id)}">
      <b lang="am">${esc(d.am)}</b><span>${esc(d.en)}</span></button>`);
    return `<div class="band"><div class="shell sec">
      ${head('መዝገበ ጸሎት', t('prayerTitle'), t('prayerLead'))}
      <div class="sec-head"><h2 class="h-md">${esc(t('chooseDay'))}</h2><p class="muted">${esc(t('chooseDaySub'))}</p></div>
      <div class="dayrow" id="dayRow">${days.join('')}</div>
      <div id="dayPanel"></div>
    </div></div>

    <div class="band band-muted"><div class="shell sec">
      ${head(t('dailyPrayers'), t('dailyPrayers'))}
      ${cardGrid(D.prayers.map(p => `<article class="card">
        <h3 class="h-md">${esc(t(p.name))}</h3>
        <p class="muted">${esc(p.tr)}</p>
        <p>${esc(t(p.desc))}</p>
        <div class="btn-row">
          <button type="button" class="btn btn-ghost btn-sm" data-open="prayer:${esc(p.id)}">${esc(t('readMore'))}</button>
        </div></article>`), 3)}
    </div></div>`;
  };

  function dayPanel(id) {
    const d = D.days.find(x => x.id === id) || D.days[0];
    return `<div class="card card-flush">
      <p class="eyebrow">${esc(t(d.theme))}</p>
      <h3 class="h-md">${esc(am() ? 'ውዳሴ ማርያም ' + d.am : 'Wudase Mariam — ' + d.en)} · <span lang="gez">${esc(d.gz)}</span></h3>
      <p class="muted">${esc(t('inAppNote'))}</p>
      <div class="btn-row">${playBtn(PLAY)}
        <button type="button" class="btn btn-ghost btn-sm" data-open="day:${esc(d.id)}">${esc(t('readMore'))}</button>
      </div></div>`;
  }

  R['haymanote-abew'] = function () {
    const ai = byId('tewahedo-ai');
    return `<div class="band"><div class="shell sec">
      ${head('ሃይማኖተ አበው', t('fathersTitle'), t('fathersLead'))}
      ${cardGrid(D.fathers.map(f => `<article class="card">
        <p class="eyebrow">${esc(f.era)}</p>
        <h3 class="h-md">${esc(t(f.name))}</h3>
        <p class="muted">${esc(t(f.role))}</p>
        <div class="verse"><p>${esc(t(f.quote))}</p><p class="ref">${esc(f.src)}</p></div>
        <div class="badge-row"><span class="badge badge-crimson">${esc(t(f.topic))}</span></div>
        <div class="btn-row">
          <button type="button" class="btn btn-ghost btn-sm" data-open="father:${esc(f.id)}">${esc(t('readMore'))}</button>
        </div></article>`), 2)}
    </div></div>

    <div class="band band-crimson"><div class="shell sec">
      ${head(t('aiPreview'), t('aiPreview'), t('aiPreviewLead'))}
      <div class="btn-row">${playBtn(ai.url, t('openPlay'))}</div>
    </div></div>`;
  };

  R['daily-gitsawe'] = function () {
    const day = new Date().getDate();
    const commem = D.monthly[((day - 1) % 30) + 1];
    const slots = D.readingSlots.map(s => `<tr>
      <th scope="row">${esc(am() ? s.am : s.en)}<br><span class="muted" lang="gez">${esc(s.gz)}</span></th>
      <td>${esc(t(s.note))}</td></tr>`);

    return `<div class="band"><div class="shell sec">
      ${head('ግጻዌ · ስንክሳር · ባሕረ ሐሳብ', t('gitsaweTitle'), t('gitsaweLead'))}
      <div class="grid grid-2">
        <article class="card">
          <p class="eyebrow">${esc(t('readingsToday'))}</p>
          <div class="tbl-wrap"><table><tbody>${slots.join('')}</tbody></table></div>
          <p class="muted">${esc(t('readingsNote'))}</p>
          ${playBtn(byId('gitsawe').url)}
        </article>
        <article class="card">
          <div class="card-head">
            <div class="glyph glyph-sm tone-gold">${root.KEMEKOL_ICONS ? root.KEMEKOL_ICONS.svg('sinksar', 'commem-icon', 22) : ''}</div>
            <div>
              <p class="eyebrow">${esc(t('commemToday'))}</p>
              <h3 class="h-md">${esc(t(commem))}</h3>
            </div>
          </div>
          <p class="muted">${esc(t('today'))}</p>
          <div class="btn-row">${playBtn(byId('gitsawe').url, t('openPlay'))}</div>
        </article>
      </div>
    </div></div>

    <div class="band band-muted"><div class="shell sec">
      ${head(t('fastsTitle'), t('fastsTitle'))}
      ${cardGrid(D.fasts.map(f => `<article class="card">
        <div class="card-head">
          <div class="glyph glyph-sm tone-gold">${root.KEMEKOL_ICONS ? root.KEMEKOL_ICONS.svg('fast', '', 20) : ''}</div>
          <div>
            <h3 class="h-md">${esc(t(f.name))}</h3>
            <p class="muted">${esc(f.tr)}</p>
          </div>
        </div>
        ${f.days ? `<div class="badge-row"><span class="badge badge-gold">${f.days} ${esc(t('fastDays'))}</span></div>` : ''}
        <p>${esc(t(f.rule))}</p>
        <div class="btn-row">
          <button type="button" class="btn btn-ghost btn-sm" data-open="fast:${esc(f.id)}">${esc(t('readMore'))}</button>
        </div></article>`), 3)}
    </div></div>

    <div class="band"><div class="shell sec">
      ${head(t('monthlyTitle'), t('monthlyTitle'))}
      <div class="booklist">${Object.keys(D.monthly).map(k => `<div class="book">
        <span class="book-ord">${esc(k)}</span>
        <span><span class="book-name">${esc(t(D.monthly[k]))}</span></span>
        <span class="book-ch"></span></div>`).join('')}</div>
    </div></div>`;
  };

  R['christian-life'] = function () {
    const app = byId('amde-haymanot');
    return `<div class="band"><div class="shell sec">
      ${head('ዓምደ ሃይማኖት', t('lifeTitle'), t('lifeLead'))}
      <div class="btn-row">${playBtn(app.url)}</div>
    </div></div>

    <div class="band band-muted"><div class="shell sec">
      ${head(t('pillarsTitle'), t('pillarsTitle'))}
      ${cardGrid(D.pillars.map((p, i) => `<article class="card">
        <div class="card-head">
          <div class="glyph glyph-sm tone-crimson">${root.KEMEKOL_ICONS ? root.KEMEKOL_ICONS.svg('pillar', '', 20) : ''}</div>
          <span class="card-num">0${i + 1}</span>
        </div>
        <h3 class="h-md">${esc(t(p.name))}</h3><p class="muted">${esc(p.tr)}</p><p>${esc(t(p.body))}</p>
      </article>`), 3)}
      <div class="sec-head"><h2 class="h-md">${esc(t('sacramentsTitle'))}</h2></div>
      ${cardGrid(D.sacraments.map((p, i) => `<article class="card">
        <div class="card-head">
          <div class="glyph glyph-sm tone-gold">${root.KEMEKOL_ICONS ? root.KEMEKOL_ICONS.svg('censer', '', 20) : ''}</div>
          <span class="card-num">0${i + 1}</span>
        </div>
        <h3 class="h-md">${esc(t(p.name))}</h3><p class="muted">${esc(p.tr)}</p><p>${esc(t(p.body))}</p>
      </article>`), 3)}
    </div></div>

    <div class="band"><div class="shell sec">
      ${head(t('faqTitle'), t('faqTitle'))}
      <div class="acc" id="faqAcc">${D.faq.map(f => `<div class="acc-item">
        <button type="button" class="acc-q" aria-expanded="false">${esc(t(f.q))}<i>+</i></button>
        <div class="acc-a" hidden><p>${esc(t(f.a))}</p></div></div>`).join('')}</div>
    </div></div>

    <div class="band band-muted"><div class="shell sec">
      ${head(t('namesTitle'), t('namesTitle'), t('namesLead'))}
      <div class="toolbar">
        <div class="chips" id="nameChips">
          <button type="button" class="chip is-active" data-g="all">${esc(t('all'))}</button>
          <button type="button" class="chip" data-g="m">${esc(t('namesM'))}</button>
          <button type="button" class="chip" data-g="f">${esc(t('namesF'))}</button>
        </div>
        <input type="search" id="nameFilter" placeholder="${esc(t('filterPh'))}" data-i18n-ph="filterPh" aria-label="${esc(t('filterPh'))}">
      </div>
      <div class="names" id="nameGrid">${D.names.map(n => `<button type="button" class="name-cell"
        data-g="${esc(n.g)}" data-k="${esc((n.tr + ' ' + n.gz + ' ' + n.en).toLowerCase())}"
        data-open="name:${esc(n.id)}">
        <b lang="gez">${esc(n.gz)}</b><span>${esc(n.tr)}</span>
        <span class="name-g">${esc(am() ? n.am : n.en)}</span></button>`).join('')}</div>
    </div></div>`;
  };

  R.ecommerce = function () {
    const prodIcons = {
      'cross-wood': 'cross',
      'tewahedo-one-card': 'store',
      'brana-notebook': 'bible',
      'mequamia': 'pillar',
      'tewahedo-ai-sub': 'ai'
    };
    const chips = [`<button type="button" class="chip is-active" data-cat="all">${esc(t('all'))}</button>`]
      .concat(D.productCats.map(c => `<button type="button" class="chip" data-cat="${esc(c.id)}">${esc(am() ? c.am : c.en)}</button>`));
    return `<div class="band"><div class="shell sec">
      ${head('የገበያ ማዕከል', t('storeTitle'), t('storeLead'))}
      <div class="toolbar"><div class="chips" id="catChips">${chips.join('')}</div></div>
      <div class="grid grid-4" id="prodGrid">${D.products.map(p => {
        const iconKey = prodIcons[p.id] || 'store';
        const pIcon = root.KEMEKOL_ICONS ? root.KEMEKOL_ICONS.svg(iconKey, 'prod-icon', 22) : esc(p.glyph);
        return `<article class="card" data-cat="${esc(p.cat)}">
          <div class="glyph glyph-sm tone-gold">${pIcon}</div>
          <h3 class="h-md">${esc(t(p.name))}</h3>
          <p class="muted">${esc(t(p.spec))}</p>
          ${playBtn(PLAY, t('orderInApp'))}
        </article>`;
      }).join('')}</div>
    </div></div>`;
  };

  R.apps = function () {
    const f = byId('tewahedo-one');
    return `<div class="band"><div class="shell sec">
      ${head('መተግበሪያዎቻችን', t('appsTitle'), t('appsLead'))}
      ${cardGrid(D.apps.map(appCard), 3)}
    </div></div>

    <div class="band band-muted"><div class="shell sec showcase">
      <div class="showcase-copy">
        <p class="eyebrow">${esc(t('flagship'))}</p>
        <h2 class="h-lg">${esc(f.store)}</h2>
        <p class="lead">${esc(t(f.tag))}</p>
        <ul class="flagship-body">${f.features.map(x => `<li>${esc(t(x))}</li>`).join('')}</ul>
        ${playBtn(f.url)}
      </div>
      <figure class="shot">
        <img src="assets/img/tewahedo-one-screen.jpg" alt="${esc(f.store)} app screen" width="376" height="815" loading="lazy" decoding="async">
      </figure>
    </div></div>`;
  };

  R.services = function () {
    const svcIcons = ['services', 'apps', 'fathers', 'about'];
    return `<div class="band"><div class="shell sec">
      ${head('አገልግሎቶች', t('servicesTitle'), t('servicesLead'))}
      ${cardGrid([1, 2, 3, 4].map(i => `<article class="card">
        <div class="card-head">
          <div class="glyph glyph-sm tone-crimson">${root.KEMEKOL_ICONS ? root.KEMEKOL_ICONS.svg(svcIcons[i - 1], 'svc-icon', 22) : ''}</div>
          <span class="card-num">0${i}</span>
        </div>
        <h3 class="h-md">${esc(t('svc' + i))}</h3>
        <p>${esc(t('svc' + i + 'b'))}</p></article>`), 2)}
    </div></div>

    <div class="band band-muted"><div class="shell sec">
      ${head(t('engageTitle'), t('engageTitle'))}
      ${cardGrid([1, 2, 3, 4].map(i => `<article class="card">
        <span class="card-num">0${i}</span>
        <h3 class="h-md">${esc(t('step' + i))}</h3>
        <p class="muted">${esc(t('step' + i + 'b'))}</p></article>`), 4)}
      <div class="btn-row"><a class="btn btn-primary" href="#contact">${esc(t('discuss'))}</a></div>
    </div></div>`;
  };

  R.about = function () {
    return `<div class="band"><div class="shell sec">
      ${head('ስለ እኛ', t('aboutTitle'), t('aboutLead'))}
      <div class="card card-flush">
        <h2 class="h-md">${esc(t('missionTitle'))}</h2>
        <p class="lead">${esc(t('missionBody'))}</p>
      </div>
    </div></div>

    <div class="band band-muted"><div class="shell sec">
      ${head(t('pillarsEng'), t('pillarsEng'))}
      ${cardGrid([1, 2, 3, 4].map(i => `<article class="card">
        <p class="card-num">0${i}</p>
        <h3 class="h-md">${esc(t('ep' + i))}</h3>
        <p class="muted">${esc(t('ep' + i + 'b'))}</p></article>`), 4)}
      <p class="muted">${esc(t('addis'))}</p>
    </div></div>`;
  };

  R.contact = function () {
    const types = ['web', 'mobile', 'digi', 'support', 'partner']
      .map(k => `<option value="${esc(t('t_' + k))}">${esc(t('t_' + k))}</option>`);
    return `<div class="band"><div class="shell sec">
      ${head('ያግኙን', t('contactTitle'), t('contactLead'))}
      <div class="grid grid-2">
        <article class="card">
          <form class="form" id="contactForm">
            <div class="field"><label for="cName">${esc(t('fName'))}</label>
              <input id="cName" name="name" type="text" required></div>
            <div class="field-2">
              <div class="field"><label for="cEmail">${esc(t('fEmail'))}</label>
                <input id="cEmail" name="email" type="email" required></div>
              <div class="field"><label for="cOrg">${esc(t('fOrg'))}</label>
                <input id="cOrg" name="org" type="text"></div>
            </div>
            <div class="field"><label for="cType">${esc(t('fType'))}</label>
              <select id="cType" name="type">${types.join('')}</select></div>
            <div class="field"><label for="cMsg">${esc(t('fMsg'))}</label>
              <textarea id="cMsg" name="msg" required></textarea></div>
            <button type="submit" class="btn btn-primary">${esc(t('fSend'))}</button>
            <p class="muted">${esc(t('fSendNote'))}</p>
          </form>
        </article>
        <article class="card">
          <p class="eyebrow">${esc(t('contactCard'))}</p>
          <div class="copy-row">
            <div class="copy-info">
              <span class="glyph glyph-sm tone-crimson">${root.KEMEKOL_ICONS ? root.KEMEKOL_ICONS.svg('contact', '', 20) : ''}</span>
              <div><p class="muted">${esc(t('emailLabel'))}</p><code>${esc(D.email)}</code></div>
            </div>
            <button type="button" class="btn btn-ghost btn-sm" data-copy="${esc(D.email)}">
              ${root.KEMEKOL_ICONS ? root.KEMEKOL_ICONS.svg('copy', 'btn-icon', 16) : ''}
              <span>${esc(t('copy'))}</span>
            </button>
          </div>
          <div class="copy-row">
            <div class="copy-info">
              <span class="glyph glyph-sm tone-gold">${root.KEMEKOL_ICONS ? root.KEMEKOL_ICONS.svg('globe', '', 20) : ''}</span>
              <div><p class="muted">${esc(t('locLabel'))}</p><code>${esc(t('addis'))}</code></div>
            </div>
          </div>
          <div class="copy-row">
            <div class="copy-info">
              <span class="glyph glyph-sm tone-green">${root.KEMEKOL_ICONS ? root.KEMEKOL_ICONS.svg('play', '', 20) : ''}</span>
              <div><p class="muted">${esc(t('playLabel'))}</p><code>${esc(t('playValue'))}</code></div>
            </div>
            <a class="btn btn-play btn-sm" href="${esc(D.developerUrl)}" target="_blank" rel="noopener">${esc(t('openPlay'))}</a>
          </div>
        </article>
      </div>
    </div></div>`;
  };

  /* ---------- reader drawer ---------- */

  const reader = q('#reader');
  let lastFocus = null;

  function readerContent(kind, id) {
    if (kind === 'app') {
      const a = byId(id); if (!a) return null;
      return { kicker: t('nav_apps'), title: t(a.name), url: a.url,
        body: `<p class="lead">${esc(t(a.tag))}</p>
          <p class="muted">★ ${esc(a.rating)} · ${esc(a.installs)} ${esc(t('installs'))}</p>
          <ul class="flagship-body">${a.features.map(x => `<li>${esc(t(x))}</li>`).join('')}</ul>` };
    }
    if (kind === 'book') {
      const b = D.books.find(x => x.id === id); if (!b) return null;
      return { kicker: t(b.testament === 'ot' ? 'ot' : 'nt') + ' · ' + b.chapters + ' ' + t('chapters'),
        title: t(b.name), url: PLAY,
        body: `<p class="muted">${esc(b.tr)}</p><p class="lead">${esc(t(b.summary))}</p>
          <p class="muted">${esc(t('bibleCta'))}</p>` };
    }
    if (kind === 'day') {
      const d = D.days.find(x => x.id === id); if (!d) return null;
      return { kicker: 'ውዳሴ ማርያም · ' + (am() ? d.am : d.en), title: am() ? 'ውዳሴ ማርያም ' + d.am : 'Wudase Mariam — ' + d.en,
        url: PLAY, body: `<p class="lead">${esc(t(d.theme))}</p><p class="muted">${esc(t('inAppNote'))}</p>` };
    }
    if (kind === 'prayer') {
      const p = D.prayers.find(x => x.id === id); if (!p) return null;
      const a = byId(p.app);
      return { kicker: 'መዝገበ ጸሎት', title: t(p.name), url: a ? a.url : PLAY,
        body: `<p class="muted">${esc(p.tr)}</p><p class="lead">${esc(t(p.desc))}</p>
          <p class="muted">${esc(t('inAppNote'))}</p>` };
    }
    if (kind === 'father') {
      const f = D.fathers.find(x => x.id === id); if (!f) return null;
      return { kicker: 'ሃይማኖተ አበው · ' + f.era, title: t(f.name), url: byId('tewahedo-ai').url,
        body: `<p class="muted">${esc(f.tr)} · ${esc(t(f.role))}</p>
          <div class="verse"><p>${esc(t(f.quote))}</p><p class="ref">${esc(f.src)}</p></div>
          <div class="badge-row"><span class="badge badge-crimson">${esc(t(f.topic))}</span></div>` };
    }
    if (kind === 'fast') {
      const f = D.fasts.find(x => x.id === id); if (!f) return null;
      return { kicker: t('fastsTitle'), title: t(f.name), url: byId('gitsawe').url,
        body: `<p class="muted">${esc(f.tr)}${f.days ? ' · ' + f.days + ' ' + t('fastDays') : ''}</p>
          <p class="lead">${esc(t(f.rule))}</p>` };
    }
    if (kind === 'name') {
      const n = D.names.find(x => x.id === id); if (!n) return null;
      return { kicker: t('namesTitle'), title: n.gz, url: byId('amde-haymanot').url,
        body: `<p class="muted">${esc(n.tr)}</p>
          <div class="parallel">
            <div><p class="eyebrow">${esc(t('english'))}</p><p>${esc(n.en)}</p></div>
            <div><p class="eyebrow">${esc(t('amharic'))}</p><p lang="am">${esc(n.am)}</p></div>
          </div>` };
    }
    if (kind === 'faq') {
      const f = D.faq.find(x => x.id === id); if (!f) return null;
      return { kicker: t('faqTitle'), title: t(f.q), url: byId('amde-haymanot').url,
        body: `<p class="lead">${esc(t(f.a))}</p>` };
    }
    if (kind === 'pillar' || kind === 'sacrament') {
      const src = kind === 'pillar' ? D.pillars : D.sacraments;
      const p = src.find(x => x.id === id); if (!p) return null;
      return { kicker: t(kind === 'pillar' ? 'pillarsTitle' : 'sacramentsTitle'), title: t(p.name),
        url: byId('amde-haymanot').url,
        body: `<p class="muted">${esc(p.tr)}</p><p class="lead">${esc(t(p.body))}</p>` };
    }
    if (kind === 'product') {
      const p = D.products.find(x => x.id === id); if (!p) return null;
      return { kicker: t('storeTitle'), title: t(p.name), url: PLAY,
        body: `<p class="lead">${esc(t(p.spec))}</p>` };
    }
    return null;
  }

  function openReader(kind, id) {
    const c = readerContent(kind, id);
    if (!c) return;
    lastFocus = document.activeElement;
    q('#readerKicker').textContent = c.kicker;
    q('#readerTitle').textContent = c.title;
    q('#readerBody').innerHTML = c.body;
    const wide = root.matchMedia('(min-width: 900px)').matches;
    q('#readerFoot').innerHTML = `
      <div class="btn-row">${playBtn(c.url, t('continueInApp'))}</div>
      ${wide ? `<div class="qr"><canvas id="readerQr" aria-hidden="true"></canvas>
        <p class="muted">${esc(t('scanToInstall'))}</p></div>` : ''}`;
    if (wide && QR) {
      const cv = q('#readerQr');
      const cs = getComputedStyle(document.documentElement);
      QR.draw(cv, c.url, { size: 168, dark: cs.getPropertyValue('--text-main').trim() || '#141413',
        light: cs.getPropertyValue('--bg-card').trim() || '#FFFFFF' });
    }
    reader.hidden = false;
    document.body.style.overflow = 'hidden';
    const btn = q('[data-reader-close]', reader);
    if (btn) btn.focus();
  }

  function closeReader() {
    reader.hidden = true;
    document.body.style.overflow = '';
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  /* ---------- search UI ---------- */

  let cursor = -1, hits = [];

  function renderSearch(list) {
    const box = q('#searchResults');
    if (!box) return;
    if (!list.length) {
      box.innerHTML = `<p class="search-empty">${esc(t('noResults'))}</p>`;
      box.hidden = false; return;
    }
    box.innerHTML = list.map((e, i) => `<button type="button" class="sr-row${i === cursor ? ' is-cursor' : ''}"
      data-si="${i}">
      <span class="sr-title">${esc(t(e.title))}</span>
      <span class="sr-sub">${esc(t(e.sub)).slice(0, 110)}</span>
      <span class="sr-kind">${esc(S.kindLabel(e.kind))}</span></button>`).join('');
    box.hidden = false;
  }

  function go(entry) {
    const box = q('#searchResults');
    if (box) box.hidden = true;
    if (entry.kind === 'page') { location.hash = '#' + entry.page; return; }
    location.hash = '#' + entry.page;
    setTimeout(() => openReader(entry.kind, entry.id), 60);
  }

  function wireSearch() {
    const input = q('#searchInput'), form = q('#searchForm'), box = q('#searchResults');
    if (!input) return;
    input.addEventListener('input', () => {
      hits = S.query(input.value, 10); cursor = -1;
      if (input.value.trim().length < 2) { box.hidden = true; return; }
      renderSearch(hits);
    });
    input.addEventListener('keydown', (e) => {
      if (!hits.length) return;
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        cursor += (e.key === 'ArrowDown' ? 1 : -1);
        if (cursor > hits.length - 1) cursor = 0;
        if (cursor < 0) cursor = hits.length - 1;
        renderSearch(hits);
      } else if (e.key === 'Escape') { box.hidden = true; }
    });
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const pick = hits[cursor > -1 ? cursor : 0];
      if (pick) go(pick);
    });
    box.addEventListener('click', (e) => {
      const row = e.target.closest('[data-si]');
      if (row) go(hits[+row.getAttribute('data-si')]);
    });
  }

  /* Registered once in init() so listeners don't pile up on every re-render. */
  function wireSearchDismiss() {
    document.addEventListener('click', (e) => {
      const box = q('#searchResults');
      if (box && !e.target.closest('.search-wrap')) box.hidden = true;
    });
  }

  /* ---------- filters / page wiring ---------- */

  function wirePage(page) {
    if (page === 'bible-81') {
      const chips = q('#bookChips'), list = q('#bookList'), count = q('#bookCount');
      chips.addEventListener('click', (e) => {
        const c = e.target.closest('.chip'); if (!c) return;
        qa('.chip', chips).forEach(x => x.classList.toggle('is-active', x === c));
        const f = c.getAttribute('data-filter');
        let n = 0;
        qa('.book', list).forEach(b => {
          let show = true;
          if (f === 'ot' || f === 'nt') show = b.getAttribute('data-testament') === f;
          else if (f === 'uniq') show = b.getAttribute('data-uniq') === '1';
          else if (f.indexOf('g:') === 0) show = b.getAttribute('data-group') === f.slice(2);
          b.hidden = !show; if (show) n++;
        });
        count.textContent = n;
      });
    }

    if (page === 'mezgebe-tselot') {
      const row = q('#dayRow'), panel = q('#dayPanel');
      const today = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'][new Date().getDay()];
      const set = (id) => {
        panel.innerHTML = dayPanel(id);
        qa('.day', row).forEach(d => d.classList.toggle('is-active', d.getAttribute('data-day') === id));
      };
      row.addEventListener('click', (e) => {
        const d = e.target.closest('.day'); if (d) set(d.getAttribute('data-day'));
      });
      set(D.days.some(d => d.id === today) ? today : D.days[0].id);
    }

    if (page === 'christian-life') {
      const acc = q('#faqAcc');
      acc.addEventListener('click', (e) => {
        const b = e.target.closest('.acc-q'); if (!b) return;
        const open = b.getAttribute('aria-expanded') === 'true';
        b.setAttribute('aria-expanded', String(!open));
        b.querySelector('i').textContent = open ? '+' : '–';
        b.nextElementSibling.hidden = open;
      });
      const chips = q('#nameChips'), filter = q('#nameFilter'), grid = q('#nameGrid');
      let g = 'all';
      const apply = () => {
        const s = filter.value.trim().toLowerCase();
        qa('.name-cell', grid).forEach(c => {
          const okG = g === 'all' || c.getAttribute('data-g') === g;
          const okS = !s || c.getAttribute('data-k').indexOf(s) > -1 || c.textContent.indexOf(s) > -1;
          c.hidden = !(okG && okS);
        });
      };
      chips.addEventListener('click', (e) => {
        const c = e.target.closest('.chip'); if (!c) return;
        qa('.chip', chips).forEach(x => x.classList.toggle('is-active', x === c));
        g = c.getAttribute('data-g'); apply();
      });
      filter.addEventListener('input', apply);
    }

    if (page === 'ecommerce') {
      const chips = q('#catChips'), grid = q('#prodGrid');
      chips.addEventListener('click', (e) => {
        const c = e.target.closest('.chip'); if (!c) return;
        qa('.chip', chips).forEach(x => x.classList.toggle('is-active', x === c));
        const cat = c.getAttribute('data-cat');
        qa('[data-cat]', grid).forEach(p => {
          p.hidden = !(cat === 'all' || p.getAttribute('data-cat') === cat);
        });
      });
    }

    if (page === 'contact') {
      q('#contactForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const f = e.target;
        const subject = `[Kemekol] ${f.type.value} — ${f.name.value}`;
        const body = `${t('fName')}: ${f.name.value}\n${t('fEmail')}: ${f.email.value}\n` +
          `${t('fOrg')}: ${f.org.value}\n${t('fType')}: ${f.type.value}\n\n${f.msg.value}`;
        location.href = `mailto:${D.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      });
    }
  }

  /* ---------- router ---------- */

  let current = 'home';

  function render(page) {
    const sec = q('#page-' + page);
    if (!sec) return;
    sec.innerHTML = R[page] ? R[page]() : '';
    wirePage(page);
  }

  function route() {
    const h = (location.hash || '#home').slice(1);
    const page = PAGES.indexOf(h) > -1 ? h : 'home';
    current = page;
    PAGES.forEach(p => { const s = q('#page-' + p); if (s) s.hidden = p !== page; });
    qa('.site-nav a').forEach(a => a.classList.toggle('is-active', a.getAttribute('data-nav') === page));
    render(page);
    q('#siteNav').classList.remove('is-open');
    q('#navToggle').setAttribute('aria-expanded', 'false');
    if (!reader.hidden) closeReader();
    root.scrollTo({ top: 0, behavior: 'auto' });
  }

  /* ---------- chrome ---------- */

  function footerApps() {
    const ul = q('#footerApps');
    if (ul) ul.innerHTML = D.apps.slice(0, 5).map(a =>
      `<li><a href="${esc(a.url)}" target="_blank" rel="noopener">${esc(t(a.name))}</a></li>`).join('');
  }

  function faqLd() {
    const el = q('#ld-faq');
    if (!el) return;
    el.textContent = JSON.stringify({
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: D.faq.map(f => ({
        '@type': 'Question', name: f.q.en,
        acceptedAnswer: { '@type': 'Answer', text: f.a.en + ' / ' + f.a.am }
      }))
    });
  }

  function theme() {
    const btn = q('#themeToggle');
    let saved = null;
    try { saved = localStorage.getItem('kemekol-theme'); } catch (e) {}
    if (saved) document.documentElement.setAttribute('data-theme', saved);
    const sync = () => {
      const dark = document.documentElement.getAttribute('data-theme') === 'dark' ||
        (!document.documentElement.getAttribute('data-theme') &&
          root.matchMedia('(prefers-color-scheme: dark)').matches);
      if (root.KEMEKOL_ICONS) {
        btn.innerHTML = dark ? root.KEMEKOL_ICONS.svg('sun', 'theme-icon', 20) : root.KEMEKOL_ICONS.svg('moon', 'theme-icon', 20);
      } else {
        btn.textContent = dark ? '☀' : '☾';
      }
      btn.setAttribute('aria-label', dark ? 'Light mode' : 'Dark mode');
      btn.setAttribute('title', dark ? 'Switch to light mode' : 'Switch to dark mode');
    };
    btn.addEventListener('click', () => {
      const dark = document.documentElement.getAttribute('data-theme') === 'dark' ||
        (!document.documentElement.getAttribute('data-theme') &&
          root.matchMedia('(prefers-color-scheme: dark)').matches);
      const next = dark ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('kemekol-theme', next); } catch (e) {}
      sync();
    });
    sync();
  }

  function appBar() {
    const bar = q('#appBar');
    let closed = false;
    try { closed = localStorage.getItem('kemekol-appbar') === 'off'; } catch (e) {}
    if (closed) return;
    const show = () => {
      const on = root.matchMedia('(max-width: 760px)').matches;
      bar.hidden = !on;
      document.body.classList.toggle('has-appbar', on);
    };
    show();
    root.addEventListener('resize', show);
    q('#appBarClose').addEventListener('click', () => {
      bar.hidden = true;
      document.body.classList.remove('has-appbar');
      try { localStorage.setItem('kemekol-appbar', 'off'); } catch (e) {}
    });
  }

  function init() {
    I.apply();
    S.build();
    faqLd();
    footerApps();
    theme();
    appBar();
    wireSearchDismiss();
    q('#year').textContent = new Date().getFullYear();

    qa('.lang-switch button').forEach(b => b.addEventListener('click', () => {
      I.set(b.getAttribute('data-lang'));
    }));
    I.onChange(() => { footerApps(); render(current); });

    q('#navToggle').addEventListener('click', (e) => {
      const nav = q('#siteNav');
      const open = nav.classList.toggle('is-open');
      e.currentTarget.setAttribute('aria-expanded', String(open));
      if (root.KEMEKOL_ICONS) {
        e.currentTarget.innerHTML = open ? root.KEMEKOL_ICONS.svg('close', 'menu-icon', 20) : root.KEMEKOL_ICONS.svg('menu', 'menu-icon', 20);
      }
    });

    document.addEventListener('click', (e) => {
      const open = e.target.closest('[data-open]');
      if (open) {
        const [kind, id] = open.getAttribute('data-open').split(':');
        openReader(kind, id);
        return;
      }
      if (e.target.closest('[data-reader-close]')) { closeReader(); return; }
      const copy = e.target.closest('[data-copy]');
      if (copy) {
        const val = copy.getAttribute('data-copy');
        const done = () => {
          copy.innerHTML = (root.KEMEKOL_ICONS ? root.KEMEKOL_ICONS.svg('check', 'btn-icon', 16) + ' ' : '') + esc(t('copied'));
          setTimeout(() => {
            copy.innerHTML = (root.KEMEKOL_ICONS ? root.KEMEKOL_ICONS.svg('copy', 'btn-icon', 16) + ' ' : '') + esc(t('copy'));
          }, 1600);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(val).then(done, () => {});
        }
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !reader.hidden) closeReader();
    });

    root.addEventListener('hashchange', route);
    route();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})(window);
