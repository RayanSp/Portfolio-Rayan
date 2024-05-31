import { c as create_ssr_component, a as setContext, v as validate_component, m as missing_component } from "./ssr.js";
let base = "";
let assets = base;
const initial = { base, assets };
function reset() {
  base = initial.base;
  assets = initial.assets;
}
function set_assets(path) {
  assets = initial.assets = path;
}
let public_env = {};
function set_private_env(environment) {
}
function set_public_env(environment) {
  public_env = environment;
}
function afterUpdate() {
}
function set_building() {
}
const Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page } = $$props;
  let { constructors } = $$props;
  let { components = [] } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.constructors === void 0 && $$bindings.constructors && constructors !== void 0)
    $$bindings.constructors(constructors);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0)
    $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0)
    $$bindings.data_1(data_1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      stores.page.set(page);
    }
    $$rendered = `  ${constructors[1] ? `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(constructors[1] || missing_component, "svelte:component").$$render(
            $$result,
            { data: data_1, form, this: components[1] },
            {
              this: ($$value) => {
                components[1] = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}` : `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, form, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {}
    )}`} ${``}`;
  } while (!$$settled);
  return $$rendered;
});
const options = {
  app_template_contains_nonce: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  track_server_fetches: false,
  embedded: false,
  env_public_prefix: "PUBLIC_",
  env_private_prefix: "",
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root: Root,
  service_worker: false,
  templates: {
    app: ({ head, body, assets: assets2, nonce, env }) => '<!DOCTYPE html>\r\n<html lang="en">\r\n  <head>\r\n    <meta charset="utf-8" />\r\n    <meta name="RS" content="Port for Rayan" />\r\n    <meta name="viewport" content="width=device-width" />\r\n    <link rel="stylesheet" href="src/lib/style/global.css" />\r\n    ' + head + '\r\n    <title>Rayan S</title>\r\n  </head>\r\n  <body data-sveltekit-preload-data="hover">\r\n    <div style="display: contents">' + body + "</div>\r\n  </body>\r\n</html>\r\n\r\n\r\n<style>\r\n#repos-container {\r\n		display: flex;\r\n		flex-wrap: wrap;\r\n		gap: 1.25rem;\r\n		justify-content: center;\r\n	}\r\n\r\n	.repository {\r\n		background: white;\r\n		box-shadow: 0 0.125rem 0.3125rem rgba(0, 0, 0, 0.1);\r\n		width: 20rem;\r\n		padding: 1.25rem;\r\n		border-radius: 0.5rem;\r\n	}\r\n\r\n	.repository h2 {\r\n		margin-top: 0;\r\n	}\r\n\r\n	.repository a {\r\n		text-decoration: none;\r\n		color: #0366d6;\r\n	}\r\n\r\n	.repository p a {\r\n		text-decoration: none;\r\n		color: red;\r\n	}\r\n\r\n	.repository p {\r\n		max-width: 20rem;\r\n	}\r\n\r\n	.repository a:hover {\r\n		text-decoration: underline;\r\n	}\r\n</style>\r\n\r\n<script>\r\n	function search() {\r\n		const input = document.getElementById('searchInput');\r\n		const filterName = input.value.replace(/\\s/g, '-').toUpperCase();\r\n		const filterDescription = input.value.toUpperCase();\r\n		const repos = document.getElementsByClassName('repository');\r\n\r\n		for (let i = 0; i < repos.length; i++) {\r\n			const a = repos[i].getElementsByTagName('a')[0];\r\n			const pElements = repos[i].getElementsByTagName('p');\r\n			const repoName = (a.textContent || a.innerText).replace(/\\s/g, '-').toUpperCase();\r\n			const repoDescription1 = (pElements[0].textContent || pElements[0].innerText).toUpperCase();\r\n			const repoDescription2 = (pElements[1].textContent || pElements[1].innerText).toUpperCase();\r\n			repos[i].style.display =\r\n				repoName.includes(filterName) ||\r\n				repoDescription1.includes(filterDescription) ||\r\n				repoDescription2.includes(filterDescription)\r\n					? ''\r\n					: 'none';\r\n		}\r\n	}\r\n<\/script>",
    error: ({ status, message }) => '<!doctype html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family:
					system-ui,
					-apple-system,
					BlinkMacSystemFont,
					'Segoe UI',
					Roboto,
					Oxygen,
					Ubuntu,
					Cantarell,
					'Open Sans',
					'Helvetica Neue',
					sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
				margin: 0;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
  },
  version_hash: "okw1zq"
};
function get_hooks() {
  return {};
}
export {
  assets as a,
  base as b,
  set_public_env as c,
  set_assets as d,
  set_building as e,
  get_hooks as g,
  options as o,
  public_env as p,
  reset as r,
  set_private_env as s
};
