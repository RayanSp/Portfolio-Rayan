
import root from '../root.svelte';
import { set_building, set_prerendering } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_manifest, set_read_implementation } from '__sveltekit/server';
import { set_private_env, set_public_env, set_safe_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_dir: "_app",
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <meta charset=\"utf-8\" />\r\n    <meta name=\"RS\" content=\"Port for Rayan\" />\r\n    <meta name=\"viewport\" content=\"width=device-width\" />\r\n    <link rel=\"stylesheet\" href=\"src/lib/style/global.css\" />\r\n    " + head + "\r\n    <title>Rayan S</title>\r\n  </head>\r\n  <body data-sveltekit-preload-data=\"hover\">\r\n    <div style=\"display: contents\">" + body + "</div>\r\n  </body>\r\n</html>\r\n\r\n\r\n<style>\r\n\r\n\r\n#repos-container {\r\n\t\tdisplay: flex;\r\n\t\tflex-wrap: wrap;\r\n\t\tgap: 1.25rem;\r\n\t\tjustify-content: center;\r\n\t}\r\n\r\n\t.repository {\r\n\t\tbackground: white;\r\n\t\tbox-shadow: 0 0.125rem 0.3125rem rgba(0, 0, 0, 0.1);\r\n\t\twidth: 20rem;\r\n\t\tpadding: 1.25rem;\r\n\t\tborder-radius: 0.5rem;\r\n\t}\r\n\r\n\t.repository h2 {\r\n\t\tmargin-top: 0;\r\n\t}\r\n\r\n\t.repository a {\r\n\t\ttext-decoration: none;\r\n\t\tcolor: #0366d6;\r\n\t}\r\n\r\n\t.repository p a {\r\n\t\ttext-decoration: none;\r\n\t\tcolor: red;\r\n\t}\r\n\r\n\t.repository p {\r\n\t\tmax-width: 20rem;\r\n\t}\r\n\r\n\t.repository a:hover {\r\n\t\ttext-decoration: underline;\r\n\t}\r\n</style>\r\n\r\n<script>\r\n\r\n\r\n\r\n\tfunction search() {\r\n\t\tconst input = document.getElementById('searchInput');\r\n\t\tconst filterName = input.value.replace(/\\s/g, '-').toUpperCase();\r\n\t\tconst filterDescription = input.value.toUpperCase();\r\n\t\tconst repos = document.getElementsByClassName('repository');\r\n\r\n\t\tfor (let i = 0; i < repos.length; i++) {\r\n\t\t\tconst a = repos[i].getElementsByTagName('a')[0];\r\n\t\t\tconst pElements = repos[i].getElementsByTagName('p');\r\n\t\t\tconst repoName = (a.textContent || a.innerText).replace(/\\s/g, '-').toUpperCase();\r\n\t\t\tconst repoDescription1 = (pElements[0].textContent || pElements[0].innerText).toUpperCase();\r\n\t\t\tconst repoDescription2 = (pElements[1].textContent || pElements[1].innerText).toUpperCase();\r\n\t\t\trepos[i].style.display =\r\n\t\t\t\trepoName.includes(filterName) ||\r\n\t\t\t\trepoDescription1.includes(filterDescription) ||\r\n\t\t\t\trepoDescription2.includes(filterDescription)\r\n\t\t\t\t\t? ''\r\n\t\t\t\t\t: 'none';\r\n\t\t}\r\n\t}\r\n</script>",
		error: ({ status, message }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family:\n\t\t\t\t\tsystem-ui,\n\t\t\t\t\t-apple-system,\n\t\t\t\t\tBlinkMacSystemFont,\n\t\t\t\t\t'Segoe UI',\n\t\t\t\t\tRoboto,\n\t\t\t\t\tOxygen,\n\t\t\t\t\tUbuntu,\n\t\t\t\t\tCantarell,\n\t\t\t\t\t'Open Sans',\n\t\t\t\t\t'Helvetica Neue',\n\t\t\t\t\tsans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "u62q0p"
};

export async function get_hooks() {
	return {
		
		
	};
}

export { set_assets, set_building, set_manifest, set_prerendering, set_private_env, set_public_env, set_read_implementation, set_safe_public_env };
