import{_ as b}from"./BreadCrumb.28f26b3e.js";import{_ as h,u as f,i as y,j as v,c as n,b as w,w as C,a as e,F as k,m as L,k as _,r as $,o as s,q as z,s as B,t as d,f as p,p as D,g as I}from"./entry.d0234629.js";const x=a=>(D("data-v-01bb6299"),a=a(),I(),a),S={class:"animate-fade flex-1 px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-6"},N={class:"pb-8"},T=x(()=>e("h1",{class:"mb-8 font-semibold text-[#0088CC] text-2xl"},"Lembaga Desa",-1)),A={class:"w-full"},F={class:"shadow rounded-lg border-b border-gray-200"},V={class:"w-full bg-white"},j=x(()=>e("thead",{class:"bg-gray-700 rounded-lg text-white"},[e("tr",{class:"rounded-lg"},[e("th",{class:"w-1/3 text-left py-3 px-4 font-medium text-sm"},"Nama Lembaga"),e("th",{class:"w-1/3 text-left py-3 px-4 font-medium text-sm"},"Alamat Kantor"),e("th",{class:"text-left py-3 px-4 font-medium text-sm"},"Logo")])],-1)),q={class:"text-gray-700 overflow-x-scroll"},E=["onClick"],H={class:"text-[#0088CC] font-normal tw-1/3 text-left text-sm md:text-xl py-3 px-4"},K={class:"bg-[#0088CC] text-white w-fit px-2 text-sm md:text-base rounded-md py-1 mt-2"},G={class:"w-1/3 text-left py-3 px-4 text-sm md:text-lg"},J={class:"text-left py-3 px-4"},M={__name:"index",async setup(a){let o,r;f({title:"Lembaga Desa"});const c=y(null);return c.value=([o,r]=v(()=>$fetch("/api/lembaga")),o=await o,r(),o),(l,i)=>{const u=b,m=$("v-img");return s(),n("div",S,[w(u,null,{root:C(()=>[e("span",{onClick:i[0]||(i[0]=t=>("navigateTo"in l?l.navigateTo:_(z))("/lembaga-desa"))},"Lembaga Desa")]),_:1}),e("div",N,[T,e("div",A,[e("div",F,[e("table",V,[j,e("tbody",q,[(s(!0),n(k,null,L(_(c),(t,g)=>(s(),n("tr",{onClick:O=>l.$router.push("/lembaga-desa/"+t.slug),class:B(["cursor-pointer",g%2==0?"bg-gray-100":""])},[e("td",H,[e("div",null,d(t.name),1),e("div",K,d(t.surname),1)]),e("td",G,d(t.address),1),e("td",J,[l.$vuetify.display.mobile?(s(),p(m,{key:0,"lazy-src":t.image,src:t.image,class:"rounded-md",cover:"",width:"100%","aspect-ratio":"16/9"},null,8,["lazy-src","src"])):(s(),p(m,{key:1,"lazy-src":t.image,src:t.image,class:"rounded-md",cover:"",width:"160","aspect-ratio":"16/9"},null,8,["lazy-src","src"]))])],10,E))),256))])])])])])])}}},R=h(M,[["__scopeId","data-v-01bb6299"]]);export{R as default};
