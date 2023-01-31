"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[671],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>h});var l=i(7294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,l)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function n(e,t){if(null==e)return{};var i,l,o=function(e,t){if(null==e)return{};var i,l,o={},a=Object.keys(e);for(l=0;l<a.length;l++)i=a[l],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)i=a[l],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var s=l.createContext({}),u=function(e){var t=l.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},c=function(e){var t=u(e.components);return l.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},y=l.forwardRef((function(e,t){var i=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=n(e,["components","mdxType","originalType","parentName"]),d=u(i),y=o,h=d["".concat(s,".").concat(y)]||d[y]||p[y]||a;return i?l.createElement(h,r(r({ref:t},c),{},{components:i})):l.createElement(h,r({ref:t},c))}));function h(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=i.length,r=new Array(a);r[0]=y;var n={};for(var s in t)hasOwnProperty.call(t,s)&&(n[s]=t[s]);n.originalType=e,n[d]="string"==typeof e?e:o,r[1]=n;for(var u=2;u<a;u++)r[u]=i[u];return l.createElement.apply(null,r)}return l.createElement.apply(null,i)}y.displayName="MDXCreateElement"},9881:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>n,toc:()=>u});var l=i(7462),o=(i(7294),i(3905));const a={sidebar_position:1,sidebar_label:"Introduction",description:"Intro to Rollkit, a modular framework for rollups."},r="Introduction to Rollkit",n={unversionedId:"intro",id:"intro",title:"Introduction to Rollkit",description:"Intro to Rollkit, a modular framework for rollups.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/pr-preview/pr-80/docs/intro",draft:!1,editUrl:"https://github.com/rollkit/docs/tree/main/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Introduction",description:"Intro to Rollkit, a modular framework for rollups."},sidebar:"tutorialSidebar",next:{title:"Rollkit Stack",permalink:"/pr-preview/pr-80/docs/rollkit-stack"}},s={},u=[{value:"What is Rollkit?",id:"what-is-rollkit",level:2},{value:"What problems is Rollkit solving?",id:"what-problems-is-rollkit-solving",level:2},{value:"1. Scalability, Customizability, and Sovereignty",id:"1-scalability-customizability-and-sovereignty",level:3},{value:"2. Security and Time to Market",id:"2-security-and-time-to-market",level:3},{value:"Why Rollkit?",id:"why-rollkit",level:2},{value:"Scalability and Security \u2705",id:"scalability-and-security-",level:3},{value:"Customizability and Time to Market \u2705",id:"customizability-and-time-to-market-",level:3},{value:"Sovereignty \u2705",id:"sovereignty-",level:3},{value:"How can you use Rollkit?",id:"how-can-you-use-rollkit",level:2},{value:"Build a Roll-up with any Virtual Machine",id:"build-a-roll-up-with-any-virtual-machine",level:3},{value:"Build an App-Specific Roll-up with Cosmos-SDK",id:"build-an-app-specific-roll-up-with-cosmos-sdk",level:3},{value:"Build a Settlement Layer",id:"build-a-settlement-layer",level:3},{value:"When can you use Rollkit?",id:"when-can-you-use-rollkit",level:2}],c={toc:u};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,l.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction-to-rollkit"},"Introduction to Rollkit"),(0,o.kt)("p",null,"Welcome to Rollkit docs. We\u2019re happy you made it here!"),(0,o.kt)("p",null,"Our mission is to empower developers to quickly innovate and create entirely new classes of rollups with minimal tradeoffs."),(0,o.kt)("p",null,"We\u2019re setting the bar high for developers\u2019 flexibility and ability to customize rollups however they see fit."),(0,o.kt)("admonition",{title:"Tip",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you're familiar with Rollkit, you may want to skip to the ",(0,o.kt)("a",{parentName:"p",href:"../category/tutorials"},"tutorials section"))),(0,o.kt)("h2",{id:"what-is-rollkit"},"What is Rollkit?"),(0,o.kt)("p",null,"Rollkit is a rollup framework that gives developers the freedom to deploy rollups throughout the modular stack with minimal tradeoffs, opening new possibilities for rapid experimentation and innovation.\nIt was built as a drop-in replacement for Tendermint for any ABCI-compatible blockchain app."),(0,o.kt)("p",null,"We\u2019re building Rollkit as an open-source public good. While Celestia Labs will fund R&D, we see a future where the developer community contributes and owns Rollkit development."),(0,o.kt)("p",null,"The tutorials use Celestia as the default data availability layer, but since Rollkit is credibly neutral, developers will have the ability to swap Celestia with any data availability layer."),(0,o.kt)("h2",{id:"what-problems-is-rollkit-solving"},"What problems is Rollkit solving?"),(0,o.kt)("h3",{id:"1-scalability-customizability-and-sovereignty"},"1. Scalability, Customizability, and Sovereignty"),(0,o.kt)("p",null,"Rollups deployed on a monolithic Layer 1 (L1) blockchain benefit from directly inheriting security from the base layer. However, that comes at the cost of scalability, customizability, and sovereignty.\nAll rollups sharing the same monolithic L1 compete with each other over the limited block space, resulting in a lack of scalability.\nIn addition, developers lack the freedom and ability to customize different parts of the stack, such as the execution environment, putting a limit and constraint on how they build rollups.\nFurthermore, a rollup community on a monolithic L1 can't fork their chain when needed."),(0,o.kt)("h3",{id:"2-security-and-time-to-market"},"2. Security and Time to Market"),(0,o.kt)("p",null,"App-chains might sound like the perfect solution for the problems listed above. While it\u2019s somehow true, app-chains introduced a new set of tradeoffs.\nDevelopers building their products as app-chains have to bootstrap an entire validator set and face the overhead of managing a full BFT-consensus network, increasing the cost and time of bringing their products to market while introducing security risks.\nPlus, current app-chains aren\u2019t truly modular since they handle data availability, consensus and settlement. Lastly, who doesn\u2019t want to build modular?"),(0,o.kt)("h2",{id:"why-rollkit"},"Why Rollkit?"),(0,o.kt)("h3",{id:"scalability-and-security-"},"Scalability and Security \u2705"),(0,o.kt)("p",null,"By deploying on top of specialized data availability layers like Celestia, Rollkit rollups directly inherit security and scalability from the data availability layer."),(0,o.kt)("h3",{id:"customizability-and-time-to-market-"},"Customizability and Time to Market \u2705"),(0,o.kt)("p",null,"Rollkit is built as a modular framework allowing developers to easily customize and deploy rollups."),(0,o.kt)("h3",{id:"sovereignty-"},"Sovereignty \u2705"),(0,o.kt)("p",null,"Finally, since Rollkit rollups are deployed on modular blockchains like Celestia that separate execution from data availability and consensus, rollups now have the possibility to be sovereign by deploying as an app-chain rollup."),(0,o.kt)("h2",{id:"how-can-you-use-rollkit"},"How can you use Rollkit?"),(0,o.kt)("h3",{id:"build-a-roll-up-with-any-virtual-machine"},"Build a Roll-up with any Virtual Machine"),(0,o.kt)("p",null,"Any ABCI-comptabile state machine may be used with Rollkit, or roll-up your sleeves and build your own VM!"),(0,o.kt)("h3",{id:"build-an-app-specific-roll-up-with-cosmos-sdk"},"Build an App-Specific Roll-up with Cosmos-SDK"),(0,o.kt)("p",null,"Cosmos-SDK, and its extensive documentation and tooling may be used to create a Rollkit-compatible blockchain app."),(0,o.kt)("h3",{id:"build-a-settlement-layer"},"Build a Settlement Layer"),(0,o.kt)("p",null,"Create a generalized roll-up chain, to run many apps or settle other roll-ups."),(0,o.kt)("h2",{id:"when-can-you-use-rollkit"},"When can you use Rollkit?"),(0,o.kt)("p",null,"As of today, Rollkit is still in the MVP stages. The framework currently provides a centralized sequencer, an execution VM (ABCI and Cosmos SDK) and a connection to a data availability layer (Celestia)."),(0,o.kt)("p",null,"We\u2019re currently working on implementing many new and exciting features like light nodes and state fraud proofs.\nHead down to the next section (",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-80/docs/rollkit-stack"},"Rollkit Stack"),") to learn more about what\u2019s coming for Rollkit. If you're ready to start building, you can skip to the ",(0,o.kt)("a",{parentName:"p",href:"../category/tutorials"},"Tutorials")," section.\nSpoiler alert, whichever you choose, it\u2019s going to be a great rabbit hole!"))}d.isMDXComponent=!0}}]);