import{G as ae,L as ne,M as Z,J as N,x as H,y as se,g as X,N as fe,O as m,w as O,z as M,P as S,Q as F,I as $,R as ie,E as b,S as le,K as z,T as k,U as J,V as Y,W as te,D as ue,X as ve,Y as _e,o as oe,Z as de,A as ce,_ as he,a0 as pe,a1 as Ee,a2 as P,a3 as Ae,a4 as Te,q as ge,a5 as Ie,a6 as Ne,a7 as we}from"./DLfnpSjT.js";function Se(a,e){return e}function xe(a,e,r,f){for(var l=[],u=e.length,v=0;v<u;v++)te(e[v].e,l,!0);var E=u>0&&l.length===0&&r!==null;if(E){var d=r.parentNode;ue(d),d.append(r),f.clear(),w(a,e[0].prev,e[u-1].next)}ve(l,()=>{for(var A=0;A<u;A++){var o=e[A];E||(f.delete(o.k),w(a,o.prev,o.next)),_e(o.e,!E)}})}function De(a,e,r,f,l,u=null){var v=a,E={flags:e,items:new Map,first:null},d=(e&Z)!==0;if(d){var A=a;v=N?H(oe(A)):A.appendChild(ae())}N&&se();var o=null,g=!1,x=de(()=>{var n=r();return Ae(n)?n:n==null?[]:b(n)});ne(()=>{var n=X(x),i=n.length;if(g&&i===0)return;g=i===0;let _=!1;if(N){var y=v.data===fe;y!==(i===0)&&(v=m(),H(v),O(!1),_=!0)}if(N){for(var c=null,h,p=0;p<i;p++){if(M.nodeType===8&&M.data===ce){v=M,_=!0,O(!1);break}var T=n[p],s=f(T,p);h=j(M,E,c,null,T,s,p,l,e,r),E.items.set(s,h),c=h}i>0&&H(m())}if(!N){var t=he;ye(n,E,v,l,e,(t.f&S)!==0,f,r)}u!==null&&(i===0?o?F(o):o=$(()=>u(v)):o!==null&&ie(o,()=>{o=null})),_&&O(!0),X(x)}),N&&(v=M)}function ye(a,e,r,f,l,u,v,E){var V,B,G,K;var d=(l&pe)!==0,A=(l&(k|Y))!==0,o=a.length,g=e.items,x=e.first,n=x,i,_=null,y,c=[],h=[],p,T,s,t;if(d)for(t=0;t<o;t+=1)p=a[t],T=v(p,t),s=g.get(T),s!==void 0&&((V=s.a)==null||V.measure(),(y??(y=new Set)).add(s));for(t=0;t<o;t+=1){if(p=a[t],T=v(p,t),s=g.get(T),s===void 0){var ee=n?n.e.nodes_start:r;_=j(ee,e,_,_===null?e.first:_.next,p,T,t,f,l,E),g.set(T,_),c=[],h=[],n=_.next;continue}if(A&&Ce(s,p,t,l),s.e.f&S&&(F(s.e),d&&((B=s.a)==null||B.unfix(),(y??(y=new Set)).delete(s))),s!==n){if(i!==void 0&&i.has(s)){if(c.length<h.length){var R=h[0],I;_=R.prev;var q=c[0],D=c[c.length-1];for(I=0;I<c.length;I+=1)Q(c[I],R,r);for(I=0;I<h.length;I+=1)i.delete(h[I]);w(e,q.prev,D.next),w(e,_,q),w(e,D,R),n=R,_=D,t-=1,c=[],h=[]}else i.delete(s),Q(s,n,r),w(e,s.prev,s.next),w(e,s,_===null?e.first:_.next),w(e,_,s),_=s;continue}for(c=[],h=[];n!==null&&n.k!==T;)(u||!(n.e.f&S))&&(i??(i=new Set)).add(n),h.push(n),n=n.next;if(n===null)continue;s=n}c.push(s),_=s,n=s.next}if(n!==null||i!==void 0){for(var C=i===void 0?[]:b(i);n!==null;)(u||!(n.e.f&S))&&C.push(n),n=n.next;var L=C.length;if(L>0){var re=l&Z&&o===0?r:null;if(d){for(t=0;t<L;t+=1)(G=C[t].a)==null||G.measure();for(t=0;t<L;t+=1)(K=C[t].a)==null||K.fix()}xe(e,C,re,g)}}d&&le(()=>{var U;if(y!==void 0)for(s of y)(U=s.a)==null||U.apply()}),z.first=e.first&&e.first.e,z.last=_&&_.e}function Ce(a,e,r,f){f&k&&J(a.v,e),f&Y?J(a.i,r):a.i=r}function j(a,e,r,f,l,u,v,E,d,A){var o=(d&k)!==0,g=(d&Te)===0,x=o?g?Ee(l):P(l):l,n=d&Y?P(v):v,i={i:n,v:x,k:u,a:null,e:null,prev:r,next:f};try{return i.e=$(()=>E(a,x,n,A),N),i.e.prev=r&&r.e,i.e.next=f&&f.e,r===null?e.first=i:(r.next=i,r.e.next=i.e),f!==null&&(f.prev=i,f.e.prev=i.e),i}finally{}}function Q(a,e,r){for(var f=a.next?a.next.e.nodes_start:r,l=e?e.e.nodes_start:r,u=a.e.nodes_start;u!==f;){var v=ge(u);l.before(u),u=v}}function w(a,e,r){e===null?a.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}function Le(a,e,r,f){var l=a.__attributes??(a.__attributes={});N&&(l[e]=a.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&a.nodeName==="LINK")||l[e]!==(l[e]=r)&&(e==="style"&&"__styles"in a&&(a.__styles={}),e==="loading"&&(a[Ne]=r),r==null?a.removeAttribute(e):typeof r!="string"&&Me(a).includes(e)?a[e]=r:a.setAttribute(e,r))}var W=new Map;function Me(a){var e=W.get(a.nodeName);if(e)return e;W.set(a.nodeName,e=[]);for(var r,f=a,l=Element.prototype;l!==f;){r=we(f);for(var u in r)r[u].set&&e.push(u);f=Ie(f)}return e}export{De as e,Se as i,Le as s};
