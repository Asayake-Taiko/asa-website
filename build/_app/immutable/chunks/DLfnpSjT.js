var Mn=Array.isArray,tn=Array.prototype.indexOf,Yn=Array.from,Hn=Object.defineProperty,ht=Object.getOwnPropertyDescriptor,nn=Object.getOwnPropertyDescriptors,jn=Object.prototype,Bn=Array.prototype,rn=Object.getPrototypeOf;const Un=()=>{};function Vn(t){return t()}function en(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,Tt=4,V=8,it=16,D=32,G=64,Z=128,C=256,z=512,p=1024,R=2048,N=4096,q=8192,L=16384,ln=32768,mt=65536,Gn=1<<17,sn=1<<19,gt=1<<20,dt=Symbol("$state"),Kn=Symbol("legacy props"),$n=Symbol("");function At(t){return t===this.v}function an(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function xt(t){return!an(t,this.v)}function un(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function on(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function fn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function _n(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Zn(){throw new Error("https://svelte.dev/e/hydration_failed")}function zn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Jn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Wn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function cn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function vn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let tt=!1;function Xn(){tt=!0}const Qn=1,tr=2,nr=4,rr=8,er=16,lr=1,sr=2,ar=4,ur=8,or=16,ir=1,fr=2,pn="[",hn="[!",dn="]",Dt={},_r=Symbol();function ft(t,n){var r={f:0,v:t,reactions:null,equals:At,rv:0,wv:0};return r}function cr(t){return Rt(ft(t))}function En(t,n=!1){var e;const r=ft(t);return n||(r.equals=xt),tt&&i!==null&&i.l!==null&&((e=i.l).s??(e.s=[])).push(r),r}function vr(t,n=!1){return Rt(En(t,n))}function Rt(t){return u!==null&&!x&&u.f&y&&(g===null?On([t]):g.push(t)),t}function yn(t,n){return u!==null&&!x&&nt()&&u.f&(y|it)&&(g===null||!g.includes(t))&&vn(),wn(t,n)}function wn(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=Kt(),It(t,R),nt()&&f!==null&&f.f&p&&!(f.f&(D|G))&&(A===null?kn([t]):A.push(t))),n}function It(t,n){var r=t.reactions;if(r!==null)for(var e=nt(),l=r.length,s=0;s<l;s++){var a=r[s],o=a.f;o&R||!e&&a===f||(w(a,n),o&(p|C)&&(o&y?It(a,N):lt(a)))}}function St(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let O=!1;function pr(t){O=t}let T;function H(t){if(t===null)throw St(),Dt;return T=t}function hr(){return H(b(T))}function dr(t){if(O){if(b(T)!==null)throw St(),Dt;T=t}}function Er(t=1){if(O){for(var n=t,r=T;n--;)r=b(r);T=r}}function yr(){for(var t=0,n=T;;){if(n.nodeType===8){var r=n.data;if(r===dn){if(t===0)return n;t-=1}else(r===pn||r===hn)&&(t+=1)}var e=b(n);n.remove(),n=e}}var Et,Tn,Ot,kt;function wr(){if(Et===void 0){Et=window,Tn=document;var t=Element.prototype,n=Node.prototype;Ot=ht(n,"firstChild").get,kt=ht(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function st(t=""){return document.createTextNode(t)}function at(t){return Ot.call(t)}function b(t){return kt.call(t)}function Tr(t,n){if(!O)return at(t);var r=at(T);if(r===null)r=T.appendChild(st());else if(n&&r.nodeType!==3){var e=st();return r==null||r.before(e),H(e),e}return H(r),r}function mr(t,n){if(!O){var r=at(t);return r instanceof Comment&&r.data===""?b(r):r}return T}function gr(t,n=1,r=!1){let e=O?T:t;for(var l;n--;)l=e,e=b(e);if(!O)return e;var s=e==null?void 0:e.nodeType;if(r&&s!==3){var a=st();return e===null?l==null||l.after(a):e.before(a),H(a),a}return H(e),e}function Ar(t){t.textContent=""}function Ct(t){var n=y|R;f===null?n|=C:f.f|=gt;var r=u!==null&&u.f&y?u:null;const e={children:null,ctx:i,deps:null,equals:At,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??f};return r!==null&&(r.children??(r.children=[])).push(e),e}function xr(t){const n=Ct(t);return n.equals=xt,n}function Nt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&y?_t(e):k(e)}}}function mn(t){for(var n=t.parent;n!==null;){if(!(n.f&y))return n;n=n.parent}return null}function bt(t){var n,r=f;X(mn(t));try{Nt(t),n=Zt(t)}finally{X(r)}return n}function Pt(t){var n=bt(t),r=(S||t.f&C)&&t.deps!==null?N:p;w(t,r),t.equals(n)||(t.v=n,t.wv=Kt())}function _t(t){Nt(t),U(t,0),w(t,L),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Ft(t){f===null&&u===null&&fn(),u!==null&&u.f&C&&on(),vt&&un()}function gn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function M(t,n,r,e=!0){var l=(t&G)!==0,s=f,a={ctx:i,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|R,first:null,fn:n,last:null,next:null,parent:l?null:s,prev:null,teardown:null,transitions:null,wv:0};if(r){var o=P;try{yt(!0),et(a),a.f|=ln}catch(m){throw k(a),m}finally{yt(o)}}else n!==null&&lt(a);var _=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(gt|Z))===0;if(!_&&!l&&e&&(s!==null&&gn(a,s),u!==null&&u.f&y)){var c=u;(c.children??(c.children=[])).push(a)}return a}function Dr(t){const n=M(V,null,!1);return w(n,p),n.teardown=t,n}function Rr(t){Ft();var n=f!==null&&(f.f&D)!==0&&i!==null&&!i.m;if(n){var r=i;(r.e??(r.e=[])).push({fn:t,effect:f,reaction:u})}else{var e=qt(t);return e}}function Ir(t){return Ft(),ct(t)}function Sr(t){const n=M(G,t,!0);return(r={})=>new Promise(e=>{r.outro?Dn(n,()=>{k(n),e(void 0)}):(k(n),e(void 0))})}function qt(t){return M(Tt,t,!1)}function Or(t,n){var r=i,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=ct(()=>{t(),!e.ran&&(e.ran=!0,yn(r.l.r2,!0),qn(n))})}function kr(){var t=i;ct(()=>{if(Qt(t.l.r2)){for(var n of t.l.r1){var r=n.effect;r.f&p&&w(r,N),Y(r)&&et(r),n.ran=!1}t.l.r2.v=!1}})}function ct(t){return M(V,t,!0)}function Cr(t,n=[],r=Ct){const e=n.map(r);return An(()=>t(...e.map(Qt)))}function An(t,n=0){return M(V|it|n,t,!0)}function Nr(t,n=!0){return M(V|D,t,!0,n)}function Lt(t){var n=t.teardown;if(n!==null){const r=vt,e=u;wt(!0),W(null);try{n.call(null)}finally{wt(r),W(e)}}}function Mt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)_t(n[r])}}function Yt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;k(r,n),r=e}}function xn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&D||k(n),n=r}}function k(t,n=!0){var r=!1;if((n||t.f&sn)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var s=e===l?null:b(e);e.remove(),e=s}r=!0}Yt(t,n&&!r),Mt(t),U(t,0),w(t,L);var a=t.transitions;if(a!==null)for(const _ of a)_.stop();Lt(t);var o=t.parent;o!==null&&o.first!==null&&Ht(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Ht(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function Dn(t,n){var r=[];jt(t,r,!0),Rn(r,()=>{k(t),n&&n()})}function Rn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function jt(t,n,r){if(!(t.f&q)){if(t.f^=q,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var l=e.next,s=(e.f&mt)!==0||(e.f&D)!==0;jt(e,n,s?r:!1),e=l}}}function br(t){Bt(t,!0)}function Bt(t,n){if(t.f&q){t.f^=q,t.f&p||(t.f^=p),Y(t)&&(w(t,R),lt(t));for(var r=t.first;r!==null;){var e=r.next,l=(r.f&mt)!==0||(r.f&D)!==0;Bt(r,l?n:!1),r=e}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||n)&&s.in()}}let J=!1,ut=[];function Ut(){J=!1;const t=ut.slice();ut=[],en(t)}function Pr(t){J||(J=!0,queueMicrotask(Ut)),ut.push(t)}function In(){J&&Ut()}const Vt=0,Sn=1;let K=!1,$=Vt,j=!1,B=null,P=!1,vt=!1;function yt(t){P=t}function wt(t){vt=t}let I=[],F=0;let u=null,x=!1;function W(t){u=t}let f=null;function X(t){f=t}let g=null;function On(t){g=t}let h=null,E=0,A=null;function kn(t){A=t}let Gt=1,Q=0,S=!1,i=null;function Kt(){return++Gt}function nt(){return!tt||i!==null&&i.l===null}function Y(t){var c;var n=t.f;if(n&R)return!0;if(n&N){var r=t.deps,e=(n&C)!==0;if(r!==null){var l,s,a=(n&z)!==0,o=e&&f!==null&&!S,_=r.length;if(a||o){for(l=0;l<_;l++)s=r[l],(a||!((c=s==null?void 0:s.reactions)!=null&&c.includes(t)))&&(s.reactions??(s.reactions=[])).push(t);a&&(t.f^=z)}for(l=0;l<_;l++)if(s=r[l],Y(s)&&Pt(s),s.wv>t.wv)return!0}(!e||f!==null&&!S)&&w(t,p)}return!1}function Cn(t,n){for(var r=n;r!==null;){if(r.f&Z)try{r.fn(t);return}catch{r.f^=Z}r=r.parent}throw K=!1,t}function Nn(t){return(t.f&L)===0&&(t.parent===null||(t.parent.f&Z)===0)}function rt(t,n,r,e){if(K){if(r===null&&(K=!1),Nn(n))throw t;return}r!==null&&(K=!0);{Cn(t,n);return}}function $t(t,n,r=0){var e=t.reactions;if(e!==null)for(var l=0;l<e.length;l++){var s=e[l];s.f&y?$t(s,n,r+1):n===s&&(r===0?w(s,R):s.f&p&&w(s,N),lt(s))}}function Zt(t){var pt;var n=h,r=E,e=A,l=u,s=S,a=g,o=i,_=x,c=t.f;h=null,E=0,A=null,u=c&(D|G)?null:t,S=!P&&(c&C)!==0,g=null,i=t.ctx,x=!1,Q++;try{var m=(0,t.fn)(),v=t.deps;if(h!==null){var d;if(U(t,E),v!==null&&E>0)for(v.length=E+h.length,d=0;d<h.length;d++)v[E+d]=h[d];else t.deps=v=h;if(!S)for(d=E;d<v.length;d++)((pt=v[d]).reactions??(pt.reactions=[])).push(t)}else v!==null&&E<v.length&&(U(t,E),v.length=E);if(nt()&&A!==null&&!(t.f&(y|N|R)))for(d=0;d<A.length;d++)$t(A[d],t);return l!==null&&Q++,m}finally{h=n,E=r,A=e,u=l,S=s,g=a,i=o,x=_}}function bn(t,n){let r=n.reactions;if(r!==null){var e=tn.call(r,t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&n.f&y&&(h===null||!h.includes(n))&&(w(n,N),n.f&(C|z)||(n.f^=z),U(n,0))}function U(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)bn(t,r[e])}function et(t){var n=t.f;if(!(n&L)){w(t,p);var r=f,e=i;f=t;try{n&it?xn(t):Yt(t),Mt(t),Lt(t);var l=Zt(t);t.teardown=typeof l=="function"?l:null,t.wv=Gt;var s=t.deps,a}catch(o){rt(o,t,r,e||t.ctx)}finally{f=r}}}function zt(){if(F>1e3){F=0;try{_n()}catch(t){if(B!==null)rt(t,B,null);else throw t}}F++}function Jt(t){var n=t.length;if(n!==0){zt();var r=P;P=!0;try{for(var e=0;e<n;e++){var l=t[e];l.f&p||(l.f^=p);var s=[];Wt(l,s),Pn(s)}}finally{P=r}}}function Pn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(L|q)))try{Y(e)&&(et(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Ht(e):e.fn=null))}catch(l){rt(l,e,null,e.ctx)}}}function Fn(){if(j=!1,F>1001)return;const t=I;I=[],Jt(t),j||(F=0,B=null)}function lt(t){$===Vt&&(j||(j=!0,queueMicrotask(Fn))),B=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(G|D)){if(!(r&p))return;n.f^=p}}I.push(n)}function Wt(t,n){var r=t.first,e=[];t:for(;r!==null;){var l=r.f,s=(l&D)!==0,a=s&&(l&p)!==0,o=r.next;if(!a&&!(l&q))if(l&V){if(s)r.f^=p;else try{Y(r)&&et(r)}catch(v){rt(v,r,null,r.ctx)}var _=r.first;if(_!==null){r=_;continue}}else l&Tt&&e.push(r);if(o===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var c=v.next;if(c!==null){r=c;continue t}v=v.parent}}r=o}for(var m=0;m<e.length;m++)_=e[m],n.push(_),Wt(_,n)}function Xt(t){var n=$,r=I;try{zt();const l=[];$=Sn,I=l,j=!1,Jt(r);var e=t==null?void 0:t();return In(),(I.length>0||l.length>0)&&Xt(),F=0,B=null,e}finally{$=n,I=r}}async function Fr(){await Promise.resolve(),Xt()}function Qt(t){var m;var n=t.f,r=(n&y)!==0;if(r&&n&L){var e=bt(t);return _t(t),e}if(u!==null&&!x){g!==null&&g.includes(t)&&cn();var l=u.deps;t.rv<Q&&(t.rv=Q,h===null&&l!==null&&l[E]===t?E++:h===null?h=[t]:h.push(t))}else if(r&&t.deps===null)for(var s=t,a=s.parent,o=s;a!==null;)if(a.f&y){var _=a;o=_,a=_.parent}else{var c=a;(m=c.deriveds)!=null&&m.includes(o)||(c.deriveds??(c.deriveds=[])).push(o);break}return r&&(s=t,Y(s)&&Pt(s)),t.v}function qn(t){var n=x;try{return x=!0,t()}finally{x=n}}const Ln=-7169;function w(t,n){t.f=t.f&Ln|n}function qr(t,n=!1,r){i={p:i,c:null,e:null,m:!1,s:t,x:null,l:null},tt&&!n&&(i.l={s:null,u:null,r1:[],r2:ft(!1)})}function Lr(t){const n=i;if(n!==null){const a=n.e;if(a!==null){var r=f,e=u;n.e=null;try{for(var l=0;l<a.length;l++){var s=a[l];X(s.effect),W(s.reaction),qt(s.fn)}}finally{X(r),W(e)}}i=n.p,n.m=!0}return{}}function Mr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(dt in t)ot(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&dt in r&&ot(r)}}}function ot(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{ot(t[e],n)}catch{}const r=rn(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=nn(r);for(let l in e){const s=e[l].get;if(s)try{s.call(t)}catch{}}}}}export{Et as $,dn as A,St as B,Zn as C,Ar as D,Yn as E,Sr as F,st as G,pn as H,Nr as I,O as J,f as K,An as L,nr as M,hn as N,yr as O,q as P,br as Q,Dn as R,Pr as S,Qn as T,wn as U,tr as V,jt as W,Rn as X,k as Y,xr as Z,u as _,kr as a,rr as a0,En as a1,ft as a2,Mn as a3,er as a4,rn as a5,$n as a6,nn as a7,Ir as a8,en as a9,ar as aA,xt as aB,lr as aC,ur as aD,or as aE,ir as aF,fr as aG,Xt as aH,Fr as aI,cr as aJ,an as aK,Vn as aa,Mr as ab,Ct as ac,Xn as ad,W as ae,X as af,Dr as ag,Hn as ah,sn as ai,mt as aj,Un as ak,dt as al,jn as am,Bn as an,Jn as ao,_r as ap,ht as aq,Wn as ar,qt as as,ct as at,Gn as au,D as av,G as aw,sr as ax,Kn as ay,zn as az,Lr as b,gr as c,Tr as d,i as e,mr as f,Qt as g,tt as h,qn as i,Tn as j,wr as k,Or as l,vr as m,Er as n,at as o,qr as p,b as q,dr as r,yn as s,Cr as t,Rr as u,Dt as v,pr as w,H as x,hr as y,T as z};
