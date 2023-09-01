"use strict";(self.webpackChunkdiscord_resource_wiki=self.webpackChunkdiscord_resource_wiki||[]).push([[2905],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9304:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294),a=r(2949);function o(e){let{invite:t}=e;const{isDarkTheme:r}=(0,a.I)();return n.createElement("a",{href:`https://discord.gg/${t}`,target:"_blank",rel:"noreferrer"},n.createElement("img",{src:`https://invidget.switchblade.xyz/${t}?theme=${r?"dark":"light"}`,alt:""}))}},6035:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(7294);const a={container:"container_usuQ",children:"children_AcWt",popup:"popup_N1vF",containerHover:"containerHover__1Ny",popupText:"popupText_TNeV",popupTriangle:"popupTriangle_VKJW"};function o(e){let{children:t,onClickOutside:r}=e;const a=(0,n.useRef)(null);function o(e){a.current&&!a.current.contains(e.target)&&r(e)}return(0,n.useEffect)((()=>(document.addEventListener("mousedown",o),()=>document.removeEventListener("mousedown",o))),[]),n.createElement("span",{ref:a},t)}var i=r(2949);function s(e){let{children:t,title:r,mode:s="hover"}=e;const[c,l]=(0,n.useState)(!1),{isDarkTheme:p}=(0,i.I)();return n.createElement(o,{onClickOutside:()=>l(!1)},n.createElement("span",{className:`${a.container} ${"hover"===s?a.containerHover:""}`},n.createElement("span",{onClick:()=>l(!c),className:a.children},t),n.createElement("span",{className:a.popup,style:{display:"click"===s&&c?"block":"none"}},n.createElement("span",{className:a.popupText,style:{backgroundColor:p?"#dadae0":"#2f3136",color:p?"#000":"#fff"}},r),n.createElement("span",{className:a.popupTriangle,style:{borderTopColor:p?"#dadae0":"#2f3136"}}))))}const c={container:"container_Ak5I",widget:"widget_DC7_",userAvatar:"userAvatar_H_Vg",userTag:"userTag_BirN",userUsername:"userUsername_uIS0",userDiscriminator:"userDiscriminator_chY_"};function l(e){let{data:t}=e;const{isDarkTheme:r}=(0,i.I)();return n.createElement(s,{title:n.createElement("span",null,n.createElement("span",{style:{paddingRight:"0.3rem"}},"discord"===t.type?t.id:t.username),n.createElement("a",{href:t.url??"",style:{color:"inherit"},target:"_blank",rel:"noreferrer"},n.createElement("svg",{width:"13.5",height:"13.5","aria-hidden":"true",viewBox:"0 0 24 24",className:"iconExternalLink_node_modules-@docusaurus-theme-classic-lib-next-theme-IconExternalLink-styles-module"},n.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"})))),mode:"click"},n.createElement("span",{className:c.container},n.createElement("span",{className:c.widget,style:{backgroundColor:r?"#2f3136":"#dadae0"}},n.createElement("img",{src:t.avatarUrl,alt:"",className:c.userAvatar}),n.createElement("span",{className:c.userTag},"discord"===t.type?n.createElement(n.Fragment,null,n.createElement("span",{className:c.userUsername,style:{color:r?"#fff":"#000"}},t.name),n.createElement("span",{className:c.userDiscriminator})):n.createElement("span",{className:c.userUsername,style:{color:r?"#fff":"#000"}},t.name)))))}},636:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(7462),a=(r(7294),r(3905)),o=r(6035);r(9304);const i={title:"Bots - Applications",sidebar_position:5,description:"Discord bot recommendations at the category of applications."},s="Applications",c={unversionedId:"resources/bots/applications",id:"resources/bots/applications",title:"Bots - Applications",description:"Discord bot recommendations at the category of applications.",source:"@site/wiki/resources/bots/applications.md",sourceDirName:"resources/bots",slug:"/resources/bots/applications",permalink:"/resources/bots/applications",draft:!1,editUrl:"https://github.com/DiscordResources-org/wiki/edit/master/wiki/resources/bots/applications.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Bots - Applications",sidebar_position:5,description:"Discord bot recommendations at the category of applications."},sidebar:"tutorialSidebar",previous:{title:"Bots - Giveaways",permalink:"/resources/bots/giveaway"},next:{title:"Bots - Moderation",permalink:"/resources/bots/moderation"}},l={},p=[{value:"Appy",id:"appy",level:3},{value:"Forms",id:"forms",level:3},{value:"Formie",id:"formie",level:3},{value:"You think something is missing?",id:"you-think-something-is-missing",level:2}],d={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"applications"},"Applications"),(0,a.kt)("h3",{id:"appy"},"Appy"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Description:")," Appy is easy to use, powerful and a highly customizable Discord bot. With over 15 customizable\nsettings for your applications to benefit from.! ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Link:"),"  ",(0,a.kt)("a",{parentName:"p",href:"https://appybot.xyz/"},"Appy Website"),"  ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Credit:")," ",(0,a.kt)(o.Z,{data:{notFound:!0,type:"discord",id:"585548631268917254",name:"Unknown User",username:"",discriminator:"0000",avatarUrl:"https://cdn.discordapp.com/embed/avatars/3.png?size=32",url:null},mdxType:"UserWidgetInline"}))),(0,a.kt)("h3",{id:"forms"},"Forms"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Description:")," Create custom forms for your server and send submissions to a channel of your choice using\nwebhooks. ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Link:")," ",(0,a.kt)("a",{parentName:"p",href:"https://gist.github.com/Antouto/8ab83d83482af7c516f0b2b42eaee940"},"Demo, Documentation and Invite Link")," ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Credit:")," ",(0,a.kt)(o.Z,{data:{type:"discord",id:"316860714260234243",name:"antuoto",username:"antuoto",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/316860714260234243/8d4d61dc5abc7c89ec737c4df2ed8608.webp?size=128",url:"https://discord.com/users/316860714260234243"},mdxType:"UserWidgetInline"}))),(0,a.kt)("h3",{id:"formie"},"Formie"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Description:")," Highly customizable and easy to use application bot. Create applications & polls right within discord\nwithout redirecting to any websites. ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Link:")," ",(0,a.kt)("a",{parentName:"p",href:"https://formie.pro/"},"Formie Website")," ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Credit(s):")," ",(0,a.kt)(o.Z,{data:{notFound:!0,type:"discord",id:"590636977100161038",name:"Unknown User",username:"",discriminator:"0000",avatarUrl:"https://cdn.discordapp.com/embed/avatars/4.png?size=32",url:null},mdxType:"UserWidgetInline"})," ",(0,a.kt)(o.Z,{data:{notFound:!0,type:"discord",id:"616745985372192810",name:"Unknown User",username:"",discriminator:"0000",avatarUrl:"https://cdn.discordapp.com/embed/avatars/3.png?size=32",url:null},mdxType:"UserWidgetInline"})," ",(0,a.kt)(o.Z,{data:{notFound:!0,type:"discord",id:"652602491334164490",name:"Unknown User",username:"",discriminator:"0000",avatarUrl:"https://cdn.discordapp.com/embed/avatars/0.png?size=32",url:null},mdxType:"UserWidgetInline"}))),(0,a.kt)("h2",{id:"you-think-something-is-missing"},"You think something is missing?"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Contact us on our Discord or an email to ",(0,a.kt)("a",{parentName:"p",href:"mailto:hi@disgd.wiki"},"hi@disgd.wiki")," and we will add it as soon as possible.")))}m.isMDXComponent=!0}}]);