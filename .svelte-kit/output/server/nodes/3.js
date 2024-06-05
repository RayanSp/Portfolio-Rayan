import * as server from '../entries/pages/contact/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/contact/+page.server.js";
export const imports = ["_app/immutable/nodes/3.e878f021.js","_app/immutable/chunks/scheduler.cc1c0861.js","_app/immutable/chunks/index.dafe449b.js","_app/immutable/chunks/Header.87f779e6.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.15427814.js","_app/immutable/chunks/navigation.72b18d7b.js"];
export const stylesheets = ["_app/immutable/assets/3.18251625.css","_app/immutable/assets/Header.ac138ef1.css"];
export const fonts = [];
