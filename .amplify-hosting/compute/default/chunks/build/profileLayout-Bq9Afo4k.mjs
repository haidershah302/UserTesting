import { _ as __nuxt_component_0 } from './nuxt-link-Lqa5dhw-.mjs';
import { withCtx, openBlock, createBlock, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../../index.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="fixed flex justify-between bg-base-content text-base-100 w-full">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "btn btn-ghost"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg class="fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${_scopeId}><path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"${_scopeId}></path></svg>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            class: "fill-current w-10 h-10",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24"
          }, [
            createVNode("path", { d: "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/auth/register",
    class: "btn btn-ghost"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"${_scopeId}></path></svg>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: "h-5 w-5",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor"
          }, [
            createVNode("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M4 6h16M4 12h16M4 18h7"
            })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="h-12"></div><div class="bg-base-content pt-5 mb-5 text-base-100 w-full shadow-2xl shadow-primary/20"><div class="flex w-full gap-4 px-5 mb-6">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/profile/view",
    class: "avatar"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="w-20 rounded-full shadow-xl shadow-primary/30"${_scopeId}><img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"${_scopeId}></div>`);
      } else {
        return [
          createVNode("div", { class: "w-20 rounded-full shadow-xl shadow-primary/30" }, [
            createVNode("img", { src: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/profile",
    class: "font-bold text-lg block"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`User Name`);
      } else {
        return [
          createTextVNode("User Name")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="btn btn-xs px-5 btn-primary w-full font-extrabold mb-2"> 123456 </div><div class="flex gap-2 font-mono font-bold text-center"><div class="bg-primary rounded-md shadow shadow-primary/40 w-6/12"> 1 </div><div class="bg-info rounded-md shadow shadow-info/40 w-6/12"> 2 </div></div></div></div><div class="flex justify-between gap-2 px-2 font-bold"><div class="text-center"><p>4</p><p>Follow</p></div><div class="text-center"><p>4</p><p>Fans</p></div><div class="text-center"><p>4</p><p>Gifts Received</p></div><div class="text-center"><p>4</p><p>Gifts Sent</p></div><div class="text-center"><p>4</p><p>Visits</p></div></div></div><div class="px-5 mb-4"><h2 class="font-semibold px-2 border-l-4 border-l-primary">CP Relationship</h2></div><div class="px-4"><img class="rounded-box shadow-lg shadow-primary/30 border-2 border-primary" src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp" alt=""></div><div class="carousel carousel-center rounded-box max-w-md space-x-4 p-4 mb-4"><div class="carousel-item w-4/12"><img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" class="rounded-box shadow-lg shadow-primary/30 border-2 border-primary"></div><div class="carousel-item w-4/12"><img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" class="rounded-box shadow-lg shadow-primary/30 border-2 border-primary"></div></div>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/profileLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const profileLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { profileLayout as default };
//# sourceMappingURL=profileLayout-Bq9Afo4k.mjs.map
