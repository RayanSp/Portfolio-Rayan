import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { H as Header } from "../../chunks/Header.js";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer></footer>`;
});
const About_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".intro.svelte-1ftjjts.svelte-1ftjjts{background:var(--c-container);margin-left:10rem;margin-right:10rem;border-radius:15px;padding:2rem;color:var(--c-white)}.intro-styling.svelte-1ftjjts.svelte-1ftjjts{width:fit-content}h1.svelte-1ftjjts.svelte-1ftjjts{font-weight:lighter;font-size:25px}h2.svelte-1ftjjts.svelte-1ftjjts{background-image:linear-gradient(\r\n      to right,\r\n      var(--c-white),\r\n      var(--c-lightblue) 10%\r\n    );-webkit-background-clip:text;color:transparent;font-size:40px;margin-top:2rem;margin-bottom:2rem;border-right:3px solid var(--c-lightblue);width:100%;white-space:nowrap;overflow:hidden;animation:svelte-1ftjjts-typing 2s steps(18),\r\n      svelte-1ftjjts-cursor 0.5s step-end infinite alternate}@keyframes svelte-1ftjjts-cursor{50%{border-color:transparent}}@keyframes svelte-1ftjjts-typing{from{width:0}}.btn-contact.svelte-1ftjjts.svelte-1ftjjts{padding:0.5rem;color:var(--c-white);border:2px solid var(--c-lightblue);background:transparent;height:2.5rem;border-radius:12px;cursor:pointer;transition:0.2s ease-in-out;font-size:16px;text-decoration:none}.btn-contact.svelte-1ftjjts.svelte-1ftjjts:hover{background:var(--c-lightblue)}.btn-work.svelte-1ftjjts.svelte-1ftjjts{padding:0.5rem;background-image:linear-gradient(\r\n      to right,\r\n      var(--c-darkblue),\r\n      var(--c-lightblue)\r\n    );border:2px solid var(--c-lightblue);background:transparent;color:var(--c-white);margin-left:1rem;height:2.5rem;border-radius:12px;cursor:pointer;transition:0.2s ease-in-out;font-size:16px;text-decoration:none}.btn-work.svelte-1ftjjts.svelte-1ftjjts:hover{background:var(--c-lightblue)}.about.svelte-1ftjjts.svelte-1ftjjts{background:var(--c-container);margin-left:10rem;margin-right:10rem;margin-top:2rem;margin-bottom:2rem;border-radius:15px;padding:2rem;color:var(--c-white)}h3.svelte-1ftjjts.svelte-1ftjjts{font-size:30px;padding-bottom:1rem}article.svelte-1ftjjts p.svelte-1ftjjts{width:25rem;padding-left:1rem;border-left:2px solid var(--c-lightblue)}",
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return ` <main data-svelte-h="svelte-n3a85q"><div class="loader"></div> <section id="main"><article class="intro svelte-1ftjjts"><div class="intro-styling svelte-1ftjjts"><h1 class="svelte-1ftjjts">Hi, I&#39;m Rayan Spall</h1> <h2 class="svelte-1ftjjts">Frontend Developer</h2> <button class="btn-contact svelte-1ftjjts" href="/contact">Contact Me</button> <button class="btn-work svelte-1ftjjts" href="#">My Work</button></div></article> <article id="About" class="about svelte-1ftjjts"><h3 class="svelte-1ftjjts">About Me</h3> <p class="svelte-1ftjjts">My name Rayan Spall, a 19 year old frontend developer. I&#39;m currently
        studying frontend design and development at the Amsterdam University of
        Applied Sciences. I am deeply motivated to become a proficient frontend
        developer. As a frontend developer, I aspire to create visually
        appealing and user-friendly interfaces by utilizing the skills I&#39;ve
        acquired during my studies.</p></article></section> </main>`;
});
const Skills_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "@keyframes svelte-53gw1u-slide{from{transform:translateX(0)}to{transform:translateX(-100%)}}section.svelte-53gw1u.svelte-53gw1u{display:flex;flex-direction:column;justify-content:center}.logo.svelte-53gw1u.svelte-53gw1u{overflow:hidden;display:flex;flex-direction:row;justify-content:center;margin-left:10rem;margin-right:10rem;background-color:var(--c-container);margin-bottom:5rem;border-radius:15px}.logos-slide.svelte-53gw1u.svelte-53gw1u{display:flex;flex-direction:row;white-space:nowrap;animation:20s svelte-53gw1u-slide infinite linear;margin-top:2rem;margin-bottom:2rem}.logo.svelte-53gw1u:hover .logos-slide.svelte-53gw1u{animation-play-state:paused}.skills.svelte-53gw1u.svelte-53gw1u{color:var(--c-white);background-color:var(--c-background);border-radius:15px;padding:1rem;border:2px solid var(--c-lightblue);margin-right:10rem;width:5rem;box-shadow:-5px 5px 15px var(--c-lightblue);text-align:center}@keyframes svelte-53gw1u-scroll{from{transform:translateX(0)}to{transform:translateX(-100%)}}",
  map: null
};
const Skills = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<section class="svelte-53gw1u" data-svelte-h="svelte-1ahj20k"> <article id="Skills" class="logo svelte-53gw1u"><div class="logos-slide svelte-53gw1u"><div class="skills svelte-53gw1u">HTML</div> <div class="skills svelte-53gw1u">CSS</div> <div class="skills svelte-53gw1u">JS</div> <div class="skills svelte-53gw1u">REACT</div> <div class="skills svelte-53gw1u">SVELTE</div> <div class="skills svelte-53gw1u">LUA</div> <div class="skills svelte-53gw1u">NEXTJS</div> <div class="skills svelte-53gw1u">UX Design</div> <div class="skills svelte-53gw1u">UI Design</div> <div class="skills svelte-53gw1u">NODEJS</div> <div class="skills svelte-53gw1u">EXPRESS</div></div> <div class="logos-slide svelte-53gw1u"><div class="skills svelte-53gw1u">HTML</div> <div class="skills svelte-53gw1u">CSS</div> <div class="skills svelte-53gw1u">JS</div> <div class="skills svelte-53gw1u">REACT</div> <div class="skills svelte-53gw1u">SVELTE</div> <div class="skills svelte-53gw1u">LUA</div> <div class="skills svelte-53gw1u">NEXTJS</div> <div class="skills svelte-53gw1u">UX Design</div> <div class="skills svelte-53gw1u">UI Design</div> <div class="skills svelte-53gw1u">NODEJS</div> <div class="skills svelte-53gw1u">EXPRESS</div></div> <div class="logos-slide svelte-53gw1u"><div class="skills svelte-53gw1u">HTML</div> <div class="skills svelte-53gw1u">CSS</div> <div class="skills svelte-53gw1u">JS</div> <div class="skills svelte-53gw1u">REACT</div> <div class="skills svelte-53gw1u">SVELTE</div> <div class="skills svelte-53gw1u">LUA</div> <div class="skills svelte-53gw1u">NEXTJS</div> <div class="skills svelte-53gw1u">UX Design</div> <div class="skills svelte-53gw1u">UI Design</div> <div class="skills svelte-53gw1u">NODEJS</div> <div class="skills svelte-53gw1u">EXPRESS</div></div></article> </section>`;
});
const Work_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-uf8x3v.svelte-uf8x3v{font-family:Arial, sans-serif;background:#f4f4f9;color:#333;padding:1.25rem;margin:0}section.svelte-uf8x3v h1.svelte-uf8x3v{margin-bottom:2rem}",
  map: null
};
const Work = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="svelte-uf8x3v" data-svelte-h="svelte-hlfrsu"><h1 class="svelte-uf8x3v">Mijn levenswerk</h1> <nav><input class="searchbar" type="text" id="searchInput" onkeyup="search()" placeholder="Zoek een repo..."></nav> <ul id="repos-container"></ul> </section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} ${validate_component(About, "About").$$render($$result, {}, {}, {})} ${validate_component(Skills, "Skills").$$render($$result, {}, {}, {})} ${validate_component(Work, "Work").$$render($$result, {}, {}, {})} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
