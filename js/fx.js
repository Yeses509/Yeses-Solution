
/* SVFX: site-wide cinematic motion — ambient layers, marquee dividers, card tilt+glare */
(function(){
var PAGES=['p-home','p-services','p-work','p-pricing','p-about','p-insights'];
var IN=PAGES.map(function(id){return '#'+id}).join(',');
var MQ_AFTER={'p-home':['prj3'],'p-services':['svcAll','stp'],'p-work':['prjAll'],'p-pricing':['care'],'p-about':['vals']};
function mq(){var w=document.createElement('div');w.className='svfx-mq';w.setAttribute('aria-hidden','true');
  var t='DESIGN \u2726 BUILD \u2726 LAUNCH \u2726 SCALE \u2726 REPEAT \u2726 ';
  w.innerHTML='<div class="svfx-mq-in"><span>'+t+'</span><span>'+t+'</span></div>';return w;}
PAGES.forEach(function(id){
  var svc=document.getElementById(id);if(!svc)return;
  if(!svc.querySelector('.svfx-bg')){
    var bg=document.createElement('div');bg.className='svfx-bg';bg.setAttribute('aria-hidden','true');
    bg.innerHTML='<i class="svfx-blob b1"></i><i class="svfx-blob b2"></i><i class="svfx-blob b3"></i>';
    for(var k=0;k<26;k++){var p=document.createElement('i');p.className='svfx-p';
      p.style.left=(Math.random()*100).toFixed(1)+'%';p.style.top=(Math.random()*100).toFixed(1)+'%';
      var sz=(2+Math.random()*4).toFixed(1);p.style.width=sz+'px';p.style.height=sz+'px';
      p.style.animationDuration=(3+Math.random()*5).toFixed(1)+'s';p.style.animationDelay=(-Math.random()*6).toFixed(1)+'s';
      bg.appendChild(p);}
    svc.insertBefore(bg,svc.firstChild);
  }
  (MQ_AFTER[id]||[]).forEach(function(key){
    var g=svc.querySelector('[data-r="'+key+'"]');
    if(g){var nx=g.nextElementSibling;if(!nx||!nx.classList.contains('svfx-mq'))g.after(mq());}
  });
});
var last=null;
document.body.addEventListener('mousemove',function(e){
  var c=e.target&&e.target.closest?e.target.closest('.g .c'):null;
  if(c&&!c.closest(IN))c=null;
  if(c!==last){if(last){last.style.setProperty('--rx','0deg');last.style.setProperty('--ry','0deg');}last=c;}
  if(!c||!c.classList.contains('in'))return;
  var r=c.getBoundingClientRect(),px=(e.clientX-r.left)/r.width-.5,py=(e.clientY-r.top)/r.height-.5;
  c.style.setProperty('--ry',(px*10).toFixed(2)+'deg');c.style.setProperty('--rx',(-py*10).toFixed(2)+'deg');
  c.style.setProperty('--mx',((px+.5)*100).toFixed(1)+'%');c.style.setProperty('--my',((py+.5)*100).toFixed(1)+'%');
});
document.body.addEventListener('mouseout',function(e){
  var c=e.target&&e.target.closest?e.target.closest('.g .c'):null;
  if(c&&c.closest(IN)&&(!e.relatedTarget||!c.contains(e.relatedTarget))){c.style.setProperty('--rx','0deg');c.style.setProperty('--ry','0deg');if(last===c)last=null;}
});
})();
;

