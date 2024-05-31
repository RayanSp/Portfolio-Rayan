export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {"start":"_app/immutable/entry/start.408e69b4.js","app":"_app/immutable/entry/app.8bdfb234.js","imports":["_app/immutable/entry/start.408e69b4.js","_app/immutable/chunks/scheduler.cc1c0861.js","_app/immutable/chunks/singletons.190e1f65.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.8bdfb234.js","_app/immutable/chunks/scheduler.cc1c0861.js","_app/immutable/chunks/index.4599ade8.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
