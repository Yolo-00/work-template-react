import{r as c,V as v,X as d,j as s,Y as L,Z as $}from"./vendor-WoSn31sX.js";const B=["image/png","image/jpeg"];function O({setValue:n,value:o="",limit:a=1,fileSize:i=5,fileType:u=B,disabled:x,multiple:f=!1,listType:y="picture-card",children:m,className:b,onChange:k}){const l=c.useRef(!0),p=c.useMemo(()=>o.split(",").filter(Boolean).map(e=>({url:e,uid:v(),name:e})),[o]),F=c.useCallback((e,t)=>{if(f){if(t[0].uid===e.uid){const r=o.split(",").filter(Boolean);if(t.length>a-r.length)return d.error(`超出最大上次数量，最多上传 ${a-r.length} 个文件!`),l.current=!1,!1;const j=t.filter(h=>!(!u.includes(h.type)||!(h.size/1024/1024<i))),g=t.length-j.length;if(g>0)return d.error(`${g} 个文件未通过校验`),l.current=!1,!1;l.current=!0}return l.current}else return u.includes(e.type)?e.size/1024/1024<i?!0:(d.error(`上传文件大小不能超过 ${i} MB!`),!1):(d.error(`文件格式不正确, 请上传${u.join("/")}格式文件!`),!1)},[f,i,u,a,o]),U=({file:e})=>{n&&n(t=>t+",https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png")},R=e=>{const t=p.filter(r=>r.uid!==e.uid).map(r=>r.url);n&&n(t.join(","))};return s.jsx(s.Fragment,{children:s.jsx(L,{className:b,listType:y,disabled:x,maxCount:a,multiple:f,fileList:p,beforeUpload:F,customRequest:U,onRemove:R,onChange:k,children:p.length>=a?null:m||s.jsxs("button",{style:{border:0,background:"none"},type:"button",children:[s.jsx($,{}),s.jsx("div",{className:"mt-2",children:"Upload"})]})})})}const E=c.memo(O);function I(){const[n,o]=c.useState("https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg");return s.jsx("div",{className:"custom-upload-file-container",children:s.jsx(E,{setValue:o,value:n,limit:2})})}export{I as default};