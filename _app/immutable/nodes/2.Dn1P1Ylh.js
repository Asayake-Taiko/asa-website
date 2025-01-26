import{a as f,t as k}from"../chunks/CoVgiOjo.js";import{i as B}from"../chunks/BYruQwfF.js";import{J,K as a,g as e,L,M as R,N as U,O as E,P as d,$ as K,Q as N,R as Q,S as c,T as w,U as v}from"../chunks/DDQJmtA0.js";import{s as F}from"../chunks/VAG_qORe.js";import{e as z,i as A}from"../chunks/CWWrY3P3.js";import{e as _,h as G}from"../chunks/B_n-mM0v.js";import{H as Y,s as T}from"../chunks/BTUijkZk.js";import{b as Z}from"../chunks/W9diH3vW.js";import{o as ee}from"../chunks/B5xpo156.js";import{b as W}from"../chunks/DxI5obpT.js";var te=k('<link rel="preload" as="image">'),ie=k('<!> <meta name="description" content="Asayake Taiko | University of California San Diego">',1),ae=k('<div><div class="w-screen h-screen relative bg-cover lg:bg-center transition-[background-position] duration-[5s] lg:duration-0"></div></div>'),se=k('<main class="main-wrapper h-screen bg-asa-red"><div class="absolute flex w-screen h-screen overflow-x-hidden"></div> <!> <div class="absolute h-full w-full top-0 backdrop-brightness-75 duration-500"><div class="main absolute text-white leading-tight z-0 svelte-1tbsi0u"><div class="main-title svelte-1tbsi0u"><div class="name font-bold svelte-1tbsi0u">Asayake Taiko</div> <div class="school text-gray-200 svelte-1tbsi0u">University of California, San Diego</div></div> <div class="mission svelte-1tbsi0u">Our mission statement is to increase Japanese cultural awareness both within and outside of the UCSD community through the art of taiko.</div></div></div> <div class="pagination absolute hidden lg:flex items-center justify-center z-10 svelte-1tbsi0u"><button data-name="left" class="transition-colors duration-200 backdrop-blur-sm bg-white bg-opacity-10 hover:bg-asa-red svelte-1tbsi0u"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-1tbsi0u"><path d="M12.6667 3.33325L6 9.99992L12.6667 16.6666" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path></svg></button> <button data-name="right" class="transition-colors duration-200 backdrop-blur-sm bg-white bg-opacity-10 hover:bg-asa-red svelte-1tbsi0u"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-1tbsi0u"><path d="M7.33333 3.33325L14 9.99992L7.33333 16.6666" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path></svg></button> <div class="numbering text-gray-100 font-light svelte-1tbsi0u"><span class="inline-block text-center svelte-1tbsi0u"> </span> <span class="inline-block svelte-1tbsi0u"></span></div></div></main>');function he(j,D){J(D,!1);const u=d();let b=d(),m=d(-1),t=d(0),h=d(1);const n=14;let r=d("smooth"),$=setInterval(()=>{a(m,e(t)),a(t,(e(t)+1)%n),a(h,e(t)+1)},5e3);ee(()=>{var i;document.querySelectorAll("[data-id]").forEach((s,o)=>{s.children[0].style.backgroundImage=`url('${e(u)[o]}')`,s.children[0].style.backgroundPositionX="0px"}),(i=document.querySelector(`[data-id="${e(t)+1}"]`))==null||i.scrollIntoView({behavior:e(r),block:"nearest",inline:"center"})});const I=i=>{clearInterval($),i.currentTarget.dataset.name==="left"?(e(t)===0&&a(r,"auto"),a(t,e(t)===0?n-1:e(t)-1)):(e(t)===n-1&&a(r,"auto"),a(t,(e(t)+1)%n)),$=setInterval(()=>{a(m,e(t)),a(t,(e(t)+1)%n),a(h,e(t)+1)},5e3)},H=()=>{const i=document.querySelector(`[data-id="${e(t)+1}"]`);window.innerWidth>1023&&(i.children[0].style.backgroundPositionX="0px"),i.scrollIntoView({block:"nearest",inline:"center"})};L(()=>W,()=>{a(u,[...Array(n).keys()].map(i=>`${W}/bg/webp/${i+1}.webp`))}),L(()=>(e(b),e(m),e(t),e(h),e(r)),()=>{if(e(b)){const i=document.querySelector(`[data-id="${e(m)+1}"]`),s=document.querySelector(`[data-id="${e(t)+1}"]`),o=document.querySelector(`[data-id="${e(h)+1}"]`);i&&(i.children[0].style.backgroundPositionX="0px"),s.children[0].style.backgroundPositionX="0px",o&&(o.children[0].style.backgroundPositionX="0px");const l=window.innerHeight>window.innerWidth;e(t)===0&&a(r,"auto"),s.scrollIntoView({behavior:`${e(r)}`,block:"nearest",inline:"center"});const g=window.innerWidth;l&&g<=1023&&(s.children[0].style.backgroundPositionX=`-${Math.min(550,g)}px`)}a(r,"smooth")}),R(),B();var p=se();_("resize",K,H),G(i=>{var s=ie(),o=N(s);z(o,1,()=>e(u),A,(l,g)=>{var C=te();U(()=>T(C,"href",e(g))),f(l,C)}),Q(2),f(i,s)});var y=w(p);z(y,5,()=>e(u),A,(i,s,o)=>{var l=ae();T(l,"data-id",o+1),f(i,l)}),v(y);var S=c(y,2);Y(S,{page:"home"});var P=c(S,4),q=w(P),M=c(q,2),X=c(M,2),x=w(X),O=w(x,!0);v(x);var V=c(x,2);V.textContent=`/ ${n}`,v(X),v(P),v(p),Z(p,i=>a(b,i),()=>e(b)),U(()=>F(O,e(t)+1)),_("click",q,I),_("click",M,I),f(j,p),E()}export{he as component};
