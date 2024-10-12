import { _ as __nuxt_component_0 } from './nuxt-link-Lqa5dhw-.mjs';
import { withCtx, createTextVNode, openBlock, createBlock, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent } from 'vue/server-renderer';
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
  _push(`<div${ssrRenderAttrs(_attrs)}><header class="navbar fixed bg-base-content text-base-100 mb-2">`);
  ssrRenderSlot(_ctx.$slots, "header", {}, null, _push, _parent);
  _push(`<div class="flex-1 p-0">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "btn btn-ghost text-xl pt-0 m-0"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Fly-Live`);
      } else {
        return [
          createTextVNode("Fly-Live")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><ul class="menu menu-horizontal p-0"><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/auth/login" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Login`);
      } else {
        return [
          createTextVNode("Login")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/auth/register" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Register`);
      } else {
        return [
          createTextVNode("Register")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></header><div class="h-20"></div><div class="flex justify-end gap-2 px-5 font-sans font-semibold">`);
  _push(ssrRenderComponent(_component_NuxtLink, { class: "btn btn-sm rounded bg-base-100 shadow" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Popular`);
      } else {
        return [
          createTextVNode("Popular")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { class: "btn btn-sm rounded bg-base-100 shadow" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Explore`);
      } else {
        return [
          createTextVNode("Explore")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { class: "btn btn-sm rounded bg-base-100 shadow" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Follow`);
      } else {
        return [
          createTextVNode("Follow")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><main>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main><div class="btm-nav bg-base-content text-base-100 z-10"><button><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg></button><button><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></button>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/room" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"${_scopeId}></path></svg>`);
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
              d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<button><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg></button>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/profile" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="avatar shadow-lg shadow-primary/30"${_scopeId}><div class="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2"${_scopeId}><img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"${_scopeId}></div></div>`);
      } else {
        return [
          createVNode("div", { class: "avatar shadow-lg shadow-primary/30" }, [
            createVNode("div", { class: "ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2" }, [
              createVNode("img", { src: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" })
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="h-80"></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-Bbd-j-vB.mjs.map
