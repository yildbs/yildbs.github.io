(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[720],{2933:function(e,t,s){Promise.resolve().then(s.bind(s,8562)),Promise.resolve().then(s.bind(s,3876))},8562:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return g}});var i=s(7437),a=s(2265),n=s(703),r=s(8792),d={src:"/_next/static/media/YOONILLO.5475335d.png",height:897,width:901,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/AKmqqZ2fn5ucmpeWj5SXloiKhpOYjnFpXACXmpmdoKCcm5eYgnJyXFGssauQmpNNUUwAfIOFeoGCkpCLqJ2UgGpZmJuTsLesfYJ3AH58dqKgnLqzrbWlknJaOUhDPKq3qZ6rnQDX1tLNx8KZhG59YkJoVDoAAABLVVCltKgA09PShIWGAAAAWEc2WUcyAAAAhpGGjZmPAKmop6+xsSkrKmlRM1A3FVBYUrC/smBnYgDLz870+/qfo6FuZlg8MSEsMi9ud3BnbGR45V9oOyjB+QAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8};let c=e=>{let{showMessage:t,message:s}=e;return(0,i.jsx)("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-md shadow-lg ".concat(t?"block":"hidden"),children:(0,i.jsx)("h3",{children:s})})};function l(){let[e,t]=(0,a.useState)(!1),[s,n]=(0,a.useState)(""),r=e=>{navigator.clipboard.writeText(e).then(()=>{console.log("Email copied to clipboard:",e)}).catch(e=>{}),n("클립보드로 복사 완료!"),t(!0),setTimeout(()=>{t(!1),n("")},1e3)},d="yildbs@gmail.com";return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"highlight hover:cursor-pointer ",onClick:()=>r(d),children:(0,i.jsx)("h5",{className:"font-bold",children:d})}),(0,i.jsx)("div",{className:"z-50",children:(0,i.jsx)(c,{showMessage:e,message:s})})]})}function o(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("a",{href:"https://github.com/yildbs",className:"madimi-one-regular text-black",target:"_blank",children:(0,i.jsx)("h5",{children:"GitHub"})})})}function h(){return(0,i.jsxs)("div",{className:"w-full flex flex-col w-full h-full items-center p-5 ",children:[(0,i.jsx)("div",{className:"w-48 flex md:justify-end py-5",children:(0,i.jsx)(r.default,{className:"link",href:"/posts/1",children:(0,i.jsx)(n.default,{src:d,alt:"profile image",className:"object-cover aspect-square relative rounded-full border border-primary shadow-sm h-full "})})}),(0,i.jsx)(r.default,{className:"",href:"/posts/1",children:(0,i.jsx)("h4",{className:"gugi-regular text-black",children:"윤일로그 : 윤일로의 블로그"})}),(0,i.jsxs)("div",{className:"w-full flex flex-col w-full h-full items-center py-5",children:[(0,i.jsx)(o,{}),(0,i.jsx)(l,{})]})]})}function p(e){let{to:t,children:s}=e;return(0,i.jsx)("div",{id:"category-link",className:"w-fit px-1",children:(0,i.jsx)(r.default,{className:"link",href:t,children:(0,i.jsx)("h5",{children:s})})})}s(3665);var m=JSON.parse('{"categories":["Posts","Posts/Obsidian","Posts/Python","Posts/Side Project"],"all_posts":["20240323_1711156165597","20240331_1711869713011","20240328_1711605240936","20240329_1711705653695"],"Posts":{"1":["20240331_1711869713011","20240329_1711705653695","20240328_1711605240936","20240323_1711156165597"],"number":4,"total_pages":1},"Posts/Obsidian":{"1":["20240328_1711605240936","20240323_1711156165597"],"number":2,"total_pages":1},"Posts/Side Project":{"1":["20240331_1711869713011"],"number":1,"total_pages":1},"Posts/Python":{"1":["20240329_1711705653695"],"number":1,"total_pages":1}}');function x(){let e=m.categories.sort(),t={};return e.forEach((e,s)=>{let i=e.split("/");t[e]=[i[i.length-1],i.length-1]}),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("nav",{className:"w-full ",children:(0,i.jsx)("ul",{children:(0,i.jsxs)("li",{className:"flex flex-col px-5",children:[(0,i.jsx)("div",{className:"",children:(0,i.jsx)(p,{to:"/aboutme",children:"About Me"})}),(0,i.jsx)("div",{className:"",children:(0,i.jsx)(p,{to:"/myhistory",children:"My History"})}),(0,i.jsx)("ul",{className:"",children:(0,i.jsx)("li",{className:"flex flex-col",children:e.map((e,s)=>(0,i.jsx)(a.Fragment,{children:(0,i.jsx)(p,{to:"/".concat(e.toLowerCase().replace(" ","-"),"/1"),children:(0,i.jsxs)("div",{className:"flex flex-row ".concat(""),children:[t[e][1]>0&&(0,i.jsx)("div",{style:{paddingLeft:"".concat(t[e][1],"rem")}}),"".concat(t[e][0]," (").concat(m[e].number,")")]})})},s))})})]})})})})}function u(){return(0,i.jsx)("div",{className:"flex flex-col",children:(0,i.jsx)(x,{})})}function g(){let[e,t]=(0,a.useState)(!0),s="55px";return(0,i.jsxs)("div",{className:"flex flex-col w-full absolute lg:relative flex flex-col z-40",style:{maxWidth:"400px"},children:[(0,i.jsx)("div",{id:"hamburger-button",className:"z-50 left-0 top-0 block w-full h-full ",style:{maxWidth:s,maxHeight:s},children:(0,i.jsx)("button",{className:"bg-transparent px-2 py-1 lg:hidden ",onClick:()=>{t(!e)},children:(0,i.jsx)("div",{className:"text-3xl align-middle",children:"☰"})})}),(0,i.jsxs)("div",{className:"w-full h-full bg-blue-50 lg:block overflow-y-auto  ".concat(e?"block":"hidden"),style:{marginTop:"-".concat(s)},children:[(0,i.jsx)("div",{id:"my-profile",className:"pt-12 ",children:(0,i.jsx)(h,{})}),(0,i.jsx)("div",{id:"main-router",className:"pt-12",children:(0,i.jsx)(u,{})}),(0,i.jsxs)("div",{id:"font-size-test",className:"hidden",children:[(0,i.jsx)("h1",{children:"안녕하세요. h1 사이즈 입니다"}),(0,i.jsx)("h2",{children:"안녕하세요. h2 사이즈 입니다"}),(0,i.jsx)("h3",{children:"안녕하세요. h3 사이즈 입니다"}),(0,i.jsx)("h4",{children:"안녕하세요. h4 사이즈 입니다"}),(0,i.jsx)("h5",{children:"안녕하세요. h5 사이즈 입니다"}),(0,i.jsx)("h6",{children:"안녕하세요. h6 사이즈 입니다"})]}),(0,i.jsx)("div",{id:"main-section-1-spacer",className:"pb-96"})]})]})}},3876:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return K}});var i=s(7437),a=s(2265);function n(e){if(8!==e.length||!/^\d{8}$/.test(e))throw Error("Invalid date format");return new Date(parseInt(e.substring(0,4),10),parseInt(e.substring(4,6),10)-1,parseInt(e.substring(6,8),10)).getTime()}function r(e){let t=new Date(e),s=t.getFullYear(),i=(t.getMonth()+1).toString().padStart(2,"0");return t.getDate().toString().padStart(2,"0"),"".concat(s,". ").concat(i,". ")}class d{setStartDate(e){this._startDate_yyyymmdd=e,this._startTimestamp=n(e)}setStartDescription(e){this._startDescription=e}setEndDate(e){this._endDate_yyyymmdd=e,this._endTimestamp=n(e)}setEndDescription(e){this._endDescription=e}get startDate_yyyymm(){if(void 0===this._startTimestamp)throw Error("_startTimestamp must not be undefined");return r(this._startTimestamp)}get startDescription(){return this._startDescription}get endDate_yyyymm(){return void 0===this._endTimestamp?r(Date.now()):r(this._endTimestamp)}get endDescription(){return this._endDescription}get isEnded(){return void 0!==this._endDate_yyyymmdd}duration(){if(void 0===this._startTimestamp)throw Error("_startTimestamp must not be undefined");let e=((void 0===this._endTimestamp?Date.now():this._endTimestamp)-this._startTimestamp)/1e3/86400,t=Math.floor(e/365),s=Math.floor(e%365/30);return t>0?"".concat(t,"년 ").concat(s,"개월"):"".concat(s,"개월")}constructor(){}}class c{get dateRange(){return this._dateRange}get title(){return this._title}get descriptions(){return this._descriptions}get referenceUrls(){return this._referenceUrls}get images(){return this._images}addDescription(e){this._descriptions.push(e)}addImage(e){this._images.push(e)}addReferenceUrl(e,t){this._referenceUrls.push([e,t])}constructor(e){this._dateRange=new d,this._descriptions=[],this._referenceUrls=[],this._images=[],this._title=e}}class l{get experiences(){return this._experiences}get dateRange(){return this._dateRange}get title(){return this._title}get description(){return this._description}pushExperience(e){this._experiences.push(e)}constructor(e,t){this._dateRange=new d,this._experiences=[],this._title=e,this._description=t}}let o=new l("Danusys","CCTV 영상분석 소프트웨어 개발");o.dateRange.setStartDate("20161101"),o.dateRange.setEndDate("20200331");let h=new c("병역특례 전문연구요원");h.dateRange.setStartDate("20170226"),h.dateRange.setEndDate("20200227"),o.pushExperience(h);let p=new c("KISA 지능형 CCTV 인증");p.dateRange.setStartDate("20170801"),p.dateRange.setEndDate("20180731"),p.addDescription("KISA 지능형 CCTV 인증 획득"),p.addReferenceUrl("KISA(배회,침입,유기)","https://www.ksecurity.or.kr/user/extra/kisis/94/certification/certificationView2/jsp/LayOutPage.do?setIdx=2&dataIdx=1707&selField=&searchDivision=&column%EC%A0%84%EC%B2%B4&search=%EB%8B%A4%EB%88%84%EC%8B%9C%EC%8A%A4"),p.addReferenceUrl("KISA(배회,침입,쓰러짐)","https://www.ksecurity.or.kr/user/extra/kisis/94/certification/certificationView2/jsp/LayOutPage.do?setIdx=2&dataIdx=1725&selField=&searchDivision=&column%EC%A0%84%EC%B2%B4&search=%EB%8B%A4%EB%88%84%EC%8B%9C%EC%8A%A4"),p.addReferenceUrl("KISA(배회,침투,유기,싸움)","https://www.ksecurity.or.kr/user/extra/kisis/94/certification/certificationView2/jsp/LayOutPage.do?setIdx=2&dataIdx=1732&selField=&searchDivision=&column%EC%A0%84%EC%B2%B4&search=%EB%8B%A4%EB%88%84%EC%8B%9C%EC%8A%A4"),p.addReferenceUrl("KISA(배회,침입,유기)","https://www.ksecurity.or.kr/user/extra/kisis/94/certification/certificationView2/jsp/LayOutPage.do?setIdx=2&dataIdx=1786&selField=&searchDivision=&column%EC%A0%84%EC%B2%B4&search=%EB%8B%A4%EB%88%84%EC%8B%9C%EC%8A%A4"),o.pushExperience(p);let m=new c("DanuNet 개발");m.dateRange.setStartDate("20170101"),m.dateRange.setEndDate("20180731"),m.addDescription("딥러닝 영상 분석 라이브러리 개발"),m.addDescription("TF 학습 웨이트가 C++에서 돌수 있도록 구현"),m.addDescription("딥러닝 네트워크 C++(+CUDA +cuDNN) 으로 구현 (TinyYOLOv2, LeNet 등)"),m.addDescription("검출된 객체의 추적 및 행위 판단 알고리즘 구현"),m.addDescription("C++, CUDA, OpenCV, Python (Tensorflow)"),o.pushExperience(m);let x=new c("Ainos 개발");x.dateRange.setStartDate("20180801"),x.dateRange.setEndDate("20200331"),x.addDescription("Ainos: 다누시스 지능형 CCTV 영상 분석 서버"),x.addDescription("32CH 동시 처리"),x.addDescription("CCTV 영상 입력 받아서 분석하여 이벤트 알림"),x.addDescription("C++, CUDA, OpenCV, Python (Tensorflow)"),x.addReferenceUrl("다누시스 지능형 CCTV 서비스","http://www.danusys.com/renew_solution/intel01.php"),o.pushExperience(x);let u=new l("Deepixel","Virtual Try-On 소프트웨어 개발");u.dateRange.setStartDate("20211018"),u.dateRange.setEndDescription("ing..");let g=new c("StyleAR Web Live SDK 개발");g.dateRange.setStartDate("20211101"),g.dateRange.setEndDate("20220631"),g.addDescription("기존 C++ Native 소스코드가 웹에서 수행되도록 WASM 선행 개발"),g.addDescription("C++ 엔진의 추론 결과를 바탕으로 이미지(얼굴, 손목, 손가락 등)에 상품을 그리는 기능"),g.addDescription("귀걸이, 팔찌, 시계, 반지 등"),g.addDescription("ThreeJS, AmmoJS를 이용해 귀걸이 물리효과 적용"),g.addDescription("2023년에 출시한 StyleAR Seamless의 발판이 됨"),g.addReferenceUrl("골든듀 심리스","https://stylearseamless.deepixel.xyz/goldendew?itemId=2&lang=ko"),g.addReferenceUrl("SUPRA 심리스","https://stylearseamless.deepixel.xyz/supra"),u.pushExperience(g);let f=new c("웹 어노테이터 개발");f.dateRange.setStartDate("20220208"),f.dateRange.setEndDate("20220630"),f.addDescription("딥픽셀 웹 어노테이터의 초기 버전 개발"),f.addDescription("React, ThreeJS 사용"),f.addImage("/_next/static/media/deepixelwebannotator.02424b70.png"),u.pushExperience(f);let j=new c("Face Detector 개발");j.dateRange.setStartDate("20220901"),j.dateRange.setEndDate("20221031"),j.addDescription("딥픽셀 기존 얼굴 검출 엔진의 성능 개선을 위해서 개발"),j.addDescription("MobileNet, SSD 기반으로 개발함"),j.addDescription("Tensorflow 사용"),u.pushExperience(j);let D=new c("iOS SDK 개발");D.dateRange.setStartDate("20221101"),D.addDescription("StyleAR Kiosk로 이어짐"),D.addDescription("SwiftUI, Objective-C, C++, Unity"),u.pushExperience(D);let y=new c("FBXMaker 개발");y.dateRange.setStartDate("20230401"),y.addDescription("안경 2D 이미지로부터 3D 모델 만드는 툴"),y.addDescription("Python 사용"),u.pushExperience(y);let w=new c("SpaceAR 프로토타입 개발");w.dateRange.setStartDate("20230101"),w.dateRange.setEndDate("20230531"),w.addDescription("가구 가상 배치 앱"),w.addDescription("Flutter, ARCore(Android), ARKit(iOS), Unity 사용"),w.addImage("/static/SpaceAR.mp4"),u.pushExperience(w);let E=new c("Web SpaceAR 프로토타입 개발");E.dateRange.setStartDate("20230531"),E.dateRange.setEndDate("20230630"),E.addDescription("웹에서 하는 가구 가상 배치 앱"),E.addDescription("WebXR, ThreeJS 사용"),E.addImage("/static/webspacear.mp4"),u.pushExperience(E);let R=new c("StyleAR Kiosk 개발");R.dateRange.setStartDate("20230901"),R.addDescription("개발 및 앱스토어 등록"),R.addReferenceUrl("Appstore StyleAR Kiosk","https://apps.apple.com/kr/app/stylear-kiosk/id6472699656?l=en-GB"),u.pushExperience(R);let A=new c("갤로핑 AI Soccer Recorder 개발");A.dateRange.setStartDate("20231101"),A.addDescription("축구 드리블 자세 분석을 위해 4방향에서 동시에 카메라 녹화하는 프로그램 개발"),A.addDescription("각 채널이 프레임 단위로 싱크가 맞게 녹화"),A.addDescription("Windows, C# (WinForm), C++, CUDA, NVENC 사용"),A.addImage("/static/galloping.mp4"),u.pushExperience(A);let v=new l("Innodep","CCTV 영상분석 소프트웨어 개발");v.dateRange.setStartDate("20210322"),v.dateRange.setEndDate("20211007");let _=new c("KISA 지능형 CCTV 인증");_.dateRange.setStartDate("20210701"),_.dateRange.setEndDate("20211007"),_.addDescription("KISA 지능형 CCTV 인증 획득"),_.addReferenceUrl("KISA(배회,침투,유기,싸움)","https://www.ksecurity.or.kr/user/extra/kisis/94/certification/certificationView2/jsp/LayOutPage.do?setIdx=2&dataIdx=1938&selField=&searchDivision=&column%EC%A0%84%EC%B2%B4&search=%EC%9D%B4%EB%85%B8%EB%8E%81"),v.pushExperience(_);let b=new c("IDL 개발");b.dateRange.setStartDate("20210401"),b.dateRange.setEndDate("20211007"),b.addDescription("IDL: 이노뎁 딥러닝 영상 분석 라이브러리"),b.addDescription("CCTV 영상에서 사람, 차량 검출 및 대표 색상 추출 기능 구현 등"),b.addDescription("C++, CUDA, PyTorch"),b.addImage("/_next/static/media/innodep_color_extraction.58111d18.png"),b.addImage("/_next/static/media/innodep_idl.b3522eea.png"),v.pushExperience(b);let S=new l("Study Spainish","스페인어 공부");S.dateRange.setStartDate("20200401"),S.dateRange.setEndDate("20210201");let C=new c("스페인어 공부");C.dateRange.setStartDate("20200401"),C.dateRange.setEndDate("20200831"),C.addDescription("코로나 이슈로 한국에서 스페인어 공부함"),C.addReferenceUrl("DELE B1 자격 증명","/DELE_B1_certificate.pdf"),S.pushExperience(C);let N=new c("스페인 생활");N.dateRange.setStartDate("20200901"),N.dateRange.setEndDate("20210201"),N.addImage("/_next/static/media/spain1.37082370.jpeg"),N.addImage("/_next/static/media/spain2.47241101.jpeg"),N.addDescription("스페인 워킹홀리데이 비자로 스페인 가서 5개월 거주"),N.addDescription("2021년 2월 한국 복귀"),S.pushExperience(N);let k=new l("서울시립대학교","전자전기컴퓨터공학 전공");k.dateRange.setStartDate("20110301"),k.dateRange.setEndDate("20170214");let I=new c("국가슈퍼컴퓨팅 대회");I.dateRange.setStartDate("20141006"),I.dateRange.setEndDate("20151006"),I.addReferenceUrl("2014 국가슈퍼컴퓨팅대회 최우수상","http://hpcschool.kr/ksc2014/"),I.addReferenceUrl("2015 국가슈퍼컴퓨팅대회 우수상","http://hpcschool.kr/ksc2015/"),k.pushExperience(I);let B=new c("UOS 전자전기컴퓨터공학 학사졸업");B.dateRange.setStartDate("20110301"),B.dateRange.setEndDate("20150228"),k.pushExperience(B);let U=new c("UOS 전자전기컴퓨터공학 석사졸업");U.addDescription("“Real-time Integrated Face Detection and Recognition on Embedded GPGPUs,” ACM/IEEE International Symposium on Embedded Systems for Real Time Multimedia (ESTIMedia), Oct. 2014"),U.addDescription("“비디오 처리 응용을 위한 하둡 분산 비디오 디코딩 및 CPU - GPU 하이브리드 스케줄링 기법 (Distributed Video Decoding and CPU - GPU Hybrid Scheduling in Hadoop for Video Processing Applications)”, Feb, 2017 (학위졸업논문)"),U.dateRange.setStartDate("20150301"),U.dateRange.setEndDate("20170214"),k.pushExperience(U);var F=[k,o,S,v,u];function T(e){let{date:t}=e;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("h6",{className:"font-bold",children:t})})}function P(e){let[t,s]=(0,a.useState)(!1),[n,r]=(0,a.useState)(0),[d,c]=(0,a.useState)(0),l=["mp4"].reduce((t,s)=>!!(t||e.image.includes(s)),!1),o=e=>{s(e)};return(0,a.useEffect)(()=>{var e,t;let s=null===(e=document.getElementById("main-section-2"))||void 0===e?void 0:e.getBoundingClientRect().width,i=null===(t=document.getElementById("main-section-2"))||void 0===t?void 0:t.getBoundingClientRect().x;void 0!==s&&void 0!==i&&(r(Number(s)),c(Number(i)))},[t]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{id:"popup-image",className:" flex items-center justify-center hover:cursor-pointer",children:[l&&(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("video",{className:"w-[150px] h-[150px] object-cover",src:e.image,onClick:()=>o(!0)})}),!l&&(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("img",{className:"w-[150px] h-[150px] object-cover",src:e.image,onClick:()=>o(!0)})})]}),(0,i.jsxs)("div",{className:"z-50 fixed left-0 top-0 flex items-center justify-center h-screen bg-black bg-opacity-30 ".concat(t?"block":"hidden"),style:{width:n+"px",left:d+"px"},onClick:()=>o(!1),children:[l&&(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("video",{id:"popup-image-video",controls:!0,style:{objectFit:"fill",maxWidth:"90%",maxHeight:"90%"},children:(0,i.jsx)("source",{src:e.image,type:"video/mp4"})})}),!l&&(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("img",{src:e.image,style:{objectFit:"contain",maxWidth:"90%",maxHeight:"80%"}})})]})]})}function O(e){let{title:t,dateRange:s,descriptions:n,referenceUrls:r,images:d}=e;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{id:"experience",className:"my-2 px-2 w-full bg-gray-100",children:[(0,i.jsx)("div",{className:"flex flex-row",children:(0,i.jsxs)("div",{id:"experience-date",className:"flex flex-row",children:[void 0!==s.startDate_yyyymm&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(T,{date:s.startDate_yyyymm}),(0,i.jsx)("div",{className:"px-1",children:"~"})]}),s.isEnded&&(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(T,{date:s.endDate_yyyymm})}),!s.isEnded&&(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(T,{date:"ing"})})]})}),(0,i.jsx)("h5",{className:"",children:t}),(0,i.jsx)("div",{id:"experience-description",className:"",children:n.map((e,t)=>(0,i.jsx)(a.Fragment,{children:(0,i.jsxs)("div",{className:"flex flex-row",children:[(0,i.jsx)("h6",{className:"pr-3",children:"-"}),(0,i.jsx)("h6",{children:e})]})},t))}),(0,i.jsx)("div",{id:"experience-reference-url",className:"",children:r.length>0&&(0,i.jsxs)("div",{className:"pt-3",children:[(0,i.jsx)("h5",{children:"References"}),r.map((e,t)=>(0,i.jsx)(a.Fragment,{children:(0,i.jsx)("h6",{className:"w-fit",children:(0,i.jsxs)("a",{className:"w-min",href:e[1],target:"_blank",children:[t+1,". ",e[0]]})})},t))]})}),(0,i.jsx)("div",{className:"w-full flex flex-row",children:d.map((e,t)=>(0,i.jsx)(a.Fragment,{children:(0,i.jsx)("div",{id:"image-in-card",className:"inline-flex px-1 py-2  ",children:(0,i.jsx)(P,{image:e})})},t))})]})})}function V(e){let{title:t,description:s,dateRange:n,experiences:r}=e,[d,c]=(0,a.useState)(!1),l=(0,a.useRef)(null),o=(0,a.useRef)(null),[h,p]=(0,a.useState)(0),m=()=>{c(!d)};(0,a.useEffect)(()=>{let e=new ResizeObserver(e=>{if(l.current&&o.current){let e=o.current.clientHeight;l.current.style.height="".concat(e,"px")}});return o.current&&e.observe(o.current),()=>{o.current&&e.unobserve(o.current)}},[]);let x=e=>(0,i.jsx)("div",{id:"section-mobile",className:"flex lg:hidden w-full ",children:(0,i.jsx)("h3",{className:"",children:e})}),u=(e,t,s)=>(0,i.jsx)("div",{className:"absolute right-0 ".concat(e),children:(0,i.jsxs)("div",{className:"hover:cursor-pointer bg-transparent px-3",onClick:t,children:[!s&&(0,i.jsx)("h6",{children:"열기"}),s&&(0,i.jsx)("h6",{children:"닫기"})]})});return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{id:"affiliation",className:"w-full my-2 flex flex-col lg:flex-row items-center justify-center",children:[(0,i.jsx)("div",{className:"hidden lg:flex ",children:(0,i.jsxs)("div",{id:"section-1",ref:l,className:"w-32 min-h-full flex flex-col justify-between items-center",children:[(0,i.jsx)("h5",{className:"",children:n.startDate_yyyymm}),(0,i.jsx)("div",{id:"vertical-line",className:"h-full w-1 bg-gray-400"}),(0,i.jsxs)("div",{className:"flex flex-col items-center ",children:[(0,i.jsx)("h5",{children:n.endDate_yyyymm}),n.isEnded&&(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("h6",{className:"pl-1",children:["(",n.duration(),")"]})}),!n.isEnded&&(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("h6",{className:"pl-1",children:"..ing"})})]})]})}),x(n.startDate_yyyymm),(0,i.jsxs)("div",{id:"section-2",ref:o,className:"relative w-full px-2 py-8 flex flex-col items-start ",children:[u("top-0",m,d),d&&u("bottom-0",m,d),(0,i.jsx)("h3",{children:t}),(0,i.jsx)("h3",{children:s}),d&&(0,i.jsx)(i.Fragment,{children:r.map((e,t)=>(0,i.jsx)(a.Fragment,{children:(0,i.jsx)(O,{title:e.title,dateRange:e.dateRange,descriptions:e.descriptions,referenceUrls:e.referenceUrls,images:e.images})},t))})]}),x(n.endDate_yyyymm)]})})}function K(){return(0,i.jsx)("div",{id:"timeline",className:"w-full h-fit flex flex-row ",children:(0,i.jsx)("div",{id:"timeline-content",className:"w-full z-10",children:F.map((e,t)=>(0,i.jsx)(a.Fragment,{children:(0,i.jsx)("div",{className:"w-full flex flex-row items-center border-b-2 ",children:(0,i.jsx)(V,{title:e.title,description:e.description,dateRange:e.dateRange,experiences:e.experiences})})},t))})})}s(703)},3665:function(){}},function(e){e.O(0,[607,971,69,744],function(){return e(e.s=2933)}),_N_E=e.O()}]);