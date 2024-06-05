import { c as create_ssr_component, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { H as Header } from "../../chunks/Header.js";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer></footer>`;
});
const About_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".intro.svelte-7jj26g.svelte-7jj26g{display:flex;flex-direction:row;justify-content:space-between;background:var(--c-container);margin-left:18rem;margin-right:18rem;border-radius:15px;padding:2rem;color:var(--c-white)}img.svelte-7jj26g.svelte-7jj26g{height:12rem}.intro-styling.svelte-7jj26g.svelte-7jj26g{width:fit-content}h1.svelte-7jj26g.svelte-7jj26g{font-weight:lighter;font-size:25px}h2.svelte-7jj26g.svelte-7jj26g{background-image:linear-gradient(\r\n      to right,\r\n      var(--c-white),\r\n      var(--c-lightblue) 10%\r\n    );-webkit-background-clip:text;color:transparent;font-size:40px;margin-top:2rem;margin-bottom:2rem;border-right:3px solid var(--c-lightblue);width:100%;white-space:nowrap;overflow:hidden;animation:svelte-7jj26g-typing 2s steps(18),\r\n      svelte-7jj26g-cursor 0.5s step-end infinite alternate}@keyframes svelte-7jj26g-cursor{50%{border-color:transparent}}@keyframes svelte-7jj26g-typing{from{width:0}}.btn-contact.svelte-7jj26g.svelte-7jj26g{padding:0.5rem;color:var(--c-white);border:2px solid var(--c-lightblue);background:transparent;height:2.5rem;border-radius:12px;cursor:pointer;transition:0.2s ease-in-out;font-size:16px;text-decoration:none}.btn-contact.svelte-7jj26g.svelte-7jj26g:hover{background:var(--c-lightblue)}.btn-work.svelte-7jj26g.svelte-7jj26g{padding:0.5rem;background-image:linear-gradient(\r\n      to right,\r\n      var(--c-darkblue),\r\n      var(--c-lightblue)\r\n    );border:2px solid var(--c-lightblue);background:transparent;color:var(--c-white);margin-left:1rem;height:2.5rem;border-radius:12px;cursor:pointer;transition:0.2s ease-in-out;font-size:16px;text-decoration:none}.btn-work.svelte-7jj26g.svelte-7jj26g:hover{background:var(--c-lightblue)}.about.svelte-7jj26g.svelte-7jj26g{display:flex;flex-direction:row;justify-content:space-between;background:var(--c-container);margin-left:18rem;margin-right:18rem;margin-top:2rem;margin-bottom:2rem;border-radius:15px;padding:2rem;color:var(--c-white)}.time-container.svelte-7jj26g.svelte-7jj26g{display:flex;align-items:center}.clock.svelte-7jj26g.svelte-7jj26g{display:flex;justify-content:center;flex-direction:column;align-items:center}.clock.svelte-7jj26g p.svelte-7jj26g{font-size:25px}.amsterdam-time.svelte-7jj26g.svelte-7jj26g{display:flex;flex-direction:row;font-size:25px}h3.svelte-7jj26g.svelte-7jj26g{font-size:30px;padding-bottom:1rem}.personal-info.svelte-7jj26g.svelte-7jj26g{width:25rem;padding-left:1rem;border-left:2px solid var(--c-lightblue)}@media screen and (max-width: 1345px){.about.svelte-7jj26g.svelte-7jj26g{flex-direction:column}.clock.svelte-7jj26g.svelte-7jj26g{margin-top:1rem}}@media screen and (max-width: 1200px){.about.svelte-7jj26g.svelte-7jj26g{align-items:center}.intro.svelte-7jj26g.svelte-7jj26g{justify-content:center;align-items:center;flex-direction:column;padding-left:1rem;padding-right:1rem}}@media screen and (max-width: 1045px){.about.svelte-7jj26g.svelte-7jj26g{margin-right:10rem;margin-left:10rem}.intro.svelte-7jj26g.svelte-7jj26g{margin-right:10rem;margin-left:10rem}}@media screen and (max-width: 800px){.about.svelte-7jj26g.svelte-7jj26g{margin-right:5rem;margin-left:5rem}.intro.svelte-7jj26g.svelte-7jj26g{margin-right:5rem;margin-left:5rem}}@media screen and (max-width: 630px){.about.svelte-7jj26g.svelte-7jj26g{margin-right:3rem;margin-left:3rem}.intro.svelte-7jj26g.svelte-7jj26g{margin-right:3rem;margin-left:3rem}}",
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let hrs = 0;
  let min = 0;
  let sec = 0;
  $$result.css.add(css$3);
  return ` <main><div class="loader"></div> <section id="main"><article class="intro svelte-7jj26g" data-svelte-h="svelte-tdri6c"><div class="intro-styling svelte-7jj26g"><h1 class="svelte-7jj26g">Hi, I&#39;m Rayan Spall</h1> <h2 class="svelte-7jj26g">Frontend Developer</h2> <a href="/contact" class="btn-contact svelte-7jj26g">Contact Me</a> <a href="#work" class="btn-work svelte-7jj26g">My Work</a></div> <div> <img src="images/memeoji.png" alt="picture of me" class="svelte-7jj26g"></div></article> <article class="about svelte-7jj26g"><div id="about" data-svelte-h="svelte-e9rdx2"><h3 class="svelte-7jj26g">About Me</h3> <p class="personal-info svelte-7jj26g">My name Rayan Spall, a 19 year old frontend developer. I&#39;m currently
        studying frontend design and development at the Amsterdam University of
        Applied Sciences. I am deeply motivated to become a proficient frontend
        developer. As a frontend developer, I aspire to create visually
        appealing and user-friendly interfaces by utilizing the skills I&#39;ve
        acquired during my studies.</p></div> <div class="time-container svelte-7jj26g"><div class="clock svelte-7jj26g"><p class="svelte-7jj26g" data-svelte-h="svelte-zeolrr">Current time in Amsterdam:</p> <div class="amsterdam-time svelte-7jj26g"><span id="hrs">${escape(hrs)}</span> <span data-svelte-h="svelte-5vnx5k">:</span> <span id="min">${escape(min)}</span> <span data-svelte-h="svelte-5vnx5k">:</span> <span id="sec">${escape(sec)}</span></div></div></div></article></section> </main>`;
});
const Skills_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "@keyframes svelte-ihillk-slide{from{transform:translateX(0)}to{transform:translateX(-100%)}}section.svelte-ihillk.svelte-ihillk{display:flex;flex-direction:column;justify-content:center}.logo.svelte-ihillk.svelte-ihillk{overflow:hidden;display:flex;flex-direction:row;justify-content:center;margin-left:18rem;margin-right:18rem;background-color:var(--c-container);margin-bottom:5rem;border-radius:15px}.logos-slide.svelte-ihillk.svelte-ihillk{display:flex;flex-direction:row;white-space:nowrap;animation:20s svelte-ihillk-slide infinite linear;margin-top:2rem;margin-bottom:2rem}.logo.svelte-ihillk:hover .logos-slide.svelte-ihillk{animation-play-state:paused}.skills.svelte-ihillk.svelte-ihillk{color:var(--c-white);background-color:var(--c-background);border-radius:15px;padding:1rem;border:2px solid var(--c-lightblue);margin-right:10rem;width:5rem;box-shadow:-5px 5px 15px var(--c-lightblue);text-align:center}@keyframes svelte-ihillk-scroll{from{transform:translateX(0)}to{transform:translateX(-100%)}}@media screen and (max-width: 1045px){.logo.svelte-ihillk.svelte-ihillk{margin-right:10rem;margin-left:10rem}}@media screen and (max-width: 800px){.logo.svelte-ihillk.svelte-ihillk{margin-right:5rem;margin-left:5rem}}@media screen and (max-width: 630px){.logo.svelte-ihillk.svelte-ihillk{margin-right:3rem;margin-left:3rem}}",
  map: null
};
const Skills = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<section class="svelte-ihillk" data-svelte-h="svelte-1ez9v9w"> <article id="skills" class="logo svelte-ihillk"><div class="logos-slide svelte-ihillk"><div class="skills svelte-ihillk">HTML</div> <div class="skills svelte-ihillk">CSS</div> <div class="skills svelte-ihillk">JS</div> <div class="skills svelte-ihillk">REACT</div> <div class="skills svelte-ihillk">SVELTE</div> <div class="skills svelte-ihillk">LUA</div> <div class="skills svelte-ihillk">NEXTJS</div> <div class="skills svelte-ihillk">UX Design</div> <div class="skills svelte-ihillk">UI Design</div> <div class="skills svelte-ihillk">NODEJS</div> <div class="skills svelte-ihillk">EXPRESS</div></div> <div class="logos-slide svelte-ihillk"><div class="skills svelte-ihillk">HTML</div> <div class="skills svelte-ihillk">CSS</div> <div class="skills svelte-ihillk">JS</div> <div class="skills svelte-ihillk">REACT</div> <div class="skills svelte-ihillk">SVELTE</div> <div class="skills svelte-ihillk">LUA</div> <div class="skills svelte-ihillk">NEXTJS</div> <div class="skills svelte-ihillk">UX Design</div> <div class="skills svelte-ihillk">UI Design</div> <div class="skills svelte-ihillk">NODEJS</div> <div class="skills svelte-ihillk">EXPRESS</div></div> <div class="logos-slide svelte-ihillk"><div class="skills svelte-ihillk">HTML</div> <div class="skills svelte-ihillk">CSS</div> <div class="skills svelte-ihillk">JS</div> <div class="skills svelte-ihillk">REACT</div> <div class="skills svelte-ihillk">SVELTE</div> <div class="skills svelte-ihillk">LUA</div> <div class="skills svelte-ihillk">NEXTJS</div> <div class="skills svelte-ihillk">UX Design</div> <div class="skills svelte-ihillk">UI Design</div> <div class="skills svelte-ihillk">NODEJS</div> <div class="skills svelte-ihillk">EXPRESS</div></div></article> </section>`;
});
const Work_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "section.svelte-uf8x3v.svelte-uf8x3v{font-family:Arial, sans-serif;background:#f4f4f9;color:#333;padding:1.25rem;margin:0}section.svelte-uf8x3v h1.svelte-uf8x3v{margin-bottom:2rem}",
  map: null
};
const Work = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<section class="svelte-uf8x3v" data-svelte-h="svelte-12sd87t"><h1 id="work" class="svelte-uf8x3v">Mijn levenswerk</h1> <nav><input class="searchbar" type="text" id="searchInput" onkeyup="search()" placeholder="Zoek een repo..."></nav> <ul id="repos-container"></ul> </section>`;
});
const Cursor_svelte_svelte_type_style_lang = "";
const css = {
  code: ".circle.svelte-k7mcgh{height:24px;width:24px;border-radius:24px;background-color:black;position:fixed;filter:blur(5px);top:0;left:0;pointer-events:none;z-index:99999999}",
  map: null
};
const Cursor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="circle svelte-k7mcgh"></div> <div class="circle svelte-k7mcgh"></div> <div class="circle svelte-k7mcgh"></div> <div class="circle svelte-k7mcgh"></div> <div class="circle svelte-k7mcgh"></div> <div class="circle svelte-k7mcgh"></div> <div class="circle svelte-k7mcgh"></div> <div class="circle svelte-k7mcgh"></div> <div class="circle svelte-k7mcgh"></div> <div class="circle svelte-k7mcgh"></div> <div class="circle svelte-k7mcgh"></div> <div class="circle svelte-k7mcgh"></div> `;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Cursor, "Cursor").$$render($$result, {}, {}, {})} ${validate_component(Header, "Header").$$render($$result, {}, {}, {})} ${validate_component(About, "About").$$render($$result, {}, {}, {})} ${validate_component(Skills, "Skills").$$render($$result, {}, {}, {})} ${validate_component(Work, "Work").$$render($$result, {}, {}, {})} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
