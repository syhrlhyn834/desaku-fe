import{_ as k}from"./BreadCrumb.69337a12.js";import{h as $,_ as y}from"./moment.8200dab7.js";import{_ as L}from"./Author.e28c20d8.js";import{_ as P}from"./LatestAnnouncement.9f6781b5.js";import{u as T,i as r,j as V,c as d,b as t,w as A,a as e,F as B,n as z,l as o,q as D,r as F,o as _,s as I,t as m}from"./entry.f8680ccd.js";const N={class:"animate-fade flex-1 block px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-6"},S={class:"grid grid-cols-1 md:grid-cols-6 md:gap-x-12"},j={class:"block col-span-1 md:col-span-4 pb-6"},q=e("div",{class:"text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-xl md:text-2xl font-semibold py-3"},[e("span",null,"Pengumuman")],-1),E=["onClick"],H={class:"block"},M={class:"text-base md:text-lg font-semibold"},R={class:"line-clamp-2"},U={class:"text-sm md:text-base block sm:flex items-center font-medium mt-2"},G={class:"flex items-center"},J={class:"ml-1"},K={class:"flex items-center sm:ml-2"},O={class:"ml-1"},Q={class:"mt-3"},W={class:"text-md sm:text-base line-clamp-2 sm:line-clamp-3"},X={class:"col-span-2"},ae={__name:"index",async setup(Y){let n,p;T({title:"Pengumuman"});const a=r(1),u=r(0),c=r(null),{data:f,total:g}=([n,p]=V(()=>$fetch("/api/pengumuman?limit=5&page=1")),n=await n,p(),n);c.value=f,u.value=Math.ceil(g/5);async function h(){if(await $fetch(`/api/pengumuman?limit=5&page=${a.value}`),c.value=da0ta,navigator.userAgent.includes("Chrome")){window.scrollTo({behavior:"smooth",top:0,left:0});return}windowScrollTo(window,{behavior:"smooth",top:0,left:0})}return(l,i)=>{const v=k,x=y,b=L,C=F("v-pagination"),w=P;return _(),d("div",N,[t(v,null,{root:A(()=>[e("span",{onClick:i[0]||(i[0]=s=>("navigateTo"in l?l.navigateTo:o(I))("/pengumuman"))},"Pengumuman")]),_:1}),e("div",S,[e("div",j,[q,(_(!0),d(B,null,z(o(c),s=>(_(),d("div",{onClick:Z=>l.$router.push("/pengumuman/"+s.slug),class:"cursor-pointer flex mb-7"},[e("div",H,[e("div",M,[e("span",R,m(s.title),1)]),e("div",U,[e("div",G,[t(x,{class:"flex-none"}),e("span",J,m(o($)(s.created_at).format("LL")),1)]),e("div",K,[t(b,{class:"flex-none"}),e("span",O,m(s.name),1)])]),e("div",Q,[e("span",W,m(s.description),1)])])],8,E))),256)),t(C,{size:l.$vuetify.display.mobile?"small":"default",class:"mt-4 mb-14",modelValue:o(a),"onUpdate:modelValue":[i[1]||(i[1]=s=>D(a)?a.value=s:null),h],"total-visible":5,length:o(u)},null,8,["size","modelValue","length"])]),e("div",X,[t(w)])])])}}};export{ae as default};