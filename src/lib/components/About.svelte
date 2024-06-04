<script>
import { onMount } from "svelte";

let hrs = 0;
let min = 0;
let sec = 0;

function updateClock() {
  let currentTime = new Date();
  hrs = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
  min = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
  sec = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
}

onMount(() => {
  updateClock();
  const interval = setInterval(updateClock, 1000);
  
  return () => clearInterval(interval);
});

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
      <div>
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <!-- <img src="images/pf_rayan.png" alt="picture of me"  /> -->
      </div>

    </article>

    <article id="About" class="about">
      <div>
      <h3>About Me</h3>
      <p class="personal-info">
        My name Rayan Spall, a 19 year old frontend developer. I'm currently
        studying frontend design and development at the Amsterdam University of
        Applied Sciences. I am deeply motivated to become a proficient frontend
        developer. As a frontend developer, I aspire to create visually
        appealing and user-friendly interfaces by utilizing the skills I've
        acquired during my studies.
      </p>
    </div>
    <div class="time-container">
      <div class="clock">
        <p>Current time in Amsterdam:</p>
          <div class="amsterdam-time">
            <span id="hrs">{hrs}</span>
            <span>:</span>
            <span id="min">{min}</span>
            <span>:</span>
            <span id="sec">{sec}</span> 
          </div>  
      </div>
    </div>
    </article>
  </section>
</main>

<style>
  .intro {
    display: flex;
    flex-direction: row;
    background: var(--c-container);
    margin-left: 18rem;
    margin-right: 18rem;
    border-radius: 15px;
    padding: 2rem;
    color: var(--c-white);
  }

  img {
    height: 20rem;
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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: var(--c-container);
    margin-left: 18rem;
    margin-right: 18rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    border-radius: 15px;
    padding: 2rem;
    color: var(--c-white);
  }

  .time-container { 
    display: flex;
    align-items: center;
    /* flex-direction: column; */
  }

  .clock {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .clock p {
    font-size: 25px;
  }

  .amsterdam-time {
    display: flex;
    flex-direction: row;
    font-size: 25px;
  }

  h3 {
    font-size: 30px;
    padding-bottom: 1rem;
  }

  .personal-info {
    width: 25rem;
    padding-left: 1rem;
    border-left: 2px solid var(--c-lightblue);
  }


  @media screen and (max-width: 1345px) {
    .about {
      flex-direction: column;
    }
    .clock {
      margin-top: 1rem;
    }
  }

  @media screen and (max-width: 1200px){
    .about {
      align-items: center;
    }
    
    .intro {
     justify-content: center;
     padding-left: 1rem;
     padding-right: 1rem;
    }

  }

  @media screen and (max-width: 1045px) {
    .about {
      margin-right: 10rem;
      margin-left: 10rem;
    }

    .intro {
      margin-right: 10rem;
      margin-left: 10rem;
    }
  }

  @media screen and (max-width: 800px) {
    .about {
      margin-right: 5rem;
      margin-left: 5rem;
    }

    .intro {
      margin-right: 5rem;
      margin-left: 5rem;
    }
  }

  @media screen and (max-width: 630px) {
    .about {
      margin-right: 3rem;
      margin-left: 3rem;
    }

    .intro {
      margin-right: 3rem;
      margin-left: 3rem;
    }
  }
</style>
