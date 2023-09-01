"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[4087],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},k="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),k=p(n),u=r,m=k["".concat(s,".").concat(u)]||k[u]||d[u]||o;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[k]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9304:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(2949);function o(e){let{invite:t}=e;const{isDarkTheme:n}=(0,r.I)();return a.createElement("a",{href:`https://discord.gg/${t}`,target:"_blank",rel:"noreferrer"},a.createElement("img",{src:`https://invidget.switchblade.xyz/${t}?theme=${n?"dark":"light"}`,alt:""}))}},6035:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(7294);const r={container:"container_usuQ",children:"children_AcWt",popup:"popup_N1vF",containerHover:"containerHover__1Ny",popupText:"popupText_TNeV",popupTriangle:"popupTriangle_VKJW"};function o(e){let{children:t,onClickOutside:n}=e;const r=(0,a.useRef)(null);function o(e){r.current&&!r.current.contains(e.target)&&n(e)}return(0,a.useEffect)((()=>(document.addEventListener("mousedown",o),()=>document.removeEventListener("mousedown",o))),[]),a.createElement("span",{ref:r},t)}var l=n(2949);function i(e){let{children:t,title:n,mode:i="hover"}=e;const[s,p]=(0,a.useState)(!1),{isDarkTheme:c}=(0,l.I)();return a.createElement(o,{onClickOutside:()=>p(!1)},a.createElement("span",{className:`${r.container} ${"hover"===i?r.containerHover:""}`},a.createElement("span",{onClick:()=>p(!s),className:r.children},t),a.createElement("span",{className:r.popup,style:{display:"click"===i&&s?"block":"none"}},a.createElement("span",{className:r.popupText,style:{backgroundColor:c?"#dadae0":"#2f3136",color:c?"#000":"#fff"}},n),a.createElement("span",{className:r.popupTriangle,style:{borderTopColor:c?"#dadae0":"#2f3136"}}))))}const s={container:"container_Ak5I",widget:"widget_DC7_",userAvatar:"userAvatar_H_Vg",userTag:"userTag_BirN",userUsername:"userUsername_uIS0",userDiscriminator:"userDiscriminator_chY_"};function p(e){let{data:t}=e;const{isDarkTheme:n}=(0,l.I)();return a.createElement(i,{title:a.createElement("span",null,a.createElement("span",{style:{paddingRight:"0.3rem"}},"discord"===t.type?t.id:t.username),a.createElement("a",{href:t.url??"",style:{color:"inherit"},target:"_blank",rel:"noreferrer"},a.createElement("svg",{width:"13.5",height:"13.5","aria-hidden":"true",viewBox:"0 0 24 24",className:"iconExternalLink_node_modules-@docusaurus-theme-classic-lib-next-theme-IconExternalLink-styles-module"},a.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"})))),mode:"click"},a.createElement("span",{className:s.container},a.createElement("span",{className:s.widget,style:{backgroundColor:n?"#2f3136":"#dadae0"}},a.createElement("img",{src:t.avatarUrl,alt:"",className:s.userAvatar}),a.createElement("span",{className:s.userTag},"discord"===t.type?a.createElement(a.Fragment,null,a.createElement("span",{className:s.userUsername,style:{color:n?"#fff":"#000"}},t.name),a.createElement("span",{className:s.userDiscriminator})):a.createElement("span",{className:s.userUsername,style:{color:n?"#fff":"#000"}},t.name)))))}},2256:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),o=n(6035);n(9304);const l={title:"Other",sidebar_position:3,description:"Other useful tools"},i="Other",s={unversionedId:"resources/tools/other",id:"resources/tools/other",title:"Other",description:"Other useful tools",source:"@site/wiki/resources/tools/other.md",sourceDirName:"resources/tools",slug:"/resources/tools/other",permalink:"/resources/tools/other",draft:!1,editUrl:"https://github.com/DiscordResources-org/wiki/edit/master/wiki/resources/tools/other.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Other",sidebar_position:3,description:"Other useful tools"},sidebar:"tutorialSidebar",previous:{title:"Programming Related",permalink:"/resources/tools/programming"},next:{title:"Phishing Related",permalink:"/resources/tools/phishing"}},p={},c=[{value:"Blank Characters",id:"blank-characters",level:2},{value:"Bitwarden",id:"bitwarden",level:2},{value:"Blobs",id:"blobs",level:2},{value:"CitizenLab",id:"citizenlab",level:2},{value:"CleanURLs",id:"cleanurls",level:2},{value:"Polywork",id:"polywork",level:2},{value:"Rize",id:"rize",level:2},{value:"Files",id:"files",level:2},{value:"One Commander",id:"one-commander",level:2},{value:"Carrd",id:"carrd",level:2},{value:"Down for Everyone or Just Me",id:"down-for-everyone-or-just-me",level:2},{value:"KeyCDN Tools",id:"keycdn-tools",level:2},{value:"Dehashed",id:"dehashed",level:2},{value:"Terms Of Service ; Didn&#39;t Read",id:"terms-of-service--didnt-read",level:2},{value:"TimezoneWizard",id:"timezonewizard",level:2},{value:"C.O.A.C.H",id:"coach",level:2},{value:"Empty Characters",id:"empty-characters",level:2},{value:"Awesome",id:"awesome",level:2},{value:"Internet Slang",id:"internet-slang",level:2},{value:"Obsidian",id:"obsidian",level:2},{value:"Trello",id:"trello",level:2},{value:"Notion",id:"notion",level:2},{value:"Tina",id:"tina",level:2},{value:"Nord Theme",id:"nord-theme",level:2},{value:"PronounDB",id:"pronoundb",level:2},{value:"Pronouns.page",id:"pronounspage",level:2},{value:"Flaticon",id:"flaticon",level:2},{value:"Photopea",id:"photopea",level:2},{value:"Random Sites",id:"random-sites",level:2},{value:"ShareX",id:"sharex",level:2},{value:"pfp.lgbt",id:"pfplgbt",level:2},{value:"Statista",id:"statista",level:2},{value:"Semantic Scholar",id:"semantic-scholar",level:2},{value:"Simple Analytics",id:"simple-analytics",level:2},{value:"Grafana",id:"grafana",level:2},{value:"The LaTeX Project",id:"the-latex-project",level:2},{value:"Web Archives",id:"web-archives",level:2},{value:"AlternativeTo",id:"alternativeto",level:2},{value:"Internet Download Manager",id:"internet-download-manager",level:2},{value:"Whois Lookup",id:"whois-lookup",level:2},{value:"Status Page",id:"status-page",level:2},{value:"Tone Indicators Website",id:"tone-indicators-website",level:2},{value:"URL Scanner",id:"url-scanner",level:2},{value:"URL Expander",id:"url-expander",level:2},{value:"Waifu2x",id:"waifu2x",level:2},{value:"True Size",id:"true-size",level:2},{value:"Visual Center",id:"visual-center",level:2},{value:"Lightmode is Necessary",id:"lightmode-is-necessary",level:2},{value:"ProtonMail",id:"protonmail",level:2},{value:"dCode",id:"dcode",level:2},{value:"Computer Hope",id:"computer-hope",level:2},{value:"Skill Icons",id:"skill-icons",level:2},{value:"Savefrom",id:"savefrom",level:2},{value:"Tixte",id:"tixte",level:2},{value:"You think something is missing?",id:"you-think-something-is-missing",level:2}],k={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"other"},"Other"),(0,r.kt)("h2",{id:"blank-characters"},"Blank Characters"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Description:")," A list of blank Unicode characters. ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Link:")," ",(0,r.kt)("a",{parentName:"p",href:"https://character.construction/blanks"},"Blank Charcaters"))),(0,r.kt)("h2",{id:"bitwarden"},"Bitwarden"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Description:")," Open source password manager.   ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Link:")," ",(0,r.kt)("a",{parentName:"p",href:"https://bitwarden.com/"},"Bitwarden"))),(0,r.kt)("h2",{id:"blobs"},"Blobs"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Description:")," A server list of blob emojis. ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Link:")," ",(0,r.kt)("a",{parentName:"p",href:"https://blobs.gg/"},"Blobs")," ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Credit:")," ",(0,r.kt)(o.Z,{data:{type:"discord",id:"69198249432449024",name:"lostluma",username:"lostluma",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/69198249432449024/49a9be643d7e93663a1dcd3c0c89a00e.webp?size=128",url:"https://discord.com/users/69198249432449024"},mdxType:"UserWidgetInline"}))),(0,r.kt)("h2",{id:"citizenlab"},"CitizenLab"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Description:")," URL testing lists intended to help in testing URL censorship, divided by country codes.   ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Link:")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/citizenlab/test-lists"},"CitizenLab"))),(0,r.kt)("h2",{id:"cleanurls"},"CleanURLs"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Description:")," ClearURLs is an add-on based on the new WebExtensions technology and will automatically remove\ntracking elements from URLs to help protect your privacy.  ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Link(s):"),"  ",(0,r.kt)("br",null),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ClearURLs/Addon"},"CleanUrls"),"  ",(0,r.kt)("br",null),"\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.clearurls.xyz/latest/"},"CleanUrls Docs"),"  ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Credit:")," ",(0,r.kt)(o.Z,{data:{notFound:!0,type:"discord",id:"github:KevinRoebert",name:"Unknown User",username:"",discriminator:"0000",avatarUrl:"https://cdn.discordapp.com/embed/avatars/NaN.png?size=32",url:null},mdxType:"UserWidgetInline"}))),(0,r.kt)("h2",{id:"polywork"},"Polywork"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Description:")," Polywork is a professional social network that lets users create a free personal webpage, share what\nthey're up to both personally and professionally, and send collaboration requests to others.  ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Link:")," ",(0,r.kt)("a",{parentName:"p",href:"https://www.polywork.com/"},"Polywork"))),(0,r.kt)("h2",{id:"rize"},"Rize"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Description:")," Rize is an intelligent time tracker that improves your focus and helps you build better work\nhabits. ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Link:")," ",(0,r.kt)("a",{parentName:"p",href:"https://rize.io"},"Rize"))),(0,r.kt)("h2",{id:"files"},"Files"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Description:")," File manager for Windows, focused on design.  ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Link:")," ",(0,r.kt)("a",{parentName:"p",href:"https://files.community/"},"Files"))),(0,r.kt)("h2",{id:"one-commander"},"One Commander"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Description:")," File manager for Windows, focused on productivity.  ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Link:")," ",(0,r.kt)("a",{parentName:"p",href:"https://www.onecommander.com/"},"One Commander"))),(0,r.kt)("h2",{id:"carrd"},"Carrd"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Description:")," Build one-page websites.   ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Link:")," ",(0,r.kt)("a",{parentName:"p",href:"https://carrd.co/"},"Carrd"))),(0,r.kt)("h2",{id:"down-for-everyone-or-just-me"},"Down for Everyone or Just Me"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Description:")," A site that checks if a domain is up.   ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Link:")," ",(0,r.kt)("a",{parentName:"p",href:"https://downforeveryoneorjustme.com/"},"Down for Everyone or Just Me"))),(0,r.kt)("h2",{id:"keycdn-tools"},"KeyCDN Tools"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Description:")," Many tools related to web, networking and security checkings.  ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Link:")," ",(0,r.kt)("a",{parentName:"p",href:"https://tools.keycdn.com/"},"KeyCDN Tools"))),(0,r.kt)("h2",{id:"dehashed"},"Dehashed"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Description:")," Tool to find data breaches that contain the username, email, IP, address, phone, vin, etc.  ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Link:")," ",(0,r.kt)("a",{parentName:"p",href:"https://dehashed.com"},"Dehashed"))),(0,r.kt)("h2",{id:"terms-of-service--didnt-read"},"Terms Of Service ; Didn't Read"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Description:")," Summarized terms of service for all known companies.  ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Link:")," ",(0,r.kt)("a",{parentName:"p",href:"https://tosdr.org/"},"Terms Of Service ; Didn't Read"))),(0,r.kt)("h2",{id:"timezonewizard"},"TimezoneWizard"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Description:")," Easy to use tool for finding timezones all across the globe.  ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Link:")," ",(0,r.kt)("a",{parentName:"p",href:"https://timezonewizard.com/"},"TimezoneWizard"))),(0,r.kt)("h2",{id:"coach"},"C.O.A.C.H"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Description:")," Tidying up your online security, step by step.   ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Link:")," ",(0,r.kt)("a",{parentName:"p",href:"http://www.crashoverridenetwork.com/coach.html"},"C.O.A.C.H"))),(0,r.kt)("h2",{id:"empty-characters"},"Empty Characters"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Description:")," List and methods to Unicode empty characters.   ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Link:")," ",(0,r.kt)("a",{parentName:"p",href:"https://emptycharacter.com"},"Empty Characters"))),(0,r.kt)("h2",{id:"awesome"},"Awesome"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Description:")," Collection of lists about various topics.   ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Link:")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sindresorhus/awesome"},"Awesome"),"  ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Credit:")," ",(0,r.kt)(o.Z,{data:{notFound:!0,type:"discord",id:"github:sindresorhus",name:"Unknown User",username:"",discriminator:"0000",avatarUrl:"https://cdn.discordapp.com/embed/avatars/NaN.png?size=32",url:null},mdxType:"UserWidgetInline"}))),(0,r.kt)("h2",{id:"internet-slang"},"Internet Slang"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Description:")," A list of slang used across the internet.   ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Link:")," ",(0,r.kt)("a",{parentName:"p",href:"https://www.ruf.rice.edu/~kemmer/Words04/usage/slang_internet.html"},"Internet Slang"))),(0,r.kt)("h2",{id:"obsidian"},"Obsidian"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Description:")," An advanced note-taking app.  ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Link:")," ",(0,r.kt)("a",{parentName:"p",href:"https://obsidian.md/"},"Obsidian"))),(0,r.kt)("h2",{id:"trello"},"Trello"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Description:")," Manage collaborative projects easily.  ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Link:")," ",(0,r.kt)("a",{parentName:"p",href:"https://trello.com/"},"Trello"))),(0,r.kt)("h2",{id:"notion"},"Notion"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Description:")," A product for creating workflows and websites, fully customizable for your needs.   ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Link:")," ",(0,r.kt)("a",{parentName:"p",href:"https://www.notion.so/"},"Notion"))),(0,r.kt)("h2",{id:"tina"},"Tina"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Description:")," Open-source content management tool.  ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Link:")," ",(0,r.kt)("a",{parentName:"p",href:"https://tina.io/"},"Tina"))),(0,r.kt)("h2",{id:"nord-theme"},"Nord Theme"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Description:")," An arctic-inspired color palette and theme collection for various sites and applications.   ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Link:")," ",(0,r.kt)("a",{parentName:"p",href:"https://www.nordtheme.com/"},"Nord Theme"))),(0,r.kt)("h2",{id:"pronoundb"},"PronounDB"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Description:")," Pronouns intergration for websites and apps.  ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Link:")," ",(0,r.kt)("a",{parentName:"p",href:"https://pronoundb.org/"},"ProunounDB"),"  ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Credit:")," ",(0,r.kt)(o.Z,{data:{type:"discord",id:"94762492923748352",name:"sleepycat",username:"sleepycat",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/94762492923748352/ac68234d445cfa302cd46e02f7805ee4.webp?size=128",url:"https://discord.com/users/94762492923748352"},mdxType:"UserWidgetInline"}))),(0,r.kt)("h2",{id:"pronounspage"},"Pronouns.page"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Description:")," Information about nonbinary and gender neutral language.  ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Link:")," ",(0,r.kt)("a",{parentName:"p",href:"https://en.pronouns.page/"},"Pronouns.page"))),(0,r.kt)("h2",{id:"flaticon"},"Flaticon"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Description:")," Free vector icons and stickers for your projects. Resources made by and for designers.   ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Link:")," ",(0,r.kt)("a",{parentName:"p",href:"https://www.flaticon.com/"},"Flaticon"))),(0,r.kt)("h2",{id:"photopea"},"Photopea"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Description:")," Free online image editor.   ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Link:")," ",(0,r.kt)("a",{parentName:"p",href:"https://www.photopea.com/"},"Photopea"))),(0,r.kt)("h2",{id:"random-sites"},"Random Sites"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Description:")," Generates a small list of random website URLs.   ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Link:")," ",(0,r.kt)("a",{parentName:"p",href:"https://www.randomlists.com/websites"},"Random Sites"))),(0,r.kt)("h2",{id:"sharex"},"ShareX"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Description:")," Screen capture, file sharing, and productivity tool. ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Link:")," ",(0,r.kt)("a",{parentName:"p",href:"https://getsharex.com/"},"ShareX"),"   ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Credit:")," ",(0,r.kt)(o.Z,{data:{type:"discord",id:"95576568025329664",name:"jaex",username:"jaex",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/95576568025329664/a_f66e930cc3fb3edb4c1add6d98ad8fcc.gif?size=128",url:"https://discord.com/users/95576568025329664"},mdxType:"UserWidgetInline"}))),(0,r.kt)("h2",{id:"pfplgbt"},"pfp.lgbt"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Description:"),' A tool to "LGBTQ+fy" your images.  ',(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Link:")," ",(0,r.kt)("a",{parentName:"p",href:"https://pfp.lgbt/"},"pfp.lgbt"),"  ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Credit:")," ",(0,r.kt)(o.Z,{data:{type:"discord",id:"109710323094683648",name:"kelwing",username:"kelwing",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/109710323094683648/acd006ea1595b620b606393fbca62e1f.webp?size=128",url:"https://discord.com/users/109710323094683648"},mdxType:"UserWidgetInline"})," ",(0,r.kt)(o.Z,{data:{type:"discord",id:"139836912335716352",name:"vladdy",username:"vladdy",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/139836912335716352/a_aa8a349efd027334c0d779ceebd5d734.gif?size=128",url:"https://discord.com/users/139836912335716352"},mdxType:"UserWidgetInline"}))),(0,r.kt)("h2",{id:"statista"},"Statista"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Description:")," Statistics and business data platform for over 170 industries.   ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Link:")," ",(0,r.kt)("a",{parentName:"p",href:"https://statista.com"},"Statista"))),(0,r.kt)("h2",{id:"semantic-scholar"},"Semantic Scholar"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Description:")," Semantic Scholar uses AI to help you find scientific articles without suffering information\noverload. ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Link:")," ",(0,r.kt)("a",{parentName:"p",href:"https://www.semanticscholar.org/"},"Semantic Scholar"))),(0,r.kt)("h2",{id:"simple-analytics"},"Simple Analytics"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Description:")," Simple, clean, and friendly analytics for sites.  ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Link:")," ",(0,r.kt)("a",{parentName:"p",href:"https://simpleanalytics.com/"},"Simple Analytics"))),(0,r.kt)("h2",{id:"grafana"},"Grafana"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Description:")," Query, visualize, alert on, and understand your data with aesthetic dashboards.  ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Link:")," ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/"},"Grafana"))),(0,r.kt)("h2",{id:"the-latex-project"},"The LaTeX Project"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Description:")," LaTeX is a document preparation system, useful for scientific or technical documents. ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Link:")," ",(0,r.kt)("a",{parentName:"p",href:"https://latex-project.org"},"The LaTeX Project")," ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Credit:")," ",(0,r.kt)(o.Z,{data:{notFound:!0,type:"discord",id:"github:latex3",name:"Unknown User",username:"",discriminator:"0000",avatarUrl:"https://cdn.discordapp.com/embed/avatars/NaN.png?size=32",url:null},mdxType:"UserWidgetInline"}))),(0,r.kt)("h2",{id:"web-archives"},"Web Archives"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Description:")," Explore web pages saved over time.  ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Links:"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://web.archive.org/"},"Web Archives"),"  ",(0,r.kt)("br",null),"\n",(0,r.kt)("a",{parentName:"p",href:"https://archive.is/"},"Archive.is"))),(0,r.kt)("h2",{id:"alternativeto"},"AlternativeTo"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Description:")," AlternativeTo is a crowd-sourced website that seeks to find alternate software for various\npurposes. ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Link:")," ",(0,r.kt)("a",{parentName:"p",href:"https://alternativeto.net/"},"AlternativeTo"))),(0,r.kt)("h2",{id:"internet-download-manager"},"Internet Download Manager"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Description:")," A Tool that makes downloading videos and files through the browser easy.  ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Link:")," ",(0,r.kt)("a",{parentName:"p",href:"https://www.internetdownloadmanager.com/download.html"},"Download Internet Download Manager"))),(0,r.kt)("h2",{id:"whois-lookup"},"Whois Lookup"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Description:")," Lookup information about domains or IP addresses.  ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Link:")," ",(0,r.kt)("a",{parentName:"p",href:"https://whois.domaintools.com/"},"Whois Lookup"))),(0,r.kt)("h2",{id:"status-page"},"Status Page"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Description:")," Communicate real-time status to your members.   ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Link:")," ",(0,r.kt)("a",{parentName:"p",href:"https://statuspage.io"},"Status Page"))),(0,r.kt)("h2",{id:"tone-indicators-website"},"Tone Indicators Website"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Description:")," Find and understand text tone indicators.   ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Link:")," ",(0,r.kt)("a",{parentName:"p",href:"https://toneindicators.carrd.co/"},"Tone Indicators"))),(0,r.kt)("h2",{id:"url-scanner"},"URL Scanner"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Description:")," Scans URLs and gives details about them.   ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Link:")," ",(0,r.kt)("a",{parentName:"p",href:"https://urlscan.io/"},"URL Scan"))),(0,r.kt)("h2",{id:"url-expander"},"URL Expander"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Description:")," Expand short URLs.   ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Link:")," ",(0,r.kt)("a",{parentName:"p",href:"https://urlex.org/"},"URL Expander"))),(0,r.kt)("h2",{id:"waifu2x"},"Waifu2x"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Description:")," Image scaling and noise reduction for anime-style art.   ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Link:")," ",(0,r.kt)("a",{parentName:"p",href:"http://waifu2x.udp.jp/"},"waifu2x"))),(0,r.kt)("h2",{id:"true-size"},"True Size"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Description:")," A global map where you can drag and drop landmasses to see better comparisons of size. ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Link:")," ",(0,r.kt)("a",{parentName:"p",href:"https://thetruesize.com/"},"True Size"))),(0,r.kt)("h2",{id:"visual-center"},"Visual Center"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Description:")," Find the visual center of your images.  ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Link:")," ",(0,r.kt)("a",{parentName:"p",href:"https://javier.xyz/visual-center/"},"Visual Center"),"  ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Credit:")," ",(0,r.kt)(o.Z,{data:{notFound:!0,type:"discord",id:"github:javierbyte",name:"Unknown User",username:"",discriminator:"0000",avatarUrl:"https://cdn.discordapp.com/embed/avatars/NaN.png?size=32",url:null},mdxType:"UserWidgetInline"}))),(0,r.kt)("h2",{id:"lightmode-is-necessary"},"Lightmode is Necessary"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Description:")," An article explaining why light mode is an important to software. ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Link:")," ",(0,r.kt)("a",{parentName:"p",href:"https://lightmode.glitch.me"},"Article")," ",(0,r.kt)("br",null))),(0,r.kt)("h2",{id:"protonmail"},"ProtonMail"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Description:")," Open Source E2E encrypted Email Service. ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Link:")," ",(0,r.kt)("a",{parentName:"p",href:"https://protonmail.com"},"ProtonMail")," ",(0,r.kt)("br",null))),(0,r.kt)("h2",{id:"dcode"},"dCode"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Description:")," dCode is a universal website used for encoding and decoding messages. Also offers a bunch of related\ntools.  ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Link:")," ",(0,r.kt)("a",{parentName:"p",href:"https://dcode.fr/en"},"dCode Website"),"  ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Credit:")," ",(0,r.kt)(o.Z,{data:{type:"discord",id:"273906785788624907",name:"dcode.fr",username:"dcode.fr",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/273906785788624907/2802d890da2def513a072b9bd172b393.webp?size=128",url:"https://discord.com/users/273906785788624907"},mdxType:"UserWidgetInline"}))),(0,r.kt)("h2",{id:"computer-hope"},"Computer Hope"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Description:")," Free computer help and support. ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Link:")," ",(0,r.kt)("a",{parentName:"p",href:"https://www.computerhope.com/"},"ComputerHope")," ",(0,r.kt)("br",null))),(0,r.kt)("h2",{id:"skill-icons"},"Skill Icons"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Description:")," Showcase languages, frameworks, and tools used on a GitHub profile. ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Link:")," ",(0,r.kt)("a",{parentName:"p",href:"https://skillicons.dev/"},"Skill Icons")," ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Credit:")," ",(0,r.kt)(o.Z,{data:{type:"discord",id:"276544649148235776",name:"thijsdev",username:"thijsdev",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/276544649148235776/028979d6ba57aa775832428041f1411e.webp?size=128",url:"https://discord.com/users/276544649148235776"},mdxType:"UserWidgetInline"}))),(0,r.kt)("h2",{id:"savefrom"},"Savefrom"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Description:")," Download any content from popular sites.  ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Link:")," ",(0,r.kt)("a",{parentName:"p",href:"https://savefrom.net/"},"Savefrom"))),(0,r.kt)("h2",{id:"tixte"},"Tixte"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Description:")," Tixte is a content-sharing platform that makes it easy to share files with anyone through\npersonalized links and pages.  ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Link:")," ",(0,r.kt)("a",{parentName:"p",href:"https://tixte.com/"},"Tixte"),(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Credit:")," ",(0,r.kt)(o.Z,{data:{type:"discord",id:"684155404078415890",name:"cole",username:"cole",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/684155404078415890/dd2bd9d0ed0aa41c9b007ef88b826f3d.webp?size=128",url:"https://discord.com/users/684155404078415890"},mdxType:"UserWidgetInline"}))),(0,r.kt)("h2",{id:"you-think-something-is-missing"},"You think something is missing?"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Contact us on our Discord or an email to ",(0,r.kt)("a",{parentName:"p",href:"mailto:hi@disgd.wiki"},"hi@disgd.wiki"),", and we will add it as soon as possible.")))}u.isMDXComponent=!0}}]);