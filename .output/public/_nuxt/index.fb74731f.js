import{_ as u}from"./nuxt-link.b8d02a47.js";import{u as p,c as v,b as a,w as s,a as e,F as w,g as c,r as n,o as f}from"./entry.35206c58.js";const g={class:"flex items-center justify-between"},b=e("div",{class:"text-xl font-semibold"},[e("span",null,"Hapus Berita?")],-1),k=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"2em",height:"2em",viewBox:"0 0 24 24"},[e("g",{fill:"none",stroke:"black","stroke-width":"1.5"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{"stroke-linecap":"round",d:"m14.5 9.5l-5 5m0-5l5 5"})])],-1),x=[k],y=e("div",null,[e("span",null,"Berita yang dihapus tidak bisa dikembalikan kembali.")],-1),N={class:"w-full flex justify-end"},C=e("span",{class:"capitalize"},"Hapus",-1),B={class:"flex justify-between items-center mb-3"},R=e("div",{class:"text-2xl font-semibold mb-2"},"Admin",-1),A={class:"text-md font-semibold mb-2"},D=e("span",{class:"capitalize"},"Tambah Admin +",-1),I={class:"grid mb-6 animate-fade"},L={class:"col-12"},$={class:"card"},U={class:"flex justify-end"},j=["onClick"],E=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.5em",height:"1.5em",viewBox:"0 0 24 24"},[e("path",{fill:"#212121","fill-rule":"evenodd",d:"M17.204 10.796L19 9c.545-.545.818-.818.964-1.112a2 2 0 0 0 0-1.776C19.818 5.818 19.545 5.545 19 5c-.545-.545-.818-.818-1.112-.964a2 2 0 0 0-1.776 0c-.294.146-.567.419-1.112.964l-1.819 1.819a10.9 10.9 0 0 0 4.023 3.977m-5.477-2.523l-6.87 6.87c-.426.426-.638.638-.778.9c-.14.26-.199.555-.316 1.145l-.616 3.077c-.066.332-.1.498-.005.593c.095.095.26.061.593-.005l3.077-.616c.59-.117.885-.176 1.146-.316c.26-.14.473-.352.898-.777l6.89-6.89a12.901 12.901 0 0 1-4.02-3.98","clip-rule":"evenodd"})],-1),V=[E],z={data(){return{modalRemoveNews:!1,modalRemoveNewsCategory:!1,removedNewsId:null,data:null,loadingData:!1,form:{title:null,category:null,content:null},headers:[{title:"Name",align:"start",sortable:!1,key:"name",width:"300px"},{title:"Email",align:"start",sortable:!1,key:"email",width:"300px"},{title:"Actions",align:"end",key:"actions",sortable:!1}],items:[]}},async mounted(){await this.loadData()},methods:{async loadData(){this.loadingData=!0;const o=await $fetch(this.$config.public.API_PUBLIC_URL+"/api/admin/list/all",{headers:{Authorization:"Bearer "+c().token}});this.items=o,this.loadingData=!1},openModalRemoveUser(o){this.modalRemoveNews=!0,this.removedNewsId=o},async removeNews(){await $fetch(this.$config.public.API_PUBLIC_URL+"/api/news/"+this.removedNewsId,{method:"DELETE",headers:{Authorization:"Bearer "+c().token}}),this.modalRemoveNews=!1,await this.loadData()}}},T=Object.assign(z,{__name:"index",setup(o){return p({title:"Admin"}),(t,i)=>{const d=n("v-btn"),m=n("v-card"),r=n("v-dialog"),_=u,h=n("v-data-table");return f(),v(w,null,[a(r,{modelValue:t.modalRemoveNews,"onUpdate:modelValue":i[1]||(i[1]=l=>t.modalRemoveNews=l),width:"auto"},{default:s(()=>[a(m,{height:"auto",style:{"scrollbar-width":"none"}},{title:s(()=>[e("div",g,[b,e("div",{onClick:i[0]||(i[0]=l=>t.modalRemoveNews=!1),class:"cursor-pointer"},x)])]),text:s(()=>[y]),actions:s(()=>[e("div",N,[a(d,{onClick:t.removeNews,color:"#FC4100",class:"w-fit mt-6 text-white px-3 mx-1 mb-2 py-2 text-md"},{default:s(()=>[C]),_:1},8,["onClick"])])]),_:1})]),_:1},8,["modelValue"]),e("div",B,[R,e("div",A,[a(_,{to:"/dashboard/admin/add"},{default:s(()=>[a(d,{onClick:t.updateContent,color:"#10B981",class:"mt-3 text-white px-3 py-2"},{default:s(()=>[D]),_:1},8,["onClick"])]),_:1})])]),e("div",I,[e("div",L,[e("div",$,[a(h,{loading:t.loadingData,headers:t.headers,items:t.items,"item-key":"name"},{"item.actions":s(({item:l})=>[e("div",U,[e("div",{onClick:P=>t.$router.push("/dashboard/admin/edit?id="+l.uuid),class:"cursor-pointer mx-1"},V,8,j)])]),_:1},8,["loading","headers","items"])])])])],64)}}});export{T as default};