(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[910],{3329:function(e,l,s){Promise.resolve().then(s.t.bind(s,1749,23)),Promise.resolve().then(s.t.bind(s,5250,23)),Promise.resolve().then(s.bind(s,8562)),Promise.resolve().then(s.t.bind(s,3665,23))},8562:function(e,l,s){"use strict";s.r(l),s.d(l,{default:function(){return j}});var t=s(7437),i=s(2265),a=s(703),n=s(8792),r={src:"/_next/static/media/YOONILLO.5475335d.png",height:897,width:901,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/AKmqqZ2fn5ucmpeWj5SXloiKhpOYjnFpXACXmpmdoKCcm5eYgnJyXFGssauQmpNNUUwAfIOFeoGCkpCLqJ2UgGpZmJuTsLesfYJ3AH58dqKgnLqzrbWlknJaOUhDPKq3qZ6rnQDX1tLNx8KZhG59YkJoVDoAAABLVVCltKgA09PShIWGAAAAWEc2WUcyAAAAhpGGjZmPAKmop6+xsSkrKmlRM1A3FVBYUrC/smBnYgDLz870+/qfo6FuZlg8MSEsMi9ud3BnbGR45V9oOyjB+QAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8};let c=e=>{let{showMessage:l,message:s}=e;return(0,t.jsx)("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-md shadow-lg ".concat(l?"block":"hidden"),children:(0,t.jsx)("h3",{children:s})})};function d(){let[e,l]=(0,i.useState)(!1),[s,a]=(0,i.useState)(""),n=e=>{navigator.clipboard.writeText(e).then(()=>{console.log("Email copied to clipboard:",e)}).catch(e=>{}),a("클립보드로 복사 완료!"),l(!0),setTimeout(()=>{l(!1),a("")},1e3)},r="yildbs@gmail.com";return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"highlight hover:cursor-pointer ",onClick:()=>n(r),children:(0,t.jsx)("h5",{className:"font-bold",children:r})}),(0,t.jsx)("div",{className:"z-50",children:(0,t.jsx)(c,{showMessage:e,message:s})})]})}function o(){return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("a",{href:"https://github.com/yildbs",className:"madimi-one-regular text-black",target:"_blank",children:(0,t.jsx)("h5",{children:"GitHub"})})})}function h(){return(0,t.jsxs)("div",{className:"w-full flex flex-col w-full h-full items-center p-5 ",children:[(0,t.jsx)("div",{className:"w-48 flex md:justify-end py-5",children:(0,t.jsx)(n.default,{className:"link",href:"/posts/1",children:(0,t.jsx)(a.default,{src:r,alt:"profile image",className:"object-cover aspect-square relative rounded-full border border-primary shadow-sm h-full "})})}),(0,t.jsx)(n.default,{className:"",href:"/posts/1",children:(0,t.jsx)("h4",{className:"gugi-regular text-black",children:"윤일로그 : 윤일로의 블로그"})}),(0,t.jsxs)("div",{className:"w-full flex flex-col w-full h-full items-center py-5",children:[(0,t.jsx)(o,{}),(0,t.jsx)(d,{})]})]})}function x(e){let{to:l,children:s}=e;return(0,t.jsx)("div",{id:"category-link",className:"w-fit px-1",children:(0,t.jsx)(n.default,{className:"link",href:l,children:(0,t.jsx)("h5",{children:s})})})}s(3665);var m=JSON.parse('{"categories":["Posts","Posts/Obsidian","Posts/Side Project"],"all_posts":["20240402_1712057630223","20240323_1711156165597","20240331_1711869713011","20240328_1711605240936"],"Posts":{"1":["20240402_1712057630223","20240331_1711869713011","20240328_1711605240936","20240323_1711156165597"],"number":4,"total_pages":1},"Posts/Side Project":{"1":["20240402_1712057630223","20240331_1711869713011"],"number":2,"total_pages":1},"Posts/Obsidian":{"1":["20240328_1711605240936","20240323_1711156165597"],"number":2,"total_pages":1}}');function u(){let e=m.categories.sort(),l={};return e.forEach((e,s)=>{let t=e.split("/");l[e]=[t[t.length-1],t.length-1]}),(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("nav",{className:"w-full ",children:(0,t.jsx)("ul",{children:(0,t.jsxs)("li",{className:"flex flex-col px-5",children:[(0,t.jsx)("div",{className:"",children:(0,t.jsx)(x,{to:"/aboutme",children:"About Me"})}),(0,t.jsx)("div",{className:"",children:(0,t.jsx)(x,{to:"/myhistory",children:"My History"})}),(0,t.jsx)("ul",{className:"",children:(0,t.jsx)("li",{className:"flex flex-col",children:e.map((e,s)=>(0,t.jsx)(i.Fragment,{children:(0,t.jsx)(x,{to:"/".concat(e.toLowerCase().replace(" ","-"),"/1"),children:(0,t.jsxs)("div",{className:"flex flex-row ".concat(""),children:[l[e][1]>0&&(0,t.jsx)("div",{style:{paddingLeft:"".concat(l[e][1],"rem")}}),"".concat(l[e][0]," (").concat(m[e].number,")")]})})},s))})})]})})})})}function f(){return(0,t.jsx)("div",{className:"flex flex-col",children:(0,t.jsx)(u,{})})}function j(){let[e,l]=(0,i.useState)(!0),s="55px";return(0,t.jsxs)("div",{className:"flex flex-col w-full absolute lg:relative flex flex-col z-40",style:{maxWidth:"400px"},children:[(0,t.jsx)("div",{id:"hamburger-button",className:"z-50 left-0 top-0 block w-full h-full ",style:{maxWidth:s,maxHeight:s},children:(0,t.jsx)("button",{className:"bg-transparent px-2 py-1 lg:hidden ",onClick:()=>{l(!e)},children:(0,t.jsx)("div",{className:"text-3xl align-middle",children:"☰"})})}),(0,t.jsxs)("div",{className:"w-full h-full bg-blue-50 lg:block overflow-y-auto  ".concat(e?"block":"hidden"),style:{marginTop:"-".concat(s)},children:[(0,t.jsx)("div",{id:"my-profile",className:"pt-12 ",children:(0,t.jsx)(h,{})}),(0,t.jsx)("div",{id:"main-router",className:"pt-12",children:(0,t.jsx)(f,{})}),(0,t.jsxs)("div",{id:"font-size-test",className:"hidden",children:[(0,t.jsx)("h1",{children:"안녕하세요. h1 사이즈 입니다"}),(0,t.jsx)("h2",{children:"안녕하세요. h2 사이즈 입니다"}),(0,t.jsx)("h3",{children:"안녕하세요. h3 사이즈 입니다"}),(0,t.jsx)("h4",{children:"안녕하세요. h4 사이즈 입니다"}),(0,t.jsx)("h5",{children:"안녕하세요. h5 사이즈 입니다"}),(0,t.jsx)("h6",{children:"안녕하세요. h6 사이즈 입니다"})]}),(0,t.jsx)("div",{id:"main-section-1-spacer",className:"pb-96"})]})]})}},3665:function(){}},function(e){e.O(0,[607,971,69,744],function(){return e(e.s=3329)}),_N_E=e.O()}]);