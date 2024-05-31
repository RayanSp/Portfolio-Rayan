<script>
</script>

<!-- About Section -->

<main>
  <div class="loader"></div>

  <section id="main">
    <article class="intro">
      <div class="intro-styling">
        <h1>Hi, I'm Rayan Spall</h1>
        <h2>Frontend Developer</h2>
        <button class="btn-contact" href="/contact">Contact Me</button>
        <button class="btn-work" href="#">My Work</button>
      </div>
    </article>

    <article id="About" class="about">
      <h3>About Me</h3>
      <p>
        My name Rayan Spall, a 19 year old frontend developer. I'm currently
        studying frontend design and development at the Amsterdam University of
        Applied Sciences. I am deeply motivated to become a proficient frontend
        developer. As a frontend developer, I aspire to create visually
        appealing and user-friendly interfaces by utilizing the skills I've
        acquired during my studies.
      </p>
    </article>
  </section>
</main>

<style>
  .intro {
    background: var(--c-container);
    margin: 2rem;
    border-radius: 15px;
    padding: 2rem;
    color: var(--c-white);
  }

  .intro-styling {
    width: fit-content;
  }

  h1 {
    font-weight: lighter;
    font-size: 25px;
  }

  h2 {
    background-image: linear-gradient(
      to right,
      var(--c-white),
      var(--c-lightblue) 10%
    );
    -webkit-background-clip: text;
    color: transparent;
    font-size: 40px;
    margin-top: 2rem;
    margin-bottom: 2rem;
    border-right: 3px solid var(--c-lightblue);
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    animation:
      typing 2s steps(18),
      cursor 0.5s step-end infinite alternate;
  }

  @keyframes cursor {
    50% {
      border-color: transparent;
    }
  }

  @keyframes typing {
    from {
      width: 0;
    }
  }

  .btn-contact {
    padding: 0.5rem;
    color: var(--c-white);
    border: 2px solid var(--c-lightblue);
    background: transparent;
    height: 2.5rem;
    border-radius: 12px;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    font-size: 16px;
    text-decoration: none;
  }

  .btn-contact:hover {
    background: var(--c-lightblue);
  }

  .btn-work {
    padding: 0.5rem;
    background-image: linear-gradient(
      to right,
      var(--c-darkblue),
      var(--c-lightblue)
    );
    border: 2px solid var(--c-lightblue);
    background: transparent;
    color: var(--c-white);
    margin-left: 1rem;
    height: 2.5rem;
    border-radius: 12px;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    font-size: 16px;
    text-decoration: none;
  }

  .btn-work:hover {
    background: var(--c-lightblue);
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
