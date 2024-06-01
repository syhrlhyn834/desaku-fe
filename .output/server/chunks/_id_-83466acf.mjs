import { _ as __nuxt_component_0 } from './BreadCrumb-6154852b.mjs';
import { _ as __nuxt_component_0$1 } from './Date-c0091c75.mjs';
import { _ as __nuxt_component_2 } from './Tag-bfbd6b92.mjs';
import { _ as __nuxt_component_3 } from './EmptyData-033aa9c0.mjs';
import { _ as __nuxt_component_4, a as __nuxt_component_5 } from './LatestPotensi-40091dc8.mjs';
import { ref, withAsyncContext, resolveComponent, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { _ as _export_sfc, b as useRouter$1, u as useHead, n as navigateTo } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import moment from 'moment';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'destr';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'h3';
import 'ufo';
import '@vueuse/integrations/useJwt';
import 'cookie-es';
import 'ohash';
import 'pinia-plugin-persistedstate';
import 'defu';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRouter$1().currentRoute.value;
    const potensi = ref(null);
    const categoryName = ref(null);
    const { data, category_name } = ([__temp, __restore] = withAsyncContext(() => $fetch("/api/potensi-desa?category=" + route.params.id)), __temp = await __temp, __restore(), __temp);
    potensi.value = data;
    categoryName.value = category_name;
    useHead({
      title: "Potensi Desa: " + category_name
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BreadCrumb = __nuxt_component_0;
      const _component_v_img = resolveComponent("v-img");
      const _component_IconsDate = __nuxt_component_0$1;
      const _component_IconsTag = __nuxt_component_2;
      const _component_EmptyData = __nuxt_component_3;
      const _component_PartialsPotensiCategory = __nuxt_component_4;
      const _component_PartialsLatestPotensi = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex-1 animate-fade block px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-6" }, _attrs))} data-v-16b70e77>`);
      _push(ssrRenderComponent(_component_BreadCrumb, { child: unref(category_name) }, {
        root: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-16b70e77${_scopeId}>Potensi Desa</span>`);
          } else {
            return [
              createVNode("span", {
                onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/potensi-desa")
              }, "Potensi Desa", 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="grid grid-cols-1 md:grid-cols-6 md:gap-x-12" data-v-16b70e77><div class="block col-span-1 md:col-span-4" data-v-16b70e77><div class="text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-xl md:text-2xl font-semibold py-3" data-v-16b70e77><span data-v-16b70e77>Potensi Desa: ${ssrInterpolate(unref(category_name))}</span></div>`);
      if (unref(potensi).length > 0) {
        _push(`<!--[-->`);
        ssrRenderList(unref(potensi), (potensi2) => {
          _push(`<div class="cursor-pointer flex mb-[0.5rem] md:mb-2 h-[160px] md:h-[200px]" data-v-16b70e77><div class="h-[120px] sm:h-[160px] w-[140px] sm:w-[220px] md:w-[260px] flex-none" data-v-16b70e77>`);
          _push(ssrRenderComponent(_component_v_img, {
            "lazy-src": potensi2.thumbnail,
            height: "100%",
            "aspect-ratio": "4/3",
            src: potensi2.thumbnail
          }, null, _parent));
          _push(`</div><div class="block pl-4" data-v-16b70e77><div class="tetx-base md:text-xl font-semibold" data-v-16b70e77><span class="line-clamp-2" data-v-16b70e77>${ssrInterpolate(potensi2.title)}</span></div><div class="block md:flex" data-v-16b70e77><div class="text-xs md:text-base flex items-center font-medium mt-2" data-v-16b70e77>`);
          _push(ssrRenderComponent(_component_IconsDate, null, null, _parent));
          _push(`<span class="ml-1" data-v-16b70e77>${ssrInterpolate(unref(moment)(potensi2.created_at).format("LL"))}</span></div><div class="text-xs md:text-base flex items-center font-medium mt-2 sm:ml-2" data-v-16b70e77>`);
          _push(ssrRenderComponent(_component_IconsTag, null, null, _parent));
          _push(`<span class="ml-1" data-v-16b70e77>${ssrInterpolate(potensi2.category_name)}</span></div></div><div class="mt-2 text-sm md:text-base" data-v-16b70e77><span class="line-clamp-2 sm:line-clamp-3" data-v-16b70e77>${ssrInterpolate(potensi2.description)}</span></div></div></div>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(ssrRenderComponent(_component_EmptyData, null, null, _parent));
      }
      _push(`</div><div class="col-span-2" data-v-16b70e77>`);
      _push(ssrRenderComponent(_component_PartialsPotensiCategory, null, null, _parent));
      _push(ssrRenderComponent(_component_PartialsLatestPotensi, null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Potensi-Desa/Category/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-16b70e77"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-83466acf.mjs.map