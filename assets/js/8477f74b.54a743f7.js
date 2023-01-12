"use strict";(self.webpackChunkice_website_v3=self.webpackChunkice_website_v3||[]).push([[1526],{4852:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(9231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7080:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(2203),a=(n(9231),n(4852));const o={title:"\u547d\u4ee4\u884c",order:14},i=void 0,l={unversionedId:"guide/basic/cli",id:"guide/basic/cli",title:"\u547d\u4ee4\u884c",description:"\u6307\u5b9a\u547d\u4ee4\u884c\u53c2\u6570",source:"@site/docs/guide/basic/cli.md",sourceDirName:"guide/basic",slug:"/guide/basic/cli",permalink:"/docs/guide/basic/cli",draft:!1,editUrl:"https://github.com/alibaba/ice/edit/master/website/docs/guide/basic/cli.md",tags:[],version:"current",frontMatter:{title:"\u547d\u4ee4\u884c",order:14},sidebar:"docs",previous:{title:"\u5b9a\u5236 HTML",permalink:"/docs/guide/basic/document"},next:{title:"\u6784\u5efa\u914d\u7f6e",permalink:"/docs/guide/basic/config"}},c={},s=[{value:"\u6307\u5b9a\u547d\u4ee4\u884c\u53c2\u6570",id:"\u6307\u5b9a\u547d\u4ee4\u884c\u53c2\u6570",level:2},{value:"start",id:"start",level:2},{value:"build",id:"build",level:2},{value:"help",id:"help",level:2},{value:"version",id:"version",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u6307\u5b9a\u547d\u4ee4\u884c\u53c2\u6570"},"\u6307\u5b9a\u547d\u4ee4\u884c\u53c2\u6570"),(0,a.kt)("p",null,"\u6307\u5b9a\u547d\u4ee4\u884c\u53c2\u6570\u6709\u4e24\u79cd\u65b9\u5f0f\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"package.json")," \u4e2d\u6307\u5b9a\u53c2\u6570\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},'{\n  "scripts": {\n-   "start": "ice start"\n+   "start": "ice start --https"\n  }\n}\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u5728\u547d\u4ee4\u884c\u4e2d\u6307\u5b9a\u53c2\u6570\uff08\u9700\u8981\u591a\u52a0 ",(0,a.kt)("inlineCode",{parentName:"li"},"--")," \u5b57\u7b26\uff09\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm start -- --https\n")),(0,a.kt)("h2",{id:"start"},"start"),(0,a.kt)("p",null,"\u542f\u52a8\u672c\u5730\u5f00\u53d1\u670d\u52a1\u5668\uff0c\u7528\u4e8e\u8c03\u8bd5\u9879\u76ee\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Usage: ice-cli start [options]\n\nOptions:\n  --target <target>      \u6307\u5b9a\u7f16\u8bd1\u7684 target\n  --mode <mode>          \u6307\u5b9a mode\n  --config <config>      \u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\u8def\u5f84\n  -h, --host <host>      \u6307\u5b9a\u5f00\u53d1\u670d\u52a1\u5668\u4e3b\u673a\u540d\n  -p, --port <port>      \u6307\u5b9a\u5f00\u53d1\u670d\u52a1\u5668\u7aef\u53e3\n  --no-open              \u7981\u6b62\u9ed8\u8ba4\u6253\u5f00\u6d4f\u89c8\u5668\u9884\u89c8\u884c\u4e3a\n  --no-mock              \u7981\u7528 mock \u670d\u52a1\n  --rootDir <rootDir>    \u6307\u5b9a\u9879\u76ee\u7684\u6839\u8def\u5f84\n  --analyzer             \u5f00\u542f\u6784\u5efa\u5206\u6790\n  --https [https]        \u5f00\u542f https\n  --force                \u79fb\u9664\u6784\u5efa\u7f13\u5b58\n")),(0,a.kt)("h2",{id:"build"},"build"),(0,a.kt)("p",null,"\u6784\u5efa\u9879\u76ee\uff0c\u8f93\u51fa\u751f\u4ea7\u73af\u5883\u4e0b\u7684\u8d44\u6e90\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Usage: ice-cli build [options]\n\nOptions:\n  --target <target>      \u6307\u5b9a\u7f16\u8bd1\u7684 target\n  --mode <mode>          \u6307\u5b9a mode\n  --analyzer             \u5f00\u542f\u6784\u5efa\u5206\u6790\n  --config <config>      \u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\u8def\u5f84\n  --rootDir <rootDir>    \u6307\u5b9a\u9879\u76ee\u7684\u6839\u8def\u5f84\n")),(0,a.kt)("h2",{id:"help"},"help"),(0,a.kt)("p",null,"\u67e5\u770b\u5e2e\u52a9\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ ice help\nUsage: ice-cli <command> [options]\n\nOptions:\n  -V, --version    output the version number\n  -h, --help       display help for command\n\nCommands:\n  build [options]  build project\n  start [options]  start server\n  help [command]   display help for command\n")),(0,a.kt)("p",null,"\u4e5f\u53ef\u4ee5\u67e5\u770b\u6307\u5b9a\u547d\u4ee4\u7684\u8be6\u7ec6\u5e2e\u52a9\u4fe1\u606f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ ice help build\nUsage: ice-cli build [options]\n\nOptions:\n  --target <target>      set target\n  --mode <mode>          set mode\n  --analyzer             visualize size of output files\n  --config <config>      use custom config\n  --rootDir <rootDir>    project root directory\n  -h, --help             display help for command\n")),(0,a.kt)("h2",{id:"version"},"version"),(0,a.kt)("p",null,"\u67e5\u770b ice.js \u7684\u7248\u672c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ ice --version\n\n3.0.0\n")))}u.isMDXComponent=!0}}]);