"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[9712],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),p=n,h=d["".concat(l,".").concat(p)]||d[p]||m[p]||o;return r?a.createElement(h,s(s({ref:t},u),{},{components:r})):a.createElement(h,s({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2021:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(7294);function n(e){let{data:t}=e;return a.createElement("div",{style:{marginTop:"-1rem",marginBottom:"-0.5rem"}},a.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((e=>a.createElement("a",{href:e.url,target:"_blank",className:"col col--6 authorCol_node_modules-@docusaurus-theme-classic-lib-next-theme-BlogPostAuthors-styles-module",key:e.id,style:{color:"inherit",textDecoration:"none"},rel:"noreferrer"},a.createElement("div",{className:"avatar margin-bottom--sm"},a.createElement("div",{className:"avatar__photo"},a.createElement("img",{className:"image_node_modules-@docusaurus-theme-classic-lib-next-theme-BlogPostAuthor-styles-module",src:e.avatarUrl,alt:e.name})),a.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:"",itemType:"https://schema.org/Person"},a.createElement("div",{className:"avatar__name"},a.createElement("span",{itemProp:"name"},function(e){return"discord"===e.type?a.createElement("span",null,e.name,a.createElement("span",{style:{color:"lightgray",fontWeight:400}})):e.name}(e))),a.createElement("small",{className:"avatar__subtitle",itemProp:"description",style:{color:"gray"}},function(e){return"discord"===e.type?e.id:e.username}(e)))))))))}},9304:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(7294),n=r(2949);function o(e){let{invite:t}=e;const{isDarkTheme:r}=(0,n.I)();return a.createElement("a",{href:`https://discord.gg/${t}`,target:"_blank",rel:"noreferrer"},a.createElement("img",{src:`https://invidget.switchblade.xyz/${t}?theme=${r?"dark":"light"}`,alt:""}))}},6035:(e,t,r)=>{r.d(t,{Z:()=>c});var a=r(7294);const n={container:"container_usuQ",children:"children_AcWt",popup:"popup_N1vF",containerHover:"containerHover__1Ny",popupText:"popupText_TNeV",popupTriangle:"popupTriangle_VKJW"};function o(e){let{children:t,onClickOutside:r}=e;const n=(0,a.useRef)(null);function o(e){n.current&&!n.current.contains(e.target)&&r(e)}return(0,a.useEffect)((()=>(document.addEventListener("mousedown",o),()=>document.removeEventListener("mousedown",o))),[]),a.createElement("span",{ref:n},t)}var s=r(2949);function i(e){let{children:t,title:r,mode:i="hover"}=e;const[l,c]=(0,a.useState)(!1),{isDarkTheme:u}=(0,s.I)();return a.createElement(o,{onClickOutside:()=>c(!1)},a.createElement("span",{className:`${n.container} ${"hover"===i?n.containerHover:""}`},a.createElement("span",{onClick:()=>c(!l),className:n.children},t),a.createElement("span",{className:n.popup,style:{display:"click"===i&&l?"block":"none"}},a.createElement("span",{className:n.popupText,style:{backgroundColor:u?"#dadae0":"#2f3136",color:u?"#000":"#fff"}},r),a.createElement("span",{className:n.popupTriangle,style:{borderTopColor:u?"#dadae0":"#2f3136"}}))))}const l={container:"container_Ak5I",widget:"widget_DC7_",userAvatar:"userAvatar_H_Vg",userTag:"userTag_BirN",userUsername:"userUsername_uIS0",userDiscriminator:"userDiscriminator_chY_"};function c(e){let{data:t}=e;const{isDarkTheme:r}=(0,s.I)();return a.createElement(i,{title:a.createElement("span",null,a.createElement("span",{style:{paddingRight:"0.3rem"}},"discord"===t.type?t.id:t.username),a.createElement("a",{href:t.url??"",style:{color:"inherit"},target:"_blank",rel:"noreferrer"},a.createElement("svg",{width:"13.5",height:"13.5","aria-hidden":"true",viewBox:"0 0 24 24",className:"iconExternalLink_node_modules-@docusaurus-theme-classic-lib-next-theme-IconExternalLink-styles-module"},a.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"})))),mode:"click"},a.createElement("span",{className:l.container},a.createElement("span",{className:l.widget,style:{backgroundColor:r?"#2f3136":"#dadae0"}},a.createElement("img",{src:t.avatarUrl,alt:"",className:l.userAvatar}),a.createElement("span",{className:l.userTag},"discord"===t.type?a.createElement(a.Fragment,null,a.createElement("span",{className:l.userUsername,style:{color:r?"#fff":"#000"}},t.name),a.createElement("span",{className:l.userDiscriminator})):a.createElement("span",{className:l.userUsername,style:{color:r?"#fff":"#000"}},t.name)))))}},6497:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var a=r(7462),n=(r(7294),r(3905)),o=(r(6035),r(2021));r(9304);const s={title:"The revival of Discord Resources",description:"Read about the revival of Discord Resources and the new website!",tags:["changelog"]},i=void 0,l={permalink:"/blog/2023/08/31/changelog",source:"@site/blog/2023-08-31-changelog.md",title:"The revival of Discord Resources",description:"Read about the revival of Discord Resources and the new website!",date:"2023-08-31T00:00:00.000Z",formattedDate:"August 31, 2023",tags:[{label:"changelog",permalink:"/blog/tags/changelog"}],readingTime:1.165,hasTruncateMarker:!1,authors:[],frontMatter:{title:"The revival of Discord Resources",description:"Read about the revival of Discord Resources and the new website!",tags:["changelog"]}},c={authorsImageUrls:[]},u=[{value:"What&#39;s Next?",id:"whats-next",level:2},{value:"Get Involved",id:"get-involved",level:2},{value:"Stay Updated",id:"stay-updated",level:2}],d={toc:u},m="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)(o.Z,{data:[{type:"discord",id:"340243638892101646",name:"seandev",username:"seandev",discriminator:"0",avatarUrl:"https://cdn.discordapp.com/avatars/340243638892101646/d48fa7051f39006c3cf640efc598ca3b.webp?size=128",url:"https://discord.com/users/340243638892101646"}],mdxType:"BlogAuthorWidget"})),(0,n.kt)("p",null,"We are thrilled to announce the much-anticipated revival of ",(0,n.kt)("a",{parentName:"p",href:"http://discordresources.org/"},"DiscordResources.org"),"!"),(0,n.kt)("p",null,"For several months, the old site (.com) remained outdated and unmaintained, leaving the Discord community in dire need of an updated and active resource hub. Recognizing this need, we have been officially authorized to work on this fork and are committed to updating all the information provided on the new site (.org) to ensure it stays current and valuable for our community."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://media.discordapp.net/attachments/1000530683841757206/1146879605274333184/image.png",alt:"Official Authorization"})),(0,n.kt)("p",null,"The image above is proof of our official authorization to work on this project."),(0,n.kt)("h2",{id:"whats-next"},"What's Next?"),(0,n.kt)("p",null,"Our dedicated team is working diligently to update the site with the latest information, tools, and resources. We are committed to making DiscordResources.org the go-to destination for all Discord-related content. Whether you are looking for bots, servers, or any other Discord-related resources, you'll find it all here."),(0,n.kt)("h2",{id:"get-involved"},"Get Involved"),(0,n.kt)("p",null,"We are always on the lookout for contributors who are as passionate about Discord as we are. If you are interested in contributing to the revival of DiscordResources.org, please get in touch with us."),(0,n.kt)("h2",{id:"stay-updated"},"Stay Updated"),(0,n.kt)("p",null,"Make sure to check the website regularly for updates, and follow us on our social media channels to stay informed about the latest developments."),(0,n.kt)("p",null,"We are incredibly excited about this change and are looking forward to serving the Discord community better than ever before. Thank you for your continued support!"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"The DiscordResources.org Team"))}p.isMDXComponent=!0}}]);