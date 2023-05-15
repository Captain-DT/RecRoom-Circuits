"use strict";(self.webpackChunkcircuits=self.webpackChunkcircuits||[]).push([[18958],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},s),{},{components:n})):a.createElement(h,o({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50057:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:415,tags:["._tags"]},o="Player Prompt Multiple Choice",l={unversionedId:"documentation/chips/d376a3c7-67c2-4607-a124-e2b93dc256d8",id:"documentation/chips/d376a3c7-67c2-4607-a124-e2b93dc256d8",title:"Player Prompt Multiple Choice",description:'Sends a watch notification to the specified player containing the prompt title and body, along with each of the answer choices on its own line. Once this watch notification is opened, the player can choose a response and hit "ok," triggering the On Prompt Complete event. Since there is a delay between sending a notification and receiving the response in which other responses may be received, the Player output can be used to disambiguate multiple responses',source:"@site/docs/documentation/chips/d376a3c7-67c2-4607-a124-e2b93dc256d8.md",sourceDirName:"documentation/chips",slug:"/documentation/chips/d376a3c7-67c2-4607-a124-e2b93dc256d8",permalink:"/Circuits/Website/docs/documentation/chips/d376a3c7-67c2-4607-a124-e2b93dc256d8",draft:!1,editUrl:"https://github.com/FunnPunn/RecRoom-Circuits/docs/documentation/chips/d376a3c7-67c2-4607-a124-e2b93dc256d8.md",tags:[{label:"._tags",permalink:"/Circuits/Website/docs/tags/tags"}],version:"current",sidebarPosition:415,frontMatter:{sidebar_position:415,tags:["._tags"]},sidebar:"tutorialSidebar",previous:{title:"Player Owns Room Key",permalink:"/Circuits/Website/docs/documentation/chips/e61558a9-0ce4-4dba-ac87-b16e61bcdb23"},next:{title:"Remove Player From Radio Channel",permalink:"/Circuits/Website/docs/documentation/chips/eb605a54-315e-495e-b051-8d113c32ed7c"}},c={},p=[{value:"Sends a watch notification to the specified player containing the prompt title and body, along with each of the answer choices on its own line. Once this watch notification is opened, the player can choose a response and hit &quot;ok,&quot; triggering the On Prompt Complete event. Since there is a delay between sending a notification and receiving the response in which other responses may be received, the Player output can be used to disambiguate multiple responses",id:"sends-a-watch-notification-to-the-specified-player-containing-the-prompt-title-and-body-along-with-each-of-the-answer-choices-on-its-own-line-once-this-watch-notification-is-opened-the-player-can-choose-a-response-and-hit-ok-triggering-the-on-prompt-complete-event-since-there-is-a-delay-between-sending-a-notification-and-receiving-the-response-in-which-other-responses-may-be-received-the-player-output-can-be-used-to-disambiguate-multiple-responses",level:3},{value:"Inputs:",id:"inputs",level:2},{value:"Outputs:",id:"outputs",level:2},{value:"Info:",id:"info",level:2}],s={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"player-prompt-multiple-choice"},"Player Prompt Multiple Choice"),(0,r.kt)("h3",{id:"sends-a-watch-notification-to-the-specified-player-containing-the-prompt-title-and-body-along-with-each-of-the-answer-choices-on-its-own-line-once-this-watch-notification-is-opened-the-player-can-choose-a-response-and-hit-ok-triggering-the-on-prompt-complete-event-since-there-is-a-delay-between-sending-a-notification-and-receiving-the-response-in-which-other-responses-may-be-received-the-player-output-can-be-used-to-disambiguate-multiple-responses"},'Sends a watch notification to the specified player containing the prompt title and body, along with each of the answer choices on its own line. Once this watch notification is opened, the player can choose a response and hit "ok," triggering the On Prompt Complete event. Since there is a delay between sending a notification and receiving the response in which other responses may be received, the Player output can be used to disambiguate multiple responses'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"th",src:"https://images-ext-2.discordapp.net/external/MPmIaQzlEPmgGWlgi-WxBBXt0Bjv_zWPkg1y1f_sy3s/https/www.recroomcircuits.com/image/circuit/absolute-value?width=206&height=108",alt:null}))))),(0,r.kt)("h2",{id:"inputs"},"Inputs:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Port Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Port Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"exec")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Player"),(0,r.kt)("td",{parentName:"tr",align:null},"player")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Prompt Title"),(0,r.kt)("td",{parentName:"tr",align:null},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Prompt Body"),(0,r.kt)("td",{parentName:"tr",align:null},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Answer Choices"),(0,r.kt)("td",{parentName:"tr",align:null},"List","[string]")))),(0,r.kt)("h2",{id:"outputs"},"Outputs:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Port Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Port Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Run"),(0,r.kt)("td",{parentName:"tr",align:null},"exec")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"On Prompt Complete"),(0,r.kt)("td",{parentName:"tr",align:null},"exec")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Success"),(0,r.kt)("td",{parentName:"tr",align:null},"bool")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Receiving Player"),(0,r.kt)("td",{parentName:"tr",align:null},"player")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Response"),(0,r.kt)("td",{parentName:"tr",align:null},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Response Index"),(0,r.kt)("td",{parentName:"tr",align:null},"int")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Is Trolling Risk?"),(0,r.kt)("td",{parentName:"tr",align:null},"No.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Is Beta?"),(0,r.kt)("td",{parentName:"tr",align:null},"No.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Chip UUID"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"d376a3c7-67c2-4607-a124-e2b93dc256d8"))))),(0,r.kt)("h2",{id:"info"},"Info:"),(0,r.kt)("p",null,"._extrainfo"))}u.isMDXComponent=!0}}]);