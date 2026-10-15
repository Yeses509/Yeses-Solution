
/* LAZY COVERS: fetch card cover photos only when they near the screen */
(function(){function vis(el){if(el.closest('[hidden]'))return false;var r=el.getBoundingClientRect();return r.width>0&&r.top<innerHeight+500&&r.bottom>-100}
function scan(){document.querySelectorAll('.th:not(.ld)').forEach(function(el){if(vis(el))el.classList.add('ld')})}
var t;function sch(){clearTimeout(t);t=setTimeout(scan,90)}
addEventListener('scroll',sch,{passive:true});addEventListener('resize',sch);
addEventListener('hashchange',function(){setTimeout(scan,80);setTimeout(scan,450)});
document.addEventListener('click',function(){setTimeout(scan,150);setTimeout(scan,650)},true);
try{new MutationObserver(sch).observe(document.documentElement,{childList:true,subtree:true,attributes:true,attributeFilter:['hidden','class']})}catch(e){}
document.addEventListener('DOMContentLoaded',function(){scan();setTimeout(scan,700);setTimeout(function(){document.querySelectorAll('.th:not(.ld)').forEach(function(el){el.classList.add('ld')})},4000)});
})();
