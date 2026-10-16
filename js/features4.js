
/* FEATURES 4: landing pages, personalizer, comparison, referral, guarantees,
   client project tracker, PWA, Hero sales flow. Own strings, own ids. */
(function(){
'use strict';
var WA='17034390209';
var $=function(i){return document.getElementById(i)};
function esc(x){return String(x==null?'':x).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
function lg(){try{var l=localStorage.getItem('ys_lang')||localStorage.getItem('yl');if(l&&['en','ar','ku'].indexOf(l)>=0)return l}catch(e){}var h=(document.documentElement.getAttribute('lang')||'en');return ['en','ar','ku'].indexOf(h)>=0?h:'en'}
function wa(txt){return 'https://wa.me/'+WA+'?text='+encodeURIComponent(txt)}

var T={
en:{guarK:'Our guarantees',guarH:'Promises written into every contract',guarS:'Not marketing talk — these are the terms in the agreement every client signs.',
g:[['⏱','Live in 14 days','Your website is designed, built and delivered within 14 days of starting.'],['💳','50 / 50 payments','Half to start, half only when your website is delivered. Fair and written.'],['🛡','30 days of free support','A full month of support after delivery, at no extra cost.'],['↺','2 revision rounds','We refine the design with you, twice, until it feels right.'],['🔑','You own everything','Domain, design and code are yours after the final payment.']],
cmpK:'Compare',cmpH:'Us vs. freelancers vs. agencies',cmpNote:'Competitor columns describe typical offers — the honest differences matter more than the price tag.',
cmpHead:['','YESES SOLUTION','Typical freelancer','Typical agency'],
cmpRows:[['Starting price','From $499','Varies widely','$5,000+ is common'],['Delivery time','From 14 days','Varies, often open-ended','4–8 weeks typical'],['Languages EN / AR / KU','All three, full RTL','Rarely all three','Usually extra cost'],['Revisions','2 rounds included','Often unclear','Usually billed'],['After-launch support','30 days free + Care Plan','Usually none','Monthly retainer'],['Written contract, staged payments','Yes — 50/50','Rarely','Yes']],
refH:'Refer a client — earn a free month',refP:'Happy with your website? Send us a client who signs, and your Care Plan is free for a month for every client you bring. Their site gets the same care; you get thanked properly.',
refSteps:[['Step 1','Tell a friend, colleague or fellow business owner about us.'],['Step 2','They mention your name when they sign their contract.'],['Step 3','We credit your Care Plan with a free month. No forms, no codes.']],
refBtn:'Ask about referrals',
pvK:'Instant preview',pvH:'See YOUR name on a website — right now',pvS:'Type your business name, pick your trade and a color, and watch a first sketch of your future homepage come alive.',
pvName:'Business name',pvType:'Your trade',pvTheme:'Color theme',pvCta:'I want this website',pvGo:'Send me a design like this',
types:{rest:['Restaurant / Café','Fresh flavours, every day','Today’s specials','Full menu','Book a table'],clinic:['Clinic / Med Spa','Care you can trust','Our treatments','Meet the team','Book a visit'],store:['Store / Shop','New arrivals are here','Best sellers','This week’s offers','Shop now'],salon:['Salon / Beauty','Your best look awaits','Our services','Price list','Book now'],serv:['Services / Other','We get it done','What we do','Recent work','Get a quote']},
trkK:'Client area',trkH:'Track your project',trkS:'Enter the agreement number from your contract and the email you signed with.',
trkA:'Agreement number (e.g. YS-20261015-123)',trkE:'Your email',trkBtn:'Show my project',trkWait:'Checking…',trkBad:'We could not match that agreement number and email. Check them and try again — or message us on WhatsApp.',
trkStages:['Contract signed','In production','Delivered'],trkCur:'Current step',trkClient:'Client',trkPkg:'Package',trkNote:'Questions about your project? Message us any time — replies are fast.',trkPriv:'We verify with the email on your contract — your details stay private.',
lpFrom:'Custom design from $499 · live in as little as 14 days',lpCta:'Free consultation',lpPricing:'See pricing',lpEx:'From our work:',
rec:'Help me choose a package',cons:'Free consultation',prc:'Prices',
recQ1:'Great — two quick questions and I will recommend the right package. What kind of business is it?',
recQ2:'And what do you need the website to do?',
recTypes:{rest:'Restaurant / Café',clinic:'Clinic / Med Spa',store:'Store / Shop',serv:'Services / Brand'},
recNeeds:{basic:'Show my work & info',full:'Full site: bookings, menu / services, offers',shop:'Sell online / advanced features'},
recAns:'For a {t}, the best fit is the {p} package — {pr}. It includes everything that kind of business needs. Want a free consultation to shape it around your business?',
recPkg:{basic:['Launch','$499'],full:['Growth','$999'],shop:['Scale','$2,999']},
foot:'Industry pages: ',trackLink:'Track your project',
instT:'Install YESES SOLUTION as an app — faster opening, right on your home screen.',instB:'Install'},
ar:{guarK:'ضماناتنا',guarH:'وعود مكتوبة في كل عقد',guarS:'ليست كلاماً تسويقياً — هذه هي البنود الموجودة في الاتفاق الذي يوقّعه كل عميل.',
g:[['⏱','التسليم خلال 14 يوماً','موقعك يُصمم ويُبنى ويُسلّم خلال 14 يوماً من البدء.'],['💳','الدفع 50 / 50','النصف عند البدء، والنصف الآخر فقط عند تسليم موقعك. عدلٌ مكتوب.'],['🛡','30 يوم دعم مجاني','شهر كامل من الدعم بعد التسليم دون أي تكلفة إضافية.'],['↺','جولتا مراجعة','نطوّر التصميم معك مرتين حتى يصبح مناسباً تماماً.'],['🔑','تملك كل شيء','النطاق والتصميم والكود ملكك بعد الدفعة الأخيرة.']],
cmpK:'قارن',cmpH:'نحن مقابل المستقلين مقابل الوكالات',cmpNote:'أعمدة المنافسين تصف العروض المعتادة — الفروق الصادقة أهم من السعر وحده.',
cmpHead:['','YESES SOLUTION','مصمم مستقل معتاد','وكالة معتادة'],
cmpRows:[['السعر الابتدائي','من 499$','يختلف كثيراً','5,000$+ أمر شائع'],['مدة التسليم','من 14 يوماً','متغيرة وغالباً مفتوحة','4–8 أسابيع عادة'],['اللغات: إنجليزية / عربية / كردية','الثلاث مع دعم RTL كامل','نادراً الثلاث معاً','عادة بتكلفة إضافية'],['المراجعات','جولتان مشمولتان','غالباً غير واضحة','عادة تُحتسب بتكلفة'],['الدعم بعد الإطلاق','30 يوماً مجاناً + خطة صيانة','غالباً لا يوجد','اشتراك شهري'],['عقد مكتوب ودفع مرحلي','نعم — 50/50','نادراً','نعم']],
refH:'أحضر عميلاً — واكسب شهراً مجاناً',refP:'سعيد بموقعك؟ أرسل إلينا عميلاً يوقّع، وخطّة صيانتك مجانية شهراً كاملاً عن كل عميل تحضره. موقعه يحصل على نفس العناية، وأنت تحصل على شكر يليق بك.',
refSteps:[['الخطوة 1','أخبر صديقاً أو زميلاً أو صاحب نشاط تجاري عنا.'],['الخطوة 2','يذكر اسمك عندما يوقّع عقده.'],['الخطوة 3','نضيف شهراً مجانياً إلى خطة صيانتك. بلا نماذج ولا أكواد.']],
refBtn:'اسأل عن الإحالات',
pvK:'معاينة فورية',pvH:'شاهد اسمك على موقع — الآن',pvS:'اكتب اسم نشاطك واختر مجالك ولوناً، وشاهد مسودة أولى لصفحتك الرئيسية تنبض أمامك.',
pvName:'اسم النشاط',pvType:'مجالك',pvTheme:'لون التصميم',pvCta:'أريد هذا الموقع',pvGo:'أرسلوا لي تصميماً كهذا',
types:{rest:['مطعم / مقهى','نكهات طازجة كل يوم','أطباق اليوم','القائمة الكاملة','احجز طاولة'],clinic:['عيادة / تجميل','رعاية تثق بها','علاجاتنا','تعرف على الفريق','احجز زيارة'],store:['متجر / محل','وصل حديثاً','الأكثر مبيعاً','عروض هذا الأسبوع','تسوّق الآن'],salon:['صالون / تجميل','إطلالتك الأجمل بانتظارك','خدماتنا','قائمة الأسعار','احجز الآن'],serv:['خدمات / أخرى','ننجزها لك','ماذا نقدم','أحدث أعمالنا','اطلب عرض سعر']},
trkK:'منطقة العميل',trkH:'تابع مشروعك',trkS:'أدخل رقم الاتفاق من عقدك والبريد الإلكتروني الذي وقّعت به.',
trkA:'رقم الاتفاق (مثال: YS-20261015-123)',trkE:'بريدك الإلكتروني',trkBtn:'اعرض مشروعي',trkWait:'جارٍ التحقق…',trkBad:'لم نتمكن من مطابقة رقم الاتفاق والبريد. تحقق منهما وحاول مجدداً — أو راسلنا على واتساب.',
trkStages:['تم توقيع العقد','قيد التنفيذ','تم التسليم'],trkCur:'الخطوة الحالية',trkClient:'العميل',trkPkg:'الباقة',trkNote:'أسئلة عن مشروعك؟ راسلنا في أي وقت — الرد سريع.',trkPriv:'نتحقق عبر البريد الموجود في عقدك — وبياناتك تبقى خاصة.',
lpFrom:'تصميم مخصص من 499$ · جاهز خلال 14 يوماً',lpCta:'استشارة مجانية',lpPricing:'شاهد الأسعار',lpEx:'من أعمالنا:',
rec:'ساعدني في اختيار الباقة',cons:'استشارة مجانية',prc:'الأسعار',
recQ1:'بكل سرور — سؤالان سريعان وسأرشح لك الباقة المناسبة. ما نوع نشاطك؟',
recQ2:'وماذا تريد من الموقع أن يفعل؟',
recTypes:{rest:'مطعم / مقهى',clinic:'عيادة / تجميل',store:'متجر / محل',serv:'خدمات / علامة'},
recNeeds:{basic:'عرض أعمالي ومعلوماتي',full:'موقع كامل: حجوزات، قائمة / خدمات، عروض',shop:'بيع إلكتروني / مزايا متقدمة'},
recAns:'لنشاطك ({t}) الأنسب هي باقة {p} — {pr}. تشمل كل ما يحتاجه هذا النوع من الأنشطة. هل تريد استشارة مجانية لتشكيلها حول نشاطك بالضبط؟',
recPkg:{basic:['الإطلاق','499$'],full:['النمو','999$'],shop:['التوسع','2,999$']},
foot:'صفحات القطاعات: ',trackLink:'تابع مشروعك',
instT:'ثبّت YESES SOLUTION كتطبيق — فتح أسرع، مباشرة من شاشتك الرئيسية.',instB:'تثبيت'},
ku:{guarK:'دڵنیاییەکانمان',guarH:'بەڵێنەکان لە هەموو گرێبەستێکدا نووسراوە',guarS:'قسەی بازارگەری نییە — ئەمانە ئەو مەرجانەن کە لەو ڕێککەوتنەدان هەموو کڕیارێک واژۆی دەکات.',
g:[['⏱','لە 14 ڕۆژدا گەیاندراوە','ماڵپەڕەکەت لە 14 ڕۆژی دەستپێکردن دیزاین و دروست و گەیاندراوە.'],['💳','پارەدان 50 / 50','نیوەی لە دەستپێک، نیوەکەی تر تەنها کاتێک ماڵپەڕەکەت دەدرێتەوە. دادپەروەرانە و نووسراو.'],['🛡','30 ڕۆژ پشتگیری بێ بەرامبەر','مانگێکی تەواو پشتگیری دوای گەیاندن، بێ هیچ تێچوویەکی زیادە.'],['↺','2 خولی پێداچوونەوە','دیزاینەکە دوو جار لەگەڵت دەپاڵێوین تا بە تەواوی گونجاو دەبێت.'],['🔑','هەموو شتێک هی تۆیە','دۆمەین و دیزاین و کۆد هی تۆن دوای پارەدانی کۆتایی.']],
cmpK:'بەراورد بکە',cmpH:'ئێمە بەرامبەر فریلانسەر و بریکارەکان',cmpNote:'ستوونەکانی ڕکابەرەکان پێشنیاری باو وەسف دەکەن — جیاوازییە ڕاستگۆیانەکان لە نرخەکە گرنگترن.',
cmpHead:['','YESES SOLUTION','فریلانسەری باو','بریکاری باو'],
cmpRows:[['نرخی دەستپێک','لە $499','زۆر دەگۆڕێت','$5,000+ باوە'],['کاتی گەیاندن','لە 14 ڕۆژ','دەگۆڕێت، زۆرجار کراوە','4–8 هەفتە بەزۆری'],['زمانان: ئینگلیزی / عەرەبی / کوردی','هەر سێ، RTLی تەواو','بە دەگمەن هەر سێ','بەزۆری تێچووی زیادە'],['پێداچوونەوە','2 خول لەخۆ دەگرێت','زۆرجار ناڕوونە','بەزۆری بە پارە'],['پشتگیری دوای بڵاوکردنەوە','30 ڕۆژ بێ بەرامبەر + پلانی چاودێری','بەزۆری نییە','بەشداری مانگانە'],['گرێبەستی نووسراو و پارەدانی قۆناغی','بەڵێ — 50/50','بە دەگمەن','بەڵێ']],
refH:'کڕیارێک بهێنە — مانگێکی بێ بەرامبەر ببە',refP:'بە ماڵپەڕەکەت دڵخۆشیت؟ کڕیارێکمان بنێرە واژۆ بکات، پلانی چاودێریت بۆ هەر کڕیارێک مانگێک بێ بەرامبەرە. ماڵپەڕەکەی هەمان چاودێری وەردەگرێت، تۆش سوپاسێکی گونجاو.',
refSteps:[['هەنگاوی 1','هاوڕێیەک یان هاوکارێک یان خاوەن کارێک لەبارەی ئێمەوە ئاگادار بکە.'],['هەنگاوی 2','کاتێک گرێبەستەکەی واژۆ دەکات ناوی تۆ دەهێنێت.'],['هەنگاوی 3','مانگێکی بێ بەرامبەر بۆ پلانی چاودێریت زیاد دەکەین. بێ فۆڕم و بێ کۆد.']],
refBtn:'پرسیار لەبارەی ئاماژەکان',
pvK:'پێشبینینی خێرا',pvH:'ناوی خۆت لەسەر ماڵپەڕێک ببینە — ئێستا',pvS:'ناوی کارت بنووسە، بوارەکەت و ڕەنگێک هەڵبژێرە، و سەیری یەکەم هێڵکاری پەڕەی سەرەکیت بکە زیندوو دەبێت.',
pvName:'ناوی کار',pvType:'بوارت',pvTheme:'ڕەنگی دیزاین',pvCta:'ئەم ماڵپەڕەم دەوێت',pvGo:'دیزاینێکی وەک ئەمەم بنێرن',
types:{rest:['چێشتخانە / کافێ','تامە تازەکان، هەموو ڕۆژێک','تایبەتمەندییەکانی ئەمڕۆ','مێنیوی تەواو','مێزێک حیجز بکە'],clinic:['کلینیک / جوانکاری','چاودێری کە متمانەی پێ دەکەیت','چارەسەرەکانمان','تیمەکە بناسە','سەردانێک حیجز بکە'],store:['فرۆشگا / دوکان','نوێیەکان گەیشتن','پڕفرۆشترینەکان','ئۆفەرەکانی ئەم هەفتەیە','ئێستا بکڕە'],salon:['سالۆن / جوانکاری','باشترین دیمەت چاوەڕوانت دەکات','خزمەتگوزارییەکانمان','لیستی نرخ','ئێستا حیجز بکە'],serv:['خزمەتگوزاری / تر','بۆت ئەنجام دەدەین','چی دەکەین','نوێترین کارەکان','نرخێک وەربگرە']},
trkK:'ناوچەی کڕیار',trkH:'پڕۆژەکەت بەدواداچوون بکە',trkS:'ژمارەی ڕێککەوتن لە گرێبەستەکەت و ئەو ئیمەیڵە بنووسە کە پێی واژۆت کرد.',
trkA:'ژمارەی ڕێککەوتن (نموونە: YS-20261015-123)',trkE:'ئیمەیڵەکەت',trkBtn:'پڕۆژەکەم پیشان بدە',trkWait:'چاوەڕوان بکە…',trkBad:'نەمانتوانی ژمارەی ڕێککەوتن و ئیمەیڵەکە هاوتا بکەین. پشکنین بکە و دووبارە هەوڵ بدە — یان لە واتسئەپ پەیوەندیمان پێوە بکە.',
trkStages:['گرێبەست واژۆ کرا','لە بەرهەمهێناندا','گەیاندرا'],trkCur:'هەنگاوی ئێستا',trkClient:'کڕیار',trkPkg:'بەستە',trkNote:'پرسیارت هەیە دەربارەی پڕۆژەکەت؟ هەر کاتێک نامەمان بنێرە — وەڵام خێرایە.',trkPriv:'بە ئیمەیڵی ناو گرێبەستەکەت پشتڕاست دەکەینەوە — زانیارییەکانت بە نهێنی دەمێننەوە.',
lpFrom:'دیزاینی تایبەت لە $499 · لە 14 ڕۆژدا ئامادە',lpCta:'ڕاوێژی بێ بەرامبەر',lpPricing:'نرخەکان ببینە',lpEx:'لە کارەکانمان:',
rec:'یارمەتیم بدە بەستەیەک هەڵبژێرم',cons:'ڕاوێژی بێ بەرامبەر',prc:'نرخەکان',
recQ1:'بە خۆشحاڵییەوە — دوو پرسیاری خێرا و بەستە گونجاوەکەت پێشنیار دەکەم. کارت چییە؟',
recQ2:'و دەتەوێت ماڵپەڕەکە چی بکات؟',
recTypes:{rest:'چێشتخانە / کافێ',clinic:'کلینیک / جوانکاری',store:'فرۆشگا / دوکان',serv:'خزمەتگوزاری / براند'},
recNeeds:{basic:'کار و زانیارییەکانم پیشان بدات',full:'ماڵپەڕی تەواو: حیجز، مێنیو / خزمەتگوزاری، ئۆفەر',shop:'فرۆشتنی ئۆنلاین / تایبەتمەندی پێشکەوتوو'},
recAns:'بۆ {t}، گونجاوترین بەستە {p} یە — {pr}. هەموو ئەوەی ئەم جۆرە کارە پێویستی پێیەتی لەخۆ دەگرێت. ڕاوێژێکی بێ بەرامبەرت دەوێت تا بە دەوری کارت بیچێژین؟',
recPkg:{basic:['دەستپێک','$499'],full:['گەشە','$999'],shop:['فراوانکردن','$2,999']},
foot:'پەڕەکانی بوارەکان: ',trackLink:'پڕۆژەکەم بەدواداچوون بکە',
instT:'YESES SOLUTION وەک ئەپ دابمەزرێنە — کردنەوەی خێراتر، لەسەر شاشەی سەرەکیت.',instB:'دابەزاندن'}};

var LPS=[
{slug:'lp-restaurants',em:'🍽',ex:'Darna · Damascus Village',
t:{en:['Websites for Restaurants','Websites for restaurants that fill tables','Menus people can actually read, reservations on WhatsApp, and your food photographed like it deserves — in English, Arabic & Kurdish.','Menus that load fast','Full menu with prices and photos — no PDF downloads, no pinching to zoom.','Reservations without friction','One tap starts a WhatsApp booking with date, time and party size filled in.','Found on Google & Maps','Hours, directions and reviews where hungry customers search first.','Restaurant website — Darna, Babylon–Hilla'],
ar:['مواقع للمطاعم','مواقع للمطاعم تملأ الطاولات','قوائم تُقرأ فعلاً، وحجوزات على واتساب، وطعامك مصوّر كما يستحق — بالإنجليزية والعربية والكردية.','قوائم تُحمّل بسرعة','قائمة كاملة بالأسعار والصور — بلا ملفات PDF وبلا تكبير مؤلم.','حجوزات بلا احتكاك','نقرة واحدة تبدأ حجزاً على واتساب بالتاريخ والوقت وعدد الضيوف جاهزاً.','يجدونك على Google والخرائط','الساعات والاتجاهات والتقييمات حيث يبحث الجائعون أولاً.','موقع مطعم — دارنا، بابل–الحلة'],
ku:['ماڵپەڕ بۆ چێشتخانەکان','ماڵپەڕ بۆ چێشتخانەکان کە مێزەکان پڕ دەکەن','مێنیو کە بەڕاستی دەخوێنرێتەوە، حیجز لە واتسئەپ، و خواردنەکانت وەک شایستە وێنەکراوە — بە ئینگلیزی و عەرەبی و کوردی.','مێنیو خێرا باردەکرێت','مێنیوی تەواو بە نرخ و وێنە — بێ فایلی PDF و بێ گەورەکردنی ئازاردەر.','حیجز بێ ئاستەنگ','یەک دەستلێدان حیجزێکی واتسئەپ دەست پێ دەکات بە بەروار و کات و ژمارەی میوان ئامادەکراو.','لە Google و نەخشە دەدۆزرێیتەوە','کاتەکان و ئاراستەکان و هەڵسەنگاندنەکان لەوێ کڕیارە برسییەکان یەکەم دەگەڕێن.','ماڵپەڕی چێشتخانە — دارنا، بابل–حیللە']}},
{slug:'lp-clinics',em:'✚',ex:'The MedSpa by RayRay · QPGG Health',
t:{en:['Websites for Clinics & Med Spas','Websites for clinics that book appointments','Elegant treatment pages, trust-building design and booking that ends in a message your front desk can act on.','Treatments, beautifully listed','Every service with its own page — clear, calm and premium.','Booking in five taps','A guided request flow that arrives as a ready-to-confirm message.','Trust before the first visit','Real photos, reviews and credentials where patients look for them.','Clinic website — The MedSpa by RayRay, Plano TX'],
ar:['مواقع للعيادات والمنتجعات الطبية','مواقع للعيادات تحجز المواعيد','صفحات علاجات أنيقة وتصميم يبني الثقة وحجز ينتهي برسالة يستطيع موظف الاستقبال التصرف بها.','علاجات معروضة بجمال','كل خدمة بصفحتها الخاصة — واضحة وهادئة وراقية.','حجز بخمس نقرات','طلب موجّه يصل كرسالة جاهزة للتأكيد.','ثقة قبل الزيارة الأولى','صور حقيقية وتقييمات واعتمادات حيث يبحث المرضى عنها.','موقع عيادة — ذا ميد سبا باي راي راي، بلانو تكساس'],
ku:['ماڵپەڕ بۆ کلینیک و سپا پزیشکییەکان','ماڵپەڕ بۆ کلینیکەکان کە چاوپێکەوتن حیجز دەکەن','پەڕەی چارەسەری ڕێکوپێک و دیزاینی متمانەساز و حیجزکردن کە بە نامەیەک کۆتایی دێت کە پێشوازی دەتوانێت کاری پێ بکات.','چارەسەرەکان، بە جوانی ڕیزکراون','هەر خزمەتگوزارییەک پەڕەی خۆی — ڕوون و ئارام و باڵا.','حیجز بە پێنج دەستلێدان','داواکارییەکی ڕێنماییکراو کە وەک نامەیەکی ئامادەی پشتڕاستکردنەوە دەگات.','متمانە پێش یەکەم سەردان','وێنەی ڕاستەقینە و هەڵسەنگاندن و باوەڕنامە لەوێ نەخۆشەکان دەیانگەڕێن.','ماڵپەڕی کلینیک — مێدسپای ڕەیڕەی، پلانۆ تێکساس']}},
{slug:'lp-stores',em:'🛍',ex:'Yeses Store',
t:{en:['Websites for Stores & Shops','Store websites that turn browsing into buying','Product pages that load instantly, look premium and lead straight to checkout — or to a WhatsApp order if you prefer.','Products that shine','Fast galleries, clear prices and offers placed where eyes land.','Checkout without friction','Short paths from product to payment — fewer abandoned carts.','Sell in three languages','English, Arabic & Kurdish storefronts with proper right-to-left.','Our own store — Yeses, yesesofficial.com'],
ar:['مواقع للمتاجر والمحال','مواقع متاجر تحوّل التصفح إلى شراء','صفحات منتجات تُحمّل فوراً وتبدو راقية وتقود مباشرة للدفع — أو لطلب واتساب إن فضّلت.','منتجات تتألق','معارض سريعة وأسعار واضحة وعروض حيث تقع العين.','دفع بلا احتكاك','مسارات قصيرة من المنتج إلى الدفع — سلال مهجورة أقل.','بِع بثلاث لغات','واجهات بالإنجليزية والعربية والكردية باتجاه صحيح.','متجرنا نفسه — Yeses، yesesofficial.com'],
ku:['ماڵپەڕ بۆ فرۆشگا و دوکانەکان','ماڵپەڕی فرۆشگا کە گەڕان دەکاتە کڕین','پەڕەی بەرهەم کە دەستبەجێ باردەکرێن، باڵا دەردەکەون و ڕاستەوخۆ دەبەنە پارەدان — یان داواکاری واتسئەپ ئەگەر پێت باشە.','بەرهەمەکان دەدرەوشێنەوە','گەلەری خێرا و نرخی ڕوون و ئۆفەر لەوێ چاو دەکەوێت.','پارەدان بێ ئاستەنگ','ڕێگەی کورت لە بەرهەمەوە بۆ پارەدان — سەبەتەی جێهێڵراوی کەمتر.','بە سێ زمان بفرۆشە','ڕووکاری ئینگلیزی و عەرەبی و کوردی بە ئاراستەی دروست.','فرۆشگاکەی خۆمان — Yeses، yesesofficial.com']}},
{slug:'lp-brands',em:'✦',ex:'Utah Pharma · ARQO · Aqeel Fantasia',
t:{en:['Websites for Brands & Services','Brand websites that look established from day one','Identity, story and services presented cinematically — the credibility partners and clients judge you by.','A story worth telling','Heritage, craft and vision told in motion, not paragraphs.','Services that sell themselves','Clear offers, proof and one obvious next step on every page.','Built to be shared','Links that look perfect on WhatsApp, Instagram and search.','Brand website — Utah Pharma, United States'],
ar:['مواقع للعلامات والخدمات','مواقع علامات تبدو راسخة من اليوم الأول','الهوية والقصة والخدمات معروضة سينمائياً — المصداقية التي يحكم بها الشركاء والعملاء عليك.','قصة تستحق أن تُروى','الإرث والحرفة والرؤية تُروى بالحركة لا بالفقرات.','خدمات تبيع نفسها','عروض واضحة وأدلة وخطوة تالية واحدة جلية في كل صفحة.','مصمم ليُشارك','روابط تبدو مثالية على واتساب وإنستغرام والبحث.','موقع علامة — يوتاه فارما، الولايات المتحدة'],
ku:['ماڵپەڕ بۆ براند و خزمەتگوزارییەکان','ماڵپەڕی براند کە لە یەکەم ڕۆژەوە جێگیر دەردەکەوێت','ناسنامە و چیرۆک و خزمەتگوزاری بە شێوەی سینەمایی پیشان دراوە — ئەو باوەڕپێکراوییەی هاوبەش و کڕیار پێی هەڵت دەسەنگێنن.','چیرۆکێک شایانی گێڕانەوە','کەلەپوور و پیشە و بینین بە جووڵە دەگێڕدرێت، نەک بە پەرەگراف.','خزمەتگوزاری کە خۆی دەفرۆشێت','پێشنیاری ڕوون و بەڵگە و یەک هەنگاوی داهاتووی ئاشکرا لە هەر پەڕەیەک.','بۆ هاوبەشکردن دروستکراوە','بەستەر کە لە واتسئەپ و ئینستاگرام و گەڕان بە تەواوی دەردەکەون.','ماڵپەڕی براند — یوتا فارما، ئەمریکا']}}
];

/* ---------- guarantees (home) ---------- */
function guarHTML(){var t=T[lg()];return '<section class="zsec" id="zguar"><p class="zk">'+esc(t.guarK)+'</p><h2 class="zh2">'+esc(t.guarH)+'</h2><p class="zsub">'+esc(t.guarS)+'</p><div class="zgrid">'+t.g.map(function(x){return '<div class="zcard"><div class="zi">'+x[0]+'</div><h4>'+esc(x[1])+'</h4><p>'+esc(x[2])+'</p></div>'}).join('')+'</div></section>'}
/* ---------- comparison + referral (pricing) ---------- */
function cmpHTML(){var t=T[lg()];var rows=t.cmpRows.map(function(r){return '<tr><td><b>'+esc(r[0])+'</b></td><td class="me">'+esc(r[1])+'</td><td>'+esc(r[2])+'</td><td>'+esc(r[3])+'</td></tr>'}).join('');return '<section class="zsec" id="zcmp"><p class="zk">'+esc(t.cmpK)+'</p><h2 class="zh2">'+esc(t.cmpH)+'</h2><p class="zsub">'+esc(t.cmpNote)+'</p><div class="zcmp"><table><thead><tr><th>'+esc(t.cmpHead[0])+'</th><th class="me">'+esc(t.cmpHead[1])+'</th><th>'+esc(t.cmpHead[2])+'</th><th>'+esc(t.cmpHead[3])+'</th></tr></thead><tbody>'+rows+'</tbody></table></div></section>'}
function refHTML(){var t=T[lg()];return '<section class="zsec" id="zref"><div class="zref"><h3>'+esc(t.refH)+'</h3><p>'+esc(t.refP)+'</p><div class="zsteps">'+t.refSteps.map(function(x){return '<div><b>'+esc(x[0])+'</b>'+esc(x[1])+'</div>'}).join('')+'</div><a class="zbtn" target="_blank" rel="noopener" href="'+wa(t.refH)+'">'+esc(t.refBtn)+' · WhatsApp</a></div></section>'}
/* ---------- personalizer (home) ---------- */
var pvState={name:'',type:'rest',theme:0};
var pvThemes=[['#f43f5e','#7c2d12'],['#0ea5e9','#1e3a8a'],['#10b981','#064e3b'],['#a855f7','#4c1d95']];
function pvHTML(){var t=T[lg()];var ty=t.types;
var opts=Object.keys(ty).map(function(k){return '<option value="'+k+'"'+(pvState.type===k?' selected':'')+'>'+esc(ty[k][0])+'</option>'}).join('');
return '<section class="zsec" id="zprev"><p class="zk">'+esc(t.pvK)+'</p><h2 class="zh2">'+esc(t.pvH)+'</h2><p class="zsub">'+esc(t.pvS)+'</p><div class="zprev-wrap"><div class="zprev-form"><div class="zfield"><label>'+esc(t.pvName)+'</label><input id="zp-name" type="text" maxlength="28" value="'+esc(pvState.name)+'" placeholder="Layali Kitchen"></div><div class="zfield"><label>'+esc(t.pvType)+'</label><select id="zp-type">'+opts+'</select></div><div class="zfield"><label>'+esc(t.pvTheme)+'</label><div class="zthemes" id="zp-themes">'+pvThemes.map(function(g,i){return '<button type="button" data-th="'+i+'" class="'+(pvState.theme===i?'on':'')+'" style="background:linear-gradient(135deg,'+g[0]+','+g[1]+')" aria-label="theme '+(i+1)+'"></button>'}).join('')+'</div></div><a class="zbtn" id="zp-go" target="_blank" rel="noopener" href="#">'+esc(t.pvGo)+'</a></div><div class="zphone" id="zp-phone"></div></div></section>'}
function pvRender(){var t=T[lg()];var ty=t.types[pvState.type];var g=pvThemes[pvState.theme];var name=pvState.name||ty[0];
var rows=[ty[2],ty[3]].map(function(x){return '<div class="zr"><span>'+esc(x)+'</span><span>· · ·</span></div>'}).join('');
var ph=$('zp-phone');if(!ph)return;
ph.innerHTML='<div class="zs" style="background:linear-gradient(140deg,'+g[0]+','+g[1]+')"><div class="zn">'+esc(name)+'</div><div class="zt">'+esc(ty[1])+'</div></div><div class="zb">'+rows+'<a class="zc" style="--zt:'+g[0]+'" href="#/contact">'+esc(ty[4])+'</a></div>';
var go=$('zp-go');if(go)go.href=wa(t.pvGo+': '+name+' · '+ty[0]);
var ty2=$('zp-type');if(ty2)ty2.onchange=function(){pvState.type=this.value;pvRender()};
var nm=$('zp-name');if(nm)nm.oninput=function(){pvState.name=this.value;pvRender()};
var th=$('zp-themes');if(th)th.querySelectorAll('button').forEach(function(b){b.onclick=function(){pvState.theme=+b.getAttribute('data-th');var sec=$('zprev');if(sec){var keep=pvState;sec.outerHTML=pvHTML();pvState=keep;pvRender()}}})}
/* ---------- landing pages ---------- */
function lpHTML(lp){var t=T[lg()];var d=lp.t[lg()];
return '<section class="s pt"><div class="zlp-hero"><div style="font-size:44px">'+lp.em+'</div><p class="zk" style="color:#67e8f9">'+esc(d[0])+'</p><h1>'+esc(d[1])+'</h1><p>'+esc(d[2])+'</p><p style="color:#fff;font-weight:700">'+esc(t.lpFrom)+'</p><a class="zbtn" target="_blank" rel="noopener" href="'+wa(d[1])+'">'+esc(t.lpCta)+' · WhatsApp</a><a class="zbtn ghost" href="#/pricing">'+esc(t.lpPricing)+'</a></div><div class="zgrid">'+[[d[3],d[4]],[d[5],d[6]],[d[7],d[8]]].map(function(x){return '<div class="zcard"><h4>'+esc(x[0])+'</h4><p>'+esc(x[1])+'</p></div>'}).join('')+'</div><div class="zex"><b>'+esc(t.lpEx)+'</b> '+esc(lp.ex)+' — <i>'+esc(d[9])+'</i> · <a href="#/work">'+esc(t.lpPricing==='See pricing'?'See the work':'')+'</a></div></section>'}
function buildLPs(){LPS.forEach(function(lp){var id='p-'+lp.slug;var m=$(id);if(!m){m=document.createElement('main');m.id=id;m.className='pg';m.hidden=true;var ft2=document.querySelector('footer');if(ft2)document.body.insertBefore(m,ft2);else document.body.appendChild(m)}m.innerHTML=lpHTML(lp)})}
/* ---------- project tracker ---------- */
function trkHTML(){var t=T[lg()];
return '<section class="s pt"><div class="trk-wrap"><div class="trk-hero"><div class="trk-radar"><i></i><i></i><i></i><b></b></div><p class="trk-k">'+esc(t.trkK)+'</p><h2 class="trk-h">'+esc(t.trkH)+'</h2><p class="trk-s">'+esc(t.trkS)+'</p></div><div class="trk-card"><div class="trk-f"><label>'+esc(t.trkA)+'</label><div class="trk-in"><span>📄</span><input id="zt-a" type="text" placeholder="YS-2026…" autocomplete="off"></div></div><div class="trk-f"><label>'+esc(t.trkE)+'</label><div class="trk-in"><span>✉️</span><input id="zt-e" type="email" placeholder="you@email.com" autocomplete="email"></div></div><button class="trk-btn" id="zt-go" type="button">'+esc(t.trkBtn)+'</button><p class="trk-priv">🔒 '+esc(t.trkPriv)+'</p><div id="zt-out"></div></div></div></section>'}
function buildTrack(){var m=$('p-track');if(!m){m=document.createElement('main');m.id='p-track';m.className='pg';m.hidden=true;var ft1=document.querySelector('footer');if(ft1)document.body.insertBefore(m,ft1);else document.body.appendChild(m)}m.innerHTML=trkHTML();var b=$('zt-go');if(b)b.onclick=trkGo}
var ZKEY='57757a84ff37d38dec60ca6e';
function trkGo(){var t=T[lg()];var a=($('zt-a').value||'').trim().toUpperCase();var em=($('zt-e').value||'').trim().toLowerCase();var out=$('zt-out');if(!a||!em)return;out.innerHTML='<div class="trk-wait"><span class="trk-spin"></span>'+esc(t.trkWait)+'</div>';
fetch('contracts/api/records.php',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({key:ZKEY,action:'get',agreement:a})}).then(function(r){return r.json()}).then(function(j){
var rec=j&&(j.record||j.data||j);if(!rec||!rec.email||String(rec.email).toLowerCase()!==em){out.innerHTML='<div class="trk-err">'+esc(t.trkBad)+'</div>';return}
var delivered=/deliver/i.test(String(rec.status||''));var cur=delivered?2:1;
var stages=t.trkStages.map(function(s2,ix){var cls=ix<cur?'done':(ix===cur?'now':'todo');var inner=ix<cur?'✓':String(ix+1);return '<div class="trk-node '+cls+'"><div class="trk-dot">'+inner+'</div><b>'+esc(s2)+'</b>'+(ix===cur?'<span>'+esc(t.trkCur)+'</span>':'')+'</div>'}).join('');
var fill=cur>=2?'100%':(cur===1?'50%':'0%');
out.innerHTML='<div class="trk-res"><div class="trk-sum"><div><div class="trk-ag">'+esc(rec.agreement||a)+'</div><div class="trk-meta">'+esc(t.trkClient)+': <b>'+esc(rec.client||'')+'</b> · '+esc(t.trkPkg)+': <b>'+esc(rec.pkg||rec.package||'')+'</b></div></div><span class="trk-pill'+(delivered?' done':'')+'">'+(delivered?'🎉 ':'')+esc(rec.status||'')+'</span></div><div class="trk-steps"><div class="trk-track"><div class="trk-fill" data-w="'+fill+'"></div></div>'+stages+'</div><p class="trk-note">'+esc(t.trkNote)+'</p><a class="trk-wa" href="https://wa.me/17034390209" target="_blank" rel="noopener">💬 WhatsApp</a></div>';
var fl=out.querySelector('.trk-fill');if(fl){setTimeout(function(){fl.style.width=fl.getAttribute('data-w')},60)}
}).catch(function(){out.innerHTML='<p style="color:#c22525;margin-top:14px">'+esc(t.trkBad)+'</p>'})}
/* ---------- place sections ---------- */
function placeAll(){
var ypR=$('yplay');if(ypR)ypR.remove();var pvR=$('zprev');if(pvR)pvR.remove();
var home=$('p-home');
if(home&&!$('zguar')){var slots=$('yslots');var g=document.createElement('div');g.innerHTML='';var holder=document.createElement('div');holder.innerHTML=guarHTML();if(slots&&slots.parentNode)slots.parentNode.insertBefore(holder.firstChild,slots.nextSibling);else home.appendChild(holder.firstChild)}
var pricing=$('p-pricing');
if(pricing&&!$('zcmp')){var tiers=pricing.querySelector('[data-r="tiers"]');var sec=tiers?(tiers.closest('section')||tiers.parentNode):null;var h3=document.createElement('div');h3.innerHTML=cmpHTML();if(sec&&sec.parentNode)sec.parentNode.insertBefore(h3.firstChild,sec.nextSibling);else pricing.appendChild(h3.firstChild)}
if(pricing&&!$('zref')){var c=$('zcmp');var h4=document.createElement('div');h4.innerHTML=refHTML();if(c&&c.parentNode)c.parentNode.insertBefore(h4.firstChild,c.nextSibling);else pricing.appendChild(h4.firstChild)}
var services=$('p-services');
if(services&&!$('zlp-strip')){var strip=document.createElement('section');strip.className='zsec';strip.id='zlp-strip';strip.innerHTML='<div class="zgrid">'+LPS.map(function(lp){var d=lp.t[lg()];return '<a class="zcard" style="text-decoration:none;color:inherit" href="#/'+lp.slug+'"><div class="zi">'+lp.em+'</div><h4>'+esc(d[0])+'</h4><p>'+esc(d[1])+'</p></a>'}).join('')+'</div>';services.appendChild(strip)}
var foot=document.querySelector('footer');
buildLPs();buildTrack();
}
/* ---------- Hero sales flow ---------- */
function botSay(txt,delay){if(typeof chatAdd!=='function')return;var ty=(typeof chatTyping==='function')?chatTyping():null;setTimeout(function(){if(ty&&ty.parentNode)ty.parentNode.removeChild(ty);chatAdd(txt,false)},delay||700)}
function chips(items,cb){var b=$('ych-msgs');if(!b)return;var row=document.createElement('div');row.className='ychips';items.forEach(function(it){var btn=document.createElement('button');btn.type='button';btn.textContent=it.label;btn.onclick=function(){row.remove();if(typeof chatAdd==='function')chatAdd(it.label,true);cb(it.key)};row.appendChild(btn)});b.appendChild(row);b.scrollTop=b.scrollHeight}
var recState={};
function recFlow(step,key){var t=T[lg()];
if(step===0){botSay(t.recQ1,500);setTimeout(function(){chips(Object.keys(t.recTypes).map(function(k){return{key:k,label:t.recTypes[k]}}),function(k2){recState.type=k2;recFlow(1,k2)})},1300)}
else if(step===1){botSay(t.recQ2,500);setTimeout(function(){chips(Object.keys(t.recNeeds).map(function(k){return{key:k,label:t.recNeeds[k]}}),function(k2){recFlow(2,k2)})},1300)}
else{var need=key;var pk=t.recPkg[need];var ans=t.recAns.replace('{t}',t.recTypes[recState.type]||'').replace('{p}',pk[0]).replace('{pr}',pk[1]);botSay(ans,600);setTimeout(function(){chips([{key:'wa',label:'💬 WhatsApp'},{key:'pr',label:'💰 '+t.prc}],function(k2){if(k2==='wa')window.open(wa(pk[0]+' '+pk[1]),'_blank');else location.hash='#/pricing'})},1800)}
}
function wireChat(){var zb=$('zchips');if(zb)zb.remove()}
/* ---------- PWA ---------- */
if('serviceWorker' in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('sw.js').catch(function(){})})}
var deferredPrompt=null;
window.addEventListener('beforeinstallprompt',function(e){e.preventDefault();deferredPrompt=e;var t=T[lg()];var box=document.createElement('div');box.className='zinstall show';box.innerHTML=esc(t.instT)+'<br><button type="button">'+esc(t.instB)+'</button>';box.querySelector('button').onclick=function(){box.classList.remove('show');if(deferredPrompt){deferredPrompt.prompt();deferredPrompt=null}};document.body.appendChild(box);setTimeout(function(){box.classList.remove('show')},20000)});
/* ---------- REVEAL SAFETY v3: position-based sweeper ----------
   IO callbacks proved unreliable on the user's iPhone webview: the main
   observer and the v2 safety observer missed the same rendered cards,
   leaving whole white sections while scrolling. v3 trusts geometry only:
   it sweeps not-yet-revealed .rv2/.dr elements and reveals any that have
   entered or passed the viewport. Below-fold elements stay hidden until
   approached, so the reveal choreography is unchanged. Sweeps run on
   scroll (rAF-throttled), resize, route change, clicks, and a bounded
   self-stopping interval. Adds only .in, never .done. */
