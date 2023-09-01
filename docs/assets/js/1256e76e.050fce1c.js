"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[8670],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>k});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,k=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return r?a.createElement(k,s(s({ref:t},d),{},{components:r})):a.createElement(k,s({ref:t},d))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:n,s[1]=o;for(var c=2;c<i;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9304:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(7294),n=r(2949);function i(e){let{invite:t}=e;const{isDarkTheme:r}=(0,n.I)();return a.createElement("a",{href:`https://discord.gg/${t}`,target:"_blank",rel:"noreferrer"},a.createElement("img",{src:`https://invidget.switchblade.xyz/${t}?theme=${r?"dark":"light"}`,alt:""}))}},6035:(e,t,r)=>{r.d(t,{Z:()=>c});var a=r(7294);const n={container:"container_usuQ",children:"children_AcWt",popup:"popup_N1vF",containerHover:"containerHover__1Ny",popupText:"popupText_TNeV",popupTriangle:"popupTriangle_VKJW"};function i(e){let{children:t,onClickOutside:r}=e;const n=(0,a.useRef)(null);function i(e){n.current&&!n.current.contains(e.target)&&r(e)}return(0,a.useEffect)((()=>(document.addEventListener("mousedown",i),()=>document.removeEventListener("mousedown",i))),[]),a.createElement("span",{ref:n},t)}var s=r(2949);function o(e){let{children:t,title:r,mode:o="hover"}=e;const[l,c]=(0,a.useState)(!1),{isDarkTheme:d}=(0,s.I)();return a.createElement(i,{onClickOutside:()=>c(!1)},a.createElement("span",{className:`${n.container} ${"hover"===o?n.containerHover:""}`},a.createElement("span",{onClick:()=>c(!l),className:n.children},t),a.createElement("span",{className:n.popup,style:{display:"click"===o&&l?"block":"none"}},a.createElement("span",{className:n.popupText,style:{backgroundColor:d?"#dadae0":"#2f3136",color:d?"#000":"#fff"}},r),a.createElement("span",{className:n.popupTriangle,style:{borderTopColor:d?"#dadae0":"#2f3136"}}))))}const l={container:"container_Ak5I",widget:"widget_DC7_",userAvatar:"userAvatar_H_Vg",userTag:"userTag_BirN",userUsername:"userUsername_uIS0",userDiscriminator:"userDiscriminator_chY_"};function c(e){let{data:t}=e;const{isDarkTheme:r}=(0,s.I)();return a.createElement(o,{title:a.createElement("span",null,a.createElement("span",{style:{paddingRight:"0.3rem"}},"discord"===t.type?t.id:t.username),a.createElement("a",{href:t.url??"",style:{color:"inherit"},target:"_blank",rel:"noreferrer"},a.createElement("svg",{width:"13.5",height:"13.5","aria-hidden":"true",viewBox:"0 0 24 24",className:"iconExternalLink_node_modules-@docusaurus-theme-classic-lib-next-theme-IconExternalLink-styles-module"},a.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"})))),mode:"click"},a.createElement("span",{className:l.container},a.createElement("span",{className:l.widget,style:{backgroundColor:r?"#2f3136":"#dadae0"}},a.createElement("img",{src:t.avatarUrl,alt:"",className:l.userAvatar}),a.createElement("span",{className:l.userTag},"discord"===t.type?a.createElement(a.Fragment,null,a.createElement("span",{className:l.userUsername,style:{color:r?"#fff":"#000"}},t.name),a.createElement("span",{className:l.userDiscriminator})):a.createElement("span",{className:l.userUsername,style:{color:r?"#fff":"#000"}},t.name)))))}},5066:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var a=r(7462),n=(r(7294),r(3905)),i=r(6035);r(9304);const s={title:"Information & Lists",sidebar_position:1,description:"Bot informations and lists"},o="Information & Lists",l={unversionedId:"resources/bots/info",id:"resources/bots/info",title:"Information & Lists",description:"Bot informations and lists",source:"@site/wiki/resources/bots/info.md",sourceDirName:"resources/bots",slug:"/resources/bots/info",permalink:"/resources/bots/info",draft:!1,editUrl:"https://github.com/DiscordResources-org/wiki/edit/master/wiki/resources/bots/info.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Information & Lists",sidebar_position:1,description:"Bot informations and lists"},sidebar:"tutorialSidebar",previous:{title:"Unofficial Servers",permalink:"/resources/unofficial-servers"},next:{title:"Best Newcomer Discord Bots",permalink:"/resources/bots/best"}},c={},d=[{value:"Unofficial Discord API Docs",id:"unofficial-discord-api-docs",level:2},{value:"Largest Discord Bots",id:"largest-discord-bots",level:2},{value:"Largest Discord Bots (extended version)",id:"largest-discord-bots-extended-version",level:2},{value:"All Official Discord Bots",id:"all-official-discord-bots",level:2},{value:"List of Libraries",id:"list-of-libraries",level:2},{value:"Discord API Libs",id:"discord-api-libs",level:2},{value:"Library Rest &amp; WS Coverage Comparisons",id:"library-rest--ws-coverage-comparisons",level:3},{value:"Discord Gateway Intents Explainer",id:"discord-gateway-intents-explainer",level:2},{value:"Best Bot Practices",id:"best-bot-practices",level:2},{value:"List of Bot Lists (BotBlocks)",id:"list-of-bot-lists-botblocks",level:2},{value:"DStat",id:"dstat",level:2},{value:"An Idiot&#39;s Guide",id:"an-idiots-guide",level:3},{value:"You think something is missing?",id:"you-think-something-is-missing",level:2}],p={toc:d},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"information--lists"},"Information & Lists"),(0,n.kt)("h2",{id:"unofficial-discord-api-docs"},"Unofficial Discord API Docs"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Description:")," Unofficial documentation for Undocumented Discord APIs. Also contains an outline of Discord's infrastructure.  ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Link:")," ",(0,n.kt)("a",{parentName:"p",href:"https://luna.gitlab.io/discord-unofficial-docs/"},"Unofficial Discord API Docs"),"  ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Credit:")," ",(0,n.kt)(i.Z,{data:{type:"github",id:7283681,name:"luna",username:"lun-4",avatarUrl:"https://avatars.githubusercontent.com/u/7283681?v=4",url:"https://github.com/lun-4"},mdxType:"UserWidgetInline"}))),(0,n.kt)("h2",{id:"largest-discord-bots"},"Largest Discord Bots"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Description:")," An easy-to-read list of the top 25 Discord bots by server count.   ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Link:")," ",(0,n.kt)("a",{parentName:"p",href:"https://gist.github.com/advaith1/451dcbca2d7c3503d4f48d63eb918cb0"},"Largest Discord Bots"),"   ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Credit:")," ",(0,n.kt)(i.Z,{data:{type:"discord",id:"190916650143318016",name:"advaith",username:"advaith",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/190916650143318016/a_ac67d0d00a6dee24919cca724e8a6e83.gif?size=128",url:"https://discord.com/users/190916650143318016"},mdxType:"UserWidgetInline"}))),(0,n.kt)("h2",{id:"largest-discord-bots-extended-version"},"Largest Discord Bots (extended version)"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Description:")," A haste link with the 600 biggest bots on Discord, including growth stats.  ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Links:")," Get the haste ID from ",(0,n.kt)("a",{parentName:"p",href:"https://unbelievaboat.com/api/botlist"},"here"),", then paste it ",(0,n.kt)("a",{parentName:"p",href:"https://haste.unbelievaboat.com/ID"},"here"),' instead of "ID".  ',(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Credit:")," ",(0,n.kt)(i.Z,{data:{type:"discord",id:"261674810914897931",name:"unbelievable",username:"unbelievable",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/261674810914897931/a_7debab0373f3d7de352c9815e2bb015f.gif?size=128",url:"https://discord.com/users/261674810914897931"},mdxType:"UserWidgetInline"}))),(0,n.kt)("h2",{id:"all-official-discord-bots"},"All Official Discord Bots"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Description:")," A list that contains all the bots that were made officially by Discord.   ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Link:")," ",(0,n.kt)("a",{parentName:"p",href:"https://gist.github.com/GeneralSadaf/e58edfb8158df2680aa90ae897c2e327"},"All Official Bots"),"   ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Credit:")," ",(0,n.kt)(i.Z,{data:{notFound:!0,type:"discord",id:"712626099141476383",name:"Unknown User",username:"",discriminator:"0000",avatarUrl:"https://cdn.discordapp.com/embed/avatars/2.png?size=32",url:null},mdxType:"UserWidgetInline"}))),(0,n.kt)("h2",{id:"list-of-libraries"},"List of Libraries"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Description:")," List of all Discord API libraries and their features.   ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Link:")," ",(0,n.kt)("a",{parentName:"p",href:"https://libs.advaith.io/"},"List Of Libraries"),"   ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Credit:")," ",(0,n.kt)(i.Z,{data:{type:"discord",id:"190916650143318016",name:"advaith",username:"advaith",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/190916650143318016/a_ac67d0d00a6dee24919cca724e8a6e83.gif?size=128",url:"https://discord.com/users/190916650143318016"},mdxType:"UserWidgetInline"}))),(0,n.kt)("h2",{id:"discord-api-libs"},"Discord API Libs"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Description:")," A list of all the Discord API libraries.  ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Link:")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apacheli/discord-api-libs"},"Discord API Libs"),"  ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Credit:")," ",(0,n.kt)(i.Z,{data:{notFound:!0,type:"discord",id:"460612586061430806",name:"Unknown User",username:"",discriminator:"0000",avatarUrl:"https://cdn.discordapp.com/embed/avatars/4.png?size=32",url:null},mdxType:"UserWidgetInline"}))),(0,n.kt)("h3",{id:"library-rest--ws-coverage-comparisons"},"Library Rest & WS Coverage Comparisons"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Description:")," A giant feature comparison for what various Discord API libraries do both over REST and WS.   ",(0,n.kt)("br",null),"\n(also check ",(0,n.kt)("a",{parentName:"p",href:"https://discordapi.com/unofficial/"},"Discord API unofficial")," for docs and libraries)   ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Link:")," ",(0,n.kt)("a",{parentName:"p",href:"https://discordapi.com/unofficial/comparison.html"},"Library Rest & WS Coverage Comparisons"))),(0,n.kt)("h2",{id:"discord-gateway-intents-explainer"},"Discord Gateway Intents Explainer"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Description:")," Info about Discord bot intents.  ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Link:")," ",(0,n.kt)("a",{parentName:"p",href:"https://gist.github.com/advaith1/e69bcc1cdd6d0087322734451f15aa2f"},"Discord Gateway Intents Explainer"),"  ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Credit:")," ",(0,n.kt)(i.Z,{data:{type:"discord",id:"190916650143318016",name:"advaith",username:"advaith",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/190916650143318016/a_ac67d0d00a6dee24919cca724e8a6e83.gif?size=128",url:"https://discord.com/users/190916650143318016"},mdxType:"UserWidgetInline"}))),(0,n.kt)("h2",{id:"best-bot-practices"},"Best Bot Practices"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Description:")," Best practices for Discord bots.   ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Link:")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/meew0/discord-bot-best-practices"},"Best Discord Bot Practices"),"   ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Credit:")," ",(0,n.kt)(i.Z,{data:{notFound:!0,type:"discord",id:"66237334693085184",name:"Unknown User",username:"",discriminator:"0000",avatarUrl:"https://cdn.discordapp.com/embed/avatars/4.png?size=32",url:null},mdxType:"UserWidgetInline"}))),(0,n.kt)("h2",{id:"list-of-bot-lists-botblocks"},"List of Bot Lists (BotBlocks)"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Description:")," A centralized list of Discord bot lists.   ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Link:")," ",(0,n.kt)("a",{parentName:"p",href:"https://botblock.org/lists"},"Bots Lists List"))),(0,n.kt)("h2",{id:"dstat"},"DStat"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Description:")," Get statistics about your Discord bot.   ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Link:")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/benricheson101/dstat"},"DStat")," ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Credit:")," ",(0,n.kt)(i.Z,{data:{notFound:!0,type:"discord",id:"255834596766253057",name:"Unknown User",username:"",discriminator:"0000",avatarUrl:"https://cdn.discordapp.com/embed/avatars/1.png?size=32",url:null},mdxType:"UserWidgetInline"}))),(0,n.kt)("h3",{id:"an-idiots-guide"},"An Idiot's Guide"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Description:"),"  The unofficial Discord.js beginner's guide, written by idiots for beginners.   ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Link:")," ",(0,n.kt)("a",{parentName:"p",href:"https://anidiots.guide/"},"An Idiot's Guide")," ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Credit:")," ",(0,n.kt)(i.Z,{data:{type:"github",id:29665791,name:"An Idiot's Guide",username:"AnIdiotsGuide",avatarUrl:"https://avatars.githubusercontent.com/u/29665791?v=4",url:"https://github.com/AnIdiotsGuide"},mdxType:"UserWidgetInline"}))),(0,n.kt)("h2",{id:"you-think-something-is-missing"},"You think something is missing?"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Contact us on our Discord or an email to ",(0,n.kt)("a",{parentName:"p",href:"mailto:hi@disgd.wiki"},"hi@disgd.wiki")," and we will add it as soon as possible.")))}m.isMDXComponent=!0}}]);