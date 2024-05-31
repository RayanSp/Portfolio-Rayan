

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.75b7f6e6.js","_app/immutable/chunks/scheduler.cc1c0861.js","_app/immutable/chunks/index.4599ade8.js","_app/immutable/chunks/Header.fc233063.js"];
export const stylesheets = ["_app/immutable/assets/2.6c9d2c63.css","_app/immutable/assets/Header.939d2218.css"];
export const fonts = [];
