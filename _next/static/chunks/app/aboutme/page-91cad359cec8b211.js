(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[485,931],{7053:function(e,l,s){Promise.resolve().then(s.bind(s,8562))},8562:function(e,l,s){"use strict";s.r(l),s.d(l,{default:function(){return j}});var t=s(7437),a=s(2265),i=s(703),n=s(8792),c={src:"/_next/static/media/YOONILLO.5475335d.png",height:897,width:901,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/AKmqqZ2fn5ucmpeWj5SXloiKhpOYjnFpXACXmpmdoKCcm5eYgnJyXFGssauQmpNNUUwAfIOFeoGCkpCLqJ2UgGpZmJuTsLesfYJ3AH58dqKgnLqzrbWlknJaOUhDPKq3qZ6rnQDX1tLNx8KZhG59YkJoVDoAAABLVVCltKgA09PShIWGAAAAWEc2WUcyAAAAhpGGjZmPAKmop6+xsSkrKmlRM1A3FVBYUrC/smBnYgDLz870+/qfo6FuZlg8MSEsMi9ud3BnbGR45V9oOyjB+QAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8};let r=e=>{let{showMessage:l,message:s}=e;return(0,t.jsx)("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-md shadow-lg ".concat(l?"block":"hidden"),children:(0,t.jsx)("h3",{children:s})})};function d(){let[e,l]=(0,a.useState)(!1),[s,i]=(0,a.useState)(""),n=e=>{navigator.clipboard.writeText(e).then(()=>{console.log("Email copied to clipboard:",e)}).catch(e=>{}),i("클립보드로 복사 완료!"),l(!0),setTimeout(()=>{l(!1),i("")},1e3)},c="yildbs@gmail.com";return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"highlight hover:cursor-pointer ",onClick:()=>n(c),children:(0,t.jsx)("h5",{className:"font-bold",children:c})}),(0,t.jsx)("div",{className:"z-50",children:(0,t.jsx)(r,{showMessage:e,message:s})})]})}function o(){return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("a",{href:"https://github.com/yildbs",className:"madimi-one-regular text-black",target:"_blank",children:(0,t.jsx)("h5",{children:"GitHub"})})})}function h(){return(0,t.jsxs)("div",{className:"w-full flex flex-col w-full h-full items-center p-5 ",children:[(0,t.jsx)("div",{className:"w-48 flex md:justify-end py-5",children:(0,t.jsx)(n.default,{className:"link",href:"/posts/1",children:(0,t.jsx)(i.default,{src:c,alt:"profile image",className:"object-cover aspect-square relative rounded-full border border-primary shadow-sm h-full "})})}),(0,t.jsx)(n.default,{className:"",href:"/posts/1",children:(0,t.jsx)("h4",{className:"gugi-regular text-black",children:"윤일로그 : 윤일로의 블로그"})}),(0,t.jsxs)("div",{className:"w-full flex flex-col w-full h-full items-center py-5",children:[(0,t.jsx)(o,{}),(0,t.jsx)(d,{})]})]})}function x(e){let{to:l,children:s}=e;return(0,t.jsx)("div",{id:"category-link",className:"w-fit px-1",children:(0,t.jsx)(n.default,{className:"link",href:l,children:(0,t.jsx)("h5",{children:s})})})}s(3665);var u=JSON.parse('{"categories":["Posts","Posts/Obsidian","Posts/Python"],"all_posts":["20240323_1711156165597","20240328_1711605240936","20240329_1711705653695"],"Posts":{"1":["20240329_1711705653695","20240328_1711605240936","20240323_1711156165597"],"number":3,"total_pages":1},"Posts/Obsidian":{"1":["20240328_1711605240936","20240323_1711156165597"],"number":2,"total_pages":1},"Posts/Python":{"1":["20240329_1711705653695"],"number":1,"total_pages":1}}');function m(){let e=(u.categories.forEach(e=>{u[e.toLowerCase()]=u[e]}),u),l=e.categories.sort(),s={};return l.forEach((e,l)=>{let t=e.split("/");s[e]=[t[t.length-1],t.length-1]}),(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("nav",{className:"w-full ",children:(0,t.jsx)("ul",{children:(0,t.jsxs)("li",{className:"flex flex-col px-5",children:[(0,t.jsx)("div",{className:"",children:(0,t.jsx)(x,{to:"/aboutme",children:"About Me"})}),(0,t.jsx)("div",{className:"",children:(0,t.jsx)(x,{to:"/myhistory",children:"My History"})}),(0,t.jsx)("ul",{className:"",children:(0,t.jsx)("li",{className:"flex flex-col",children:l.map((l,i)=>(0,t.jsx)(a.Fragment,{children:(0,t.jsx)(x,{to:"/".concat(l.toLowerCase(),"/1"),children:(0,t.jsxs)("div",{className:"flex flex-row ".concat(""),children:[s[l][1]>0&&(0,t.jsx)("div",{style:{paddingLeft:"".concat(s[l][1],"rem")}}),"".concat(s[l][0]," (").concat(e[l].number,")")]})})},i))})})]})})})})}function f(){return(0,t.jsx)("div",{className:"flex flex-col",children:(0,t.jsx)(m,{})})}function j(){let[e,l]=(0,a.useState)(!0),s="55px";return(0,t.jsxs)("div",{className:"flex flex-col w-full absolute lg:relative flex flex-col z-40",style:{maxWidth:"400px"},children:[(0,t.jsx)("div",{id:"hamburger-button",className:"z-50 left-0 top-0 block w-full h-full ",style:{maxWidth:s,maxHeight:s},children:(0,t.jsx)("button",{className:"bg-transparent px-2 py-1 lg:hidden ",onClick:()=>{l(!e)},children:(0,t.jsx)("div",{className:"text-3xl align-middle",children:"☰"})})}),(0,t.jsxs)("div",{className:"w-full h-full bg-blue-50 lg:block overflow-y-auto  ".concat(e?"block":"hidden"),style:{marginTop:"-".concat(s)},children:[(0,t.jsx)("div",{id:"my-profile",className:"pt-12 ",children:(0,t.jsx)(h,{})}),(0,t.jsx)("div",{id:"main-router",className:"pt-12",children:(0,t.jsx)(f,{})}),(0,t.jsxs)("div",{id:"font-size-test",className:"hidden",children:[(0,t.jsx)("h1",{children:"안녕하세요. h1 사이즈 입니다"}),(0,t.jsx)("h2",{children:"안녕하세요. h2 사이즈 입니다"}),(0,t.jsx)("h3",{children:"안녕하세요. h3 사이즈 입니다"}),(0,t.jsx)("h4",{children:"안녕하세요. h4 사이즈 입니다"}),(0,t.jsx)("h5",{children:"안녕하세요. h5 사이즈 입니다"}),(0,t.jsx)("h6",{children:"안녕하세요. h6 사이즈 입니다"})]}),(0,t.jsx)("div",{id:"main-section-1-spacer",className:"pb-96"})]})]})}},3665:function(){}},function(e){e.O(0,[607,971,69,744],function(){return e(e.s=7053)}),_N_E=e.O()}]);