/* REVIEWS: dynamic testimonials — localStorage store, example seeds, review form with star rating */
(function(){
var KEY='ys_reviews_v1';
var SEED=[
 {n:'James Whitfield',co:'Brightline Studio',ctry:'United States',stars:5,sample:true,
  text:'YESES turned our idea into a website in days. It looks exactly like our brand.'},
 {n:'Sarah Mitchell',co:'Bloom & Bean Café',ctry:'United States',stars:5,sample:true,
  text:'Fast, clear communication and a design that feels premium. Our online bookings doubled after launch.'},
 {n:'Layla Haddad',co:'Noor Boutique',ctry:'United Arab Emirates',stars:5,sample:true,
  text:'Professional, on time, and the website came out better than we imagined. Highly recommended.'}
];
function load(){try{var r=JSON.parse(localStorage.getItem(KEY));if(Array.isArray(r))return r;}catch(e){}return null;}
function save(){try{localStorage.setItem(KEY,JSON.stringify(reviews));}catch(e){}}
var reviews=load();
if(!reviews){reviews=SEED.slice();save();}
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
function starsHTML(s){var h='';for(var i=1;i<=5;i++)h+=i<=s?'\u2605':'\u2606';return '<div class="rv-stars">'+h+'</div>';}
function cardHTML(r,idx){
  var who=esc(r.n)+(r.co?' \u00B7 '+esc(r.co):'')+(r.ctry?', '+esc(r.ctry):'');
  return '<div class="c rv2 in">'
    +(r.sample?'<button type="button" class="rv-del" data-del="'+idx+'" aria-label="Remove example">\u00D7</button><span class="rv-badge">EXAMPLE</span>':'')
    +starsHTML(r.stars)+'<p class="q">\u201C'+esc(r.text)+'\u201D</p><span class="who">'+who+'</span></div>';
}
function paintAgg(){
  var el=document.querySelector('.rv-ag');if(!el)return;
  var real=reviews.filter(function(r){return !r.sample;});
  if(!real.length){el.innerHTML='<span>No reviews yet \u2014 be the first to share your experience!</span>';return;}
  var avg=real.reduce(function(a,r){return a+r.stars;},0)/real.length;
  el.innerHTML='<b>'+avg.toFixed(1)+'</b><span class="au">\u2605</span><span>\u00B7 '+real.length+' review'+(real.length>1?'s':'')+'</span>';
}
function paint(){
  var grids=document.querySelectorAll('[data-r="tst"]');
  if(!grids.length)return;
  var html='';
  for(var i=0;i<reviews.length;i++)html+=cardHTML(reviews[i],i);
  grids.forEach(function(g){g.innerHTML=html;});
  paintAgg();
  document.querySelectorAll('[data-del]').forEach(function(b){
    b.onclick=function(){reviews.splice(+b.getAttribute('data-del'),1);save();paint();};
  });
}
var COUNTRIES=['United States','United Arab Emirates','Saudi Arabia','Iraq','Egypt','Jordan','Lebanon','Syria','Kuwait','Qatar','Bahrain','Oman','Morocco','Tunisia','Algeria','Other'];
function buildForm(){
  if(document.querySelector('.rv-wrap'))return;
  var grid=document.querySelector('#p-home [data-r="tst"]');
  if(!grid)return;
  var w=document.createElement('div');w.className='rv-wrap';
  var opts='<option value="">Country *</option>'+COUNTRIES.map(function(c){return '<option value="'+c+'">'+c+'</option>';}).join('');
  var starBtns='';
  for(var i=1;i<=5;i++)starBtns+='<button type="button" data-v="'+i+'" aria-label="'+i+' star'+(i>1?'s':'')+'">\u2605</button>';
  w.innerHTML='<div class="rv-ag"></div>'
    +'<button type="button" class="bt rv-toggle">\u270E Write a review</button>'
    +'<form class="rv-form" hidden novalidate>'
    +'<div class="two"><input name="n" maxlength="60" placeholder="Your name *" autocomplete="name">'
    +'<input name="co" maxlength="60" placeholder="Company (optional)" autocomplete="organization"></div>'
    +'<div class="two"><select name="ctry" required>'+opts+'</select>'
    +'<div><p class="rv-lab">Your rating *</p><div class="stars-in" role="radiogroup" aria-label="Star rating">'+starBtns+'</div></div></div>'
    +'<input type="hidden" name="stars" value="0">'
    +'<textarea name="text" rows="4" maxlength="600" placeholder="Your review *"></textarea>'
    +'<p class="rv-err"></p>'
    +'<div><button class="bt" type="submit">Submit review</button></div>'
    +'</form>';
  grid.after(w);
  w.querySelector('.rv-toggle').addEventListener('click',function(){
    var f=w.querySelector('.rv-form');f.hidden=!f.hidden;
    if(!f.hidden)f.querySelector('[name=n]').focus();
  });
  var stars=w.querySelector('.stars-in'),sh=w.querySelector('[name=stars]');
  function lit(v){stars.querySelectorAll('button').forEach(function(b){b.classList.toggle('lit',+b.getAttribute('data-v')<=v);});}
  stars.addEventListener('mouseover',function(e){var b=e.target.closest?e.target.closest('button'):null;if(b)lit(+b.getAttribute('data-v'));});
  stars.addEventListener('mouseout',function(){lit(+sh.value||0);});
  stars.addEventListener('click',function(e){var b=e.target.closest?e.target.closest('button'):null;if(b){sh.value=b.getAttribute('data-v');lit(+sh.value);}});
  w.querySelector('.rv-form').addEventListener('submit',function(e){
    e.preventDefault();
    var f=e.target,err=w.querySelector('.rv-err');
    var n=f.querySelector('[name=n]').value.trim(),
        co=f.querySelector('[name=co]').value.trim(),
        ctry=f.querySelector('[name=ctry]').value,
        st=+f.querySelector('[name=stars]').value,
        tx=f.querySelector('[name=text]').value.trim();
    if(!n){err.textContent='Please enter your name.';return;}
    if(!ctry){err.textContent='Please choose your country.';return;}
    if(!st){err.textContent='Please tap the stars to rate.';return;}
    if(tx.length<4){err.textContent='Please write a few words.';return;}
    reviews.unshift({n:n,co:co,ctry:ctry,stars:st,text:tx,sample:false,ts:Date.now()});
    save();paint();
    f.reset();sh.value='0';lit(0);err.textContent='';
    f.hidden=true;
    var ok=document.createElement('p');ok.className='rv-ok';ok.textContent='Thank you! Your review was added below.';
    w.querySelector('.rv-toggle').after(ok);
    setTimeout(function(){if(ok.parentNode)ok.parentNode.removeChild(ok);},4500);
  });
}
buildForm();
paint();
/* re-paint after the main script rebuilds content on language switch */
document.addEventListener('click',function(e){
  var b=e.target.closest&&e.target.closest('[data-l]');
  if(b)setTimeout(paint,80);
});
})();

