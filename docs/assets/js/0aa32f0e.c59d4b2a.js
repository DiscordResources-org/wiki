"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[1630],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(r),u=o,h=p["".concat(l,".").concat(u)]||p[u]||m[u]||n;return r?a.createElement(h,s(s({ref:t},d),{},{components:r})):a.createElement(h,s({ref:t},d))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<n;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9304:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(7294),o=r(2949);function n(e){let{invite:t}=e;const{isDarkTheme:r}=(0,o.I)();return a.createElement("a",{href:`https://discord.gg/${t}`,target:"_blank",rel:"noreferrer"},a.createElement("img",{src:`https://invidget.switchblade.xyz/${t}?theme=${r?"dark":"light"}`,alt:""}))}},6035:(e,t,r)=>{r.d(t,{Z:()=>c});var a=r(7294);const o={container:"container_usuQ",children:"children_AcWt",popup:"popup_N1vF",containerHover:"containerHover__1Ny",popupText:"popupText_TNeV",popupTriangle:"popupTriangle_VKJW"};function n(e){let{children:t,onClickOutside:r}=e;const o=(0,a.useRef)(null);function n(e){o.current&&!o.current.contains(e.target)&&r(e)}return(0,a.useEffect)((()=>(document.addEventListener("mousedown",n),()=>document.removeEventListener("mousedown",n))),[]),a.createElement("span",{ref:o},t)}var s=r(2949);function i(e){let{children:t,title:r,mode:i="hover"}=e;const[l,c]=(0,a.useState)(!1),{isDarkTheme:d}=(0,s.I)();return a.createElement(n,{onClickOutside:()=>c(!1)},a.createElement("span",{className:`${o.container} ${"hover"===i?o.containerHover:""}`},a.createElement("span",{onClick:()=>c(!l),className:o.children},t),a.createElement("span",{className:o.popup,style:{display:"click"===i&&l?"block":"none"}},a.createElement("span",{className:o.popupText,style:{backgroundColor:d?"#dadae0":"#2f3136",color:d?"#000":"#fff"}},r),a.createElement("span",{className:o.popupTriangle,style:{borderTopColor:d?"#dadae0":"#2f3136"}}))))}const l={container:"container_Ak5I",widget:"widget_DC7_",userAvatar:"userAvatar_H_Vg",userTag:"userTag_BirN",userUsername:"userUsername_uIS0",userDiscriminator:"userDiscriminator_chY_"};function c(e){let{data:t}=e;const{isDarkTheme:r}=(0,s.I)();return a.createElement(i,{title:a.createElement("span",null,a.createElement("span",{style:{paddingRight:"0.3rem"}},"discord"===t.type?t.id:t.username),a.createElement("a",{href:t.url??"",style:{color:"inherit"},target:"_blank",rel:"noreferrer"},a.createElement("svg",{width:"13.5",height:"13.5","aria-hidden":"true",viewBox:"0 0 24 24",className:"iconExternalLink_node_modules-@docusaurus-theme-classic-lib-next-theme-IconExternalLink-styles-module"},a.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"})))),mode:"click"},a.createElement("span",{className:l.container},a.createElement("span",{className:l.widget,style:{backgroundColor:r?"#2f3136":"#dadae0"}},a.createElement("img",{src:t.avatarUrl,alt:"",className:l.userAvatar}),a.createElement("span",{className:l.userTag},"discord"===t.type?a.createElement(a.Fragment,null,a.createElement("span",{className:l.userUsername,style:{color:r?"#fff":"#000"}},t.name),a.createElement("span",{className:l.userDiscriminator})):a.createElement("span",{className:l.userUsername,style:{color:r?"#fff":"#000"}},t.name)))))}},8459:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var a=r(7462),o=(r(7294),r(3905)),n=r(6035);r(9304);const s={title:"Bots - ModMail",sidebar_position:8,description:"Discord bot recommendations at the category of modmail."},i="ModMail",l={unversionedId:"resources/bots/modmail",id:"resources/bots/modmail",title:"Bots - ModMail",description:"Discord bot recommendations at the category of modmail.",source:"@site/wiki/resources/bots/modmail.md",sourceDirName:"resources/bots",slug:"/resources/bots/modmail",permalink:"/resources/bots/modmail",draft:!1,editUrl:"https://github.com/DiscordResources-org/wiki/edit/master/wiki/resources/bots/modmail.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Bots - ModMail",sidebar_position:8,description:"Discord bot recommendations at the category of modmail."},sidebar:"tutorialSidebar",previous:{title:"Bots - Moderation",permalink:"/resources/bots/moderation"},next:{title:"Bots - Music",permalink:"/resources/bots/music"}},c={},d=[{value:"SupportMail",id:"supportmail",level:3},{value:"Dragory&#39;s ModMail (self-host)",id:"dragorys-modmail-self-host",level:3},{value:"Kyb3r&#39;s Modmail (self-host)",id:"kyb3rs-modmail-self-host",level:3},{value:"Support Bot (self-host)",id:"support-bot-self-host",level:3},{value:"You think something is missing?",id:"you-think-something-is-missing",level:2}],p={toc:d},m="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"modmail"},"ModMail"),(0,o.kt)("h3",{id:"supportmail"},"SupportMail"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Description:")," SupportMail is a multilingual Discord bot that allows easy communication with the mods/server team\nvia the bot's DMs. Another feature is the feature to report users or messages via the context menu to the\nmods.   ",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Link:")," ",(0,o.kt)("a",{parentName:"p",href:"https://supportmail.dev/"},"SupportMail"),"   ",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Credit:")," ",(0,o.kt)(n.Z,{data:{type:"discord",id:"506893652266844162",name:"thelukez",username:"thelukez",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/506893652266844162/6d360fe405392b1757032ba96eef1fe2.webp?size=128",url:"https://discord.com/users/506893652266844162"},mdxType:"UserWidgetInline"}))),(0,o.kt)("h3",{id:"dragorys-modmail-self-host"},"Dragory's ModMail (self-host)"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Description:")," Modmail Bot is a bot for Discord that allows users to DM the bot to contact the server's\nmoderators/staff without messaging them individually or pinging them publicly on the server. These DMs get relayed to\nModMail threads, channels where staff members can reply to and talk with the user. To the user, the entire process\nhappens in DMs with the bot.   ",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Link(s):"),"   ",(0,o.kt)("br",null),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Dragory/modmailbot"},"GitHub"),"   ",(0,o.kt)("br",null),"\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1YGsc0fTAgCXnV4zksDg4iUBsx_7alAYZZt6ojq3Rc10/edit#gid=0"},"Config Template"),"   ",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Credit(s):"),"  ",(0,o.kt)(n.Z,{data:{type:"discord",id:"106391128718245888",name:"dragory",username:"dragory",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/106391128718245888/a_991dbefd2e28a39b5967848b06eb5eae.gif?size=128",url:"https://discord.com/users/106391128718245888"},mdxType:"UserWidgetInline"})," ",(0,o.kt)(n.Z,{data:{type:"discord",id:"200987752794292224",name:"naviking",username:"naviking",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/200987752794292224/a_ad10b77bb6b8a28ade862a699dd1fc01.gif?size=128",url:"https://discord.com/users/200987752794292224"},mdxType:"UserWidgetInline"}))),(0,o.kt)("h3",{id:"kyb3rs-modmail-self-host"},"Kyb3r's Modmail (self-host)"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Description:")," Modmail is similar to Reddit's ModMail, both in functionality and purpose. It serves as a shared\ninbox for server staff to communicate with their users in a seamless way.   ",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Link:")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kyb3r/modmail"},"Kyb3r\u2019s Modmail"),"   ",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Credit:")," ",(0,o.kt)(n.Z,{data:{notFound:!0,type:"discord",id:"github:kyb3r",name:"Unknown User",username:"",discriminator:"0000",avatarUrl:"https://cdn.discordapp.com/embed/avatars/NaN.png?size=32",url:null},mdxType:"UserWidgetInline"}))),(0,o.kt)("h3",{id:"support-bot-self-host"},"Support Bot (self-host)"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Description:")," A simple and lightweight Discord support/automated help desk!   ",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Link:")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Gideon-foxo/support-bot"},"Support Bot"),"   ",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Credit:")," ",(0,o.kt)(n.Z,{data:{type:"discord",id:"524371727812263948",name:"gideon_foxo",username:"gideon_foxo",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/524371727812263948/f7c1473c0cdc66f51657cfedefe5f67a.webp?size=128",url:"https://discord.com/users/524371727812263948"},mdxType:"UserWidgetInline"}))),(0,o.kt)("h2",{id:"you-think-something-is-missing"},"You think something is missing?"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Contact us on our Discord or an email to ",(0,o.kt)("a",{parentName:"p",href:"mailto:hi@disgd.wiki"},"hi@disgd.wiki"),", and we will add it as soon as possible.")))}u.isMDXComponent=!0}}]);