import{_}from"./BreadCrumb.4163edb3.js";import{u as p,i as d,j as u,c as r,b as v,w as x,a as i,l as t,m as f,o as l,s as h}from"./entry.b57668ff.js";const C={class:"animate-fade pb-6 px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-6"},V={class:"pb-8"},b=i("h1",{class:"mb-4 font-semibold text-[#0088CC] text-2xl"},"Visi & Misi",-1),M=["innerHTML"],B={__name:"Visi-Misi",async setup(T){let e,a;p({title:"Visi Misi"});const s=d(null),{visi:m}=([e,a]=u(()=>$fetch("/api/visi")),e=await e,a(),e);return s.value=m,(n,o)=>{const c=_;return l(),r("div",C,[v(c,null,{root:x(()=>[i("span",{onClick:o[0]||(o[0]=g=>("navigateTo"in n?n.navigateTo:t(h))("visi-misi"))},"Visi & Misi")]),_:1}),i("div",V,[b,t(s)?(l(),r("div",{key:0,class:"quill-content",innerHTML:t(s)},null,8,M)):f("",!0)])])}}};export{B as default};
