import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { H as Header } from "../../../chunks/Header.js";
import "devalue";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".form-container.svelte-4iksnx.svelte-4iksnx{display:flex;justify-content:center;width:100%;max-width:400px;margin:20px auto;padding:20px;background:var(--c-container);box-shadow:0 4px 6px rgba(0, 0, 0, 0.1);border-radius:8px}.contact-form.svelte-4iksnx.svelte-4iksnx{display:flex;flex-direction:column;gap:12px}h1.svelte-4iksnx.svelte-4iksnx{color:var(--c-white);text-align:center}.form-wrapper.svelte-4iksnx.svelte-4iksnx{display:flex;flex-direction:column;justify-content:center;border:none}.form-label.svelte-4iksnx.svelte-4iksnx{font-weight:bold;font-size:14px;color:var(--c-white)}.input-field.svelte-4iksnx.svelte-4iksnx{width:20rem;padding:8px 12px;font-size:14px;border:1px solid #ccc;border-radius:4px;transition:border-color 0.3s ease-in-out;margin-bottom:2rem}.input-field.svelte-4iksnx.svelte-4iksnx:focus{border-color:var(--c-lightblue);outline:none}.btn.svelte-4iksnx.svelte-4iksnx{padding:10px 14px;font-size:14px;font-weight:bold;text-align:center;border:none;border-radius:4px;cursor:pointer;transition:background-color 0.3s ease-in-out}.btn-primary.svelte-4iksnx.svelte-4iksnx{background-color:var(--c-lightblue);color:#fff}.btn-primary.svelte-4iksnx.svelte-4iksnx:hover{background-color:var(--c-darkblue)}input.svelte-4iksnx.svelte-4iksnx:valid{border:2px solid lightgreen}form.svelte-4iksnx:invalid .btn-primary.svelte-4iksnx{background-color:#6c757d;cursor:not-allowed}.success-message.svelte-4iksnx.svelte-4iksnx,.error-message.svelte-4iksnx.svelte-4iksnx{font-size:14px;font-weight:bold;padding:8px;border-radius:4px}.success-message.svelte-4iksnx.svelte-4iksnx{color:#155724;background-color:#d4edda;border-color:#c3e6cb}.error-message.svelte-4iksnx.svelte-4iksnx{color:#721c24;background-color:#f8d7da;border-color:#f5c6cb}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <section class="form-container svelte-4iksnx"><form method="POST" class="contact-form svelte-4iksnx"><h1 class="svelte-4iksnx" data-svelte-h="svelte-tbczl2">Contact</h1> <fieldset class="form-wrapper svelte-4iksnx" data-svelte-h="svelte-17au1cp"><label for="name" class="form-label svelte-4iksnx"><span>Name</span></label> <input type="text" name="name" id="name" required placeholder="e.g John Doe" class="input-field svelte-4iksnx"> <label for="email" class="form-label svelte-4iksnx"><span>Email</span></label> <input type="email" name="email" id="email" required placeholder="e.g johndoe@mail.com" class="input-field svelte-4iksnx"> <label for="message" class="form-label svelte-4iksnx"><span>Message</span></label> <textarea name="message" id="message" required placeholder="Tell me your message..." class="input-field svelte-4iksnx"></textarea></fieldset> ${``} ${``} <button type="submit" class="btn btn-primary svelte-4iksnx" ${""}>${`Verstuur`}</button></form> </section>`;
});
export {
  Page as default
};