/* ATMO School mobile menu: shared by all pages */
(function(){
if(window.__atmoMenu)return;window.__atmoMenu=1;
var css='.am-b{display:none;width:44px;height:44px;border:1px solid #DCE3F5;border-radius:12px;background:#fff;align-items:center;justify-content:center;cursor:pointer;flex:none;padding:0;margin-left:8px}'+
'.am-b span,.am-b span:before,.am-b span:after{display:block;width:20px;height:2px;background:#0B1437;border-radius:2px;position:relative;content:""}'+
'.am-b span:before{position:absolute;top:-6px}.am-b span:after{position:absolute;top:6px}'+
'.am-o{position:fixed;inset:0;z-index:1000;background:#0B1437;color:#fff;display:none;flex-direction:column;overflow-y:auto;font-family:Inter,system-ui,sans-serif}'+
'.am-o.on{display:flex}.am-h{display:flex;justify-content:space-between;align-items:center;padding:14px 20px;border-bottom:1px solid rgba(255,255,255,.12)}'+
'.am-h a{color:#fff;text-decoration:none;font-family:Unbounded,sans-serif;font-weight:700;font-size:18px}'+
'.am-x{width:44px;height:44px;border:1px solid rgba(255,255,255,.25);border-radius:12px;background:transparent;color:#fff;font-size:26px;line-height:1;cursor:pointer}'+
'.am-o .am-l{display:flex!important;flex-direction:column!important;align-items:stretch!important;justify-content:flex-start!important;flex-wrap:nowrap!important;gap:0!important;margin:0!important;padding:12px 20px!important;position:static!important;background:none!important;height:auto!important}.am-l>a,.am-s>button{display:flex!important;justify-content:space-between;align-items:center;padding:16px 0;border-bottom:1px solid rgba(255,255,255,.1);color:#fff;text-decoration:none;font-size:20px;font-weight:600;background:none;border-left:0;border-right:0;border-top:0;width:100%;font-family:inherit;cursor:pointer;text-align:left}'+
'.am-s>button i{font-style:normal;transition:transform .2s;color:#8FB3FF}.am-s.op>button i{transform:rotate(45deg)}'+
'.am-g{display:none;grid-template-columns:1fr 1fr;gap:8px;padding:12px 0 16px}.am-s.op .am-g{display:grid}.am-g a{display:block!important;color:#D3DBEE;text-decoration:none;font-size:15px;padding:10px 12px;border-radius:10px;background:rgba(255,255,255,.06)}'+
'.am-f{margin-top:auto;padding:20px;display:flex;flex-direction:column;gap:10px}.am-f a.c{display:flex;align-items:center;justify-content:center;min-height:54px;border-radius:14px;background:#FFC53D;color:#0B1437;font-weight:700;font-size:17px;text-decoration:none}'+
'.am-f .r{display:flex;gap:10px}.am-f .r a{flex:1;display:flex;align-items:center;justify-content:center;min-height:48px;border-radius:12px;border:1px solid rgba(255,255,255,.25);color:#fff;text-decoration:none;font-weight:600;font-size:15px}'+
'@media (max-width:760px){.am-b{display:inline-flex}header nav{flex-wrap:nowrap!important;align-items:center}.am-row{flex-wrap:nowrap!important;align-items:center}.am-row>*:first-child{margin-right:auto}}@media (max-width:760px){.am-row a[href*="call"],.am-row a[href*="apply"],.am-row .btn{display:none!important}}'+
'body.am-lock{overflow:hidden}';
var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
var S=[['Biology','biology'],['Chemistry','chemistry'],['Physics','physics'],['Mathematics','mathematics'],['Computer Science','computer-science'],['English Language','english-language'],['Business','business'],['Economics','economics'],['History','history'],['Psychology','psychology'],['Sociology','sociology'],['Geography','geography']];
var call=document.getElementById('apply')?'#apply':(document.getElementById('call')?'#call':'/#call');
var o=document.createElement('div');o.className='am-o';o.setAttribute('role','dialog');o.setAttribute('aria-modal','true');o.setAttribute('aria-label','Menu');
o.innerHTML='<div class="am-h"><a href="/">ATMO School</a><button type="button" class="am-x" aria-label="Close menu">\u00d7</button></div>'+
'<nav class="am-l" aria-label="Mobile"><a href="/">Home</a><a href="/#why">Why ATMO</a>'+
'<div class="am-s"><button type="button" aria-expanded="false">A-Levels <i>+</i></button><div class="am-g"><a href="/a-levels/">All A-Levels</a>'+S.map(function(s){return '<a href="/a-levels/'+s[1]+'/">'+s[0]+'</a>'}).join('')+'</div></div>'+
'<a href="/pricing/">Prices</a><a href="/#reviews">Reviews</a><a href="/#team">Teachers</a><a href="/blog/">Blog</a><a href="/#faq">FAQ</a></nav>'+
'<div class="am-f"><a class="c" href="'+call+'">Book a call</a><div class="r"><a href="tel:+447441429616">Call us</a><a href="https://wa.me/447549989688">WhatsApp</a></div></div>';
document.body.appendChild(o);
var b=document.createElement('button');b.type='button';b.className='am-b';b.setAttribute('aria-label','Open menu');b.setAttribute('aria-expanded','false');b.innerHTML='<span></span>';
var h=document.querySelector('header');if(!h)return;var nv=h.querySelector('nav');var row=nv?nv.parentElement:(h.firstElementChild||h);row.classList.add('am-row');row.appendChild(b);
function op(v){o.classList.toggle('on',v);document.body.classList.toggle('am-lock',v);b.setAttribute('aria-expanded',v)}
b.addEventListener('click',function(){op(true)});o.querySelector('.am-x').addEventListener('click',function(){op(false)});
o.addEventListener('click',function(e){var a=e.target.closest('a');if(a)op(false)});
var sb=o.querySelector('.am-s>button');sb.addEventListener('click',function(){var p=sb.parentElement;p.classList.toggle('op');sb.setAttribute('aria-expanded',p.classList.contains('op'))});
document.addEventListener('keydown',function(e){if(e.key==='Escape')op(false)});
})();
