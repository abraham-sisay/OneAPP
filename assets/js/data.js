/*
 * Kemekol content layer.
 * Every user-facing string is { en, am } so the UI can switch languages instantly.
 *
 * EDITORIAL NOTE: Liturgical excerpts (Ge'ez openings, verse previews, monthly
 * commemorations) were drafted for layout and SEO. Have them checked against
 * your published editions before launch. Items flagged `verify: true` need it most.
 */
(function (root) {
  'use strict';

  const play = (id) => `https://play.google.com/store/apps/details?id=${id}`;
  const playSearch = (q) => `https://play.google.com/store/search?q=${encodeURIComponent(q)}&c=apps`;

  // Replace with the real developer page: https://play.google.com/store/apps/dev?id=XXXXXXXX
  const developerUrl = playSearch('Kemekol');

  /* ------------------------------------------------------------------ APPS */
  const apps = [
    {
      id: 'tewahedo-one', glyph: 'ተ', tone: 'crimson', flagship: true,
      name: { en: 'Tewahedo One', am: 'ተዋሕዶ ፩' }, store: 'Tewahedo One ፡ ተዋሕዶ ፩',
      pkg: 'app.kemekol.tewahedo', url: play('app.kemekol.tewahedo'), rating: 4.9, installs: '63K+',
      tag: { en: 'All-in-one Bible, Sinksar, Haymanote Abew & AI', am: 'መጽሐፍ ቅዱስ፣ ስንክሳር፣ ሃይማኖተ አበውና AI በአንድ' },
      features: [
        { en: 'All 81 books with parallel Ge\'ez, Amharic & English', am: '81ዱም መጻሕፍት በግእዝ፣ በአማርኛና በእንግሊዝኛ ጎን ለጎን' },
        { en: 'Daily Sinksar (Synaxarium) for every day of the year', am: 'ለዓመቱ ቀናት ሁሉ የዕለቱ ስንክሳር' },
        { en: 'Haymanote Abew and patristic library', am: 'ሃይማኖተ አበውና የአበው መጻሕፍት' },
        { en: 'Works fully offline after install', am: 'ከተጫነ በኋላ ያለ ኢንተርኔት ይሠራል' },
        { en: 'Tewahedo AI theological assistant', am: 'ተዋሕዶ AI የትምህርተ ሃይማኖት ረዳት' },
      ],
      keys: 'tewahedo one tewahido bible app ethiopian orthodox app ተዋህዶ',
    },
    {
      id: 'amde-haymanot', glyph: 'ዓ', tone: 'ink',
      name: { en: 'Amde Haymanot', am: 'ዓምደ ሃይማኖት' }, store: 'ዓምደ ሃይማኖት ፡ Amde Haymanot',
      pkg: 'app.kemekol.amdehaymanot', url: play('app.kemekol.amdehaymanot'), rating: 5.0, installs: '100K+',
      tag: { en: 'Apologetics, teachings & Bible Q&A', am: 'ኦርቶዶክሳዊ መልሶች፣ ትምህርቶችና የመጽሐፍ ቅዱስ ጥያቄና መልስ' },
      features: [
        { en: 'Answers to common questions about the Orthodox faith', am: 'ስለ ኦርቶዶክስ እምነት ለሚነሡ ጥያቄዎች መልስ' },
        { en: 'Five Pillars of Mystery and Seven Sacraments', am: 'አምስቱ አዕማደ ምሥጢርና ሰባቱ ምሥጢራት' },
        { en: 'Bible Q&A with references', am: 'ማጣቀሻ ያለው የመጽሐፍ ቅዱስ ጥያቄና መልስ' },
        { en: 'Lessons for Sunday school and new believers', am: 'ለሰንበት ት/ቤትና ለአዳዲስ አማኞች ትምህርቶች' },
      ],
      keys: 'amde haymanot amdehaymanot apologetics orthodox answers አምደ',
    },
    {
      id: 'gitsawe', glyph: 'ግ', tone: 'gold',
      name: { en: 'Gitsawe', am: 'ግጻዌ' }, store: 'ግጻዌ : Gitsawe',
      pkg: 'com.kemekol.gitsawe', url: play('com.kemekol.gitsawe'), rating: 4.8, installs: null,
      tag: { en: 'Daily liturgy, readings & Ethiopian calendar', am: 'የዕለት ቅዳሴ፣ ምንባባትና የኢትዮጵያ ቀን መቍጠሪያ' },
      features: [
        { en: 'Today\'s Pauline, Catholic, Acts, Misbak, Gospel & Kidase', am: 'የዛሬ ጳውሎስ፣ ሐዋርያ፣ ግብረ ሐዋርያት፣ ምስባክ፣ ወንጌልና ቅዳሴ' },
        { en: 'Ethiopian calendar with fasts and feasts', am: 'አጽዋማትና በዓላት ያሉት የኢትዮጵያ ቀን መቍጠሪያ' },
        { en: 'Bahire Hasab for any year', am: 'ለማንኛውም ዓመት ባሕረ ሐሳብ' },
        { en: 'Saints commemorated each day', am: 'በየዕለቱ የሚታሰቡ ቅዱሳን' },
      ],
      keys: 'gitsawe gtsawe gisawe gitsawie daily readings lectionary calendar ግፃዌ',
    },
    {
      id: 'wudase-maryam', glyph: 'ው', tone: 'green',
      name: { en: 'Wudase Maryam (Tigrinya)', am: 'ውዳሴ ማርያም ብትግርኛ' }, store: 'ውዳሴ ማርያም ብትግርኛ - Wudase Maryam',
      pkg: null, url: playSearch('ውዳሴ ማርያም ብትግርኛ Wudase Maryam'), rating: 5.0, installs: '100K+',
      tag: { en: 'Daily prayers & the Praise of Mary', am: 'የዕለት ጸሎትና ውዳሴ ማርያም' },
      features: [
        { en: 'Wudase Mariam for every day, Monday to Sunday', am: 'ውዳሴ ማርያም ከሰኞ እስከ እሑድ' },
        { en: 'Ge\'ez with Tigrinya text', am: 'ግእዝ ከትግርኛ ጋር' },
        { en: 'Anqetse Birhan and Yewedswa Melaekt', am: 'አንቀጸ ብርሃንና ይዌድስዋ መላእክት' },
      ],
      keys: 'wudase maryam mariam weddase wedase praise of mary tigrinya tigrigna',
    },
    {
      id: 'apostolic-answers', glyph: 'ሓ', tone: 'ink',
      name: { en: 'Orthodox Apostolic Answers', am: 'ኦርቶዶክሳዊ መልስታት' }, store: 'ኦርቶዶክሳዊ መልስታት - ሓዋርያዊ መልስን',
      pkg: null, url: playSearch('ኦርቶዶክሳዊ መልስታት'), rating: 4.8, installs: null,
      tag: { en: 'Apostolic answers & teachings (Tigrinya)', am: 'ሐዋርያዊ መልሶችና ትምህርቶች (በትግርኛ)' },
      features: [
        { en: 'Apologetics written in Tigrinya', am: 'በትግርኛ የተዘጋጁ ኦርቶዶክሳዊ መልሶች' },
        { en: 'Scripture-referenced answers', am: 'በመጽሐፍ ቅዱስ ማስረጃ የተደገፉ መልሶች' },
      ],
      keys: 'orthodox answers tigrinya apostolic melstat hawariyawi',
    },
    {
      id: 'utubaa', glyph: 'U', tone: 'green',
      name: { en: 'Utubaa Amantaa Ortodoksii', am: 'ኡቱባ አማንታ ኦርቶዶክሲ' }, store: 'Utubaa Amantaa Ortodoksii',
      pkg: null, url: playSearch('Utubaa Amantaa Ortodoksii'), rating: null, installs: null,
      tag: { en: 'Orthodox teachings in Afaan Oromoo', am: 'ኦርቶዶክሳዊ ትምህርት በአፋን ኦሮሞ' },
      features: [
        { en: 'Foundational teachings in Afaan Oromoo', am: 'መሠረታዊ ትምህርቶች በአፋን ኦሮሞ' },
        { en: 'Prayers and Q&A for Oromo-speaking faithful', am: 'ለአፋን ኦሮሞ ተናጋሪ ምእመናን ጸሎትና ጥያቄና መልስ' },
      ],
      keys: 'utubaa amantaa ortodoksii afaan oromoo oromo orthodox',
    },
    {
      id: 'tewahedo-creed', glyph: 'ጸ', tone: 'crimson',
      name: { en: 'Tewahedo Creed', am: 'ጸሎተ ሃይማኖት' }, store: 'Tewahedo Creed - Orthodox',
      pkg: null, url: playSearch('Tewahedo Creed Orthodox'), rating: null, installs: null,
      tag: { en: 'The Nicene Creed and its teaching', am: 'ጸሎተ ሃይማኖትና ትርጓሜው' },
      features: [
        { en: 'The Creed in Ge\'ez, Amharic & English', am: 'ጸሎተ ሃይማኖት በግእዝ፣ በአማርኛና በእንግሊዝኛ' },
        { en: 'Line-by-line explanation', am: 'በየመስመሩ የተብራራ ትርጓሜ' },
      ],
      keys: 'tewahedo creed tselote haymanot nicene creed ጸሎተ ሃይማኖት',
    },
    {
      id: 'tewahedo-ai', glyph: 'AI', tone: 'gold',
      name: { en: 'Tewahedo AI', am: 'ተዋሕዶ AI' }, store: 'Tewahedo AI',
      pkg: null, url: playSearch('Tewahedo AI'), rating: null, installs: null,
      tag: { en: 'Patristic theological assistant', am: 'በአበው ትምህርት ላይ የተመሠረተ ረዳት' },
      features: [
        { en: 'Answers grounded in Scripture and the Fathers', am: 'በመጽሐፍ ቅዱስና በአበው ትምህርት የተመሠረተ መልስ' },
        { en: 'Cites its sources', am: 'ምንጮቹን ይጠቅሳል' },
        { en: 'Amharic and English', am: 'በአማርኛና በእንግሊዝኛ' },
      ],
      keys: 'tewahedo ai orthodox ai assistant patristic chatbot',
    },
  ];

  /* ------------------------------------------------------------------ BIBLE
   * [id, en, am, translit, testament, group, chapters|null, ethiopianCanon, summaryEn, summaryAm]
   * 46 + 35 = 81. Book groupings differ between printed editions; this follows a
   * common EOTC enumeration (Samuel, Kings, Chronicles and Ezra–Nehemiah counted as one each).
   */
  const B = [
    ['gen', 'Genesis', 'ኦሪት ዘፍጥረት', 'Orit Zefitret', 'ot', 'law', 50, 0, 'Creation, the fall, the flood and the patriarchs Abraham, Isaac, Jacob and Joseph.', 'የዓለም ፍጥረት፣ የሰው ውድቀት፣ የጥፋት ውኃና የአበው አብርሃም፣ ይስሐቅ፣ ያዕቆብና ዮሴፍ ታሪክ።'],
    ['exo', 'Exodus', 'ኦሪት ዘጸአት', 'Orit Zetse\'at', 'ot', 'law', 40, 0, 'Israel\'s deliverance from Egypt, the Ten Commandments and the Tabernacle.', 'እስራኤል ከግብፅ ባርነት መውጣት፣ ዐሥርቱ ትእዛዛትና የመገናኛው ድንኳን።'],
    ['lev', 'Leviticus', 'ኦሪት ዘሌዋውያን', 'Orit Zelewawiyan', 'ot', 'law', 27, 0, 'Priestly service, sacrifices and the call to holiness.', 'የካህናት አገልግሎት፣ መሥዋዕቶችና የቅድስና ሕግ።'],
    ['num', 'Numbers', 'ኦሪት ዘኍልቍ', 'Orit Zenulqu', 'ot', 'law', 36, 0, 'The census of Israel and forty years in the wilderness.', 'የሕዝቡ ቈጠራና በምድረ በዳ የአርባ ዓመት ጕዞ።'],
    ['deu', 'Deuteronomy', 'ኦሪት ዘዳግም', 'Orit Zedagim', 'ot', 'law', 34, 0, 'Moses\' farewell teaching, renewing the covenant before Canaan.', 'ሙሴ ወደ ከነዓን ከመግባታቸው በፊት ኪዳኑን ያደሰበት የስንብት ትምህርት።'],
    ['jos', 'Joshua', 'መጽሐፈ ኢያሱ', 'Metsihafe Iyasu', 'ot', 'law', 24, 0, 'The entry into the Promised Land and its division among the tribes.', 'ወደ ተስፋይቱ ምድር መግባትና ምድሪቱን ለነገዶች ማከፋፈል።'],
    ['jdg', 'Judges', 'መጽሐፈ መሳፍንት', 'Metsihafe Mesafint', 'ot', 'law', 21, 0, 'Cycles of falling away and deliverance through the judges.', 'የሕዝቡ ከእግዚአብሔር መራቅና በመሳፍንት መዳን።'],
    ['rut', 'Ruth', 'መጽሐፈ ሩት', 'Metsihafe Rut', 'ot', 'law', 4, 0, 'The faithful Moabite woman who became an ancestor of David.', 'የዳዊት ቅድመ አያት የሆነችው የታማኟ ሞዓባዊት ሩት ታሪክ።'],
    ['eno', 'Enoch', 'መጽሐፈ ሄኖክ', 'Metsihafe Henok', 'ot', 'law', 42, 1, 'Visions of Enoch on the watchers, judgment and the coming Righteous One. Preserved complete only in Ge\'ez.', 'ስለ ትጉሃን፣ ስለ ፍርድና ስለሚመጣው ጻድቅ የሄኖክ ራእዮች። ሙሉው የተጠበቀው በግእዝ ብቻ ነው።'],
    ['jub', 'Jubilees', 'መጽሐፈ ኩፋሌ', 'Metsihafe Kufale', 'ot', 'law', null, 1, 'Sacred history from creation to Sinai, arranged in jubilees of 49 years.', 'ከፍጥረት እስከ ደብረ ሲና ያለው ታሪክ በ49 ዓመት ኢዮቤልዩዎች የተከፋፈለበት።'],
    ['sam', '1 & 2 Samuel', 'መጽሐፈ ሳሙኤል ቀዳማዊ ወካልዕ', 'Samuel', 'ot', 'history', 55, 0, 'Samuel, Saul, and the anointing and reign of David.', 'የሳሙኤል፣ የሳኦልና የዳዊት መቀባትና ንግሥና።'],
    ['kgs', '1 & 2 Kings', 'መጽሐፈ ነገሥት ቀዳማዊ ወካልዕ', 'Negest', 'ot', 'history', 47, 0, 'Solomon\'s temple, the divided kingdom and the exile.', 'የሰሎሞን ቤተ መቅደስ፣ የመንግሥቱ መከፈልና ምርኮ።'],
    ['chr', '1 & 2 Chronicles', 'ዜና መዋዕል ቀዳማዊ ወካልዕ', 'Zena Mewa\'il', 'ot', 'history', 65, 0, 'Genealogies and the history of Judah, centred on temple worship.', 'የትውልድ ሐረግና በቤተ መቅደስ አምልኮ ላይ ያተኮረ የይሁዳ ታሪክ።'],
    ['ezr', 'Ezra & Nehemiah', 'መጽሐፈ ዕዝራ ወነህምያ', 'Ezra and Nehemya', 'ot', 'history', 23, 0, 'The return from Babylon and the rebuilding of the temple and walls of Jerusalem.', 'ከባቢሎን መመለስና የኢየሩሳሌም ቤተ መቅደስና ቅጥር መታደስ።'],
    ['ez2', '2 Ezra', 'ዕዝራ ካልዕ', 'Ezra Kali', 'ot', 'history', 9, 1, 'A parallel account of the restoration, including the contest of the three guards.', 'የሦስቱን ጠባቂዎች ክርክር ጨምሮ ስለ መመለሱ የሚናገር ተጨማሪ ታሪክ።'],
    ['ezs', 'Ezra Sutuel', 'ዕዝራ ሱቱኤል', 'Ezra Sutuel', 'ot', 'history', null, 1, 'Ezra\'s visions on suffering, judgment and the age to come.', 'ስለ መከራ፣ ፍርድና ስለሚመጣው ዓለም የዕዝራ ራእዮች።'],
    ['tob', 'Tobit', 'መጽሐፈ ጦቢት', 'Metsihafe Tobit', 'ot', 'history', 14, 1, 'A righteous exile, his son Tobias, and the guidance of the Archangel Raphael.', 'ጻድቁ ጦቢት፣ ልጁ ጦብያና የሊቀ መላእክት ቅዱስ ሩፋኤል መሪነት።'],
    ['jdt', 'Judith', 'መጽሐፈ ዮዲት', 'Metsihafe Yodit', 'ot', 'history', 16, 1, 'A widow\'s faith and courage deliver her people from Holofernes.', 'የአንዲት መበለት እምነትና ድፍረት ሕዝቧን ከሆሎፎርኒስ ያዳነበት።'],
    ['est', 'Esther', 'መጽሐፈ አስቴር', 'Metsihafe Aster', 'ot', 'history', 10, 0, 'Queen Esther intercedes for her people in Persia.', 'ንግሥት አስቴር በፋርስ ለሕዝቧ የማለደችበት።'],
    ['mq1', '1 Meqabyan', 'መቃብያን ቀዳማዊ', 'Meqabyan Qedamawi', 'ot', 'history', 36, 1, 'The Ethiopian Meqabyan: the faithful who stood firm under a persecuting king. A different book from Greek Maccabees.', 'ኢትዮጵያዊው መቃብያን፦ በአሳዳጅ ንጉሥ ዘመን የጸኑ ምእመናን ታሪክ። ከግሪኩ መቃብያን የተለየ መጽሐፍ ነው።'],
    ['mq2', '2 Meqabyan', 'መቃብያን ካልዕ', 'Meqabyan Kali', 'ot', 'history', 21, 1, 'Exhortations to repentance, with teaching on the resurrection and judgment.', 'የንስሐ ምክርና ስለ ትንሣኤ ሙታንና ስለ ፍርድ የሚያስተምር።'],
    ['mq3', '3 Meqabyan', 'መቃብያን ሣልስ', 'Meqabyan Salis', 'ot', 'history', 10, 1, 'Reflections on Israel\'s history and the justice of God.', 'ስለ እስራኤል ታሪክና ስለ እግዚአብሔር ፍትሕ የሚያስተምር።'],
    ['job', 'Job', 'መጽሐፈ ኢዮብ', 'Metsihafe Iyob', 'ot', 'wisdom', 42, 0, 'The patience of the righteous Job in suffering.', 'የጻድቁ ኢዮብ በመከራ ውስጥ ያሳየው ትዕግሥት።'],
    ['psa', 'Psalms', 'መዝሙረ ዳዊት', 'Mezmure Dawit', 'ot', 'wisdom', 151, 0, 'The 151 Psalms, prayed daily in the EOTC and learned by heart in church schools.', 'በየዕለቱ የሚጸለዩና በአብነት ት/ቤት በቃል የሚጠኑ 151 መዝሙራት።'],
    ['pro', 'Proverbs', 'መጽሐፈ ምሳሌ', 'Metsihafe Missale', 'ot', 'wisdom', 24, 0, 'Solomon\'s sayings on the fear of God and wise living.', 'ስለ እግዚአብሔር ፍርሃትና ስለ ጥበብ ኑሮ የሰሎሞን ምሳሌዎች።'],
    ['tag', 'Tagsas (Reproof)', 'መጽሐፈ ተግሣጽ', 'Metsihafe Tegsats', 'ot', 'wisdom', 7, 1, 'Counsel and reproof, counted as its own book in the EOTC canon.', 'ምክርና ተግሣጽ። በኢትዮጵያ ቀኖና ራሱን የቻለ መጽሐፍ ነው።'],
    ['wis', 'Wisdom of Solomon', 'መጽሐፈ ጥበብ', 'Tibebe Selomon', 'ot', 'wisdom', 19, 1, 'Praise of divine wisdom and the hope of the righteous.', 'የመለኮታዊ ጥበብ ውዳሴና የጻድቃን ተስፋ።'],
    ['ecc', 'Ecclesiastes', 'መጽሐፈ መክብብ', 'Metsihafe Mekbib', 'ot', 'wisdom', 12, 0, 'The vanity of all things apart from God.', 'ከእግዚአብሔር ውጭ ያለው ሁሉ ከንቱ መሆኑ።'],
    ['sng', 'Song of Songs', 'መኃልየ መኃልይ', 'Mahleye Mahley', 'ot', 'wisdom', 8, 0, 'A love song read as the love of God for His Church and for the soul.', 'የእግዚአብሔርና የቤተ ክርስቲያን ፍቅር የሚገለጥበት መዝሙር።'],
    ['sir', 'Sirach', 'መጽሐፈ ሲራክ', 'Metsihafe Sirak', 'ot', 'wisdom', 51, 1, 'Wisdom of Jesus son of Sirach on daily life, worship and virtue.', 'የሲራክ ልጅ ኢያሱ ስለ ዕለት ኑሮ፣ አምልኮና ምግባር ያስተማረው ጥበብ።'],
    ['isa', 'Isaiah', 'ትንቢተ ኢሳይያስ', 'Tinbite Isayiyas', 'ot', 'prophets', 66, 0, 'The prophet of the Virgin birth and the Suffering Servant.', 'የድንግል መውለድንና የመከራውን አገልጋይ የተናገረ ነቢይ።'],
    ['jer', 'Jeremiah', 'ትንቢተ ኤርምያስ', 'Tinbite Ermiyas', 'ot', 'prophets', 52, 0, 'Jeremiah\'s prophecy. The Ethiopian arrangement includes Lamentations, Baruch and the Letter of Jeremiah.', 'ትንቢተ ኤርምያስ። በኢትዮጵያ አደረጃጀት ሰቆቃወ ኤርምያስን፣ ባሮክንና ተረፈ ኤርምያስን ያካትታል።'],
    ['ezk', 'Ezekiel', 'ትንቢተ ሕዝቅኤል', 'Tinbite Hizqiel', 'ot', 'prophets', 48, 0, 'Visions of God\'s glory, the valley of dry bones, and the closed east gate.', 'የእግዚአብሔር ክብር፣ የደረቁ አጥንቶችና የተዘጋው የምሥራቅ ደጅ ራእይ።'],
    ['dan', 'Daniel', 'ትንቢተ ዳንኤል', 'Tinbite Daniel', 'ot', 'prophets', null, 0, 'Faith in exile, and visions of the kingdoms and the Son of Man.', 'በምርኮ ያለ ጽናትና ስለ መንግሥታትና ስለ ወልደ እጓለ እመሕያው ራእይ።'],
    ['hos', 'Hosea', 'ትንቢተ ሆሴዕ', 'Tinbite Hose', 'ot', 'prophets', 14, 0, 'God\'s steadfast love for unfaithful Israel.', 'እግዚአብሔር ለከዳች እስራኤል ያለው ጽኑ ፍቅር።'],
    ['amo', 'Amos', 'ትንቢተ አሞጽ', 'Tinbite Amots', 'ot', 'prophets', 9, 0, 'Justice for the poor and true worship.', 'ለድሆች ፍትሕና እውነተኛ አምልኮ።'],
    ['mic', 'Micah', 'ትንቢተ ሚክያስ', 'Tinbite Mikiyas', 'ot', 'prophets', 7, 0, 'The ruler who will be born in Bethlehem.', 'በቤተ ልሔም የሚወለደው ገዥ።'],
    ['joe', 'Joel', 'ትንቢተ ኢዮኤል', 'Tinbite Iyoel', 'ot', 'prophets', 3, 0, 'A call to fasting and the outpouring of the Spirit.', 'የጾም ጥሪና የመንፈስ ቅዱስ መፍሰስ።'],
    ['oba', 'Obadiah', 'ትንቢተ አብድዩ', 'Tinbite Abdiyu', 'ot', 'prophets', 1, 0, 'Judgment on Edom.', 'በኤዶምያስ ላይ የተነገረ ፍርድ።'],
    ['jon', 'Jonah', 'ትንቢተ ዮናስ', 'Tinbite Yonas', 'ot', 'prophets', 4, 0, 'The repentance of Nineveh, remembered in Tsome Nenwe.', 'የነነዌ ሰዎች ንስሐ። ጾመ ነነዌ የሚታሰብበት።'],
    ['nah', 'Nahum', 'ትንቢተ ናሆም', 'Tinbite Nahom', 'ot', 'prophets', 3, 0, 'The fall of Nineveh.', 'የነነዌ መውደቅ።'],
    ['hab', 'Habakkuk', 'ትንቢተ ዕንባቆም', 'Tinbite Inbaqom', 'ot', 'prophets', 3, 0, 'The righteous shall live by faith.', 'ጻድቅ በእምነቱ በሕይወት ይኖራል።'],
    ['zep', 'Zephaniah', 'ትንቢተ ሶፎንያስ', 'Tinbite Sofoniyas', 'ot', 'prophets', 3, 0, 'The day of the Lord and the humble remnant.', 'የእግዚአብሔር ቀንና ትሑታን ቅሬታዎች።'],
    ['hag', 'Haggai', 'ትንቢተ ሐጌ', 'Tinbite Hage', 'ot', 'prophets', 2, 0, 'Rebuilding the house of the Lord.', 'የእግዚአብሔርን ቤት እንደ ገና መሥራት።'],
    ['zec', 'Zechariah', 'ትንቢተ ዘካርያስ', 'Tinbite Zekariyas', 'ot', 'prophets', 14, 0, 'The humble King who enters riding on a colt.', 'በውርንጫ ተቀምጦ የሚገባው ትሑት ንጉሥ።'],
    ['mal', 'Malachi', 'ትንቢተ ሚልክያስ', 'Tinbite Milkiyas', 'ot', 'prophets', 4, 0, 'The pure offering and the messenger who prepares the way.', 'ንጹሕ መሥዋዕትና መንገድ የሚጠርግ መልእክተኛ።'],

    ['mat', 'Matthew', 'ወንጌል ዘማቴዎስ', 'Wengel Ze-Mattewos', 'nt', 'gospels', 28, 0, 'Christ the promised King, and the Sermon on the Mount.', 'የተስፋው ንጉሥ ክርስቶስና የተራራው ስብከት።'],
    ['mrk', 'Mark', 'ወንጌል ዘማርቆስ', 'Wengel Ze-Marqos', 'nt', 'gospels', 16, 0, 'A swift, vivid account of Christ\'s power and Passion.', 'የክርስቶስን ኃይልና ሕማማት በአጭሩ የሚተርክ ወንጌል።'],
    ['luk', 'Luke', 'ወንጌል ዘሉቃስ', 'Wengel Ze-Luqas', 'nt', 'gospels', 24, 0, 'The Annunciation, the Nativity and the mercy of Christ.', 'ብሥራተ ገብርኤል፣ ልደተ ክርስቶስና የክርስቶስ ምሕረት።'],
    ['jhn', 'John', 'ወንጌል ዘዮሐንስ', 'Wengel Ze-Yohannes', 'nt', 'gospels', 21, 0, 'The Word made flesh. The Gospel of the mystery of the Incarnation.', 'ቃል ሥጋ የሆነበት፤ የምሥጢረ ሥጋዌ ወንጌል።'],
    ['act', 'Acts of the Apostles', 'ግብረ ሐዋርያት', 'Gibre Hawariyat', 'nt', 'acts', 28, 0, 'Pentecost and the apostolic mission, including the baptism of the Ethiopian official (Acts 8).', 'በዓለ ኀምሳና የሐዋርያት ስብከት፤ የኢትዮጵያዊው ጃንደረባ ጥምቀትን ጨምሮ (ሐዋ. 8)።'],
    ['rom', 'Romans', 'ወደ ሮሜ ሰዎች', 'Romewyan', 'nt', 'epistles', 16, 0, 'Righteousness, faith and life in the Spirit.', 'ጽድቅ፣ እምነትና በመንፈስ መመላለስ።'],
    ['1co', '1 Corinthians', '1ኛ ወደ ቆሮንቶስ ሰዎች', '1 Qorontos', 'nt', 'epistles', 16, 0, 'Unity, the Eucharist, love and the resurrection.', 'አንድነት፣ ቅዱስ ቍርባን፣ ፍቅርና ትንሣኤ።'],
    ['2co', '2 Corinthians', '2ኛ ወደ ቆሮንቶስ ሰዎች', '2 Qorontos', 'nt', 'epistles', 13, 0, 'Apostolic ministry in weakness and in strength.', 'በድካምና በኃይል የሚፈጸም ሐዋርያዊ አገልግሎት።'],
    ['gal', 'Galatians', 'ወደ ገላትያ ሰዎች', 'Galatya', 'nt', 'epistles', 6, 0, 'Freedom in Christ and the fruit of the Spirit.', 'በክርስቶስ ያለ ነጻነትና የመንፈስ ፍሬ።'],
    ['eph', 'Ephesians', 'ወደ ኤፌሶን ሰዎች', 'Efeson', 'nt', 'epistles', 6, 0, 'The Church as the Body of Christ.', 'ቤተ ክርስቲያን የክርስቶስ አካል መሆኗ።'],
    ['php', 'Philippians', 'ወደ ፊልጵስዩስ ሰዎች', 'Filipisyus', 'nt', 'epistles', 4, 0, 'Christ\'s self-emptying and joy in Him.', 'የክርስቶስ ራስን ማዋረድና በእርሱ ያለ ደስታ።'],
    ['col', 'Colossians', 'ወደ ቈላስይስ ሰዎች', 'Qolasays', 'nt', 'epistles', 4, 0, 'The fullness of the Godhead dwelling bodily in Christ.', 'የመለኮት ሙላት በክርስቶስ በአካል ማደሩ።'],
    ['1th', '1 Thessalonians', '1ኛ ወደ ተሰሎንቄ ሰዎች', '1 Teselonqe', 'nt', 'epistles', 5, 0, 'The coming of the Lord and holy living.', 'የጌታ ዳግም ምጽአትና ቅዱስ ኑሮ።'],
    ['2th', '2 Thessalonians', '2ኛ ወደ ተሰሎንቄ ሰዎች', '2 Teselonqe', 'nt', 'epistles', 3, 0, 'Standing firm before the Day of the Lord.', 'ከጌታ ቀን በፊት ጸንቶ መቆም።'],
    ['1ti', '1 Timothy', '1ኛ ወደ ጢሞቴዎስ', '1 Timotewos', 'nt', 'epistles', 6, 0, 'Order and ministry in the Church.', 'በቤተ ክርስቲያን ሥርዓትና አገልግሎት።'],
    ['2ti', '2 Timothy', '2ኛ ወደ ጢሞቴዎስ', '2 Timotewos', 'nt', 'epistles', 4, 0, 'Paul\'s final charge: guard the faith.', 'የጳውሎስ የመጨረሻ አደራ፦ ሃይማኖትን ጠብቅ።'],
    ['tit', 'Titus', 'ወደ ቲቶ', 'Tito', 'nt', 'epistles', 3, 0, 'Sound teaching and good works.', 'ትክክለኛ ትምህርትና መልካም ሥራ።'],
    ['phm', 'Philemon', 'ወደ ፊልሞና', 'Filmona', 'nt', 'epistles', 1, 0, 'Reconciliation in Christ.', 'በክርስቶስ መታረቅ።'],
    ['heb', 'Hebrews', 'ወደ ዕብራውያን', 'Ibrawyan', 'nt', 'epistles', 13, 0, 'Christ the eternal High Priest.', 'ዘላለማዊው ሊቀ ካህናት ክርስቶስ።'],
    ['jas', 'James', 'የያዕቆብ መልእክት', 'Yaqob', 'nt', 'epistles', 5, 0, 'Faith shown in works, and prayer with oil for the sick (the root of Qendil).', 'በሥራ የሚገለጥ እምነትና ለድውያን የሚደረግ ጸሎት (የምሥጢረ ቀንዲል መሠረት)።'],
    ['1pe', '1 Peter', '1ኛ የጴጥሮስ መልእክት', '1 Petros', 'nt', 'epistles', 5, 0, 'Hope and holiness in the midst of suffering.', 'በመከራ መካከል ተስፋና ቅድስና።'],
    ['2pe', '2 Peter', '2ኛ የጴጥሮስ መልእክት', '2 Petros', 'nt', 'epistles', 3, 0, 'Partakers of the divine nature; a warning against false teachers.', 'ከመለኮታዊ ባሕርይ ተካፋዮች መሆንና ከሐሰተኛ መምህራን መጠበቅ።'],
    ['1jn', '1 John', '1ኛ የዮሐንስ መልእክት', '1 Yohannes', 'nt', 'epistles', 5, 0, 'God is love; walking in the light.', 'እግዚአብሔር ፍቅር ነው፤ በብርሃን መመላለስ።'],
    ['2jn', '2 John', '2ኛ የዮሐንስ መልእክት', '2 Yohannes', 'nt', 'epistles', 1, 0, 'Truth and love.', 'እውነትና ፍቅር።'],
    ['3jn', '3 John', '3ኛ የዮሐንስ መልእክት', '3 Yohannes', 'nt', 'epistles', 1, 0, 'Hospitality to fellow believers.', 'ምእመናንን በፍቅር መቀበል።'],
    ['jud', 'Jude', 'የይሁዳ መልእክት', 'Yihuda', 'nt', 'epistles', 1, 0, 'Contend for the faith once delivered. Verse 14 quotes the Book of Enoch.', 'አንድ ጊዜ ለቅዱሳን ስለ ተሰጠው ሃይማኖት መጋደል። ቍጥር 14 መጽሐፈ ሄኖክን ይጠቅሳል።'],
    ['rev', 'Revelation', 'ራእየ ዮሐንስ', 'Ra\'iye Yohannes', 'nt', 'revelation', 22, 0, 'The victory of the Lamb and the new Jerusalem.', 'የበጉ ድልና አዲሲቱ ኢየሩሳሌም።'],
    ['sn1', 'Sinodos: Ser\'ata Tsion', 'ሲኖዶስ፡ ሥርዓተ ጽዮን', 'Sinodos Seri\'ate Tsion', 'nt', 'order', null, 1, 'Apostolic canons on the order of the Church.', 'ስለ ቤተ ክርስቲያን ሥርዓት የሐዋርያት ቀኖና።'],
    ['sn2', 'Sinodos: Te\'ezaz', 'ሲኖዶስ፡ ትእዛዝ', 'Sinodos Te\'ezaz', 'nt', 'order', null, 1, 'Apostolic commandments for clergy and faithful.', 'ለካህናትና ለምእመናን የተሰጡ የሐዋርያት ትእዛዛት።'],
    ['sn3', 'Sinodos: Gitsew', 'ሲኖዶስ፡ ግጽው', 'Sinodos Gitsew', 'nt', 'order', null, 1, 'Further canons on discipline and worship.', 'ስለ ሥርዓትና አምልኮ ተጨማሪ ቀኖናዎች።'],
    ['sn4', 'Sinodos: Abtilis', 'ሲኖዶስ፡ አብጥሊስ', 'Sinodos Abtilis', 'nt', 'order', null, 1, 'The apostolic canons known as Abtilis.', 'አብጥሊስ በመባል የሚታወቁ የሐዋርያት ቀኖናዎች።'],
    ['kd1', 'Book of the Covenant I', 'መጽሐፈ ኪዳን ቀዳማዊ', 'Metsihafe Kidan 1', 'nt', 'order', null, 1, 'Christ\'s teaching to the apostles after the Resurrection, with church order.', 'ጌታ ከትንሣኤው በኋላ ለሐዋርያት ያስተማረውና የቤተ ክርስቲያን ሥርዓት።'],
    ['kd2', 'Book of the Covenant II', 'መጽሐፈ ኪዳን ካልዕ', 'Metsihafe Kidan 2', 'nt', 'order', null, 1, 'Liturgical prayers and rules for worship.', 'የአምልኮ ጸሎቶችና ሥርዓቶች።'],
    ['qal', 'Clement', 'መጽሐፈ ቀሌምንጦስ', 'Qelementos', 'nt', 'order', null, 1, 'Apostolic teaching handed down through Clement of Rome.', 'በሮሙ ቀሌምንጦስ በኩል የተላለፈ የሐዋርያት ትምህርት።'],
    ['did', 'Didascalia', 'ዲድስቅልያ', 'Didisqilya', 'nt', 'order', null, 1, 'The apostles\' instruction on Christian life and church discipline.', 'ስለ ክርስቲያናዊ ኑሮና ስለ ቤተ ክርስቲያን ሥርዓት የሐዋርያት ትምህርት።'],
  ];
  const books = B.map(([id, en, am, tr, t, group, ch, uniq, sEn, sAm]) => ({
    id, name: { en, am }, tr, testament: t, group, chapters: ch, uniq: !!uniq, summary: { en: sEn, am: sAm },
  }));


  /* -------------------------------------------------------------- PRAYERS
   * Wudase Mariam, attributed in the EOTC to St. Ephrem the Syrian.
   * Openings only. verify: confirm each Ge'ez incipit against the printed Wudase Mariam.
   */
  const days = [
    { id: 'mon', en: 'Monday', am: 'ሰኞ', gz: 'ዘሰኑይ', ti: 'ሰኑይ',
      theme: { en: 'God\'s will to restore fallen Adam through the Virgin.', am: 'የወደቀውን አዳም በድንግል በኩል የማዳን የእግዚአብሔር ፈቃድ።' }, },
    { id: 'tue', en: 'Tuesday', am: 'ማክሰኞ', gz: 'ዘሠሉስ', ti: 'ሰሉስ',
      theme: { en: 'Mary as the crown of our boast and the beginning of salvation.', am: 'እመቤታችን የመመኪያችን ዘውድና የድኅነታችን መጀመሪያ መሆኗ።' }, },
    { id: 'wed', en: 'Wednesday', am: 'ረቡዕ', gz: 'ዘረቡዕ', ti: 'ረቡዕ',
      theme: { en: 'Mary as the second heaven on earth.', am: 'እመቤታችን በምድር ላይ ያለች ዳግሚት ሰማይ መሆኗ።' }, },
    { id: 'thu', en: 'Thursday', am: 'ሐሙስ', gz: 'ዘሐሙስ', ti: 'ሓሙስ',
      theme: { en: 'The burning bush Moses saw, a figure of the Virgin who bore the divine fire.', am: 'ሙሴ ያየው የሚነድ ቍጥቋጦ፥ መለኮታዊውን እሳት የተሸከመችው የድንግል ምሳሌ።' }, },
    { id: 'fri', en: 'Friday', am: 'ዓርብ', gz: 'ዘዓርብ', ti: 'ዓርቢ',
      theme: { en: 'The angelic greeting: blessed among women.', am: 'የመልአኩ ሰላምታ፦ ከሴቶች መካከል የተባረክሽ።' }, },
    { id: 'sat', en: 'Saturday', am: 'ቅዳሜ', gz: 'ዘቀዳሚት', ti: 'ቀዳም',
      theme: { en: 'The purity and holiness of the Mother of God.', am: 'የወላዲተ አምላክ ንጽሕናና ቅድስና።' }, },
    { id: 'sun', en: 'Sunday', am: 'እሑድ', gz: 'ዘእሑድ', ti: 'ሰንበት',
      theme: { en: 'The joy of the Annunciation.', am: 'የብሥራቱ ደስታ።' }, },
  ];

  const prayers = [
    { id: 'abune', name: { en: 'The Lord\'s Prayer', am: 'አቡነ ዘበሰማያት' }, tr: 'Abune Zebesemayat',
      desc: { en: 'The prayer Christ taught, said at the start and end of every EOTC prayer service.', am: 'ጌታችን ያስተማረው ጸሎት፤ በእያንዳንዱ የጸሎት ሥርዓት መጀመሪያና መጨረሻ ይጸለያል።' },
      app: 'tewahedo-one' },
    { id: 'anqetse', name: { en: 'Anqetse Birhan', am: 'አንቀጸ ብርሃን' }, tr: 'Anqetse Birhan, Anketse Berhan',
      desc: { en: '"Gate of Light": a hymn of praise to St. Mary, prayed after Wudase Mariam.', am: '"የብርሃን ደጅ"፦ ከውዳሴ ማርያም ቀጥሎ የሚጸለይ የእመቤታችን ምስጋና።' }, app: 'wudase-maryam' },
    { id: 'yewedswa', name: { en: 'Yewedswa Melaekt', am: 'ይዌድስዋ መላእክት' }, tr: 'Yewedswa Melaekt, Yiwedisuwa Melaikt',
      desc: { en: '"The angels praise her": a short hymn to St. Mary in the daily prayer cycle.', am: '"መላእክት ያመሰግኗታል"፦ በዕለት ጸሎት የሚደገም የእመቤታችን ምስጋና።' }, app: 'wudase-maryam' },
    { id: 'melka-yesus', name: { en: 'Melka Yesus', am: 'መልክአ ኢየሱስ' }, tr: 'Melke Iyesus, Melka Iyesus',
      desc: { en: 'A melk hymn that greets each feature of Christ in turn, each stanza opening with "ሰላም ለ…" (Peace be to…).', am: 'የጌታችንን አካላት በየተራ የሚያመሰግን መልክ፤ እያንዳንዱ አንጓ "ሰላም ለ…" ብሎ ይጀምራል።' }, app: 'tewahedo-one' },
    { id: 'melka-mariam', name: { en: 'Melka Mariam', am: 'መልክአ ማርያም' }, tr: 'Melke Mariam, Melka Maryam',
      desc: { en: 'The melk hymn to St. Mary, greeting her in stanzas of Ge\'ez poetry.', am: 'እመቤታችንን በግእዝ ቅኔ አንጓዎች የሚያመሰግን መልክ።' }, app: 'wudase-maryam' },
    { id: 'dawit', name: { en: 'Mezmure Dawit', am: 'መዝሙረ ዳዊት' }, tr: 'Mezmure Dawit, Dawit',
      desc: { en: 'The Psalter, divided into daily portions so the 151 Psalms are prayed through each week.', am: 'መዝሙረ ዳዊት በሳምንቱ ቀናት ተከፍሎ በየዕለቱ ይጸለያል።' }, app: 'tewahedo-one' },
    { id: 'zewetir', name: { en: 'Daily Prayer (Zewetir Tselot)', am: 'የዘወትር ጸሎት' }, tr: 'Yezewetir Tselot, Zewetir Selot',
      desc: { en: 'The everyday prayer rule: sign of the Cross, the Lord\'s Prayer, the Creed, Psalm 51 and the Salutation of Mary.', am: 'የዕለት የጸሎት ሥርዓት፦ በስመ አብ፣ አቡነ ዘበሰማያት፣ ጸሎተ ሃይማኖት፣ መዝሙር 50 (51) እና ሰላምታ ለማርያም።' }, app: 'tewahedo-one' },
  ];

  /* ------------------------------------------------------- HAYMANOTE ABEW */
  const fathers = [
    { id: 'athanasius', name: { en: 'St. Athanasius of Alexandria', am: 'ቅዱስ አትናቴዎስ' }, tr: 'Atnatewos', era: '296–373',
      role: { en: '20th Pope of Alexandria; defender of Nicaea', am: '20ኛው የእስክንድርያ ሊቀ ጳጳሳት፤ የኒቅያ ጉባኤ ጠበቃ' },
      quote: { en: 'He became man that we might be made divine.', am: 'እኛ ከመለኮታዊ ባሕርይ ተካፋዮች እንድንሆን እርሱ ሰው ሆነ።' }, src: 'On the Incarnation 54',
      topic: { en: 'Incarnation', am: 'ምሥጢረ ሥጋዌ' } },
    { id: 'cyril', name: { en: 'St. Cyril of Alexandria', am: 'ቅዱስ ቄርሎስ' }, tr: 'Qerlos', era: 'c. 376–444',
      role: { en: '24th Pope of Alexandria; teacher of the one nature of the Word incarnate', am: '24ኛው የእስክንድርያ ሊቀ ጳጳሳት፤ የተዋሕዶ መምህር' },
      quote: { en: 'One nature of God the Word incarnate.', am: 'ሰው የሆነ የእግዚአብሔር ቃል አንድ ባሕርይ።' }, src: 'Letter to Succensus',
      topic: { en: 'Tewahedo Christology', am: 'ተዋሕዶ' } },
    { id: 'chrysostom', name: { en: 'St. John Chrysostom', am: 'ቅዱስ ዮሐንስ አፈወርቅ' }, tr: 'Yohannes Afewerq', era: 'c. 347–407',
      role: { en: 'Archbishop of Constantinople; "Golden Mouth"', am: 'የቍስጥንጥንያ ሊቀ ጳጳሳት፤ "አፈ ወርቅ"' },
      quote: { en: 'The Ancient of Days has become a child.', am: 'በዘመናት የሸመገለው ሕፃን ሆነ።' }, src: 'Homily on the Nativity (attributed)',
      topic: { en: 'Nativity', am: 'ልደት' } },
    { id: 'dioscorus', name: { en: 'St. Dioscorus of Alexandria', am: 'ቅዱስ ዲዮስቆሮስ' }, tr: 'Diyosqoros', era: 'd. 454',
      role: { en: '25th Pope of Alexandria; confessor of Tewahedo at Chalcedon', am: '25ኛው የእስክንድርያ ሊቀ ጳጳሳት፤ በኬልቄዶን ተዋሕዶን የመሰከረ' },
      quote: { en: 'From two natures, one Christ: one incarnate nature after the union, without mixture, change or separation.', am: 'ከሁለት ባሕርይ አንድ ክርስቶስ፤ ከተዋሕዶ በኋላ ያለ መቀላቀል፣ ያለ መለወጥና ያለ መለያየት አንድ ባሕርይ።' }, src: 'Summary of his confession',
      topic: { en: 'Tewahedo Christology', am: 'ተዋሕዶ' } },
    { id: 'gregory-theologian', name: { en: 'St. Gregory the Theologian', am: 'ቅዱስ ጎርጎርዮስ ነባቤ መለኮት' }, tr: 'Gorgoryos', era: '329–390',
      role: { en: 'Archbishop of Constantinople; theologian of the Trinity', am: 'የቍስጥንጥንያ ሊቀ ጳጳሳት፤ የምሥጢረ ሥላሴ መምህር' },
      quote: { en: 'What has not been assumed has not been healed.', am: 'ያልተዋሐደው አልዳነም።' }, src: 'Letter 101',
      topic: { en: 'Incarnation', am: 'ምሥጢረ ሥጋዌ' } },
    { id: 'basil', name: { en: 'St. Basil the Great', am: 'ቅዱስ ባስልዮስ' }, tr: 'Basilyos', era: '330–379',
      role: { en: 'Bishop of Caesarea; teacher on the Holy Spirit', am: 'የቂሣርያ ኤጲስ ቆጶስ፤ ስለ መንፈስ ቅዱስ ያስተማረ' },
      quote: { en: 'The Holy Spirit is worshipped and glorified together with the Father and the Son.', am: 'መንፈስ ቅዱስ ከአብና ከወልድ ጋር ይሰገድለታል፤ ይመሰገናል።' }, src: 'On the Holy Spirit (summary)',
      topic: { en: 'Trinity', am: 'ምሥጢረ ሥላሴ' } },
    { id: 'severus', name: { en: 'St. Severus of Antioch', am: 'ቅዱስ ሳዊሮስ' }, tr: 'Sawiros', era: 'c. 465–538',
      role: { en: 'Patriarch of Antioch; defender of the faith of St. Cyril', am: 'የአንጾኪያ ፓትርያርክ፤ የቅዱስ ቄርሎስ ትምህርት ጠበቃ' },
      quote: { en: 'One Lord, one Son, one nature of God the Word incarnate.', am: 'አንድ ጌታ፣ አንድ ወልድ፣ ሰው የሆነ የእግዚአብሔር ቃል አንድ ባሕርይ።' }, src: 'Summary of his teaching',
      topic: { en: 'Tewahedo Christology', am: 'ተዋሕዶ' } },
    { id: 'ignatius', name: { en: 'St. Ignatius of Antioch', am: 'ቅዱስ አግናጥዮስ' }, tr: 'Agnatyos', era: 'd. c. 108',
      role: { en: 'Bishop of Antioch; martyr', am: 'የአንጾኪያ ኤጲስ ቆጶስ፤ ሰማዕት' },
      quote: { en: 'The Eucharist is the flesh of our Saviour Jesus Christ.', am: 'ቍርባን የመድኃኒታችን የኢየሱስ ክርስቶስ ሥጋ ነው።' }, src: 'Letter to the Smyrnaeans 7',
      topic: { en: 'Eucharist', am: 'ምሥጢረ ቍርባን' } },
  ];

  /* ----------------------------------------------- CALENDAR & COMMEMORATIONS */
  // Monthly commemorations (ወርኃዊ በዓላት). verify: confirm with the Sinksar used by your parish.
  const monthly = {
    1: { en: 'Lideta: Nativity of St. Mary', am: 'ልደታ ለማርያም' },
    3: { en: 'Be\'ata: Entry of St. Mary into the Temple', am: 'በዓታ ለማርያም' },
    4: { en: 'St. John the Evangelist', am: 'ዮሐንስ ወልደ ነጎድጓድ' },
    5: { en: 'Sts. Peter and Paul; Abune Gebre Menfes Qidus', am: 'ጴጥሮስ ወጳውሎስ፤ አቡነ ገብረ መንፈስ ቅዱስ' },
    6: { en: 'Iyesus (Qusquam)', am: 'ኢየሱስ (ቍስቋም)' },
    7: { en: 'The Holy Trinity', am: 'ሥላሴ' },
    10: { en: 'The Holy Cross', am: 'መስቀል' },
    12: { en: 'St. Michael the Archangel', am: 'ቅዱስ ሚካኤል' },
    13: { en: 'St. Raphael the Archangel', am: 'ቅዱስ ሩፋኤል' },
    14: { en: 'Abune Aregawi', am: 'አቡነ አረጋዊ' },
    15: { en: 'Sts. Kirkos and Julitta', am: 'ቂርቆስ ወኢየሉጣ' },
    16: { en: 'Kidane Mihret: Covenant of Mercy', am: 'ኪዳነ ምሕረት' },
    17: { en: 'St. Stephen the Protomartyr', am: 'ቅዱስ እስጢፋኖስ' },
    18: { en: 'Abune Ewostatewos', am: 'አቡነ ኤዎስጣቴዎስ' },
    19: { en: 'St. Gabriel the Archangel', am: 'ቅዱስ ገብርኤል' },
    21: { en: 'St. Mary, Mother of God', am: 'እመቤታችን ቅድስት ድንግል ማርያም' },
    22: { en: 'St. Uriel the Archangel', am: 'ቅዱስ ዑራኤል' },
    23: { en: 'St. George the Great Martyr', am: 'ቅዱስ ጊዮርጊስ' },
    24: { en: 'Abune Tekle Haymanot', am: 'አቡነ ተክለ ሃይማኖት' },
    25: { en: 'St. Mercurius', am: 'ቅዱስ መርቆሬዎስ' },
    27: { en: 'Medhane Alem: Saviour of the World', am: 'መድኃኔ ዓለም' },
    28: { en: 'Amanuel: Emmanuel', am: 'አማኑኤል' },
    29: { en: 'Be\'ale Wold: Feast of the Son', am: 'በዓለ ወልድ' },
    30: { en: 'St. Mark the Evangelist', am: 'ማርቆስ ወንጌላዊ' },
  };

  // Major fixed annual feasts keyed "month-day" in the Ethiopian calendar.
  const annual = {
    '1-1': { en: 'Enkutatash (New Year) and St. John the Baptist', am: 'ርእሰ ዐውደ ዓመት (እንቍጣጣሽ) እና ቅዱስ ዮሐንስ መጥምቅ' },
    '1-17': { en: 'Meskel: Finding of the True Cross', am: 'መስቀል (ብርሃነ መስቀል)' },
    '1-21': { en: 'Gishen Mariam', am: 'ግሸን ማርያም' },
    '3-6': { en: 'Qusquam: the Holy Family in Egypt', am: 'ቍስቋም' },
    '3-12': { en: 'Hidar Mikael', am: 'ኅዳር ሚካኤል' },
    '3-21': { en: 'Hidar Tsion: Our Lady of Zion', am: 'ኅዳር ጽዮን' },
    '4-19': { en: 'Tahsas Gabriel', am: 'ታኅሣሥ ገብርኤል' },
    '4-29': { en: 'Genna: the Nativity of Christ', am: 'ልደተ ክርስቶስ (ገና)' },
    '5-10': { en: 'Ketera: Eve of Epiphany', am: 'ከተራ' },
    '5-11': { en: 'Timket: Epiphany', am: 'ጥምቀት' },
    '5-12': { en: 'St. Michael and the Wedding at Cana', am: 'ቃና ዘገሊላ እና ቅዱስ ሚካኤል' },
    '5-21': { en: 'Astemihro: Dormition of St. Mary', am: 'አስተምሕሮ (ዕረፍታ ለማርያም)' },
    '6-16': { en: 'Kidane Mihret', am: 'ኪዳነ ምሕረት' },
    '7-29': { en: 'Feast of the Annunciation', am: 'በዓለ ትስብእት (ብሥራት)' },
    '8-23': { en: 'St. George', am: 'ቅዱስ ጊዮርጊስ' },
    '9-1': { en: 'Lideta: Nativity of St. Mary', am: 'ልደታ ለማርያም' },
    '10-12': { en: 'Sene Mikael', am: 'ሰኔ ሚካኤል' },
    '11-5': { en: 'Sts. Peter and Paul', am: 'ጴጥሮስ ወጳውሎስ' },
    '11-19': { en: 'Hamle Gabriel', am: 'ሐምሌ ገብርኤል' },
    '12-13': { en: 'Debre Tabor: the Transfiguration (Buhe)', am: 'ደብረ ታቦር (ቡሄ)' },
    '12-16': { en: 'Filseta: Assumption of St. Mary', am: 'ፍልሰታ ለማርያም' },
  };

  /*
   * Today's readings hook. Format:
   *   gitsawe['3-4'] = { pauline: 'ዕብ 1፥1-14', catholic: '...', acts: '...', misbak: 'መዝ 44፥9', gospel: 'ሉቃ 1፥26-38', kidase: 'ቅዳሴ ማርያም' };
   * Keys are "<Ethiopian month>-<day>". Leave empty to show the app funnel instead.
   */
  const gitsawe = {};

  const readingSlots = [
    { id: 'pauline', en: 'Pauline Epistle', am: 'የጳውሎስ መልእክት', gz: 'ጳውሎስ', note: { en: 'Read by the subdeacon', am: 'በንፍቅ ዲያቆን ይነበባል' } },
    { id: 'catholic', en: 'Catholic Epistle', am: 'የሐዋርያት መልእክት', gz: 'ሐዋርያ', note: { en: 'From James, Peter, John or Jude', am: 'ከያዕቆብ፣ ከጴጥሮስ፣ ከዮሐንስ ወይም ከይሁዳ መልእክት' } },
    { id: 'acts', en: 'Acts of the Apostles', am: 'ግብረ ሐዋርያት', gz: 'ግብረ ሐዋርያት', note: { en: 'Read by the priest', am: 'በካህኑ ይነበባል' } },
    { id: 'misbak', en: 'Misbak', am: 'ምስባክ', gz: 'ምስባክ', note: { en: 'Psalm verses chanted before the Gospel', am: 'ከወንጌል በፊት በዜማ የሚባል የመዝሙር ክፍል' } },
    { id: 'gospel', en: 'Gospel', am: 'ወንጌል', gz: 'ወንጌል', note: { en: 'Read by the deacon or priest', am: 'በዲያቆን ወይም በካህን ይነበባል' } },
    { id: 'kidase', en: 'Anaphora (Kidase)', am: 'ቅዳሴ', gz: 'ቅዳሴ', note: { en: 'Which of the 14 anaphoras is prayed', am: 'ከ14ቱ ቅዳሴያት የሚቀደሰው' } },
  ];

  const fasts = [
    { id: 'abiy', name: { en: 'Abiy Tsom (Great Lent)', am: 'ዐቢይ ጾም' }, tr: 'Abiy Tsom, Hudade, Hudadie', days: 55,
      rule: { en: '55 days before Easter: Tsome Hirkal, the forty days of Christ\'s fast, and Holy Week (Himamat).', am: 'ከፋሲካ በፊት 55 ቀናት፦ ጾመ ሕርቃል፣ የጌታችን የአርባ ቀን ጾምና ሰሙነ ሕማማት።' } },
    { id: 'hawariyat', name: { en: 'Tsome Hawariyat (Apostles\' Fast)', am: 'ጾመ ሐዋርያት' }, tr: 'Tsome Hawariyat, Tsome Hawaryat, Sene Tsom', days: null,
      rule: { en: 'From the Monday after Pentecost until Hamle 4, before the feast of Sts. Peter and Paul. Length depends on the date of Easter.', am: 'ከበዓለ ኀምሳ ማግስት ሰኞ እስከ ሐምሌ 4 ቀን። ርዝመቱ በፋሲካ ቀን ይወሰናል።' } },
    { id: 'filseta', name: { en: 'Tsome Filseta (Fast of the Assumption)', am: 'ጾመ ፍልሰታ' }, tr: 'Tsome Filseta, Filsata, Nehase Tsom', days: 15,
      rule: { en: 'Nehase 1 to 15, before the feast of the Assumption of St. Mary on Nehase 16.', am: 'ከነሐሴ 1 እስከ 15፤ ነሐሴ 16 የእመቤታችን ፍልሰታ ይከበራል።' } },
    { id: 'nebiyat', name: { en: 'Tsome Nebiyat (Fast of the Prophets)', am: 'ጾመ ነቢያት' }, tr: 'Tsome Nebiyat, Tsome Gena, Advent', days: 43,
      rule: { en: 'Hidar 15 to Tahsas 28, preparing for Genna, as the prophets awaited the Messiah.', am: 'ከኅዳር 15 እስከ ታኅሣሥ 28፤ ነቢያት መሲሑን እንደ ጠበቁ ለልደት መዘጋጀት።' } },
    { id: 'nenwe', name: { en: 'Tsome Nenwe (Fast of Nineveh)', am: 'ጾመ ነነዌ' }, tr: 'Tsome Nenwe, Nineveh fast', days: 3,
      rule: { en: 'Monday to Wednesday, two weeks before Abiy Tsom, recalling Nineveh\'s repentance at Jonah\'s preaching.', am: 'ከዐቢይ ጾም ሁለት ሳምንት በፊት ከሰኞ እስከ ረቡዕ፤ የነነዌ ሰዎችን ንስሐ ለማሰብ።' } },
    { id: 'gehad', name: { en: 'Tsome Gehad (Eve fasts)', am: 'ጾመ ገሀድ' }, tr: 'Tsome Gehad, Gahad', days: null,
      rule: { en: 'The eve of Timket (Tir 10), and the eve of Genna when it falls on a Wednesday or Friday.', am: 'የጥምቀት ዋዜማ (ጥር 10)፤ እንዲሁም ገና ረቡዕ ወይም ዓርብ ሲውል ዋዜማው።' } },
    { id: 'dihnet', name: { en: 'Tsome Dihnet (Wednesday & Friday)', am: 'ጾመ ድኅነት' }, tr: 'Tsome Dihnet, Rob and Arb', days: null,
      rule: { en: 'Every Wednesday and Friday, except during the 50 days after Easter.', am: 'ዘወትር ረቡዕና ዓርብ፤ ከፋሲካ እስከ በዓለ ኀምሳ ባሉት 50 ቀናት በቀር።' } },
  ];

  /* ------------------------------------------------------ CHRISTIAN LIFE */
  const pillars = [
    { id: 'selassie', name: { en: 'Mystery of the Trinity', am: 'ምሥጢረ ሥላሴ' }, tr: 'Mistire Selassie',
      body: { en: 'One God in three persons, Father, Son and Holy Spirit: one in Godhead, three in name, person and act.', am: 'አብ፣ ወልድ፣ መንፈስ ቅዱስ በአካል፣ በስምና በግብር ሦስት፤ በመለኮት፣ በባሕርይና በህልውና አንድ አምላክ።' } },
    { id: 'segawe', name: { en: 'Mystery of the Incarnation', am: 'ምሥጢረ ሥጋዌ' }, tr: 'Mistire Segawe',
      body: { en: 'God the Word took flesh from the Virgin Mary and became one with it, without mixture, change or separation. This union is Tewahedo.', am: 'እግዚአብሔር ወልድ ከድንግል ማርያም ሥጋ ነሥቶ ያለ መቀላቀል፣ ያለ መለወጥና ያለ መለያየት ተዋሕዶ ሰው ሆነ።' } },
    { id: 'timket', name: { en: 'Mystery of Baptism', am: 'ምሥጢረ ጥምቀት' }, tr: 'Mistire Timket',
      body: { en: 'Rebirth by water and the Spirit, through which we become children of God.', am: 'በውኃና በመንፈስ ቅዱስ ዳግመኛ መወለድ፤ የእግዚአብሔር ልጆች የምንሆንበት።' } },
    { id: 'qurban', name: { en: 'Mystery of the Eucharist', am: 'ምሥጢረ ቍርባን' }, tr: 'Mistire Qurban',
      body: { en: 'The true Body and Blood of Christ, received for eternal life.', am: 'ለዘላለም ሕይወት የሚቀበሉት እውነተኛው የክርስቶስ ሥጋና ደም።' } },
    { id: 'tinsae', name: { en: 'Mystery of the Resurrection of the Dead', am: 'ምሥጢረ ትንሣኤ ሙታን' }, tr: 'Mistire Tinsae Mutan',
      body: { en: 'All the dead will rise and stand before the judgment of God.', am: 'ሙታን ሁሉ ተነሥተው በእግዚአብሔር ፍርድ ፊት ይቆማሉ።' } },
  ];

  const sacraments = [
    { id: 's-timket', name: { en: 'Baptism', am: 'ምሥጢረ ጥምቀት' }, body: { en: 'Boys are baptised on the 40th day after birth and girls on the 80th.', am: 'ወንድ በ40 ቀኑ፣ ሴት በ80 ቀኗ ትጠመቃለች።' } },
    { id: 's-meron', name: { en: 'Holy Chrism (Meron)', am: 'ምሥጢረ ሜሮን' }, body: { en: 'Anointing with holy oil, giving the gift of the Holy Spirit, given right after baptism.', am: 'ከጥምቀት ቀጥሎ የሚሰጥ፣ የመንፈስ ቅዱስን ጸጋ የሚያሳድር ቅብዐት።' } },
    { id: 's-qurban', name: { en: 'Holy Communion', am: 'ምሥጢረ ቍርባን' }, body: { en: 'Receiving the Body and Blood of Christ in the Kidase.', am: 'በቅዳሴ የክርስቶስን ሥጋና ደም መቀበል።' } },
    { id: 's-nisha', name: { en: 'Repentance & Confession', am: 'ምሥጢረ ንስሐ' }, body: { en: 'Confession before one\'s Father of Confession (Yenefs Abat) and absolution.', am: 'በንስሐ አባት ፊት ኃጢአትን መናዘዝና ፍትሐት መቀበል።' } },
    { id: 's-kihnet', name: { en: 'Holy Orders', am: 'ምሥጢረ ክህነት' }, body: { en: 'Ordination of deacons, priests and bishops by the laying on of hands.', am: 'ዲያቆናት፣ ካህናትና ጳጳሳት በአንብሮተ እድ የሚሾሙበት።' } },
    { id: 's-teklil', name: { en: 'Holy Matrimony', am: 'ምሥጢረ ተክሊል' }, body: { en: 'The crowned marriage of a man and woman, sealed with Holy Communion.', am: 'በቍርባን የሚጸና የአንድ ወንድና የአንዲት ሴት የተክሊል ጋብቻ።' } },
    { id: 's-qendil', name: { en: 'Unction of the Sick', am: 'ምሥጢረ ቀንዲል' }, body: { en: 'Prayer and anointing with oil for the sick (James 5:14).', am: 'ለድውያን በዘይት የሚደረግ ጸሎትና ቅብዐት (ያዕ 5፥14)።' } },
  ];

  const faq = [
    { id: 'intercession', q: { en: 'Why do Orthodox Christians ask the saints to pray for them?', am: 'ኦርቶዶክሳውያን ቅዱሳንን ለምን ያማልዳሉ?' },
      a: { en: 'The saints are alive in Christ, and the prayer of the righteous has great power (James 5:16). Asking a saint to pray for us is the same as asking a fellow believer, offered to the one God who alone saves. God Himself honoured the intercession of Abraham, Moses and Job.', am: 'ቅዱሳን በክርስቶስ ሕያዋን ናቸው፤ የጻድቅ ጸሎትም በሥራዋ እጅግ ኃይል ታደርጋለች (ያዕ 5፥16)። ቅዱሳን እንዲጸልዩልን መለመን ወንድማችንን ጸልይልኝ እንደማለት ነው፤ የሚያድነው ግን አንዱ እግዚአብሔር ነው። እግዚአብሔር የአብርሃምን፣ የሙሴንና የኢዮብን ምልጃ ተቀብሏል።' } },
    { id: 'mary', q: { en: 'Why is St. Mary so honoured in the Ethiopian Church?', am: 'እመቤታችን በኢትዮጵያ ቤተ ክርስቲያን ለምን ትከብራለች?' },
      a: { en: 'She is the Theotokos, Wolladite Amlak, the Mother of God, because the one she bore is God the Word made flesh. All generations call her blessed (Luke 1:48). The Church holds that she remained a virgin before, during and after the birth of Christ.', am: 'የወለደችው ሥጋ የሆነውን አምላክ ቃልን ስለሆነ ወላዲተ አምላክ ናት። ትውልድ ሁሉ ብፅዕት ይሏታል (ሉቃ 1፥48)። ቤተ ክርስቲያን ከመውለዷ በፊት፣ በወለደች ጊዜና ከወለደች በኋላ ድንግል መሆኗን ታስተምራለች።' } },
    { id: 'fasting', q: { en: 'Why does the EOTC fast so many days of the year?', am: 'ቤተ ክርስቲያን ለምን ብዙ ቀናት ትጾማለች?' },
      a: { en: 'Christ fasted forty days and said His disciples would fast (Matthew 9:15). The seven official fasts train the body and soul in prayer, repentance and charity. Fasting means no animal products, and on most fast days no food until the afternoon.', am: 'ጌታችን አርባ ቀን ጾሟል፤ ደቀ መዛሙርቱም እንደሚጾሙ ተናግሯል (ማቴ 9፥15)። ሰባቱ አጽዋማት ሥጋንና ነፍስን በጸሎት፣ በንስሐና በምጽዋት ያለማምዳሉ። ጾም ከእንስሳት ውጤቶች መከልከልና በአብዛኛው እስከ ቀትር መቆየት ነው።' } },
    { id: 'icons', q: { en: 'Is venerating icons idolatry?', am: 'ለሥዕላት መስገድ ጣዖት አምልኮ ነውን?' },
      a: { en: 'No. Worship belongs to God alone. Honour given to an icon passes to the person it depicts. God commanded the cherubim to be made over the Ark (Exodus 25:18), and because the invisible God became visible in Christ, He can be depicted.', am: 'አይደለም። አምልኮ ለእግዚአብሔር ብቻ ነው። ለሥዕሉ የሚሰጠው ክብር በሥዕሉ ወደ ተሣለው ይደርሳል። እግዚአብሔር በታቦቱ ላይ ኪሩቤል እንዲሠሩ አዟል (ዘጸ 25፥18)፤ የማይታየው አምላክ በክርስቶስ ስለ ታየም ይሣላል።' } },
    { id: 'tabot', q: { en: 'What is the Tabot?', am: 'ታቦት ምንድን ነው?' },
      a: { en: 'The Tabot is a consecrated altar tablet, after the tablets of the Law kept in the Ark of the Covenant. A church is consecrated only when a Tabot is placed in it, and the Kidase is celebrated on it. At Timket the Tabotat are carried out in procession.', am: 'ታቦት በታቦተ ጽዮን ውስጥ የነበሩትን ጽላተ ሕግ ምሳሌ የሚያደርግ የተቀደሰ ጽላት ነው። ቤተ ክርስቲያን የምትከበረው ታቦት ሲገባባት ነው፤ ቅዳሴም በላዩ ይፈጸማል። በጥምቀት ታቦታት በዑደት ይወጣሉ።' } },
  ];

  /* ------------------------------------------------ CHRISTIAN NAMES (ክርስትና ስም)
   * Composed from standard Ge'ez construct prefixes + holy names.
   */
  const namePrefixes = [
    { gz: 'ገብረ', tr: 'Gebre', en: 'Servant of', am: 'አገልጋይ', g: 'm' },
    { gz: 'ወልደ', tr: 'Wolde', en: 'Son of', am: 'ልጅ', g: 'm' },
    { gz: 'ተክለ', tr: 'Tekle', en: 'Plant of', am: 'ተክል', g: 'm' },
    { gz: 'ኃይለ', tr: 'Haile', en: 'Power of', am: 'ኃይል', g: 'm' },
    { gz: 'ሣህለ', tr: 'Sahle', en: 'Mercy of', am: 'ምሕረት', g: 'm' },
    { gz: 'ፍቅረ', tr: 'Fikre', en: 'Love of', am: 'ፍቅር', g: 'u' },
    { gz: 'ብርሃነ', tr: 'Birhane', en: 'Light of', am: 'ብርሃን', g: 'u' },
    { gz: 'ወለተ', tr: 'Welete', en: 'Daughter of', am: 'ልጅ (ሴት)', g: 'f' },
    { gz: 'አመተ', tr: 'Amete', en: 'Handmaid of', am: 'አገልጋይ (ሴት)', g: 'f' },
  ];
  const nameSuffixes = [
    { gz: 'ማርያም', tr: 'Mariam', en: 'St. Mary', am: 'ማርያም' },
    { gz: 'ሚካኤል', tr: 'Mikael', en: 'St. Michael', am: 'ቅዱስ ሚካኤል' },
    { gz: 'ገብርኤል', tr: 'Gabriel', en: 'St. Gabriel', am: 'ቅዱስ ገብርኤል' },
    { gz: 'ሥላሴ', tr: 'Selassie', en: 'the Holy Trinity', am: 'ቅድስት ሥላሴ' },
    { gz: 'ኢየሱስ', tr: 'Iyesus', en: 'Jesus', am: 'ኢየሱስ' },
    { gz: 'ክርስቶስ', tr: 'Kristos', en: 'Christ', am: 'ክርስቶስ' },
    { gz: 'መድኅን', tr: 'Medhin', en: 'the Saviour', am: 'መድኃኒት' },
    { gz: 'መስቀል', tr: 'Meskel', en: 'the Cross', am: 'መስቀል' },
    { gz: 'ጊዮርጊስ', tr: 'Giorgis', en: 'St. George', am: 'ቅዱስ ጊዮርጊስ' },
    { gz: 'ሩፋኤል', tr: 'Rufael', en: 'St. Raphael', am: 'ቅዱስ ሩፋኤል' },
    { gz: 'ጽዮን', tr: 'Tsion', en: 'Zion', am: 'ጽዮን' },
    { gz: 'ሕይወት', tr: 'Hiwot', en: 'Life', am: 'ሕይወት' },
    { gz: 'ሰንበት', tr: 'Senbet', en: 'the Sabbath', am: 'ሰንበት' },
    { gz: 'ዮሐንስ', tr: 'Yohannes', en: 'St. John', am: 'ቅዱስ ዮሐንስ' },
    { gz: 'ኪዳን', tr: 'Kidan', en: 'the Covenant', am: 'ኪዳን' },
  ];
  const names = [];
  namePrefixes.forEach((p) => nameSuffixes.forEach((s) => {
    names.push({ id: `${p.tr}-${s.tr}`.toLowerCase(), gz: `${p.gz} ${s.gz}`, tr: `${p.tr} ${s.tr}`, g: p.g,
      en: `${p.en} ${s.en}`, am: `የ${s.am} ${p.am}` });
  }));
  [
    { gz: 'ተክለ ሃይማኖት', tr: 'Tekle Haymanot', g: 'm', en: 'Plant of the Faith', am: 'የሃይማኖት ተክል' },
    { gz: 'ዘርአ ያዕቆብ', tr: 'Zera Yaqob', g: 'm', en: 'Seed of Jacob', am: 'የያዕቆብ ዘር' },
    { gz: 'ገብረ እግዚአብሔር', tr: 'Gebre Egziabher', g: 'm', en: 'Servant of God', am: 'የእግዚአብሔር አገልጋይ' },
    { gz: 'ወልደ አማኑኤል', tr: 'Wolde Amanuel', g: 'm', en: 'Son of Emmanuel', am: 'የአማኑኤል ልጅ' },
    { gz: 'ኪዳነ ማርያም', tr: 'Kidane Mariam', g: 'u', en: 'Covenant of Mary', am: 'የማርያም ኪዳን' },
    { gz: 'ወለተ ጻድቃን', tr: 'Welete Tsadqan', g: 'f', en: 'Daughter of the Righteous', am: 'የጻድቃን ልጅ' },
  ].forEach((n) => names.push(Object.assign({ id: n.tr.toLowerCase().replace(/\s+/g, '-') }, n)));

  /* ---------------------------------------------------------------- STORE */
  const productCats = [
    { id: 'books', en: 'Books', am: 'መጻሕፍት' },
    { id: 'vestments', en: 'Netela & Kemis', am: 'ነጠላና ቀሚስ' },
    { id: 'crosses', en: 'Crosses', am: 'መስቀሎች' },
    { id: 'incense', en: 'Incense', am: 'ዕጣን' },
    { id: 'icons', en: 'Icons', am: 'ቅዱሳት ሥዕላት' },
  ];
  const products = [
    { id: 'p-wudase', cat: 'books', glyph: 'ውዳሴ', name: { en: 'Wudase Mariam & Anqetse Birhan', am: 'ውዳሴ ማርያምና አንቀጸ ብርሃን' }, spec: { en: 'Ge\'ez with Amharic, pocket edition', am: 'ግእዝና አማርኛ፣ የኪስ መጠን' } },
    { id: 'p-dawit', cat: 'books', glyph: 'ዳዊት', name: { en: 'Mezmure Dawit (Psalter)', am: 'መዝሙረ ዳዊት' }, spec: { en: 'Ge\'ez, large print', am: 'ግእዝ፣ ትልቅ ፊደል' } },
    { id: 'p-bible', cat: 'books', glyph: '፹፩', name: { en: '81-Book Amharic Bible', am: '81 አሐዱ መጽሐፍ ቅዱስ' }, spec: { en: 'Hardcover, EOTC canon', am: 'ጠንካራ ሽፋን' } },
    { id: 'p-haymanot', cat: 'books', glyph: 'አበው', name: { en: 'Haymanote Abew', am: 'ሃይማኖተ አበው' }, spec: { en: 'Ge\'ez with Amharic translation', am: 'ግእዝና የአማርኛ ትርጉም' } },
    { id: 'p-netela', cat: 'vestments', glyph: 'ነጠላ', name: { en: 'Handwoven Netela', am: 'በእጅ የተሠራ ነጠላ' }, spec: { en: 'Cotton with tibeb border', am: 'ጥጥ፣ ጥበብ ጠርዝ' } },
    { id: 'p-gabi', cat: 'vestments', glyph: 'ጋቢ', name: { en: 'Gabi', am: 'ጋቢ' }, spec: { en: 'Four-layer cotton', am: 'ባለ አራት ድርብ ጥጥ' } },
    { id: 'p-kemis', cat: 'vestments', glyph: 'ቀሚስ', name: { en: 'Habesha Kemis', am: 'የሀበሻ ቀሚስ' }, spec: { en: 'Made to measure', am: 'በልክ የሚሠራ' } },
    { id: 'p-hand-cross', cat: 'crosses', glyph: '✠', name: { en: 'Priest\'s Hand Cross', am: 'የእጅ መስቀል' }, spec: { en: 'Brass, Lalibela pattern', am: 'ናስ፣ የላሊበላ ቅርፅ' } },
    { id: 'p-neck-cross', cat: 'crosses', glyph: '✚', name: { en: 'Neck Cross', am: 'የአንገት መስቀል' }, spec: { en: 'Silver, with mateb cord', am: 'ብር፣ ከማተብ ጋር' } },
    { id: 'p-etan', cat: 'incense', glyph: 'ዕጣን', name: { en: 'Frankincense', am: 'ዕጣን' }, spec: { en: 'Tigray and Gondar resin', am: 'የትግራይና የጎንደር' } },
    { id: 'p-kerbe', cat: 'incense', glyph: 'ከርቤ', name: { en: 'Myrrh', am: 'ከርቤ' }, spec: { en: 'Natural resin', am: 'የተፈጥሮ' } },
    { id: 'p-icon-mary', cat: 'icons', glyph: 'ሥዕል', name: { en: 'Icon of St. Mary with Child', am: 'የእመቤታችን ሥዕል' }, spec: { en: 'Hand-painted on parchment', am: 'በብራና ላይ በእጅ የተሣለ' } },
    { id: 'p-icon-george', cat: 'icons', glyph: 'ሥዕል', name: { en: 'Icon of St. George', am: 'የቅዱስ ጊዮርጊስ ሥዕል' }, spec: { en: 'Hand-painted on wood', am: 'በእንጨት ላይ በእጅ የተሣለ' } },
  ];

  root.KEMEKOL_DATA = {
    apps, books, days, prayers, fathers, monthly, annual, gitsawe, readingSlots, fasts,
    pillars, sacraments, faq, names, productCats, products, developerUrl,
    email: 'contact.kemekol@gmail.com',
    playSearch,
  };
})(window);
