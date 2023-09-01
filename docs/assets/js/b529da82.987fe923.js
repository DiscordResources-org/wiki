"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[7302],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(r),u=a,f=m["".concat(c,".").concat(u)]||m[u]||p[u]||o;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9304:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294),a=r(2949);function o(e){let{invite:t}=e;const{isDarkTheme:r}=(0,a.I)();return n.createElement("a",{href:`https://discord.gg/${t}`,target:"_blank",rel:"noreferrer"},n.createElement("img",{src:`https://invidget.switchblade.xyz/${t}?theme=${r?"dark":"light"}`,alt:""}))}},6035:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(7294);const a={container:"container_usuQ",children:"children_AcWt",popup:"popup_N1vF",containerHover:"containerHover__1Ny",popupText:"popupText_TNeV",popupTriangle:"popupTriangle_VKJW"};function o(e){let{children:t,onClickOutside:r}=e;const a=(0,n.useRef)(null);function o(e){a.current&&!a.current.contains(e.target)&&r(e)}return(0,n.useEffect)((()=>(document.addEventListener("mousedown",o),()=>document.removeEventListener("mousedown",o))),[]),n.createElement("span",{ref:a},t)}var i=r(2949);function s(e){let{children:t,title:r,mode:s="hover"}=e;const[c,l]=(0,n.useState)(!1),{isDarkTheme:d}=(0,i.I)();return n.createElement(o,{onClickOutside:()=>l(!1)},n.createElement("span",{className:`${a.container} ${"hover"===s?a.containerHover:""}`},n.createElement("span",{onClick:()=>l(!c),className:a.children},t),n.createElement("span",{className:a.popup,style:{display:"click"===s&&c?"block":"none"}},n.createElement("span",{className:a.popupText,style:{backgroundColor:d?"#dadae0":"#2f3136",color:d?"#000":"#fff"}},r),n.createElement("span",{className:a.popupTriangle,style:{borderTopColor:d?"#dadae0":"#2f3136"}}))))}const c={container:"container_Ak5I",widget:"widget_DC7_",userAvatar:"userAvatar_H_Vg",userTag:"userTag_BirN",userUsername:"userUsername_uIS0",userDiscriminator:"userDiscriminator_chY_"};function l(e){let{data:t}=e;const{isDarkTheme:r}=(0,i.I)();return n.createElement(s,{title:n.createElement("span",null,n.createElement("span",{style:{paddingRight:"0.3rem"}},"discord"===t.type?t.id:t.username),n.createElement("a",{href:t.url??"",style:{color:"inherit"},target:"_blank",rel:"noreferrer"},n.createElement("svg",{width:"13.5",height:"13.5","aria-hidden":"true",viewBox:"0 0 24 24",className:"iconExternalLink_node_modules-@docusaurus-theme-classic-lib-next-theme-IconExternalLink-styles-module"},n.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"})))),mode:"click"},n.createElement("span",{className:c.container},n.createElement("span",{className:c.widget,style:{backgroundColor:r?"#2f3136":"#dadae0"}},n.createElement("img",{src:t.avatarUrl,alt:"",className:c.userAvatar}),n.createElement("span",{className:c.userTag},"discord"===t.type?n.createElement(n.Fragment,null,n.createElement("span",{className:c.userUsername,style:{color:r?"#fff":"#000"}},t.name),n.createElement("span",{className:c.userDiscriminator})):n.createElement("span",{className:c.userUsername,style:{color:r?"#fff":"#000"}},t.name)))))}},919:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=r(7462),a=(r(7294),r(3905)),o=r(6035);r(9304);const i={title:"Moderation",sidebar_position:7,description:"Moderation resources"},s="Moderation",c={unversionedId:"resources/moderation",id:"resources/moderation",title:"Moderation",description:"Moderation resources",source:"@site/wiki/resources/moderation.md",sourceDirName:"resources",slug:"/resources/moderation",permalink:"/resources/moderation",draft:!1,editUrl:"https://github.com/DiscordResources-org/wiki/edit/master/wiki/resources/moderation.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Moderation",sidebar_position:7,description:"Moderation resources"},sidebar:"tutorialSidebar",previous:{title:"Official Discord Badges",permalink:"/resources/official-badges"},next:{title:"Programs",permalink:"/resources/programs"}},l={},d=[{value:"Discord Moderator Academy",id:"discord-moderator-academy",level:2},{value:"Discord Moderator Ecosystem",id:"discord-moderator-ecosystem",level:2},{value:"Naviking\u2019s Moderation Templates &amp; Tools Documentation",id:"navikings-moderation-templates--tools-documentation",level:2},{value:"Moderation Guidelines",id:"moderation-guidelines",level:2},{value:"A Guide To Civil Conversation",id:"a-guide-to-civil-conversation",level:2}],m={toc:d},p="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"moderation"},"Moderation"),(0,a.kt)("h2",{id:"discord-moderator-academy"},"Discord Moderator Academy"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Description:")," Discord\u2019s official resources for moderators, written by moderators.   ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Link:")," ",(0,a.kt)("a",{parentName:"p",href:"https://dis.gd/moderation"},"Discord Moderator Academy"),"   ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Credit:")," Multiple Authors (Discord Moderator Ecosystem)")),(0,a.kt)("h2",{id:"discord-moderator-ecosystem"},"Discord Moderator Ecosystem"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Description:")," Official ecosystem for moderators to discuss moderation.   ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Link:")," ",(0,a.kt)("a",{parentName:"p",href:"https://discord.com/blog/announcing-the-discord-moderator-academy-exam"},"Discord Moderator Ecosystem"))),(0,a.kt)("h2",{id:"navikings-moderation-templates--tools-documentation"},"Naviking\u2019s Moderation Templates & Tools Documentation"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Description:")," A drive file full of moderation resources.   ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Link:")," ",(0,a.kt)("a",{parentName:"p",href:"https://drive.google.com/drive/folders/1vqdEEBqqCftZgMTkgqK8sKzxtdMANu4U"},"Naviking\u2019s Templates and Tools Documentation"),"   ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Credit:")," ",(0,a.kt)(o.Z,{data:{type:"discord",id:"200987752794292224",name:"naviking",username:"naviking",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/200987752794292224/a_ad10b77bb6b8a28ade862a699dd1fc01.gif?size=128",url:"https://discord.com/users/200987752794292224"},mdxType:"UserWidgetInline"}))),(0,a.kt)("h2",{id:"moderation-guidelines"},"Moderation Guidelines"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Description:")," A template to help new staff with onboarding and understanding the server's moderation practices.   ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Link:")," ",(0,a.kt)("a",{parentName:"p",href:"https://staff-guidelines.super.site/"},"Moderation Guidelines"),"   ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Credit:")," ",(0,a.kt)(o.Z,{data:{type:"discord",id:"366652352125599744",name:"matta.official",username:"matta.official",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/366652352125599744/276d2fd99a788f03b7533f1172a85bdd.webp?size=128",url:"https://discord.com/users/366652352125599744"},mdxType:"UserWidgetInline"}))),(0,a.kt)("h2",{id:"a-guide-to-civil-conversation"},"A Guide To Civil Conversation"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Description:")," Extensive, yet polished community ruleset, aimed at reducing the work of moderators.   ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Link:")," ",(0,a.kt)("a",{parentName:"p",href:"https://conversation.guide/"},"A Guide To Civil Conversation"),"   ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Credit:")," ",(0,a.kt)(o.Z,{data:{type:"discord",id:"102102717165506560",name:"ravy",username:"ravy",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/102102717165506560/329e3e37802ff8aef9024cff0fa7ab5b.webp?size=128",url:"https://discord.com/users/102102717165506560"},mdxType:"UserWidgetInline"}))))}u.isMDXComponent=!0}}]);