import{H as g,T as b}from"./components.9805bd8e.js";import{_ as y}from"./BreadCrumb.27b6a327.js";import{_ as T}from"./Author.47414175.js";import{h as C,_ as w}from"./moment.102b86f6.js";import{_ as k}from"./Tag.0edb3d8a.js";import{_ as N,a as $}from"./LatestNews.8334d0eb.js";import{i as B,h as H,j as L,k as D,c as F,b as o,w as c,a as t,l as e,v as I,t as n,F as M,o as P,d as V,s as A}from"./entry.e4bf559d.js";const E={class:"animate-fade flex-1 block px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-6"},R={class:"block col-span-1 md:col-span-4"},j={class:"text-[#0088CC] text-2xl mb-2 md:text-2xl font-semibold py-3"},q={class:"text-md flex items-center font-medium mt-2 mb-1"},z={class:"ml-2"},S=t("span",{class:"font-normal"},"Ditulis oleh",-1),G={class:"ml-1 font-normal"},J={class:"text-md flex items-center font-normal my-4"},K={class:"flex"},O={class:"ml-1"},Q={class:"flex ml-2 items-center"},U={class:"ml-1"},W=["innerHTML"],X={class:"col-span-2"},ct={__name:"[id]",async setup(Y){let a,_;const s=B(null),m=H().currentRoute.value;if(s.value=([a,_]=L(()=>$fetch("/api/berita/slug/"+m.params.id)),a=await a,_(),a),!s.value.title)throw D({statusCode:404,statusMessage:"Page Not Found"});return(l,i)=>{const r=b,d=g,p=y,u=T,f=w,x=k,h=N,v=$;return P(),F(M,null,[o(d,null,{default:c(()=>[o(r,null,{default:c(()=>[V(n(e(s).title),1)]),_:1})]),_:1}),t("div",E,[o(p,{child:e(s).title},{root:c(()=>[t("span",{onClick:i[0]||(i[0]=Z=>("navigateTo"in l?l.navigateTo:e(A))("/berita"))},"Berita")]),_:1},8,["child"]),t("div",{class:I([l.$vuetify.display.mobile?"pb-12":"pb-4","grid grid-cols-1 md:grid-cols-6 gap-y-8 md:gap-x-12"])},[t("div",R,[t("div",j,[t("span",null,n(e(s).title),1)]),t("div",q,[o(u),t("div",z,[S,t("span",G,n(e(s).created_by),1)])]),t("div",J,[t("div",K,[o(f),t("span",O,n(e(C)(e(s).created_at).format("LL")),1)]),t("div",Q,[o(x),t("span",U,n(e(s).category_name),1)])]),t("div",{class:"w-full font-normal quill-content",innerHTML:e(s).content},null,8,W)]),t("div",X,[o(h),o(v)])],2)])],64)}}};export{ct as default};