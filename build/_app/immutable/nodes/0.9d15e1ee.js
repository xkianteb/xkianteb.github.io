import{C as se,S as Q,i as W,s as q,k as m,q as A,a as g,l as v,m as b,r as S,h as f,c as y,n as p,b as w,D as u,E as be,F as U,G as ke,u as ge,H as le,I as ye,e as F,y as re,J as Ee,z as ne,A as oe,g as R,d as D,B as ce,K as $e,v as we,f as Ae,L as he,M as pe,N as me,O as ve,P as Se,Q as He,R as Ne}from"../chunks/index.99c1b361.js";import{p as Pe}from"../chunks/stores.446a2e20.js";const Ie=!0,Le=async({url:i})=>({pathname:i.pathname}),Ge=Object.freeze(Object.defineProperty({__proto__:null,load:Le,prerender:Ie},Symbol.toStringTag,{value:"Module"}));function Me(i){const e=i-1;return e*e*e+1}function ie(i,{delay:e=0,duration:a=400,easing:n=Me,x:s=0,y:l=0,opacity:t=0}={}){const r=getComputedStyle(i),c=+r.opacity,$=r.transform==="none"?"":r.transform,d=c*(1-t),[k,E]=se(s),[h,o]=se(l);return{delay:e,duration:a,easing:n,css:(_,P)=>`
			transform: ${$} translate(${(1-_)*k}${E}, ${(1-_)*h}${o});
			opacity: ${c-d*P}`}}function ue(i,e,a){const n=i.slice();return n[3]=e[a],n}function fe(i){let e,a,n,s,l;return{c(){e=m("span"),a=m("span"),n=A("—"),s=g(),l=A(i[1]),this.h()},l(t){e=v(t,"SPAN",{class:!0});var r=b(e);a=v(r,"SPAN",{class:!0});var c=b(a);n=S(c,"—"),c.forEach(f),s=y(r),l=S(r,i[1]),r.forEach(f),this.h()},h(){p(a,"class","text-neutral-400 svelte-bgdsr9"),p(e,"class","page-title svelte-bgdsr9")},m(t,r){w(t,e,r),u(e,a),u(a,n),u(e,s),u(e,l)},p(t,r){r&2&&ge(l,t[1])},d(t){t&&f(e)}}}function _e(i,e){let a,n=e[3].name+"",s,l;return{key:i,first:null,c(){a=m("a"),s=A(n),l=g(),this.h()},l(t){a=v(t,"A",{href:!0,class:!0});var r=b(a);s=S(r,n),l=y(r),r.forEach(f),this.h()},h(){p(a,"href",e[3].href),p(a,"class","hover:text-black transition-colors svelte-bgdsr9"),le(a,"text-black",e[0].url.pathname===e[3].href),this.first=a},m(t,r){w(t,a,r),u(a,s),u(a,l)},p(t,r){e=t,r&5&&le(a,"text-black",e[0].url.pathname===e[3].href)},d(t){t&&f(a)}}}function Re(i){let e,a,n,s,l,t,r,c=[],$=new Map,d=i[1]&&fe(i),k=i[2];const E=h=>h[3];for(let h=0;h<k.length;h+=1){let o=ue(i,k,h),_=E(o);$.set(_,c[h]=_e(_,o))}return{c(){e=m("header"),a=m("h1"),n=m("a"),s=A("Kianté Brantley"),l=g(),d&&d.c(),t=g(),r=m("nav");for(let h=0;h<c.length;h+=1)c[h].c();this.h()},l(h){e=v(h,"HEADER",{class:!0,"data-sveltekit-noscroll":!0,"data-sveltekit-preload-code":!0});var o=b(e);a=v(o,"H1",{class:!0});var _=b(a);n=v(_,"A",{href:!0});var P=b(n);s=S(P,"Kianté Brantley"),P.forEach(f),l=y(_),d&&d.l(_),_.forEach(f),t=y(o),r=v(o,"NAV",{class:!0});var H=b(r);for(let L=0;L<c.length;L+=1)c[L].l(H);H.forEach(f),o.forEach(f),this.h()},h(){p(n,"href","/"),p(a,"class","font-bold text-black text-2xl mb-6"),p(r,"class","svelte-bgdsr9"),p(e,"class","layout-md flex justify-between items-start"),p(e,"data-sveltekit-noscroll",""),p(e,"data-sveltekit-preload-code","eager")},m(h,o){w(h,e,o),u(e,a),u(a,n),u(n,s),u(a,l),d&&d.m(a,null),u(e,t),u(e,r);for(let _=0;_<c.length;_+=1)c[_]&&c[_].m(r,null)},p(h,[o]){h[1]?d?d.p(h,o):(d=fe(h),d.c(),d.m(a,null)):d&&(d.d(1),d=null),o&5&&(k=h[2],c=be(c,o,E,1,h,k,$,r,ye,_e,null,ue))},i:U,o:U,d(h){h&&f(e),d&&d.d();for(let o=0;o<c.length;o+=1)c[o].d()}}}function De(i,e,a){let n;ke(i,Pe,t=>a(0,n=t));const s=[{name:"publications",href:"/publications"},{name:"cv",href:"/resume"}];let l=null;return i.$$.update=()=>{if(i.$$.dirty&1){const t=s.find(({href:r})=>r===n.url.pathname);t?a(1,l=t.name.charAt(0).toUpperCase()+t.name.slice(1)):a(1,l=null)}},[n,l,s]}class Te extends Q{constructor(e){super(),W(this,e,De,Re,q,{})}}function je(i){let e,a,n,s,l,t,r,c,$,d,k,E,h,o,_,P,H,L,B,N,T,G,K,x,z,M,J;return{c(){e=m("footer"),a=m("div"),n=m("span"),s=A("Twitter"),l=g(),t=m("hr"),r=g(),c=m("a"),$=A("@xkianteb"),d=g(),k=m("div"),E=m("span"),h=A("GitHub"),o=g(),_=m("hr"),P=g(),H=m("a"),L=A("@xkianteb"),B=g(),N=m("div"),T=m("span"),G=A("Email"),K=g(),x=m("hr"),z=g(),M=m("a"),J=A("kdbrantley@g.harvard.edu"),this.h()},l(V){e=v(V,"FOOTER",{class:!0});var I=b(e);a=v(I,"DIV",{class:!0});var j=b(a);n=v(j,"SPAN",{class:!0});var X=b(n);s=S(X,"Twitter"),X.forEach(f),l=y(j),t=v(j,"HR",{class:!0}),r=y(j),c=v(j,"A",{class:!0,href:!0});var Y=b(c);$=S(Y,"@xkianteb"),Y.forEach(f),j.forEach(f),d=y(I),k=v(I,"DIV",{class:!0});var C=b(k);E=v(C,"SPAN",{class:!0});var Z=b(E);h=S(Z,"GitHub"),Z.forEach(f),o=y(C),_=v(C,"HR",{class:!0}),P=y(C),H=v(C,"A",{class:!0,href:!0});var ee=b(H);L=S(ee,"@xkianteb"),ee.forEach(f),C.forEach(f),B=y(I),N=v(I,"DIV",{class:!0});var O=b(N);T=v(O,"SPAN",{class:!0});var te=b(T);G=S(te,"Email"),te.forEach(f),K=y(O),x=v(O,"HR",{class:!0}),z=y(O),M=v(O,"A",{class:!0,href:!0});var ae=b(M);J=S(ae,"kdbrantley@g.harvard.edu"),ae.forEach(f),O.forEach(f),I.forEach(f),this.h()},h(){p(n,"class","svelte-1t3hv3r"),p(t,"class","svelte-1t3hv3r"),p(c,"class","link svelte-1t3hv3r"),p(c,"href","https://twitter.com/xkianteb"),p(a,"class","row svelte-1t3hv3r"),p(E,"class","svelte-1t3hv3r"),p(_,"class","svelte-1t3hv3r"),p(H,"class","link svelte-1t3hv3r"),p(H,"href","https://github.com/xkianteb"),p(k,"class","row svelte-1t3hv3r"),p(T,"class","svelte-1t3hv3r"),p(x,"class","svelte-1t3hv3r"),p(M,"class","link svelte-1t3hv3r"),p(M,"href","mailto:kdbrantley@g.harvard.edu"),p(N,"class","row svelte-1t3hv3r"),p(e,"class","layout-md mt-20 text-lg flex flex-col")},m(V,I){w(V,e,I),u(e,a),u(a,n),u(n,s),u(a,l),u(a,t),u(a,r),u(a,c),u(c,$),u(e,d),u(e,k),u(k,E),u(E,h),u(k,o),u(k,_),u(k,P),u(k,H),u(H,L),u(e,B),u(e,N),u(N,T),u(T,G),u(N,K),u(N,x),u(N,z),u(N,M),u(M,J)},p:U,i:U,o:U,d(V){V&&f(e)}}}class Ce extends Q{constructor(e){super(),W(this,e,null,je,q,{})}}function Oe(i){let e,a,n,s,l;return{c(){e=m("script"),n=g(),s=m("script"),l=A(`window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "UA-156644599-1");`),this.h()},l(t){e=v(t,"SCRIPT",{src:!0});var r=b(e);r.forEach(f),n=y(t),s=v(t,"SCRIPT",{});var c=b(s);l=S(c,`window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "UA-156644599-1");`),c.forEach(f),this.h()},h(){e.async=!0,$e(e.src,a="https://www.googletagmanager.com/gtag/js?id=UA-156644599-1")||p(e,"src",a)},m(t,r){w(t,e,r),w(t,n,r),w(t,s,r),u(s,l)},d(t){t&&f(e),t&&f(n),t&&f(s)}}}function Ue(i){let e=i[0].pathname,a,n,s=de(i);return{c(){s.c(),a=F()},l(l){s.l(l),a=F()},m(l,t){s.m(l,t),w(l,a,t),n=!0},p(l,t){t&1&&q(e,e=l[0].pathname)?(we(),D(s,1,1,U),Ae(),s=de(l),s.c(),R(s,1),s.m(a.parentNode,a)):s.p(l,t)},i(l){n||(R(s),n=!0)},o(l){D(s),n=!1},d(l){l&&f(a),s.d(l)}}}function Ve(i){let e,a;const n=i[4].default,s=he(n,i,i[3],null);return{c(){e=m("main"),s&&s.c()},l(l){e=v(l,"MAIN",{});var t=b(e);s&&s.l(t),t.forEach(f)},m(l,t){w(l,e,t),s&&s.m(e,null),a=!0},p(l,t){s&&s.p&&(!a||t&8)&&pe(s,n,l,l[3],a?ve(n,l[3],t,null):me(l[3]),null)},i(l){a||(R(s,l),a=!0)},o(l){D(s,l),a=!1},d(l){l&&f(e),s&&s.d(l)}}}function de(i){let e,a,n,s;const l=i[4].default,t=he(l,i,i[3],null);return{c(){e=m("main"),t&&t.c()},l(r){e=v(r,"MAIN",{});var c=b(e);t&&t.l(c),c.forEach(f)},m(r,c){w(r,e,c),t&&t.m(e,null),s=!0},p(r,c){t&&t.p&&(!s||c&8)&&pe(t,l,r,r[3],s?ve(l,r[3],c,null):me(r[3]),null)},i(r){s||(R(t,r),Se(()=>{s&&(n&&n.end(1),a=He(e,ie,{x:-10,duration:350,delay:350}),a.start())}),s=!0)},o(r){D(t,r),a&&a.invalidate(),n=Ne(e,ie,{y:5,duration:350}),s=!1},d(r){r&&f(e),t&&t.d(r),r&&n&&n.end()}}}function xe(i){let e,a,n,s,l,t,r,c,$,d=Oe();n=new Te({});const k=[Ve,Ue],E=[];function h(o,_){return o[1]||o[2]?0:1}return l=h(i),t=E[l]=k[l](i),c=new Ce({}),{c(){d&&d.c(),e=F(),a=g(),re(n.$$.fragment),s=g(),t.c(),r=g(),re(c.$$.fragment)},l(o){const _=Ee("svelte-1xw0bo2",document.head);d&&d.l(_),e=F(),_.forEach(f),a=y(o),ne(n.$$.fragment,o),s=y(o),t.l(o),r=y(o),ne(c.$$.fragment,o)},m(o,_){d&&d.m(document.head,null),u(document.head,e),w(o,a,_),oe(n,o,_),w(o,s,_),E[l].m(o,_),w(o,r,_),oe(c,o,_),$=!0},p(o,[_]){t.p(o,_)},i(o){$||(R(n.$$.fragment,o),R(t),R(c.$$.fragment,o),$=!0)},o(o){D(n.$$.fragment,o),D(t),D(c.$$.fragment,o),$=!1},d(o){d&&d.d(o),f(e),o&&f(a),ce(n,o),o&&f(s),E[l].d(o),o&&f(r),ce(c,o)}}}function Fe(i,e,a){let{$$slots:n={},$$scope:s}=e,{data:l}=e;const t=/Android|iPhone/i.test(navigator.userAgent),r=matchMedia("(prefers-reduced-motion: reduce)").matches;return i.$$set=c=>{"data"in c&&a(0,l=c.data),"$$scope"in c&&a(3,s=c.$$scope)},[l,t,r,s,n]}class Ke extends Q{constructor(e){super(),W(this,e,Fe,xe,q,{data:0})}}export{Ke as component,Ge as universal};
