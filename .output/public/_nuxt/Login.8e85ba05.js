import g from"./inputtext.esm.bd8fc47f.js";import x from"./password.esm.5d6942db.js";import b from"./checkbox.esm.58d3a04e.js";import v from"./button.esm.149a0e85.js";import{u as h}from"./layout.de5cb1e2.js";import w from"./AppConfig.15a179a9.js";import{a1 as y,Y as r,V as k,b as V,i as e,l as s,F as I,o as S,a2 as $,a3 as B}from"./entry.2ba41e71.js";import"./basecomponent.esm.d752fcf6.js";import"./index.esm.19e94219.js";import"./baseicon.esm.26b87126.js";import"./overlayeventbus.esm.efd6f429.js";import"./portal.esm.dab68692.js";import"./index.esm.312e531e.js";import"./badge.esm.304bbc79.js";import"./index.esm.620011f4.js";const l=a=>($("data-v-336b083f"),a=a(),B(),a),L={class:"surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden"},U={class:"flex flex-column align-items-center justify-content-center"},j=["src"],C={style:{"border-radius":"56px",padding:"0.3rem",background:"linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)"}},E={class:"w-full surface-card py-8 px-5 sm:px-8",style:{"border-radius":"53px"}},F=l(()=>e("div",{class:"text-center mb-5"},[e("div",{class:"text-900 text-3xl font-medium mb-3"},"Welcome, Isabel!"),e("span",{class:"text-600 font-medium"},"Sign in to continue")],-1)),P=l(()=>e("label",{for:"email1",class:"block text-900 text-xl font-medium mb-2"},"Email",-1)),N=l(()=>e("label",{for:"password1",class:"block text-900 font-medium text-xl mb-2"},"Password",-1)),T={class:"flex align-items-center justify-content-between mb-5 gap-5"},M={class:"flex align-items-center"},R=l(()=>e("label",{for:"rememberme1"},"Remember me",-1)),W=l(()=>e("a",{class:"font-medium no-underline ml-2 text-right cursor-pointer",style:{color:"var(--primary-color)"}},"Forgot password?",-1)),Y={__name:"Login",setup(a){const{layoutConfig:c}=h(),n=r(""),i=r(""),m=r(!1),d=k(()=>`/layout/images/${c.darkTheme.value?"logo-white":"logo-dark"}.svg`);return(q,o)=>{const p=g,u=x,_=b,f=v;return S(),V(I,null,[e("div",L,[e("div",U,[e("img",{src:d.value,alt:"Sakai logo",class:"mb-5 w-6rem flex-shrink-0"},null,8,j),e("div",C,[e("div",E,[F,e("div",null,[P,s(p,{id:"email1",modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=t=>n.value=t),type:"text",placeholder:"Email address",class:"w-full md:w-30rem mb-5",style:{padding:"1rem"}},null,8,["modelValue"]),N,s(u,{id:"password1",modelValue:i.value,"onUpdate:modelValue":o[1]||(o[1]=t=>i.value=t),placeholder:"Password",toggleMask:!0,class:"w-full mb-3",inputClass:"w-full",inputStyle:{padding:"1rem"}},null,8,["modelValue"]),e("div",T,[e("div",M,[s(_,{id:"rememberme1",modelValue:m.value,"onUpdate:modelValue":o[2]||(o[2]=t=>m.value=t),binary:"",class:"mr-2"},null,8,["modelValue"]),R]),W]),s(f,{label:"Sign In",class:"w-full p-3 text-xl"})])])])])]),s(w,{simple:""})],64)}}},le=y(Y,[["__scopeId","data-v-336b083f"]]);export{le as default};
