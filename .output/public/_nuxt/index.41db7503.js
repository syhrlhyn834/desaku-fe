import{_ as g}from"./nuxt-link.36ebfa8f.js";import{u as f,c as d,b as s,w as i,a as t,F as w,d as y,r as o,o as c,t as b}from"./entry.078e507d.js";const k={class:"flex items-center justify-between"},x=t("div",{class:"text-xl font-semibold"},[t("span",null,"Hapus Kegiatan?")],-1),C=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"2em",height:"2em",viewBox:"0 0 24 24"},[t("g",{fill:"none",stroke:"black","stroke-width":"1.5"},[t("circle",{cx:"12",cy:"12",r:"10"}),t("path",{"stroke-linecap":"round",d:"m14.5 9.5l-5 5m0-5l5 5"})])],-1),A=[C],B=t("div",null,[t("span",null,"Kegiatan yang dihapus tidak bisa dikembalikan kembali.")],-1),L={class:"w-full flex justify-end"},R=t("span",{class:"capitalize"},"Hapus",-1),D={class:"flex justify-between items-center mb-3"},z=t("div",{class:"text-2xl font-semibold mb-2"},"Kegiatan",-1),H={class:"text-md font-semibold mb-2"},$=t("span",{class:"capitalize"},"Tambah Kegiatan +",-1),I={class:"grid animate-fade mb-6"},M={class:"col-12"},T={class:"card"},V=["innerHTML"],j={key:1},K={class:"flex justify-center"},U=["href"],E=t("div",{class:"cursor-pointer"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.5em",height:"1.5em",viewBox:"0 0 24 24"},[t("path",{fill:"#212121",d:"M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"})])],-1),P=[E],F=["onClick"],N=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.5em",height:"1.5em",viewBox:"0 0 24 24"},[t("path",{fill:"#212121","fill-rule":"evenodd",d:"M17.204 10.796L19 9c.545-.545.818-.818.964-1.112a2 2 0 0 0 0-1.776C19.818 5.818 19.545 5.545 19 5c-.545-.545-.818-.818-1.112-.964a2 2 0 0 0-1.776 0c-.294.146-.567.419-1.112.964l-1.819 1.819a10.9 10.9 0 0 0 4.023 3.977m-5.477-2.523l-6.87 6.87c-.426.426-.638.638-.778.9c-.14.26-.199.555-.316 1.145l-.616 3.077c-.066.332-.1.498-.005.593c.095.095.26.061.593-.005l3.077-.616c.59-.117.885-.176 1.146-.316c.26-.14.473-.352.898-.777l6.89-6.89a12.901 12.901 0 0 1-4.02-3.98","clip-rule":"evenodd"})],-1),O=[N],S=["onClick"],q=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.5em",height:"1.5em",viewBox:"0 0 24 24"},[t("path",{fill:"#212121",d:"M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7zm4 12H8v-9h2zm6 0h-2v-9h2zm.618-15L15 2H9L7.382 4H3v2h18V4z"})],-1),G=[q],J={data(){return{modalRemoveActivity:!1,modalRemoveActivityCategory:!1,removedActivityId:null,data:null,form:{title:null,category:null,content:null},loadingData:!1,headers:[{title:"Title",align:"start",sortable:!1,key:"title",width:"300px"},{title:"Description",align:"start",sortable:!1,key:"description",width:"300px"},{title:"Thumbnail",align:"start",key:"thumbnail"},{title:"Content",align:"end",key:"content"},{title:"Actions",align:"center",key:"actions",sortable:!1}],items:[]}},async mounted(){await this.loadData()},methods:{async loadData(){this.loadingData=!0;const{data:n}=await $fetch(this.$config.public.API_PUBLIC_URL+"/api/activities");this.items=n,this.loadingData=!1},openModalRemoveActivity(n){this.modalRemoveActivity=!0,this.removedActivityId=n},async removeActivity(){await $fetch(this.$config.public.API_PUBLIC_URL+"/api/activities/"+this.removedActivityId,{method:"DELETE",headers:{Authorization:"Bearer "+y().token}}),this.modalRemoveActivity=!1,await this.loadData()}}},X=Object.assign(J,{__name:"index",setup(n){return f({title:"Kegiatan"}),(a,l)=>{const m=o("v-btn"),r=o("v-card"),h=o("v-dialog"),_=g,v=o("v-img"),u=o("v-data-table");return c(),d(w,null,[s(h,{modelValue:a.modalRemoveActivity,"onUpdate:modelValue":l[1]||(l[1]=e=>a.modalRemoveActivity=e),width:"auto"},{default:i(()=>[s(r,{height:"auto",style:{"scrollbar-width":"none"}},{title:i(()=>[t("div",k,[x,t("div",{onClick:l[0]||(l[0]=e=>a.modalRemoveActivity=!1),class:"cursor-pointer"},A)])]),text:i(()=>[B]),actions:i(()=>[t("div",L,[s(m,{variant:"flat",onClick:a.removeActivity,color:"#FC4100",class:"w-fit mt-6 text-white px-3 mx-1 mb-2 py-2 text-md"},{default:i(()=>[R]),_:1},8,["onClick"])])]),_:1})]),_:1},8,["modelValue"]),t("div",D,[z,t("div",H,[s(_,{to:"/dashboard/activities/add"},{default:i(()=>[s(m,{onClick:a.updateContent,color:"#10B981",class:"mt-3 text-white px-3 py-2"},{default:i(()=>[$]),_:1},8,["onClick"])]),_:1})])]),t("div",I,[t("div",M,[t("div",T,[s(u,{loading:a.loadingData,headers:a.headers,items:a.items,"item-key":"name"},{bottom:i(()=>[]),"item.thumbnail":i(({value:e})=>[s(v,{"lazy-src":e,src:e,width:"100",height:"100"},null,8,["lazy-src","src"])]),"item.content":i(({value:e})=>[e?(c(),d("span",{key:0,innerHTML:e.slice(0,100)},null,8,V)):(c(),d("span",j,"-"))]),"item.description":i(({value:e})=>[t("span",null,b(e.slice(0,80))+"...",1)]),"item.actions":i(({item:e})=>[t("div",K,[t("a",{href:`/kegiatan/${e.slug}`,target:"_blank"},P,8,U),t("div",{onClick:p=>a.$router.push("/dashboard/activities/edit?id="+e.uuid),class:"cursor-pointer mx-1"},O,8,F),t("div",{class:"cursor-pointer",onClick:p=>a.openModalRemoveActivity(e.uuid)},G,8,S)])]),_:1},8,["loading","headers","items"])])])])],64)}}});export{X as default};
