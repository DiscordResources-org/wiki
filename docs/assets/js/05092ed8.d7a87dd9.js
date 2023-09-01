"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[2666],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>k});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(r),u=n,k=c["".concat(l,".").concat(u)]||c[u]||m[u]||o;return r?a.createElement(k,i(i({ref:t},d),{},{components:r})):a.createElement(k,i({ref:t},d))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9304:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(7294),n=r(2949);function o(e){let{invite:t}=e;const{isDarkTheme:r}=(0,n.I)();return a.createElement("a",{href:`https://discord.gg/${t}`,target:"_blank",rel:"noreferrer"},a.createElement("img",{src:`https://invidget.switchblade.xyz/${t}?theme=${r?"dark":"light"}`,alt:""}))}},6035:(e,t,r)=>{r.d(t,{Z:()=>p});var a=r(7294);const n={container:"container_usuQ",children:"children_AcWt",popup:"popup_N1vF",containerHover:"containerHover__1Ny",popupText:"popupText_TNeV",popupTriangle:"popupTriangle_VKJW"};function o(e){let{children:t,onClickOutside:r}=e;const n=(0,a.useRef)(null);function o(e){n.current&&!n.current.contains(e.target)&&r(e)}return(0,a.useEffect)((()=>(document.addEventListener("mousedown",o),()=>document.removeEventListener("mousedown",o))),[]),a.createElement("span",{ref:n},t)}var i=r(2949);function s(e){let{children:t,title:r,mode:s="hover"}=e;const[l,p]=(0,a.useState)(!1),{isDarkTheme:d}=(0,i.I)();return a.createElement(o,{onClickOutside:()=>p(!1)},a.createElement("span",{className:`${n.container} ${"hover"===s?n.containerHover:""}`},a.createElement("span",{onClick:()=>p(!l),className:n.children},t),a.createElement("span",{className:n.popup,style:{display:"click"===s&&l?"block":"none"}},a.createElement("span",{className:n.popupText,style:{backgroundColor:d?"#dadae0":"#2f3136",color:d?"#000":"#fff"}},r),a.createElement("span",{className:n.popupTriangle,style:{borderTopColor:d?"#dadae0":"#2f3136"}}))))}const l={container:"container_Ak5I",widget:"widget_DC7_",userAvatar:"userAvatar_H_Vg",userTag:"userTag_BirN",userUsername:"userUsername_uIS0",userDiscriminator:"userDiscriminator_chY_"};function p(e){let{data:t}=e;const{isDarkTheme:r}=(0,i.I)();return a.createElement(s,{title:a.createElement("span",null,a.createElement("span",{style:{paddingRight:"0.3rem"}},"discord"===t.type?t.id:t.username),a.createElement("a",{href:t.url??"",style:{color:"inherit"},target:"_blank",rel:"noreferrer"},a.createElement("svg",{width:"13.5",height:"13.5","aria-hidden":"true",viewBox:"0 0 24 24",className:"iconExternalLink_node_modules-@docusaurus-theme-classic-lib-next-theme-IconExternalLink-styles-module"},a.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"})))),mode:"click"},a.createElement("span",{className:l.container},a.createElement("span",{className:l.widget,style:{backgroundColor:r?"#2f3136":"#dadae0"}},a.createElement("img",{src:t.avatarUrl,alt:"",className:l.userAvatar}),a.createElement("span",{className:l.userTag},"discord"===t.type?a.createElement(a.Fragment,null,a.createElement("span",{className:l.userUsername,style:{color:r?"#fff":"#000"}},t.name),a.createElement("span",{className:l.userDiscriminator})):a.createElement("span",{className:l.userUsername,style:{color:r?"#fff":"#000"}},t.name)))))}},6462:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=r(7462),n=(r(7294),r(3905)),o=r(6035);r(9304);const i={title:"Bots - Moderation",sidebar_position:7,description:"Discord bot recommendations at the category of moderation."},s="Moderation",l={unversionedId:"resources/bots/moderation",id:"resources/bots/moderation",title:"Bots - Moderation",description:"Discord bot recommendations at the category of moderation.",source:"@site/wiki/resources/bots/moderation.md",sourceDirName:"resources/bots",slug:"/resources/bots/moderation",permalink:"/resources/bots/moderation",draft:!1,editUrl:"https://github.com/DiscordResources-org/wiki/edit/master/wiki/resources/bots/moderation.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Bots - Moderation",sidebar_position:7,description:"Discord bot recommendations at the category of moderation."},sidebar:"tutorialSidebar",previous:{title:"Bots - Applications",permalink:"/resources/bots/applications"},next:{title:"Bots - ModMail",permalink:"/resources/bots/modmail"}},p={},d=[{value:"Sapphire",id:"sapphire",level:3},{value:"Zeppelin",id:"zeppelin",level:3},{value:"GiselleBot",id:"gisellebot",level:3},{value:"Vortex",id:"vortex",level:3},{value:"GearBot",id:"gearbot",level:3},{value:"Fire",id:"fire",level:3},{value:"Blargbot",id:"blargbot",level:3},{value:"AutoModerator",id:"automoderator",level:3},{value:"Sapphire",id:"sapphire-1",level:3},{value:"Beemo",id:"beemo",level:3},{value:"Beemo Helper (addition)",id:"beemo-helper-addition",level:3},{value:"Red Bot",id:"red-bot",level:3},{value:"Crosslink",id:"crosslink",level:3},{value:"Safelink",id:"safelink",level:3},{value:"Fish",id:"fish",level:3},{value:"Cloe",id:"cloe",level:3},{value:"You think something is missing?",id:"you-think-something-is-missing",level:2}],c={toc:d},m="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"moderation"},"Moderation"),(0,n.kt)("h3",{id:"sapphire"},"Sapphire"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Description:")," Multi-purpose Discord Bot. Fully customizable. Completely free. ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Link:"),"  ",(0,n.kt)("a",{parentName:"p",href:"https://sapph.xyz/"},"Sapphire Website"),"  ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Credit:")," ",(0,n.kt)(o.Z,{data:{type:"discord",id:"265236642476982273",name:"xge",username:"xge",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/265236642476982273/125edf79c194d1f87caa9a6cfb66d090.webp?size=128",url:"https://discord.com/users/265236642476982273"},mdxType:"UserWidgetInline"}))),(0,n.kt)("h3",{id:"zeppelin"},"Zeppelin"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Description:")," Zeppelin is a private moderation bot for Discord, designed with large servers and reliability in\nmind.   ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Link(s):"),"   ",(0,n.kt)("br",null),"\n",(0,n.kt)("a",{parentName:"p",href:"https://zeppelin.gg/"},"Zeppelin Website"),"   ",(0,n.kt)("br",null),"\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Dragory/ZeppelinBot"},"GitHub"),"   ",(0,n.kt)("br",null),"\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/dexbiobot/Zeppelin#zep-by-dex"},"Compendium"),"   ",(0,n.kt)("br",null),"\n",(0,n.kt)("a",{parentName:"p",href:"https://setup-tool.zeppelin.gg"},"Setup Tool"),"   ",(0,n.kt)("br",null),"\n",(0,n.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/e/2PACX-1vQTFZW4NiJicngfAv36tLlWG5XjktVyZhljekOkzUyzsktwcNCH_Zm82Dm3r1c7S7vKOArJ6XIO5azC/pub?start=true&loop=false&delayms=60000&slide=id.gc6f9e470d_0_0"},"Handbook"),"   ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Credit(s):")," ",(0,n.kt)(o.Z,{data:{type:"discord",id:"106391128718245888",name:"dragory",username:"dragory",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/106391128718245888/a_991dbefd2e28a39b5967848b06eb5eae.gif?size=128",url:"https://discord.com/users/106391128718245888"},mdxType:"UserWidgetInline"})," ",(0,n.kt)(o.Z,{data:{type:"discord",id:"347727875266576395",name:"shoaibsajid1",username:"shoaibsajid1",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/347727875266576395/625f0aefc337d399a38623e02c033a5a.webp?size=128",url:"https://discord.com/users/347727875266576395"},mdxType:"UserWidgetInline"}))),(0,n.kt)("h3",{id:"gisellebot"},"GiselleBot"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Description:")," Multi function, general moderation bot.   ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Link(s):"),"  ",(0,n.kt)("br",null),"\n",(0,n.kt)("a",{parentName:"p",href:"https://docs.gisellebot.com/"},"GiselleBot")," ",(0,n.kt)("br",null),"\n",(0,n.kt)("a",{parentName:"p",href:"https://discord.com/oauth2/authorize?client_id=356831787445387285&permissions=813034742&scope=bot"},"Invite GiselleBot"),"  ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Credit(s):"),"  ",(0,n.kt)(o.Z,{data:{type:"discord",id:"220081163660689408",name:"cycloptux",username:"cycloptux",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/220081163660689408/f245375afcc268bcf1d388a5cd59fb77.webp?size=128",url:"https://discord.com/users/220081163660689408"},mdxType:"UserWidgetInline"})," ",(0,n.kt)(o.Z,{data:{type:"discord",id:"200987752794292224",name:"naviking",username:"naviking",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/200987752794292224/a_ad10b77bb6b8a28ade862a699dd1fc01.gif?size=128",url:"https://discord.com/users/200987752794292224"},mdxType:"UserWidgetInline"}))),(0,n.kt)("h3",{id:"vortex"},"Vortex"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Description:")," Vortex is a bot designed to keep your server safe and your staff team organized. Its moderation and\nlogging suite keeps track of your members and keeps your moderators accountable. Its auto-moderator capabilities also\nallow it to filter out certain types of behaviour without the need for human intervention, lightening the load of the\nstaff team. Finally, Vortex is designed to be fast and easy to use.   ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Link:")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/jagrosh/Vortex"},"Vortex"),"   ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Credit:")," ",(0,n.kt)(o.Z,{data:{type:"discord",id:"113156185389092864",name:"jagrosh",username:"jagrosh",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/113156185389092864/a_6fa47dc03ad3eacc3c697b16eaa8f716.gif?size=128",url:"https://discord.com/users/113156185389092864"},mdxType:"UserWidgetInline"}))),(0,n.kt)("h3",{id:"gearbot"},"GearBot"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Description:")," Trustworthy general moderation bot.   ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Link(s):"),"   ",(0,n.kt)("br",null),"\n",(0,n.kt)("a",{parentName:"p",href:"https://gearbot.rocks/"},"GearBot Website"),"   ",(0,n.kt)("br",null),"\n",(0,n.kt)("a",{parentName:"p",href:"https://discord.com/oauth2/authorize?client_id=349977940198555660&scope=bot%20applications.commands&permissions=259191598326"},"Invite GearBot"),"   ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Credit:")," ",(0,n.kt)(o.Z,{data:{type:"discord",id:"106354106196570112",name:"aenterprise",username:"aenterprise",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/106354106196570112/a_830b0d2082e9b84d00816eae9324d29e.gif?size=128",url:"https://discord.com/users/106354106196570112"},mdxType:"UserWidgetInline"}))),(0,n.kt)("h3",{id:"fire"},"Fire"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Description:")," A good moderation and utility bot which is always up-to-date.   ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Link(s):"),"   ",(0,n.kt)("br",null),"\n",(0,n.kt)("a",{parentName:"p",href:"https://getfire.bot/"},"Fire Website"),"   ",(0,n.kt)("br",null),"\n",(0,n.kt)("a",{parentName:"p",href:"https://inv.wtf/bot"},"Invite Fire"),"   ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Credit:")," ",(0,n.kt)(o.Z,{data:{type:"discord",id:"287698408855044097",name:"gaminggeek.dev",username:"gaminggeek.dev",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/287698408855044097/98ed945d10a1b359c420452d8b541a66.webp?size=128",url:"https://discord.com/users/287698408855044097"},mdxType:"UserWidgetInline"}))),(0,n.kt)("h3",{id:"blargbot"},"Blargbot"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Description:")," A fully customisable multi-purpose bot. ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Link:")," ",(0,n.kt)("a",{parentName:"p",href:"https://blargbot.xyz/"},"Blargbot"),"  ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Credit:")," ",(0,n.kt)(o.Z,{data:{type:"discord",id:"103347843934212096",name:"stupidcat",username:"stupidcat",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/103347843934212096/a_377ad713935700b46b0c3ba31789b352.gif?size=128",url:"https://discord.com/users/103347843934212096"},mdxType:"UserWidgetInline"}))),(0,n.kt)("h3",{id:"automoderator"},"AutoModerator"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Description:")," General auto-moderation bot, with buttons and dropdowns.   ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Link:")," ",(0,n.kt)("a",{parentName:"p",href:"https://automoderator.app/"},"AutoModerator Website"),"   ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Credit(s):")," ",(0,n.kt)(o.Z,{data:{type:"discord",id:"223703707118731264",name:"didinele",username:"didinele",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/223703707118731264/a721d745ec64985a88265bd447ebfa96.webp?size=128",url:"https://discord.com/users/223703707118731264"},mdxType:"UserWidgetInline"})," ",(0,n.kt)(o.Z,{data:{type:"discord",id:"104425482757357568",name:"tommyfoxy2",username:"tommyfoxy2",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/104425482757357568/76f7a7077f0b0e5af3b86a1317edb049.webp?size=128",url:"https://discord.com/users/104425482757357568"},mdxType:"UserWidgetInline"}))),(0,n.kt)("h3",{id:"sapphire-1"},"Sapphire"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Description:")," Multi - purpose bot with many regularly updated features. ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Link(s):"),"  ",(0,n.kt)("br",null),"\n",(0,n.kt)("a",{parentName:"p",href:"https://sapph.xyz/"},"Sapphire Website"),"  ",(0,n.kt)("br",null),"\n",(0,n.kt)("a",{parentName:"p",href:"https://discord.com/oauth2/authorize?scope=bot+applications.commands&response_type=code&redirect_uri=https://sapph.xyz/dashboard&permissions=1945627743&client_id=678344927997853742"},"Invite Sapphire"),"  ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Credit:")," ",(0,n.kt)(o.Z,{data:{type:"discord",id:"265236642476982273",name:"xge",username:"xge",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/265236642476982273/125edf79c194d1f87caa9a6cfb66d090.webp?size=128",url:"https://discord.com/users/265236642476982273"},mdxType:"UserWidgetInline"}))),(0,n.kt)("h3",{id:"beemo"},"Beemo"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Description:")," Beemo is an anti-spam Discord bot that allows you to equip your server with a powerful anti-bot\nalgorithm that operates in the background to stop user-bot raids against your server. Beemo's anti-bot mitigates bot\nraid threats automatically and effectively by mass-banning them on-sight with a fine-tuned detection algorithm that\navoids real users.   ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Link:")," ",(0,n.kt)("a",{parentName:"p",href:"https://beemo.gg/"},"Website"),"   ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Credit:")," ",(0,n.kt)(o.Z,{data:{type:"discord",id:"192048286331437056",name:"ayu",username:"ayu",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/192048286331437056/343986d1bf5d1e1e1f4d031a47a5630d.webp?size=128",url:"https://discord.com/users/192048286331437056"},mdxType:"UserWidgetInline"}))),(0,n.kt)("h3",{id:"beemo-helper-addition"},"Beemo Helper (addition)"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Description:")," Beemo Helper is designed to help Beemo (",(0,n.kt)("a",{parentName:"p",href:"https://beemo.gg/"},"https://beemo.gg/"),") deal with user bot raids. Once Beemo\ndetects a raid, Beemo Helper will start banning users from Beemo Logs from the bottom up, effectively doubling the\nspeed\nof bans.   ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Link(s):"),"   ",(0,n.kt)("br",null),"\n",(0,n.kt)("a",{parentName:"p",href:"https://redirects.polar.blue/beemohelper"},"Invite"),"   ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Credit:")," ",(0,n.kt)(o.Z,{data:{type:"discord",id:"619284841187246090",name:"polar.blue",username:"polar.blue",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/619284841187246090/62be1174a94856e78ea466ef29adcfae.webp?size=128",url:"https://discord.com/users/619284841187246090"},mdxType:"UserWidgetInline"}))),(0,n.kt)("h3",{id:"red-bot"},"Red Bot"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Description:")," Red is a fully modular bot \u2013 meaning all features and commands can be enabled/disabled to your\nliking, making it completely customizable. This is a self-hosted bot \u2013 meaning you will need to host and maintain your\nown instance. You can turn Red into an admin bot, music bot, trivia bot, and more!   ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Link:")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Cog-Creators/Red-DiscordBot"},"Red Bot"))),(0,n.kt)("h3",{id:"crosslink"},"Crosslink"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Description:")," Crosslink is a smart link detection and reputation service built to make link filtering convenient\nfor moderators and community managers. With convenience at the forefront, configuration on Discord is made to be as\nsimple as possible for the end user. Our reputation system takes third parties into account as well as our own local\ndomain database to keep your community safe!\n",(0,n.kt)("strong",{parentName:"p"},"Link(s):"),"   ",(0,n.kt)("br",null),"\n",(0,n.kt)("a",{parentName:"p",href:"https://panleyent.com/crosslink/"},"Website"),"   ",(0,n.kt)("br",null),"\n",(0,n.kt)("a",{parentName:"p",href:"https://discord.com/oauth2/authorize?client_id=742711687777484871&permissions=103348038854&scope=bot%20applications.commands"},"Invite CrossLink"),"   ",(0,n.kt)("br",null),"\n",(0,n.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1xWTpTDQo0Asx9eaI1M0Y5JB4cGRVBPUOQH2cIPQg7C8/edit"},"Full Docs"),"   ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Credit:")," ",(0,n.kt)(o.Z,{data:{type:"discord",id:"249287049482338305",name:"panley",username:"panley",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/249287049482338305/f071ce2e8d735753f419965cc5742d6a.webp?size=128",url:"https://discord.com/users/249287049482338305"},mdxType:"UserWidgetInline"}))),(0,n.kt)("h3",{id:"safelink"},"Safelink"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Description:"),"  A bot that can detect a variety of scams (Nitro scams, Steam scams, and many others), explicit\nlinks, and more with a custom internal API that uses AI to constantly improve detection.   ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Link:")," ",(0,n.kt)("a",{parentName:"p",href:"https://safelink.gg/"},"Safelink"),"   ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Credit(s):")," ",(0,n.kt)(o.Z,{data:{type:"discord",id:"282565295351136256",name:"kaj.gg",username:"kaj.gg",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/282565295351136256/a_28d05b483a96c4477bc13802b9bd87e4.gif?size=128",url:"https://discord.com/users/282565295351136256"},mdxType:"UserWidgetInline"})," ",(0,n.kt)(o.Z,{data:{type:"discord",id:"684155404078415890",name:"cole",username:"cole",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/684155404078415890/dd2bd9d0ed0aa41c9b007ef88b826f3d.webp?size=128",url:"https://discord.com/users/684155404078415890"},mdxType:"UserWidgetInline"}))),(0,n.kt)("h3",{id:"fish"},"Fish"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Description:")," Fish is a bot made for auto-moderating phishing scam links. It has a few configuration options, like\nwhat action to take when a user posts a known scam link and the ability to exempt users/roles from link\ndetection.   ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Link(s):"),"   ",(0,n.kt)("br",null),"\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Benricheson101/anti-phishing-bot"},"GitHub"),"   ",(0,n.kt)("br",null),"\n",(0,n.kt)("a",{parentName:"p",href:"https://discord.com/oauth2/authorize?client_id=892420397570592768&scope=bot%20applications.commands&permissions=268446726"},"Invite Fish"),"   ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Credit:")," ",(0,n.kt)(o.Z,{data:{type:"discord",id:"255834596766253057",name:"index.ts",username:"index.ts",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/255834596766253057/a_8fd0179d2156639ff4d9135d100a4400.gif?size=128",url:"https://discord.com/users/255834596766253057"},mdxType:"UserWidgetInline"}))),(0,n.kt)("h3",{id:"cloe"},"Cloe"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Description:")," Upgrade your community with our versatile bot. It's the best of Dyno, MEE6, Maki, Arcane, and Probot,\noffering rich features all in one.   ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Link(s):"),"  ",(0,n.kt)("br",null),"\n",(0,n.kt)("a",{parentName:"p",href:"https://cloe.gg?utm_source=discordresources-org"},"Cloe")," ",(0,n.kt)("br",null),"\n",(0,n.kt)("a",{parentName:"p",href:"https://cloe.gg/add?utm_source=discordresources-org"},"Invite Cloe"),"  ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Credit(s):"),"  ",(0,n.kt)(o.Z,{data:{type:"discord",id:"340243638892101646",name:"seandev",username:"seandev",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/340243638892101646/d48fa7051f39006c3cf640efc598ca3b.webp?size=128",url:"https://discord.com/users/340243638892101646"},mdxType:"UserWidgetInline"}))),(0,n.kt)("h2",{id:"you-think-something-is-missing"},"You think something is missing?"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Contact us on our Discord or an email to ",(0,n.kt)("a",{parentName:"p",href:"mailto:hi@disgd.wiki"},"hi@disgd.wiki"),", and we will add it as soon as possible.")))}u.isMDXComponent=!0}}]);