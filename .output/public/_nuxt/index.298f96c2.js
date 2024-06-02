import{_ as u}from"./nuxt-link.0d03c37b.js";import{u as f,c as o,b as i,w as a,a as e,F as w,g as k,r as n,o as l,t as c}from"./entry.b57668ff.js";const x={class:"flex items-center justify-between"},y=e("div",{class:"text-xl font-semibold"},[e("span",null,"Hapus Lembaga?")],-1),L=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"2em",height:"2em",viewBox:"0 0 24 24"},[e("g",{fill:"none",stroke:"black","stroke-width":"1.5"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{"stroke-linecap":"round",d:"m14.5 9.5l-5 5m0-5l5 5"})])],-1),C=[L],B=e("div",null,[e("span",null,"Lembaga yang dihapus tidak bisa dikembalikan kembali.")],-1),D={class:"w-full flex justify-end"},$=e("span",{class:"capitalize"},"Hapus",-1),I={class:"flex justify-between items-center mb-3"},V=e("div",{class:"text-2xl font-semibold mb-2"},"Lembaga",-1),z={class:"text-md font-semibold mb-2"},H=e("span",{class:"capitalize"},"Tambah Lembaga +",-1),j={class:"grid animate-fade mb-6"},M={class:"col-12"},P={class:"card"},U={key:0},A={key:1},E={key:0},N={key:1},T={key:0},F={key:1},R={class:"flex justify-center"},S=["href"],O=e("div",{class:"cursor-pointer"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.5em",height:"1.5em",viewBox:"0 0 24 24"},[e("path",{fill:"#212121",d:"M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"})])],-1),q=[O],G=["onClick"],J=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.5em",height:"1.5em",viewBox:"0 0 24 24"},[e("path",{fill:"#212121","fill-rule":"evenodd",d:"M17.204 10.796L19 9c.545-.545.818-.818.964-1.112a2 2 0 0 0 0-1.776C19.818 5.818 19.545 5.545 19 5c-.545-.545-.818-.818-1.112-.964a2 2 0 0 0-1.776 0c-.294.146-.567.419-1.112.964l-1.819 1.819a10.9 10.9 0 0 0 4.023 3.977m-5.477-2.523l-6.87 6.87c-.426.426-.638.638-.778.9c-.14.26-.199.555-.316 1.145l-.616 3.077c-.066.332-.1.498-.005.593c.095.095.26.061.593-.005l3.077-.616c.59-.117.885-.176 1.146-.316c.26-.14.473-.352.898-.777l6.89-6.89a12.901 12.901 0 0 1-4.02-3.98","clip-rule":"evenodd"})],-1),K=[J],Q=["onClick"],W=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.5em",height:"1.5em",viewBox:"0 0 24 24"},[e("path",{fill:"#212121",d:"M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7zm4 12H8v-9h2zm6 0h-2v-9h2zm.618-15L15 2H9L7.382 4H3v2h18V4z"})],-1),X=[W],Y={data(){return{loadingData:!1,enabled:!0,modalremoveLembaga:!1,modalremoveLembagaCategory:!1,removedLembagaId:null,data:null,headers:[{title:"Name",align:"start",sortable:!1,key:"name",width:"300px"},{title:"Surname",align:"start",sortable:!1,key:"surname",width:"300px"},{title:"Profile",align:"start",sortable:!1,key:"profile",width:"300px"},{title:"Visi",align:"start",sortable:!1,key:"visi",width:"300px"},{title:"Tugas",align:"start",sortable:!1,key:"tugas",width:"300px"},{title:"Image",align:"start",sortable:!1,key:"image",width:"300px"},{title:"Actions",align:"center",key:"actions",sortable:!1}],items:[]}},async mounted(){await this.loadData()},methods:{async loadData(){this.loadingData=!0;const d=await $fetch(this.$config.public.API_PUBLIC_URL+"/api/lembaga");this.items=d,this.loadingData=!1},openModalremoveLembaga(d){this.modalremoveLembaga=!0,this.removedLembagaId=d},async removeLembaga(){await $fetch(this.$config.public.API_PUBLIC_URL+"/api/lembaga/"+this.removedLembagaId,{method:"DELETE",headers:{Authorization:"Bearer "+k().token}}),this.modalremoveLembaga=!1,await this.loadData()}}},te=Object.assign(Y,{__name:"index",setup(d){return f({title:"Lembaga"}),(s,m)=>{const r=n("v-btn"),h=n("v-card"),_=n("v-dialog"),g=u,p=n("v-img"),v=n("v-data-table");return l(),o(w,null,[i(_,{modelValue:s.modalremoveLembaga,"onUpdate:modelValue":m[1]||(m[1]=t=>s.modalremoveLembaga=t),width:"auto"},{default:a(()=>[i(h,{height:"auto",style:{"scrollbar-width":"none"}},{title:a(()=>[e("div",x,[y,e("div",{onClick:m[0]||(m[0]=t=>s.modalremoveLembaga=!1),class:"cursor-pointer"},C)])]),text:a(()=>[B]),actions:a(()=>[e("div",D,[i(r,{variant:"flat",onClick:s.removeLembaga,color:"#FC4100",class:"w-fit mt-6 text-white px-3 mx-1 mb-2 py-2 text-md"},{default:a(()=>[$]),_:1},8,["onClick"])])]),_:1})]),_:1},8,["modelValue"]),e("div",I,[V,e("div",z,[i(g,{to:"/dashboard/lembaga/add"},{default:a(()=>[i(r,{onClick:s.updateContent,color:"#10B981",class:"mt-3 text-white px-3 py-2"},{default:a(()=>[H]),_:1},8,["onClick"])]),_:1})])]),e("div",j,[e("div",M,[e("div",P,[i(v,{loading:s.loadingData,headers:s.headers,items:s.items,"item-key":"name"},{bottom:a(()=>[]),"item.image":a(({value:t})=>[i(p,{src:t,width:"100",height:"100"},null,8,["src"])]),"item.visi":a(({value:t})=>[t?(l(),o("div",U,c(t.replace(/(<([^>]+)>)/ig,"").slice(0,100)),1)):(l(),o("span",A,"-"))]),"item.tugas":a(({value:t})=>[t?(l(),o("div",E,c(t.replace(/(<([^>]+)>)/ig,"").slice(0,100)),1)):(l(),o("span",N,"-"))]),"item.profile":a(({value:t})=>[t?(l(),o("div",T,c(t.replace(/(<([^>]+)>)/ig,"").slice(0,100)),1)):(l(),o("span",F,"-"))]),"item.actions":a(({item:t})=>[e("div",R,[e("a",{href:`/kegiatan/${t.slug}`,target:"_blank"},q,8,S),e("div",{onClick:b=>s.$router.push("/dashboard/lembaga/edit?id="+t.uuid),class:"cursor-pointer mx-1"},K,8,G),e("div",{class:"cursor-pointer",onClick:b=>s.openModalremoveLembaga(t.uuid)},X,8,Q)])]),_:1},8,["loading","headers","items"])])])])],64)}}});export{te as default};
