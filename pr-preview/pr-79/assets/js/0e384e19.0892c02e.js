"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[671],{3905:(t,e,i)=>{i.d(e,{Zo:()=>c,kt:()=>y});var l=i(7294);function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,l)}return i}function r(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){a(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function n(t,e){if(null==t)return{};var i,l,a=function(t,e){if(null==t)return{};var i,l,a={},o=Object.keys(t);for(l=0;l<o.length;l++)i=o[l],e.indexOf(i)>=0||(a[i]=t[i]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(l=0;l<o.length;l++)i=o[l],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(a[i]=t[i])}return a}var s=l.createContext({}),u=function(t){var e=l.useContext(s),i=e;return t&&(i="function"==typeof t?t(e):r(r({},e),t)),i},c=function(t){var e=u(t.components);return l.createElement(s.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},m=l.forwardRef((function(t,e){var i=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,c=n(t,["components","mdxType","originalType","parentName"]),p=u(i),m=a,y=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return i?l.createElement(y,r(r({ref:e},c),{},{components:i})):l.createElement(y,r({ref:e},c))}));function y(t,e){var i=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=i.length,r=new Array(o);r[0]=m;var n={};for(var s in e)hasOwnProperty.call(e,s)&&(n[s]=e[s]);n.originalType=t,n[p]="string"==typeof t?t:a,r[1]=n;for(var u=2;u<o;u++)r[u]=i[u];return l.createElement.apply(null,r)}return l.createElement.apply(null,i)}m.displayName="MDXCreateElement"},9881:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>n,toc:()=>u});var l=i(7462),a=(i(7294),i(3905));const o={sidebar_position:1,sidebar_label:"Introduction",description:"Intro to Rollkit, a modular framework for rollups."},r="Introduction to Rollkit",n={unversionedId:"intro",id:"intro",title:"Introduction to Rollkit",description:"Intro to Rollkit, a modular framework for rollups.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/pr-preview/pr-79/docs/intro",draft:!1,editUrl:"https://github.com/rollkit/docs/tree/main/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Introduction",description:"Intro to Rollkit, a modular framework for rollups."},sidebar:"tutorialSidebar",next:{title:"Rollkit Stack",permalink:"/pr-preview/pr-79/docs/rollkit-stack"}},s={},u=[{value:"What is Rollkit?",id:"what-is-rollkit",level:2},{value:"What problems is Rollkit solving?",id:"what-problems-is-rollkit-solving",level:2},{value:"1. Scalability, Customizability, and Sovereignty",id:"1-scalability-customizability-and-sovereignty",level:3},{value:"2. Security and Time to Market",id:"2-security-and-time-to-market",level:3},{value:"Why Rollkit?",id:"why-rollkit",level:2},{value:"Scalability and Security",id:"scalability-and-security",level:3},{value:"Customizability and Time to Market",id:"customizability-and-time-to-market",level:3},{value:"Sovereignty",id:"sovereignty",level:3},{value:"How can you use Rollkit?",id:"how-can-you-use-rollkit",level:2},{value:"Build a Rollup with any Virtual Machine",id:"build-a-rollup-with-any-virtual-machine",level:3},{value:"Build an App-Specific Rollup with Cosmos-SDK",id:"build-an-app-specific-rollup-with-cosmos-sdk",level:3},{value:"Build a Settlement Layer",id:"build-a-settlement-layer",level:3},{value:"When can you use Rollkit?",id:"when-can-you-use-rollkit",level:2}],c={toc:u};function p(t){let{components:e,...i}=t;return(0,a.kt)("wrapper",(0,l.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction-to-rollkit"},"Introduction to Rollkit"),(0,a.kt)("p",null,"Welcome to Rollkit docs. We\u2019re happy you made it here!"),(0,a.kt)("p",null,"Our mission is to empower developers to quickly innovate and create entirely new classes of rollups with minimal tradeoffs."),(0,a.kt)("p",null,"We\u2019re setting the bar high for developers\u2019 flexibility and ability to customize rollups however they see fit."),(0,a.kt)("admonition",{title:"Tip",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you're familiar with Rollkit, you may want to skip to the ",(0,a.kt)("a",{parentName:"p",href:"../category/tutorials"},"tutorials section"))),(0,a.kt)("h2",{id:"what-is-rollkit"},"What is Rollkit?"),(0,a.kt)("p",null,"Rollkit is a rollup framework that gives developers the freedom to deploy rollups throughout the modular stack with minimal tradeoffs, opening new possibilities for rapid experimentation and innovation."),(0,a.kt)("p",null,"It was built as a drop-in replacement for Tendermint for any ABCI-compatible blockchain app."),(0,a.kt)("p",null,"We\u2019re building Rollkit as an open-source public good. While Celestia Labs will fund R&D, we see a future where the developer community contributes and owns Rollkit development."),(0,a.kt)("p",null,"The tutorials use Celestia as the default data availability layer, but developers will have the ability to swap Celestia with any data availability layer."),(0,a.kt)("h2",{id:"what-problems-is-rollkit-solving"},"What problems is Rollkit solving?"),(0,a.kt)("h3",{id:"1-scalability-customizability-and-sovereignty"},"1. Scalability, Customizability, and Sovereignty"),(0,a.kt)("p",null,"Rollups deployed on a monolithic Layer 1 (L1) blockchain benefit from directly inheriting security from the base layer. However, that comes at the cost of scalability, customizability, and sovereignty."),(0,a.kt)("p",null,"All rollups sharing the same monolithic L1 compete with each other over the limited block space, resulting in a lack of scalability."),(0,a.kt)("p",null,"In addition, developers lack the freedom and ability to customize different parts of the stack, such as the execution environment, putting a limit and constraint on how they build rollups."),(0,a.kt)("p",null,"Furthermore, a rollup community on a monolithic L1 can't fork their chain when needed."),(0,a.kt)("h3",{id:"2-security-and-time-to-market"},"2. Security and Time to Market"),(0,a.kt)("p",null,"App-chains might sound like the perfect solution for the problems listed above. While it\u2019s somehow true, app-chains introduced a new set of tradeoffs."),(0,a.kt)("p",null,"Developers building their products as app-chains have to bootstrap an entire validator set and face the overhead of managing a full BFT-consensus network, increasing the cost and time of bringing their products to market while introducing security risks."),(0,a.kt)("p",null,"Plus, current app-chains aren\u2019t truly modular since they handle data availability, consensus and settlement. Lastly, who doesn\u2019t want to build modular?"),(0,a.kt)("h2",{id:"why-rollkit"},"Why Rollkit?"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:"center"},"Scalability"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Customizability"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Sovereignty"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Security"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Time to market"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rollkit Rollups"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705")))),(0,a.kt)("h3",{id:"scalability-and-security"},"Scalability and Security"),(0,a.kt)("p",null,"By deploying on top of specialized data availability layers like Celestia, Rollkit rollups directly inherit security and scalability from the data availability layer."),(0,a.kt)("h3",{id:"customizability-and-time-to-market"},"Customizability and Time to Market"),(0,a.kt)("p",null,"Rollkit is built as a modular framework allowing developers to easily customize and deploy rollups."),(0,a.kt)("h3",{id:"sovereignty"},"Sovereignty"),(0,a.kt)("p",null,"Finally, since Rollkit rollups are deployed on modular blockchains like Celestia that separate execution from data availability and consensus, rollups now have the possibility to be sovereign by deploying as an app-chain rollup."),(0,a.kt)("h2",{id:"how-can-you-use-rollkit"},"How can you use Rollkit?"),(0,a.kt)("h3",{id:"build-a-rollup-with-any-virtual-machine"},"Build a Rollup with any Virtual Machine"),(0,a.kt)("p",null,"Any ABCI-comptabile state machine may be used with Rollkit, or rollup your sleeves and build your own VM!"),(0,a.kt)("h3",{id:"build-an-app-specific-rollup-with-cosmos-sdk"},"Build an App-Specific Rollup with Cosmos-SDK"),(0,a.kt)("p",null,"Cosmos-SDK, and its extensive documentation and tooling may be used to create a Rollkit-compatible blockchain app."),(0,a.kt)("h3",{id:"build-a-settlement-layer"},"Build a Settlement Layer"),(0,a.kt)("p",null,"Create a generalized rollup chain, to run many apps or settle other rollups."),(0,a.kt)("h2",{id:"when-can-you-use-rollkit"},"When can you use Rollkit?"),(0,a.kt)("p",null,"As of today, Rollkit is still in the MVP stages. The framework currently provides a centralized sequencer, an execution VM (ABCI and Cosmos SDK) and a connection to a data availability layer (Celestia)."),(0,a.kt)("p",null,"We\u2019re currently working on implementing many new and exciting features like light nodes and state fraud proofs."),(0,a.kt)("p",null,"Head down to the next section (",(0,a.kt)("a",{parentName:"p",href:"/pr-preview/pr-79/docs/rollkit-stack"},"Rollkit Stack"),") to learn more about what\u2019s coming for Rollkit. If you're ready to start building, you can skip to the ",(0,a.kt)("a",{parentName:"p",href:"../category/tutorials"},"Tutorials")," section."),(0,a.kt)("p",null,"Spoiler alert, whichever you choose, it\u2019s going to be a great rabbit hole!"))}p.isMDXComponent=!0}}]);