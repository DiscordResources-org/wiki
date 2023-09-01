"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[9729],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=i,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9304:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(7294),i=r(2949);function a(e){let{invite:t}=e;const{isDarkTheme:r}=(0,i.I)();return n.createElement("a",{href:`https://discord.gg/${t}`,target:"_blank",rel:"noreferrer"},n.createElement("img",{src:`https://invidget.switchblade.xyz/${t}?theme=${r?"dark":"light"}`,alt:""}))}},6035:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(7294);const i={container:"container_usuQ",children:"children_AcWt",popup:"popup_N1vF",containerHover:"containerHover__1Ny",popupText:"popupText_TNeV",popupTriangle:"popupTriangle_VKJW"};function a(e){let{children:t,onClickOutside:r}=e;const i=(0,n.useRef)(null);function a(e){i.current&&!i.current.contains(e.target)&&r(e)}return(0,n.useEffect)((()=>(document.addEventListener("mousedown",a),()=>document.removeEventListener("mousedown",a))),[]),n.createElement("span",{ref:i},t)}var o=r(2949);function s(e){let{children:t,title:r,mode:s="hover"}=e;const[l,c]=(0,n.useState)(!1),{isDarkTheme:d}=(0,o.I)();return n.createElement(a,{onClickOutside:()=>c(!1)},n.createElement("span",{className:`${i.container} ${"hover"===s?i.containerHover:""}`},n.createElement("span",{onClick:()=>c(!l),className:i.children},t),n.createElement("span",{className:i.popup,style:{display:"click"===s&&l?"block":"none"}},n.createElement("span",{className:i.popupText,style:{backgroundColor:d?"#dadae0":"#2f3136",color:d?"#000":"#fff"}},r),n.createElement("span",{className:i.popupTriangle,style:{borderTopColor:d?"#dadae0":"#2f3136"}}))))}const l={container:"container_Ak5I",widget:"widget_DC7_",userAvatar:"userAvatar_H_Vg",userTag:"userTag_BirN",userUsername:"userUsername_uIS0",userDiscriminator:"userDiscriminator_chY_"};function c(e){let{data:t}=e;const{isDarkTheme:r}=(0,o.I)();return n.createElement(s,{title:n.createElement("span",null,n.createElement("span",{style:{paddingRight:"0.3rem"}},"discord"===t.type?t.id:t.username),n.createElement("a",{href:t.url??"",style:{color:"inherit"},target:"_blank",rel:"noreferrer"},n.createElement("svg",{width:"13.5",height:"13.5","aria-hidden":"true",viewBox:"0 0 24 24",className:"iconExternalLink_node_modules-@docusaurus-theme-classic-lib-next-theme-IconExternalLink-styles-module"},n.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"})))),mode:"click"},n.createElement("span",{className:l.container},n.createElement("span",{className:l.widget,style:{backgroundColor:r?"#2f3136":"#dadae0"}},n.createElement("img",{src:t.avatarUrl,alt:"",className:l.userAvatar}),n.createElement("span",{className:l.userTag},"discord"===t.type?n.createElement(n.Fragment,null,n.createElement("span",{className:l.userUsername,style:{color:r?"#fff":"#000"}},t.name),n.createElement("span",{className:l.userDiscriminator})):n.createElement("span",{className:l.userUsername,style:{color:r?"#fff":"#000"}},t.name)))))}},7825:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=r(7462),i=(r(7294),r(3905)),a=(r(6035),r(9304));const o={title:"Official Discord Servers",sidebar_position:2,description:"Official servers owned by Discord."},s="Official Servers",l={unversionedId:"resources/official-servers",id:"resources/official-servers",title:"Official Discord Servers",description:"Official servers owned by Discord.",source:"@site/wiki/resources/official-servers.md",sourceDirName:"resources",slug:"/resources/official-servers",permalink:"/resources/official-servers",draft:!1,editUrl:"https://github.com/DiscordResources-org/wiki/edit/master/wiki/resources/official-servers.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Official Discord Servers",sidebar_position:2,description:"Official servers owned by Discord."},sidebar:"tutorialSidebar",previous:{title:"Basics",permalink:"/resources/basics"},next:{title:"Official Forms",permalink:"/resources/official-forms"}},c={},d=[{value:"Discord Developers",id:"discord-developers",level:2},{value:"Discord Town Hall",id:"discord-town-hall",level:2},{value:"Discord Games Lab",id:"discord-games-lab",level:2},{value:"Discord Safety",id:"discord-safety",level:2},{value:"You think something is missing?",id:"you-think-something-is-missing",level:2}],p={toc:d},u="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"official-servers"},"Official Servers"),(0,i.kt)("h2",{id:"discord-developers"},"Discord Developers"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Description:")," The official place to discuss Discord's API and SDKs with community developers and Discord staff\nalike!   ",(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"Link:")," ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/discord-developers"},"Discord Developers"))),(0,i.kt)("p",null,(0,i.kt)(a.Z,{invite:"discord-developers",mdxType:"InviteWidget"})),(0,i.kt)("h2",{id:"discord-town-hall"},"Discord Town Hall"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Description:")," An official general chatting server for people who love Discord. Find the latest news, events, and a\ncommunity you love!   ",(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"Link:")," ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/discord-townhall"},"Discord Town Hall"))),(0,i.kt)("p",null,(0,i.kt)(a.Z,{invite:"discord-townhall",mdxType:"InviteWidget"})),(0,i.kt)("h2",{id:"discord-games-lab"},"Discord Games Lab"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Description:")," The official server for Discord's Games Lab. Come play Poker Night, Chess, or Watch Together with\nyour friends!   ",(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"Link:")," ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/discordgameslab"},"Discord Games Lab"))),(0,i.kt)("p",null,(0,i.kt)(a.Z,{invite:"discordgameslab",mdxType:"InviteWidget"})),(0,i.kt)("h2",{id:"discord-safety"},"Discord Safety"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Description:")," Currently under construction.  ",(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"Link:")," ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/safety"},"Discord Safety"))),(0,i.kt)("p",null,(0,i.kt)(a.Z,{invite:"safety",mdxType:"InviteWidget"})),(0,i.kt)("h2",{id:"you-think-something-is-missing"},"You think something is missing?"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Contact us on our Discord or an email to ",(0,i.kt)("a",{parentName:"p",href:"mailto:hi@disgd.wiki"},"hi@disgd.wiki"),", and we will add it as soon as possible.")))}m.isMDXComponent=!0}}]);