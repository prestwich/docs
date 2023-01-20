"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[193],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(o),k=r,m=p["".concat(s,".").concat(k)]||p[k]||d[k]||l;return o?n.createElement(m,i(i({ref:t},u),{},{components:o})):n.createElement(m,i({ref:t},u))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=o.length,i=new Array(l);i[0]=k;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:r,i[1]=a;for(var c=2;c<l;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}k.displayName="MDXCreateElement"},8793:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var n=o(7462),r=(o(7294),o(3905));const l={sidebar_position:3,sidebar_label:"Rollkit Stack",description:"Intro to Rollkit's stack, the first modular development kit for building sovereign rollups."},i="The Rollkit Stack",a={unversionedId:"rollkit-stack",id:"rollkit-stack",title:"The Rollkit Stack",description:"Intro to Rollkit's stack, the first modular development kit for building sovereign rollups.",source:"@site/docs/rollkit-stack.md",sourceDirName:".",slug:"/rollkit-stack",permalink:"/docs/rollkit-stack",draft:!1,editUrl:"https://github.com/rollkit/docs/tree/main/docs/rollkit-stack.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Rollkit Stack",description:"Intro to Rollkit's stack, the first modular development kit for building sovereign rollups."},sidebar:"tutorialSidebar",previous:{title:"Core Concepts",permalink:"/docs/core-concepts"},next:{title:"Tutorials",permalink:"/docs/category/tutorials"}},s={},c=[{value:"Mempool",id:"mempool",level:2},{value:"Rollkit Node Types",id:"rollkit-node-types",level:2},{value:"Light node",id:"light-node",level:3},{value:"Full node",id:"full-node",level:3}],u={toc:c};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"the-rollkit-stack"},"The Rollkit Stack"),(0,r.kt)("p",null,"This section will cover the technical stack of Rollkit."),(0,r.kt)("p",null,"Rollkit is built by replacing Tendermint, the Cosmos-SDK Consensus Layer,\nwith a drop-in replacement that communicates directly with Celestia's Data\nAvailability (DA) and Consensus Layer. Our version of Tendermint is designed\nto work seamlessly with other modular layers, allowing for greater flexibility\nand adaptability."),(0,r.kt)("p",null,"It spins up a sovereign rollup, which collects transactions into blocks and\nposts them onto Celestia for DA and Consensus."),(0,r.kt)("p",null,"The goal of Rollkit is to enable anyone to design and deploy a sovereign\nrollup on Celestia in minutes with minimal overhead."),(0,r.kt)("p",null,'Furthermore, while Rollkit allows you to build sovereign rollups on Celestia,\nit currently does not support fraud proofs yet and is therefore running in\n"pessimistic" mode, where nodes would need to re-execute the transactions\nto check the validity of the chain (i.e. a full node). Furthermore, Rollkit\ncurrently only supports a single sequencer.'),(0,r.kt)("admonition",{title:"Tip",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you're familiar with Rollkit's stack, you may want to skip to the ",(0,r.kt)("a",{parentName:"p",href:"./category/tutorials"},"tutorials section"))),(0,r.kt)("h2",{id:"mempool"},"Mempool"),(0,r.kt)("p",null,"The mempool keeps the set of pending transactions, and is used by block\nproducers (full nodes) to produce blocks. Transactions are handled by\nnodes in the First-Come, First-Served (FCFS) manner. Ordering of transactions\ncan be implemented on the application level (for example by adding\nnonce/sequence number). This behaviour is similar to the Tendermint mempool."),(0,r.kt)("h2",{id:"rollkit-node-types"},"Rollkit Node Types"),(0,r.kt)("h3",{id:"light-node"},"Light node"),(0,r.kt)("p",null,"Light nodes are the main producer of transactions in the Rollkit network.\nThey participate in gossiping of and fraud proofs. Light nodes may only\nrequest or store a subset of the state, just to ensure that they can execute\nrollback."),(0,r.kt)("h3",{id:"full-node"},"Full node"),(0,r.kt)("p",null,"Full nodes are a crucial part of the networks, because they are responsible\nfor producing blocks and fraud proofs. They also create a link between the\nRollkit network and the DA and Consensus Layer, by pushing aggregates to\nthe DA and Consensus Layer."))}p.isMDXComponent=!0}}]);