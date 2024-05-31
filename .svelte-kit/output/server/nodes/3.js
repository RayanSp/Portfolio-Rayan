import * as server from '../entries/pages/contact/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/contact/+page.server.js";
export const imports = ["_app/immutable/nodes/3.4fdbff36.js","_app/immutable/chunks/scheduler.cc1c0861.js","_app/immutable/chunks/index.4599ade8.js","_app/immutable/chunks/Header.fc233063.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.190e1f65.js","_app/immutable/chunks/navigation.9c564796.js"];
export const stylesheets = ["_app/immutable/assets/3.ca3d665f.css","_app/immutable/assets/Header.939d2218.css"];
export const fonts = [];
