

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.1da54791.js","_app/immutable/chunks/scheduler.cc1c0861.js","_app/immutable/chunks/index.dafe449b.js","_app/immutable/chunks/navigation.0f1dc8c7.js","_app/immutable/chunks/singletons.d34f27b0.js"];
export const stylesheets = ["_app/immutable/assets/0.1f266938.css"];
export const fonts = [];
