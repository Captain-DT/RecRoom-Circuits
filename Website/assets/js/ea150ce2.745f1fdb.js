"use strict";(self.webpackChunkcircuits=self.webpackChunkcircuits||[]).push([[51171],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(r),d=n,k=s["".concat(c,".").concat(d)]||s[d]||m[d]||o;return r?a.createElement(k,l(l({ref:t},u),{},{components:r})):a.createElement(k,l({ref:t},u))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},99437:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={sidebar_position:46,tags:["._tags"]},l="Award Room Key",i={unversionedId:"documentation/chips/7e40f770-c9a4-4233-8845-cac6ec99ae67",id:"documentation/chips/7e40f770-c9a4-4233-8845-cac6ec99ae67",title:"Award Room Key",description:"Unlocks a room key for the target player. Multiple award room key requests from the same client are sent in bulk with a one-second cooldown.",source:"@site/docs/documentation/chips/7e40f770-c9a4-4233-8845-cac6ec99ae67.md",sourceDirName:"documentation/chips",slug:"/documentation/chips/7e40f770-c9a4-4233-8845-cac6ec99ae67",permalink:"/Circuits/Website/docs/documentation/chips/7e40f770-c9a4-4233-8845-cac6ec99ae67",draft:!1,editUrl:"https://github.com/FunnPunn/RecRoom-Circuits/docs/documentation/chips/7e40f770-c9a4-4233-8845-cac6ec99ae67.md",tags:[{label:"._tags",permalink:"/Circuits/Website/docs/tags/tags"}],version:"current",sidebarPosition:46,frontMatter:{sidebar_position:46,tags:["._tags"]},sidebar:"tutorialSidebar",previous:{title:"Award Currency",permalink:"/Circuits/Website/docs/documentation/chips/03461631-734f-491b-ab86-6bdf66947556"},next:{title:"Background Objects Constant",permalink:"/Circuits/Website/docs/documentation/chips/c6e9ffef-b505-41d3-bb2d-ff86838398c6"}},c={},p=[{value:"Unlocks a room key for the target player. Multiple award room key requests from the same client are sent in bulk with a one-second cooldown.",id:"unlocks-a-room-key-for-the-target-player-multiple-award-room-key-requests-from-the-same-client-are-sent-in-bulk-with-a-one-second-cooldown",level:3},{value:"Ports:",id:"ports",level:2},{value:"Properties:",id:"properties",level:2},{value:"Info:",id:"info",level:2}],u={toc:p},s="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(s,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"award-room-key"},"Award Room Key"),(0,n.kt)("h3",{id:"unlocks-a-room-key-for-the-target-player-multiple-award-room-key-requests-from-the-same-client-are-sent-in-bulk-with-a-one-second-cooldown"},"Unlocks a room key for the target player. Multiple award room key requests from the same client are sent in bulk with a one-second cooldown."),(0,n.kt)("p",null,"The Success port will be TRUE if the key was successfully unlocked for the player or if the player previously owned the key. If the key could not be awarded the Success port will be FALSE.\nUse the Log Output toggle in the configuration settings to see more information about why a failure occurred. Logging output may impact room performance and should be toggled off when not in use."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"th",src:"https://images-ext-2.discordapp.net/external/MPmIaQzlEPmgGWlgi-WxBBXt0Bjv_zWPkg1y1f_sy3s/https/www.recroomcircuits.com/image/circuit/absolute-value?width=206&height=108",alt:null}))))),(0,n.kt)("h2",{id:"ports"},"Ports:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Input Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Input Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"exec")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Room Key"),(0,n.kt)("td",{parentName:"tr",align:null},"room key")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Player"),(0,n.kt)("td",{parentName:"tr",align:null},"player")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Output Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Output Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"exec")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"On Award Room Key Complete"),(0,n.kt)("td",{parentName:"tr",align:null},"exec")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Success"),(0,n.kt)("td",{parentName:"tr",align:null},"bool")))),(0,n.kt)("h2",{id:"properties"},"Properties:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Is Trolling Risk?"),(0,n.kt)("td",{parentName:"tr",align:null},"No.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Is Beta?"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Chip UUID"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"7e40f770-c9a4-4233-8845-cac6ec99ae67"))))),(0,n.kt)("h2",{id:"info"},"Info:"),(0,n.kt)("p",null,"._extrainfo"))}m.isMDXComponent=!0}}]);