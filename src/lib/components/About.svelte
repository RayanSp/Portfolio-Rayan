<script>
</script>

<!-- About Section -->
<section id="about">
  <article class="intro">
    <h1>Hi, I'm Rayan Spall</h1>
    <h2>Frontend Developer</h2>
    <button class="btn-contact">Contact Me</button>
    <button class="btn-work" href="#">My Work</button>
  </article>

  <article class="about">
    <h3>About Me</h3>
    <p>
      My name Rayan Spall, a 19 year old frontend developer. I'm currently
      studying frontend design and development at the Amsterdam University of
      Applied Sciences. I am deeply motivated to become a proficient frontend
      developer. As a frontend developer, I aspire to create visually appealing
      and user-friendly interfaces by utilizing the skills I've acquired during
      my studies.
    </p>
  </article>
</section>

<style>
  .intro {
    background: var(--c-container);
    margin: 2rem;
    border-radius: 15px;
    padding: 2rem;
    color: var(--c-white);
  }

  h1 {
    font-weight: lighter;
    font-size: 25px;
  }

  h2 {
    background-image: linear-gradient(to right, var(--c-white), var(--c-lightblue) 10%);
    -webkit-background-clip: text;
    color: transparent;
    font-size: 40px;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  .btn-contact {
    padding: 0.5rem;
    background-image: linear-gradient(to right, var(--c-darkblue), var(--c-lightblue));
    color: var(--c-white);
    border: none;
    height: 2.5rem;
    border-radius: 12px;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    font-size: 16px;
    text-decoration: none;
  }

  .btn-work {
    padding: 0.5rem;
    background-image: linear-gradient(to right, var(--c-darkblue), var(--c-lightblue));
    border: none;
    color: var(--c-white);
    margin-left: 1rem;
    height: 2.5rem;
    border-radius: 12px;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    font-size: 16px;
    text-decoration: none;
  }

  .about {
    background: var(--c-container);
    margin: 2rem;
    border-radius: 15px;
    padding: 2rem;
    color: var(--c-white);
  }

  h3 {
    font-size: 30px;
    padding-bottom: 1rem;
  }

  article p {
    width: 25rem;
    padding-left: 1rem;
    border-left: 2px solid var(--c-lightblue);
  }

</style>
