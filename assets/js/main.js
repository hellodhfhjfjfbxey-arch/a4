(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){var d=document.documentElement,rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
[].forEach.call(document.querySelectorAll('.stg'),function(g){[].forEach.call(g.children,function(c,i){c.style.transitionDelay=(i*110)+'ms';});});
function cnt(el){var to=parseFloat(el.getAttribute('data-count')),dec=(el.getAttribute('data-count').split('.')[1]||'').length,t0=null,dur=1600;if(rm){el.textContent=to.toFixed(dec);return;}function f(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=(to*e).toFixed(dec);if(p<1)requestAnimationFrame(f);}requestAnimationFrame(f);}
var els=[].slice.call(document.querySelectorAll('.rv,[data-count]'));
if(rm||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');if(e.hasAttribute('data-count'))e.textContent=e.getAttribute('data-count');});}
else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var ts=(e.target.__rv||[]).concat(els.indexOf(e.target)>-1?[e.target]:[]);ts.forEach(function(t){t.classList.add('in');if(t.hasAttribute('data-count'))cnt(t);});io.unobserve(e.target);}});},{rootMargin:'0px 0px -6% 0px',threshold:.01});
 els.forEach(function(e){var o=e;if(e.classList.contains('rv-c')||e.classList.contains('rv-w')){o=e.parentElement;}if(o!==e){(o.__rv=o.__rv||[]).push(e);}io.observe(o);});
 setTimeout(function(){els.forEach(function(e){var r=e.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)e.classList.add('in');});},1200);}
var px=[].slice.call(document.querySelectorAll('[data-px]')),pr=document.getElementById('prog'),tk=false;
function upd(){var h=innerHeight;if(!rm)px.forEach(function(el){var r=el.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>h)return;var s=+el.getAttribute('data-px');el.style.transform='translate3d(0,'+((r.top+r.height/2-h/2)*s).toFixed(1)+'px,0) scale(1.14)';});
 if(pr){var m=d.scrollHeight-h;pr.style.width=(m>0?scrollY/m*100:0)+'%';}d.classList.toggle('scd',scrollY>60);tk=false;}
