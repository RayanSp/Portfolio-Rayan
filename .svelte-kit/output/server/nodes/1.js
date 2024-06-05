

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.4e76f2df.js","_app/immutable/chunks/scheduler.cc1c0861.js","_app/immutable/chunks/index.dafe449b.js","_app/immutable/chunks/singletons.15427814.js"];
export const stylesheets = [];
export const fonts = [];
