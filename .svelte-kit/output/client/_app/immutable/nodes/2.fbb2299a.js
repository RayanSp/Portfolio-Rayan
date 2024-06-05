import{s as B,n as C,o as ae}from"../chunks/scheduler.cc1c0861.js";import{S as Y,i as Z,g as h,h as u,j as y,f as l,a as v,s as $,m as le,c as _,y as R,n as ie,k,x as p,o as ne,r as X,u as J,v as O,d as F,t as q,w as W}from"../chunks/index.dafe449b.js";import{H as he}from"../chunks/Header.87f779e6.js";function ue(I){let t;return{c(){t=h("footer")},l(c){t=u(c,"FOOTER",{}),y(t).forEach(l)},m(c,i){v(c,t,i)},p:C,i:C,o:C,d(c){c&&l(t)}}}class fe extends Y{constructor(t){super(),Z(this,t,null,ue,B,{})}}function me(I){let t,c,i,d,n,m='<div class="intro-styling svelte-7jj26g"><h1 class="svelte-7jj26g">Hi, I&#39;m Rayan Spall</h1> <h2 class="svelte-7jj26g">Frontend Developer</h2> <a href="/contact" class="btn-contact svelte-7jj26g">Contact Me</a> <a href="#work" class="btn-work svelte-7jj26g">My Work</a></div> <div><img src="images/memeoji.png" alt="picture of me" class="svelte-7jj26g"/></div>',r,E,g,w=`<h3 class="svelte-7jj26g">About Me</h3> <p class="personal-info svelte-7jj26g">My name Rayan Spall, a 19 year old frontend developer. I&#39;m currently
        studying frontend design and development at the Amsterdam University of
        Applied Sciences. I am deeply motivated to become a proficient frontend
        developer. As a frontend developer, I aspire to create visually
        appealing and user-friendly interfaces by utilizing the skills I&#39;ve
        acquired during my studies.</p>`,x,a,e,o,D="Current time in Amsterdam:",T,S,A,M,N,j,z=":",L,s,f,te,U,ce=":",se,P,G;return{c(){t=h("main"),c=h("div"),i=$(),d=h("section"),n=h("article"),n.innerHTML=m,r=$(),E=h("article"),g=h("div"),g.innerHTML=w,x=$(),a=h("div"),e=h("div"),o=h("p"),o.textContent=D,T=$(),S=h("div"),A=h("span"),M=le(I[0]),N=$(),j=h("span"),j.textContent=z,L=$(),s=h("span"),f=le(I[1]),te=$(),U=h("span"),U.textContent=ce,se=$(),P=h("span"),G=le(I[2]),this.h()},l(b){t=u(b,"MAIN",{});var V=y(t);c=u(V,"DIV",{class:!0}),y(c).forEach(l),i=_(V),d=u(V,"SECTION",{id:!0});var K=y(d);n=u(K,"ARTICLE",{class:!0,"data-svelte-h":!0}),R(n)!=="svelte-tdri6c"&&(n.innerHTML=m),r=_(K),E=u(K,"ARTICLE",{class:!0});var Q=y(E);g=u(Q,"DIV",{id:!0,"data-svelte-h":!0}),R(g)!=="svelte-e9rdx2"&&(g.innerHTML=w),x=_(Q),a=u(Q,"DIV",{class:!0});var re=y(a);e=u(re,"DIV",{class:!0});var ee=y(e);o=u(ee,"P",{class:!0,"data-svelte-h":!0}),R(o)!=="svelte-zeolrr"&&(o.textContent=D),T=_(ee),S=u(ee,"DIV",{class:!0});var H=y(S);A=u(H,"SPAN",{id:!0});var ve=y(A);M=ie(ve,I[0]),ve.forEach(l),N=_(H),j=u(H,"SPAN",{"data-svelte-h":!0}),R(j)!=="svelte-5vnx5k"&&(j.textContent=z),L=_(H),s=u(H,"SPAN",{id:!0});var de=y(s);f=ie(de,I[1]),de.forEach(l),te=_(H),U=u(H,"SPAN",{"data-svelte-h":!0}),R(U)!=="svelte-5vnx5k"&&(U.textContent=ce),se=_(H),P=u(H,"SPAN",{id:!0});var oe=y(P);G=ie(oe,I[2]),oe.forEach(l),H.forEach(l),ee.forEach(l),re.forEach(l),Q.forEach(l),K.forEach(l),V.forEach(l),this.h()},h(){k(c,"class","loader"),k(n,"class","intro svelte-7jj26g"),k(g,"id","about"),k(o,"class","svelte-7jj26g"),k(A,"id","hrs"),k(s,"id","min"),k(P,"id","sec"),k(S,"class","amsterdam-time svelte-7jj26g"),k(e,"class","clock svelte-7jj26g"),k(a,"class","time-container svelte-7jj26g"),k(E,"class","about svelte-7jj26g"),k(d,"id","main")},m(b,V){v(b,t,V),p(t,c),p(t,i),p(t,d),p(d,n),p(d,r),p(d,E),p(E,g),p(E,x),p(E,a),p(a,e),p(e,o),p(e,T),p(e,S),p(S,A),p(A,M),p(S,N),p(S,j),p(S,L),p(S,s),p(s,f),p(S,te),p(S,U),p(S,se),p(S,P),p(P,G)},p(b,[V]){V&1&&ne(M,b[0]),V&2&&ne(f,b[1]),V&4&&ne(G,b[2])},i:C,o:C,d(b){b&&l(t)}}}function ke(I,t,c){let i=0,d=0,n=0;function m(){let r=new Date;c(0,i=(r.getHours()<10?"0":"")+r.getHours()),c(1,d=(r.getMinutes()<10?"0":"")+r.getMinutes()),c(2,n=(r.getSeconds()<10?"0":"")+r.getSeconds())}return ae(()=>{m();const r=setInterval(m,1e3);return()=>clearInterval(r)}),[i,d,n]}class pe extends Y{constructor(t){super(),Z(this,t,ke,me,B,{})}}function ge(I){let t,c='<article id="skills" class="logo svelte-ihillk"><div class="logos-slide svelte-ihillk"><div class="skills svelte-ihillk">HTML</div> <div class="skills svelte-ihillk">CSS</div> <div class="skills svelte-ihillk">JS</div> <div class="skills svelte-ihillk">REACT</div> <div class="skills svelte-ihillk">SVELTE</div> <div class="skills svelte-ihillk">LUA</div> <div class="skills svelte-ihillk">NEXTJS</div> <div class="skills svelte-ihillk">UX Design</div> <div class="skills svelte-ihillk">UI Design</div> <div class="skills svelte-ihillk">NODEJS</div> <div class="skills svelte-ihillk">EXPRESS</div></div> <div class="logos-slide svelte-ihillk"><div class="skills svelte-ihillk">HTML</div> <div class="skills svelte-ihillk">CSS</div> <div class="skills svelte-ihillk">JS</div> <div class="skills svelte-ihillk">REACT</div> <div class="skills svelte-ihillk">SVELTE</div> <div class="skills svelte-ihillk">LUA</div> <div class="skills svelte-ihillk">NEXTJS</div> <div class="skills svelte-ihillk">UX Design</div> <div class="skills svelte-ihillk">UI Design</div> <div class="skills svelte-ihillk">NODEJS</div> <div class="skills svelte-ihillk">EXPRESS</div></div> <div class="logos-slide svelte-ihillk"><div class="skills svelte-ihillk">HTML</div> <div class="skills svelte-ihillk">CSS</div> <div class="skills svelte-ihillk">JS</div> <div class="skills svelte-ihillk">REACT</div> <div class="skills svelte-ihillk">SVELTE</div> <div class="skills svelte-ihillk">LUA</div> <div class="skills svelte-ihillk">NEXTJS</div> <div class="skills svelte-ihillk">UX Design</div> <div class="skills svelte-ihillk">UI Design</div> <div class="skills svelte-ihillk">NODEJS</div> <div class="skills svelte-ihillk">EXPRESS</div></div></article>';return{c(){t=h("section"),t.innerHTML=c,this.h()},l(i){t=u(i,"SECTION",{class:!0,"data-svelte-h":!0}),R(t)!=="svelte-1ez9v9w"&&(t.innerHTML=c),this.h()},h(){k(t,"class","svelte-ihillk")},m(i,d){v(i,t,d)},p:C,i:C,o:C,d(i){i&&l(t)}}}class $e extends Y{constructor(t){super(),Z(this,t,null,ge,B,{})}}function _e(I){let t,c='<h1 id="work" class="svelte-uf8x3v">Mijn levenswerk</h1> <nav><input class="searchbar" type="text" id="searchInput" onkeyup="search()" placeholder="Zoek een repo..."/></nav> <ul id="repos-container"></ul>';return{c(){t=h("section"),t.innerHTML=c,this.h()},l(i){t=u(i,"SECTION",{class:!0,"data-svelte-h":!0}),R(t)!=="svelte-12sd87t"&&(t.innerHTML=c),this.h()},h(){k(t,"class","svelte-uf8x3v")},m(i,d){v(i,t,d)},p:C,i:C,o:C,d(i){i&&l(t)}}}function Ee(I){return ae(()=>{fetch("https://api.github.com/users/kosterm14/repos?sort=updated&per_page=50").then(i=>i.json()).then(i=>{i.sort((n,m)=>m.stargazers_count-n.stargazers_count);const d=document.getElementById("repos-container");i.forEach(n=>{const m=document.createElement("div");m.className="repository",m.innerHTML=`
          	<h2>
				<a href="${n.html_url}" target="_blank">${n.name}</a>
			</h2>

		  	<p>
				<a href="${n.homepage}" target="_blank">${n.homepage||"no link:("}</a>
			</p>

          	<p>${n.description||"No description available."}</p>

          <section>⭐ ${n.stargazers_count} | 👁️ ${n.watchers_count} | 🍴 ${n.forks_count}</section>
          `,d.appendChild(m)})}).catch(i=>console.error("Error fetching repos:",i))}),[]}class ye extends Y{constructor(t){super(),Z(this,t,Ee,_e,B,{})}}function xe(I){let t,c,i,d,n,m,r,E,g,w,x,a,e,o,D,T,S,A,M,N,j,z,L;return{c(){t=h("div"),c=$(),i=h("div"),d=$(),n=h("div"),m=$(),r=h("div"),E=$(),g=h("div"),w=$(),x=h("div"),a=$(),e=h("div"),o=$(),D=h("div"),T=$(),S=h("div"),A=$(),M=h("div"),N=$(),j=h("div"),z=$(),L=h("div"),this.h()},l(s){t=u(s,"DIV",{class:!0}),y(t).forEach(l),c=_(s),i=u(s,"DIV",{class:!0}),y(i).forEach(l),d=_(s),n=u(s,"DIV",{class:!0}),y(n).forEach(l),m=_(s),r=u(s,"DIV",{class:!0}),y(r).forEach(l),E=_(s),g=u(s,"DIV",{class:!0}),y(g).forEach(l),w=_(s),x=u(s,"DIV",{class:!0}),y(x).forEach(l),a=_(s),e=u(s,"DIV",{class:!0}),y(e).forEach(l),o=_(s),D=u(s,"DIV",{class:!0}),y(D).forEach(l),T=_(s),S=u(s,"DIV",{class:!0}),y(S).forEach(l),A=_(s),M=u(s,"DIV",{class:!0}),y(M).forEach(l),N=_(s),j=u(s,"DIV",{class:!0}),y(j).forEach(l),z=_(s),L=u(s,"DIV",{class:!0}),y(L).forEach(l),this.h()},h(){k(t,"class","circle svelte-k7mcgh"),k(i,"class","circle svelte-k7mcgh"),k(n,"class","circle svelte-k7mcgh"),k(r,"class","circle svelte-k7mcgh"),k(g,"class","circle svelte-k7mcgh"),k(x,"class","circle svelte-k7mcgh"),k(e,"class","circle svelte-k7mcgh"),k(D,"class","circle svelte-k7mcgh"),k(S,"class","circle svelte-k7mcgh"),k(M,"class","circle svelte-k7mcgh"),k(j,"class","circle svelte-k7mcgh"),k(L,"class","circle svelte-k7mcgh")},m(s,f){v(s,t,f),v(s,c,f),v(s,i,f),v(s,d,f),v(s,n,f),v(s,m,f),v(s,r,f),v(s,E,f),v(s,g,f),v(s,w,f),v(s,x,f),v(s,a,f),v(s,e,f),v(s,o,f),v(s,D,f),v(s,T,f),v(s,S,f),v(s,A,f),v(s,M,f),v(s,N,f),v(s,j,f),v(s,z,f),v(s,L,f)},p:C,i:C,o:C,d(s){s&&(l(t),l(c),l(i),l(d),l(n),l(m),l(r),l(E),l(g),l(w),l(x),l(a),l(e),l(o),l(D),l(T),l(S),l(A),l(M),l(N),l(j),l(z),l(L))}}}function Se(I){return ae(()=>{const t={x:0,y:0},c=document.querySelectorAll(".circle"),i=["#007FDA"];c.forEach(function(a,e){a.x=0,a.y=0,a.style.backgroundColor=i[e%i.length]}),window.addEventListener("mousemove",function(a){t.x=a.clientX,t.y=a.clientY});function d(){let a=t.x,e=t.y;c.forEach(function(o,D){o.style.left=a-12+"px",o.style.top=e-12+"px",o.style.scale=(c.length-D)/c.length,o.x=a,o.y=e;const T=c[D+1]||c[0];a+=(T.x-a)*.3,e+=(T.y-e)*.3}),requestAnimationFrame(d)}d();const n=document.getElementById("canvas1"),m=n.getContext("2d");n.width=window.innerWidth,n.height=this.window.innerHeight;const r=[];window.addEventListener("resize",function(){n.width=window.innerWidth,n.height=this.window.innerHeight});const E={x:null,y:null};n.addEventListener("mousemove",function(a){E.x=a.x,E.y=a.y;for(let e=0;e<5;e++)r.push(new g)});class g{constructor(){this.x=E.x,this.y=E.y,this.size=Math.random()*5+1,this.speedx=Math.random()*3-1.5,this.speedy=Math.random()*3-1.5}update(){this.x+=this.speedx,this.y+=this.speedy,this.size>0&&(this.size-=.1)}draw(){m.fillStyle="white",m.beginPath(),m.arc(this.x,this.y,this.size,0,6),m.fill()}}function w(){for(let a=0;a<r.length;a++)r[a].update(),r[a].draw(),r[a].size<=.1&&(r.splice(a,1),--a)}function x(){m.clearRect(0,0,n.width,n.height),w(),requestAnimationFrame(x)}x()}),[]}class Ie extends Y{constructor(t){super(),Z(this,t,Se,xe,B,{})}}function Ce(I){let t,c,i,d,n,m,r,E,g,w,x,a;return t=new Ie({}),i=new he({}),n=new pe({}),r=new $e({}),g=new ye({}),x=new fe({}),{c(){X(t.$$.fragment),c=$(),X(i.$$.fragment),d=$(),X(n.$$.fragment),m=$(),X(r.$$.fragment),E=$(),X(g.$$.fragment),w=$(),X(x.$$.fragment)},l(e){J(t.$$.fragment,e),c=_(e),J(i.$$.fragment,e),d=_(e),J(n.$$.fragment,e),m=_(e),J(r.$$.fragment,e),E=_(e),J(g.$$.fragment,e),w=_(e),J(x.$$.fragment,e)},m(e,o){O(t,e,o),v(e,c,o),O(i,e,o),v(e,d,o),O(n,e,o),v(e,m,o),O(r,e,o),v(e,E,o),O(g,e,o),v(e,w,o),O(x,e,o),a=!0},p:C,i(e){a||(F(t.$$.fragment,e),F(i.$$.fragment,e),F(n.$$.fragment,e),F(r.$$.fragment,e),F(g.$$.fragment,e),F(x.$$.fragment,e),a=!0)},o(e){q(t.$$.fragment,e),q(i.$$.fragment,e),q(n.$$.fragment,e),q(r.$$.fragment,e),q(g.$$.fragment,e),q(x.$$.fragment,e),a=!1},d(e){e&&(l(c),l(d),l(m),l(E),l(w)),W(t,e),W(i,e),W(n,e),W(r,e),W(g,e),W(x,e)}}}class Te extends Y{constructor(t){super(),Z(this,t,null,Ce,B,{})}}export{Te as component};