addEventListener('scroll',function(){if(!tk){requestAnimationFrame(upd);tk=true;}},{passive:true});addEventListener('resize',upd);upd();
[].forEach.call(document.querySelectorAll('.hs'),function(s){var down=false,x0=0,s0=0,mv=0;s.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;down=true;mv=0;x0=e.clientX;s0=s.scrollLeft;s.classList.add('drag');});addEventListener('pointerup',function(){down=false;s.classList.remove('drag');});s.addEventListener('pointermove',function(e){if(!down)return;mv=Math.abs(e.clientX-x0);s.scrollLeft=s0-(e.clientX-x0);});s.addEventListener('click',function(e){if(mv>6){e.preventDefault();e.stopPropagation();}},true);});
})();
(function(){function $(i){return document.getElementById(i);}var rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
var sl=[].slice.call(document.querySelectorAll('.cr-sl')),sw=[].slice.call(document.querySelectorAll('.cr-hero-w span')),dt=[].slice.call(document.querySelectorAll('.cr-dots i'));if(sl.length&&!rm){var k=0;setInterval(function(){k=(k+1)%sl.length;[sl,sw,dt].forEach(function(a){a.forEach(function(e,j){e.classList.toggle('on',j===k);});});},5200);}
var CS=[['In hand','Held by the top handles, arm relaxed. Polished and formal; keep it light.','M120 90l-30 60 0 70','M120 90l30 60 0 70','M150 220 L150 226','150','226','Small top-handle bags','Light'],
 ['Crook of the arm','Handles rest in the bend of the elbow, forearm raised. Elegant and in view.','M120 90l-30 60 0 70','M120 90l34 60 30-26','M184 124 q-6 40 -12 54','150','168','Structured, small bags','Light'],
 ['On the shoulder','A strap over one shoulder, bag tucked under the arm. Hands free; switch sides.','M120 90l-30 60 0 70','M120 90l30 60 0 70','M138 84 L160 180','136','176','Shoulder and hobo bags','Medium'],
 ['Crossbody','A long strap across the torso, bag at the opposite hip. Secure and even.','M120 90l-30 60 0 70','M120 90l30 60 0 70','M100 82 L150 220','134','214','Crossbody and saddle bags','Medium to heavy'],
 ['On the back','Two straps over both shoulders. The kindest way to carry a heavy load.','M120 90l-30 60 0 70','M120 90l30 60 0 70','M104 84 L104 150 M136 84 L136 150','92','100','Backpacks','Heavy']];
var cb=[].slice.call(document.querySelectorAll('.cr-cs-b button'));if(cb.length){function cs(i){cb.forEach(function(b,j){b.setAttribute('aria-selected',i===j?'true':'false');});var c=CS[i];$('cs-la').setAttribute('d',c[2]);$('cs-ra').setAttribute('d',c[3]);$('cs-st').setAttribute('d',c[4]);var bg=$('cs-bg');bg.setAttribute('x',c[5]);bg.setAttribute('y',c[6]);bg.setAttribute('opacity',i===4?.55:1);
 $('cs-o').innerHTML='<h3>'+c[0]+'</h3><p>'+c[1]+'</p><dl><dt>Best for</dt><dd>'+c[7]+'</dd><dt>Load</dt><dd>'+c[8]+'</dd></dl>';}cb.forEach(function(b,i){b.addEventListener('click',function(){cs(i);});});cs(0);}
var wi=$('wt-i');if(wi){var IT=[['Phone',200,1],['Keys',100,1],['Wallet',250,1],['Card holder',40,0],['Sunglasses',60,0],['Water bottle',600,0],['Laptop',1400,0],['Tablet',500,0],['Book',350,0],['Make-up pouch',300,0],['Umbrella',350,0],['Lunch box',450,0]];
 wi.innerHTML=IT.map(function(t,i){return '<label><input type="checkbox" value="'+t[1]+'"'+(t[2]?' checked':'')+'><span>'+t[0]+'<em>'+t[1]+' g</em></span></label>';}).join('');var cbx=[].slice.call(wi.querySelectorAll('input'));
 function wt(){var g=cbx.reduce(function(a,c){return a+(c.checked?+c.value:0);},0)+400,p=Math.min(100,g/4000*100);$('wt-g').textContent=(g>=1000?(g/1000).toFixed(1)+' kg':g+' g');$('wt-arc').style.strokeDasharray=p.toFixed(1)+' 100';$('wt-arc').style.stroke=g>3000?'#B4553B':(g>1800?'#C49A6C':'#7C8C5E');$('wt-n').style.transform='rotate('+(p*1.8-90)+'deg)';
  $('wt-t').textContent=(g<1200?'Light. A hand-held or shoulder bag is perfect.':g<2500?'Moderate. A crossbody or wide shoulder strap will feel kinder.':'Heavy. Use a backpack or a crossbody with a wide strap, and lighten the load.')+' (Includes about 400 g for the bag itself.)';}
 cbx.forEach(function(c){c.addEventListener('change',wt);});wt();}
var fb=[].slice.call(document.querySelectorAll('.cr-flt button')),gi=[].slice.call(document.querySelectorAll('.cr-gi'));fb.forEach(function(b){b.addEventListener('click',function(){var f=b.getAttribute('data-f');fb.forEach(function(x){x.classList.toggle('on',x===b);x.setAttribute('aria-pressed',x===b);});gi.forEach(function(g){g.classList.toggle('off',f!=='all'&&g.getAttribute('data-k')!==f);});});});
var tb=$('tl-b');if(tb){var tl=tb.closest('.cr-tl');function t(){var r=tl.getBoundingClientRect(),p=Math.max(0,Math.min(1,(innerHeight*.6-r.top)/r.height));tb.style.height=(p*100)+'%';}addEventListener('scroll',t,{passive:true});t();}
var ol=[].slice.call(document.querySelectorAll('.cr-po-o li')),ps=[].slice.call(document.querySelectorAll('.cr-po .ps'));if(ol.length&&ps.length&&'IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var i=ps.indexOf(e.target);ol.forEach(function(l,j){l.classList.toggle('on',i===j);});}});},{rootMargin:'-30% 0px -60% 0px'});ps.forEach(function(p){io.observe(p);});}
})();
