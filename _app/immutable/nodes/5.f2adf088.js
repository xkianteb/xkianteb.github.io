import{S as J,i as L,s as M,y as z,a as G,k as h,q as _,z as K,c as I,l as $,m as g,r as S,h as n,n as c,A as N,b as w,E as r,G as V,g as Y,d as D,B as H}from"../chunks/index.706e51a0.js";import{S as F}from"../chunks/Seo.290ce5cc.js";import{P as Q}from"../chunks/PublicationList.848289e2.js";import{b as R}from"../chunks/bibtex-parse.501ecef9.js";const U=async({fetch:m})=>({bibtex:await(await m("parse-bibtex-pubs?file=bibfile")).text()}),st=Object.freeze(Object.defineProperty({__proto__:null,load:U},Symbol.toStringTag,{value:"Module"}));function W(m){let a,f,s,e,v,o,E,O,u,P,k,y,i,d,B,C,b,x;return a=new F({props:{title:"Kianté Brantley – Publications",description:"Academic Publications"}}),b=new Q({props:{data:m[1],dataOrder:m[0]}}),{c(){z(a.$$.fragment),f=G(),s=h("section"),e=h("div"),v=_("You can view my full list of publications at ["),o=h("a"),E=_("Google Scholar"),O=_(" or "),u=h("a"),P=_("Semantic Scholar"),k=_("]."),y=G(),i=h("section"),d=h("h2"),B=_("Publications:"),C=G(),z(b.$$.fragment),this.h()},l(t){K(a.$$.fragment,t),f=I(t),s=$(t,"SECTION",{class:!0});var l=g(s);e=$(l,"DIV",{class:!0});var p=g(e);v=S(p,"You can view my full list of publications at ["),o=$(p,"A",{class:!0,href:!0});var T=g(o);E=S(T,"Google Scholar"),T.forEach(n),O=S(p," or "),u=$(p,"A",{class:!0,href:!0});var j=g(u);P=S(j,"Semantic Scholar"),j.forEach(n),k=S(p,"]."),p.forEach(n),l.forEach(n),y=I(t),i=$(t,"SECTION",{class:!0});var A=g(i);d=$(A,"H2",{class:!0});var q=g(d);B=S(q,"Publications:"),q.forEach(n),C=I(A),K(b.$$.fragment,A),A.forEach(n),this.h()},h(){c(o,"class","anormal-font link"),c(o,"href","https://scholar.google.com/citations?user=8S5AOggAAAAJ&hl=en"),c(u,"class","anormal-font link"),c(u,"href","https://www.semanticscholar.org/author/Kianté-Brantley/11963742"),c(e,"class","anormal-font-bold mb-8"),c(s,"class","layout-md mb-4"),c(d,"class","heading2"),c(i,"class","layout-md")},m(t,l){N(a,t,l),w(t,f,l),w(t,s,l),r(s,e),r(e,v),r(e,o),r(o,E),r(e,O),r(e,u),r(u,P),r(e,k),w(t,y,l),w(t,i,l),r(i,d),r(d,B),r(i,C),N(b,i,null),x=!0},p:V,i(t){x||(Y(a.$$.fragment,t),Y(b.$$.fragment,t),x=!0)},o(t){D(a.$$.fragment,t),D(b.$$.fragment,t),x=!1},d(t){H(a,t),t&&n(f),t&&n(s),t&&n(y),t&&n(i),H(b)}}}function X(m,a,f){let{data:s}=a;const e=R.entries(s.bibtex),v="year";return m.$$set=o=>{"data"in o&&f(2,s=o.data)},[v,e,s]}class rt extends J{constructor(a){super(),L(this,a,X,W,M,{data:2,dataOrder:0})}get dataOrder(){return this.$$.ctx[0]}}export{rt as component,st as universal};
