(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5974],{3619:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/showLesson",function(){return a(4439)}])},50:function(e,s,a){"use strict";var t=a(5893);a(7294);let i=e=>{let{pageTitle:s}=e;return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"page-title-area",children:[(0,t.jsx)("div",{className:"d-table",children:(0,t.jsx)("div",{className:"d-table-cell",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsx)("h2",{children:s})})})}),(0,t.jsx)("div",{className:"shape1",children:(0,t.jsx)("img",{src:"/images/shape1.png",alt:"shape"})}),(0,t.jsx)("div",{className:"shape2 rotateme",children:(0,t.jsx)("img",{src:"/images/shape2.svg",alt:"shape"})}),(0,t.jsx)("div",{className:"shape3",children:(0,t.jsx)("img",{src:"/images/shape3.svg",alt:"shape"})}),(0,t.jsx)("div",{className:"shape4",children:(0,t.jsx)("img",{src:"/images/shape4.svg",alt:"shape"})}),(0,t.jsx)("div",{className:"shape5",children:(0,t.jsx)("img",{src:"/images/shape5.png",alt:"shape"})}),(0,t.jsx)("div",{className:"shape6 rotateme",children:(0,t.jsx)("img",{src:"/images/shape4.svg",alt:"shape"})}),(0,t.jsx)("div",{className:"shape7",children:(0,t.jsx)("img",{src:"/images/shape4.svg",alt:"shape"})}),(0,t.jsx)("div",{className:"shape8 rotateme",children:(0,t.jsx)("img",{src:"/images/shape2.svg",alt:"shape"})})]})})};s.Z=i},4439:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return g}});var t=a(5893),i=a(7294),l=a(3195),c=a(6803),r=a(50),n=a(1664),d=a.n(n),o=a(1163),h=a(9669),m=a.n(h);a(6737);let p=()=>{let e=Date.now(),[s,a]=(0,i.useState)([]);return(0,i.useEffect)(()=>{let e=localStorage.getItem("course_id"),s=localStorage.getItem("lesson_id");m().get("/api/fetch-lesson",{params:{course_id:e,lesson_id:s}}).then(e=>{200===e.data.status&&(console.log(e.data.lesson),a(e.data.lesson))})},[]),(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"widget-area",id:"secondary",children:(0,t.jsxs)("div",{className:"widget widget_startp_posts_thumb",id:"myInput",children:[(0,t.jsx)("h3",{className:"widget-title",children:"Popular Lesson Of This Course"}),(0,t.jsx)("div",{className:"row",children:s.map(s=>(0,t.jsxs)("article",{className:"item",children:[(0,t.jsx)(d(),{href:"#",className:"thumbS",width:"150px",children:(0,t.jsxs)("video",{width:"150px",controls:!0,controlsList:"nodownload",onContextMenu:e=>e.preventDefault(),children:[(0,t.jsx)("source",{src:"https://6figure-earner.world/LarReApi/public/".concat(s.video)}),"Your browser does not support the video tag."]},e)}),(0,t.jsx)("div",{className:"info",children:(0,t.jsx)("h4",{className:"title usmall",children:(0,t.jsx)(d(),{href:"/blog-details",children:s.description_en})})}),(0,t.jsx)("div",{className:"clear"})]}))})]})})})},x=()=>{let e=Date.now(),s=(0,o.useRouter)(),{URL:a}=s.query,[n,d]=(0,i.useState)([]);return(0,i.useEffect)(()=>{let{videoId:e}=localStorage.getItem("lesson_id");m().get("/api/edit-lesson/".concat(e)).then(e=>{200===e.data.status&&d(e.data.lesson)})},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.Z,{}),(0,t.jsx)(r.Z,{pageTitle:n.name_en}),(0,t.jsx)("div",{className:"blog-details-area ptb-80",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-lg-8 col-md-12",children:(0,t.jsxs)("div",{className:"blog-details-desc",children:[(0,t.jsx)("div",{className:"article-image",children:(0,t.jsxs)("video",{width:"100%",controls:!0,controlsList:"nodownload",onContextMenu:e=>e.preventDefault(),children:[(0,t.jsx)("source",{src:"https://6figure-earner.world/LarReApi/public/".concat(a)}),"Your browser does not support the video tag."]},e)}),(0,t.jsx)("div",{className:"article-content",children:(0,t.jsx)("p",{children:n.description_en})})]})}),(0,t.jsx)("div",{className:"col-lg-4 col-md-12",children:(0,t.jsx)(p,{})})]})})}),(0,t.jsx)(c.Z,{})]})};var g=x}},function(e){e.O(0,[1664,8734,5534,9774,2888,179],function(){return e(e.s=3619)}),_N_E=e.O()}]);