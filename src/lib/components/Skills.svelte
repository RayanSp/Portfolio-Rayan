<script>
</script>

<section>
  <!-- <h4>Skills</h4> -->

  <article id="skills" class="logo">
    <div class="logos-slide">
      <div class="skills">HTML</div>
      <div class="skills">CSS</div>
      <div class="skills">JS</div>
      <div class="skills">REACT</div>
      <div class="skills">SVELTE</div>
      <div class="skills">LUA</div>
      <div class="skills">NEXTJS</div>
      <div class="skills">UX Design</div>
      <div class="skills">UI Design</div>
      <div class="skills">NODEJS</div>
      <div class="skills">EXPRESS</div>
    </div>
    <div class="logos-slide">
      <div class="skills">HTML</div>
      <div class="skills">CSS</div>
      <div class="skills">JS</div>
      <div class="skills">REACT</div>
      <div class="skills">SVELTE</div>
      <div class="skills">LUA</div>
      <div class="skills">NEXTJS</div>
      <div class="skills">UX Design</div>
      <div class="skills">UI Design</div>
      <div class="skills">NODEJS</div>
      <div class="skills">EXPRESS</div>
    </div>
    <div class="logos-slide">
      <div class="skills">HTML</div>
      <div class="skills">CSS</div>
      <div class="skills">JS</div>
      <div class="skills">REACT</div>
      <div class="skills">SVELTE</div>
      <div class="skills">LUA</div>
      <div class="skills">NEXTJS</div>
      <div class="skills">UX Design</div>
      <div class="skills">UI Design</div>
      <div class="skills">NODEJS</div>
      <div class="skills">EXPRESS</div>
    </div>
  </article>
</section>

<style>
  @keyframes slide {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .logo {
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: center;
    /* width: 60rem; */
    margin-left: 18rem;
    margin-right: 18rem;
    background-color: var(--c-container);
    margin-bottom: 2rem;
    border-radius: 15px;
  }

  .logos-slide {
    display: flex;
    flex-direction: row;
    white-space: nowrap;
    animation: 20s slide infinite linear;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .logo:hover .logos-slide {
    animation-play-state: paused;
  }

  h4 {
    color: var(--c-white);
    font-size: 40px;
    text-align: center;
  }

  .skills {
    color: var(--c-white);
    background-color: var(--c-background);
    border-radius: 15px;
    padding: 1rem;
    border: 2px solid var(--c-lightblue);
    margin-right: 10rem;
    width: 5rem;
    box-shadow: -5px 5px 15px var(--c-lightblue);
    text-align: center;
  }

  @keyframes scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }

  @media screen and (max-width: 1045px) {
    .logo {
      margin-right: 10rem;
      margin-left: 10rem;
    }
  }

  @media screen and (max-width: 800px) {
    .logo {
      margin-right: 5rem;
      margin-left: 5rem;
    }
  }

  @media screen and (max-width: 630px) {
    .logo {
      margin-right: 3rem;
      margin-left: 3rem;
    }
  }
</style>
