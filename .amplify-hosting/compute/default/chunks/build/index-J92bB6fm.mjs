import { ssrRenderAttrs } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
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
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="carousel m-5 rounded-md shadow-xl"><div id="item1" class="carousel-item w-full"><img src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp" class="w-full"></div><div id="item2" class="carousel-item w-full"><img src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp" class="w-full"></div><div id="item3" class="carousel-item w-full"><img src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp" class="w-full"></div><div id="item4" class="carousel-item w-full"><img src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp" class="w-full"></div></div><div class="carousel carousel-center space-x-4 px-4"><div class="carousel-item w-6/12"><img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" class="shadow-xl rounded-box mb-8"></div><div class="carousel-item w-6/12"><img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" class="shadow-xl rounded-box mb-8"></div><div class="carousel-item w-6/12"><img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" class="shadow-xl rounded-box mb-8"></div><div class="carousel-item w-6/12"><img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" class="shadow-xl rounded-box mb-8"></div></div><div class="grid grid-cols-2 p-5 gap-4"><div class="rounded-box overflow-hidden h-52 shadow-xl"><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" class="h-full w-full"></div><div class="rounded-box overflow-hidden h-52 shadow-xl"><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" class="h-full w-full"></div><div class="rounded-box overflow-hidden h-52 shadow-xl"><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" class="h-full w-full"></div><div class="rounded-box overflow-hidden h-52 shadow-xl"><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" class="h-full w-full"></div><div class="rounded-box overflow-hidden h-52 shadow-xl"><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" class="h-full w-full"></div><div class="rounded-box overflow-hidden h-52 shadow-xl"><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" class="h-full w-full"></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-J92bB6fm.mjs.map
