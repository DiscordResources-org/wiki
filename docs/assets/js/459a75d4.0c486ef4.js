"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[8107],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,k=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(k,i(i({ref:t},u),{},{components:r})):n.createElement(k,i({ref:t},u))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9304:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294),a=r(2949);function o(e){let{invite:t}=e;const{isDarkTheme:r}=(0,a.I)();return n.createElement("a",{href:`https://discord.gg/${t}`,target:"_blank",rel:"noreferrer"},n.createElement("img",{src:`https://invidget.switchblade.xyz/${t}?theme=${r?"dark":"light"}`,alt:""}))}},6035:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(7294);const a={container:"container_usuQ",children:"children_AcWt",popup:"popup_N1vF",containerHover:"containerHover__1Ny",popupText:"popupText_TNeV",popupTriangle:"popupTriangle_VKJW"};function o(e){let{children:t,onClickOutside:r}=e;const a=(0,n.useRef)(null);function o(e){a.current&&!a.current.contains(e.target)&&r(e)}return(0,n.useEffect)((()=>(document.addEventListener("mousedown",o),()=>document.removeEventListener("mousedown",o))),[]),n.createElement("span",{ref:a},t)}var i=r(2949);function s(e){let{children:t,title:r,mode:s="hover"}=e;const[l,p]=(0,n.useState)(!1),{isDarkTheme:u}=(0,i.I)();return n.createElement(o,{onClickOutside:()=>p(!1)},n.createElement("span",{className:`${a.container} ${"hover"===s?a.containerHover:""}`},n.createElement("span",{onClick:()=>p(!l),className:a.children},t),n.createElement("span",{className:a.popup,style:{display:"click"===s&&l?"block":"none"}},n.createElement("span",{className:a.popupText,style:{backgroundColor:u?"#dadae0":"#2f3136",color:u?"#000":"#fff"}},r),n.createElement("span",{className:a.popupTriangle,style:{borderTopColor:u?"#dadae0":"#2f3136"}}))))}const l={container:"container_Ak5I",widget:"widget_DC7_",userAvatar:"userAvatar_H_Vg",userTag:"userTag_BirN",userUsername:"userUsername_uIS0",userDiscriminator:"userDiscriminator_chY_"};function p(e){let{data:t}=e;const{isDarkTheme:r}=(0,i.I)();return n.createElement(s,{title:n.createElement("span",null,n.createElement("span",{style:{paddingRight:"0.3rem"}},"discord"===t.type?t.id:t.username),n.createElement("a",{href:t.url??"",style:{color:"inherit"},target:"_blank",rel:"noreferrer"},n.createElement("svg",{width:"13.5",height:"13.5","aria-hidden":"true",viewBox:"0 0 24 24",className:"iconExternalLink_node_modules-@docusaurus-theme-classic-lib-next-theme-IconExternalLink-styles-module"},n.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"})))),mode:"click"},n.createElement("span",{className:l.container},n.createElement("span",{className:l.widget,style:{backgroundColor:r?"#2f3136":"#dadae0"}},n.createElement("img",{src:t.avatarUrl,alt:"",className:l.userAvatar}),n.createElement("span",{className:l.userTag},"discord"===t.type?n.createElement(n.Fragment,null,n.createElement("span",{className:l.userUsername,style:{color:r?"#fff":"#000"}},t.name),n.createElement("span",{className:l.userDiscriminator})):n.createElement("span",{className:l.userUsername,style:{color:r?"#fff":"#000"}},t.name)))))}},775:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905)),o=r(6035);r(9304);const i={title:"Programming Related",sidebar_position:2,description:"Programming related tools"},s="Programming Related",l={unversionedId:"resources/tools/programming",id:"resources/tools/programming",title:"Programming Related",description:"Programming related tools",source:"@site/wiki/resources/tools/programming.md",sourceDirName:"resources/tools",slug:"/resources/tools/programming",permalink:"/resources/tools/programming",draft:!1,editUrl:"https://github.com/DiscordResources-org/wiki/edit/master/wiki/resources/tools/programming.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Programming Related",sidebar_position:2,description:"Programming related tools"},sidebar:"tutorialSidebar",previous:{title:"Discord Related",permalink:"/resources/tools/discord"},next:{title:"Other",permalink:"/resources/tools/other"}},p={},u=[{value:"Autocode",id:"autocode",level:2},{value:"Stack Overflow",id:"stack-overflow",level:2},{value:"RapidAPI",id:"rapidapi",level:2},{value:"Some Random API",id:"some-random-api",level:2},{value:"Choose A License",id:"choose-a-license",level:2},{value:"Docker",id:"docker",level:2},{value:"Visual Studio Code",id:"visual-studio-code",level:2},{value:"Docusaurus",id:"docusaurus",level:2},{value:"GitBook",id:"gitbook",level:2},{value:"GitHub\u2019s Guides and Documentation",id:"githubs-guides-and-documentation",level:2},{value:"GitHub Education Pack",id:"github-education-pack",level:2},{value:"Public APIs",id:"public-apis",level:2},{value:"HTTPS Statuses",id:"https-statuses",level:2},{value:"Does My Site Need HTTPS?",id:"does-my-site-need-https",level:2},{value:"HTTP Toolkit",id:"http-toolkit",level:2},{value:"Markdown Guide",id:"markdown-guide",level:2},{value:"Qwerty.dev",id:"qwertydev",level:2},{value:"replit",id:"replit",level:2},{value:"Regex101",id:"regex101",level:2},{value:"RegExp Generator",id:"regexp-generator",level:2},{value:"Regex Crossword",id:"regex-crossword",level:2},{value:"Guide(s) to contributing on Open Source Software",id:"guides-to-contributing-on-open-source-software",level:2},{value:"Big List of Naughty Strings",id:"big-list-of-naughty-strings",level:2},{value:"Free for developers",id:"free-for-developers",level:2},{value:"Paginated discord.js messages",id:"paginated-discordjs-messages",level:2}],c={toc:u},d="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"programming-related"},"Programming Related"),(0,a.kt)("h2",{id:"autocode"},"Autocode"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Description:")," Autocode turns JavaScript (Node.js) functions into scalable web services in an instant, with no configuration required.   ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Link:")," ",(0,a.kt)("a",{parentName:"p",href:"https://autocode.com/"},"Autocode"),"  ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Credit:")," ",(0,a.kt)(o.Z,{data:{type:"discord",id:"746460957651501196",name:"keithwhor",username:"keithwhor",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/746460957651501196/ca873e1d383f87d591cc93308a389144.webp?size=128",url:"https://discord.com/users/746460957651501196"},mdxType:"UserWidgetInline"}))),(0,a.kt)("h2",{id:"stack-overflow"},"Stack Overflow"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Description:")," A place to find solutions and discuss coding related problems.  ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Link:")," ",(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/"},"Stack Overflow"))),(0,a.kt)("h2",{id:"rapidapi"},"RapidAPI"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Description:")," Find APIs to all purposes.  ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Link:")," ",(0,a.kt)("a",{parentName:"p",href:"https://rapidapi.com/"},"RapidAPI"))),(0,a.kt)("h2",{id:"some-random-api"},"Some Random API"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Description:")," Variety of fun endpoints for devs to use.  ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Link:")," ",(0,a.kt)("a",{parentName:"p",href:"https://some-random-api.ml/"},"Some Random API"),"  ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Credit:")," ",(0,a.kt)(o.Z,{data:{type:"discord",id:"423675224395874314",name:"Telk",username:"Telk",discriminator:"4038",avatarUrl:"https://cdn.discordapp.com/avatars/423675224395874314/d874d9aa670130944ff79635cb090598.webp?size=128",url:"https://discord.com/users/423675224395874314"},mdxType:"UserWidgetInline"}))),(0,a.kt)("h2",{id:"choose-a-license"},"Choose A License"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Description:")," Choose a license for your open source project.   ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Link:")," ",(0,a.kt)("a",{parentName:"p",href:"https://choosealicense.com/"},"Choose A License"))),(0,a.kt)("h2",{id:"docker"},"Docker"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Description:")," Simplifies development processes.   ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Link:")," ",(0,a.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker"))),(0,a.kt)("h2",{id:"visual-studio-code"},"Visual Studio Code"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Description:")," Free and biggest code editing tool. ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Link:")," ",(0,a.kt)("a",{parentName:"p",href:"https://code.visualstudio.com"},"Visual studio code"),"  ")),(0,a.kt)("h2",{id:"docusaurus"},"Docusaurus"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Description:")," An optimized site generator in React. Docusaurus helps you to move fast and write content.   ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Link:")," ",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus"))),(0,a.kt)("h2",{id:"gitbook"},"GitBook"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Description:")," Create docs full of utilities and design options.  ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Link:")," ",(0,a.kt)("a",{parentName:"p",href:"https://www.gitbook.com/"},"GitBook"))),(0,a.kt)("h2",{id:"githubs-guides-and-documentation"},"GitHub\u2019s Guides and Documentation"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Description:")," Self explanatory.   ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Link(s):"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en"},"Docs"),"   ",(0,a.kt)("br",null),"\n",(0,a.kt)("a",{parentName:"p",href:"https://guides.github.com/"},"Guides"),"   ",(0,a.kt)("br",null),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.community/"},"Community Help"))),(0,a.kt)("h2",{id:"github-education-pack"},"GitHub Education Pack"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Description:")," Free Developer Tools provided by GitHub Education Pack.   ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Link:")," ",(0,a.kt)("a",{parentName:"p",href:"https://education.github.com/"},"GitHub Education Pack"))),(0,a.kt)("h2",{id:"public-apis"},"Public APIs"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Description:")," Public APIs is a well maintained list of APIs to use in your projects, where each API is categorized and documented.   ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Link:")," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/public-apis/public-apis"},"Public APIs"))),(0,a.kt)("h2",{id:"https-statuses"},"HTTPS Statuses"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Description:")," A list of HTTP status codes.   ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Link:")," ",(0,a.kt)("a",{parentName:"p",href:"https://httpstatuses.com/"},"HTTPS Statuses"))),(0,a.kt)("h2",{id:"does-my-site-need-https"},"Does My Site Need HTTPS?"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Description:")," An informative page explaining the importance of HTTPS.  ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Link:")," ",(0,a.kt)("a",{parentName:"p",href:"https://doesmysiteneedhttps.com/"},"Does My Site Need HTTPS?"))),(0,a.kt)("h2",{id:"http-toolkit"},"HTTP Toolkit"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Description:")," Intercept & view all your HTTP(S) Mock endpoints or entire servers Rewrite, redirect, or inject errors.  ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Link:")," ",(0,a.kt)("a",{parentName:"p",href:"https://httptoolkit.tech/"},"HTTP Toolkit"),"  ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Credit:")," github:@pimterry")),(0,a.kt)("h2",{id:"markdown-guide"},"Markdown Guide"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Description:")," The Markdown Guide is a free and open-source reference guide that explains how to use Markdown, the simple and easy-to-use markup language you can use to format virtually any document.   ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Link:")," ",(0,a.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/"},"Markdown Guide"))),(0,a.kt)("h2",{id:"qwertydev"},"Qwerty.dev"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Description:")," Qwerty.dev (formerly beautifuldingbats.com) is a collection of Unicode tools to help you stand out online.   ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Link:")," ",(0,a.kt)("a",{parentName:"p",href:"https://qwerty.dev/"},"Qwerty.dev"))),(0,a.kt)("h2",{id:"replit"},"replit"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Description:")," An in-browser IDE, compiler, and interpreter supporting 50+ languages.   ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Link:")," ",(0,a.kt)("a",{parentName:"p",href:"https://replit.com/"},"replit"))),(0,a.kt)("h2",{id:"regex101"},"Regex101"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Description:")," Build, test, and debug regex.   ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Link:")," ",(0,a.kt)("a",{parentName:"p",href:"https://regex101.com/"},"Regex101"))),(0,a.kt)("h2",{id:"regexp-generator"},"RegExp Generator"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Description:")," Unicode range RegExp generator.   ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Link:")," ",(0,a.kt)("a",{parentName:"p",href:"https://apps.timwhitlock.info/js/regex#"},"RegExp Generator"))),(0,a.kt)("h2",{id:"regex-crossword"},"Regex Crossword"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Description:")," Learn regex through puzzles and challenges.   ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Link:")," ",(0,a.kt)("a",{parentName:"p",href:"https://regexcrossword.com/"},"Regex Crossword"))),(0,a.kt)("h2",{id:"guides-to-contributing-on-open-source-software"},"Guide(s) to contributing on Open Source Software"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Description:")," A list of various resources to help OSS contributors. ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Link:")," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/freeCodeCamp/how-to-contribute-to-open-source"},"How to Contribute to Open Source")," ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Credit:")," ",(0,a.kt)(o.Z,{data:{type:"github",id:9892522,name:"freeCodeCamp.org",username:"freeCodeCamp",avatarUrl:"https://avatars.githubusercontent.com/u/9892522?v=4",url:"https://github.com/freeCodeCamp"},mdxType:"UserWidgetInline"}))),(0,a.kt)("h2",{id:"big-list-of-naughty-strings"},"Big List of Naughty Strings"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Description:")," A list of strings to help test for edge cases. ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Link:")," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/minimaxir/big-list-of-naughty-strings"},"Big List of Naughty Strings")," ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Credit:")," ",(0,a.kt)(o.Z,{data:{type:"github",id:2179708,name:"Max Woolf",username:"minimaxir",avatarUrl:"https://avatars.githubusercontent.com/u/2179708?v=4",url:"https://github.com/minimaxir"},mdxType:"UserWidgetInline"}))),(0,a.kt)("h2",{id:"free-for-developers"},"Free for developers"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Description:")," List of free offerings for developers. ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Link:")," ",(0,a.kt)("a",{parentName:"p",href:"https://free-for.dev/#/"},"Free for developers")," ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Credit:")," ",(0,a.kt)(o.Z,{data:{type:"github",id:82342,name:"R.I.Pienaar",username:"ripienaar",avatarUrl:"https://avatars.githubusercontent.com/u/82342?v=4",url:"https://github.com/ripienaar"},mdxType:"UserWidgetInline"}))),(0,a.kt)("h2",{id:"paginated-discordjs-messages"},"Paginated discord.js messages"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Description:")," A package that helps make paginated messages easier in discord.js. ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Link:")," ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@sapphire/discord.js-utilities"},"Paginated Discord messages")," ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Credit:")," ",(0,a.kt)(o.Z,{data:{type:"github",id:68874338,name:"Sapphire",username:"sapphiredev",avatarUrl:"https://avatars.githubusercontent.com/u/68874338?v=4",url:"https://github.com/sapphiredev"},mdxType:"UserWidgetInline"}))))}m.isMDXComponent=!0}}]);