import{u as l,l as c,j as e,F as s,I as t,R as u,m,B as d,s as x}from"./vendor-DQx3JgBr.js";function g(){const r=l(),[p,a]=c("token"),n="work-template-react",o={account:"admin",password:"123456"},i=h=>{a(new Date().getTime()),x.success({message:"登录成功",duration:2,showProgress:!0,style:{width:250}}),r("/",{replace:!0})};return e.jsx("div",{className:"login-bg h-[100vh] flex justify-center items-center",children:e.jsxs("div",{className:"p-5 bg-white rounded-lg w-80 pb-0",children:[e.jsx("div",{className:"text-center font-semibold mb-4 text-xl",children:n}),e.jsxs(s,{scrollToFirstError:!0,name:"login",initialValues:o,onFinish:i,children:[e.jsx(s.Item,{name:"account",rules:[{required:!0,message:"请输入账号"}],children:e.jsx(t,{prefix:e.jsx(u,{}),placeholder:"请输入账号"})}),e.jsx(s.Item,{name:"password",rules:[{required:!0,message:"请输入密码"}],children:e.jsx(t,{prefix:e.jsx(m,{}),type:"password",placeholder:"请输入密码"})}),e.jsx(s.Item,{children:e.jsx(d,{block:!0,type:"primary",htmlType:"submit",children:"登录"})})]})]})})}export{g as default};
