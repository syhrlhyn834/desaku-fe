import{_ as V}from"./BreadCrumb.79777253.js";import{h as $,_ as I}from"./moment.4d714814.js";import{_ as L}from"./LatestActivities.074abcec.js";import{_ as S,u as z,i as r,j as B,c,b as o,w as N,a as t,e as A,k as a,t as d,l as K,F as T,m as D,n as F,r as x,o as _,p as H,g as P}from"./entry.f291813e.js";const j=n=>(H("data-v-ede70543"),n=n(),P(),n),E={class:"animate-fade flex-1 block px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-6"},M=j(()=>t("span",null,"Kegiatan",-1)),R={class:"grid grid-cols-1 md:grid-cols-6 md:gap-x-12"},U={class:"block col-span-1 md:col-span-4"},q={class:"text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-xl sm:text-2xl font-semibold py-3"},G={key:0},J=["onClick"],O={class:"h-[120px] sm:h-[160px] w-[140px] sm:w-[220px] md:w-[260px] flex-none"},Q={class:"block pl-4"},W={class:"tetx-base md:text-xl font-semibold"},X={class:"line-clamp-2"},Y={class:"text-xs md:text-base block md:flex items-center font-medium mt-2"},Z={class:"ml-1 mr-2"},tt={class:"mt-2 text-sm md:text-base"},et={class:"line-clamp-2 sm:line-clamp-3"},st={class:"col-span-2"},at={__name:"index",async setup(n){let l,p;z({title:"Kegiatan"});const m=r(null),s=r(1),u=r(0),{data:g,total:v}=([l,p]=B(()=>$fetch("/api/kegiatan?limit=5&page=1")),l=await l,p(),l);m.value=g,u.value=Math.ceil(v/5);async function f(){const{data:i}=await $fetch(`/api/kegiatan?limit=5&page=${s.value}`);if(m.value=i,navigator.userAgent.includes("Chrome")){window.scrollTo({behavior:"smooth",top:0,left:0});return}windowScrollTo(window,{behavior:"smooth",top:0,left:0})}return(i,h)=>{const b=V,k=x("v-img"),y=I,C=x("v-pagination"),w=L;return _(),c("div",E,[o(b,null,{root:N(()=>[M]),_:1}),t("div",R,[t("div",U,[t("div",q,[t("span",null,[A("Kegiatan "),a(s)!=1?(_(),c("span",G,": Halaman "+d(a(s)),1)):K("",!0)])]),(_(!0),c(T,null,D(a(m),e=>(_(),c("div",{onClick:ot=>i.$router.push("/kegiatan/"+e.slug),class:"cursor-pointer animate-fade flex mb-10"},[t("div",O,[o(k,{"lazy-src":e.thumbnail,height:"100%","aspect-ratio":"4/3",src:e.thumbnail},null,8,["lazy-src","src"])]),t("div",Q,[t("div",W,[t("span",X,d(e.title),1)]),t("div",Y,[o(y),t("span",Z,d(a($)(e.created_at).format("LL")),1)]),t("div",tt,[t("span",et,d(e.description),1)])])],8,J))),256)),o(C,{size:i.$vuetify.display.mobile?"small":"default",class:"mt-4 mb-14",modelValue:a(s),"onUpdate:modelValue":[h[0]||(h[0]=e=>F(s)?s.value=e:null),f],"total-visible":5,length:a(u)},null,8,["size","modelValue","length"])]),t("div",st,[o(w)])])])}}},dt=S(at,[["__scopeId","data-v-ede70543"]]);export{dt as default};
