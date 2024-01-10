"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7220],{3905:(e,t,a)=>{a.d(t,{Zo:()=>b,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),g=p(a),u=r,y=g["".concat(l,".").concat(u)]||g[u]||s[u]||i;return a?n.createElement(y,c(c({ref:t},b),{},{components:a})):n.createElement(y,c({ref:t},b))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,c=new Array(i);c[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var p=2;p<i;p++)c[p]=a[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},9719:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>c,default:()=>b,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=a(3117),r=(a(7294),a(3905));const i={sidebar_label:"agent_capability",title:"agentchat.contrib.capabilities.agent_capability"},c=void 0,o={unversionedId:"reference/agentchat/contrib/capabilities/agent_capability",id:"reference/agentchat/contrib/capabilities/agent_capability",isDocsHomePage:!1,title:"agentchat.contrib.capabilities.agent_capability",description:"AgentCapability Objects",source:"@site/docs/reference/agentchat/contrib/capabilities/agent_capability.md",sourceDirName:"reference/agentchat/contrib/capabilities",slug:"/reference/agentchat/contrib/capabilities/agent_capability",permalink:"/autogen/docs/reference/agentchat/contrib/capabilities/agent_capability",editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/reference/agentchat/contrib/capabilities/agent_capability.md",tags:[],version:"current",frontMatter:{sidebar_label:"agent_capability",title:"agentchat.contrib.capabilities.agent_capability"},sidebar:"referenceSideBar",next:{title:"teachability",permalink:"/autogen/docs/reference/agentchat/contrib/capabilities/teachability"}},l=[{value:"AgentCapability Objects",id:"agentcapability-objects",children:[{value:"add_to_agent",id:"add_to_agent",children:[],level:4}],level:2}],p={toc:l};function b(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"agentcapability-objects"},"AgentCapability Objects"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class AgentCapability()\n")),(0,r.kt)("p",null,"Base class for composable capabilities that can be added to an agent."),(0,r.kt)("h4",{id:"add_to_agent"},"add","_","to","_","agent"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def add_to_agent(agent: ConversableAgent)\n")),(0,r.kt)("p",null,"Adds a particular capability to the given agent. Must be implemented by the capability subclass.\nAn implementation will typically call agent.register_hook() one or more times. See teachability.py as an example."))}b.isMDXComponent=!0}}]);