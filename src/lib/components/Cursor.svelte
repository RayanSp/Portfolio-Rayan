<script>
  import { onMount } from "svelte";
  onMount(() => {
    // Dit zijn de cordinaten van de div'jes, hier wordt de positie bepaald
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".circle");

    // De kleuren die gebruikt worden bij de cursor trail
    const colors = [
      "#007FDA"
    ];

    circles.forEach(function (circle, index) {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = colors[index % colors.length];
    });

    // Deze functie volgt de bewegingen van je muis
    window.addEventListener("mousemove", function (e) {
      coords.x = e.clientX;
      coords.y = e.clientY;
    });

    function animateCircles() {
      let x = coords.x;
      let y = coords.y;

      // Met deze functie zorg je ervoor dat de div'jes, je cursor volgen. Daarnaast voeg je -12 toe om ervoor te zorgen dat je cursor
      // in het midden zit van de div'jes
      circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

        // Hiermee zorg je ervoor dat je trail de vorm krijgt van een druppel, elke cirkel wordt steeds iets kleiner.
        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        // Hier geef ik aan dat elke cirkel (elke div), afstand houdt van de andere DIV zodra de muis beweegt. Beweegt de muis niet meer
        // komen de cirkels weer bij elkaar.
        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    }

    animateCircles();

    const canvas1 = document.getElementById("canvas1");
    const ctx = canvas1.getContext("2d");
    canvas1.width = window.innerWidth;
    canvas1.height = this.window.innerHeight;
    const particlesarray = [];
    window.addEventListener("resize", function () {
      canvas1.width = window.innerWidth;
      canvas1.height = this.window.innerHeight;
    });
    const mouse = {
      x: null,
      y: null,
    };
    canvas1.addEventListener("mousemove", function (event) {
      mouse.x = event.x;
      mouse.y = event.y;
      for (let i = 0; i < 5; i++) {
        //change i<5 to any number to inc or dec the sparkles !!DO NOT SET THE NUMBER TOO HIGH IT WILL HANG THE BROWSER
        particlesarray.push(new particles());
      }
    });
    class particles {
      constructor() {
        this.x = mouse.x;
        this.y = mouse.y;
        this.size = Math.random() * 5 + 1;
        this.speedx = Math.random() * 3 - 1.5;
        this.speedy = Math.random() * 3 - 1.5;
      }
      update() {
        this.x += this.speedx;
        this.y += this.speedy;
        if (this.size > 0) {
          this.size -= 0.1;
        }
      }
      draw() {
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, 6);
        ctx.fill();
      }
    }
    function handleparticles() {
      for (let i = 0; i < particlesarray.length; i++) {
        particlesarray[i].update();
        particlesarray[i].draw();
        if (particlesarray[i].size <= 0.1) {
          particlesarray.splice(i, 1);
          --i;
        }
      }
    }
    function animate() {
      ctx.clearRect(0, 0, canvas1.width, canvas1.height);
      handleparticles();
      requestAnimationFrame(animate);
    }
    animate();
  });
</script>

<div class="circle"></div>
<div class="circle"></div>
<div class="circle"></div>
<div class="circle"></div>
<div class="circle"></div>
<div class="circle"></div>
<div class="circle"></div>
<div class="circle"></div>
<div class="circle"></div>
<div class="circle"></div>
<div class="circle"></div>
<div class="circle"></div>
<div class="circle"></div>
<div class="circle"></div>
<div class="circle"></div>
<div class="circle"></div>
<div class="circle"></div>
<div class="circle"></div>
<div class="circle"></div>
<div class="circle"></div>

<style>
  .circle {
    height: 24px;
    width: 24px;
    border-radius: 24px;
    background-color: black;
    position: fixed;
    filter: blur(5px);
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 99999999; /* so that it stays on top of all other elements */
  }
</style>
