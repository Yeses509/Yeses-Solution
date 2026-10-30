
/* FEATURES 2: offer countdown, slots+stats, playground, ROI calculator, speed check, before/after, chat assistant, frame preview */
(function(){
'use strict';
var WA='17034390209', SLOTS=2, OFFER_END='2026-10-31T23:59:59-04:00';
function $(id){return document.getElementById(id)}
function lg(){try{var l=localStorage.getItem('ys_lang');return ['en','ar','ku'].indexOf(l)>=0?l:'en'}catch(e){return 'en'}}
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function waLink(msg){return 'https://wa.me/'+WA+'?text='+encodeURIComponent(msg)}
function money(n){return '$'+Math.round(n).toLocaleString('en-US')}

var Y={
en:{offer:'October launch offer: free website audit + free consultation for new projects.',trust:'Websites from $499 · 50/50 payments · You own your site · Sterling, Virginia',endsIn:'ends in',d:'d',h:'h',m:'m',s:'s',
slot:function(n,mo){return 'Now booking — only '+n+' project slots left for '+mo},stats:['Live websites','Languages per site','Day delivery (full site)','Hour response time'],
playK:'Interactive demo',playH:'Try your website — right now',playSub:'Pick your business type, a color and a language, and watch a mini version of your future website change live.',
pType:'Business type',pTheme:'Theme color',pLang:'Website language',pTypes:{restaurant:'Restaurant',clinic:'Clinic',store:'Store',services:'Services'},
pNav:['Home','Menu','About','Book'],pCta:'Build a site like this',
pMsg:function(a){return 'Hello YESES SOLUTION! I tried your website playground. I want a website for my '+a.type+', theme color '+a.theme+', in '+a.lang+'.'},
roiK:'Reality check',roiH:'How much is no website costing you?',roiSub:'A simple estimate. Most customers check you online before they call — if they find nothing, they call a competitor.',
rCust:'People who could find you each month',rTick:'Average sale per customer ($)',rNote:'Estimate assumes only 10% of them would have become customers with a proper website.',
rLostM:'Estimated lost sales / month',rLostY:'per year',rCta:'Stop losing them — start my website',
rMsg:function(a){return 'Hello YESES SOLUTION! Your calculator estimates I may be losing about '+a+' a month without a website. I want to fix that.'},
spK:'Free tool',spH:'Check your website speed — free',spSub:'A real test powered by Google PageSpeed. Slow sites lose visitors: most people leave if a page takes over 3 seconds.',
spPh:'yourwebsite.com',spBtn:'Run speed test',spRun:'Testing with Google… (up to 30s)',spScore:'Mobile performance score',
spGood:'Fast — nicely done. A design refresh could still lift your conversions.',spMid:'Average — there is clear room to speed this up and win back visitors.',spBad:'Slow — this is costing you customers every day. We can rebuild it fast.',
spFail:'Google\u2019s free checker is at its daily limit right now. You can still:',spOpen:'Open my full report on Google PageSpeed',spOr:'or let us run it for you, free:',spWa:'Get my free speed report on WhatsApp',
spMsg:function(u){return 'Hello YESES SOLUTION! Please run a free speed check for my website: '+u},
baK:'The difference',baH:'Template vs. YESES SOLUTION',baSub:'Drag the handle. On the left, a typical dated template. On the right, the standard we design to.',
baBefore:'BEFORE · TEMPLATE',baAfter:'AFTER · YESES SOLUTION',
chatT:'YESES Assistant',chatHi:'Hi! I can answer questions about prices, timelines, the Care Plan and languages — or type your own question.',chatPh:'Type your question…',chatSend:'Send',chatWa:'Continue on WhatsApp',
chatQs:['How much does a website cost?','How long does it take?','What is the Care Plan?','Which languages do you build in?','How do I start?'],
frameVisit:'Visit website',frameCase:'Read the case study',frameDemo:'Concept demo — this is a design concept, not a live client site.'},
ar:{offer:'عرض إطلاق أكتوبر: تدقيق مجاني للموقع + استشارة مجانية للمشاريع الجديدة.',trust:'مواقع من $499 · دفع 50/50 · الموقع ملكك بالكامل · ستيرلينغ، فرجينيا',endsIn:'ينتهي خلال',d:'يوم',h:'ساعة',m:'د',s:'ث',
slot:function(n,mo){return 'الحجز مفتوح — تبقّى '+n+' أماكن فقط لمشاريع '+mo},stats:['مواقع منشورة','لغات في الموقع','يوم تسليم (موقع كامل)','ساعة للرد'],
playK:'تجربة تفاعلية',playH:'جرّب موقعك — الآن',playSub:'اختر نوع عملك ولوناً ولغة، وشاهد نسخة مصغرة من موقعك المستقبلي تتغير مباشرة.',
pType:'نوع العمل',pTheme:'لون التصميم',pLang:'لغة الموقع',pTypes:{restaurant:'مطعم',clinic:'عيادة',store:'متجر',services:'خدمات'},
pNav:['الرئيسية','القائمة','من نحن','احجز'],pCta:'ابنِ لي موقعاً كهذا',
pMsg:function(a){return 'مرحباً YESES SOLUTION! جرّبت الاستوديو التفاعلي في موقعكم. أريد موقعاً لعملي ('+a.type+') بلون '+a.theme+' ولغة '+a.lang+'.'},
roiK:'حساب واقعي',roiH:'كم يكلّفك غياب الموقع؟',roiSub:'تقدير بسيط. أغلب الزبائن يبحثون عنك على الإنترنت قبل الاتصال — وإن لم يجدوا شيئاً اتصلوا بمنافس.',
rCust:'أشخاص كان يمكن أن يصلوا إليك شهرياً',rTick:'متوسط قيمة البيع للزبون ($)',rNote:'يفترض التقدير أن 10% فقط منهم كانوا سيصبحون زبائن لو وجدوا موقعاً احترافياً.',
rLostM:'مبيعات ضائعة تقديرياً / شهر',rLostY:'في السنة',rCta:'أوقف الخسارة — ابدأ موقعي',
rMsg:function(a){return 'مرحباً YESES SOLUTION! حاسبتكم تقدّر أنني أخسر نحو '+a+' شهرياً بدون موقع. أريد إصلاح ذلك.'},
spK:'أداة مجانية',spH:'افحص سرعة موقعك — مجاناً',spSub:'فحص حقيقي بقوة Google PageSpeed. المواقع البطيئة تخسر الزوار: أغلب الناس يغادرون إن تجاوز التحميل 3 ثوانٍ.',
spPh:'yourwebsite.com',spBtn:'شغّل فحص السرعة',spRun:'جارٍ الفحص عبر Google… (حتى 30 ثانية)',spScore:'نتيجة أداء الجوال',
spGood:'سريع — أحسنت. تجديد التصميم قد يرفع تحويلاتك أكثر.',spMid:'متوسط — هناك مجال واضح لتسريعه واستعادة الزوار.',spBad:'بطيء — هذا يكلّفك زبائن كل يوم. نستطيع إعادة بنائه سريعاً.',
spFail:'أداة Google المجانية وصلت حدّها اليومي الآن. ما زال بإمكانك:',spOpen:'افتح تقريري الكامل على Google PageSpeed',spOr:'أو دعنا نشغّله لك مجاناً:',spWa:'احصل على تقرير سرعتي مجاناً عبر واتساب',
spMsg:function(u){return 'مرحباً YESES SOLUTION! أرجو تشغيل فحص سرعة مجاني لموقعي: '+u},
baK:'الفرق',baH:'قالب جاهز مقابل YESES SOLUTION',baSub:'اسحب المقبض. على اليسار قالب قديم معتاد، وعلى اليمين المستوى الذي نصمم به.',
baBefore:'قبل · قالب جاهز',baAfter:'بعد · YESES SOLUTION',
chatT:'مساعد YESES',chatHi:'مرحباً! أستطيع الإجابة عن الأسعار والمدة وخطة الصيانة واللغات — أو اكتب سؤالك بنفسك.',chatPh:'اكتب سؤالك…',chatSend:'إرسال',chatWa:'أكمل على واتساب',
chatQs:['كم يكلف الموقع؟','كم يستغرق التنفيذ؟','ما هي خطة الصيانة؟','بأي لغات تبنون؟','كيف أبدأ؟'],
frameVisit:'زيارة الموقع',frameCase:'اقرأ دراسة الحالة',frameDemo:'عرض تجريبي — هذا تصور تصميمي وليس موقع عميل منشوراً.'},
ku:{offer:'ئۆفەری کردنەوەی ئۆکتۆبەر: هەڵسەنگاندنی خۆڕایی ماڵپەڕ + ڕاوێژی خۆڕایی بۆ پڕۆژە نوێکان.',trust:'ماڵپەڕ لە $499 · پارەدان 50/50 · ماڵپەڕەکە بە تەواوی هی خۆتە · ستێرلینگ، ڤیرجینیا',endsIn:'کۆتایی دێت لە',d:'ڕۆژ',h:'کاتژمێر',m:'خولەک',s:'چرکە',
slot:function(n,mo){return 'حیجزکردن کراوەیە — تەنها '+n+' جێگە ماوە بۆ پڕۆژەکانی '+mo},stats:['ماڵپەڕی بڵاوکراوە','زمان لە هەر ماڵپەڕێک','ڕۆژ گەیاندن (ماڵپەڕی تەواو)','کاتژمێر وەڵامدانەوە'],
playK:'تاقیکردنەوەی زیندوو',playH:'ماڵپەڕەکەت تاقی بکەرەوە — ئێستا',playSub:'جۆری کارەکەت و ڕەنگێک و زمانێک هەڵبژێرە و ببینە وەشانێکی بچووکی ماڵپەڕی داهاتووت چۆن بە زیندوویی دەگۆڕێت.',
pType:'جۆری کار',pTheme:'ڕەنگی دیزاین',pLang:'زمانی ماڵپەڕ',pTypes:{restaurant:'چێشتخانە',clinic:'کلینیک',store:'فرۆشگا',services:'خزمەتگوزاری'},
pNav:['سەرەکی','مێنیو','دەربارە','حیجز بکە'],pCta:'ماڵپەڕێکی وەک ئەمەم بۆ دروست بکە',
pMsg:function(a){return 'سڵاو YESES SOLUTION! ستۆدیۆی تاقیکردنەوەکەتانم تاقی کردەوە. ماڵپەڕێکم دەوێت بۆ کارەکەم ('+a.type+') بە ڕەنگی '+a.theme+' و زمانی '+a.lang+'.'},
roiK:'حیسابی ڕاستەقینە',roiH:'نەبوونی ماڵپەڕ چەندت لێ دەستێنێت؟',roiSub:'خەمڵاندنێکی سادە. زۆربەی کڕیاران پێش پەیوەندی لە ئینتەرنێتدا بۆت دەگەڕێن — ئەگەر هیچ نەبینن، پەیوەندی بە ڕکابەرەکەت دەکەن.',
rCust:'کەسانێک کە هەر مانگێک دەتوانن بتگەینن',rTick:'تێکڕای فرۆشتن بۆ هەر کڕیارێک ($)',rNote:'خەمڵاندنەکە وا دادەنێت تەنها 10%یان دەبوونە کڕیار ئەگەر ماڵپەڕێکی پیشەییان بدیبا.',
rLostM:'فرۆشتنی لەدەستچووی خەمڵێنراو / مانگ',rLostY:'لە ساڵێکدا',rCta:'لەدەستدانەکە بوەستێنە — ماڵپەڕەکەم دەستپێبکە',
rMsg:function(a){return 'سڵاو YESES SOLUTION! ژمێرەرەکەتان خەمڵاندوویەتی کە نزیکەی '+a+' لە مانگێکدا لەدەست دەدەم بەبێ ماڵپەڕ. دەمەوێت ئەمە چارەسەر بکەم.'},
spK:'ئامرازی خۆڕایی',spH:'خێرایی ماڵپەڕەکەت بپشکنە — خۆڕایی',spSub:'پشکنینێکی ڕاستەقینە بە هێزی Google PageSpeed. ماڵپەڕە هێواشەکان سەردانکەر لەدەست دەدەن: زۆربەی خەڵک دەڕۆن ئەگەر بارکردن لە 3 چرکە زیاتر بخایەنێت.',
spPh:'yourwebsite.com',spBtn:'پشکنینی خێرایی بکە',spRun:'بە Google دەپشکنرێت… (تا 30 چرکە)',spScore:'نمرەی کارایی مۆبایل',
spGood:'خێرایە — ئافەرین. نوێکردنەوەی دیزاین دەتوانێت فرۆشتنت زیاتر بکات.',spMid:'مامناوەندە — جێگەی ڕوون هەیە بۆ خێراکردنی و گەڕاندنەوەی سەردانکەران.',spBad:'هێواشە — ئەمە هەر ڕۆژێک کڕیارت لێ دەستێنێت. دەتوانین بە خێرایی بنیاتی بنێینەوە.',
spFail:'ئامرازە خۆڕاییەکەی Google ئێستا گەیشتووەتە سنووری ڕۆژانەی. هێشتا دەتوانیت:',spOpen:'ڕاپۆرتە تەواوەکەم لە Google PageSpeed بکەرەوە',spOr:'یان با ئێمە بە خۆڕایی بۆت بکەین:',spWa:'ڕاپۆرتی خێرایی خۆڕاییم لە واتسئاپ وەربگرە',
spMsg:function(u){return 'سڵاو YESES SOLUTION! تکایە پشکنینێکی خێرایی خۆڕایی بۆ ماڵپەڕەکەم بکەن: '+u},
baK:'جیاوازییەکە',baH:'قاڵبی ئامادە بەرامبەر YESES SOLUTION',baSub:'دەستگیرەکە ڕابکێشە. لە چەپەوە قاڵبێکی کۆنی ئاسایی، لە ڕاستەوە ئەو ئاستەی ئێمە دیزاینی دەکەین.',
baBefore:'پێش · قاڵبی ئامادە',baAfter:'دوای · YESES SOLUTION',
chatT:'یاریدەدەری YESES',chatHi:'سڵاو! دەتوانم وەڵامی پرسیارەکانی نرخ و ماوە و پلانی چاکسازی و زمانەکان بدەمەوە — یان پرسیاری خۆت بنووسە.',chatPh:'پرسیارەکەت بنووسە…',chatSend:'بنێرە',chatWa:'لە واتسئاپ بەردەوام بە',
chatQs:['ماڵپەڕێک چەند دەکات؟','چەند کات دەخایەنێت؟','پلانی چاکسازی چییە؟','بە چ زمانانێک دروست دەکەن؟','چۆن دەست پێبکەم؟'],
frameVisit:'سەردانی ماڵپەڕ',frameCase:'خوێندنەوەی لێکۆڵینەوەی کەیسەکە',frameDemo:'دیمۆی تاقیکاری — ئەمە چەمکێکی دیزاینە، نەک ماڵپەڕی کڕیارێکی بڵاوکراوە.'}};

var PG={
restaurant:{en:{name:'Layali Kitchen',hero:'Taste that feels like home',sub:'Family recipes, served fresh every day in the heart of the city.',items:[['Mezze Platter','$14'],['Mixed Grill','$24'],['Baklava','$8']]},
ar:{name:'مطعم ليالي',hero:'طعم يشبه البيت',sub:'وصفات عائلية تُقدَّم طازجة كل يوم في قلب المدينة.',items:[['صحن مقبلات','14$'],['مشاوي مشكلة','24$'],['بقلاوة','8$']]},
ku:{name:'چێشتخانەی لەیالی',hero:'تامێک وەک ماڵەوە',sub:'ڕێچکەی خێزانی، هەر ڕۆژێک بە تازەیی لە دڵی شارەکەدا پێشکەش دەکرێت.',items:[['قاپی مەزە','14$'],['برژاوی تێکەڵ','24$'],['باقلاوە','8$']]}},
clinic:{en:{name:'Glow Clinic',hero:'Care your skin will thank you for',sub:'Advanced treatments by specialists you can trust.',items:[['Hydrafacial','Book'],['Botox','Book'],['Laser Session','Book']]},
ar:{name:'عيادة جلو',hero:'عناية ستشكرك بشرتك عليها',sub:'علاجات متقدمة بأيدي مختصين تثق بهم.',items:[['هيدرافيشل','احجز'],['بوتوكس','احجز'],['جلسة ليزر','احجز']]},
ku:{name:'کلینیکی گلۆ',hero:'چاودێرییەک پێستت سوپاست دەکات',sub:'چارەسەری پێشکەوتوو بە دەستی پسپۆڕانی متمانەپێکراو.',items:[['هایدرافێشڵ','حیجز بکە'],['بۆتۆکس','حیجز بکە'],['دانیشتنی لەیزەر','حیجز بکە']]}},
store:{en:{name:'Noor Store',hero:'Beautiful things, delivered fast',sub:'Thoughtful products with free shipping over $35.',items:[['Ceramic Vase','$29'],['Linen Scarf','$19'],['Gift Box','$39']]},
ar:{name:'متجر نور',hero:'أشياء جميلة تصلك بسرعة',sub:'منتجات مختارة بعناية مع شحن مجاني فوق 35$.',items:[['مزهرية سيراميك','29$'],['وشاح كتان','19$'],['علبة هدايا','39$']]},
ku:{name:'فرۆشگای نوور',hero:'شتە جوانەکان، بە خێرایی دەگەن',sub:'بەرهەمی هەڵبژێردراو بە گەیاندنی خۆڕایی لەسەر 35$.',items:[['گوڵدانی سیرامیک','29$'],['لەچکەی کەتان','19$'],['سندوقی دیاری','39$']]}},
services:{en:{name:'Vertex Studio',hero:'We fix, build and care for it',sub:'Reliable local services, booked in two taps.',items:[['Home Repair','Quote'],['Deep Cleaning','Quote'],['Moving Help','Quote']]},
ar:{name:'استوديو فيرتكس',hero:'نصلح ونبني ونهتم',sub:'خدمات محلية موثوقة تُحجز بضغطتين.',items:[['صيانة منازل','اطلب سعراً'],['تنظيف عميق','اطلب سعراً'],['مساعدة نقل','اطلب سعراً']]},
ku:{name:'ستۆدیۆی ڤێرتێکس',hero:'چاک دەکەین، دروست دەکەین، ئاگامان لێیە',sub:'خزمەتگوزارییەکی ناوخۆیی متمانەپێکراو، بە دوو کرتە حیجز دەکرێت.',items:[['چاکسازی ماڵ','نرخ وەربگرە'],['پاککردنەوەی قووڵ','نرخ وەربگرە'],['یارمەتی گواستنەوە','نرخ وەربگرە']]}}};
var THEMES=[['#0891b2','Cyan'],['#d4a24e','Gold'],['#059669','Emerald'],['#7c3aed','Violet']];
var pgState={type:'restaurant',theme:'#0891b2',tname:'Cyan',lang:'en'};
var PNAV={en:[
'Home','Menu','About','Book'],ar:[
'الرئيسية','القائمة','من نحن','احجز'],ku:[
'سەرەکی','مێنیو','دەربارە','حیجز بکە']};

/* ---------- offer banner ---------- */
function tickCd(){
  var el=$('ycd');if(!el)return;
  var left=new Date(OFFER_END)-new Date();
  if(left<0){el.textContent='';return}
  var t=Y[lg()],dd=Math.floor(left/864e5),hh=Math.floor(left/36e5)%24,mm=Math.floor(left/6e4)%60,ss=Math.floor(left/1e3)%60;
  el.textContent=t.endsIn+' '+dd+t.d+' '+hh+t.h+' '+mm+t.m+' '+ss+t.s;
}
function renderOffer(){
  var host=$('yoffer');if(!host)return;var t=Y[lg()];
  if(sessionStorage.getItem('yoffer_x')){host.style.display='none';return}
  if(new Date()>new Date(OFFER_END)){
    host.innerHTML=esc(t.trust)+'<button class="yx" id="yoffer-x" aria-label="Close">✕</button>';
  }else{
    host.innerHTML=esc(t.offer)+'<span class="ycd" id="ycd"></span><button class="yx" id="yoffer-x" aria-label="Close">✕</button>';
    tickCd();
  }
  $('yoffer-x').onclick=function(){host.style.display='none';try{sessionStorage.setItem('yoffer_x','1')}catch(e){}};
}

/* ---------- slots + stats ---------- */
var counted=false;
function renderSlots(){
  var host=$('yslots');if(!host)return;var t=Y[lg()];
  var mo='';try{mo=new Intl.DateTimeFormat(lg()=='en'?'en-US':(lg()=='ar'?'ar-EG':'ckb'),{month:'long'}).format(new Date())}catch(e){mo=''}
  var vals=[6,3,14,24];
  host.innerHTML='<div class="ystrip"><div class="yslot"><i></i>'+esc(t.slot(SLOTS,mo))+'</div>'
    +vals.map(function(v,i){return '<div class="ystat"><b data-cnt="'+v+'">'+(counted?v:0)+'</b><span>'+esc(t.stats[i])+'</span></div>'}).join('')+'</div>';
  if(counted)return;
  var nums=host.querySelectorAll('[data-cnt]');
  var io=('IntersectionObserver' in window)?new IntersectionObserver(function(es){
    es.forEach(function(en){if(!en.isIntersecting)return;io.disconnect();counted=true;
      nums.forEach(function(n){var target=+n.getAttribute('data-cnt'),st=null;
        function step(ts){if(!st)st=ts;var p=Math.min((ts-st)/1100,1);n.textContent=Math.round(target*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(step)}
        requestAnimationFrame(step);});
    })},{threshold:.3}):null;
  if(io)io.observe(host);else{counted=true;nums.forEach(function(n){n.textContent=n.getAttribute('data-cnt')})}
}

/* ---------- playground ---------- */
function renderPlay(){
  var host=$('yplay');if(!host)return;var t=Y[lg()];
  var d=PG[pgState.type][pgState.lang],rtl=(pgState.lang!='en');
  var rows=d.items.map(function(it){return '<div class="prow"><span>'+esc(it[0])+'</span><b>'+esc(it[1])+'</b></div>'}).join('');
  host.innerHTML='<p class="k">'+esc(t.playK)+'</p><h2>'+esc(t.playH)+'</h2>'
  +'<div class="ycard"><div class="ygrid2"><div>'
  +'<p class="yplab">'+esc(t.pType)+'</p><div class="ypcs" id="yp-types">'
  +Object.keys(t.pTypes).map(function(k){return '<button type="button" class="ypc'+(pgState.type==k?' on':'')+'" data-tp="'+k+'">'+esc(t.pTypes[k])+'</button>'}).join('')+'</div>'
  +'<p class="ylab">'+esc(t.pTheme)+'</p><div class="ypcs" id="yp-themes">'
  +THEMES.map(function(th){return '<button type="button" class="ypd'+(pgState.theme==th[0]?' on':'')+'" data-th="'+th[0]+'" data-tn="'+th[1]+'" style="background:'+th[0]+'" aria-label="'+th[1]+'"></button>'}).join('')+'</div>'
  +'<p class="ylab">'+esc(t.pLang)+'</p><div class="ypcs" id="yp-langs">'
  +[['en','English'],['ar','العربية'],['ku','کوردی']].map(function(l){return '<button type="button" class="ypc'+(pgState.lang==l[0]?' on':'')+'" data-pl="'+l[0]+'">'+l[1]+'</button>'}).join('')+'</div>'
  +'<div class="ycta"><a class="btn" target="_blank" rel="noopener" href="'+waLink(t.pMsg({type:t.pTypes[pgState.type],theme:pgState.tname,lang:pgState.lang.toUpperCase()}))+'"><i></i><span style="position:relative">'+esc(t.pCta)+'</span></a></div>'
  +'</div><div><div class="phone"><div class="pscreen" dir="'+(rtl?'rtl':'ltr')+'">'
  +'<div class="pbar"><span class="plogo" style="background:'+pgState.theme+'"></span>'+esc(d.name)+'<nav>'+PNAV[pgState.lang].map(function(n){return '<span>'+esc(n)+'</span>'}).join('')+'</nav></div>'
  +'<div class="phero" style="background:linear-gradient(140deg,'+pgState.theme+'33,transparent 60%),linear-gradient(180deg,rgba(255,255,255,.04),transparent)"><h4>'+esc(d.hero)+'</h4><p>'+esc(d.sub)+'</p><button type="button" class="pbtn" style="background:'+pgState.theme+'">'+esc(PNAV[pgState.lang][3])+'</button></div>'
  +rows+'<div class="pfoot">YESES SOLUTION · '+esc(d.name)+'</div>'
  +'</div></div></div></div></div>';
  host.querySelectorAll('[data-tp]').forEach(function(b){b.onclick=function(){pgState.type=b.getAttribute('data-tp');renderPlay()}});
  host.querySelectorAll('[data-th]').forEach(function(b){b.onclick=function(){pgState.theme=b.getAttribute('data-th');pgState.tname=b.getAttribute('data-tn');renderPlay()}});
  host.querySelectorAll('[data-pl]').forEach(function(b){b.onclick=function(){pgState.lang=b.getAttribute('data-pl');renderPlay()}});
}

/* ---------- ROI calculator ---------- */
function renderRoi(){
  var host=$('yroi');if(!host)return;var t=Y[lg()];
  host.innerHTML='<div class="ycard"><p class="k">'+esc(t.roiK)+'</p><h3>'+esc(t.roiH)+'</h3><p class="ysub">'+esc(t.roiSub)+'</p>'
  +'<label style="color:#e5e7eb;font-size:14px">'+esc(t.rCust)+': <b id="yroi-cv">800</b></label>'
  +'<input type="range" class="ysl" id="yroi-c" min="50" max="5000" step="50" value="800">'
  +'<label style="color:#e5e7eb;font-size:14px">'+esc(t.rTick)+': <b id="yroi-tv">60</b></label>'
  +'<input type="range" class="ysl" id="yroi-t" min="5" max="500" step="5" value="60">'
  +'<p style="color:var(--mut);font-size:12.5px">'+esc(t.rNote)+'</p>'
  +'<p style="margin:14px 0 4px;color:var(--mut);font-size:13px">'+esc(t.rLostM)+'</p>'
  +'<p class="ybig" style="margin:0"><span id="yroi-m">$4,800</span> <small>/ '+esc(t.rLostY)+' <span id="yroi-y">$57,600</span></small></p>'
  +'<div class="ycta" style="text-align:start"><a class="btn" id="yroi-wa" target="_blank" rel="noopener" href="#"><i></i><span style="position:relative">'+esc(t.rCta)+'</span></a></div></div>';
  function upd(){
    var c=+$('yroi-c').value,tv=+$('yroi-t').value,m=c*0.10*tv;
    $('yroi-cv').textContent=c.toLocaleString('en-US');$('yroi-tv').textContent=tv;
    $('yroi-m').textContent=money(m);$('yroi-y').textContent=money(m*12);
    $('yroi-wa').href=waLink(t.rMsg(money(m)));
  }
  $('yroi-c').addEventListener('input',upd);$('yroi-t').addEventListener('input',upd);upd();
}

/* ---------- speed check ---------- */
function renderSpeed(){
  var host=$('yspeed');if(!host)return;var t=Y[lg()];
  host.innerHTML='<div class="ycard"><p class="k">'+esc(t.spK)+'</p><h3>'+esc(t.spH)+'</h3><p class="ysub">'+esc(t.spSub)+'</p>'
  +'<div style="display:flex;gap:10px;flex-wrap:wrap"><input class="yin" style="flex:1 1 240px;width:auto" id="ysp-u" type="text" inputmode="url" placeholder="'+esc(t.spPh)+'" dir="ltr">'
  +'<button class="ygo" id="ysp-b" type="button">'+esc(t.spBtn)+'</button></div><div id="ysp-r" style="margin-top:16px"></div></div>';
  $('ysp-b').onclick=function(){
    var u=$('ysp-u').value.trim();if(!u)return;
    if(!/^https?:\/\//i.test(u))u='https://'+u;
    var out=$('ysp-r'),btn=$('ysp-b');btn.disabled=true;
    out.innerHTML='<p style="color:var(--mut)">'+esc(t.spRun)+'</p>';
    var api='https://www.googleapis.com/pagespeedonline/v5/runPagespeed?strategy=mobile&category=performance&url='+encodeURIComponent(u);
    var ctrl=('AbortController' in window)?new AbortController():null;
    var to=setTimeout(function(){if(ctrl)ctrl.abort()},30000);
    fetch(api,ctrl?{signal:ctrl.signal}:undefined).then(function(r){return r.json()}).then(function(d){
      clearTimeout(to);btn.disabled=false;
      if(d.error||!d.lighthouseResult)throw new Error('psi');
      var lh=d.lighthouseResult,sc=Math.round(lh.categories.performance.score*100);
      var col=sc>=90?'#10b981':(sc>=50?'#f59e0b':'#ef4444');
      var verdict=sc>=90?t.spGood:(sc>=50?t.spMid:t.spBad);
      function av(id){var a=lh.audits[id];return a&&a.displayValue?a.displayValue:'—'}
      out.innerHTML='<div class="yscore"><div class="ring" style="background:conic-gradient('+col+' '+sc+'%,rgba(255,255,255,.1) 0)"><span style="background:#0d1319;width:72px;height:72px;border-radius:50%;display:flex;align-items:center;justify-content:center">'+sc+'</span></div>'
      +'<div style="color:#e5e7eb;font-size:14px;line-height:1.9"><b style="color:#fff">'+esc(t.spScore)+'</b><br>LCP: '+esc(av('largest-contentful-paint'))+' · CLS: '+esc(av('cumulative-layout-shift'))+' · TBT: '+esc(av('total-blocking-time'))+'<br><span style="color:var(--mut)">'+esc(verdict)+'</span></div></div>';
    }).catch(function(){
      clearTimeout(to);btn.disabled=false;
      var psi='https://pagespeed.web.dev/analysis?url='+encodeURIComponent(u)+'&form_factor=mobile';
      out.innerHTML='<p style="color:#e5e7eb;font-size:14px;line-height:1.7">'+esc(t.spFail)+'</p>'
      +'<div style="display:flex;gap:10px;flex-wrap:wrap"><a class="ygo" style="text-decoration:none;display:inline-block" target="_blank" rel="noopener" href="'+psi+'">'+esc(t.spOpen)+'</a></div>'
      +'<p style="color:var(--mut);font-size:13px;margin:12px 0 8px">'+esc(t.spOr)+'</p>'
      +'<a class="ygo" style="text-decoration:none;display:inline-block;background:#128c4a" target="_blank" rel="noopener" href="'+waLink(t.spMsg(u))+'">'+esc(t.spWa)+'</a>';
    });
  };
}

/* ---------- before / after ---------- */
function renderBA(){
  var host=$('yba');if(!host)return;var t=Y[lg()];
  host.innerHTML='<p class="k">'+esc(t.baK)+'</p><h2>'+esc(t.baH)+'</h2><p style="color:var(--mut);max-width:62ch">'+esc(t.baSub)+'</p>'
  +'<div class="yba-wrap" id="yba-w">'
  +'<div class="yba-layer yba-before"><div class="mock-b"><span style="font-size:13px;color:#555">www.your-business-website.com</span><h4>Welcome to Our Business Website</h4>'
  +'<div><span class="mlink">Home</span><span class="mlink">About Us</span><span class="mlink">Services</span><span class="mlink">Contact</span></div>'
  +'<table><tr><td>We are a company. We do many things. Call us for more information about our services and prices.</td><td>NEWS: Site under construction. Best viewed on desktop.</td></tr><tr><td>Phone: (555) 010-2030 — Email: info@business-website.com</td><td>© 2016 All rights reserved</td></tr></table></div></div>'
  +'<div class="yba-layer yba-after" id="yba-top"><div class="mock-a"><span class="mk">YOUR BRAND · ONLINE</span><h4>A website that sells<br/>while you sleep.</h4><p>Fast, cinematic and built around your customers — on every screen, in three languages.</p>'
  +'<div class="mrow"><div class="mcard">★ Rated by clients</div><div class="mcard">⚡ Loads in under 2s</div><div class="mcard">☎ Booked in two taps</div></div></div></div>'
  +'<span class="yba-tag" style="inset-inline-start:12px">'+esc(t.baBefore)+'</span><span class="yba-tag" style="inset-inline-end:12px">'+esc(t.baAfter)+'</span>'
  +'<div class="yba-handle" id="yba-h" style="left:55%"></div>'
  +'<input type="range" class="yba-range" id="yba-r" min="0" max="100" value="55" aria-label="Before / after">'
  +'</div>';
  var r=$('yba-r'),top=$('yba-top'),h=$('yba-h');
  function set(){var v=+r.value;top.style.clipPath='inset(0 0 0 '+v+'%)';h.style.left=v+'%'}
  r.addEventListener('input',set);set();
}

/* ---------- chat assistant ---------- */
var chatHist=[];
var QA={
en:[[/track|status|progress|where is my/,'You can follow your project any time: open \u201cTrack your project\u201d in the footer, enter your agreement number and the email you signed with \u2014 you will see Signed, In production and Delivered.'],
[/guarantee|promise|warranty/,'Every project is protected in writing: live in about 14 days for standard sites, 50/50 payments, two revision rounds, 30 days of free support after launch \u2014 and you own everything after the final payment.'],
[/referr|discount|offer|deal/,'Right now: a free website audit and a free consultation. And if you refer a client who signs with us, you receive one month of the Care Plan free.'],
[/contract|sign|agreement/,'Every project starts with a short written agreement in English, Arabic or Kurdish that fixes price and timeline before you pay. After signing we email you the deposit step; the balance is due only on delivery.'],
[/revision|revise|changes|edits after/,'Your quote includes two revision rounds and a 7-day review window. After launch you get 30 days of free support, and the Care Plan covers small content edits from then on.'],
[/store|shop|ecommerce|e-commerce|sell online/,'The Scale package ($2,999) is a full online store: products, cart, checkout and payment setup in up to three languages. A store takes up to 30 days.'],
[/restaurant|clinic|salon|cafe|coffee/,'We build dedicated sites for restaurants, clinics and med spas, stores and brands \u2014 the Services menu has a page for each, with real examples from our Work.'],
[/already have|existing|redesign|old site/,'We redesign existing websites too \u2014 same packages. Start with the free audit on the Home page and see exactly what your current site needs first.'],
[/which package|recommend|choose|difference|package/,'Quick guide: Launch $499 \u2014 a one-page site so clients find and contact you. Growth $999 \u2014 up to 6 pages, best for most businesses. Scale $2,999 \u2014 a full online store. Tell me your business type and I will narrow it down.'],
[/virginia|located|where are you|based/,'YESES SOLUTION is based in Virginia, USA \u2014 and everything runs online, so we build for clients anywhere: agreement, payments and delivery are all remote.'],
[/thank|thanks|great|awesome|perfect/,'You are welcome! Ask me anything else \u2014 prices, examples, timelines \u2014 or start with a free consultation.'],
[/bye|goodbye|see you/,'Thanks for visiting! When you are ready, the free consultation is the easiest first step.'],
[/^(hi|hello|hey|yo|salam|peace)\\b/,'Hello! I am Hero, the YESES SOLUTION assistant. Ask me about prices, timelines, the Care Plan, or how to start — just type your question.'],
[/who are you|your name|hero|robot|real person/,'I am Hero, the built-in AI assistant of YESES SOLUTION. I answer instantly from the studio real info: prices, timelines, services and how to start. For anything personal, the team replies on WhatsApp within 24 hours.'],
[/service|offer|build|what do you do|provide/,'We design and build complete websites: business sites, online stores, booking systems, restaurant sites and landing pages — in English, Arabic and Kurdish, with domain, hosting and business email set up for you.'],
[/work|portfolio|example|projects|clients/,'You can see real work on the Work page: Utah Pharma, Damascus Village, Darna, The MedSpa by RayRay, ARQO, 2B Health, Currec Greece and Core Aesthetic — tap any project to preview it in a device frame.'],
[/contact|phone|email|reach|number/,'You can reach YESES SOLUTION at khudhur@yesesofficial.com or on WhatsApp / phone at +1 703 439 0209. Or tap Continue on WhatsApp below.'],
[/consult|audit|free/,'Both are free: a free website audit (form on the Home page) and a free consultation you can book from the Contact page. No commitment.'],
[/seo|google|search|rank/,'Every site is built SEO-ready: clean structure, meta tags and Google tools setup, so your business can be found on Google and in AI search results.'],
[/pay|deposit|installment|split/,'Projects run on a clear contract: 50% deposit to start and 50% on delivery, with late terms and two revision rounds included. Prices are fixed in your quote before we begin.'],
[/price|cost|much|quote/,'Our websites start at $499 (Starter microsite), $999 (Business, up to 6 pages) and $2,999 (full online store). Every project gets an exact quote first — try the instant calculator on the Pricing page.'],
[/long|time|duration|deliver/,'A microsite takes 3–5 days. A full website usually takes about 2 weeks (14 days). Stores can take up to 30 days with support included.'],
[/care|maintenance|support|update/,'The Care Plan keeps your site updated, backed up daily and monitored for security: $10/month (cancel anytime) or $7/month billed yearly ($84/year). It includes small content edits and priority support.'],
[/language|arabic|kurdish|english/,'Every site can be built in English, Arabic and Kurdish — with proper right-to-left layouts. Extra languages can be added for $100 each.'],
[/start|begin|order|book/,'Easy: tap "Continue on WhatsApp" below and tell us about your project, or book a free consultation on the Contact page. We reply within 24 hours.'],
[/domain|hosting/,'Yes — we can set up and connect your domain, hosting and business email for you.'],
[/own|mine|rights/,'Yes. After the final payment, the design and the code are 100% yours.']],
ar:[[/تتبع|حالة مشروعي|أين موقعي|أتابع/,'يمكنك متابعة مشروعك في أي وقت: افتح «تتبع مشروعك» في أسفل الموقع، وأدخل رقم اتفاقيتك والبريد الذي وقّعت به — وسترى المراحل: تم التوقيع، قيد التنفيذ، تم التسليم.'],
[/ضمان|تضمنون|مضمون/,'مشروعك محمي بعقد مكتوب: تسليم الموقع القياسي خلال نحو 14 يوماً، دفع 50/50، جولتا تعديلات، و30 يوم دعم مجاني بعد الإطلاق — وتملك كل شيء بعد الدفعة الأخيرة.'],
[/إحالة|أحلت|خصم|عروض/,'الآن: تدقيق مجاني لموقعك واستشارة مجانية. وإذا أحلت إلينا زبوناً ووقّع معنا، تحصل على شهر مجاني من خطة الصيانة.'],
[/عقد|توقيع|اتفاقية|أوقع/,'كل مشروع يبدأ باتفاقية مكتوبة قصيرة بالإنجليزية أو العربية أو الكردية تثبّت السعر والمدة قبل أن تدفع شيئاً. وبعد التوقيع نرسل لك خطوة الدفعة الأولى بالبريد؛ والباقي عند التسليم فقط.'],
[/تعديل|تعديلات|تغييرات/,'يشمل عرضك جولتي تعديلات وفترة مراجعة 7 أيام. وبعد الإطلاق تحصل على 30 يوم دعم مجاني، وخطة الصيانة تغطي تعديلات المحتوى الصغيرة بعدها.'],
[/متجر|تجارة إلكترونية|بيع أونلاين|بيع عبر الإنترنت/,'باقة Scale بسعر 2,999$ متجر إلكتروني كامل: منتجات وسلة ودفع وإعداد الدفع حتى ثلاث لغات. المتجر يستغرق حتى 30 يوماً.'],
[/مطعم|عيادة|صالون|مقهى|سبا/,'نبني مواقع مخصصة للمطاعم والعيادات والسبا الطبية والمتاجر والعلامات — في قائمة الخدمات صفحة لكل مجال مع أمثلة حقيقية من أعمالنا.'],
[/عندي موقع|موقع قديم|إعادة تصميم|تطوير موقعي/,'نعيد تصميم المواقع الحالية أيضاً — بنفس الباقات. ابدأ بالتدقيق المجاني في الصفحة الرئيسية لتعرف بالضبط ما يحتاجه موقعك الحالي أولاً.'],
[/أي باقة|أنصح|أختار|الفرق بين الباقات|باقة/,'دليل سريع: Launch بـ 499$ — صفحة واحدة ليجدك الزبائن ويتواصلوا معك. Growth بـ 999$ — حتى 6 صفحات، الأنسب لمعظم الأعمال. Scale بـ 2,999$ — متجر إلكتروني كامل. أخبرني بنوع عملك وسأضيّق الخيار.'],
[/أين تقع|موقعكم|فيرجينيا|مقر/,'مقر YESES SOLUTION في فيرجينيا، الولايات المتحدة — وكل شيء يتم عبر الإنترنت، فنبني لزبائن في أي مكان: الاتفاقية والدفع والتسليم عن بُعد.'],
[/شكرا|شكراً|ممتاز|رائع/,'على الرحب والسعة! اسألني عن أي شيء آخر — الأسعار أو الأمثلة أو المدة — أو ابدأ باستشارة مجانية.'],
[/مع السلامة|إلى اللقاء|وداعا/,'شكراً لزيارتك! متى ما كنت جاهزاً، الاستشارة المجانية هي أسهل خطوة أولى.'],
[/^(سلام|مرحبا|اهلا|هلا|هاي)/,'أهلاً بك! أنا هيرو، مساعد YESES SOLUTION الذكي. اسألني عن الأسعار أو المدة أو خطة الصيانة أو كيف تبدأ — أو اضغط سؤالاً جاهزاً بالأسفل.'],
[/من انت|اسمك|هيرو|روبوت|بشري/,'أنا هيرو، المساعد الذكي المدمج في موقع YESES SOLUTION. أجيب فوراً من معلومات الاستوديو الحقيقية: الأسعار والمدد والخدمات وكيف تبدأ. ولأي أمر شخصي يرد الفريق على واتساب خلال 24 ساعة.'],
[/خدمات|تقدم|ماذا تفعل|تصمم|تبني/,'نصمم ونبني مواقع كاملة: مواقع أعمال، متاجر إلكترونية، أنظمة حجز، مواقع مطاعم وصفحات هبوط — بالإنجليزية والعربية والكردية، مع تجهيز النطاق والاستضافة وبريد العمل لك.'],
[/اعمال|مشاريع|نماذج|عملاء|معرض/,'شاهد أعمالاً حقيقية في صفحة الأعمال: Utah Pharma وDamascus Village وDarna وThe MedSpa by RayRay وARQO و2B Health وCurrec Greece وCore Aesthetic — اضغط أي مشروع لمعاينته داخل إطار جهاز.'],
[/تواصل|هاتف|بريد|رقم|ايميل/,'يمكنك الوصول إلى YESES SOLUTION عبر khudhur@yesesofficial.com أو واتساب / هاتف +1 703 439 0209. أو اضغط أكمل على واتساب بالأسفل.'],
[/استشارة|تدقيق|مجاني|فحص/,'كلاهما مجاني: تدقيق مجاني لموقعك (نموذج في الصفحة الرئيسية) واستشارة مجانية تحجزها من صفحة التواصل. بدون أي التزام.'],
[/سيو|جوجل|بحث|ظهور|تصدر/,'كل موقع يُبنى جاهزاً لمحركات البحث: بنية نظيفة ووسوم تعريف وإعداد أدوات Google، ليظهر عملك في Google ونتائج بحث الذكاء الاصطناعي.'],
[/دفع|عربون|تقسيط|نصف/,'المشاريع تعمل بعقد واضح: 50% عربون للبدء و50% عند التسليم، مع جولتي تعديلات وشروط تأخير واضحة. السعر ثابت في عرض السعر قبل أن نبدأ.'],
[/سعر|تكلفة|كم|ثمن/,'تبدأ أسعارنا من 499$ (موقع مصغر)، و999$ (موقع أعمال حتى 6 صفحات)، و2999$ (متجر إلكتروني كامل). كل مشروع يحصل على عرض سعر دقيق أولاً — جرّب الحاسبة الفورية في صفحة الأسعار.'],
[/مدة|وقت|يستغرق|تسليم/,'الموقع المصغر يحتاج 3–5 أيام، والموقع الكامل عادةً نحو أسبوعين (14 يوماً). المتجر قد يصل إلى 30 يوماً مع الدعم.'],
[/صيانة|رعاية|دعم|تحديث/,'خطة الصيانة تُبقي موقعك محدّثاً مع نسخ احتياطي يومي ومراقبة أمنية: 10$ شهرياً (إلغاء في أي وقت) أو 7$ شهرياً تُدفع سنوياً (84$). تشمل تعديلات محتوى صغيرة ودعماً ذا أولوية.'],
[/لغة|لغات|عربي|كردي|إنجليزي/,'كل موقع يمكن بناؤه بالإنجليزية والعربية والكردية — مع اتجاه صحيح من اليمين لليسار. لغات إضافية بـ 100$ لكل لغة.'],
[/أبدأ|ابدأ|طلب|حجز|كيف/,'ببساطة: اضغط "أكمل على واتساب" بالأسفل وأخبرنا عن مشروعك، أو احجز استشارة مجانية من صفحة التواصل. نرد خلال 24 ساعة.'],
[/دومين|نطاق|استضافة/,'نعم — نجهّز ونربط النطاق والاستضافة وبريد العمل نيابة عنك.'],
[/ملك|حقوق|لي/,'نعم. بعد الدفعة الأخيرة يصبح التصميم والكود ملكاً لك 100%.']],
ku:[[/بەدواداچوون|دۆخی پڕۆژ|پڕۆژەکەم/,'دەتوانیت هەموو کاتێک بەدوای پڕۆژەکەتدا بڕۆیت: «بەدواداچوونی پڕۆژەکەت» لە خوارەوەی ماڵپەڕ بکە، ژمارەی گرێبەستەکەت و ئەو ئیمەیڵەی پێی واژۆت کردووە بنووسە — دەبینیت: واژۆکرا، لە بەرهەمهێناندایە، گەیەندرا.'],
[/گرەنتی|دڵنیایی|بەڵێن/,'پڕۆژەکەت بە گرێبەستێکی نووسراو پارێزراوە: ماڵپەڕی ئاسایی لە نزیکەی 14 ڕۆژدا دەگات، پارەدان 50/50، دوو خولی دەستکاری، 30 ڕۆژ پشتگیری خۆڕایی دوای بڵاوکردنەوە — و دوای پارەدانی کۆتایی هەموو شتێک هی تۆیە.'],
[/ناساندن|داشکاندن|ئۆفەر/,'ئێستا: هەڵسەنگاندنی خۆڕایی بۆ ماڵپەڕەکەت و ڕاوێژێکی خۆڕایی. و ئەگەر کڕیارێک بناسێنیت و لەگەڵمان واژۆ بکات، مانگێک پلانی چاکسازی بە خۆڕایی وەردەگریت.'],
[/گرێبەست|واژۆ|ڕێککەوتن/,'هەر پڕۆژەیەک بە ڕێککەوتنێکی کورت دەست پێدەکات بە ئینگلیزی یان عەرەبی یان کوردی کە نرخ و ماوە جێگیر دەکات پێش ئەوەی هیچ بدەیت. دوای واژۆ هەنگاوی پێشەکیت بە ئیمەیڵ بۆ دەنێرین؛ باقییەکە تەنها لە کاتی گەیاندندایە.'],
[/دەستکاری|گۆڕانکاری/,'نرخەکەت دوو خولی دەستکاری و 7 ڕۆژ پێداچوونەوەی تێدایە. دوای بڵاوکردنەوە 30 ڕۆژ پشتگیری خۆڕایی دەبێت، و پلانی چاکسازی دەستکارییە بچووکەکانی ناوەڕۆک دەگرێتەوە.'],
[/فرۆشگا|بازرگانی ئەلیکترۆنی|فرۆشتن بە ئینتەرنێت/,'پاکێجی Scale بە 2,999$ فرۆشگایەکی تەواوی ئۆنلاینە: بەرهەم، سەبەتە، پارەدان و ڕێکخستنی پارەدان بە سێ زمان. فرۆشگا تا 30 ڕۆژ دەخایەنێت.'],
[/ڕێستۆرانت|کلینیک|سالۆن|سپا/,'ماڵپەڕی تایبەت بۆ ڕێستۆرانت و کلینیک و سپای پزیشکی و فرۆشگا و براندەکان دروست دەکەین — لە لیستی خزمەتگوزاری لاپەڕەیەک بۆ هەر بوارێک هەیە بە نموونەی ڕاستەقینە لە کارەکانمان.'],
[/ماڵپەڕم هەیە|ماڵپەڕی کۆن|دووبارە دیزاین/,'ماڵپەڕی هەیبووش دووبارە دیزاین دەکەین — بە هەمان پاکێجەکان. بە هەڵسەنگاندنی خۆڕایی لە لاپەڕەی سەرەکی دەست پێبکە تا بزانیت ماڵپەڕەکەت چی پێویستە.'],
[/کام پاکێج|پێشنیار|هەڵبژێرم|جیاوازی|پاکێج/,'ڕێبەرێکی خێرا: Launch بە 499$ — لاپەڕەیەک تا کڕیاران بتۆزنەوە و پەیوەندیت پێوە بکەن. Growth بە 999$ — تا 6 لاپەڕە، بۆ زۆربەی کارەکان باشترینە. Scale بە 2,999$ — فرۆشگای تەواو. جۆری کارەکەتم پێ بڵێ تا هەڵبژاردنەکە کورت بکەمەوە.'],
[/لە کوێ|ڤێرجینیا|شوێنتان/,'YESES SOLUTION لە ڤێرجینیا، ئەمریکایە — و هەموو شتێک بە ئینتەرنێت دەڕوات، بۆ کڕیار لە هەر شوێنێک دروست دەکەین: ڕێککەوتن و پارەدان و گەیاندن هەموو لە دوورەوە.'],
[/سوپاس|زۆر باشە|نایابە/,'بەخێربێیت! هەر پرسیارێکی ترم لێ بکە — نرخ، نموونە، ماوە — یان بە ڕاوێژێکی خۆڕایی دەست پێبکە.'],
[/خواحافیز|بەخێر بڕۆ/,'سوپاس بۆ سەردانەکەت! هەر کات ئامادە بوویت، ڕاوێژی خۆڕایی ئاسانترین هەنگاوی یەکەمە.'],
[/^(سڵاو|سەلام|هەلا)/,'سڵاو! من هیرۆم، یاریدەدەری زیرەکی YESES SOLUTION. دەربارەی نرخ و ماوە و پلانی چاکسازی بپرسە، یان پرسیارێکی ئامادە لە خوارەوە دابگرە.'],
[/تۆ کێیت|ناوت|هیرۆ|ڕۆبۆت/,'من هیرۆم، یاریدەدەری زیرەکی ناوخۆیی ماڵپەڕی YESES SOLUTION. دەستبەجێ لە زانیاری ڕاستەقینەی ستۆدیۆ وەڵام دەدەمەوە: نرخ، ماوە، خزمەتگوزاری و چۆنیەتی دەستپێکردن. بۆ کارە کەسییەکان تیمەکە لە 24 کاتژمێردا لە واتسئاپ وەڵام دەداتەوە.'],
[/خزمەتگوزاری|چی دەکەن|دروستکردن|دیزاین/,'ماڵپەڕی تەواو دیزاین دەکەین و دروست دەکەین: ماڵپەڕی بازرگانی، فرۆشگای ئۆنلاین، سیستەمی حیجز، ماڵپەڕی چێشتخانە و لاپەڕەی نیشتن — بە ئینگلیزی و عەرەبی و کوردی، لەگەڵ دۆمەین و هۆستینگ و ئیمەیڵی کار.'],
[/کارەکان|پڕۆژە|نموونە|کڕیار/,'لە لاپەڕەی کارەکان کارە ڕاستەقینەکان ببینە: Utah Pharma، Damascus Village، Darna، The MedSpa by RayRay، ARQO، 2B Health و Currec Greece و Core Aesthetic — هەر پڕۆژەیەک دابگرە بۆ پیشاندانی لە چوارچێوەی ئامێردا.'],
[/پەیوەندی|تەلەفۆن|ئیمەیڵ|ژمارە/,'دەتوانیت پەیوەندی بکەیت: khudhur@yesesofficial.com یان واتسئاپ / تەلەفۆن +1 703 439 0209. یان لە خوارەوە لە واتسئاپ بەردەوام بە.'],
[/ڕاوێژ|پشکنین|بەخۆڕایی|خۆڕایی/,'هەردووکیان بەخۆڕایین: پشکنینی خۆڕایی ماڵپەڕ (فۆڕم لە لاپەڕەی سەرەکی) و ڕاوێژێکی خۆڕایی لە لاپەڕەی پەیوەندی حیجزی دەکەیت. بەبێ هیچ پابەندبوونێک.'],
[/سیو|گووگڵ|گەڕان/,'هەر ماڵپەڕێک ئامادەیە بۆ گەڕان: پێکهاتەی پاک، مێتا تاگ و ڕێکخستنی ئامرازەکانی Google، تا کارەکەت لە Google و ئەنجامەکانی گەڕانی زیرەکیدا بدۆزرێتەوە.'],
[/پارەدان|پێشەکی|قیست/,'پڕۆژەکان بە گرێبەستێکی ڕوون دەڕۆن: 50% پێشەکی بۆ دەستپێکردن و 50% لە گەیاندن، لەگەڵ دوو خولی دەستکاری. نرخ پێش دەستپێکردن لە نرخنامەکەدا جێگیرە.'],
[/نرخ|تێچوو|چەند/,'نرخەکانمان لە 499$ دەست پێدەکەن (ماڵپەڕی بچووک)، 999$ (ماڵپەڕی بازرگانی تا 6 لاپەڕە)، 2999$ (فرۆشگای تەواو). هەر پڕۆژەیەک سەرەتا نرخی ورد وەردەگرێت — ژمێرەری خێرا لە لاپەڕەی نرخەکان تاقی بکەرەوە.'],
[/ماوە|کات|دەخایەنێت|گەیاندن/,'ماڵپەڕی بچووک 3–5 ڕۆژ، ماڵپەڕی تەواو بەزۆری نزیکەی دوو هەفتە (14 ڕۆژ). فرۆشگا تا 30 ڕۆژ لەگەڵ پشتگیری.'],
[/چاکسازی|پلان|پشتگیری|نوێکردنەوە/,'پلانی چاکسازی ماڵپەڕەکەت نوێ دەهێڵێتەوە بە باکئەپی ڕۆژانە و چاودێری ئاسایش: 10$ مانگانە (هەر کات هەڵیوەشێنەرەوە) یان 7$ مانگانە بە ساڵانە (84$). دەستکاری بچووکی ناوەڕۆک و پشتگیری پێشینە دەگرێتەوە.'],
[/زمان|عەرەبی|کوردی|ئینگلیزی/,'هەر ماڵپەڕێک دەتوانرێت بە ئینگلیزی و عەرەبی و کوردی دروست بکرێت — بە ئاڕاستەی دروست لە ڕاست بۆ چەپ. زمانی زیاتر بە 100$ بۆ هەر زمانێک.'],
[/دەست|حیجز|چۆن/,'ئاسانە: لە خوارەوە "لە واتسئاپ بەردەوام بە" دابگرە و باسی پڕۆژەکەت بکە، یان ڕاوێژێکی خۆڕایی لە لاپەڕەی پەیوەندی حیجز بکە. لە 24 کاتژمێردا وەڵام دەدەینەوە.'],
[/دۆمەین|هۆستینگ/,'بەڵێ — دۆمەین و هۆستینگ و ئیمەیڵی کارەکەت بۆ ڕێک دەخەین و دەیانبەستین.'],
[/هی من|خاوەندارێتی/,'بەڵێ. دوای پارەدانی کۆتایی، دیزاین و کۆدەکە 100% هی تۆن.']]};
var chatBuilt=false;
var HT={en:{name:'Hero — AI Assistant',sub:'Online · answers instantly'},ar:{name:'هيرو — المساعد الذكي',sub:'متصل · يرد فوراً'},ku:{name:'هیرۆ — یاریدەدەری زیرەک',sub:'لەسەر هێڵە · دەستبەجێ وەڵام دەداتەوە'}};
function heroSVG(){return '<svg class="hero-svg" viewBox="0 0 120 120" width="100%" height="100%" aria-hidden="true"><defs><linearGradient id="hg1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#22d3ee"/><stop offset="1" stop-color="#818cf8"/></linearGradient><linearGradient id="hg2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2dd4bf"/><stop offset="1" stop-color="#0e7490"/></linearGradient></defs><path class="hero-cape" d="M38 44 Q14 66 20 100 Q34 88 44 92 L46 52 Z" fill="#7c3aed" opacity=".9"/><g class="hero-float"><line x1="60" y1="15" x2="60" y2="27" stroke="#5eead4" stroke-width="3.4" stroke-linecap="round"/><circle class="hero-dot" cx="60" cy="11" r="4.6" fill="#fbbf24"/><rect x="30" y="26" width="60" height="48" rx="20" fill="url(#hg1)"/><rect x="37" y="33" width="46" height="34" rx="14" fill="#0b1220"/><circle class="hero-eye" cx="51" cy="48" r="4.4" fill="#5eead4"/><circle class="hero-eye" cx="69" cy="48" r="4.4" fill="#5eead4"/><path d="M52 58 Q60 64 68 58" stroke="#5eead4" stroke-width="3" fill="none" stroke-linecap="round"/><rect x="23" y="42" width="7" height="16" rx="3.5" fill="#67e8f9"/><rect x="90" y="42" width="7" height="16" rx="3.5" fill="#67e8f9"/><rect x="40" y="76" width="40" height="30" rx="12" fill="url(#hg2)"/><polygon points="63,80 52,94 59,94 55,104 70,88 62,88" fill="#fbbf24"/><path class="hero-arm" d="M78 80 Q94 76 97 62" stroke="#22d3ee" stroke-width="7" fill="none" stroke-linecap="round"/></g></svg>'}
function heroState(st){var w=$('hero-stage');if(!w)return;w.classList.remove('is-wave','is-thinking','is-happy');if(!st)return;w.classList.add('is-'+st);setTimeout(function(){w.classList.remove('is-'+st)},st==='wave'?1900:1200)}
function chatAdd(txt,me){
  var b=$('ych-msgs');if(!b)return;
  var row=document.createElement('div');row.className='mrow'+(me?' me':'');
  if(!me){var av=document.createElement('div');av.className='mava';av.innerHTML=heroSVG();row.appendChild(av)}
  var d=document.createElement('div');d.className='msg '+(me?'me':'bot');d.textContent=txt;row.appendChild(d);
  b.appendChild(row);b.scrollTop=b.scrollHeight;
}
function chatTyping(){
  var b=$('ych-msgs');if(!b)return null;
  var row=document.createElement('div');row.className='mrow';
  var av=document.createElement('div');av.className='mava';av.innerHTML=heroSVG();row.appendChild(av);
  var d=document.createElement('div');d.className='msg bot typing';d.innerHTML='<i></i><i></i><i></i>';row.appendChild(d);
  b.appendChild(row);b.scrollTop=b.scrollHeight;return row;
}
function chatAnswer(q){
  var L=lg(),list=QA[L]||QA.en;
  for(var i=0;i<list.length;i++){if(list[i][0].test(q))return list[i][1]}
  var fb={en:'Good question — that one deserves a human answer. Tap "Continue on WhatsApp" and we will reply within 24 hours. Meanwhile: prices start at $499, and a full site takes about 14 days.',
  ar:'سؤال جيد — يستحق إجابة بشرية. اضغط "أكمل على واتساب" وسنرد خلال 24 ساعة. باختصار: الأسعار تبدأ من 499$، والموقع الكامل يستغرق نحو 14 يوماً.',
  ku:'پرسیارێکی باشە — شایەنی وەڵامی مرۆڤە. "لە واتسئاپ بەردەوام بە" دابگرە و لە 24 کاتژمێردا وەڵامت دەدەینەوە. بە کورتی: نرخەکان لە 499$ دەست پێدەکەن و ماڵپەڕی تەواو نزیکەی 14 ڕۆژ دەخایەنێت.'};
  return fb[L]||fb.en;
}
document.addEventListener('DOMContentLoaded',function(){var hc=document.getElementById('hero-char');if(hc&&!hc.innerHTML)hc.innerHTML=heroSVG()});
function buildChat(){
  if(chatBuilt)return;chatBuilt=true;var t=Y[lg()],ht=HT[lg()]||HT.en;
  var btn=document.createElement('button');btn.id='ychat-btn';btn.type='button';btn.setAttribute('aria-label','Hero AI chat');btn.innerHTML='<span style="width:46px;height:46px;display:block">'+heroSVG()+'</span>';
  var pan=document.createElement('div');pan.id='ychat';pan.hidden=true;
  pan.innerHTML='<div class="ych-h"><div class="hero-stage" id="hero-stage">'+heroSVG()+'</div><div><div class="hero-name">'+esc(ht.name)+'</div><div class="hero-sub"><i></i>'+esc(ht.sub)+'</div></div></div><div class="ych-b" id="ych-msgs"></div>'
  
  +'<div style="padding:0 14px 12px"><a class="ygo" style="display:block;text-align:center;text-decoration:none;background:linear-gradient(135deg,#16a34a,#128c4a)" target="_blank" rel="noopener" href="'+waLink(t.chatWa==='Continue on WhatsApp'?'Hello YESES SOLUTION! I have a question.':'مرحباً YESES SOLUTION! لدي سؤال.')+'">'+esc(t.chatWa)+'</a></div>'
  +'<div class="ych-f"><input id="ych-in" type="text" placeholder="'+esc(t.chatPh)+'"><button type="button" id="ych-send">'+esc(t.chatSend)+'</button></div>';
  document.body.appendChild(btn);document.body.appendChild(pan);
  btn.onclick=function(){
    pan.hidden=!pan.hidden;
    if(!pan.hidden){heroState('wave');if(!$('ych-msgs').children.length)setTimeout(function(){chatAdd(t.chatHi,false)},250)}
  };
  function reply(q){
    heroState('thinking');var ty=chatTyping();var done=false;
    function finish(txt){if(done)return;done=true;if(ty)ty.remove();chatAdd(txt,false);heroState('happy');chatHist.push({r:'u',t:q.slice(0,300)},{r:'b',t:String(txt).slice(0,300)});if(chatHist.length>8)chatHist=chatHist.slice(-8)}
    var ctrl=('AbortController' in window)?new AbortController():null;
    var to=setTimeout(function(){if(ctrl)ctrl.abort();finish(chatAnswer(q))},9000);
    try{
      fetch('contracts/api/chat.php',{method:'POST',headers:{'Content-Type':'application/json'},signal:ctrl?ctrl.signal:undefined,body:JSON.stringify({key:'57757a84ff37d38dec60ca6e',q:q.slice(0,600),lang:lg(),hist:chatHist.slice(-6)})})
      .then(function(r){return r.json()})
      .then(function(j){clearTimeout(to);if(j&&j.ok&&j.reply)finish(j.reply);else finish(chatAnswer(q))})
      .catch(function(){clearTimeout(to);finish(chatAnswer(q))});
    }catch(e){clearTimeout(to);finish(chatAnswer(q))}
  }
  function send(){
    var inp=$('ych-in'),v=inp.value.trim();if(!v)return;inp.value='';
    chatAdd(v,true);reply(v);
  }
  $('ych-send').onclick=send;
  $('ych-in').addEventListener('keydown',function(e){if(e.key==='Enter')send()});
  
}

/* ---------- frame preview ---------- */
var yfOv=null,yfCard=null;
function buildFrame(){
  if(yfOv)return;
  yfOv=document.createElement('div');yfOv.className='yf-ov';yfOv.hidden=true;
  yfOv.innerHTML='<div class="yf-card"><div class="yf-chrome"><i style="background:#f87171"></i><i style="background:#fbbf24"></i><i style="background:#34d399"></i><span class="yf-url" id="yf-url"></span><button class="yf-x" id="yf-x" aria-label="Close">✕</button></div><div class="yf-cover" id="yf-cover"></div><div class="yf-body"><h3 id="yf-t"></h3><p id="yf-d"></p><div class="yf-acts" id="yf-a"></div></div></div>';
  document.body.appendChild(yfOv);
  $('yf-x').onclick=closeFrame;
  yfOv.addEventListener('click',function(e){if(e.target===yfOv)closeFrame()});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&yfOv&&!yfOv.hidden)closeFrame()});
}
function closeFrame(){if(yfOv)yfOv.hidden=true;document.body.style.overflow=''}
document.addEventListener('click',function(e){
  var th=e.target.closest&&e.target.closest('.g .c .th');if(!th)return;
  var card=th.closest('.c');if(!card)return;
  var h3=card.querySelector('h3');if(!h3)return;
  var name=h3.textContent.trim();
  var desc='';card.querySelectorAll('p').forEach(function(p){if(!desc&&!p.classList.contains('xcsb'))desc=p.textContent.trim()});
  var ext=card.querySelector('a[href^="http"]'),demo=card.querySelector('a[href^="#/demo"]');
  var url=ext?ext.getAttribute('href'):(demo?demo.getAttribute('href'):'');
  var kcls=th.className.split(/\s+/).filter(function(c){return c&&c!='th'}).join(' ');
  buildFrame();var t=Y[lg()];
  yfCard=card;
  $('yf-url').textContent=url?url.replace(/^https?:\/\//,''):'yesesofficial.tech';
  var cov=$('yf-cover');cov.className='yf-cover '+kcls;cov.style.cssText='';
  $('yf-t').textContent=name;
  $('yf-d').textContent=desc;
  var acts='';
  if(ext)acts+='<a class="btn" target="_blank" rel="noopener" href="'+esc(url)+'"><i></i><span style="position:relative">'+esc(t.frameVisit)+'</span></a>';
  else if(demo)acts+='<a class="btn" href="'+esc(url)+'"><i></i><span style="position:relative">'+esc(t.frameVisit)+'</span></a><span style="color:#9fb3c8;font-size:12.5px;align-self:center">'+esc(t.frameDemo)+'</span>';
  if(card.querySelector('.xcs-btn'))acts+='<button class="bt" type="button" id="yf-case" style="border:0;cursor:pointer;font-family:inherit">'+esc(t.frameCase)+'</button>';
  $('yf-a').innerHTML=acts;
  var cb=$('yf-case');if(cb)cb.onclick=function(){closeFrame();var b=yfCard&&yfCard.querySelector('.xcs-btn');if(b)b.click()};
  yfOv.hidden=false;document.body.style.overflow='hidden';
});

/* ---------- banner/nav offset ---------- */
function yOff(){
  var b=$('yoffer'),hh=0;
  if(b&&b.style.display!='none'){var r=b.getBoundingClientRect();hh=Math.max(0,Math.round(r.bottom));}
  document.documentElement.style.setProperty('--yoff',hh+'px');
}
window.addEventListener('scroll',yOff,{passive:true});
window.addEventListener('resize',yOff);
document.addEventListener('click',function(e){if(e.target.closest&&e.target.closest('#yoffer-x'))setTimeout(yOff,60)});

/* ---------- init ---------- */
function renderAll2(){renderOffer();renderSlots();renderPlay();renderRoi();renderSpeed();renderBA();yOff()}
renderAll2();buildChat();yOff();setTimeout(yOff,400);
setInterval(tickCd,1000);
document.addEventListener('click',function(e){
  var b=e.target.closest&&e.target.closest('[data-l]');
  if(b)setTimeout(function(){renderAll2();
    var pan=$('ychat');if(pan){pan.remove();var ob=$('ychat-btn');if(ob)ob.remove();chatBuilt=false;buildChat()}
  },260);
});
})();
