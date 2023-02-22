"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[404],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=l,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:l,r[1]=i;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3170:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(7462),l=(n(7294),n(3905));const o={sidebar_position:2,sidebar_label:"Hello world",description:"Run your Rollkit rollup while connected to a local Celestia Data Availability network."},r="Hello world",i={unversionedId:"tutorials/hello-world",id:"tutorials/hello-world",title:"Hello world",description:"Run your Rollkit rollup while connected to a local Celestia Data Availability network.",source:"@site/docs/tutorials/hello-world.md",sourceDirName:"tutorials",slug:"/tutorials/hello-world",permalink:"/pr-preview/pr-119/docs/tutorials/hello-world",draft:!1,editUrl:"https://github.com/rollkit/docs/tree/main/docs/tutorials/hello-world.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Hello world",description:"Run your Rollkit rollup while connected to a local Celestia Data Availability network."},sidebar:"tutorialSidebar",previous:{title:"Building & deploying a rollup",permalink:"/pr-preview/pr-119/docs/tutorials/building-and-deploying-a-rollup"},next:{title:"GM world tutorial",permalink:"/pr-preview/pr-119/docs/tutorials/gm-world"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Running local devnet with a Rollkit rollup",id:"running-local-devnet-with-a-rollkit-rollup",level:2},{value:"Query your balance",id:"query-your-balance",level:2},{value:"Start, stop, or remove your container",id:"start-stop-or-remove-your-container",level:2},{value:"Scaffold your rollup",id:"scaffold-your-rollup",level:2},{value:"Install Rollkit",id:"install-rollkit",level:2},{value:"Start your rollup",id:"start-your-rollup",level:2},{value:"Keys",id:"keys",level:3},{value:"Transactions",id:"transactions",level:3},{value:"Balances",id:"balances",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"hello-world"},"Hello world"),(0,l.kt)("admonition",{title:"difficulty",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Beginner")),(0,l.kt)("admonition",{title:"Note",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"This tutorial has only been tested on an AMD machine running Ubuntu 22.10 x64.")),(0,l.kt)("p",null,"This tutorial will teach developers how to easily run a local data availability (DA) devnet on their own machine (or in the cloud).\nRunning a local devnet for DA to test your rollup is the recommended first step before deploying to a testnet.\nThis eliminates the need for testnet tokens and deploying to a testnet until you are ready."),(0,l.kt)("p",null,"The development journey for your rollup will look something like this:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Run your rollup and post DA to a local devnet, and make sure everything works as expected"),(0,l.kt)("li",{parentName:"ol"},"Deploy the rollup, posting to a DA testnet. Confirm again that everything is functioning properly"),(0,l.kt)("li",{parentName:"ol"},"Finally, deploy your rollup to the DA Layer's mainnet")),(0,l.kt)("p",null,"Whether you're a developer simply testing things on your laptop or using a virtual machine in the cloud,\nthis process can be done on any machine of your choosing. We tested it out on a machine with the following specs:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Memory: 1 GB RAM"),(0,l.kt)("li",{parentName:"ul"},"CPU: Single Core AMD"),(0,l.kt)("li",{parentName:"ul"},"Disk: 25 GB SSD Storage"),(0,l.kt)("li",{parentName:"ul"},"OS: Ubuntu 22.10 x64")),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Docker installed on your machine")),(0,l.kt)("h2",{id:"running-local-devnet-with-a-rollkit-rollup"},"Running local devnet with a Rollkit rollup"),(0,l.kt)("p",null,"First, run the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/local-celestia-devnet"},(0,l.kt)("inlineCode",{parentName:"a"},"local-celestia-devnet"))," by running the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --platform linux/amd64 -p 26650:26657 -p 26659:26659 ghcr.io/celestiaorg/local-celestia-devnet:main\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"The above command is different than the command in the ",(0,l.kt)("a",{parentName:"p",href:"http://docs.celestia.org/nodes/local-devnet/"},"Running a Local Celestia Devnet")," tutorial by Celestia Labs.\nPort 26657 on the Docker container in this example will be mapped to the local port 26650. This is to avoid clashing ports with\nthe Rollkit node, as we're running the devnet and node on one machine.")),(0,l.kt)("h2",{id:"query-your-balance"},"Query your balance"),(0,l.kt)("p",null,"Open a new terminal instance. Check the balance on your account that you'll be using to post blocks to the\nlocal network, this will make sure you can post rollup blocks to your Celestia Devnet for DA & consensus:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET http://0.0.0.0:26659/balance\n")),(0,l.kt)("p",null,"You will see something like this, denoting your balance in TIA x 10^(-6):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'{"denom":"utia","amount":"999995000000000"}\n')),(0,l.kt)("p",null,"If you want to be able to transpose your JSON results in a nicer format, you can install ",(0,l.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/"},(0,l.kt)("inlineCode",{parentName:"a"},"jq")),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install jq\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"We'll need ",(0,l.kt)("inlineCode",{parentName:"p"},"jq")," later, so install it!")),(0,l.kt)("p",null,"Then run this to prettify the result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET http://0.0.0.0:26659/balance | jq\n")),(0,l.kt)("p",null,"Here's what my response was when I wrote this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\n                                 Dload  Upload   Total   Spent    Left  Speed\n100    43  100    43    0     0   1730      0 --:--:-- --:--:-- --:--:--  1791\n{\n  "denom": "utia",\n  "amount": "999995000000000"\n}\n')),(0,l.kt)("p",null,"If you want to clean it up some more, you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"-s")," option to run ",(0,l.kt)("inlineCode",{parentName:"p"},"curl")," in silent mode and not print the progress metrics:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -s -X GET http://0.0.0.0:26659/balance | jq\n")),(0,l.kt)("p",null,"Your result will now look like this, nice \ud83e\udee1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "denom": "utia",\n  "amount": "999995000000000"\n}\n')),(0,l.kt)("h2",{id:"start-stop-or-remove-your-container"},"Start, stop, or remove your container"),(0,l.kt)("p",null,"Find the Container ID that is running by using the command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker ps\n")),(0,l.kt)("p",null,"Then stop the container:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker stop CONTAINER_ID_or_NAME\n")),(0,l.kt)("p",null,"You can obtain the container ID or name of a stopped container using the ",(0,l.kt)("inlineCode",{parentName:"p"},"docker ps -a")," command, which will list all containers (running and stopped) and their details. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker ps -a\n")),(0,l.kt)("p",null,"This will give you an output similar to this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'CONTAINER ID   IMAGE                                            COMMAND            CREATED         STATUS         PORTS                                                                                                                         NAMES\nd9af68de54e4   ghcr.io/celestiaorg/local-celestia-devnet:main   "/entrypoint.sh"   5 minutes ago   Up 2 minutes   1317/tcp, 9090/tcp, 0.0.0.0:26657->26657/tcp, :::26657->26657/tcp, 26656/tcp, 0.0.0.0:26659->26659/tcp, :::26659->26659/tcp   musing_matsumoto\n')),(0,l.kt)("p",null,"In this example, you can restart the container using either its container ID (",(0,l.kt)("inlineCode",{parentName:"p"},"d9af68de54e4"),") or name (",(0,l.kt)("inlineCode",{parentName:"p"},"musing_matsumoto"),"). To restart the container, run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker start d9af68de54e4\n")),(0,l.kt)("p",null,"or"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker start musing_matsumoto\n")),(0,l.kt)("p",null,"If you ever would like to remove the container, you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"docker rm")," command followed by the container ID or name."),(0,l.kt)("p",null,"Here is an example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker rm CONTAINER_ID_or_NAME\n")),(0,l.kt)("h2",{id:"scaffold-your-rollup"},"Scaffold your rollup"),(0,l.kt)("p",null,"Now that you have a Celestia devnet running, you are ready to install Golang. We will use Golang to build and run our Cosmos-SDK blockchain."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.celestia.org/nodes/environment#install-golang"},"Install Golang")," (",(0,l.kt)("em",{parentName:"p"},"these commands are for amd64/linux"),"):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'ver="1.19.1"\ncd $HOME\nwget "https://golang.org/dl/go$ver.linux-amd64.tar.gz"\nsudo rm -rf /usr/local/go\nsudo tar -C /usr/local -xzf "go$ver.linux-amd64.tar.gz"\nrm "go$ver.linux-amd64.tar.gz"\necho "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\ngo version\n')),(0,l.kt)("p",null,"Now, use the following command to install Ignite CLI:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://get.ignite.com/cli! | bash\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"If you have issues with installation, the full guide can be found ",(0,l.kt)("a",{parentName:"p",href:"https://get.ignite.com/cli"},"here")," or on ",(0,l.kt)("a",{parentName:"p",href:"https://docs.ignite.com"},"docs.ignite.com"),".\nThe above command was tested on ",(0,l.kt)("inlineCode",{parentName:"p"},"amd64/linux"),".")),(0,l.kt)("p",null,"Check your version:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ignite version\n")),(0,l.kt)("p",null,"Scaffold the chain:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ignite scaffold chain hello\n")),(0,l.kt)("p",null,"Change into the ",(0,l.kt)("inlineCode",{parentName:"p"},"hello")," directory:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd hello\n")),(0,l.kt)("h2",{id:"install-rollkit"},"Install Rollkit"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"go mod edit -replace github.com/cosmos/cosmos-sdk=github.com/rollkit/cosmos-sdk@v0.46.7-rollkit-v0.6.0-no-fraud-proofs\ngo mod edit -replace github.com/tendermint/tendermint=github.com/celestiaorg/tendermint@v0.34.22-0.20221202214355-3605c597500d\ngo mod tidy\ngo mod download\n")),(0,l.kt)("h2",{id:"start-your-rollup"},"Start your rollup"),(0,l.kt)("p",null,"Download the ",(0,l.kt)("inlineCode",{parentName:"p"},"init.sh")," script to start the chain:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# From inside the `hello` directory\ncd ..\n# Clone the `init.sh` script\ngit clone https://github.com/rollkit/docs.git --depth 1 --filter=blob:none --sparse docs/scripts/hello/init.sh\n# Copy the `init.sh` script to your PWD\ncp docs/scripts/hello/init.sh hello/\n# CD to PWD\ncd hello/\n")),(0,l.kt)("p",null,"Run the ",(0,l.kt)("inlineCode",{parentName:"p"},"init.sh")," script:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bash init.sh\n")),(0,l.kt)("p",null,"This will start your rollup, connected to the local Celestia devnet you have running."),(0,l.kt)("p",null,"Now let's explore a bit."),(0,l.kt)("h3",{id:"keys"},"Keys"),(0,l.kt)("p",null,"List your keys:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"hellod keys list --keyring-backend test\n")),(0,l.kt)("h3",{id:"transactions"},"Transactions"),(0,l.kt)("p",null,"Send a transaction:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"hellod tx bank send cosmos1xwpz06l484xlew98hu74g77wahwatelmz7xm6g cosmos1pgljtq3a549t70zc0fhl4kze2q3r2tllzt8x0y 42069stake --keyring-backend test\n")),(0,l.kt)("p",null,"You'll be prompted to accept the transaction:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'auth_info:\n  fee:\n    amount: []\n    gas_limit: "200000"\n    granter: ""\n    payer: ""\n  signer_infos: []\n  tip: null\nbody:\n  extension_options: []\n  memo: ""\n  messages:\n  - \'@type\': /cosmos.bank.v1beta1.MsgSend\n    amount:\n    - amount: "42069"\n      denom: stake\n    from_address: cosmos1xwpz06l484xlew98hu74g77wahwatelmz7xm6g\n    to_address: cosmos1pgljtq3a549t70zc0fhl4kze2q3r2tllzt8x0y\n  non_critical_extension_options: []\n  timeout_height: "0"\nsignatures: []\nconfirm transaction before signing and broadcasting [y/N]:\n')),(0,l.kt)("p",null,"Type ",(0,l.kt)("inlineCode",{parentName:"p"},"y")," if you'd like to confirm and sign the transaction. Then, you'll see the confirmation:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'code: 0\ncodespace: ""\ndata: ""\nevents: []\ngas_used: "0"\ngas_wanted: "0"\nheight: "0"\ninfo: ""\nlogs: []\nraw_log: \'[]\'\ntimestamp: ""\ntx: null\ntxhash: 677CAF6C80B85ACEF6F9EC7906FB3CB021322AAC78B015FA07D5112F2F824BFF\n')),(0,l.kt)("h3",{id:"balances"},"Balances"),(0,l.kt)("p",null,"Then, query your balance:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"hellod query bank balances cosmos1pgljtq3a549t70zc0fhl4kze2q3r2tllzt8x0y\n")),(0,l.kt)("p",null,"This is the key that received the balance, so it should have increased past the initial ",(0,l.kt)("inlineCode",{parentName:"p"},"STAKING_AMOUNT"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'balances:\n- amount: "10000000000000000000042069"\n  denom: stake\npagination:\n  next_key: null\n  total: "0"\n')),(0,l.kt)("p",null,"The other key, should have decreased in balance:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"hellod query bank balances cosmos1xwpz06l484xlew98hu74g77wahwatelmz7xm6g\n")),(0,l.kt)("p",null,"Response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'balances:\n- amount: "9999999999999999999957931"\n  denom: stake\npagination:\n  next_key: null\n  total: "0"\n')))}c.isMDXComponent=!0}}]);