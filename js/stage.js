
(function(){
if(typeof THREE==='undefined')return;
try{
var st=document.getElementById('stage'),home=document.getElementById('p-home');
var R=new THREE.WebGLRenderer({alpha:true,antialias:true});
R.setPixelRatio(Math.min(window.devicePixelRatio||1,2));
R.domElement.style.cssText='width:100%;height:100%;display:block';st.appendChild(R.domElement);
var S=new THREE.Scene(),C=new THREE.PerspectiveCamera(32,1,.1,50);
C.position.set(0,.8,7.6);C.lookAt(0,.75,0);
S.add(new THREE.AmbientLight(0xffffff,.7));
var dl=new THREE.DirectionalLight(0xffffff,.9);dl.position.set(2,4,5);S.add(dl);
var rl=new THREE.PointLight(0xff3b2f,1.5,14);rl.position.set(-3,1,2.5);S.add(rl);
var cl=new THREE.PointLight(0x12e6ff,1.3,14);cl.position.set(3,1,2.5);S.add(cl);
var M=function(c,o){return new THREE.MeshStandardMaterial(Object.assign({color:c,roughness:.35,metalness:.15},o||{}))};
var W=M(0xf2f3f7),K=M(0x0b0b12,{roughness:.12,metalness:.6}),Rd=M(0xff3b2f,{emissive:0xff2a1a,emissiveIntensity:.9}),Cy=M(0x12e6ff,{emissive:0x12e6ff,emissiveIntensity:1.2}),G=M(0x8b919c,{metalness:.8,roughness:.3});
var me=function(g,m,x,y,z,s){var o=new THREE.Mesh(g,m);o.position.set(x||0,y||0,z||0);if(s)o.scale.set(s[0],s[1],s[2]);return o};
var SP=function(r){return new THREE.SphereGeometry(r,32,24)};
var CY=function(a,b,h){return new THREE.CylinderGeometry(a,b,h,20)};
var ch=new THREE.Group();ch.scale.set(.92,.92,.92);ch.position.y=-.1;S.add(ch);
// body
ch.add(me(SP(.62),W,0,0,0,[1,1.2,.8]));
ch.add(me(new THREE.CircleGeometry(.13,24),Rd,0,.15,.5));
ch.add(me(new THREE.TorusGeometry(.5,.035,12,48),G,0,-.45,0,[1,1,.78]));
var r1=me(new THREE.TorusGeometry(.5,.05,16,48),Cy,0,-.98,0);r1.rotation.x=Math.PI/2;ch.add(r1);
var r2=me(new THREE.TorusGeometry(.72,.025,12,48),Rd,0,-1.1,0);r2.rotation.x=Math.PI/2;ch.add(r2);
// head
var hd=new THREE.Group();hd.position.y=1.2;ch.add(hd);
hd.add(me(SP(.46),W));
hd.add(me(SP(.4),K,0,0,.24,[1,.62,.6]));
var eyes=new THREE.Group();eyes.position.set(0,.02,.47);hd.add(eyes);
eyes.add(me(SP(.045),Cy,-.14,0,0,[1,1.6,.5]));eyes.add(me(SP(.045),Cy,.14,0,0,[1,1.6,.5]));
var hb=me(new THREE.TorusGeometry(.5,.04,12,40,Math.PI),G,0,.02,0);hd.add(hb);
[-1,1].forEach(function(s){var e=me(CY(.15,.15,.1),Rd,s*.52,0,0);e.rotation.z=Math.PI/2;hd.add(e)});
hd.add(me(CY(.015,.015,.25),G,0,.58,0));
var ab=me(SP(.055),Rd,0,.73,0);hd.add(ab);
// arms
function arm(x){var sh=new THREE.Group();sh.position.set(x,.5,0);ch.add(sh);
sh.add(me(SP(.12),G));sh.add(me(CY(.09,.08,.55),W,0,-.28,0));
var lo=new THREE.Group();lo.position.y=-.56;sh.add(lo);lo.add(me(SP(.085),G));lo.add(me(CY(.08,.065,.5),W,0,-.26,0));lo.add(me(SP(.1),K,0,-.55,0));
return{sh:sh,lo:lo}}
var AR=arm(.64),AL=arm(-.64);
var pen=me(CY(.018,.004,.34),Rd,0,-.6,.05);pen.rotation.x=-.5;AR.lo.add(pen);
var pal=new THREE.Group();pal.position.set(0,-.6,.1);AL.lo.add(pal);
pal.add(me(CY(.22,.22,.025),W,0,0,0));
[0xff3b2f,0x12e6ff,0xffd23f,0x7a5cff].forEach(function(c,i){var a=i*1.4-.7;pal.add(me(SP(.04),M(c,{emissive:c,emissiveIntensity:.5}),Math.cos(a)*.11,.03,Math.sin(a)*.11))});
// textures
function tex(w,h,fn){var c=document.createElement('canvas');c.width=w;c.height=h;fn(c.getContext('2d'),w,h);var t=new THREE.CanvasTexture(c);return t}
function plane(t,w,h){var p=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({map:t,transparent:true,side:THREE.DoubleSide}));S.add(p);return p}
var bw=tex(512,384,function(g,w,h){g.fillStyle='rgba(8,8,14,.82)';g.fillRect(8,8,w-16,h-16);g.strokeStyle='#fff';g.globalAlpha=.7;g.lineWidth=3;g.strokeRect(8,8,w-16,h-16);g.globalAlpha=1;
['#ff5f57','#ffbd2e','#28c840'].forEach(function(c,i){g.fillStyle=c;g.beginPath();g.arc(36+i*26,38,8,0,7);g.fill()});
g.fillStyle='rgba(255,255,255,.12)';g.fillRect(150,28,300,20);
var gr=g.createLinearGradient(30,70,w-30,200);gr.addColorStop(0,'#ff3b2f');gr.addColorStop(1,'#ff2bd6');g.fillStyle=gr;g.fillRect(30,70,w-60,130);
g.fillStyle='#fff';g.fillRect(50,100,170,16);g.fillRect(50,126,110,10);g.fillRect(50,160,80,22);
for(var i=0;i<3;i++){g.fillStyle='rgba(255,255,255,.14)';g.fillRect(30+i*154,220,138,110)}});
var cw=tex(512,256,function(g,w,h){g.font='bold 170px monospace';g.textAlign='center';g.textBaseline='middle';g.shadowColor='#12e6ff';g.shadowBlur=24;g.fillStyle='#fff';g.fillText('</>',w/2,h/2)});
var dw=tex(512,384,function(g,w,h){g.strokeStyle='#12e6ff';g.lineWidth=3;g.fillStyle='rgba(8,8,24,.72)';g.fillRect(8,8,w-16,h-16);g.strokeRect(8,8,w-16,h-16);g.setLineDash([10,8]);g.strokeRect(40,40,w-80,90);g.strokeRect(40,150,150,190);g.strokeRect(210,150,262,80);g.strokeRect(210,250,262,90);g.setLineDash([]);
g.fillStyle='#fff';g.beginPath();g.moveTo(390,120);g.lineTo(390,180);g.lineTo(406,166);g.lineTo(420,196);g.lineTo(432,190);g.lineTo(418,162);g.lineTo(438,160);g.closePath();g.fill()});
var P=[[plane(bw,1.15,.86),-1.55,1.65,.3],[plane(cw,1.0,.5),-1.5,-.15,.4],[plane(dw,1.2,.9),1.75,1.55,.2]];
// mouse
var nx=0,ny=0,sx=0,sy=0;
addEventListener('mousemove',function(e){nx=(e.clientX/innerWidth-.5)*2;ny=(e.clientY/innerHeight-.5)*2});
function rs(){var w=st.clientWidth||300,h=st.clientHeight||300;R.setSize(w,h,false);C.aspect=w/h;C.updateProjectionMatrix()}
rs();addEventListener('resize',rs);addEventListener('load',rs);setTimeout(rs,700);setTimeout(rs,1800);document.addEventListener('visibilitychange',function(){if(!document.hidden)rs()});
var rm=window.matchMedia&&matchMedia('(prefers-reduced-motion:reduce)').matches,clk=new THREE.Clock();
function loop(){requestAnimationFrame(loop);if(home.hidden)return;
if((loop._n=(loop._n||0)+1)%12===0){var _r=st.getBoundingClientRect();loop._off=(_r.bottom<-40||_r.top>innerHeight+40)}if(loop._off)return;
var t=rm?0:clk.getElapsedTime();sx+=(nx-sx)*.06;sy+=(ny-sy)*.06;
ch.position.y=-.1+Math.sin(t*1.5)*.07;ch.rotation.y=sx*.3+Math.sin(t*.6)*.08;
hd.rotation.y=sx*.45;hd.rotation.x=sy*.25;
var bl=(t%4.5)>4.35?.1:1;eyes.scale.y=bl;
ab.scale.setScalar(1+Math.sin(t*4)*.25);
r1.rotation.z=t;r2.rotation.z=-t*.7;
AR.sh.rotation.z=2.2+Math.sin(t*1.6)*.08;AR.lo.rotation.z=.3+Math.sin(t*3)*.25;AR.lo.rotation.x=Math.cos(t*3)*.12;
AL.sh.rotation.z=-.35+Math.sin(t*1.2)*.05;AL.lo.rotation.x=-.7+Math.sin(t*1.8)*.08;
P.forEach(function(p,i){p[0].position.set(p[1],p[2]+Math.sin(t*1.2+i*2)*.1,p[3]);p[0].rotation.y=Math.sin(t*.7+i)*.25+sx*.2});
R.render(S,C)}
loop();
}catch(e){}
})();
