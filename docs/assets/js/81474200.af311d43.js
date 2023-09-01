"use strict";(self.webpackChunkdiscord_resource_wiki=self.webpackChunkdiscord_resource_wiki||[]).push([[9729],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>f});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},d=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(t),m=a,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return t?n.createElement(f,s(s({ref:r},d),{},{components:t})):n.createElement(f,s({ref:r},d))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9304:(e,r,t)=>{t.d(r,{Z:()=>o});var n=t(7294),a=t(2949);function o(e){let{invite:r}=e;const{isDarkTheme:t}=(0,a.I)();return n.createElement("a",{href:`https://discord.gg/${r}`,target:"_blank",rel:"noreferrer"},n.createElement("img",{src:`https://invidget.switchblade.xyz/${r}?theme=${t?"dark":"light"}`,alt:""}))}},6035:(e,r,t)=>{t.d(r,{Z:()=>l});var n=t(7294);const a={container:"container_usuQ",children:"children_AcWt",popup:"popup_N1vF",containerHover:"containerHover__1Ny",popupText:"popupText_TNeV",popupTriangle:"popupTriangle_VKJW"};function o(e){let{children:r,onClickOutside:t}=e;const a=(0,n.useRef)(null);function o(e){a.current&&!a.current.contains(e.target)&&t(e)}return(0,n.useEffect)((()=>(document.addEventListener("mousedown",o),()=>document.removeEventListener("mousedown",o))),[]),n.createElement("span",{ref:a},r)}var s=t(2949);function i(e){let{children:r,title:t,mode:i="hover"}=e;const[c,l]=(0,n.useState)(!1),{isDarkTheme:d}=(0,s.I)();return n.createElement(o,{onClickOutside:()=>l(!1)},n.createElement("span",{className:`${a.container} ${"hover"===i?a.containerHover:""}`},n.createElement("span",{onClick:()=>l(!c),className:a.children},r),n.createElement("span",{className:a.popup,style:{display:"click"===i&&c?"block":"none"}},n.createElement("span",{className:a.popupText,style:{backgroundColor:d?"#dadae0":"#2f3136",color:d?"#000":"#fff"}},t),n.createElement("span",{className:a.popupTriangle,style:{borderTopColor:d?"#dadae0":"#2f3136"}}))))}const c={container:"container_Ak5I",widget:"widget_DC7_",userAvatar:"userAvatar_H_Vg",userTag:"userTag_BirN",userUsername:"userUsername_uIS0",userDiscriminator:"userDiscriminator_chY_"};function l(e){let{data:r}=e;const{isDarkTheme:t}=(0,s.I)();return n.createElement(i,{title:n.createElement("span",null,n.createElement("span",{style:{paddingRight:"0.3rem"}},"discord"===r.type?r.id:r.username),n.createElement("a",{href:r.url??"",style:{color:"inherit"},target:"_blank",rel:"noreferrer"},n.createElement("svg",{width:"13.5",height:"13.5","aria-hidden":"true",viewBox:"0 0 24 24",className:"iconExternalLink_node_modules-@docusaurus-theme-classic-lib-next-theme-IconExternalLink-styles-module"},n.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"})))),mode:"click"},n.createElement("span",{className:c.container},n.createElement("span",{className:c.widget,style:{backgroundColor:t?"#2f3136":"#dadae0"}},n.createElement("img",{src:r.avatarUrl,alt:"",className:c.userAvatar}),n.createElement("span",{className:c.userTag},"discord"===r.type?n.createElement(n.Fragment,null,n.createElement("span",{className:c.userUsername,style:{color:t?"#fff":"#000"}},r.name),n.createElement("span",{className:c.userDiscriminator})):n.createElement("span",{className:c.userUsername,style:{color:t?"#fff":"#000"}},r.name)))))}},7825:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=t(7462),a=(t(7294),t(3905)),o=(t(6035),t(9304));const s={title:"Official Discord Servers",sidebar_position:2,description:"Official servers owned by Discord."},i="Official Servers",c={unversionedId:"resources/official-servers",id:"resources/official-servers",title:"Official Discord Servers",description:"Official servers owned by Discord.",source:"@site/wiki/resources/official-servers.md",sourceDirName:"resources",slug:"/resources/official-servers",permalink:"/resources/official-servers",draft:!1,editUrl:"https://github.com/DiscordResources-org/wiki/edit/master/wiki/resources/official-servers.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Official Discord Servers",sidebar_position:2,description:"Official servers owned by Discord."},sidebar:"tutorialSidebar",previous:{title:"Basics",permalink:"/resources/basics"},next:{title:"Official Forms",permalink:"/resources/official-forms"}},l={},d=[{value:"Discord Developers",id:"discord-developers",level:2},{value:"Discord Town Hall",id:"discord-town-hall",level:2},{value:"Discord Games Lab",id:"discord-games-lab",level:2},{value:"Discord Safety",id:"discord-safety",level:2}],p={toc:d},u="wrapper";function m(e){let{components:r,...t}=e;return(0,a.kt)(u,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"official-servers"},"Official Servers"),(0,a.kt)("h2",{id:"discord-developers"},"Discord Developers"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Description:")," The official place to discuss Discord's API and SDKs with community developers and Discord staff alike!   ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Link:")," ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/discord-developers"},"Discord Developers"))),(0,a.kt)("p",null,(0,a.kt)(o.Z,{invite:"discord-developers",mdxType:"InviteWidget"})),(0,a.kt)("h2",{id:"discord-town-hall"},"Discord Town Hall"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Description:")," An official general chatting server for people who love Discord.  Find the latest news, events, and a community you love!   ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Link:")," ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/discord-townhall"},"Discord Town Hall"))),(0,a.kt)("p",null,(0,a.kt)(o.Z,{invite:"discord-townhall",mdxType:"InviteWidget"})),(0,a.kt)("h2",{id:"discord-games-lab"},"Discord Games Lab"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Description:")," The official server for Discord's Games Lab. Come play Poker Night, Chess, or Watch Together with your friends!   ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Link:")," ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/discordgameslab"},"Discord Games Lab"))),(0,a.kt)("p",null,(0,a.kt)(o.Z,{invite:"discordgameslab",mdxType:"InviteWidget"})),(0,a.kt)("h2",{id:"discord-safety"},"Discord Safety"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Description:")," Currently under construction.  ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Link:")," ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/safety"},"Discord Safety"))),(0,a.kt)("p",null,(0,a.kt)(o.Z,{invite:"safety",mdxType:"InviteWidget"})))}m.isMDXComponent=!0}}]);