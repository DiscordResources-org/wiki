"use strict";(self.webpackChunkdiscord_resource_wiki=self.webpackChunkdiscord_resource_wiki||[]).push([[5574],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>k});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=o,k=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return r?n.createElement(k,a(a({ref:t},d),{},{components:r})):n.createElement(k,a({ref:t},d))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9304:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7294),o=r(2949);function i(e){let{invite:t}=e;const{isDarkTheme:r}=(0,o.I)();return n.createElement("a",{href:`https://discord.gg/${t}`,target:"_blank",rel:"noreferrer"},n.createElement("img",{src:`https://invidget.switchblade.xyz/${t}?theme=${r?"dark":"light"}`,alt:""}))}},6035:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(7294);const o={container:"container_usuQ",children:"children_AcWt",popup:"popup_N1vF",containerHover:"containerHover__1Ny",popupText:"popupText_TNeV",popupTriangle:"popupTriangle_VKJW"};function i(e){let{children:t,onClickOutside:r}=e;const o=(0,n.useRef)(null);function i(e){o.current&&!o.current.contains(e.target)&&r(e)}return(0,n.useEffect)((()=>(document.addEventListener("mousedown",i),()=>document.removeEventListener("mousedown",i))),[]),n.createElement("span",{ref:o},t)}var a=r(2949);function s(e){let{children:t,title:r,mode:s="hover"}=e;const[c,l]=(0,n.useState)(!1),{isDarkTheme:d}=(0,a.I)();return n.createElement(i,{onClickOutside:()=>l(!1)},n.createElement("span",{className:`${o.container} ${"hover"===s?o.containerHover:""}`},n.createElement("span",{onClick:()=>l(!c),className:o.children},t),n.createElement("span",{className:o.popup,style:{display:"click"===s&&c?"block":"none"}},n.createElement("span",{className:o.popupText,style:{backgroundColor:d?"#dadae0":"#2f3136",color:d?"#000":"#fff"}},r),n.createElement("span",{className:o.popupTriangle,style:{borderTopColor:d?"#dadae0":"#2f3136"}}))))}const c={container:"container_Ak5I",widget:"widget_DC7_",userAvatar:"userAvatar_H_Vg",userTag:"userTag_BirN",userUsername:"userUsername_uIS0",userDiscriminator:"userDiscriminator_chY_"};function l(e){let{data:t}=e;const{isDarkTheme:r}=(0,a.I)();return n.createElement(s,{title:n.createElement("span",null,n.createElement("span",{style:{paddingRight:"0.3rem"}},"discord"===t.type?t.id:t.username),n.createElement("a",{href:t.url??"",style:{color:"inherit"},target:"_blank",rel:"noreferrer"},n.createElement("svg",{width:"13.5",height:"13.5","aria-hidden":"true",viewBox:"0 0 24 24",className:"iconExternalLink_node_modules-@docusaurus-theme-classic-lib-next-theme-IconExternalLink-styles-module"},n.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"})))),mode:"click"},n.createElement("span",{className:c.container},n.createElement("span",{className:c.widget,style:{backgroundColor:r?"#2f3136":"#dadae0"}},n.createElement("img",{src:t.avatarUrl,alt:"",className:c.userAvatar}),n.createElement("span",{className:c.userTag},"discord"===t.type?n.createElement(n.Fragment,null,n.createElement("span",{className:c.userUsername,style:{color:r?"#fff":"#000"}},t.name),n.createElement("span",{className:c.userDiscriminator})):n.createElement("span",{className:c.userUsername,style:{color:r?"#fff":"#000"}},t.name)))))}},7856:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));r(6035),r(9304);const i={title:"Basics",sidebar_position:1,description:"Basic resources"},a="The Basics",s={unversionedId:"resources/basics",id:"resources/basics",title:"Basics",description:"Basic resources",source:"@site/wiki/resources/basics.md",sourceDirName:"resources",slug:"/resources/basics",permalink:"/resources/basics",draft:!1,editUrl:"https://github.com/DiscordResources-org/wiki/edit/master/wiki/resources/basics.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Basics",sidebar_position:1,description:"Basic resources"},sidebar:"tutorialSidebar",previous:{title:"About",permalink:"/"},next:{title:"Official Discord Servers",permalink:"/resources/official-servers"}},c={},l=[{value:"Discord Terms of Service",id:"discord-terms-of-service",level:2},{value:"Discord Privacy Policy",id:"discord-privacy-policy",level:2},{value:"Discord Community Guidelines",id:"discord-community-guidelines",level:2},{value:"Discord Blog",id:"discord-blog",level:2},{value:"Discord Subreddit",id:"discord-subreddit",level:2},{value:"Discord X Page",id:"discord-x-page",level:2},{value:"Discord YouTube Channel",id:"discord-youtube-channel",level:2},{value:"Discord TikTok Page",id:"discord-tiktok-page",level:2},{value:"Discord Help Center",id:"discord-help-center",level:2},{value:"Discord Safety Center",id:"discord-safety-center",level:2},{value:"Client Downloads",id:"client-downloads",level:2}],d={toc:l},p="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"the-basics"},"The Basics"),(0,o.kt)("h2",{id:"discord-terms-of-service"},"Discord Terms of Service"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Description:")," Discord\u2019s Terms of Service is a policy you must agree to when using its platform.   ",(0,o.kt)("br",null),"\nIt includes information ranging from intellectual property rights to account termination.   ",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Link:")," ",(0,o.kt)("a",{parentName:"p",href:"https://dis.gd/terms"},"Terms Of Service"))),(0,o.kt)("h2",{id:"discord-privacy-policy"},"Discord Privacy Policy"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Description:")," Discord's privacy policy regarding users' information.  ",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Link:")," ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/privacy"},"Discord Privacy Policy"))),(0,o.kt)("h2",{id:"discord-community-guidelines"},"Discord Community Guidelines"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Description:")," Discord\u2019s Community Guidelines clarify restrictions and limitations within its platform.   ",(0,o.kt)("br",null),"\nIt ensures everyone has a positive experience and that users act in a well-behaved, disciplined manner.   ",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Link:")," ",(0,o.kt)("a",{parentName:"p",href:"https://dis.gd/guidelines"},"Community Guidelines"))),(0,o.kt)("h2",{id:"discord-blog"},"Discord Blog"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Description:")," Discord\u2019s Blog features announcements, updates, tutorials, and resources; all Discord related.   ",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Link:")," ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/blog"},"Discord Blog"))),(0,o.kt)("h2",{id:"discord-subreddit"},"Discord Subreddit"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Description:")," The unofficial Discord Subreddit.   ",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Link:")," ",(0,o.kt)("a",{parentName:"p",href:"https://www.reddit.com/r/discordapp/"},"Discord Subreddit"))),(0,o.kt)("h2",{id:"discord-x-page"},"Discord X Page"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Description:")," The official Discord page on X.   ",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Link:")," ",(0,o.kt)("a",{parentName:"p",href:"https://x.com/discord"},"Discord X Page"))),(0,o.kt)("h2",{id:"discord-youtube-channel"},"Discord YouTube Channel"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Description:")," The official Discord channel on YouTube.   ",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Link:")," ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/c/discord"},"Discord YouTube Channel"))),(0,o.kt)("h2",{id:"discord-tiktok-page"},"Discord TikTok Page"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Description:")," The official Discord page on TikTok.   ",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Link:")," ",(0,o.kt)("a",{parentName:"p",href:"https://www.tiktok.com/@discord"},"Discord TikTok Page"))),(0,o.kt)("h2",{id:"discord-help-center"},"Discord Help Center"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Description:")," An official Discord navigation page full with useful support articles on every topic.   ",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Link:")," ",(0,o.kt)("a",{parentName:"p",href:"https://support.discord.com"},"Discord Help Center"))),(0,o.kt)("h2",{id:"discord-safety-center"},"Discord Safety Center"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Description:")," A page that provides information about internet privacy & information for parents and educators about how to protect themselves/their children online.  ",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Link:")," ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/safety"},"Discord Safety Center"))),(0,o.kt)("h2",{id:"client-downloads"},"Client Downloads"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Description:")," All official downloadable Discord clients. (Download Discord!)   ",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Link:")," ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/download"},"Discord Clients"))))}u.isMDXComponent=!0}}]);