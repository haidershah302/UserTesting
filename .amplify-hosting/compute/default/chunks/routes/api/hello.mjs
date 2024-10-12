import { d as defineEventHandler } from '../../../index.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';

const hello = defineEventHandler((event) => {
  return {
    hello: "This is coming from and api rout"
  };
});

export { hello as default };
//# sourceMappingURL=hello.mjs.map
