

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.fbb2299a.js","_app/immutable/chunks/scheduler.cc1c0861.js","_app/immutable/chunks/index.dafe449b.js","_app/immutable/chunks/Header.87f779e6.js"];
export const stylesheets = ["_app/immutable/assets/2.9b97ce00.css","_app/immutable/assets/Header.ac138ef1.css"];
export const fonts = [];
