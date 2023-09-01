"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[7484],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),p=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),l=p(a),u=n,k=l["".concat(d,".").concat(u)]||l[u]||m[u]||i;return a?r.createElement(k,s(s({ref:t},c),{},{components:a})):r.createElement(k,s({ref:t},c))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[l]="string"==typeof e?e:n,s[1]=o;for(var p=2;p<i;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9304:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(7294),n=a(2949);function i(e){let{invite:t}=e;const{isDarkTheme:a}=(0,n.I)();return r.createElement("a",{href:`https://discord.gg/${t}`,target:"_blank",rel:"noreferrer"},r.createElement("img",{src:`https://invidget.switchblade.xyz/${t}?theme=${a?"dark":"light"}`,alt:""}))}},6035:(e,t,a)=>{a.d(t,{Z:()=>p});var r=a(7294);const n={container:"container_usuQ",children:"children_AcWt",popup:"popup_N1vF",containerHover:"containerHover__1Ny",popupText:"popupText_TNeV",popupTriangle:"popupTriangle_VKJW"};function i(e){let{children:t,onClickOutside:a}=e;const n=(0,r.useRef)(null);function i(e){n.current&&!n.current.contains(e.target)&&a(e)}return(0,r.useEffect)((()=>(document.addEventListener("mousedown",i),()=>document.removeEventListener("mousedown",i))),[]),r.createElement("span",{ref:n},t)}var s=a(2949);function o(e){let{children:t,title:a,mode:o="hover"}=e;const[d,p]=(0,r.useState)(!1),{isDarkTheme:c}=(0,s.I)();return r.createElement(i,{onClickOutside:()=>p(!1)},r.createElement("span",{className:`${n.container} ${"hover"===o?n.containerHover:""}`},r.createElement("span",{onClick:()=>p(!d),className:n.children},t),r.createElement("span",{className:n.popup,style:{display:"click"===o&&d?"block":"none"}},r.createElement("span",{className:n.popupText,style:{backgroundColor:c?"#dadae0":"#2f3136",color:c?"#000":"#fff"}},a),r.createElement("span",{className:n.popupTriangle,style:{borderTopColor:c?"#dadae0":"#2f3136"}}))))}const d={container:"container_Ak5I",widget:"widget_DC7_",userAvatar:"userAvatar_H_Vg",userTag:"userTag_BirN",userUsername:"userUsername_uIS0",userDiscriminator:"userDiscriminator_chY_"};function p(e){let{data:t}=e;const{isDarkTheme:a}=(0,s.I)();return r.createElement(o,{title:r.createElement("span",null,r.createElement("span",{style:{paddingRight:"0.3rem"}},"discord"===t.type?t.id:t.username),r.createElement("a",{href:t.url??"",style:{color:"inherit"},target:"_blank",rel:"noreferrer"},r.createElement("svg",{width:"13.5",height:"13.5","aria-hidden":"true",viewBox:"0 0 24 24",className:"iconExternalLink_node_modules-@docusaurus-theme-classic-lib-next-theme-IconExternalLink-styles-module"},r.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"})))),mode:"click"},r.createElement("span",{className:d.container},r.createElement("span",{className:d.widget,style:{backgroundColor:a?"#2f3136":"#dadae0"}},r.createElement("img",{src:t.avatarUrl,alt:"",className:d.userAvatar}),r.createElement("span",{className:d.userTag},"discord"===t.type?r.createElement(r.Fragment,null,r.createElement("span",{className:d.userUsername,style:{color:a?"#fff":"#000"}},t.name),r.createElement("span",{className:d.userDiscriminator})):r.createElement("span",{className:d.userUsername,style:{color:a?"#fff":"#000"}},t.name)))))}},2231:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var r=a(7462),n=(a(7294),a(3905)),i=a(6035);a(9304);const s={title:"Bots - Utility",sidebar_position:11,description:"Discord bot recommendations at the category of utility."},o="Utility",d={unversionedId:"resources/bots/utility",id:"resources/bots/utility",title:"Bots - Utility",description:"Discord bot recommendations at the category of utility.",source:"@site/wiki/resources/bots/utility.md",sourceDirName:"resources/bots",slug:"/resources/bots/utility",permalink:"/resources/bots/utility",draft:!1,editUrl:"https://github.com/DiscordResources-org/wiki/edit/master/wiki/resources/bots/utility.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Bots - Utility",sidebar_position:11,description:"Discord bot recommendations at the category of utility."},sidebar:"tutorialSidebar",previous:{title:"Bots - Notifications",permalink:"/resources/bots/notifications"},next:{title:"Discord Related",permalink:"/resources/tools/discord"}},p={},c=[{value:"R.Danny",id:"rdanny",level:3},{value:"Iris XP",id:"iris-xp",level:3},{value:"Invite Tracker",id:"invite-tracker",level:3},{value:"RTS Bot",id:"rts-bot",level:3},{value:"Publisher",id:"publisher",level:3},{value:"Polls",id:"polls",level:3},{value:"Activities Bot",id:"activities-bot",level:3},{value:"Reaction",id:"reaction",level:3},{value:"Discord Status (webhook)",id:"discord-status-webhook",level:3},{value:"Datamining Updates",id:"datamining-updates",level:3},{value:"Tone Indicator Bot",id:"tone-indicator-bot",level:3},{value:"AMA (Ask Me Anything)",id:"ama-ask-me-anything",level:3},{value:"Suggester",id:"suggester",level:3},{value:"NSFW-Toggle",id:"nsfw-toggle",level:3},{value:"ThreadPersist",id:"threadpersist",level:3},{value:"CleanLeave",id:"cleanleave",level:3},{value:"WidgetBot",id:"widgetbot",level:3},{value:"Wumplus",id:"wumplus",level:3},{value:"Antouto",id:"antouto",level:3},{value:"Craig",id:"craig",level:3},{value:"Tunes Ninja",id:"tunes-ninja",level:3},{value:"StatusBot",id:"statusbot",level:3},{value:"Emoji Guardian",id:"emoji-guardian",level:3},{value:"You think something is missing?",id:"you-think-something-is-missing",level:2}],l={toc:c},m="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"utility"},"Utility"),(0,n.kt)("h3",{id:"rdanny"},"R.Danny"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Description:")," One of the first bots on Discord, with dozens of utility commands. ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Link(s):"),"  ",(0,n.kt)("br",null),"\n",(0,n.kt)("a",{parentName:"p",href:"https://discord.com/oauth2/authorize?client_id=169293305274826754&scope=bot+applications.commands&permissions=268823638"},"Invite R.Danny"),"  ",(0,n.kt)("br",null),"\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Rapptz/RoboDanny"},"R.Danny Source"),"  ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Credit:")," ",(0,n.kt)(i.Z,{data:{type:"discord",id:"80088516616269824",name:"danny",username:"danny",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/80088516616269824/39ec2502115271c24eb969018fcd8b55.webp?size=128",url:"https://discord.com/users/80088516616269824"},mdxType:"UserWidgetInline"}))),(0,n.kt)("h3",{id:"iris-xp"},"Iris XP"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Description:")," Easy to use, fully customisable XP bot.  ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Link:\n")," ",(0,n.kt)("a",{parentName:"p",href:"https://discord.com/oauth2/authorize?client_id=910631134742851644&permissions=268699648&scope=bot%20applications.commands"},"Invite Iris XP"),"  ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Credit:")," ",(0,n.kt)(i.Z,{data:{type:"discord",id:"173815235243802624",name:"teekeks",username:"teekeks",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/173815235243802624/583bc7a2cb8469a0031ade59bc546283.webp?size=128",url:"https://discord.com/users/173815235243802624"},mdxType:"UserWidgetInline"}))),(0,n.kt)("h3",{id:"invite-tracker"},"Invite Tracker"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Description:")," Track the invites in your servers to know who invited who and with which invite.  ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Link:")," ",(0,n.kt)("a",{parentName:"p",href:"https://invite-tracker.com/"},"Invite Tracker"),"  ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Credit:")," ",(0,n.kt)(i.Z,{data:{type:"discord",id:"212844004889329664",name:"riks",username:"riks",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/212844004889329664/a_6836caa2bc6a31e00a610f437525a595.gif?size=128",url:"https://discord.com/users/212844004889329664"},mdxType:"UserWidgetInline"}))),(0,n.kt)("h3",{id:"rts-bot"},"RTS Bot"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Description:")," A Bot with mental health & wellness resources.   ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Link:")," ",(0,n.kt)("a",{parentName:"p",href:"http://rts.guardiansmh.org/bot"},"RTS Bot"),"   ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Credit:"),"  ",(0,n.kt)(i.Z,{data:{type:"discord",id:"177886618714243073",name:"joegmh",username:"joegmh",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/177886618714243073/e3cf0760a08b37ed553520ad8a576d8f.webp?size=128",url:"https://discord.com/users/177886618714243073"},mdxType:"UserWidgetInline"}))),(0,n.kt)("h3",{id:"publisher"},"Publisher"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Description:")," auto publishes messages in announcements channels.   ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Link:")," ",(0,n.kt)("a",{parentName:"p",href:"https://discord.com/api/oauth2/authorize?client_id=739498075315241050&permissions=8192&scope=bot"},"Invite Publisher"),"   ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Credit:")," ",(0,n.kt)(i.Z,{data:{type:"discord",id:"255834596766253057",name:"index.ts",username:"index.ts",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/255834596766253057/a_8fd0179d2156639ff4d9135d100a4400.gif?size=128",url:"https://discord.com/users/255834596766253057"},mdxType:"UserWidgetInline"}))),(0,n.kt)("h3",{id:"polls"},"Polls"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Description:")," Create polls easier than ever before. And at the same time, advance like never before!  ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Link:")," ",(0,n.kt)("a",{parentName:"p",href:"https://discord.com/api/oauth2/authorize?client_id=1133835522113024151&permissions=18013093227520&redirect_uri=https%3A%2F%2Fpolls.sattler.dev%2Fprivacy-and-tos%3Futm_source%3Ddiscord-app-invite&response_type=code&scope=identify%20applications.commands%20bot"},"Invite Polls"),"  ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Credit:")," ",(0,n.kt)(i.Z,{data:{type:"discord",id:"340243638892101646",name:"seandev",username:"seandev",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/340243638892101646/4a8e96f2808f09bc069b3707d0220d45.webp?size=128",url:"https://discord.com/users/340243638892101646"},mdxType:"UserWidgetInline"}))),(0,n.kt)("h3",{id:"activities-bot"},"Activities Bot"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Description:")," Starts activities available for voice channels.   ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Link:\n")," ",(0,n.kt)("a",{parentName:"p",href:"https://discord.com/oauth2/authorize?client_id=819778342818414632&scope=bot%20applications.commands"},"Invite Activities Bot"),"   ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Credit:")," ",(0,n.kt)(i.Z,{data:{type:"discord",id:"190916650143318016",name:"advaith",username:"advaith",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/190916650143318016/a_ac67d0d00a6dee24919cca724e8a6e83.gif?size=128",url:"https://discord.com/users/190916650143318016"},mdxType:"UserWidgetInline"}))),(0,n.kt)("h3",{id:"reaction"},"Reaction"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Description:")," Easy-to-use bot to have buttons and dropdowns based on reaction roles in your server.  ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Link(s):")," ",(0,n.kt)("br",null),"\n",(0,n.kt)("a",{parentName:"p",href:"https://rr.auttaja.io/"},"Reaction Docs"),"  ",(0,n.kt)("br",null),"\n",(0,n.kt)("a",{parentName:"p",href:"https://discord.com/oauth2/authorize?client_id=700070794444669039&scope=bot%20applications.commands%20identify&permissions=268451840&response_type=code"},"Invite Reaction"),"  ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Credit:")," ",(0,n.kt)(i.Z,{data:{type:"discord",id:"109710323094683648",name:"kelwing",username:"kelwing",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/109710323094683648/acd006ea1595b620b606393fbca62e1f.webp?size=128",url:"https://discord.com/users/109710323094683648"},mdxType:"UserWidgetInline"}))),(0,n.kt)("h3",{id:"discord-status-webhook"},"Discord Status (webhook)"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Description:")," Provides updates from the status website as embeds within Discord.   ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Link:\n")," ",(0,n.kt)("a",{parentName:"p",href:"https://discord.com/oauth2/authorize?client_id=662416455366737949&redirect_uri=https://discord-status.red-panda.red/auth/callback&response_type=code&scope=webhook.incoming%20applications.commands"},"Invite Discord Status"),"   ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Credit:")," ",(0,n.kt)(i.Z,{data:{type:"discord",id:"255834596766253057",name:"index.ts",username:"index.ts",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/255834596766253057/a_8fd0179d2156639ff4d9135d100a4400.gif?size=128",url:"https://discord.com/users/255834596766253057"},mdxType:"UserWidgetInline"}))),(0,n.kt)("h3",{id:"datamining-updates"},"Datamining Updates"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Description:")," The bot publishes any authorized commits\nin ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Discord-Datamining/Discord-Datamining"},"Discord Datamining"),".   ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Link(s):"),"   ",(0,n.kt)("br",null),"\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ItsRauf/dataminev2/#commands"},"GitHub"),"   ",(0,n.kt)("br",null),"\n",(0,n.kt)("a",{parentName:"p",href:"https://discord.com/oauth2/authorize?client_id=507415798189654016&scope=bot&permissions=190464"},"Invite Datamining Updates"),"   ",(0,n.kt)("br",null),"\n",(0,n.kt)("a",{parentName:"p",href:"https://datamining.otter.university/"},"Datamining Website"),"  ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Credit(s):")," ",(0,n.kt)(i.Z,{data:{type:"discord",id:"172557961133162496",name:"rosasaur",username:"rosasaur",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/172557961133162496/0e9e0c59751b367ecf88f6c06b8e4281.webp?size=128",url:"https://discord.com/users/172557961133162496"},mdxType:"UserWidgetInline"})," ",(0,n.kt)(i.Z,{data:{type:"discord",id:"562415519454461962",name:"objectified",username:"objectified",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/562415519454461962/a_88073051acb254d20383d1dc6c7738f4.gif?size=128",url:"https://discord.com/users/562415519454461962"},mdxType:"UserWidgetInline"}))),(0,n.kt)("h3",{id:"tone-indicator-bot"},"Tone Indicator Bot"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Description:")," Find and understand tone indicators.   ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Link:\n")," ",(0,n.kt)("a",{parentName:"p",href:"https://discord.com/api/oauth2/authorize?client_id=896001578388033536&scope=applications.commands"},"Invite Tone Indicator"),"   ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Credit:")," ",(0,n.kt)(i.Z,{data:{type:"discord",id:"173815235243802624",name:"teekeks",username:"teekeks",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/173815235243802624/583bc7a2cb8469a0031ade59bc546283.webp?size=128",url:"https://discord.com/users/173815235243802624"},mdxType:"UserWidgetInline"}))),(0,n.kt)("h3",{id:"ama-ask-me-anything"},"AMA (Ask Me Anything)"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Description:")," Assists with helping host and manage AMA's on Discord.   ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Link:")," ",(0,n.kt)("a",{parentName:"p",href:"https://automoderator.app/ama/"},"AMA Bot"),"   ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Credit(s):")," ",(0,n.kt)(i.Z,{data:{type:"discord",id:"223703707118731264",name:"didinele",username:"didinele",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/223703707118731264/a721d745ec64985a88265bd447ebfa96.webp?size=128",url:"https://discord.com/users/223703707118731264"},mdxType:"UserWidgetInline"})," ",(0,n.kt)(i.Z,{data:{type:"discord",id:"104425482757357568",name:"tommyfoxy2",username:"tommyfoxy2",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/104425482757357568/76f7a7077f0b0e5af3b86a1317edb049.webp?size=128",url:"https://discord.com/users/104425482757357568"},mdxType:"UserWidgetInline"}))),(0,n.kt)("h3",{id:"suggester"},"Suggester"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Description:")," Suggester is a suggestion-focused Discord bot whose main purpose is to allow server managers to\nreceive feedback from their members.  ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Link(s):\n")," ",(0,n.kt)("a",{parentName:"p",href:"https://discord.com/api/oauth2/authorize?client_id=564426594144354315&permissions=805694544&scope=bot%20applications.commands"},"Invite Suggester"),"  ",(0,n.kt)("br",null),"\n",(0,n.kt)("a",{parentName:"p",href:"https://suggester.js.org/"},"Suggester Docs"),"  ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Credit(s):")," ",(0,n.kt)(i.Z,{data:{type:"discord",id:"327887845270487041",name:"brightness",username:"brightness",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/327887845270487041/2d79cb3adc658b482d257b8df19a9080.webp?size=128",url:"https://discord.com/users/327887845270487041"},mdxType:"UserWidgetInline"})," ",(0,n.kt)(i.Z,{data:{type:"discord",id:"255834596766253057",name:"index.ts",username:"index.ts",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/255834596766253057/a_8fd0179d2156639ff4d9135d100a4400.gif?size=128",url:"https://discord.com/users/255834596766253057"},mdxType:"UserWidgetInline"}))),(0,n.kt)("h3",{id:"nsfw-toggle"},"NSFW-Toggle"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Description:")," Pushes the NSFW toggle. Useful for Mobile and especially iOS where it is not possible.  ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Link:")," ",(0,n.kt)("a",{parentName:"p",href:"https://red-panda.red/bots/nsfw-toggle/invite"},"Invite NSFW-Toggle"),"  ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Credit:")," ",(0,n.kt)(i.Z,{data:{type:"discord",id:"255834596766253057",name:"index.ts",username:"index.ts",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/255834596766253057/a_8fd0179d2156639ff4d9135d100a4400.gif?size=128",url:"https://discord.com/users/255834596766253057"},mdxType:"UserWidgetInline"}))),(0,n.kt)("h3",{id:"threadpersist"},"ThreadPersist"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Description:")," A bot that keeps all threads active, unless manually archived.  ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Link(s):\n")," ",(0,n.kt)("a",{parentName:"p",href:"https://discord.com/api/oauth2/authorize?client_id=905481888318255105&permissions=17179870336&scope=bot"},"Invite ThreadPersist"),"  ",(0,n.kt)("br",null),"\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenDiscordBots/ThreadPersist"},"Self-Host ThreadPersist"),"  ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Credit:")," ",(0,n.kt)(i.Z,{data:{type:"discord",id:"297045071457681409",name:"vcokltfre",username:"vcokltfre",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/297045071457681409/65af6956c9dfe0d229bb12b4a1a2f927.webp?size=128",url:"https://discord.com/users/297045071457681409"},mdxType:"UserWidgetInline"}))),(0,n.kt)("h3",{id:"cleanleave"},"CleanLeave"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Description:")," Automatically remove user join messages when the user leaves the server.  ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Link(s):\n")," ",(0,n.kt)("a",{parentName:"p",href:"https://discord.com/api/oauth2/authorize?client_id=905922129571225600&permissions=8192&scope=bot"},"Invite CleanLeave"),"  ",(0,n.kt)("br",null),"\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenDiscordBots/CleanLeave"},"Self-Host CleanLeave"),"  ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Credit:")," ",(0,n.kt)(i.Z,{data:{type:"discord",id:"297045071457681409",name:"vcokltfre",username:"vcokltfre",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/297045071457681409/65af6956c9dfe0d229bb12b4a1a2f927.webp?size=128",url:"https://discord.com/users/297045071457681409"},mdxType:"UserWidgetInline"}))),(0,n.kt)("h3",{id:"widgetbot"},"WidgetBot"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Description:")," Create good looking widgets for your websites.  ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Link:")," ",(0,n.kt)("a",{parentName:"p",href:"https://widgetbot.io/"},"WidgetBot"),"  ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Credit:")," ",(0,n.kt)(i.Z,{data:{notFound:!0,type:"discord",id:"github:widgetbot-io",name:"Unknown User",username:"",discriminator:"0000",avatarUrl:"https://cdn.discordapp.com/embed/avatars/NaN.png?size=32",url:null},mdxType:"UserWidgetInline"}))),(0,n.kt)("h3",{id:"wumplus"},"Wumplus"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Description:")," Utility bot for stuff users can't do, like opening activities, locking emotes, and finding\ngames.  ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Link:\n")," ",(0,n.kt)("a",{parentName:"p",href:"https://discord.com/oauth2/authorize?client_id=871380815353880577&permissions=1073761297&redirect_uri=https://discord.gg/sH4BN7rnaq&scope=bot%20applications.commands"},"Invite Wumplus"),"  ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Credit(s):")," ",(0,n.kt)(i.Z,{data:{type:"discord",id:"305647182198079489",name:"lostpaul",username:"lostpaul",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/305647182198079489/7a3a67c95134909454df095663a7fe79.webp?size=128",url:"https://discord.com/users/305647182198079489"},mdxType:"UserWidgetInline"})," ",(0,n.kt)(i.Z,{data:{type:"discord",id:"852608147554172928",name:"state253827",username:"state253827",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/852608147554172928/bd814f921412da081b6cbf3fd702edd7.webp?size=128",url:"https://discord.com/users/852608147554172928"},mdxType:"UserWidgetInline"}))),(0,n.kt)("h3",{id:"antouto"},"Antouto"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Description:")," Antouto is a bot that lets you get extensive information about Discord invites, servers, users, build\noverrides, and more!  ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Link:\n")," ",(0,n.kt)("a",{parentName:"p",href:"https://discord.com/oauth2/authorize?client_id=652555142369116215&permissions=2214972481&scope=bot%20applications.commands"},"Invite Antouto"),"  ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Credit:")," ",(0,n.kt)(i.Z,{data:{type:"discord",id:"316860714260234243",name:"antuoto",username:"antuoto",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/316860714260234243/8d4d61dc5abc7c89ec737c4df2ed8608.webp?size=128",url:"https://discord.com/users/316860714260234243"},mdxType:"UserWidgetInline"}))),(0,n.kt)("h3",{id:"craig"},"Craig"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Description:")," A bot able to record voice channels or stage channels.  ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Link(s):"),"  ",(0,n.kt)("br",null),"\n",(0,n.kt)("a",{parentName:"p",href:"https://craig.chat/"},"Craig Website"),"  ",(0,n.kt)("br",null),"\n",(0,n.kt)("a",{parentName:"p",href:"https://discord.com/oauth2/authorize?client_id=272937604339466240&permissions=68159488&scope=bot%20applications.commands"},"Invite Craig"),"  ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Credit(s):")," ",(0,n.kt)(i.Z,{data:{type:"discord",id:"158049329150427136",name:"snazzah",username:"snazzah",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/158049329150427136/a_cc00cd7157d82f3507bdf42f78d18a48.gif?size=128",url:"https://discord.com/users/158049329150427136"},mdxType:"UserWidgetInline"})," ",(0,n.kt)(i.Z,{data:{type:"discord",id:"135923847147945985",name:"coolguy3289",username:"coolguy3289",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/135923847147945985/a_4eb7c365a14ae5a115b556dd08155764.gif?size=128",url:"https://discord.com/users/135923847147945985"},mdxType:"UserWidgetInline"}))),(0,n.kt)("h3",{id:"tunes-ninja"},"Tunes Ninja"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Description:")," When a song link is posted in chat, Tunes Ninja will send an embed with the song in all popular music\nplatforms.   ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Link:")," ",(0,n.kt)("a",{parentName:"p",href:"https://tunes.ninja/"},"Tunes Ninja Website"),"   ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Credit:")," ",(0,n.kt)(i.Z,{data:{type:"discord",id:"657057112593268756",name:"lafond",username:"lafond",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/657057112593268756/3da782a1030c54af9457390ee53136d7.webp?size=128",url:"https://discord.com/users/657057112593268756"},mdxType:"UserWidgetInline"}))),(0,n.kt)("h3",{id:"statusbot"},"StatusBot"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Description:")," A bot that allows tracking of your bot's performance, get notifications when service incidents are\ndetected. ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Link:")," ",(0,n.kt)("a",{parentName:"p",href:"https://www.statusbot.gg/"},"StatusBot")," ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Credit:")," ",(0,n.kt)(i.Z,{data:{type:"discord",id:"282565295351136256",name:"kaj.gg",username:"kaj.gg",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/282565295351136256/a_28d05b483a96c4477bc13802b9bd87e4.gif?size=128",url:"https://discord.com/users/282565295351136256"},mdxType:"UserWidgetInline"}))),(0,n.kt)("h3",{id:"emoji-guardian"},"Emoji Guardian"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Description:")," Manages emojis with various API - only commands. ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Link(s):"),"  ",(0,n.kt)("br",null),"\n",(0,n.kt)("a",{parentName:"p",href:"https://emojiguardian.xyz"},"Emoji Guardian Website"),"  ",(0,n.kt)("br",null),"\n",(0,n.kt)("a",{parentName:"p",href:"https://discord.com/oauth2/authorize?client_id=887939311373267005&permissions=1610632320&scope=bot%20applications.commands"},"Invite Emoji Guardian"),"  ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Credit(s):")," ",(0,n.kt)(i.Z,{data:{type:"discord",id:"537875750955778058",name:"dhanish_danu",username:"dhanish_danu",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/537875750955778058/098b03cdd099da67766bcaf9ef749ec2.webp?size=128",url:"https://discord.com/users/537875750955778058"},mdxType:"UserWidgetInline"})," ",(0,n.kt)(i.Z,{data:{type:"discord",id:"305647182198079489",name:"lostpaul",username:"lostpaul",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/305647182198079489/7a3a67c95134909454df095663a7fe79.webp?size=128",url:"https://discord.com/users/305647182198079489"},mdxType:"UserWidgetInline"}))),(0,n.kt)("h2",{id:"you-think-something-is-missing"},"You think something is missing?"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Contact us on our Discord or an email to ",(0,n.kt)("a",{parentName:"p",href:"mailto:hi@disgd.wiki"},"hi@disgd.wiki"),", and we will add it as soon as possible.")))}u.isMDXComponent=!0}}]);