import{_ as v}from"./nuxt-link.2b8eba85.js";import{u as p,c as w,b as a,w as s,a as e,F as f,d as c,r as n,o as g}from"./entry.7bd8cb73.js";const b={class:"flex items-center justify-between"},k=e("div",{class:"text-xl font-semibold"},[e("span",null,"Hapus Berita?")],-1),x=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"2em",height:"2em",viewBox:"0 0 24 24"},[e("g",{fill:"none",stroke:"black","stroke-width":"1.5"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{"stroke-linecap":"round",d:"m14.5 9.5l-5 5m0-5l5 5"})])],-1),y=[x],C=e("div",null,[e("span",null,"Berita yang dihapus tidak bisa dikembalikan kembali.")],-1),N={class:"w-full flex justify-end"},B=e("span",{class:"capitalize"},"Hapus",-1),R={class:"flex justify-between items-center mb-3"},L=e("div",{class:"text-2xl font-semibold mb-2"},"Admin",-1),z={class:"text-md font-semibold mb-2"},A=e("span",{class:"capitalize"},"Tambah Admin +",-1),D={class:"grid mb-6 animate-fade"},$={class:"col-12"},H={class:"card"},I={class:"flex justify-end"},U=["onClick"],V=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.5em",height:"1.5em",viewBox:"0 0 24 24"},[e("path",{fill:"#212121","fill-rule":"evenodd",d:"M17.204 10.796L19 9c.545-.545.818-.818.964-1.112a2 2 0 0 0 0-1.776C19.818 5.818 19.545 5.545 19 5c-.545-.545-.818-.818-1.112-.964a2 2 0 0 0-1.776 0c-.294.146-.567.419-1.112.964l-1.819 1.819a10.9 10.9 0 0 0 4.023 3.977m-5.477-2.523l-6.87 6.87c-.426.426-.638.638-.778.9c-.14.26-.199.555-.316 1.145l-.616 3.077c-.066.332-.1.498-.005.593c.095.095.26.061.593-.005l3.077-.616c.59-.117.885-.176 1.146-.316c.26-.14.473-.352.898-.777l6.89-6.89a12.901 12.901 0 0 1-4.02-3.98","clip-rule":"evenodd"})],-1),j=[V],E=["onClick"],M=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.5em",height:"1.5em",viewBox:"0 0 24 24"},[e("path",{fill:"#212121",d:"M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7zm4 12H8v-9h2zm6 0h-2v-9h2zm.618-15L15 2H9L7.382 4H3v2h18V4z"})],-1),P=[M],F={data(){return{modalRemoveNews:!1,modalRemoveNewsCategory:!1,removedNewsId:null,data:null,loadingData:!1,form:{title:null,category:null,content:null},headers:[{title:"Name",align:"start",sortable:!1,key:"name",width:"300px"},{title:"Email",align:"start",sortable:!1,key:"email",width:"300px"},{title:"Actions",align:"end",key:"actions",sortable:!1}],items:[]}},async mounted(){await this.loadData()},methods:{async loadData(){this.loadingData=!0;const i=await $fetch(this.$config.public.API_PUBLIC_URL+"/api/admin/list/all",{headers:{Authorization:"Bearer "+c().token}});this.items=i,this.loadingData=!1},openModalRemoveUser(i){this.modalRemoveNews=!0,this.removedNewsId=i},async removeNews(){await $fetch(this.$config.public.API_PUBLIC_URL+"/api/news/"+this.removedNewsId,{method:"DELETE",headers:{Authorization:"Bearer "+c().token}}),this.modalRemoveNews=!1,await this.loadData()}}},q=Object.assign(F,{__name:"index",setup(i){return p({title:"Admin"}),(t,l)=>{const d=n("v-btn"),m=n("v-card"),r=n("v-dialog"),h=v,_=n("v-data-table");return g(),w(f,null,[a(r,{modelValue:t.modalRemoveNews,"onUpdate:modelValue":l[1]||(l[1]=o=>t.modalRemoveNews=o),width:"auto"},{default:s(()=>[a(m,{height:"auto",style:{"scrollbar-width":"none"}},{title:s(()=>[e("div",b,[k,e("div",{onClick:l[0]||(l[0]=o=>t.modalRemoveNews=!1),class:"cursor-pointer"},y)])]),text:s(()=>[C]),actions:s(()=>[e("div",N,[a(d,{onClick:t.removeNews,color:"#FC4100",class:"w-fit mt-6 text-white px-3 mx-1 mb-2 py-2 text-md"},{default:s(()=>[B]),_:1},8,["onClick"])])]),_:1})]),_:1},8,["modelValue"]),e("div",R,[L,e("div",z,[a(h,{to:"/dashboard/admin/add"},{default:s(()=>[a(d,{onClick:t.updateContent,color:"#10B981",class:"mt-3 text-white px-3 py-2"},{default:s(()=>[A]),_:1},8,["onClick"])]),_:1})])]),e("div",D,[e("div",$,[e("div",H,[a(_,{loading:t.loadingData,headers:t.headers,items:t.items,"item-key":"name"},{bottom:s(()=>[]),"item.actions":s(({item:o})=>[e("div",I,[e("div",{onClick:u=>t.$router.push("/dashboard/admin/edit?id="+o.uuid),class:"cursor-pointer mx-1"},j,8,U),e("div",{class:"cursor-pointer",onClick:u=>t.openModalRemoveUser(o.uuid)},P,8,E)])]),_:1},8,["loading","headers","items"])])])])],64)}}});export{q as default};