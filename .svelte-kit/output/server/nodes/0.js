

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.5dcbbdbc.js","_app/immutable/chunks/scheduler.cc1c0861.js","_app/immutable/chunks/index.4599ade8.js","_app/immutable/chunks/navigation.9c564796.js","_app/immutable/chunks/singletons.190e1f65.js"];
export const stylesheets = ["_app/immutable/assets/0.82d82e00.css"];
export const fonts = [];
