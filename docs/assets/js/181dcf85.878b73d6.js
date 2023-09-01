"use strict";(self.webpackChunkdiscord_resource_wiki=self.webpackChunkdiscord_resource_wiki||[]).push([[4394],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,k=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(k,s(s({ref:t},p),{},{components:r})):n.createElement(k,s({ref:t},p))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9304:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294),a=r(2949);function o(e){let{invite:t}=e;const{isDarkTheme:r}=(0,a.I)();return n.createElement("a",{href:`https://discord.gg/${t}`,target:"_blank",rel:"noreferrer"},n.createElement("img",{src:`https://invidget.switchblade.xyz/${t}?theme=${r?"dark":"light"}`,alt:""}))}},6035:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(7294);const a={container:"container_usuQ",children:"children_AcWt",popup:"popup_N1vF",containerHover:"containerHover__1Ny",popupText:"popupText_TNeV",popupTriangle:"popupTriangle_VKJW"};function o(e){let{children:t,onClickOutside:r}=e;const a=(0,n.useRef)(null);function o(e){a.current&&!a.current.contains(e.target)&&r(e)}return(0,n.useEffect)((()=>(document.addEventListener("mousedown",o),()=>document.removeEventListener("mousedown",o))),[]),n.createElement("span",{ref:a},t)}var s=r(2949);function i(e){let{children:t,title:r,mode:i="hover"}=e;const[c,l]=(0,n.useState)(!1),{isDarkTheme:p}=(0,s.I)();return n.createElement(o,{onClickOutside:()=>l(!1)},n.createElement("span",{className:`${a.container} ${"hover"===i?a.containerHover:""}`},n.createElement("span",{onClick:()=>l(!c),className:a.children},t),n.createElement("span",{className:a.popup,style:{display:"click"===i&&c?"block":"none"}},n.createElement("span",{className:a.popupText,style:{backgroundColor:p?"#dadae0":"#2f3136",color:p?"#000":"#fff"}},r),n.createElement("span",{className:a.popupTriangle,style:{borderTopColor:p?"#dadae0":"#2f3136"}}))))}const c={container:"container_Ak5I",widget:"widget_DC7_",userAvatar:"userAvatar_H_Vg",userTag:"userTag_BirN",userUsername:"userUsername_uIS0",userDiscriminator:"userDiscriminator_chY_"};function l(e){let{data:t}=e;const{isDarkTheme:r}=(0,s.I)();return n.createElement(i,{title:n.createElement("span",null,n.createElement("span",{style:{paddingRight:"0.3rem"}},"discord"===t.type?t.id:t.username),n.createElement("a",{href:t.url??"",style:{color:"inherit"},target:"_blank",rel:"noreferrer"},n.createElement("svg",{width:"13.5",height:"13.5","aria-hidden":"true",viewBox:"0 0 24 24",className:"iconExternalLink_node_modules-@docusaurus-theme-classic-lib-next-theme-IconExternalLink-styles-module"},n.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"})))),mode:"click"},n.createElement("span",{className:c.container},n.createElement("span",{className:c.widget,style:{backgroundColor:r?"#2f3136":"#dadae0"}},n.createElement("img",{src:t.avatarUrl,alt:"",className:c.userAvatar}),n.createElement("span",{className:c.userTag},"discord"===t.type?n.createElement(n.Fragment,null,n.createElement("span",{className:c.userUsername,style:{color:r?"#fff":"#000"}},t.name),n.createElement("span",{className:c.userDiscriminator})):n.createElement("span",{className:c.userUsername,style:{color:r?"#fff":"#000"}},t.name)))))}},7254:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var n=r(7462),a=(r(7294),r(3905)),o=r(6035);r(9304);const s={title:"Bots - Fun",sidebar_position:3,description:"Discord bot recommendations at the category of fun."},i="Fun",c={unversionedId:"resources/bots/fun",id:"resources/bots/fun",title:"Bots - Fun",description:"Discord bot recommendations at the category of fun.",source:"@site/wiki/resources/bots/fun.md",sourceDirName:"resources/bots",slug:"/resources/bots/fun",permalink:"/resources/bots/fun",draft:!1,editUrl:"https://github.com/DiscordResources-org/wiki/edit/master/wiki/resources/bots/fun.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Bots - Fun",sidebar_position:3,description:"Discord bot recommendations at the category of fun."},sidebar:"tutorialSidebar",previous:{title:"Best Newcomer Discord Bots",permalink:"/resources/bots/best"},next:{title:"Bots - Giveaways",permalink:"/resources/bots/giveaway"}},l={},p=[{value:"Would You",id:"would-you",level:3},{value:"Memer",id:"memer",level:3},{value:"Himiko",id:"himiko",level:3},{value:"Grow a Plant",id:"grow-a-plant",level:3},{value:"TacoShack",id:"tacoshack",level:3},{value:"Tourney Bot",id:"tourney-bot",level:3},{value:"Truth Or Dare",id:"truth-or-dare",level:3},{value:"You think something is missing?",id:"you-think-something-is-missing",level:2}],u={toc:p},d="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"fun"},"Fun"),(0,a.kt)("h3",{id:"would-you"},"Would You"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Description:")," A bot to play What Would You Do, Never Have I Ever and Would You Rather.  ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Link(s):"),"  ",(0,a.kt)("br",null),"\n",(0,a.kt)("a",{parentName:"p",href:"https://discord.com/oauth2/authorize?client_id=981649513427111957&permissions=275415247936&scope=bot%20applications.commands"},"Invite Would You"),"  ",(0,a.kt)("br",null),"\n",(0,a.kt)("a",{parentName:"p",href:"https://wouldyoubot.gg/"},"Would You Website"),"  ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Credit:")," ",(0,a.kt)(o.Z,{data:{type:"discord",id:"347077478726238228",name:"dominikdev",username:"dominikdev",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/347077478726238228/1b6365388c60a8a4ee94b04afc0ab97f.webp?size=128",url:"https://discord.com/users/347077478726238228"},mdxType:"UserWidgetInline"}))),(0,a.kt)("h3",{id:"memer"},"Memer"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Description:")," Get the coolest Memes or epic Truth or Dare, Never have I ever or Would You Rather Questions in your\nDiscord Server! ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Link:\n")," ",(0,a.kt)("a",{parentName:"p",href:"https://discord.com/api/oauth2/authorize?client_id=927598798019108894&permissions=2147863616&redirect_uri=https%3A%2F%2Fmemer.sattler.dev%2Fprivacy-and-tos%3Futm_source%3Ddiscord-app-invite&response_type=code&scope=identify%20bot%20applications.commands"},"Invite Memer"),"  ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Credit:")," ",(0,a.kt)(o.Z,{data:{type:"discord",id:"340243638892101646",name:"seandev",username:"seandev",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/340243638892101646/d48fa7051f39006c3cf640efc598ca3b.webp?size=128",url:"https://discord.com/users/340243638892101646"},mdxType:"UserWidgetInline"}))),(0,a.kt)("h3",{id:"himiko"},"Himiko"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Description:"),"  Play Smash or Pass with your favorite Waifus! \ud83d\ude0d WITH OVER 50.000 CHARACTERS! \ud83d\ude32 ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Link:\n")," ",(0,a.kt)("a",{parentName:"p",href:"https://discord.com/api/oauth2/authorize?client_id=927598798019108894&permissions=2147863616&redirect_uri=https%3A%2F%2Fmemer.sattler.dev%2Fprivacy-and-tos%3Futm_source%3Ddiscord-app-invite&response_type=code&scope=identify%20bot%20applications.commands"},"Invite Himiko"),"  ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Credit:")," ",(0,a.kt)(o.Z,{data:{type:"discord",id:"340243638892101646",name:"seandev",username:"seandev",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/340243638892101646/d48fa7051f39006c3cf640efc598ca3b.webp?size=128",url:"https://discord.com/users/340243638892101646"},mdxType:"UserWidgetInline"}))),(0,a.kt)("h3",{id:"grow-a-plant"},"Grow a Plant"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Description:")," GGrow a plant with your whole community and sell it to the public marked! ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Link:\n")," ",(0,a.kt)("a",{parentName:"p",href:"https://discord.com/api/oauth2/authorize?client_id=1123690556686602340&permissions=388096&scope=bot%20applications.commands"},"Invite Grow a Plant"),"  ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Credit:")," ",(0,a.kt)(o.Z,{data:{type:"discord",id:"340243638892101646",name:"seandev",username:"seandev",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/340243638892101646/d48fa7051f39006c3cf640efc598ca3b.webp?size=128",url:"https://discord.com/users/340243638892101646"},mdxType:"UserWidgetInline"}))),(0,a.kt)("h3",{id:"tacoshack"},"TacoShack"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Description:")," A simulation bot where you own & manage a taco shack.  ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Link(s):")," ",(0,a.kt)("br",null),"\n",(0,a.kt)("a",{parentName:"p",href:"https://discord.com/oauth2/authorize?client_id=490707751832649738&permissions=67497024&scope=bot%20applications.commands"},"Invite TacoShack"),"  ",(0,a.kt)("br",null),"\n",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/tacoshack"},"TackShack Support"),"  ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Credit:")," ",(0,a.kt)(o.Z,{data:{type:"discord",id:"280428044156534784",name:"cole.17",username:"cole.17",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/280428044156534784/a_72296972a0e86dce86a68e45f7b8ac20.gif?size=128",url:"https://discord.com/users/280428044156534784"},mdxType:"UserWidgetInline"}))),(0,a.kt)("h3",{id:"tourney-bot"},"Tourney Bot"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Description:")," Tourney Bot is the best way to host any tournament within Discord. Using our powerful automation\nfeatures, you can create, customize, and invite players & teams to your bracket, in just a few clicks.  ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Link(s):")," ",(0,a.kt)("br",null),"\n",(0,a.kt)("a",{parentName:"p",href:"https://tourneybot.gg/invite-tourney-bot"},"Invite Tourney Bot"),"  ",(0,a.kt)("br",null),"\n",(0,a.kt)("a",{parentName:"p",href:"https://tourneybot.gg/support"},"Tourney Bot Support"),"  ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Credit:")," ",(0,a.kt)(o.Z,{data:{type:"discord",id:"942821573302304869",name:"joyn",username:"joyn",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/942821573302304869/97f56a2af3889c174c96ed685c60aac0.webp?size=128",url:"https://discord.com/users/942821573302304869"},mdxType:"UserWidgetInline"}))),(0,a.kt)("h3",{id:"truth-or-dare"},"Truth Or Dare"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Description:")," A bot for playing Truth Or Dare, Never Have I Ever and Would You Rather.  ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Link(s):"),"  ",(0,a.kt)("br",null),"\n",(0,a.kt)("a",{parentName:"p",href:"https://discord.com/oauth2/authorize?client_id=692045914436796436&permissions=19456&scope=bot%20applications.commands"},"Invite Truth Or Dare"),"  ",(0,a.kt)("br",null),"\n",(0,a.kt)("a",{parentName:"p",href:"https://truthordarebot.xyz/"},"Truth Or Dare Website"),"  ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Credit:")," ",(0,a.kt)(o.Z,{data:{type:"discord",id:"276544649148235776",name:"thijsdev",username:"thijsdev",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/276544649148235776/028979d6ba57aa775832428041f1411e.webp?size=128",url:"https://discord.com/users/276544649148235776"},mdxType:"UserWidgetInline"}))),(0,a.kt)("h2",{id:"you-think-something-is-missing"},"You think something is missing?"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Contact us on our Discord or an email to ",(0,a.kt)("a",{parentName:"p",href:"mailto:hi@disgd.wiki"},"hi@disgd.wiki")," and we will add it as soon as possible.")))}m.isMDXComponent=!0}}]);