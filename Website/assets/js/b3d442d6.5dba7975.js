"use strict";(self.webpackChunkcircuits=self.webpackChunkcircuits||[]).push([[14282],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>h});var a=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=a.createContext({}),p=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=p(t.components);return a.createElement(l.Provider,{value:e},t.children)},d="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,l=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),d=p(n),g=i,h=d["".concat(l,".").concat(g)]||d[g]||c[g]||r;return n?a.createElement(h,o(o({ref:e},s),{},{components:n})):a.createElement(h,o({ref:e},s))}));function h(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,o=new Array(r);o[0]=g;var u={};for(var l in e)hasOwnProperty.call(e,l)&&(u[l]=e[l]);u.originalType=t,u[d]="string"==typeof t?t:i,o[1]=u;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8240:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>u,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={sidebar_position:565,tags:["._tags"]},o="String Format",u={unversionedId:"documentation/chips/77afc9dd-baa9-4312-b8b8-7ef479c840e6",id:"documentation/chips/77afc9dd-baa9-4312-b8b8-7ef479c840e6",title:"String Format",description:'Use this chip to combine multiple strings together into a single string output. The "Format" input is part of final string output and can include other string inputs by using this syntax: {input pin  starting at 0}. For example, a "Format" input with a default value of \u201cHello, !\u201d with a single additional input pin with the value "World" is fully output as "Hello, World!". If you had another input pin you would use {1} to denote the 2nd pin. You can add more string inputs by configuring the chip and pressing "Add Input".',source:"@site/docs/documentation/chips/77afc9dd-baa9-4312-b8b8-7ef479c840e6.md",sourceDirName:"documentation/chips",slug:"/documentation/chips/77afc9dd-baa9-4312-b8b8-7ef479c840e6",permalink:"/Circuits/Website/docs/documentation/chips/77afc9dd-baa9-4312-b8b8-7ef479c840e6",draft:!1,editUrl:"https://github.com/FunnPunn/RecRoom-Circuits/docs/documentation/chips/77afc9dd-baa9-4312-b8b8-7ef479c840e6.md",tags:[{label:"._tags",permalink:"/Circuits/Website/docs/tags/tags"}],version:"current",sidebarPosition:565,frontMatter:{sidebar_position:565,tags:["._tags"]},sidebar:"tutorialSidebar",previous:{title:"String Contains",permalink:"/Circuits/Website/docs/documentation/chips/aa24edab-c707-4cff-8c73-07e479b4cd07"},next:{title:"String Length",permalink:"/Circuits/Website/docs/documentation/chips/dcde9345-00f2-41fb-9a2d-5a938f39bfb5"}},l={},p=[{value:"Use this chip to combine multiple strings together into a single string output. The &quot;Format&quot; input is part of final string output and can include other string inputs by using this syntax: {input pin # starting at 0}. For example, a &quot;Format&quot; input with a default value of \u201cHello, {0}!\u201d with a single additional input pin with the value &quot;World&quot; is fully output as &quot;Hello, World!&quot;. If you had another input pin you would use {1} to denote the 2nd pin. You can add more string inputs by configuring the chip and pressing &quot;Add Input&quot;.",id:"use-this-chip-to-combine-multiple-strings-together-into-a-single-string-output-the-format-input-is-part-of-final-string-output-and-can-include-other-string-inputs-by-using-this-syntax-input-pin--starting-at-0-for-example-a-format-input-with-a-default-value-of-hello-0-with-a-single-additional-input-pin-with-the-value-world-is-fully-output-as-hello-world-if-you-had-another-input-pin-you-would-use-1-to-denote-the-2nd-pin-you-can-add-more-string-inputs-by-configuring-the-chip-and-pressing-add-input",level:3},{value:"Inputs:",id:"inputs",level:2},{value:"Outputs:",id:"outputs",level:2},{value:"Info:",id:"info",level:2}],s={toc:p},d="wrapper";function c(t){let{components:e,...n}=t;return(0,i.kt)(d,(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"string-format"},"String Format"),(0,i.kt)("h3",{id:"use-this-chip-to-combine-multiple-strings-together-into-a-single-string-output-the-format-input-is-part-of-final-string-output-and-can-include-other-string-inputs-by-using-this-syntax-input-pin--starting-at-0-for-example-a-format-input-with-a-default-value-of-hello-0-with-a-single-additional-input-pin-with-the-value-world-is-fully-output-as-hello-world-if-you-had-another-input-pin-you-would-use-1-to-denote-the-2nd-pin-you-can-add-more-string-inputs-by-configuring-the-chip-and-pressing-add-input"},'Use this chip to combine multiple strings together into a single string output. The "Format" input is part of final string output and can include other string inputs by using this syntax: {input pin # starting at 0}. For example, a "Format" input with a default value of \u201cHello, {0}!\u201d with a single additional input pin with the value "World" is fully output as "Hello, World!". If you had another input pin you would use {1} to denote the 2nd pin. You can add more string inputs by configuring the chip and pressing "Add Input".'),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"th",src:"https://images-ext-2.discordapp.net/external/MPmIaQzlEPmgGWlgi-WxBBXt0Bjv_zWPkg1y1f_sy3s/https/www.recroomcircuits.com/image/circuit/absolute-value?width=206&height=108",alt:null}))))),(0,i.kt)("h2",{id:"inputs"},"Inputs:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Port Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Port Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Format"),(0,i.kt)("td",{parentName:"tr",align:null},"string")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Value"),(0,i.kt)("td",{parentName:"tr",align:null},"string")))),(0,i.kt)("h2",{id:"outputs"},"Outputs:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Port Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Port Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Result"),(0,i.kt)("td",{parentName:"tr",align:null},"string")))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Is Trolling Risk?"),(0,i.kt)("td",{parentName:"tr",align:null},"No.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Is Beta?"),(0,i.kt)("td",{parentName:"tr",align:null},"No.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Chip UUID"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"77afc9dd-baa9-4312-b8b8-7ef479c840e6"))))),(0,i.kt)("h2",{id:"info"},"Info:"),(0,i.kt)("p",null,"._extrainfo"))}c.isMDXComponent=!0}}]);