import e,{useState as t,useRef as o,useEffect as a}from"react";import{createPortal as n}from"react-dom";function r(e,t){void 0===t&&(t={});var o=t.insertAt;if(e&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===o&&a.firstChild?a.insertBefore(n,a.firstChild):a.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}function i({width:t="11",height:o="20",active:a,iconColorExpanded:n="stroke-white",iconColorCollapse:r="stroke-blue"}){return e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:o,fill:"none",viewBox:"0 0 11 20"},e.createElement("path",{className:a?n:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M1.545 18.44l8.22-8.256-8.22-8.257"}))}function l({width:t="17",height:o="17",active:a,iconColorExpanded:n="stroke-blue",iconColorCollapse:r="stroke-black"}){return e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:o,fill:"none",viewBox:"0 0 17 17"},e.createElement("path",{className:a?n:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:""+(a?"M1.463 8.229h14":"M8.463 1.229v14 M1.463 8.229h14")}))}function d({expand:n="Your title",collapse:r="Your collapsed content",className:d="bg-white",boxStyle:s=!1,shadow:p=!0,headerStyle:m="text-15px font-600 text-black",headerStyleExpanded:c="text-15px font-600 text-blue pb-10px",iconColorExpanded:x,iconColorCollapse:u,circleExpand:b="rotate-90deg bg-blue",circleCollapse:f=(p?"shadow-small-gray-9":"")+" bg-white",collapseStyle:h="text-15px text-black"}){const[w,g]=t(!1),v=o(null);a((()=>{v.current.style.maxHeight=w?`${v.current.scrollHeight}px`:"0px"}),[v,w]);const y=()=>{g(!w)};return e.createElement("div",{id:"accordion",role:"button",tabIndex:0,className:`\n      ${s?"cursor-pointer py-20px p-15px mb-10px transition-all transition-duration-100ms ease text-black overflow-x-hidden rounded-5px focus:outline-1px focus:outline-solid focus:text-blue-9 text-blue border-1px border-solid border-gray-10":"cursor-pointer py-20px p-15px transition-all transition-duration-100ms ease text-black overflow-x-hidden focus:border-bottom-width-2px focus:text-gray-10 border-bottom-width-1px border-solid border-gray-9"} ${d}\n      `,onClick:y,onKeyPress:y},e.createElement(e.Fragment,null,e.createElement("div",{className:"flex items-center"},e.createElement("h3",{className:`mb-0px ${w?c:m}`},n),e.createElement("span",{className:"ml-auto min-w-10px "+(w?"pb-10px":"pb-0px")},s?e.createElement("div",{className:"rounded-50per min-w-25px min-h-25px flex justify-center items-center transition-all transition-duration-200ms ease "+(w?`${b}`:`${f}`)},e.createElement(i,{active:w,width:"10",height:"12",iconColorExpanded:x,iconColorCollapse:u})):e.createElement(l,{active:w,width:"10",height:"10",iconColorExpanded:x,iconColorCollapse:u}))),e.createElement("div",{ref:v,className:"overflow-hidden transition-all transition-duration-300ms ease"},e.createElement("p",{className:`relative z-99 mb-0px ${h}`},r))))}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e},s.apply(this,arguments)}function p({width:t="20",height:o="20"}){return e.createElement("svg",{className:"cursor-pointer",xmlns:"http://www.w3.org/2000/svg",width:t,height:o,fill:"none",viewBox:"0 0 20 20"},e.createElement("path",{className:"fill-gray",d:"M5.187 4.01A.833.833 0 004.01 5.187L8.822 10l-4.814 4.813a.835.835 0 101.179 1.178L10 11.178l4.813 4.813a.833.833 0 001.178-1.178L11.178 10l4.813-4.812a.833.833 0 00-1.178-1.179L10 8.822 5.187 4.008v.001z"}))}r("a,label,table{border:0;font:inherit;margin:0;padding:0;vertical-align:baseline}table{border-collapse:collapse;border-spacing:0}@media(prefers-reduced-motion:reduce){*,:after,:before{animation-duration:.01ms!important;animation-iteration-count:1!important;scroll-behavior:auto!important;transition-duration:.01ms!important}}*,:after,:before{box-sizing:border-box}*{margin:0}input{font:inherit}a:focus,input:focus{outline:none}::-moz-focus-inner,a::-moz-focus-inner,input::-moz-focus-inner{border:0}::-moz-focus-inner{border:0}.container{box-sizing:border-box;margin:0 auto;max-width:1100px;padding:0;width:100%}.fade-in{-webkit-animation-name:fadeIn;animation-name:fadeIn;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-backface-visibility:hidden;backface-visibility:hidden}@keyframes fadeIn{0%{opacity:0}45%{opacity:.33}to{opacity:1}}.fade-in-left{-webkit-animation-name:fadeInLeft;animation-name:fadeInLeft;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-backface-visibility:hidden;backface-visibility:hidden}@keyframes fadeInLeft{0%{opacity:0;-webkit-transform:translate3d(-200px,0,0);transform:translate3d(-200px,0,0)}45%{opacity:.33}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.font-bold{font-weight:700}.sans{font-family:-apple-system,BlinkMacSystemFont,Roboto,Arial,Helvetica Neue,Segoe UI,Oxygen,Ubuntu,Cantarell,Open Sans,sans-serif}.text-10px{font-size:10px}.text-15px{font-size:15px}.text-20px{font-size:20px}.text-30px{font-size:30px}.font-400{font-weight:400}.font-600{font-weight:600}.font-900{font-weight:900}.flex{display:flex}.table{display:table}.justify-center{justify-content:center}.items-center{align-items:center}.hover\\:bg-red-7:hover{background-color:#fdacac}.text-blue{color:#066ef9}.text-purple{color:#8006f9}.text-black{color:#101010}.text-gray{color:#7d7d7d}.bg-blue{background-color:#066ef9}.focus\\:text-blue-9:focus{color:#dbeafe}.text-black-7{color:#656565}.text-gray-9{color:#eaeaea}.focus\\:text-gray-10:focus{color:#f6f6f6}.bg-red-9{background-color:#fedbdb}.bg-gray-10{background-color:#f6f6f6}.bg-white{background-color:#fdfdfd}.overflow-hidden{overflow:hidden}.overflow-x-hidden{overflow-x:hidden}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.collapse{visibility:collapse}.top-0per{top:0}.top-50per{top:50%}.right-0per{right:0}.bottom-0per{bottom:0}.left-0per{left:0}.left-50per{left:50%}.z-1{z-index:1}.z-2{z-index:2}.z-99{z-index:99}.m-auto{margin:auto}.ml-auto{margin-left:auto}.w-50rem{width:50rem}.w-60rem{width:60rem}.w-100per{width:100%}.max-w-90per{max-width:90%}.max-w-50vw{max-width:50vw}.min-w-10px{min-width:10px}.min-w-25px{min-width:25px}.min-w-50rem{min-width:50rem}.h-50px{height:50px}.max-h-75vh{max-height:75vh}.min-h-25px{min-height:25px}.p-15px{padding:15px}.p-20px{padding:20px}.pb-0px{padding-bottom:0}.pb-10px{padding-bottom:10px}.pl-10px{padding-left:10px}.px-20px{padding-inline:20px}.py-10px{padding-block:10px}.py-20px{padding-block:20px}.py-50px{padding-block:50px}.mt-20px{margin-top:20px}.mb-0px{margin-bottom:0}.mb-10px{margin-bottom:10px}.mb-20px{margin-bottom:20px}.my-50px{margin-block:50px}.ease{transition-timing-function:ease;-webkit-transition-timing-function:ease;-moz-transition-timing-function:ease}.animation-forwards{animation-fill-mode:forwards;-webkit-animation-fill-mode:forwards;-moz-animation-fill-mode:forwards}.transition-all{transition-property:all}.animation-duration-500ms{animation-duration:.5s;-webkit-animation-duration:.5s}.animation-duration-800ms{animation-duration:.8s;-webkit-animation-duration:.8s}.transition-duration-100ms{transition-duration:.1s;-webkit-transition-duration:.1s}.transition-duration-200ms{transition-duration:.2s;-webkit-transition-duration:.2s}.transition-duration-300ms{transition-duration:.3s;-webkit-transition-duration:.3s}.shadow-small-black-2{box-shadow:5px 5px 10px -1px #282828;-webkit-box-shadow:5px 5px 10px -1px #282828;-moz-box-shadow:5px 5px 10px -1px #282828;-ms-box-shadow:5px 5px 10px -1px #282828}.shadow-small-gray-9{box-shadow:5px 5px 10px -1px #eaeaea;-webkit-box-shadow:5px 5px 10px -1px #eaeaea;-moz-box-shadow:5px 5px 10px -1px #eaeaea;-ms-box-shadow:5px 5px 10px -1px #eaeaea}.rotate-90deg{transform:rotate(90deg);-webkit-transform:rotate(90deg)}.translate-0per{transform:translate(0);-webkit-transform:translate(0)}.backdrop-blur-30px{backdrop-filter:blur(30px);-webkit-backdrop-filter:blur(30px)}.border-solid,.focus\\:border-solid:focus{border-style:solid}.border-none{border-style:none}.focus\\:outline-solid:focus{outline-style:solid}.border-blue-9{border-color:#dbeafe}.border-gray-9{border-color:#eaeaea}.border-gray-10{border-color:#f6f6f6}.rounded-5px{border-radius:5px}.rounded-10px{border-radius:10px}.rounded-20px{border-radius:20px}.rounded-50per{border-radius:50%}.border-1px,.focus\\:border-1px:focus{border-width:1px}.border-bottom-width-1px{border-bottom-width:1px}.focus\\:border-bottom-width-2px:focus{border-bottom-width:2px}.focus\\:outline-1px:focus{outline-width:1px}.cursor-pointer{cursor:pointer}.pointer-events-none{pointer-events:none}.fill-gray{fill:#7d7d7d}.stroke-white{stroke:#fdfdfd}.stroke-blue{stroke:#066ef9}.stroke-purple{stroke:#8006f9}.stroke-black{stroke:#101010}@media(max-width:480px){.sm\\:min-w-90vw{min-width:90vw}}@media(min-width:481px)and (max-width:768px){.md\\:min-w-90vw{min-width:90vw}}");const m=({children:t,toggle:o,setToggle:r,className:i,backgroundAnimation:l="fade-in animation-duration-500ms animation-forwards",closeIcon:d=e.createElement(p,null),modalContentAnimation:s="fade-in animation-duration-500ms animation-forwards",useKeyInput:m=!0,shadow:x=!0})=>(!0===m&&a((()=>{const e=e=>{27===e.keyCode&&r()};window.addEventListener("keydown",e);const t=e=>{(e.ctrlKey||e.metaKey)&&"k"===e.key&&(e.preventDefault(),r(!0))};return document.addEventListener("keydown",t),()=>window.removeEventListener("keydown",e)||document.removeEventListener("keydown",t)}),[]),"undefined"!=typeof window&&n(e.createElement(e.Fragment,null,o&&e.createElement(e.Fragment,null,e.createElement("div",{onClick:r.bind(void 0,!1),className:`fixed left-0per top-0per bottom-0per right-0per backdrop-blur-30px text-black ${l}`,style:{backgroundColor:"rgba(16,16,16,0.75)"}}),e.createElement(c,{shadow:x,className:i,setToggle:r,closeIcon:d,modalContentAnimation:s},t))),document.querySelector("#modal-portal"))),c=({children:t,className:a,modalContentAnimation:n,closeIcon:r,shadow:i,setToggle:l,...d})=>{const p=o();return e.createElement("div",s({ref:p,tabIndex:0},d,{className:`text-black overflow-x-hidden fixed left-50per top-50per rounded-20px bg-white min-w-50rem max-w-50vw sm:min-w-90vw md:min-w-90vw max-h-75vh ${i?"shadow-small-black-2":""} ${a} ${n}`,style:{transform:"translate(-50%, -50%)"}}),e.createElement("div",{role:"button",tabIndex:0,onKeyPress:l.bind(void 0,!1),onClick:l.bind(void 0,!1),className:"absolute z-1 focus:outline-1px focus:outline-solid focus:outline-gray text-gray-9",style:{top:"20px",right:"20px"}},r),e.createElement("div",{className:"p-20px"},t))};m.Header=({children:t,className:o,...a})=>e.createElement("header",s({className:`text-20px font-bold mb-20px max-w-90per ${o}`},a),t),m.Body=({children:t,className:o,...a})=>e.createElement("div",s({className:`${o}`},a),t),m.Footer=({children:t,className:o,...a})=>e.createElement("footer",s({className:`mt-20px ${o}`},a),t);function x({required:t,id:o,label:a,value:n,setValue:r,htmlFor:i,maxLength:l,minLength:d,type:s="text",autofocus:p=!1,shadow:m=!0,ariaLabel:c="input-field"}){return e.createElement("div",{className:"relative"},e.createElement("input",{autoFocus:p,"aria-label":c,required:t,id:o,maxLength:l,minLength:d,type:s,onChange:e=>r(e.target.value),value:n,className:"greeninput border-none bg-white rounded-10px pl-10px text-15px h-50px w-100per border-blue-9 focus:border-1px focus:border-solid "+(m?"shadow-small-gray-9":"")}),e.createElement("label",{className:"w-100per placeholder-text pl-10px absolute top-0per right-0per bottom-0per left-0per flex items-center pointer-events-none w-100per h-50px",htmlFor:i},e.createElement("div",{className:"text translate-0per transition-all transition-duration-300ms text-black-7 text-15px"},a)))}function u({required:t,id:o,label:n,value:r,setValue:i,htmlFor:l,maxLength:d,type:s="text",autofocus:p=!1,shadow:m=!0,ariaLabel:c="textarea-field"}){p&&a((()=>{document.querySelector("[contenteditable]").focus()}),[]);return e.createElement("div",{className:"relative"},e.createElement("div",{tabIndex:p?1:0,"aria-label":c,autoFocus:p,spellCheck:"false",contentEditable:"true",required:t,id:o,maxLength:d,onKeyDown:d>=1?e=>{(e.target.outerText.length===d&&8!=e.keyCode||37===e.keyCode||38===e.keyCode||39===e.keyCode||40===e.keyCode||e.ctrlKey||e.metaKey)&&e.preventDefault()}:null,type:s,onInput:e=>i(e.currentTarget.textContent),value:r,className:"greeninput greentextarea border-none bg-white rounded-10px pl-10px text-15px h-50px w-100per border-blue-9 focus:border-1px focus:border-solid "+(m?"shadow-small-gray-9":"")}),e.createElement("label",{className:"placeholder-text pl-10px absolute top-0per right-0per bottom-0per left-0per flex items-center pointer-events-none w-100per h-50px",htmlFor:l},e.createElement("div",{className:"text translate-0per transition-all transition-duration-300ms text-black-7 text-15px"},n)))}r('.greeninput:focus+.placeholder-text .text,:not(.greeninput[value=""])+.placeholder-text .text{color:#101010;font-size:15px;font-weight:600;transform:translateY(-150%)}.greentextarea{-moz-appearance:textfield-multiline;-webkit-appearance:textarea;min-height:100px;overflow-x:hidden;padding-top:15px;resize:vertical}');export{d as Accordion,x as Input,m as Modal,u as TextArea};
