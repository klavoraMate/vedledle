(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[797],{2769:function(e,n,r){Promise.resolve().then(r.bind(r,4471))},4471:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return p}});var t=r(7437),i=r(6523),a=r(2179),s=r(8874),o=r(5133),l=r(8469),c=r(3226),d=r(6507),x=r(5317);r(175);let h=()=>{try{return localStorage.getItem("jwt")}catch(e){return null}};var m=r(2265);function p(){let e=h(),n=g(),[r,x]=(0,m.useState)(null),p=async()=>{try{let n=await fetch("/api/user",{method:"GET",headers:{Authorization:"Bearer ".concat(e)}});if(n.ok){let e=await n.json();x(e)}}catch(e){console.error("Error fetching user data:",e)}};return(0,m.useEffect)(()=>{e&&p()},[e]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.Z,{}),e&&r?(0,t.jsxs)(a.Z,{className:n.container,maxWidth:"md",children:[(0,t.jsx)(s.ZP,{container:!0,justifyContent:"center",children:(0,t.jsx)(s.ZP,{item:!0,xs:12,sm:6,children:(0,t.jsx)(o.Z,{className:n.card,children:(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(c.Z,{className:n.title,gutterBottom:!0,children:"User Information"}),(0,t.jsxs)(c.Z,{variant:"body1",children:[(0,t.jsx)("strong",{children:"Name:"})," ",r.name]}),(0,t.jsxs)(c.Z,{variant:"body1",children:[(0,t.jsx)("strong",{children:"Email:"})," ",r.email]})]})})})}),(0,t.jsx)(d.Z,{textAlign:"center",children:(0,t.jsx)(c.Z,{className:n.dogsOwnedTitle,variant:"h4",children:"Dogs Owned"})}),(0,t.jsx)(s.ZP,{container:!0,justifyContent:"center",children:[{name:"Fido",breed:"Golden Retriever",age:3},{name:"Buddy",breed:"Labrador",age:2},{name:"Max",breed:"German Shepherd",age:4}].map((e,r)=>(0,t.jsx)(s.ZP,{item:!0,xs:12,sm:6,children:(0,t.jsx)(o.Z,{className:n.dogCard,children:(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(c.Z,{className:n.title,variant:"h6",children:e.name}),(0,t.jsxs)(c.Z,{variant:"body1",children:[(0,t.jsx)("strong",{children:"Breed:"})," ",e.breed]}),(0,t.jsxs)(c.Z,{variant:"body1",children:[(0,t.jsx)("strong",{children:"Age:"})," ",e.age," years"]})]})})},r))})]}):(0,t.jsx)(s.ZP,{container:!0,justifyContent:"center",children:(0,t.jsx)(c.Z,{variant:"h1",children:"Please login!"})})]})}let g=(0,x.Z)(e=>({container:{marginTop:e.spacing(4),marginBottom:e.spacing(4)},card:{minWidth:275,marginBottom:e.spacing(2)},title:{fontSize:20},dogCard:{marginTop:e.spacing(2),marginBottom:e.spacing(2)},dogsOwnedTitle:{marginBottom:e.spacing(2),textAlign:"center"}}))},6523:function(e,n,r){"use strict";var t=r(7437),i=r(2265),a=r(6500),s=r(6507),o=r(4989),l=r(2653),c=r(3226),d=r(372),x=r(2513),h=r(2179),m=r(3283),p=r(5551),g=r(682),u=r(7739),j=r(4033);let Z=["Gallery","Calendar"],f=["Profile","Login","Logout"];n.Z=function(){let[e,n]=i.useState(null),[r,y]=i.useState(null),b=(0,j.useRouter)(),v=()=>{n(null)},C=e=>{y(null),b.push("/"+e.toLowerCase())};return(0,t.jsx)(a.Z,{position:"static",children:(0,t.jsx)(h.Z,{maxWidth:"xl",children:(0,t.jsxs)(o.Z,{disableGutters:!0,children:[(0,t.jsx)(m.Z,{sx:{display:{xs:"none",md:"flex"}},src:"/logo.png",alt:"German Sheppard Logo"}),(0,t.jsx)(c.Z,{variant:"h6",noWrap:!0,component:"a",href:"/",sx:{mr:2,display:{xs:"none",md:"flex"},fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"},children:"VEDLEDLE"}),(0,t.jsxs)(s.Z,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:[(0,t.jsx)(l.Z,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:e=>{n(e.currentTarget)},color:"inherit",children:(0,t.jsx)(x.Z,{})}),(0,t.jsx)(d.Z,{id:"menu-appbar",anchorEl:e,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:!!e,onClose:v,sx:{display:{xs:"block",md:"none"}},children:Z.map(e=>(0,t.jsx)(u.Z,{onClick:v,children:(0,t.jsx)(c.Z,{textAlign:"center",children:e})},e))})]}),(0,t.jsx)(m.Z,{sx:{display:{xs:"flex",md:"none"}},src:"/logo.png",alt:"German Sheppard Logo"}),(0,t.jsx)(c.Z,{variant:"h5",noWrap:!0,component:"a",href:"/",sx:{mr:2,display:{xs:"flex",md:"none"},flexGrow:1,fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"},children:"VEDLEDLE"}),(0,t.jsx)(s.Z,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:Z.map(e=>(0,t.jsx)(p.Z,{onClick:v,sx:{my:2,color:"white",display:"block"},children:e},e))}),(0,t.jsxs)(s.Z,{sx:{flexGrow:0},children:[(0,t.jsx)(g.Z,{title:"Open settings",children:(0,t.jsx)(l.Z,{onClick:e=>{y(e.currentTarget)},sx:{p:0},children:(0,t.jsx)(m.Z,{alt:"Remy Sharp",src:"/static/images/avatar/2.jpg"})})}),(0,t.jsx)(d.Z,{sx:{mt:"45px"},id:"menu-appbar",anchorEl:r,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:!!r,onClose:C,children:f.map(e=>(0,t.jsx)(u.Z,{onClick:()=>C(e),children:(0,t.jsx)(c.Z,{textAlign:"center",children:e})},e))})]})]})})})}}},function(e){e.O(0,[818,125,971,596,744],function(){return e(e.s=2769)}),_N_E=e.O()}]);