
/* FEATURES: quote calculator, free audit, consultation booking, case studies, insights */
(function(){
var WA='17034390209';
function lg(){try{var l=localStorage.getItem('ys_lang');return ['en','ar','ku'].indexOf(l)>=0?l:'en'}catch(e){return 'en'}}
function $(i){return document.getElementById(i)}
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;')}
function wa(msg){return 'https://wa.me/'+WA+'?text='+encodeURIComponent(msg)}

var X={
en:{ck:"Instant estimate",ch:"What will your website cost?",cd:"Pick your options and see an instant estimate. The final quote is always confirmed after a short call.",
ct:"Website type",types:["Microsite|Landing page or small site","Business website|Up to 6 pages, custom design","Online store|Full e-commerce with payments"],
ca:"Add-ons",adds:[["Online booking system",150],["Extra language",100],["Copywriting for your pages",200],["Logo & brand identity",300]],
rush:"Rush delivery (7 days)",careL:"Add the Care Plan — maintenance & support",careP:"+$10",
tot:"Estimated total",once:"one-time",perm:"/mo",cnote:"Estimate only. Every project gets a custom quote.",ccta:"Send this estimate on WhatsApp",
ak:"Free audit",ah:"Already have a website? Get a free audit.",ad:"Send us your current website and we will review its speed, design and search visibility — and tell you honestly what to fix. Free, with no obligation.",
an:"Your name",ae:"Email",au:"Your current website",am:"What bothers you about it? (optional)",ab:"Request my free audit",aok:"Thanks! WhatsApp should open with your audit request.",
bk:"Free consultation",bh:"Book a free 30-minute call",bd:"Pick a day and time that suits you, and we will confirm on WhatsApp.",
bdate:"Preferred date",btime:"Preferred time",bname:"Your name",bphone:"Phone / WhatsApp",btopic:"What do you want to discuss?",
topics:["Website design","Online store","Microsite","Brand identity","Something else"],
bb:"Confirm via WhatsApp",bnote:"This sends a booking request — we confirm the time in our reply.",et:"Eastern Time",
csb:"Case study",cch:"The challenge",cso:"What we built",cre:"The outcome",
ik:"Insights",ih:"Notes on websites that sell",read:"Read article",less:"Show less"},
ar:{ck:"تقدير فوري",ch:"كم سيكلف موقعك؟",cd:"اختر ما يناسبك وشاهد التقدير فوراً. يُؤكَّد السعر النهائي دائماً بعد مكالمة قصيرة.",
ct:"نوع الموقع",types:["موقع مصغر|صفحة هبوط أو موقع صغير","موقع شركة|حتى 6 صفحات، تصميم مخصص","متجر إلكتروني|تجارة كاملة مع الدفع"],
ca:"إضافات",adds:[["نظام حجز إلكتروني",150],["لغة إضافية",100],["كتابة محتوى صفحاتك",200],["شعار وهوية بصرية",300]],
rush:"تسليم سريع (7 أيام)",careL:"أضف خطة الصيانة — صيانة ودعم",careP:"+10$",
tot:"التقدير الإجمالي",once:"دفعة واحدة",perm:"/شهر",cnote:"تقدير فقط. كل مشروع يحصل على عرض سعر مخصص.",ccta:"أرسل هذا التقدير عبر واتساب",
ak:"تدقيق مجاني",ah:"عندك موقع؟ احصل على تدقيق مجاني.",ad:"أرسل لنا موقعك الحالي وسنراجع سرعته وتصميمه وظهوره في البحث — ونخبرك بصراحة بما يجب إصلاحه. مجاناً وبدون أي التزام.",
an:"اسمك",ae:"البريد الإلكتروني",au:"موقعك الحالي",am:"ما الذي يزعجك فيه؟ (اختياري)",ab:"اطلب تدقيقي المجاني",aok:"شكراً! سيفتح واتساب مع طلب التدقيق.",
bk:"استشارة مجانية",bh:"احجز مكالمة مجانية (30 دقيقة)",bd:"اختر اليوم والوقت المناسبين لك، وسنؤكد عبر واتساب.",
bdate:"التاريخ المفضل",btime:"الوقت المفضل",bname:"اسمك",bphone:"الهاتف / واتساب",btopic:"ما الذي تريد مناقشته؟",
topics:["تصميم موقع","متجر إلكتروني","موقع مصغر","هوية بصرية","شيء آخر"],
bb:"أكّد عبر واتساب",bnote:"هذا يرسل طلب حجز — نؤكد الوقت في ردّنا.",et:"بتوقيت شرق أمريكا",
csb:"دراسة الحالة",cch:"التحدي",cso:"ما بنيناه",cre:"النتيجة",
ik:"مقالات",ih:"ملاحظات عن مواقع تبيع",read:"اقرأ المقال",less:"إخفاء"},
ku:{ck:"خەمڵاندنی خێرا",ch:"ماڵپەڕەکەت چەند دەکەوێت؟",cd:"هەڵبژاردنەکانت بکە و خەمڵاندنەکە یەکسەر ببینە. نرخی کۆتایی هەمیشە دوای پەیوەندییەکی کورت پشتڕاست دەکرێتەوە.",
ct:"جۆری ماڵپەڕ",types:["ماڵپەڕی بچووک|لاپەڕەی نیشتن یان ماڵپەڕی بچووک","ماڵپەڕی کۆمپانیا|تا ٦ لاپەڕە، دیزاینی تایبەت","فرۆشگای ئەنتەرنێتی|بازرگانی تەواو بە پارەدان"],
ca:"زیادکراوەکان",adds:[["سیستەمی حیجزکردنی ئەلیکترۆنی",150],["زمانێکی زیادە",100],["نووسینی ناوەڕۆکی لاپەڕەکانت",200],["لۆگۆ و ناسنامەی بینراو",300]],
rush:"گەیاندنی خێرا (٧ ڕۆژ)",careL:"پلانی چاوەدێری زیاد بکە — چاوەدێری و پشتگیری",careP:"+$10",
tot:"کۆی خەمڵاندن",once:"یەکجار",perm:"/مانگ",cnote:"تەنها خەمڵاندنە. هەر پرۆژەیەک نرخی تایبەتی خۆی وەردەگرێت.",ccta:"ئەم خەمڵاندنە بە واتسئەپ بنێرە",
ak:"پشکنینی بەخۆڕایی",ah:"ماڵپەڕت هەیە؟ پشکنینێکی بەخۆڕایی وەربگرە.",ad:"ماڵپەڕی ئێستات بۆمان بنێرە و خێرایی و دیزاین و دەرکەوتنی لە گەڕاندا دەپشکنین — و بە ڕاستگۆیی پێت دەڵێین چی پێویستە چاک بکرێت. بەخۆڕایی و بەبێ هیچ پابەندبوونێک.",
an:"ناوەکەت",ae:"ئیمەیڵ",au:"ماڵپەڕی ئێستات",am:"چی تێیدا بێزارت دەکات؟ (ئارەزوومەندانە)",ab:"پشکنینە بەخۆڕاییەکەم داوا بکە",aok:"سوپاس! واتسئەپ دەکرێتەوە بە داواکاری پشکنینەکەت.",
bk:"ڕاوێژکاری بەخۆڕایی",bh:"پەیوەندییەکی بەخۆڕایی ٣٠ خولەکی حیجز بکە",bd:"ڕۆژ و کاتێک هەڵبژێرە کە بۆت گونجاوە، و بە واتسئەپ پشتڕاستی دەکەینەوە.",
bdate:"بەرواری پێشنیازکراو",btime:"کاتی پێشنیازکراو",bname:"ناوەکەت",bphone:"تەلەفۆن / واتسئەپ",btopic:"دەتەوێت باسی چی بکەیت؟",
topics:["دیزاینی ماڵپەڕ","فرۆشگای ئەنتەرنێتی","ماڵپەڕی بچووک","ناسنامەی بینراو","شتێکی تر"],
bb:"بە واتسئەپ پشتڕاست بکە",bnote:"ئەمە داواکاری حیجزکردن دەنێرێت — کاتەکە لە وەڵامەکەماندا پشتڕاست دەکەینەوە.",et:"بە کاتی ڕۆژهەڵاتی ئەمریکا",
csb:"نموونەی پرۆژە",cch:"ئاستەنگەکە",cso:"ئەوەی دروستمان کرد",cre:"ئەنجامەکە",
ik:"وتارەکان",ih:"تێبینی لەسەر ماڵپەڕە فرۆشتنەکان",read:"وتارەکە بخوێنەوە",less:"کەمتر پیشان بدە"}
};
var BASE=[499,999,2999];

var CS=[
{n:"Utah Pharma",meta:{en:"Pharmaceutical company · United States",ar:"شركة أدوية · الولايات المتحدة",ku:"کۆمپانیای دەرمانسازی · ئەمریکا"},
ch:{en:"A brand-new pharmaceutical company needed to look established from day one — in pharma, partners and investors judge credibility by your website first.",
ar:"شركة أدوية جديدة كلياً احتاجت أن تبدو راسخة منذ اليوم الأول — ففي عالم الأدوية يحكم الشركاء والمستثمرون على المصداقية من الموقع أولاً.",
ku:"کۆمپانیایەکی دەرمانسازی تەواو نوێ پێویستی بوو لە یەکەم ڕۆژەوە جێگیر دیار بێت — لە جیهانی دەرماندا، هاوبەش و وەبەرهێنەران یەکەم جار لە ماڵپەڕەوە باوەڕپێکراوی دەسەلمێنن."},
so:{en:"We designed the full brand identity — navy U monogram, teal Wasatch mountain motif — and built a bilingual cinematic website with product, principles and global distribution sections.",
ar:"صممنا الهوية البصرية الكاملة — شعار U الكحلي وزخرفة جبال واساتش الفيروزية — وبنينا موقعاً سينمائياً بلغتين مع أقسام للمنتجات والمبادئ والتوزيع العالمي.",
ku:"ناسنامەی بینراوی تەواومان دیزاین کرد — مۆنۆگرامی Uی دەریایی و مۆتیفی چیای واساتچی تیل — و ماڵپەڕێکی سینەمایی دوو زمانیمان دروست کرد بە بەشەکانی بەرهەم و بنەماکان و دابەشکردنی جیهانی."},
re:{en:"A launch-ready brand and website that present the company as credible and established from the very first visit.",
ar:"علامة وموقع جاهزان للإطلاق يقدّمان الشركة بصورة موثوقة وراسخة منذ أول زيارة.",
ku:"براند و ماڵپەڕێکی ئامادە بۆ کردنەوە کە کۆمپانیاکە لە یەکەم سەردانەوە بە باوەڕپێکراو و جێگیر پیشان دەدات."}},
{n:"Damascus Village",meta:{en:"Syrian restaurant · Bridgeview, Illinois",ar:"مطعم سوري · بريدجفيو، إلينوي",ku:"چێشتخانەی سوری · بریجویو، ئیلینۆی"},
ch:{en:"An authentic Syrian breakfast restaurant was known by word of mouth, but its menu and story were invisible to anyone searching online.",
ar:"مطعم فطور سوري أصيل كان معروفاً بالسمعة فقط، لكن قائمته وقصته كانتا غائبتين عمّن يبحث على الإنترنت.",
ku:"چێشتخانەیەکی نانی بەیانی سوری ڕەسەن تەنها بە ناوبانگی دەنگۆ ناسرابوو، بەڵام مێنیو و چیرۆکەکەی بۆ ئەوانەی لە ئینتەرنێتدا دەگەڕان نەدەبینران."},
so:{en:"A cinematic website with the full menu and prices, real dish photography, hours and directions — plus a designed share image so links look right on WhatsApp, verified playing on iPhone.",
ar:"موقع سينمائي بالقائمة الكاملة والأسعار وصور أطباق حقيقية وساعات العمل والاتجاهات — مع صورة مشاركة مصممة تظهر الروابط بشكل صحيح على واتساب، وتم التحقق من عمله على آيفون.",
ku:"ماڵپەڕێکی سینەمایی بە مێنیوی تەواو و نرخەکان و وێنەی ڕاستەقینەی خواردنەکان و کاتەکانی کار و ئاراستەکان — لەگەڵ وێنەی هاوبەشکردنی دیزاینکراو بۆ ئەوەی بەستەرەکان لە واتسئەپ بە دروستی دەربکەون، و لەسەر ئایفۆن تاقیکرایەوە."},
re:{en:"Guests can now explore the menu and find the restaurant online before they ever walk in.",
ar:"أصبح بإمكان الضيوف الآن تصفح القائمة والعثور على المطعم عبر الإنترنت قبل أن يصلوا إليه.",
ku:"ئێستا میوانەکان دەتوانن پێش گەیشتن مێنیوەکە ببینن و چێشتخانەکە لە ئینتەرنێتدا بدۆزنەوە."}},
{n:"ARQO",meta:{en:"Heritage fashion brand · Mesopotamian identity",ar:"علامة أزياء تراثية · هوية رافدينية",ku:"براندی جلوبەرگی میراتی · ناسنامەی میزۆپۆتامیا"},
ch:{en:"A brand built on Mesopotamian civilization — scarves, jewelry and limited collections — needed an online home as distinctive as the pieces themselves.",
ar:"علامة مبنية على حضارة بلاد الرافدين — أوشحة ومجوهرات ومجموعات محدودة — احتاجت بيتاً على الإنترنت يليق بتميّز قطعها.",
ku:"براندێک لەسەر شارستانیەتی میزۆپۆتامیا دروستکراوە — لەچک و زێڕینگەری و کۆمەڵە سنووردارەکان — پێویستی بە ماڵێکی ئینتەرنێتی بوو بە قەد تایبەتمەندی پارچەکانی خۆی."},
so:{en:"A cinematic English website with collection showcases, an archive section and a custom-order flow, delivered as a clean standalone file for the client.",
ar:"موقع سينمائي بالإنجليزية مع عرض للمجموعات وقسم للأرشيف ومسار للطلبات الخاصة، سُلِّم كملف مستقل نظيف للعميل.",
ku:"ماڵپەڕێکی سینەمایی ئینگلیزی بە پیشاندانی کۆمەڵەکان و بەشی ئەرشیف و ڕێڕەوی داواکاری تایبەت، وەک فایلێکی سەربەخۆی پاک بۆ کڕیارەکە گەیەندرا."},
re:{en:"A brand experience that matches the products' civilizational identity and supports made-to-order pieces.",
ar:"تجربة علامة تضاهي الهوية الحضارية للمنتجات وتدعم القطع المصنوعة حسب الطلب.",
ku:"ئەزموونێکی براند کە لەگەڵ ناسنامە شارستانیەتییەکەی بەرهەمەکان دەگونجێت و پشتگیری پارچە تایبەتەکان دەکات."}},
{n:"Darna",meta:{en:"Middle Eastern restaurant · Babylon, Iraq",ar:"مطعم شرقي · بابل، العراق",ku:"چێشتخانەی ڕۆژهەڵاتی ناوەڕاست · بابل، عێراق"},
ch:{en:"A large restaurant in Babylon–Hilla needed its entire menu online in three languages, plus reservations that work without any booking platform.",
ar:"مطعم كبير في بابل – الحلة احتاج قائمته كاملة على الإنترنت بثلاث لغات، وحجوزات تعمل دون أي منصة حجز.",
ku:"چێشتخانەیەکی گەورە لە بابل – حلە پێویستی بوو هەموو مێنیوەکەی بە سێ زمان لە ئینتەرنێتدا بێت، لەگەڵ حیجزکردنێک کە بەبێ هیچ پلاتفۆرمێک کار بکات."},
so:{en:"A trilingual cinematic site with a searchable 238-item menu using the restaurant's real photos, and a reservation form that composes a WhatsApp request to the team.",
ar:"موقع سينمائي بثلاث لغات مع قائمة قابلة للبحث من 238 صنفاً بصور المطعم الحقيقية، ونموذج حجز يُنشئ طلباً جاهزاً عبر واتساب إلى الفريق.",
ku:"ماڵپەڕێکی سینەمایی سێ زمانی بە مێنیویەکی ٢٣٨ بڕگەیی گەڕانپێکراو بە وێنە ڕاستەقینەکانی چێشتخانەکە، و فۆرمێکی حیجزکردن کە داواکارییەکی واتسئەپ بۆ تیمەکە دروست دەکات."},
re:{en:"Guests browse the full menu in Arabic, English or Kurdish and reserve a table in a few taps.",
ar:"يتصفح الضيوف القائمة كاملة بالعربية أو الإنجليزية أو الكردية ويحجزون طاولة بضغطات قليلة.",
ku:"میوانەکان مێنیوی تەواو بە عەرەبی، ئینگلیزی یان کوردی دەبینن و بە چەند لێدانێک مێزێک حیجز دەکەن."}},
{n:"MedSpa by RayRay",meta:{en:"Medical spa · Plano, Texas",ar:"عيادة تجميل وعافية · بلانو، تكساس",ku:"کلینیکی جوانکاری و تەندروستی · پلانۆ، تێکساس"},
ch:{en:"A busy med spa with a 4.8-star reputation needed online appointment requests and a website that shows its full range of treatments beautifully.",
ar:"عيادة تجميل مزدحمة بسمعة 4.8 نجوم احتاجت طلبات حجز إلكترونية وموقعاً يعرض مجموعتها الكاملة من العلاجات بشكل جميل.",
ku:"کلینیکێکی جوانکاری قەرەباڵغ بە ناوبانگی ٤.٨ ئەستێرە پێویستی بە داواکاری حیجزکردنی ئەلیکترۆنی و ماڵپەڕێک بوو کە هەموو چارەسەرەکانی بە جوانی پیشان بدات."},
so:{en:"A cinematic website organized by departments, with featured treatments, real photography and reviews, and a 5-step appointment wizard that ends in a pre-filled message to the studio.",
ar:"موقع سينمائي منظّم بالأقسام، مع علاجات مميزة وصور وتقييمات حقيقية، ومعالج حجز من 5 خطوات ينتهي برسالة جاهزة إلى الاستوديو.",
ku:"ماڵپەڕێکی سینەمایی بەپێی بەشەکان ڕێکخراوە، بە چارەسەری دیاریکراو و وێنە و هەڵسەنگاندنی ڕاستەقینە، و جادووگەری حیجزکردنی ٥ هەنگاو کە بە نامەیەکی ئامادە بۆ ستۆدیۆکە کۆتایی دێت."},
re:{en:"Clients request appointments online end-to-end, and the site carries the spa's real 4.8-star Google reputation.",
ar:"يطلب العملاء المواعيد إلكترونياً من البداية للنهاية، ويحمل الموقع سمعة العيادة الحقيقية 4.8 نجوم على Google.",
ku:"کڕیارەکان بە تەواوی لە ئینتەرنێتدا داوای کات دەکەن، و ماڵپەڕەکە ناوبانگی ڕاستەقینەی ٤.٨ ئەستێرەی Googleی کلینیکەکە هەڵدەگرێت."}},
{n:"2B Health",meta:{en:"Healthcare manufacturer & exporter · United States",ar:"شركة منتجات صحية مصنّعة ومصدّرة · الولايات المتحدة",ku:"کۆمپانیای تەندروستی بەرهەمهێنەر و هەناردەکار · ئەمریکا"},
ch:{en:"An American healthcare manufacturer and distributor needed a website that speaks to pharmacies, hospitals and importers worldwide — with the credibility of an established global company from the first visit.",
ar:"شركة منتجات صحية أمريكية مصنّعة وموزّعة احتاجت موقعاً يخاطب الصيدليات والمستشفيات والمستوردين حول العالم — بمصداقية شركة عالمية راسخة منذ أول زيارة.",
ku:"کۆمپانیایەکی تەندروستی ئەمریکی بەرهەمهێنەر و دابەشکار پێویستی بە ماڵپەڕێک بوو کە لەگەڵ دەرمانخانە و نەخۆشخانە و هاوردەکاران لە هەموو جیهان قسە بکات — بە باوەڕپێکراوی کۆمپانیایەکی جیهانی جێگیر لە یەکەم سەردانەوە."},
so:{en:"We built a 13-section cinematic website on the company's official brand identity: custom video for every section, a filterable 12-product catalogue, cold-chain logistics and safety pages, a 36-question help centre and partner enquiry flows — live on its own domain, 2b.health.",
ar:"بنينا موقعاً سينمائياً من ١٣ قسماً على الهوية الرسمية للشركة: فيديو مخصص لكل قسم، وكتالوج ١٢ منتجاً قابلاً للتصفية، وصفحات لوجستيات سلسلة التبريد والسلامة، ومركز مساعدة من ٣٦ سؤالاً ومسارات استفسار للشركاء — منشور على نطاقه الخاص 2b.health.",
ku:"ماڵپەڕێکی سینەمایی ١٣ بەشیمان دروست کرد لەسەر ناسنامەی فەرمی کۆمپانیاکە: ڤیدیۆی تایبەت بۆ هەر بەشێک، کاتالۆگی ١٢ بەرهەمی پاڵاوتنخواز، لاپەڕەکانی لۆجستیکی زنجیرەی ساردکەرەوە و سەلامەتی، سەنتەری یارمەتی ٣٦ پرسیار و ڕێڕەوی پرسیاری هاوبەشان — زیندووە لەسەر دۆمەینی خۆی، 2b.health."},
re:{en:"A global-facing flagship website that presents Two Brothers Health as a trusted American manufacturer and export partner in every market it serves.",
ar:"موقع رئيسي بواجهة عالمية يقدّم Two Brothers Health كمصنّع أمريكي موثوق وشريك تصدير في كل سوق تخدمه.",
ku:"ماڵپەڕێکی سەرەکی بە ڕووی جیهانی کە Two Brothers Health وەک بەرهەمهێنەرێکی ئەمریکی متمانەپێکراو و هاوبەشی هەناردە نیشان دەدات لە هەموو بازاڕێکدا."}},
{n:"Currec Greece",meta:{en:"Dietary supplements brand · Greece",ar:"علامة مكملات غذائية · اليونان",ku:"براندی تەواوکەری خۆراکی · یۆنان"},
ch:{en:"A Greek supplements maker with its own product lines needed an online store that sells directly to customers worldwide — and presents its manufacturing quality and facilities with the same confidence as its products.",
ar:"شركة مكملات غذائية يونانية لديها خطوط منتجات خاصة بها احتاجت متجراً إلكترونياً يبيع مباشرة للعملاء حول العالم — ويعرض جودة تصنيعها ومنشآتها بنفس ثقة منتجاتها.",
ku:"بەرهەمهێنەرێکی تەواوکەری خۆراکی یۆنانی کە هێڵی بەرهەمی تایبەتی خۆی هەیە پێویستی بە فرۆشگایەکی ئۆنلاین بوو کە ڕاستەوخۆ بفرۆشێت بە کڕیارانی هەموو جیهان — و کوالیتی بەرهەمهێنان و دامەزراوەکانی بە هەمان متمانەی بەرهەمەکانی پیشان بدات."},
so:{en:"We built its Shopify storefront: a video-hero homepage, a catalogue of its own-label lines — Vaccicurre, Thyrocare, Oculis, Nerovacurre, MioraCare, Irocurr and Curealo — facilities and manufacturing-process sections, and a worldwide-delivery storefront.",
ar:"بنينا واجهة متجرها على Shopify: صفحة رئيسية بفيديو رئيسي، وكتالوج لخطوط منتجاتها الخاصة — Vaccicurre وThyrocare وOculis وNerovacurre وMioraCare وIrocurr وCurealo — وأقسام للمنشآت وخطوات التصنيع، وواجهة توصيل حول العالم.",
ku:"ڕووکاری فرۆشگاکەیمان لەسەر Shopify دروست کرد: لاپەڕەی سەرەکی بە ڤیدیۆی هیرۆ، کاتالۆگێک بۆ هێڵە بەرهەمە تایبەتەکانی — Vaccicurre وThyrocare وOculis وNerovacurre وMioraCare وIrocurr وCurealo — بەشەکانی دامەزراوەکان و هەنگاوەکانی بەرهەمهێنان، و ڕووکارێکی گەیاندن بۆ هەموو جیهان."},
re:{en:"The store is live at currecgreece.com, selling the brand's own supplement lines to customers worldwide.",
ar:"المتجر منشور على currecgreece.com ويبيع خطوط المكملات الخاصة بالعلامة للعملاء حول العالم.",
ku:"فرۆشگاکە لە currecgreece.com زیندووە و هێڵەکانی تەواوکەری تایبەتی براندەکە دەفرۆشێت بە کڕیارانی هەموو جیهان."}},
{n:"Core Aesthetic",meta:{en:"Med spa & weight loss · Falls Church, VA",ar:"منتجع طبي وإنقاص وزن · فولز تشيرش، فرجينيا",ku:"سپای پزیشکی و کێش کەمکردنەوە · فۆڵز چێرچ، ڤیرجینیا"},
ch:{en:"A physician-led med spa in Falls Church needed a website that presents its philosophy — natural, science-backed results, no hype — as clearly as its treatments, with pricing patients can check before they ever call.",
ar:"منتجع طبي بقيادة أطباء في فولز تشيرش احتاج موقعاً يعرض فلسفته — نتائج طبيعية مدعومة بالعلم، بلا مبالغة — بنفس وضوح علاجاته، مع أسعار يستطيع المرضى الاطلاع عليها قبل أن يتصلوا.",
ku:"سپایەکی پزیشکی بە سەرپەرشتی پزیشک لە فۆڵز چێرچ پێویستی بە ماڵپەڕێک بوو کە فەلسەفەکەی پیشان بدات — ئەنجامی سروشتی بە پشتگیری زانست، بێ زیادەڕۆیی — بە هەمان ڕوونی چارەسەرەکانی، بە نرخانێک کە نەخۆشەکان دەتوانن پێش پەیوەندیکردن بیانبینن."},
so:{en:"We built a cinematic one-page journey: reception and lounge chapters, four treatment groups — injectables, skin & laser, body and wellness — with published prices, verified client reviews, a before-and-after gallery, and a booking section with the address, phone and directions.",
ar:"بنينا رحلة سينمائية من صفحة واحدة: فصول الاستقبال والصالة، وأربع مجموعات علاجات — الحقن، والبشرة والليزر، والجسم، والعافية — بأسعار منشورة، وتقييمات عملاء موثقة، ومعرض قبل وبعد، وقسم حجز بالعنوان والهاتف والاتجاهات.",
ku:"گەشتێکی سینەمایی یەک لاپەڕەمان دروست کرد: بەشەکانی پێشوازی و هۆڵ، چوار گروپی چارەسەر — دەرزی، پێست و لەیزەر، جەستە و تەندروستی — بە نرخە بڵاوکراوەکان، هەڵسەنگاندنی پشتڕاستکراوی کڕیاران، گەلەری پێش و دوا، و بەشی حیجزکردن بە ناونیشان و مۆبایل و ئاراستەکان."},
re:{en:"The site is live, presenting Core Aesthetic's treatments, prices and client reviews with a direct path to booking a visit in Falls Church.",
ar:"الموقع منشور ويعرض علاجات Core Aesthetic وأسعارها وتقييمات عملائها مع مسار مباشر لحجز زيارة في فولز تشيرش.",
ku:"ماڵپەڕەکە زیندووە و چارەسەر و نرخ و هەڵسەنگاندنی کڕیارانی Core Aesthetic پیشان دەدات بە ڕێگایەکی ڕاستەوخۆ بۆ حیجزکردنی سەردان لە فۆڵز چێرچ."}},
{n:"YESES SOLUTION",meta:{en:"Web design studio · Virginia",ar:"استوديو تصميم مواقع · فرجينيا",ku:"ستۆدیۆی دیزاینی وێب · ڤێرجینیا"},
ch:{en:"Our own studio website had grown to 1.17 MB in a single page — on phones it painted slowly and showed white screens while loading.",ar:"موقع الاستوديو نفسه كبر حتى وصل إلى ١٫١٧ ميغابايت في صفحة واحدة — وعلى الجوال كان يرسم ببطء ويعرض شاشات بيضاء أثناء التحميل.",ku:"ماڵپەڕی ستۆدیۆکەی خۆمان گەورە بووبوو تا ١٫١٧ مێگابایت لە یەک پەڕەدا — لەسەر مۆبایل بە هێواشی دەکێشرا و شاشەی سپی پیشان دەدا لە کاتی بارکردندا."},
so:{en:"We rebuilt how it loads: portfolio covers moved out of the code into compressed files that load only when scrolled to, fonts stopped blocking the first paint, the 3D library moved to the end of the page, and a self-update check keeps every visitor on the latest version.",ar:"أعدنا بناء طريقة تحميله: صور الأعمال خرجت من الكود إلى ملفات مضغوطة تُحمّل فقط عند الوصول إليها، والخطوط توقفت عن حجب أول رسم، ومكتبة الرسوميات نُقلت لآخر الصفحة، وفحص تحديث ذاتي يُبقي كل زائر على أحدث نسخة.",ku:"شێوازی بارکردنیمان لە نوێ بنیات نا: وێنەکانی کارەکان لە کۆدەکە هاتنە دەرەوە بۆ فایلی پاڵێوراو کە تەنها کاتێک باردەکرێن کە دەگەیتە لایان، فۆنتەکان وەستان لە گیرکردنی یەکەم کێشان، کتێبخانەی 3D چووە کۆتایی پەڕەکە، و پشکنینی نوێکردنەوەی خۆکار هەموو سەردانکەرێک لەسەر نوێترین وەشان دەهێڵێتەوە."},
re:{en:"The homepage fell from 1,176 KB to 274 KB — 77% lighter — and now paints immediately, even on a first visit from a phone. It is the same speed work we do for clients.",ar:"الصفحة الرئيسية انخفضت من ١٬١٧٦ إلى ٢٧٤ كيلوبايت — أخف بنسبة ٧٧٪ — وترسم الآن فوراً حتى في أول زيارة من جوال. إنه نفس عمل السرعة الذي نقدمه لعملائنا.",ku:"پەڕەی سەرەکی لە ١٬١٧٦ کیلۆبایتەوە دابەزی بۆ ٢٧٤ کیلۆبایت — ٧٧٪ سووکتر — و ئێستا دەستبەجێ دەکێشرێت، تەنانەت لە یەکەم سەردان لە مۆبایلەوە. هەمان کاری خێراییە کە بۆ کڕیارەکانمان دەیکەین."}}
];

var ART=[
{t:{en:"How much does a website cost in 2026?",ar:"كم يكلف إنشاء موقع إلكتروني في 2026؟",ku:"تێچووی ماڵپەڕێک لە ٢٠٢٦ چەندە؟"},
x:{en:"Microsite, business site or online store — what really drives the price, and what to watch out for.",
ar:"موقع مصغر أم موقع شركة أم متجر — ما الذي يحدد السعر فعلاً، وما الذي يجب أن تنتبه له.",
ku:"ماڵپەڕی بچووک، ماڵپەڕی کۆمپانیا یان فرۆشگا — چی بەڕاستی نرخەکە دیاری دەکات و دەبێت ئاگاداری چی بیت."},
b:{en:["Most small businesses pay between $499 and $2,999 for a professional website. A microsite (a landing page or a small site) starts around $499. A full business website with up to six pages is usually around $999. A complete online store with products, payments and shipping starts around $2,999.",
"What changes the price is not the number of pages alone. An online booking system, extra languages, written content and a full brand identity each add work — and value. Ongoing care matters too: updates, backups and security typically cost about $10 a month, or less on a yearly plan.",
"Be careful with quotes that look too cheap. A website that loads slowly, breaks on phones or cannot be found on Google costs you customers every week. A clear quote, a delivery date and ownership of your own site are worth more than the lowest price."],
ar:["تدفع أغلب الشركات الصغيرة بين 499$ و2999$ مقابل موقع احترافي. الموقع المصغر (صفحة هبوط أو موقع صغير) يبدأ من حوالي 499$. وموقع الشركة الكامل حتى ست صفحات يكون عادةً حوالي 999$. أما المتجر الإلكتروني الكامل بالمنتجات والدفع والشحن فيبدأ من حوالي 2999$.",
"الذي يغيّر السعر ليس عدد الصفحات وحده. نظام الحجز الإلكتروني واللغات الإضافية وكتابة المحتوى والهوية البصرية الكاملة، كل منها يضيف عملاً — وقيمة. والصيانة المستمرة مهمة أيضاً: التحديثات والنسخ الاحتياطي والحماية تكلف عادةً حوالي 10$ شهرياً، أو أقل مع الخطة السنوية.",
"احذر العروض الرخيصة جداً. الموقع البطيء أو الذي يتعطل على الجوال أو لا يظهر في Google يكلّفك عملاء كل أسبوع. عرض سعر واضح وموعد تسليم محدد وملكية كاملة لموقعك أهم من السعر الأقل."],
ku:["زۆربەی کارە بچووکەکان لە نێوان ٤٩٩$ و ٢٩٩٩$ دەدەن بۆ ماڵپەڕێکی پیشەیی. ماڵپەڕی بچووک (لاپەڕەی نیشتن یان ماڵپەڕێکی بچووک) لە دەوروبەری ٤٩٩$ دەست پێدەکات. ماڵپەڕی تەواوی کۆمپانیا تا شەش لاپەڕە بەزۆری دەوروبەری ٩٩٩$ە. فرۆشگای ئەلیکترۆنی تەواو بە بەرهەم و پارەدان و گەیاندنەوە لە دەوروبەری ٢٩٩٩$ دەست پێدەکات.",
"ئەوەی نرخەکە دەگۆڕێت تەنها ژمارەی لاپەڕەکان نییە. سیستەمی حیجزکردن، زمانە زیادەکان، نووسینی ناوەڕۆک و ناسنامەی بینراوی تەواو، هەریەکەیان کار — و بەها — زیاد دەکەن. چاوەدێری بەردەوامیش گرنگە: نوێکردنەوە و پاشەکەوت و ئاسایش بەزۆری دەوروبەری ١٠$ مانگانە دەکەوێت، یان کەمتر بە پلانی ساڵانە.",
"ئاگاداری نرخە زۆر هەرزانەکان بە. ماڵپەڕێکی خاو، یان ئەوەی لەسەر مۆبایل دەشکێت یان لە Google نادۆزرێتەوە، هەموو هەفتەیەک کڕیار لەدەست دەدەیت. نرخێکی ڕوون و بەرواری گەیاندن و خاوەندارێتی تەواوی ماڵپەڕەکەت لە هەرزانترین نرخ گرنگترە."]}},
{t:{en:"5 things every local business website must have",ar:"5 أشياء يجب أن تتوفر في موقع أي شركة محلية",ku:"٥ شت کە دەبێت لە ماڵپەڕی هەر کارێکی خۆجێی هەبێت"},
x:{en:"Most visitors decide in seconds. These five basics decide whether they call you — or your competitor.",
ar:"أغلب الزوار يقررون خلال ثوانٍ. هذه الأساسيات الخمسة تحدد إن كانوا سيتصلون بك — أم بمنافسك.",
ku:"زۆربەی سەردانکەران لە چەند چرکەیەکدا بڕیار دەدەن. ئەم پێنج بنەمایە بڕیار دەدات ئایا پەیوەندیت پێوە دەکەن — یان بە ڕکابەرەکەت."},
b:{en:["1. Mobile-first design. Most of your visitors arrive from a phone. If buttons are hard to tap or text is hard to read, they leave. 2. One-tap contact. Your phone number and WhatsApp should be one tap away on every page — not hidden inside a contact form.",
"3. Location and hours. Show your address, a map link and your opening hours where Google and visitors can find them. 4. Real photos. People trust real photos of your place, your team and your work far more than stock images. 5. Reviews. Honest reviews from real customers are the strongest reason a stranger chooses you.",
"Add fast loading to all of that: if your site takes more than a few seconds to open, most visitors never see it at all. Get these five right and your website starts working like your best employee."],
ar:["1. تصميم يبدأ من الجوال. أغلب زوارك يأتون من الهاتف؛ إن صعُب الضغط على الأزرار أو قراءة النص، يغادرون. 2. تواصل بضغطة واحدة. رقم هاتفك وواتساب يجب أن يكونا على بُعد ضغطة واحدة في كل صفحة — لا مخفيين داخل نموذج.",
"3. الموقع وساعات العمل. اعرض عنوانك ورابط الخريطة وساعات عملك حيث يجدها Google والزوار. 4. صور حقيقية. الناس يثقون بصور حقيقية لمكانك وفريقك وعملك أكثر بكثير من الصور الجاهزة. 5. التقييمات. التقييمات الصادقة من عملاء حقيقيين هي أقوى سبب يجعل غريباً يختارك.",
"أضف إلى ذلك سرعة التحميل: إن احتاج موقعك أكثر من ثوانٍ قليلة ليفتح، فلن يراه أغلب الزوار أصلاً. طبّق هذه الخمسة وسيبدأ موقعك بالعمل كأفضل موظف عندك."],
ku:["١. دیزاینی مۆبایل-پێشەنگ. زۆربەی سەردانکەرانت لە مۆبایلەوە دێن؛ ئەگەر دوگمەکان سەخت بن بۆ لێدان یان دەق سەخت بێت بۆ خوێندنەوە، دەڕۆن. ٢. پەیوەندی بە یەک لێدان. ژمارەی تەلەفۆن و واتسئەپت دەبێت لە هەموو لاپەڕەیەک بە یەک لێدان بەردەست بن — نەک لە فۆرمێکدا شارابێنەوە.",
"٣. شوێن و کاتەکانی کار. ناونیشان و بەستەری نەخشە و کاتەکانی کارکردنت پیشان بدە لەو شوێنەی Google و سەردانکەران دەیدۆزنەوە. ٤. وێنەی ڕاستەقینە. خەڵک زۆر زیاتر متمانە بە وێنەی ڕاستەقینەی شوێنەکەت و تیمەکەت و کارەکەت دەکەن وەک لە وێنە ئامادەکان. ٥. هەڵسەنگاندنەکان. هەڵسەنگاندنی ڕاستگۆیانە لە کڕیارە ڕاستەقینەکان بەهێزترین هۆکارە بۆ ئەوەی کەسێکی نامۆ تۆ هەڵبژێرێت.",
"خێرایی بارکردنیش بۆ هەموو ئەمانە زیاد بکە: ئەگەر ماڵپەڕەکەت زیاتر لە چەند چرکەیەک بخایەنێت بۆ کردنەوە، زۆربەی سەردانکەران هەرگیز نایبینن. ئەم پێنجە ڕاست بکە و ماڵپەڕەکەت دەست دەکات بە کارکردن وەک باشترین کارمەندت."]}},
{t:{en:"Website or social media? Why your business needs both",ar:"موقع إلكتروني أم سوشيال ميديا؟ لماذا يحتاج عملك الاثنين",ku:"ماڵپەڕ یان سۆشیال میدیا؟ بۆچی کارەکەت هەردووکی پێویستە"},
x:{en:"Social media rents you attention. Your website is the home you own. Here is how they work together.",
ar:"السوشيال ميديا تستأجر لك الانتباه، أما موقعك فهو البيت الذي تملكه. إليك كيف يعملان معاً.",
ku:"سۆشیال میدیا سەرنجت بۆ بە کرێ دەدات. ماڵپەڕەکەت ئەو ماڵەیە کە خاوەنیت. ئەمە چۆنێتی کارکردنیان پێکەوەیە."},
b:{en:["Social media is rented land. The platform decides who sees your posts, and an account problem can erase years of work overnight. Your website is yours: your domain, your rules, your customer list.",
"The two do different jobs. Social media is where people discover you and watch your work. Your website is where they check your menu or prices, read reviews, book and buy — and it is what shows up when someone searches Google for what you do.",
"Businesses that rely on social media alone lose every customer who searches instead of scrolling. Use social to bring people in — and a website to turn them into customers."],
ar:["السوشيال ميديا أرض مستأجرة. المنصة تقرر من يرى منشوراتك، ومشكلة واحدة في الحساب قد تمحو سنوات من العمل في ليلة. أما موقعك فهو ملكك: نطاقك وقواعدك وقائمة عملائك.",
"ولكلٍّ منهما وظيفة مختلفة. السوشيال ميديا حيث يكتشفك الناس ويشاهدون عملك. وموقعك حيث يطّلعون على قائمتك أو أسعارك ويقرأون التقييمات ويحجزون ويشترون — وهو ما يظهر عندما يبحث أحدهم في Google عمّا تقدّمه.",
"الشركات التي تعتمد على السوشيال ميديا وحدها تخسر كل عميل يبحث بدل أن يتصفح. استخدم السوشيال لجلب الناس — والموقع لتحويلهم إلى عملاء."],
ku:["سۆشیال میدیا زەوی بەکرێیە. پلاتفۆرمەکە بڕیار دەدات کێ پۆستەکانت دەبینێت، و کێشەیەک لە هەژمارەکە دەتوانێت ساڵانێک کار لە یەک شەودا بسڕێتەوە. ماڵپەڕەکەت هی خۆتە: دۆمەینەکەت، یاساکانت، لیستی کڕیارەکانت.",
"هەردووکیان کاری جیاواز دەکەن. سۆشیال میدیا ئەو شوێنەیە کە خەڵک تۆ دەدۆزنەوە و کارەکەت دەبینن. ماڵپەڕەکەت ئەو شوێنەیە کە مێنیو یان نرخەکانت دەبینن، هەڵسەنگاندن دەخوێننەوە، حیجز دەکەن و دەکڕن — و ئەوەیە کە دەردەکەوێت کاتێک کەسێک لە Google دەگەڕێت بۆ ئەوەی تۆ پێشکەشی دەکەیت.",
"ئەو کارانەی تەنها پشت بە سۆشیال میدیا دەبەستن هەموو ئەو کڕیارانە لەدەست دەدەن کە دەگەڕێن لەبری گەڕان بە پەڕەکاندا. سۆشیال بەکاربهێنە بۆ هێنانی خەڵک — و ماڵپەڕ بۆ گۆڕینیان بۆ کڕیار."]}}
];

function money(n){return '$'+n.toLocaleString('en-US')}

function renderCalc(){
  var host=$('xcalc');if(!host)return;var L=lg(),t=X[L],te=X.en;
  var h='<div class="c pr"><p class="k">'+esc(t.ck)+'</p><h3 style="margin:0;font-size:30px;letter-spacing:-.03em">'+esc(t.ch)+'</h3>'
    +'<p style="color:var(--mut);font-size:14px;max-width:660px">'+esc(t.cd)+'</p>'
    +'<p class="xlbl">'+esc(t.ct)+'</p><div class="xopts">'
    +t.types.map(function(ty,i){var pr=ty.split('|');return '<label class="xopt"><input type="radio" name="xct" value="'+i+'"'+(i==1?' checked':'')+'><span><b>'+esc(pr[0])+'</b><span>'+esc(pr[1])+'</span></span><span class="xp">'+money(BASE[i])+'</span></label>'}).join('')
    +'</div><p class="xlbl">'+esc(t.ca)+'</p><div class="xopts">'
    +t.adds.map(function(a,i){return '<label class="xopt"><input type="checkbox" class="xad" value="'+i+'"><span><b>'+esc(a[0])+'</b></span><span class="xp">+'+money(a[1])+'</span></label>'}).join('')
    +'<label class="xopt"><input type="checkbox" id="xrush"><span><b>'+esc(t.rush)+'</b></span><span class="xp">+25%</span></label>'
    +'<label class="xopt"><input type="checkbox" id="xcare"><span><b>'+esc(t.careL)+'</b></span><span class="xp">'+esc(t.careP)+esc(t.perm)+'</span></label>'
    +'</div>'
    +'<div class="xtot"><div><div style="font-size:13px;color:var(--mut)">'+esc(t.tot)+'</div><div class="amt" id="xtot">$999</div><div style="font-size:13px;color:var(--mut)" id="xtot2"></div></div>'
    +'<a class="bt" id="xcta" href="#" target="_blank" rel="noopener" style="margin-inline-start:auto">'+esc(t.ccta)+'</a></div>'
    +'<p style="color:var(--mut);font-size:13px;margin-top:14px">'+esc(t.cnote)+'</p></div>';
  host.innerHTML=h;
  function upd(){
    var type=+(host.querySelector('input[name="xct"]:checked')||{}).value||0;
    var tot=BASE[type],sel=[];
    host.querySelectorAll('.xad').forEach(function(c){if(c.checked){tot+=t.adds[+c.value][1];sel.push(te.adds[+c.value][0])}});
    var rush=host.querySelector('#xrush').checked;
    if(rush)tot=Math.round(tot*1.25);
    var care=host.querySelector('#xcare').checked;
    host.querySelector('#xtot').textContent=money(tot)+' '+t.once+(care?' + '+money(10)+t.perm:'');
    host.querySelector('#xtot2').textContent=t.types[type].split('|')[0]+(sel.length?' · '+sel.map(function(s){return s}).join(', '):'');
    var msg='Hello YESES SOLUTION, I used the instant estimate on your website.\nType: '+te.types[type].split('|')[0]+'\nAdd-ons: '+(sel.length?sel.join(', '):'None')+'\nRush delivery: '+(rush?'Yes':'No')+'\nCare Plan: '+(care?'Yes ($10/mo)':'No')+'\nEstimate: '+money(tot)+' one-time'+(care?' + $10/mo':'')+'\nPlease confirm a final quote.';
    host.querySelector('#xcta').href=wa(msg);
  }
  host.addEventListener('change',upd);
  upd();
}

function renderAudit(){
  var host=$('xaudit');if(!host)return;var L=lg(),t=X[L];
  host.innerHTML='<p class="k">'+esc(t.ak)+'</p><h2>'+esc(t.ah)+'</h2><p style="color:var(--mut);max-width:660px;line-height:1.8">'+esc(t.ad)+'</p>'
    +'<form class="xf" id="xaf" style="margin-top:26px"><div class="two"><input name="n" required placeholder="'+esc(t.an)+'"><input name="e" type="email" required placeholder="'+esc(t.ae)+'"></div>'
    +'<input name="u" required placeholder="'+esc(t.au)+'"><textarea name="m" rows="3" placeholder="'+esc(t.am)+'"></textarea>'
    +'<div><button class="bt" type="submit" style="border:0;cursor:pointer;font-family:inherit">'+esc(t.ab)+'</button></div>'
    +'<p class="xok" id="xaok" hidden>'+esc(t.aok)+'</p></form>';
  host.querySelector('#xaf').addEventListener('submit',function(e){
    e.preventDefault();var f=e.target;
    var msg='Hello YESES SOLUTION, I would like a free audit of my website.\nName: '+f.n.value+'\nEmail: '+f.e.value+'\nMy website: '+f.u.value+(f.m.value?'\nNotes: '+f.m.value:'');
    host.querySelector('#xaok').hidden=false;
    window.open(wa(msg),'_blank');
  });
}

function renderBook(){
  var host=$('xbook');if(!host)return;var L=lg(),t=X[L];
  var today=new Date().toISOString().slice(0,10);
  var slots=['10:00 AM','12:00 PM','2:00 PM','4:00 PM','6:00 PM'];
  host.innerHTML='<p class="k">'+esc(t.bk)+'</p><h2>'+esc(t.bh)+'</h2><p style="color:var(--mut);max-width:660px;line-height:1.8">'+esc(t.bd)+'</p>'
    +'<form class="xf" id="xbf" style="margin-top:26px"><div class="two"><label><span class="xlbl" style="margin:0 0 8px;display:block">'+esc(t.bdate)+'</span><input name="d" type="date" required min="'+today+'"></label>'
    +'<label><span class="xlbl" style="margin:0 0 8px;display:block">'+esc(t.btime)+' ('+esc(t.et)+')</span><select name="tm" required>'+slots.map(function(s){return '<option>'+s+'</option>'}).join('')+'</select></label></div>'
    +'<div class="two"><input name="n" required placeholder="'+esc(t.bname)+'"><input name="ph" required placeholder="'+esc(t.bphone)+'"></div>'
    +'<select name="tp">'+t.topics.map(function(s){return '<option>'+esc(s)+'</option>'}).join('')+'</select>'
    +'<div><button class="bt" type="submit" style="border:0;cursor:pointer;font-family:inherit">'+esc(t.bb)+'</button></div>'
    +'<p style="color:var(--mut);font-size:13px;margin:0">'+esc(t.bnote)+'</p></form>';
  host.querySelector('#xbf').addEventListener('submit',function(e){
    e.preventDefault();var f=e.target;
    var msg='Hello YESES SOLUTION, I would like to book a free 30-minute consultation.\nName: '+f.n.value+'\nPhone: '+f.ph.value+'\nDate: '+f.d.value+'\nTime: '+f.tm.value+' (Eastern)\nTopic: '+f.tp.value;
    window.open(wa(msg),'_blank');
  });
}

function renderArts(){
  var k=$('xink'),hd=$('xinh'),host=$('xarts');if(!host)return;var L=lg(),t=X[L];
  if(k)k.textContent=t.ik;if(hd)hd.textContent=t.ih;
  host.innerHTML=ART.map(function(a,i){
    return '<div class="c"><h3 style="margin-top:0">'+esc(a.t[L])+'</h3><p style="color:var(--mut);line-height:1.75;font-size:14px">'+esc(a.x[L])+'</p>'
      +'<div class="xart-b" hidden>'+a.b[L].map(function(pp){return '<p>'+esc(pp)+'</p>'}).join('')+'</div>'
      +'<button class="xmore" data-art="'+i+'">'+esc(t.read)+'</button></div>';
  }).join('');
  host.querySelectorAll('[data-art]').forEach(function(btn){
    btn.addEventListener('click',function(){
      var body=btn.parentNode.querySelector('.xart-b');var open=body.hidden;body.hidden=!open;
      btn.textContent=open?X[lg()].less:X[lg()].read;
    });
  });
}

function caseButtons(){
  var names={};CS.forEach(function(c){names[c.n]=1});
  document.querySelectorAll('.g .c').forEach(function(card){
    var h3=card.querySelector('h3');if(!h3||!names[h3.textContent.trim()])return;
    if(card.querySelector('.xcsb'))return;
    var p=document.createElement('p');p.className='xcsb';
    var b=document.createElement('button');b.className='bt xcs-btn';b.type='button';
    b.style.cssText='border:0;cursor:pointer;font-family:inherit';b.textContent=X[lg()].csb;
    b.setAttribute('data-cs',h3.textContent.trim());
    p.appendChild(b);card.appendChild(p);
  });
}

var ov=null;
function openCase(name){
  var c=null;CS.forEach(function(x){if(x.n===name)c=x});if(!c)return;
  var L=lg(),t=X[L];
  if(!ov){
    ov=document.createElement('div');ov.className='xov';ov.hidden=true;
    ov.innerHTML='<div class="xov-c"><button class="xov-x" aria-label="Close">✕</button><div class="xov-in"></div></div>';
    document.body.appendChild(ov);
    ov.addEventListener('click',function(e){if(e.target===ov||e.target.closest('.xov-x')){ov.hidden=true;document.body.style.overflow='';}});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&ov&&!ov.hidden){ov.hidden=true;document.body.style.overflow='';}});
  }
  ov.querySelector('.xov-in').innerHTML='<p class="k">'+esc(t.csb)+'</p><h3>'+esc(c.n)+'</h3><p style="color:var(--mut);font-size:14px">'+esc(c.meta[L])+'</p>'
    +'<h4>'+esc(t.cch)+'</h4><p>'+esc(c.ch[L])+'</p>'
    +'<h4>'+esc(t.cso)+'</h4><p>'+esc(c.so[L])+'</p>'
    +'<h4>'+esc(t.cre)+'</h4><p>'+esc(c.re[L])+'</p>';
  ov.hidden=false;document.body.style.overflow='hidden';
  ov.scrollTop=0;
}
document.addEventListener('click',function(e){
  var b=e.target.closest&&e.target.closest('.xcs-btn');
  if(b)openCase(b.getAttribute('data-cs'));
});

function renderAll(){renderCalc();renderAudit();renderBook();renderArts();caseButtons();}
renderAll();
document.addEventListener('click',function(e){
  var b=e.target.closest&&e.target.closest('[data-l]');
  if(b)setTimeout(renderAll,250);
});
})();
