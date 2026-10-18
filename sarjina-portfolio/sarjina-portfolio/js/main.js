(function(){
  var clock=document.getElementById('clock');
  function tick(){clock.textContent=new Date().toLocaleTimeString('en-GB',{timeZone:'Asia/Kolkata'})}
  tick();setInterval(tick,1000);
  var root=document.documentElement;
  try{var s=localStorage.getItem('theme');if(s)root.setAttribute('data-theme',s)}catch(e){}
  document.getElementById('theme').onclick=function(){
    var cur=root.getAttribute('data-theme')||(matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');
    var next=cur==='dark'?'light':'dark';root.setAttribute('data-theme',next);paint();
    try{localStorage.setItem('theme',next)}catch(e){}
  };
  var qa=[
    ['Who are you?','Sarjina Shaikh, a frontend developer from Mumbai with a B.E. in Computer Science. I build responsive, interactive web apps with React.js and JavaScript.'],
    ['What’s your stack?','React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS and Bootstrap, with API integration and mobile-first, cross-browser design.'],
    ['What have you built?','A luxury hotel website with a live booking form, a React finance dashboard deployed on Vercel, a React and Tailwind chatbot interface, and a fake news detector built with machine learning and NLP.'],
    ['Have you published research?','Yes. My paper on GRU and attention models for automated leukemia detection in blood smear images was published in IJSREM, Volume 10, Issue 04, April 2026.'],
    ['Where did you study?','B.E. in Computer Science at Rizvi College of Engineering, Mumbai, 2022 to 2026.'],
    ['Are you available?','Yes. I’m looking to start my career as a frontend developer on a team building user-first web experiences.'],
    ['How can I reach you?','Email shaikhsarjina083@gmail.com, call 8097124007, or message me on LinkedIn from the Contact section.']
  ];
  var T='font-family="sans-serif" font-weight="700" text-anchor="middle"';
  var I={
    React:'<svg viewBox="-12 -12 24 24"><g fill="none" stroke="#61DAFB" stroke-width="1.2"><ellipse rx="10" ry="4"/><ellipse rx="10" ry="4" transform="rotate(60)"/><ellipse rx="10" ry="4" transform="rotate(120)"/></g><circle r="1.8" fill="#61DAFB"/></svg>',
    JavaScript:'<svg viewBox="0 0 24 24"><rect width="24" height="24" rx="3" fill="#F7DF1E"/><text x="13" y="19" font-size="12" '+T+' fill="#111">JS</text></svg>',
    HTML:'<svg viewBox="0 0 24 24"><path d="M3 2l1.7 19L12 23l7.3-2L21 2z" fill="#E34C26"/><text x="12" y="16.5" font-size="11" '+T+' fill="#fff">5</text></svg>',
    CSS:'<svg viewBox="0 0 24 24"><path d="M3 2l1.7 19L12 23l7.3-2L21 2z" fill="#1572B6"/><text x="12" y="16.5" font-size="11" '+T+' fill="#fff">3</text></svg>',
    Tailwind:'<svg viewBox="0 0 24 24"><path fill="#38BDF8" d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C13.39 10.85 14.52 12 17 12c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.15 14.48 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C8.39 16.85 9.52 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 13.15 9.48 12 7 12z"/></svg>',
    Bootstrap:'<svg viewBox="0 0 24 24"><rect width="24" height="24" rx="5" fill="#7952B3"/><text x="12" y="17.5" font-size="15" '+T+' fill="#fff">B</text></svg>',
    API:'<svg viewBox="0 0 24 24"><rect x="1.5" y="4" width="21" height="16" rx="3" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="12" y="15.5" font-size="8" '+T+' fill="currentColor">API</text></svg>',
    AWS:'<svg viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#FF9900"/><text x="12" y="16" font-size="9" '+T+' fill="#111">aws</text></svg>'
  };
  function ico(t){var k=/^React/.test(t)?'React':/JavaScript/.test(t)?'JavaScript':/^HTML/.test(t)?'HTML':/^CSS/.test(t)?'CSS':/Tailwind/.test(t)?'Tailwind':/Bootstrap/.test(t)?'Bootstrap':/^API/.test(t)?'API':/^AWS/.test(t)?'AWS':null;return k?I[k]:''}
  document.querySelectorAll('.chips span,.mod .tags span').forEach(function(s){var i=ico(s.textContent);if(i)s.innerHTML=i+s.textContent});
  var SUN='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',MOON='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';
  function paint(){var b=document.getElementById('theme'),d=(root.getAttribute('data-theme')||(matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'))==='dark';b.innerHTML=d?SUN:MOON;b.title=d?'Switch to light mode':'Switch to dark mode'}
  paint();
  var ICO={
    linkedin:'<svg viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#0A66C2"/><text x="12" y="17.5" font-size="13" font-weight="700" font-family="sans-serif" text-anchor="middle" fill="#fff">in</text></svg>',
    gmail:'<svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2" fill="#fff"/><path d="M2 6v12" stroke="#4285F4" stroke-width="2.2"/><path d="M22 6v12" stroke="#34A853" stroke-width="2.2"/><path d="M2 6.5l10 7 10-7" fill="none" stroke="#EA4335" stroke-width="2.2" stroke-linejoin="round"/></svg>',
    phone:'<svg viewBox="0 0 24 24"><path fill="currentColor" d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11 11 0 0 0 3.5.55 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.2.2 2.4.55 3.5a1 1 0 0 1-.25 1z"/></svg>'};
  document.querySelectorAll('[data-ico]').forEach(function(a){a.insertAdjacentHTML('afterbegin',ICO[a.getAttribute('data-ico')])});
  var ld=document.querySelector('.lang .mod-body'),rows=[].slice.call(document.querySelectorAll('.langs li')),tot=0,acc=0,seg='';
  var data=rows.map(function(li){var v=parseInt(li.querySelector('em').textContent,10);tot+=v;return{c:li.querySelector('.track i').style.background,v:v,li:li}});
  data.forEach(function(d){var p=d.v/tot*100;seg+='<circle cx="21" cy="21" r="15.915" stroke="'+d.c+'" stroke-dasharray="'+(p-1.2)+' '+(101.2-p)+'" stroke-dashoffset="'+(25-acc+0.6)+'"/>';acc+=p;d.li.querySelector('.name').insertAdjacentHTML('afterbegin','<i class="dot" style="background:'+d.c+'"></i>')});
  ld.querySelector('ul').insertAdjacentHTML('beforebegin','<svg class="donut" viewBox="0 0 42 42" role="img" aria-label="Share of languages across three projects"><circle cx="21" cy="21" r="15.915" style="stroke:var(--line)"/>'+seg+'<text x="21" y="22.5" text-anchor="middle" style="fill:currentColor;font:800 8px Sora,sans-serif">3</text><text x="21" y="27.5" text-anchor="middle" style="fill:var(--muted);font:400 2.6px JetBrains Mono,monospace">projects</text></svg>');
  var pal=document.getElementById('pal'),pin=document.getElementById('pin'),pl=document.getElementById('pl');
  var items=[['Home','#top'],['Education','#education'],['About','#about'],['Projects','#work'],['Certifications','#credentials'],['Contact','#contact'],['Resume','assets/Sarjina_Resume.pdf'],['Email me','mailto:shaikhsarjina083@gmail.com'],['LinkedIn','https://www.linkedin.com/in/sarjina-shaikh']];
  function draw(){var q=pin.value.toLowerCase();pl.innerHTML='';items.filter(function(i){return i[0].toLowerCase().indexOf(q)>-1}).forEach(function(i){var li=document.createElement('li'),a=document.createElement('a');a.href=i[1];a.textContent=i[0];if(i[1].charAt(0)!=='#'&&i[1].indexOf('http')===0){a.target='_blank';a.rel='noopener'}a.onclick=function(){pal.close()};li.appendChild(a);pl.appendChild(li)})}
  function openPal(){pin.value='';draw();pal.showModal();pin.focus()}
  document.getElementById('search').onclick=openPal;
  pin.oninput=draw;pin.onkeydown=function(e){if(e.key==='Enter'){var f=pl.querySelector('a');if(f)f.click()}};
  pal.onclick=function(e){if(e.target===pal)pal.close()};
  document.addEventListener('keydown',function(e){if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();openPal()}});
  var lb=document.getElementById('lb'),lbi=document.getElementById('lbimg');
  document.querySelectorAll('.thumb').forEach(function(t){t.onclick=function(){var im=t.querySelector('img');lbi.src=im.src;lbi.alt=im.alt;lb.showModal()}});
  lb.onclick=function(){lb.close()};
  var log=document.getElementById('log'),ask=document.getElementById('ask');
  qa.forEach(function(p){
    var b=document.createElement('button');b.type='button';b.textContent=p[0];
    b.onclick=function(){
      var q=document.createElement('div');q.className='q';q.textContent='> '+p[0];
      var a=document.createElement('div');a.className='a';a.textContent=p[1];
      log.appendChild(q);log.appendChild(a);log.scrollTop=log.scrollHeight;
    };
    ask.appendChild(b);
  });
})();

/* ===== motion: progress bar, scroll reveal, active nav ===== */
(function(){
  var prog=document.getElementById('prog');
  function onScroll(){var h=document.documentElement.scrollHeight-innerHeight;prog.style.transform='scaleX('+(h>0?Math.min(scrollY/h,1):0)+')'}
  addEventListener('scroll',onScroll,{passive:true});onScroll();

  var sel='.wrap > .prompt,.wrap > h2,.wrap > p,.wrap > .win,.contact,.mods > *,.projects > *,.certs > *,.donut'
    .split(',').map(function(s){return 'section:not(.hero) '+s}).join(',');
  var els=[].slice.call(document.querySelectorAll(sel));
  var io=('IntersectionObserver' in window)?new IntersectionObserver(function(es){
    es.forEach(function(e){
      if(!e.isIntersecting)return;
      var t=e.target;t.classList.add('in');io.unobserve(t);
      setTimeout(function(){t.style.transitionDelay='';t.classList.add('done')},1500);
    });
  },{threshold:.12,rootMargin:'0px 0px -6% 0px'}):null;
  els.forEach(function(el){
    el.classList.add('reveal');
    var par=el.parentNode.className||'';
    if(/\b(mods|projects|certs)\b/.test(par)){el.classList.add([].indexOf.call(el.parentNode.children,el)%2?'from-r':'from-l')}
    else if(el.matches('.wrap > .win,.contact')){var si=[].indexOf.call(document.querySelectorAll('main section'),el.closest('section'));el.classList.add(si%2?'from-r':'from-l')}
    var idx=[].indexOf.call(el.parentNode.children,el);
    el.style.transitionDelay=Math.min(idx%4,3)*80+'ms';
    if(io)io.observe(el);else el.classList.add('in');
  });

  var links={};
  [].forEach.call(document.querySelectorAll('.bar nav a'),function(a){links[a.getAttribute('href')]=a});
  if('IntersectionObserver' in window){
    var so=new IntersectionObserver(function(es){
      es.forEach(function(e){
        if(!e.isIntersecting)return;
        for(var k in links)links[k].classList.remove('active');
        var a=links['#'+e.target.id];if(a)a.classList.add('active');
      });
    },{rootMargin:'-45% 0px -50% 0px'});
    [].forEach.call(document.querySelectorAll('main section[id]'),function(s){so.observe(s)});
  }
})();

/* ===== project popups ===== */
(function(){
  var P={
    'Hotel Sunset Oasis':{k:'Frontend / Website · 2026',d:'A fully responsive luxury hotel website built around a clear visual hierarchy.',
      b:['Dedicated Home, Rooms, Features, Food Menu and Contact sections.','Interactive booking form for check-in and check-out dates, guests and room type, with real-time validation in vanilla JavaScript.','Scrollable Food Menu page with hover effects, CSS grid layouts and an auto-playing promotional video.','ScrollReveal.js animations for smooth, staggered content transitions.','Mobile-first design, tested across browsers on desktop, tablet and mobile.'],
      t:['HTML5','CSS3','JavaScript','ScrollReveal.js'],l:[['View live site','https://keen-starlight-18ee9c.netlify.app/']]},
    'Finance UI Dashboard':{k:'Frontend / Dashboard · 2026',d:'A clean, professional finance dashboard that shows financial metrics in an intuitive, visually clear layout.',
      b:['Built with React.js using reusable components for dashboard widgets, metric cards and data panels.','Responsive design with cross-browser compatibility.','Deployed on Vercel with reliable performance across screen sizes and browsers.'],
      t:['React.js','CSS3','JavaScript','Vercel'],l:[]},
    'ConversAI Chatbot':{k:'Frontend / Chat interface · 2025',d:'A responsive, visually engaging chat interface built with React.js and Tailwind CSS.',
      b:['Reusable, modular React components for the chat window, message bubbles and input controls.','UI state management for message history, giving a persistent conversation view within a session.','A typing indicator and smooth scrolling for clear, real-time feedback.'],
      t:['React.js','Tailwind CSS'],l:[]},
    'Fake News Detector':{k:'Machine learning / NLP',d:'Detects fake news by classifying article text with machine learning and natural language processing.',
      b:[],t:['Machine Learning','NLP'],l:[['View on GitHub','https://github.com/SarjinaWebWizDev/Fake-News-Detector']]}
  };
  var pj=document.getElementById('pj');
  function el(tag,cls,txt){var e=document.createElement(tag);if(cls)e.className=cls;if(txt)e.textContent=txt;return e}
  function open(card){
    var p=P[card.querySelector('h3').textContent];if(!p)return;
    document.getElementById('pjk').textContent=p.k;
    document.getElementById('pjt').textContent=card.querySelector('h3').textContent;
    document.getElementById('pjd').textContent=p.d;
    var ul=document.getElementById('pjl');ul.innerHTML='';p.b.forEach(function(x){ul.appendChild(el('li','',x))});
    var g=document.getElementById('pjg');g.innerHTML='';p.t.forEach(function(x){g.appendChild(el('span','',x))});
    var a=document.getElementById('pja');a.innerHTML='';
    p.l.forEach(function(l,i){var x=el('a','btn'+(i?'':' primary'),l[0]);x.href=l[1];x.target='_blank';x.rel='noopener';a.appendChild(x)});
    pj.showModal();
  }
  [].forEach.call(document.querySelectorAll('.proj'),function(c){
    c.tabIndex=0;c.setAttribute('role','button');
    c.insertAdjacentHTML('beforeend','<span class="more">View details</span>');
    c.onclick=function(e){if(e.target.closest('a'))return;open(c)};
    c.onkeydown=function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();open(c)}};
  });
  document.getElementById('pjx').onclick=function(){pj.close()};
  pj.onclick=function(e){if(e.target===pj)pj.close()};
})();
