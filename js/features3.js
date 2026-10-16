
/* FEATURES 3: sales contracts gate + history. Platform stays the system of record (signed PDF by email). */
(function(){
"use strict";
var PLATFORM_URL='https://yesesofficial.tech/contracts/';
var Z_HASH='62ce4b9798ca0c386a62421642ab446d71ea44320037249729c2f40a158f6fa5';
var $=function(i){return document.getElementById(i)};
function lg(){var l='en';try{l=localStorage.getItem('ys_lang')||'en'}catch(e){}return ['en','ar','ku'].indexOf(l)<0?'en':l}
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
var Z={
en:{title:'Sales contracts',sub:'For the YESES SOLUTION sales team only. Enter your name and the team code to open the contract platform.',namePh:'Your name (sales representative)',codePh:'Secret code',enter:'Open the contract platform',wrong:'Wrong code — try again.',locked:'Too many attempts. Wait a minute and try again.',histT:'Contract history',note:'Stored centrally under YESES SOLUTION — visible on any device. The official copy of every contract is the signed PDF emailed to khudhur@yesesofficial.com.',empty:'No contracts yet. Completed contracts will appear here automatically.',reopen:'Reopen',del:'Delete',clear:'Clear all',signout:'Sign out',saved:'Contract saved to history:',sentL:'Sent',recL:'Recorded',rep:'Sales rep',open:'Open in full screen'},
ar:{title:'عقود البيع',sub:'خاص بفريق مبيعات YESES SOLUTION فقط. أدخل اسمك والرمز السري لفتح منصة العقود.',namePh:'اسمك (مندوب المبيعات)',codePh:'الرمز السري',enter:'فتح منصة العقود',wrong:'الرمز غير صحيح — حاول مجدداً.',locked:'محاولات كثيرة. انتظر دقيقة وحاول مجدداً.',histT:'سجل العقود',note:'محفوظ مركزياً لدى YESES SOLUTION — يظهر على أي جهاز. النسخة الرسمية من كل عقد هي ملف PDF الموقّع الذي يصل بالبريد إلى khudhur@yesesofficial.com.',empty:'لا عقود بعد. العقود المنجزة ستظهر هنا تلقائياً.',reopen:'فتح',del:'حذف',clear:'مسح الكل',signout:'تسجيل الخروج',saved:'تم حفظ العقد في السجل:',sentL:'تم الإرسال',recL:'مسجّل',rep:'المندوب',open:'فتح بملء الشاشة'},
ku:{title:'گرێبەستەکانی فرۆشتن',sub:'تەنها بۆ تیمی فرۆشتنی YESES SOLUTION. ناوەکەت و کۆدی نهێنی بنووسە بۆ کردنەوەی پلاتفۆرمی گرێبەستەکان.',namePh:'ناوەکەت (نوێنەری فرۆشتن)',codePh:'کۆدی نهێنی',enter:'پلاتفۆرمی گرێبەست بکەرەوە',wrong:'کۆدەکە هەڵەیە — هەوڵبدەرەوە.',locked:'هەوڵدان زۆر بوو. خولەکێک بوەستە و هەوڵبەرەوە.',histT:'مێژووی گرێبەستەکان',note:'بە شێوەیەکی ناوەندی لە YESES SOLUTION هەڵگیراوە — لەسەر هەر ئامێرێک دەبینرێت. وەشانی فەرمی هەر گرێبەستێک PDF ـە واژۆکراوەکەیە کە بە ئیمەیڵ دەچێت بۆ khudhur@yesesofficial.com.',empty:'هێشتا هیچ گرێبەستێک نییە. گرێبەستە تەواوکراوەکان خۆکار لێرە دەردەکەون.',reopen:'بکەرەوە',del:'بسڕەوە',clear:'هەمووی بسڕەوە',signout:'دەرچوون',saved:'گرێبەستەکە لە مێژوودا هەڵگیرا:',sentL:'نێردرا',recL:'تۆمارکرا',rep:'نوێنەر',open:'بە پڕ شاشە بیکەرەوە'}};
function hist(){try{return JSON.parse(localStorage.getItem('zs_history')||'[]')}catch(e){return[]}}
function saveHist(a){try{localStorage.setItem('zs_history',JSON.stringify(a.slice(0,200)))}catch(e){}}
function unlocked(){try{return sessionStorage.getItem('zs_ok')==='1'&&!!sessionStorage.getItem('zs_rep')}catch(e){return false}}
function sha256(str){return crypto.subtle.digest('SHA-256',new TextEncoder().encode(str)).then(function(b){return Array.from(new Uint8Array(b)).map(function(x){return x.toString(16).padStart(2,'0')}).join('')})}
function rowHTML(r,i,t){
  var d=new Date(r.ts||Date.now());
  var when=d.toLocaleDateString()+' '+d.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});
  var pill=r.status==='sent'?'<span class="zst ok">'+esc(t.sentL)+'</span>':'<span class="zst rec">'+esc(t.recL)+'</span>';
  return '<div class="zrow" data-zrow="'+i+'"><div><b>'+esc(r.agreement||'—')+'</b>'+pill+' · '+esc(r.client||'')+'<div class="zmeta">'+esc(when)+' · '+esc(t.rep)+': '+esc(r.rep||'')+(r.pkg?' · $'+esc(r.pkg):'')+'</div></div>'
  +'</div>';
}
function histInner(t){
  var a=hist();
  var rows=a.map(function(r,i){return rowHTML(r,i,t)}).join('');
  return '<h3>'+esc(t.histT)+'</h3><p class="znote">'+esc(t.note)+'</p>'
  +(rows||'<div class="zempty">'+esc(t.empty)+'</div>')
  ;
}
function wireHist(){
  var host=$('zsales');if(!host)return;
  host.querySelectorAll('[data-zrow]').forEach(function(row){row.onclick=function(){
    var r=hist()[+row.getAttribute('data-zrow')];if(!r)return;
    var u=PLATFORM_URL+'?view='+encodeURIComponent(r.agreement||'')+'&rep='+encodeURIComponent(sessionStorage.getItem('zs_rep')||r.rep||'');
    var f=$('zframe');if(f)f.src=u;window.scrollTo({top:host.offsetTop-80,behavior:'smooth'});
  }});
}
function refreshHist(){
  var w=$('zhist-wrap');if(!w)return;
  w.innerHTML=histInner(Z[lg()]);pullCentral();wireHist();
}
function renderSales(){
  var host=$('zsales');if(!host)return;var t=Z[lg()];
  if(!unlocked()){
    host.innerHTML='<div class="zcard"><h2>'+esc(t.title)+'</h2><p class="zsub">'+esc(t.sub)+'</p>'
    +'<input class="zin" id="z-name" type="text" autocomplete="name" placeholder="'+esc(t.namePh)+'">'
    +'<input class="zin" id="z-code" type="password" autocomplete="off" placeholder="'+esc(t.codePh)+'">'
    +'<button class="zgo" id="z-go" type="button">'+esc(t.enter)+'</button><p class="zerr" id="z-err"></p></div>';
    var go=function(){
      var name=($('z-name').value||'').trim(),code=($('z-code').value||'').trim(),err=$('z-err');
      var lockUntil=+(localStorage.getItem('zs_lock')||0);
      if(Date.now()<lockUntil){err.textContent=t.locked;return}
      if(!name){err.textContent=t.namePh;return}
      sha256(code).then(function(hx){
        if(hx===Z_HASH){
          try{sessionStorage.setItem('zs_ok','1');sessionStorage.setItem('zs_rep',name);localStorage.removeItem('zs_att');localStorage.removeItem('zs_lock')}catch(e){}
          renderSales();
        }else{
          var att=(+(localStorage.getItem('zs_att')||0))+1;
          try{localStorage.setItem('zs_att',att);if(att>=3)localStorage.setItem('zs_lock',Date.now()+60000)}catch(e){}
          err.textContent=att>=3?t.locked:t.wrong;
        }
      });
    };
    $('z-go').onclick=go;
    $('z-code').addEventListener('keydown',function(e){if(e.key==='Enter')go()});
    return;
  }
  var repName=sessionStorage.getItem('zs_rep')||'';
  var src=PLATFORM_URL+(PLATFORM_URL.indexOf('?')<0?'?':'&')+'rep='+encodeURIComponent(repName);
  host.innerHTML='<div id="zflash"></div>'
  +'<div class="zbar"><span>'+esc(t.rep)+': <b>'+esc(repName)+'</b></span><span style="display:flex;gap:8px"><a class="zout" style="text-decoration:none" target="_blank" rel="noopener" href="'+esc(src)+'">'+esc(t.open)+'</a><button class="zout" id="z-out" type="button">'+esc(t.signout)+'</button></span></div>'
  +'<iframe id="zframe" title="Contract platform" src="'+esc(src)+'"></iframe>'
  +'<div class="zhist" id="zhist-wrap">'+histInner(t)+'</div>';
  $('z-out').onclick=function(){try{sessionStorage.removeItem('zs_ok');sessionStorage.removeItem('zs_rep')}catch(e){}renderSales()};
  wireHist();
}
var Z_API='57757a84ff37d38dec60ca6e';
function apiCall(body){body.key=Z_API;return fetch('contracts/api/records.php',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)}).then(function(r){return r.json()}).catch(function(){return null})}
function pullCentral(){apiCall({action:'list'}).then(function(j){if(!j||!j.ok||!Array.isArray(j.records))return;var by={};hist().forEach(function(r){if(r&&r.agreement)by[r.agreement]=r});j.records.forEach(function(r){if(r&&r.agreement)by[r.agreement]=r});var merged=Object.keys(by).map(function(k){return by[k]}).sort(function(a,b){return (b.ts||0)-(a.ts||0)});saveHist(merged);var pg=$('p-sales');if(pg&&!pg.hidden&&unlocked())refreshHist()})}
window.addEventListener('message',function(e){
  var org='';try{org=new URL(PLATFORM_URL).origin}catch(x){}
  if(org&&e.origin!==org)return;
  var d=e.data;if(!d||(d.type!=='ys-contract-done'&&d.type!=='ys-contract-submit'))return;
  var a=hist(),found=false;
  for(var i=0;i<a.length;i++){
    if(a[i].agreement&&a[i].agreement===d.agreement){
      var keep=a[i];
      a[i]=d;a[i].status=(d.type==='ys-contract-done'||keep.status==='sent')?'sent':'recorded';
      found=true;break;
    }
  }
  if(!found){d.status=(d.type==='ys-contract-done')?'sent':'recorded';a.unshift(d)}
  saveHist(a);
  var pg=$('p-sales');
  if(pg&&!pg.hidden&&unlocked()){
    refreshHist();
    var fl=$('zflash');var t=Z[lg()];
    if(fl)fl.innerHTML='<div class="zflash">'+esc(t.saved)+' '+(d.agreement||'')+'</div>';
  }
});
document.addEventListener('click',function(e){
  var b=e.target.closest&&e.target.closest('[data-l]');
  if(b)setTimeout(renderSales,300);
});
/* discreet footer entry */
(function(){
  var f=document.querySelector('footer');if(!f||$('z-sales-link'))return;
  var d=document.createElement('div');
  d.style.cssText='text-align:center;padding:12px 0 4px';
  d.innerHTML='<a id="z-sales-link" href="#/sales" style="font-size:12.5px;color:var(--mut);text-decoration:none;letter-spacing:.4px">Sales team</a>';
  f.appendChild(d);
})();
renderSales();
})();
