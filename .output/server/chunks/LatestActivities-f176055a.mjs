import { mergeProps, useSSRContext, ref, withAsyncContext, resolveComponent, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import moment from 'moment';

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 32 32"
  }, _attrs))}><path fill="currentColor" d="M16 2A11.013 11.013 0 0 0 5 13a10.9 10.9 0 0 0 2.216 6.6s.3.395.349.452L16 30l8.439-9.953c.044-.053.345-.447.345-.447l.001-.003A10.9 10.9 0 0 0 27 13A11.013 11.013 0 0 0 16 2m0 15a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4"></path><circle cx="16" cy="13" r="4" fill="none"></circle></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Location.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "LatestActivities",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const activities = ref(null);
    activities.value = ([__temp, __restore] = withAsyncContext(() => $fetch("/api/kegiatan?limit=5")), __temp = await __temp, __restore(), __temp).data;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_img = resolveComponent("v-img");
      _push(`<!--[--><div class="${ssrRenderClass([_ctx.$vuetify.display.mobile ? "mt-5" : "mt-0", "text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-xl sm:text-2xl font-semibold py-3"])}" data-v-4322ee40><span data-v-4322ee40>Kegiatan Terbaru</span></div><div class="mb-10" data-v-4322ee40><!--[-->`);
      ssrRenderList(unref(activities), (activity) => {
        _push(`<div class="cursor-pointer px-0 py-3 flex" data-v-4322ee40><div class="w-[140px] flex-none" data-v-4322ee40>`);
        _push(ssrRenderComponent(_component_v_img, {
          "lazy-src": activity.thumbnail,
          class: "w-full",
          height: "80",
          src: activity.thumbnail,
          alt: ""
        }, null, _parent));
        _push(`</div><div class="block ml-3" data-v-4322ee40><div class="text-[#0088CC] text-base font-medium" data-v-4322ee40><span class="line-clamp-2" data-v-4322ee40>${ssrInterpolate(activity.title)}</span></div><div class="mt-1" data-v-4322ee40><span data-v-4322ee40>${ssrInterpolate(unref(moment)(activity.created_at).format("LL"))}</span></div></div></div>`);
      });
      _push(`<!--]--></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Partials/LatestActivities.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4322ee40"]]);

export { __nuxt_component_2 as _, __nuxt_component_3 as a };
//# sourceMappingURL=LatestActivities-f176055a.mjs.map
