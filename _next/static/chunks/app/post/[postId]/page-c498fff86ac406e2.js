(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[643],{7123:function(e,s,l){Promise.resolve().then(l.bind(l,8562)),Promise.resolve().then(l.bind(l,1797))},8562:function(e,s,l){"use strict";l.r(s),l.d(s,{default:function(){return j}});var t=l(7437),i=l(2265),n=l(703),a=l(8792),r={src:"/_next/static/media/YOONILLO.5475335d.png",height:897,width:901,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/AKmqqZ2fn5ucmpeWj5SXloiKhpOYjnFpXACXmpmdoKCcm5eYgnJyXFGssauQmpNNUUwAfIOFeoGCkpCLqJ2UgGpZmJuTsLesfYJ3AH58dqKgnLqzrbWlknJaOUhDPKq3qZ6rnQDX1tLNx8KZhG59YkJoVDoAAABLVVCltKgA09PShIWGAAAAWEc2WUcyAAAAhpGGjZmPAKmop6+xsSkrKmlRM1A3FVBYUrC/smBnYgDLz870+/qfo6FuZlg8MSEsMi9ud3BnbGR45V9oOyjB+QAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8};let c=e=>{let{showMessage:s,message:l}=e;return(0,t.jsx)("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-md shadow-lg ".concat(s?"block":"hidden"),children:(0,t.jsx)("h3",{children:l})})};function d(){let[e,s]=(0,i.useState)(!1),[l,n]=(0,i.useState)(""),a=e=>{navigator.clipboard.writeText(e).then(()=>{console.log("Email copied to clipboard:",e)}).catch(e=>{}),n("클립보드로 복사 완료!"),s(!0),setTimeout(()=>{s(!1),n("")},1e3)},r="yildbs@gmail.com";return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"highlight hover:cursor-pointer ",onClick:()=>a(r),children:(0,t.jsx)("h5",{className:"font-bold",children:r})}),(0,t.jsx)("div",{className:"z-50",children:(0,t.jsx)(c,{showMessage:e,message:l})})]})}function o(){return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("a",{href:"https://github.com/yildbs",className:"madimi-one-regular text-black",target:"_blank",children:(0,t.jsx)("h5",{children:"GitHub"})})})}function h(){return(0,t.jsxs)("div",{className:"w-full flex flex-col w-full h-full items-center p-5 ",children:[(0,t.jsx)("div",{className:"w-48 flex md:justify-end py-5",children:(0,t.jsx)(a.default,{className:"link",href:"/posts/1",children:(0,t.jsx)(n.default,{src:r,alt:"profile image",className:"object-cover aspect-square relative rounded-full border border-primary shadow-sm h-full "})})}),(0,t.jsx)(a.default,{className:"",href:"/posts/1",children:(0,t.jsx)("h4",{className:"gugi-regular text-black",children:"윤일로그 : 윤일로의 블로그"})}),(0,t.jsxs)("div",{className:"w-full flex flex-col w-full h-full items-center py-5",children:[(0,t.jsx)(o,{}),(0,t.jsx)(d,{})]})]})}function u(e){let{to:s,children:l}=e;return(0,t.jsx)("div",{id:"category-link",className:"w-fit px-1",children:(0,t.jsx)(a.default,{className:"link",href:s,children:(0,t.jsx)("h5",{children:l})})})}l(3665);var x=JSON.parse('{"categories":["Posts","Posts/Obsidian","Posts/Python","Posts/Side Project"],"all_posts":["20240323_1711156165597","20240331_1711869713011","20240328_1711605240936","20240329_1711705653695"],"Posts":{"1":["20240331_1711869713011","20240329_1711705653695","20240328_1711605240936","20240323_1711156165597"],"number":4,"total_pages":1},"Posts/Obsidian":{"1":["20240328_1711605240936","20240323_1711156165597"],"number":2,"total_pages":1},"Posts/Side Project":{"1":["20240331_1711869713011"],"number":1,"total_pages":1},"Posts/Python":{"1":["20240329_1711705653695"],"number":1,"total_pages":1}}');function m(){let e=x.categories.sort(),s={};return e.forEach((e,l)=>{let t=e.split("/");s[e]=[t[t.length-1],t.length-1]}),(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("nav",{className:"w-full ",children:(0,t.jsx)("ul",{children:(0,t.jsxs)("li",{className:"flex flex-col px-5",children:[(0,t.jsx)("div",{className:"",children:(0,t.jsx)(u,{to:"/aboutme",children:"About Me"})}),(0,t.jsx)("div",{className:"",children:(0,t.jsx)(u,{to:"/myhistory",children:"My History"})}),(0,t.jsx)("ul",{className:"",children:(0,t.jsx)("li",{className:"flex flex-col",children:e.map((e,l)=>(0,t.jsx)(i.Fragment,{children:(0,t.jsx)(u,{to:"/".concat(e.toLowerCase(),"/1"),children:(0,t.jsxs)("div",{className:"flex flex-row ".concat(""),children:[s[e][1]>0&&(0,t.jsx)("div",{style:{paddingLeft:"".concat(s[e][1],"rem")}}),"".concat(s[e][0]," (").concat(x[e].number,")")]})})},l))})})]})})})})}function f(){return(0,t.jsx)("div",{className:"flex flex-col",children:(0,t.jsx)(m,{})})}function j(){let[e,s]=(0,i.useState)(!0),l="55px";return(0,t.jsxs)("div",{className:"flex flex-col w-full absolute lg:relative flex flex-col z-40",style:{maxWidth:"400px"},children:[(0,t.jsx)("div",{id:"hamburger-button",className:"z-50 left-0 top-0 block w-full h-full ",style:{maxWidth:l,maxHeight:l},children:(0,t.jsx)("button",{className:"bg-transparent px-2 py-1 lg:hidden ",onClick:()=>{s(!e)},children:(0,t.jsx)("div",{className:"text-3xl align-middle",children:"☰"})})}),(0,t.jsxs)("div",{className:"w-full h-full bg-blue-50 lg:block overflow-y-auto  ".concat(e?"block":"hidden"),style:{marginTop:"-".concat(l)},children:[(0,t.jsx)("div",{id:"my-profile",className:"pt-12 ",children:(0,t.jsx)(h,{})}),(0,t.jsx)("div",{id:"main-router",className:"pt-12",children:(0,t.jsx)(f,{})}),(0,t.jsxs)("div",{id:"font-size-test",className:"hidden",children:[(0,t.jsx)("h1",{children:"안녕하세요. h1 사이즈 입니다"}),(0,t.jsx)("h2",{children:"안녕하세요. h2 사이즈 입니다"}),(0,t.jsx)("h3",{children:"안녕하세요. h3 사이즈 입니다"}),(0,t.jsx)("h4",{children:"안녕하세요. h4 사이즈 입니다"}),(0,t.jsx)("h5",{children:"안녕하세요. h5 사이즈 입니다"}),(0,t.jsx)("h6",{children:"안녕하세요. h6 사이즈 입니다"})]}),(0,t.jsx)("div",{id:"main-section-1-spacer",className:"pb-96"})]})]})}},1797:function(e,s,l){"use strict";l.r(s),l.d(s,{default:function(){return n}});var t=l(7437),i=l(5313);function n(){let e=(0,i.useRouter)();return(0,t.jsx)("div",{className:"cursor-pointer text-blue-500",onClick:()=>{e.back()},children:(0,t.jsx)("h5",{children:"뒤로가기"})})}l(2265)},3665:function(){}},function(e){e.O(0,[607,971,69,744],function(){return e(e.s=7123)}),_N_E=e.O()}]);