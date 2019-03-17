(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports=n(30)},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),l=n.n(r),s=n(1),d=n(2),i=n(4),c=n(3),m=n(5),u=function(e){return o.a.createElement("header",{style:{paddingBottom:"0.5em",display:"flex",justifyContent:"center",alignItems:"flex-end",background:"linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2))"}},o.a.createElement("h1",{style:{fontSize:"4rem",textTransform:"uppercase",fontWeight:"100",textShadow:"4px 4px 2px rgba(0, 0, 0, 1)"}},"Towers of Hanoi"))},g=n(12),h=n.n(g),p=function(e){return o.a.createElement("div",{style:{display:"flex",flexFlow:"column nowrap",margin:"1em",padding:"1em 1em",background:"rgba(241, 91, 49, 0.8)",borderRadius:"0.25em",boxShadow:"0.75em 0.75em 0.5em 0.25em rgba(0, 0, 0, 0.4)"}},o.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},o.a.createElement("h2",{style:{fontSize:"2em",marginBottom:"0.25em"}},"Objective"),o.a.createElement("button",{onClick:function(t){return e.toggleModal(t)},style:{background:"none",outline:"none",padding:"0 2em",margin:"-2.25em -2.25em 0 0",fontWeight:"900"}},"X")),o.a.createElement("p",{style:{fontSize:"1em",textAlign:"justify"}},"Drag-and-drop the disks from the first rod onto the second and third rods, in such a way that the disks are eventually stacked in ascending order (on either the second or third rod), resembling a conical shape. Only the upper-most disk from any rod can be moved at a time to another rod. No larger disk may be placed on top of a smaller disk."))},f=function(e){return o.a.createElement(h.a,{contentLabel:"Towers of Hanoi - Game Objective",isOpen:e.showModal,onAfterOpen:e.afterOpenModal,onRequestClose:e.requestCloseModal,style:{overlay:{background:"rgba(0, 0, 0, 0.75)"},content:{margin:"0",padding:"0",background:"none",outline:"none",border:"none",display:"flex",alignItems:"center"}},shouldFocusAfterRender:!0,shouldCloseOnOverlayClick:!0,shouldCloseOnEsc:!0,shouldReturnFocusAfterClose:!0,ariaHideApp:!1},o.a.createElement(p,{toggleModal:e.toggleModal}))},b=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e={background:"\n        linear-gradient(\n          to top,\n          rgba(0, 0, 0, 0.4),\n          rgba(252,40, 93, 0.75),\n          rgba(241, 91, 49, 0.9),\n          rgba(255, 204, 0, 1)\n        )\n      ",border:"1px solid rgba(0, 0, 0, 0.9)",borderBottom:"transparent",borderRadius:"1.5rem 1.5rem 0 0"},t={borderBottom:"1px solid black"};return o.a.createElement("div",{style:{display:"grid",justifyItems:"stretch",alignItems:"end"}},o.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, auto 3rem) auto",textAlign:"center",height:"25vh",justifyItems:"stretch"}},o.a.createElement("div",{style:t}),o.a.createElement("div",{style:e}),o.a.createElement("div",{style:t}),o.a.createElement("div",{style:e}),o.a.createElement("div",{style:t}),o.a.createElement("div",{style:e}),o.a.createElement("div",{style:t})))}}]),t}(a.Component),y=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(i.a)(this,Object(c.a)(t).call(this,e))).handleToggleModal=function(){console.log("handleToggleModal"),n.setState(function(e){return{showModal:!e.showModal}})},n.handleAfterOpenModal=function(e){console.log("handleAfterOpenModal"),console.log(e)},n.handleRequestCloseModal=function(e){console.log("handleRequestCloseModal"),console.log(e)},n.state={showModal:!0},n}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state.showModal;return o.a.createElement("div",{className:"Game",style:{display:"grid"}},o.a.createElement(f,{showModal:e,toggleModal:this.handleToggleModal,afterOpenModal:this.handleAfterOpenModal,requestCloseModal:this.handleRequestCloseModal}),o.a.createElement(b,{toggleModal:this.handleToggleModal}))}}]),t}(a.Component),v=function(e){return o.a.createElement("footer",{style:{paddingTop:"0.5em",display:"flex",justifyContent:"center",alignItems:"flex-start",background:"linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8))"}},o.a.createElement("p",{style:{fontSize:"1em",textTransform:"uppercase"}},"Developed by ",o.a.createElement("a",{href:"https://github.com/simongt/towers-of-hanoi",target:"_blank",rel:"noopener noreferrer",style:{color:"rgba(241, 91, 49, 1)",textDecoration:"none",fontWeight:"700",textShadow:"1.5px 1.5px 0px black"}},"Simon G. Tsegay")))},E=(n(29),function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App",style:{width:"100vw",height:"100vh",display:"grid",gridTemplateRows:"12rem 1fr 2rem",overflow:"hidden"}},o.a.createElement(u,null),o.a.createElement(y,null),o.a.createElement(v,null))}}]),t}(a.Component)),O=document.getElementById("root");l.a.render(o.a.createElement(E,null),O)}},[[13,1,2]]]);
//# sourceMappingURL=main.2282f973.chunk.js.map