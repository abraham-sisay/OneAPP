/* KEMEKOL — UI string table + language switching. */
(function (root) {
  'use strict';

  const T = {
    /* chrome */
    skip:            { en: 'Skip to content', am: 'ወደ ዋናው ይዘት ዝለል' },
    nav_home:        { en: 'Home', am: 'መነሻ' },
    'nav_bible-81':  { en: 'Bible 81', am: 'መጽሐፍ ቅዱስ ፹፩' },
    'nav_mezgebe-tselot': { en: 'Prayers', am: 'መዝገበ ጸሎት' },
    'nav_haymanote-abew': { en: 'Church Fathers', am: 'ሃይማኖተ አበው' },
    'nav_daily-gitsawe':  { en: 'Daily Gitsawe', am: 'ግጻዌ' },
    'nav_christian-life': { en: 'Christian Life', am: 'ክርስቲያናዊ ሕይወት' },
    nav_ecommerce:   { en: 'Store', am: 'የገበያ ማዕከል' },
    nav_apps:        { en: 'Our Apps', am: 'መተግበሪያዎቻችን' },
    nav_services:    { en: 'Services', am: 'አገልግሎቶች' },
    nav_about:       { en: 'About', am: 'ስለ እኛ' },
    nav_contact:     { en: 'Contact', am: 'ያግኙን' },

    getApp:          { en: 'Get the app', am: 'መተግበሪያውን ያውርዱ' },
    appBarSub:       { en: '81 books · offline · free', am: '፹፩ መጻሕፍት · ከኢንተርኔት ውጪ · ነጻ' },
    openPlay:        { en: 'Open in Google Play', am: 'በGoogle Play ይክፈቱ' },
    install:         { en: 'Install free', am: 'በነጻ ይጫኑ' },
    readMore:        { en: 'Read', am: 'ያንብቡ' },
    close:           { en: 'Close', am: 'ዝጋ' },
    searchPh:        { en: 'Search prayers, Bible books, teachings… (Wudase Mariam, ውዳሴ ማርያም)', am: 'ጸሎት፣ መጻሕፍት፣ ትምህርት ይፈልጉ… (ውዳሴ ማርያም፣ Wudase Mariam)' },
    searchBtn:       { en: 'Search', am: 'ፈልግ' },
    noResults:       { en: 'No matches. Try Amharic Fidel, English, or Latin transliteration.', am: 'ምንም አልተገኘም። በፊደል፣ በእንግሊዝኛ ወይም በላቲን ይሞክሩ።' },
    all:             { en: 'All', am: 'ሁሉም' },
    filterPh:        { en: 'Filter…', am: 'አጥራ…' },
    showing:         { en: 'Showing', am: 'የሚታዩ' },

    footerBlurb:     { en: 'Kemekol builds offline-first software, digitizes institutional and heritage archives, and publishes Ethiopia’s most-trusted Orthodox Tewahedo applications.', am: 'ከመኮል ከኢንተርኔት ውጪ የሚሠሩ ሶፍትዌሮችን ይሠራል፣ የድርጅት እና የቅርስ መዛግብትን ዲጂታል ያደርጋል፣ እንዲሁም በኢትዮጵያ በብዙዎች የታመኑ የኦርቶዶክስ ተዋሕዶ መተግበሪያዎችን ያሳትማል።' },
    footerContent:   { en: 'Content', am: 'ይዘቶች' },
    footerCompany:   { en: 'Company', am: 'ድርጅት' },
    footerApps:      { en: 'Applications', am: 'መተግበሪያዎች' },
    rights:          { en: 'All rights reserved.', am: 'መብቱ በሕግ የተጠበቀ ነው።' },
    addis:           { en: 'Addis Ababa, Ethiopia', am: 'አዲስ አበባ፣ ኢትዮጵያ' },

    /* home */
    homeEyebrow:     { en: 'Software engineering · Content digitization · Addis Ababa', am: 'ሶፍትዌር ልማት · የይዘት ዲጂታይዜሽን · አዲስ አበባ' },
    homeTitle:       { en: 'Ethiopia’s sacred library, engineered for the phone in your hand.', am: 'የኢትዮጵያ ቅዱስ መጻሕፍት ቤት፣ በእጅዎ ላለው ስልክ ተዘጋጅቶ።' },
    homeTitleAlt:    { en: 'ከመኮል — ከመጽሐፍ ቅዱስ ፹፩ እስከ መዝገበ ጸሎት', am: 'KEMEKOL — software, digitization, Tewahedo apps' },
    homeLead:        { en: 'Software engineering and institutional digitization — and the Orthodox Tewahedo apps used by over 1.5 million believers, fully offline.', am: 'የሶፍትዌር ልማትና የይዘት ዲጂታይዜሽን — እንዲሁም ከ1.5 ሚሊዮን በላይ ምእመናን የሚጠቀሙባቸው የተዋሕዶ መተግበሪያዎች፤ ሁሉም ከኢንተርኔት ውጪ።' },
    searchToday:     { en: 'What people search today', am: 'ሰዎች ዛሬ የሚፈልጉት' },
    searchTodaySub:  { en: 'The six most-requested answers, one tap away.', am: 'በብዛት የሚጠየቁት ስድስቱ መልሶች፣ በአንድ ነካ።' },
    impactTitle:     { en: 'Kemekol in numbers', am: 'ከመኮል በቁጥር' },
    stat1:           { en: 'App installs', am: 'የመተግበሪያ ጫኝዎች' },
    stat2:           { en: 'Average Play Store rating', am: 'አማካይ የPlay Store ደረጃ' },
    stat3:           { en: 'Canonical Bible books', am: 'የቀኖና መጻሕፍት' },
    stat4:           { en: 'Enterprise digitization', am: 'የድርጅት ዲጂታይዜሽን' },
    stat4v:          { en: 'Ge’ez · Amharic · OCR', am: 'ግዕዝ · አማርኛ · OCR' },
    flagship:        { en: 'Flagship application', am: 'ዋናው መተግበሪያ' },
    featuredApps:    { en: 'Built by Kemekol', am: 'በከመኮል የተሠሩ' },
    forOrgs:         { en: 'For churches, publishers & institutions', am: 'ለአብያተ ክርስቲያናት፣ አሳታሚዎች እና ድርጅቶች' },
    forOrgsLead:     { en: 'We turn shelves of printed and handwritten material into searchable digital archives, and we build the web and mobile software that serves them.', am: 'የታተሙና በእጅ የተጻፉ መጻሕፍትን ወደ ሊፈለግ የሚችል ዲጂታል መዝገብ እንቀይራለን፤ የሚያገለግላቸውንም የድረ-ገጽ እና የሞባይል ሶፍትዌር እንሠራለን።' },

    /* bible */
    bibleTitle:      { en: 'The Ethiopian Orthodox Bible — all 81 books', am: 'የኢትዮጵያ ኦርቶዶክስ መጽሐፍ ቅዱስ — ፹፩ መጻሕፍት' },
    bibleLead:       { en: 'The widest canon in Christendom: 46 books of the Old Testament and 35 of the New, including Enoch, Jubilees, 1–3 Meqabyan, Sirach and the Books of the Covenant. Browse every book with its Ge’ez, Amharic and English title, chapter count and summary.', am: 'በክርስትና ዓለም ሰፊው ቀኖና፦ ፵፮ የብሉይ ኪዳን እና ፴፭ የሐዲስ ኪዳን መጻሕፍት፤ ሄኖክ፣ ኩፋሌ፣ ፩–፫ መቃብያን፣ ሲራክ እና መጽሐፈ ኪዳንን ጨምሮ። እያንዳንዱን መጽሐፍ በግዕዝ፣ በአማርኛና በእንግሊዝኛ ስሙ፣ በምዕራፍ ቁጥሩና በማብራሪያው ይመልከቱ።' },
    ot:              { en: 'Old Testament', am: 'ብሉይ ኪዳን' },
    nt:              { en: 'New Testament', am: 'ሐዲስ ኪዳን' },
    ethUnique:       { en: 'Ethiopian canon only', am: 'የኢትዮጵያ ቀኖና ብቻ' },
    chapters:        { en: 'chapters', am: 'ምዕራፎች' },
    bibleCta:        { en: 'Read all 81 books offline with parallel Ge’ez, Amharic & English in the Tewahedo One App.', am: '፹፩ መጻሕፍትን በግዕዝ፣ በአማርኛና በእንግሊዝኛ ጎን ለጎን፣ ከኢንተርኔት ውጪ በተዋሕዶ ፩ መተግበሪያ ያንብቡ።' },
    groupLaw:        { en: 'Law (Orit)', am: 'ኦሪት' },
    groupHistory:    { en: 'History', am: 'ታሪክ' },
    groupWisdom:     { en: 'Wisdom', am: 'ጥበብ' },
    groupProphets:   { en: 'Prophets', am: 'ነቢያት' },
    groupGospels:    { en: 'Gospels', am: 'ወንጌላት' },
    groupActs:       { en: 'Acts', am: 'ግብረ ሐዋርያት' },
    groupEpistles:   { en: 'Epistles', am: 'መልእክታት' },
    groupRevelation: { en: 'Revelation', am: 'ራእይ' },
    groupOrder:      { en: 'Church Order', am: 'ሥርዓተ ቤተክርስቲያን' },
    versePreview:    { en: 'Verse preview', am: 'የጥቅስ ቅንጭብ' },

    /* prayers */
    prayerTitle:     { en: 'Mezgebe Tselot — the treasury of prayer', am: 'መዝገበ ጸሎት' },
    prayerLead:      { en: 'Wudase Mariam for every day of the week, Anqetse Birhan, Yewedswa Melaekt, Melka Yesus, Melka Mariam and Mezmure Dawit — in Ge’ez with Amharic, Tigrigna and English alongside.', am: 'የሳምንቱ ሰባቱ ቀናት ውዳሴ ማርያም፣ አንቀጸ ብርሃን፣ ይዌድስዋ መላእክት፣ መልክአ ኢየሱስ፣ መልክአ ማርያም እና መዝሙረ ዳዊት — በግዕዝ ከአማርኛ፣ ከትግርኛና ከእንግሊዝኛ ጋር።' },
    chooseDay:       { en: 'Wudase Mariam by day', am: 'ውዳሴ ማርያም በየቀኑ' },
    chooseDaySub:    { en: 'Select a day to read its portion.', am: 'የዕለቱን ክፍል ለማንበብ ቀን ይምረጡ።' },
    dailyPrayers:    { en: 'Daily prayers & hymns', am: 'የዘወትር ጸሎቶችና ምሕልላዎች' },

    /* fathers */
    fathersTitle:    { en: 'Haymanote Abew — the faith of the fathers', am: 'ሃይማኖተ አበው' },
    fathersLead:     { en: 'The patristic witness of the Church on the Incarnation and the Holy Trinity, from Athanasius and Cyril to Chrysostom and Dioscorus — the dogmatic foundation of Tewahedo Christology.', am: 'ቅዱሳን አባቶች ስለ ሥጋዌና ስለ ቅድስት ሥላሴ ያስተማሩት፤ ከአትናቴዎስና ከቄርሎስ እስከ አፈወርቅና ዲዮስቆሮስ — የተዋሕዶ ክርስቶሳዊ ትምህርት መሠረት።' },
    aiPreview:       { en: 'Tewahedo AI — ask the fathers', am: 'ተዋሕዶ AI — አባቶችን ይጠይቁ' },
    aiPreviewLead:   { en: 'An assistant trained strictly on Orthodox Tewahedo sources: Haymanote Abew, the Fetha Negest, the Sinksar and the canonical scriptures. Answers cite the father and the work. In development.', am: 'በኦርቶዶክስ ተዋሕዶ ምንጮች ብቻ የሠለጠነ አጋዥ፦ ሃይማኖተ አበው፣ ፍትሐ ነገሥት፣ ስንክሳር እና ቀኖናዊ መጻሕፍት። መልሶቹ አባቱንና መጽሐፉን ይጠቅሳሉ። በሂደት ላይ።' },

    /* gitsawe */
    gitsaweTitle:    { en: 'Gitsawe, Sinksar & Bahire Hasab', am: 'ግጻዌ፣ ስንክሳር እና ባሕረ ሐሳብ' },
    gitsaweLead:     { en: 'Today’s liturgical readings, the saints commemorated today, and the Church’s computation of the calendar — plus the seven official fasts of the Ethiopian Orthodox Tewahedo Church.', am: 'የዕለቱ ግጻዌ፣ የዕለቱ ስንክሳር እና የቤተ ክርስቲያን ባሕረ ሐሳብ — እንዲሁም ሰባቱ አጽዋማት።' },
    today:           { en: 'Today', am: 'ዛሬ' },
    readingsToday:   { en: 'Today’s readings', am: 'የዕለቱ ምንባባት' },
    commemToday:     { en: 'Commemorated today', am: 'የዕለቱ ክብረ በዓል' },
    readingsNote:    { en: 'The full Gitsawe for every day of the Ethiopian year, with the Kidase portion and the Sinksar reading, is published in the Gitsawe app.', am: 'የዓመቱ ሁሉ ሙሉ ግጻዌ፣ ከቅዳሴውና ከስንክሳር ምንባብ ጋር፣ በግጻዌ መተግበሪያ ይገኛል።' },
    fastsTitle:      { en: 'The seven fasts', am: 'ሰባቱ አጽዋማት' },
    fastDays:        { en: 'days', am: 'ቀናት' },
    monthlyTitle:    { en: 'Monthly commemorations (1–30)', am: 'የወርኃዊ ክብረ በዓላት (፩–፴)' },

    /* christian life */
    lifeTitle:       { en: 'Amde Haymanot — pillars of faith & Christian life', am: 'ዓምደ ሃይማኖት እና ክርስቲያናዊ ሕይወት' },
    lifeLead:        { en: 'Clear Orthodox answers on the intercession of the saints, the honour of St Mary, fasting, holy icons and the Tabot — with the Five Pillars of Mystery, the Seven Sacraments, and a searchable directory of Christian names and their Ge’ez meanings.', am: 'ስለ ቅዱሳን ልመና፣ ስለ እመቤታችን ክብር፣ ስለ ጾም፣ ስለ ቅዱሳት ሥዕላትና ስለ ታቦት ግልጽ የኦርቶዶክስ መልሶች — ከአምስቱ አዕማደ ምሥጢር፣ ከሰባቱ ምሥጢራተ ቤተክርስቲያን እና ከክርስትና ስሞች መዝገብ ጋር።' },
    pillarsTitle:    { en: 'The Five Pillars of Mystery', am: 'አምስቱ አዕማደ ምሥጢር' },
    sacramentsTitle: { en: 'The Seven Sacraments', am: 'ሰባቱ ምሥጢራተ ቤተክርስቲያን' },
    faqTitle:        { en: 'Orthodox Q&A', am: 'ጥያቄና መልስ' },
    namesTitle:      { en: 'Christian names directory', am: 'የክርስትና ስሞች መዝገብ' },
    namesLead:       { en: 'Baptismal names in Ge’ez with transliteration and meaning.', am: 'የክርስትና ስሞች በግዕዝ፣ በላቲን ጽሕፈትና በትርጉማቸው።' },
    namesM:          { en: 'Male', am: 'ወንድ' },
    namesF:          { en: 'Female', am: 'ሴት' },

    /* store */
    storeTitle:      { en: 'Orthodox marketplace', am: 'ኦርቶዶክሳዊ የገበያ ማዕከል' },
    storeLead:       { en: 'Prayer books, netela and kemis, hand crosses, frankincense and holy icons — ordered through the Kemekol app and delivered in Addis Ababa.', am: 'የጸሎት መጻሕፍት፣ ነጠላና ቀሚስ፣ የእጅ መስቀል፣ ዕጣን እና ቅዱሳት ሥዕላት — በከመኮል መተግበሪያ ታዝዘው በአዲስ አበባ ይደርሳሉ።' },
    orderInApp:      { en: 'Order in the app', am: 'በመተግበሪያው ያዝዙ' },

    /* apps */
    appsTitle:       { en: 'Our applications', am: 'መተግበሪያዎቻችን' },
    appsLead:        { en: 'Eight published Android applications, offline-first and multilingual, with a combined 1.5 million+ installs and ratings from 4.8 to 5.0 stars.', am: 'ስምንት የታተሙ የAndroid መተግበሪያዎች፤ ከኢንተርኔት ውጪ የሚሠሩና በበርካታ ቋንቋዎች፤ በጥቅሉ ከ1.5 ሚሊዮን በላይ ጫኝዎችና ከ4.8 እስከ 5.0 ኮከብ ደረጃ።' },
    installs:        { en: 'installs', am: 'ጫኝዎች' },

    /* services */
    servicesTitle:   { en: 'Software engineering & digitization services', am: 'የሶፍትዌር እና ዲጂታይዜሽን አገልግሎቶች' },
    servicesLead:    { en: 'We are the engineering team behind apps that hold entire libraries and run without a network. We bring that discipline to client work.', am: 'ሙሉ መጻሕፍት ቤትን የሚይዙና ያለ ኢንተርኔት የሚሠሩ መተግበሪያዎችን የሠራው ቡድን እኛ ነን። ይህንኑ ጥንካሬ ለደንበኞች ሥራ እናውላለን።' },
    svc1:            { en: 'Custom web application development', am: 'የድረ-ገጽ ልማት' },
    svc1b:           { en: 'Corporate sites, portals, dashboards and content platforms — fast, accessible, and built to be indexed. Full Amharic and Ge’ez typography support, not an afterthought.', am: 'የድርጅት ድረ-ገጾች፣ ፖርታሎች፣ ዳሽቦርዶች እና የይዘት መድረኮች — ፈጣን፣ ተደራሽ እና በፍለጋ ሞተሮች በቀላሉ የሚገኙ። የአማርኛና የግዕዝ ጽሕፈት ድጋፍ ከመሠረቱ።' },
    svc2:            { en: 'Mobile application engineering', am: 'የሞባይል መተግበሪያ ልማት' },
    svc2b:           { en: 'Flutter and native Android, shipped and maintained at scale — our own apps serve over 1.5 million users with offline storage, search over large text corpora, and sub-second cold starts.', am: 'Flutter እና Native Android፤ በስፋት ተሠርተው የሚተዳደሩ — የእኛዎቹ መተግበሪያዎች ከ1.5 ሚሊዮን በላይ ተጠቃሚዎችን በውስጥ ማከማቻ፣ በትልቅ ጽሑፍ ላይ ፍለጋ እና በፍጥነት መከፈት ያገለግላሉ።' },
    svc3:            { en: 'Heritage & institutional content digitization', am: 'የቅርስ እና የድርጅት ይዘት ዲጂታይዜሽን' },
    svc3b:           { en: 'Scanning and OCR pipelines for Ge’ez and Amharic manuscripts, parish records, archives and printed books — producing structured, searchable, preservation-grade digital editions.', am: 'የግዕዝና የአማርኛ ብራናዎች፣ የአጥቢያ መዝገቦች፣ መዛግብትና የታተሙ መጻሕፍት ስካን እና OCR — ተዋቅረው የሚፈለጉና ለረጅም ዘመን የሚቆዩ ዲጂታል ቅጂዎች።' },
    svc4:            { en: 'AI & custom knowledge base integration', am: 'የAI እና የእውቀት መዝገብ ትስስር' },
    svc4b:           { en: 'Retrieval systems and assistants grounded strictly in your own corpus, with citations back to the source document — no invented answers.', am: 'በራስዎ መዛግብት ላይ ብቻ የተመሠረቱ የፍለጋ ሥርዓቶችና አጋዦች፤ መልሱ ወደ ምንጩ ሰነድ ተጠቅሶ — የተፈጠረ መልስ የለም።' },
    engageTitle:     { en: 'How we work', am: 'የሥራ ሂደታችን' },
    step1:           { en: 'Discovery', am: 'ጥናት' },
    step1b:          { en: 'We read the material and the constraints before we propose anything.', am: 'ከማንኛውም ሐሳብ በፊት ይዘቱንና ገደቦቹን እናጠናለን።' },
    step2:           { en: 'Prototype', am: 'ናሙና' },
    step2b:          { en: 'A working slice in weeks, not a slide deck.', am: 'በሳምንታት ውስጥ የሚሠራ ናሙና፤ የገለጻ ሰነድ አይደለም።' },
    step3:           { en: 'Build', am: 'ልማት' },
    step3b:          { en: 'Iterative delivery with your team in the loop.', am: 'ከቡድንዎ ጋር በየደረጃው የሚቀርብ ልማት።' },
    step4:           { en: 'Handover & care', am: 'ርክክብ እና ድጋፍ' },
    step4b:          { en: 'Documentation, training and a maintenance window.', am: 'ሰነድ፣ ሥልጠና እና የጥገና ጊዜ።' },
    discuss:         { en: 'Discuss a project', am: 'ፕሮጀክት ያማክሩን' },

    /* about */
    aboutTitle:      { en: 'About Kemekol', am: 'ስለ ከመኮል' },
    aboutLead:       { en: 'Kemekol was founded in Addis Ababa on a simple observation: Ethiopia’s written heritage is immense, and almost none of it was usable on a phone. So we started building — carefully, with the Church’s texts treated as texts, not content.', am: 'ከመኮል በአዲስ አበባ የተመሠረተው በአንድ ቀላል እውነት ነው፦ የኢትዮጵያ የጽሑፍ ቅርስ ሰፊ ነው፤ በስልክ ላይ ግን ጥቂቱ እንኳ አይገኝም ነበር። ስለዚህ መሥራት ጀመርን — የቤተ ክርስቲያንን መጻሕፍት በጥንቃቄ፣ እንደ ቅዱስ ጽሑፍ እያከበርን።' },
    pillarsEng:      { en: 'Our engineering pillars', am: 'የምሕንድስና መሠረቶቻችን' },
    ep1:             { en: 'Offline-first architecture', am: 'ከኢንተርኔት ውጪ ቀዳሚ አሠራር' },
    ep1b:            { en: 'The whole library ships with the app. No network, no subscription, no interruption in the middle of a prayer.', am: 'ሙሉ መጻሕፍት ቤቱ ከመተግበሪያው ጋር ይመጣል። ኢንተርኔት፣ ክፍያ ወይም በጸሎት መካከል መቋረጥ የለም።' },
    ep2:             { en: 'Multilingual precision', am: 'የቋንቋ ትክክለኝነት' },
    ep2b:            { en: 'Ge’ez, Amharic, Tigrigna, Afaan Oromoo and English — correct glyphs, correct line breaking, correct collation for search.', am: 'ግዕዝ፣ አማርኛ፣ ትግርኛ፣ አፋን ኦሮሞ እና እንግሊዝኛ — ትክክለኛ ፊደል፣ ትክክለኛ የመስመር ክፍፍል፣ ለፍለጋ ትክክለኛ ቅደም ተከተል።' },
    ep3:             { en: 'Clean UI/UX', am: 'ንጹሕ የተጠቃሚ ገጽታ' },
    ep3b:            { en: 'Large readable type, high contrast, no clutter. Our users read for an hour at a time, often at dawn.', am: 'ትልቅና ሊነበብ የሚችል ጽሕፈት፣ ጥርት ያለ ልዩነት፣ ያለ ግርግር። ተጠቃሚዎቻችን በተለይ በጎህ ሰዓት ለአንድ ሰዓት ያነባሉ።' },
    ep4:             { en: 'Security & integrity', am: 'ደኅንነት እና ትክክለኛነት' },
    ep4b:            { en: 'Texts are verified against published editions and version-controlled. No telemetry on what you read.', am: 'ጽሑፎች ከታተሙ ቅጂዎች ጋር ተመሳክረው በመዝገብ ይጠበቃሉ። የሚያነቡትን አንከታተልም።' },
    missionTitle:    { en: 'Mission', am: 'ተልእኮ' },
    missionBody:     { en: 'To put the full written tradition of the Ethiopian Orthodox Tewahedo Church into every believer’s hand in a form they can read, search and trust — and to bring the same engineering standard to the institutions we serve as clients.', am: 'የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያንን ሙሉ የጽሑፍ ትውፊት ለማንበብ፣ ለመፈለግና ለመታመን በሚያስችል መልክ በየምእመኑ እጅ ማድረስ — እንዲሁም ያንኑ የምሕንድስና ደረጃ ለደንበኛ ድርጅቶቻችን ማቅረብ።' },

    /* contact */
    contactTitle:    { en: 'Contact us', am: 'ያግኙን' },
    contactLead:     { en: 'Tell us what you need built or digitized. We reply from Addis Ababa, usually within two working days.', am: 'ምን እንዲሠራ ወይም ዲጂታል እንዲሆን እንደሚፈልጉ ይንገሩን። ከአዲስ አበባ፣ አብዛኛውን ጊዜ በሁለት የሥራ ቀናት ውስጥ እንመልሳለን።' },
    fName:           { en: 'Full name', am: 'ሙሉ ስም' },
    fEmail:          { en: 'Email', am: 'ኢሜይል' },
    fOrg:            { en: 'Organization / Church', am: 'ድርጅት / ቤተ ክርስቲያን' },
    fType:           { en: 'Inquiry type', am: 'የጥያቄ ዓይነት' },
    fMsg:            { en: 'Message', am: 'መልእክት' },
    fSend:           { en: 'Send inquiry', am: 'መልእክት ይላኩ' },
    fSendNote:       { en: 'This opens your email client with the message pre-filled, addressed to contact.kemekol@gmail.com.', am: 'ይህ መልእክቱ ተሞልቶ የኢሜይል ፕሮግራምዎን ወደ contact.kemekol@gmail.com ይከፍታል።' },
    t_web:           { en: 'Web application development', am: 'የድረ-ገጽ ልማት' },
    t_mobile:        { en: 'Mobile app development', am: 'የሞባይል መተግበሪያ ልማት' },
    t_digi:          { en: 'Book & document digitization / OCR', am: 'የመጻሕፍትና ሰነድ ዲጂታይዜሽን / OCR' },
    t_support:       { en: 'App support & feedback', am: 'የመተግበሪያ ድጋፍና አስተያየት' },
    t_partner:       { en: 'Partnership', am: 'የጋራ ሥራ' },
    contactCard:     { en: 'Direct details', am: 'የቀጥታ አድራሻ' },
    emailLabel:      { en: 'Official email', am: 'መደበኛ ኢሜይል' },
    locLabel:        { en: 'Location', am: 'አድራሻ' },
    playLabel:       { en: 'Google Play', am: 'Google Play' },
    playValue:       { en: 'Kemekol developer profile', am: 'የከመኮል አሳታሚ መገለጫ' },
    copy:            { en: 'Copy', am: 'ቅዳ' },
    copied:          { en: 'Copied', am: 'ተቀድቷል' },

    /* reader */
    scanToInstall:   { en: 'Scan to install on your phone', am: 'በስልክዎ ለመጫን ይቅኑ' },
    continueInApp:   { en: 'Continue reading in the app', am: 'በመተግበሪያው ማንበብ ይቀጥሉ' },
    inAppNote:       { en: 'This is a short excerpt published for reference. The complete text, with every day and every parallel language, is in the app.', am: 'ይህ ለማጣቀሻ የቀረበ አጭር ቅንጭብ ነው። ሙሉው ጽሑፍ፣ የሁሉም ቀናትና ትርጉሞች ጋር፣ በመተግበሪያው ውስጥ ይገኛል።' },
    geez:            { en: 'Ge’ez', am: 'ግዕዝ' },
    amharic:         { en: 'Amharic', am: 'አማርኛ' },
    tigrigna:        { en: 'Tigrigna', am: 'ትግርኛ' },
    english:         { en: 'English', am: 'እንግሊዝኛ' }
  };

  let lang = 'en';
  try { lang = localStorage.getItem('kemekol-lang') || 'en'; } catch (e) {}
  if (lang !== 'am') lang = 'en';

  const listeners = [];

  const I18N = {
    get lang() { return lang; },
    /** t('key') or t({en,am}) */
    t(k) {
      if (!k) return '';
      if (typeof k === 'object') return k[lang] || k.en || '';
      const e = T[k];
      return e ? (e[lang] || e.en) : k;
    },
    other() { return lang === 'en' ? 'am' : 'en'; },
    set(next) {
      if (next !== 'en' && next !== 'am') return;
      lang = next;
      try { localStorage.setItem('kemekol-lang', lang); } catch (e) {}
      I18N.apply();
      listeners.forEach(fn => fn(lang));
    },
    onChange(fn) { listeners.push(fn); },
    apply() {
      document.documentElement.lang = lang;
      document.querySelectorAll('[data-i18n]').forEach(el => {
        el.textContent = I18N.t(el.getAttribute('data-i18n'));
      });
      document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        el.setAttribute('placeholder', I18N.t(el.getAttribute('data-i18n-ph')));
      });
      document.querySelectorAll('[data-nav]').forEach(el => {
        el.textContent = I18N.t('nav_' + el.getAttribute('data-nav'));
      });
      document.querySelectorAll('.lang-switch button').forEach(b => {
        b.classList.toggle('is-active', b.getAttribute('data-lang') === lang);
      });
    },
    table: T
  };

  root.I18N = I18N;
})(window);
