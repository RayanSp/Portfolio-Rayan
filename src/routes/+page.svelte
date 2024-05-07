<script>
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import About from "$lib/components/About.svelte";
</script>

<Header />


  <h1>Hi <span class="type-animation animating">World</span>👋</h1>
  <h2>Are you ready for some awesome student work?!</h2>
  <About />


<Footer />


<style>
  .type-animation {
    width: 0;
}
  
  .type-animation.animating {
    animation-duration: 1260ms; 
}
  
  .type-animation.animating:after {
    animation-duration: 2240ms;
}
  
  .type-animation:after {
    background: #f7f3ff;
}
  
  .type-animation.animating:after {
    animation-timing-function: ease-in-out;
}
  
  @keyframes cursor {
  0%,
  100% {
  border-color: #f7f3ff;
  }
  
  50% {
  border-color: slateblue;
  }
}
  
  h1 {
  font-size: 4.5rem;
  text-align: center;
  margin-top: 6vh;
  color: var(--white);
}

  h2 {
    text-align: center;
    color: var(--white);
  }
  
  .type-animation {
  display: inline-flex;
  overflow: hidden;
  padding-right: 0.08em;
  /* position: relative; */
}
  
  .type-animation:after {
  content: "";
  position: absolute;
  right: 0;
  bottom: -0.05em;
  width: 0.08em;
  border-right: 2px solid transparent;
}
  
  .type-animation.animating {
  animation-name: type;
  animation-fill-mode: forwards;
  animation-delay: 1s; 
  animation-delay: 4.5s; 
}
  
  .type-animation.animating:after {
  animation-name: cursor;
}

  @keyframes type {
  0% {
  width: 0;
  }
  
  14.2857143% {
  width: 0.49em;
  }
  
  28.5714286% {
  width: 0.98em;
  }
  
  42.8571429% {
  width: 1.47em;
  }
  
  57.1428571% {
  width: 1.96em;
  }
 
  71.4285714% {
  width: 2.45em;
  }
  
  85.7142857% {
  width: 2.94em;
  }
  
  100% {
  width: 3.43em;
  padding-right: 0;
  }
}
</style>