(function(){var SEL='.rv2:not(.in),.dr:not(.in)';
function reveal(el){el.classList.add('in')}
function sweep(){var vh=window.innerHeight||800,left=0,list;
  try{list=document.querySelectorAll(SEL)}catch(e){return 0}
  for(var i=0;i<list.length;i++){var el=list[i];
    if(el.closest&&el.closest('[hidden]')){left++;continue}
    var r=el.getBoundingClientRect();
    if(r.height===0&&r.width===0){left++;continue}
    if(r.top<vh*0.95&&r.bottom>-60)reveal(el);else left++}
  return left}
var ticking=false;
function onScroll(){if(ticking)return;ticking=true;requestAnimationFrame(function(){ticking=false;sweep()})}
var iv=null,ticks=0;
function arm(){if(iv)return;ticks=0;iv=setInterval(function(){ticks++;if(sweep()===0||ticks>24){clearInterval(iv);iv=null}},700)}
document.addEventListener('DOMContentLoaded',function(){sweep();arm()});
addEventListener('load',function(){sweep();arm()});
addEventListener('scroll',onScroll,{passive:true});
addEventListener('resize',onScroll);
addEventListener('hashchange',function(){setTimeout(function(){sweep();arm()},120)});
document.addEventListener('click',function(){setTimeout(sweep,200)});
document.addEventListener('touchend',function(){setTimeout(function(){sweep();arm()},150)},{passive:true});
})();
/* ---------- boot / re-render ---------- */
var routeFixed=false;
function fixRoute(){if(routeFixed)return;var h=(location.hash||'').replace(/^#\//,'');if(!h||h==='home'||h.indexOf('demo/')===0)return;var t=document.getElementById('p-'+h);if(!t||!t.hidden)return;var vis=document.querySelector('main:not([hidden])');if(vis&&vis.id==='p-'+h)return;routeFixed=true;location.hash='#/';setTimeout(function(){location.hash='#/'+h},90)}
function renderAll(){placeAll();wireChat();fixRoute()}
document.addEventListener('DOMContentLoaded',function(){setTimeout(renderAll,350);setTimeout(renderAll,1200)});
document.addEventListener('click',function(e){if(e.target.closest&&e.target.closest('[data-l]')){setTimeout(function(){var g=$('zguar');if(g)g.outerHTML=guarHTML();var c=$('zcmp');if(c)c.outerHTML=cmpHTML();var r=$('zref');if(r)r.outerHTML=refHTML();var pv=$('zprev');if(pv){var keep=pvState;pv.outerHTML=pvHTML();pvState=keep;pvRender()}var st=$('zlp-strip');if(st)st.remove();var fl=$('zfoot');if(fl)fl.remove();var zb=$('zchips');if(zb)zb.remove();placeAll();wireChat();buildLPs();buildTrack()},320)}},true);
try{new MutationObserver(function(){wireChat()}).observe(document.documentElement,{childList:true,subtree:true})}catch(e){}
})();

