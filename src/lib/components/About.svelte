<script>
</script>

<!-- About Section -->
<section id="about">
  <div class="container">
    <div class="row">
      <h1>About</h1>
      <div class="block"></div>
      <p>
        I am Fatih, a 25-year-old front-end student based in
        Amsterdam, North Holland, Netherlands. I am passionate about creating
        beautiful and user-friendly web experiences. I am currently learning
        HTML, CSS, JavaScript, and SvelteKit at the Amsterdam University of
        Applied Science FDND. I am also interested in learning about other
        front-end development technologies, such as React and Angular.
      </p>
    </div>
    <div class="row">
      <div class="six columns">
        <h3>
          <span class="typcn typcn-device-desktop icon"></span>Hobby's
        </h3>
        <p>
          I am an big fan of football, captivated by the thrill, strategic
          depth, and the emotions it can give. As a staunch admirer of FC
          Barcelona, I am consistently inspired by their unwavering commitment
          to excellence on and off the pitch. Beyond my passion for the sport, I
          am also an enthusiastic learner in the world of IT, exploring not only
          coding but also the cutting-edge developments in artificial
          intelligence. With a growing interest in the potential of Azure, I am
          considering pursuing a certification in this area to become more of a
          all rounder.
        </p>
      </div>
      <div class="six columns">
        <h3><span class="typcn typcn-pen icon"></span>Study's</h3>
        <p>
          I have completed two MBO (Middle-level Vocational Education) programs
          to specialize in system administration and desktop support. The first
          program, ICT Support Technician, equipped me with the essential
          knowledge and skills required to work in the IT field. I gained
          insights into computer hardware, software, networking, and
          troubleshooting. The second program, Systems Administrator, provided
          me with a more comprehensive understanding of system administration. I
          delved into operating systems, virtualization, security, and disaster
          recovery, including the fundamentals of computer science like : Data
          structures en networking. Following these studies, I embarked on a
          Bachelor of Science degree in Business IT & Management. However, after
          seven months, I decided to pivot towards a more creative endeavor,
          leading me to pursue the FDND study.
        </p>
      </div>
      <div class="row">
        <div class="six columns"></div>
      </div>
    </div>
  </div>
</section>

<!-- Skills Section -->
<section id="skills">
  <div class="container">
    <h1>Skills</h1>
    <div class="block"></div>
    <div class="row">
      <div class="one-third column">
        <h3>Design</h3>
        <p>
          I aspire to create visually appealing and user-friendly web
          experiences. I'm currently experimenting with a variety of sketching
          techniques to achieve this goal, and I'm eager to further enhance my
          design skills
        </p>
      </div>
      <div class="one-third column">
        <h3>Dev</h3>
        <p>
          Currently, I am working on a SvelteKit project for INK by adhering to
          the fundamental principles, established conventions, and best
          practices in web development: responsive design, performance
          optimization, accessibility testing, and naming conventions, among
          others.
        </p>
      </div>
      <div class="one-third column">
        <h3>Learning</h3>
        <p>
          My learning journey is far from over! When I talk with my fellow
          students about frontend development, I recognize that I need to push
          myself further in certain areas, such as JavaScript. However, I'm
          optimistic that I've made significant progress in the last two months,
          and I'm committed to continuing my growth. I've even acquired valuable
          knowledge about arrays, parseFloat, and spread operators! While I'm
          currently at an average level, my aspiration is to be among the top
          students in my class. This is a goal worth pursuing.
        </p>
      </div>
    </div>
    <div class="row">
      <div class="eight columns">
        <div class="skill-progress-bars">
          <div class="progress-bar">
            <h4>HTML</h4>
            <meter value="80" max="100">80%</meter>
          </div>
      
          <div class="progress-bar">
            <h4>CSS</h4>
            <meter value="70" max="100">70%</meter>
          </div>
      
          <div class="progress-bar">
            <h4>JS</h4>
            <meter value="30" max="100">30%</meter>
          </div>
      
          <div class="progress-bar">
            <h4>Svelte</h4>
            <meter value="70" max="100">70%</meter>
          </div>
        </div>
      </div>
      <div class="four columns">
        <p>
          I believe that by furthering my JavaScript skills, I can elevate my
          web development capabilities to a higher level. My recent experience
          with SvelteKit has solidified my appreciation for this robust and
          innovative framework it is really eazy working with it. 
          I really like working with it!(Don't tell Krijn)
        </p>
      </div>
    </div>
  </div>
  <div class=github-logo>
  <a href="https://github.com/fatihg61" target="_blank">
    <img src="\github-mark.png" alt="">
  </a>
</div>
</section>

<style>
  @import url("https://fonts.googleapis.com/css?family=Open+Sans:400,300");


  .skill-progress-bars {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 20px;
}

.progress-bar {
  width: 150px;
  margin: 10px;
  border: 1px solid #ccc;
  padding: 10px;
}

.progress-bar h4 {
  text-align: center;
  margin-bottom: 0;
}

.progress-bar meter {
  width: 100%;
  height: 20px;
  background-color: #eee;
  border: none;
}

.progress-bar .progress-bar-value {
  position: absolute;
  top: 0;
  left: 0;
  width: 0%;
  height: 100%;
  background-color: #ff0000;
  border-radius: 0 0 5px 5px;
}

  .github-logo {
  display: block;
  margin: 0 auto;
  width: 100px;
}

.github-logo:hover {
  transform: scale(1.1);
}

  
  /* Base Styles
********************************************************************* */
  html {
    font-size: 62.5%;
  }
  body {
    font-size: 1.5em;
    line-height: 1.6;
    font-weight: 400;
    font-family: "Open Sans", Helvetica, Arial, sans-serif;
    color: #222;
  }
  /* Grid
********************************************************************* */
  .container {
    position: relative;
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;
  }
  .column,
  .columns {
    width: 100%;
    float: left;
    box-sizing: border-box;
  }

  /* For devices larger than 400px */
  @media (min-width: 400px) {
    .container {
      width: 85%;
      padding: 0;
    }
  }

  /* For devices larger than 550px */
  @media (min-width: 550px) {
    .container {
      width: 80%;
    }
    .column,
    .columns {
      margin-left: 4%;
    }
    .column:first-child,
    .columns:first-child {
      margin-left: 0;
    }
    .one.column,
    .one.columns {
      width: 4.66666666667%;
    }
    .two.columns {
      width: 13.3333333333%;
    }
    .three.columns {
      width: 22%;
    }
    .four.columns {
      width: 30.6666666667%;
    }
    .five.columns {
      width: 39.3333333333%;
    }
    .six.columns {
      width: 48%;
    }
    .seven.columns {
      width: 56.6666666667%;
    }
    .eight.columns {
      width: 65.3333333333%;
    }
    .nine.columns {
      width: 74%;
    }
    .ten.columns {
      width: 82.6666666667%;
    }
    .eleven.columns {
      width: 91.3333333333%;
    }
    .twelve.columns {
      width: 100%;
      margin-left: 0;
    }
    .one-third.column {
      width: 30.6666666667%;
    }
    .two-thirds.column {
      width: 65.3333333333%;
    }
    .one-half.column {
      width: 48%;
    }
    /* Offsets */
    .offset-by-one.column,
    .offset-by-one.columns {
      margin-left: 8.66666666667%;
    }
    .offset-by-two.column,
    .offset-by-two.columns {
      margin-left: 17.3333333333%;
    }
    .offset-by-three.column,
    .offset-by-three.columns {
      margin-left: 26%;
    }
    .offset-by-four.column,
    .offset-by-four.columns {
      margin-left: 34.6666666667%;
    }
    .offset-by-five.column,
    .offset-by-five.columns {
      margin-left: 43.3333333333%;
    }
    .offset-by-six.column,
    .offset-by-six.columns {
      margin-left: 52%;
    }
    .offset-by-seven.column,
    .offset-by-seven.columns {
      margin-left: 60.6666666667%;
    }
    .offset-by-eight.column,
    .offset-by-eight.columns {
      margin-left: 69.3333333333%;
    }
    .offset-by-nine.column,
    .offset-by-nine.columns {
      margin-left: 78%;
    }
    .offset-by-ten.column,
    .offset-by-ten.columns {
      margin-left: 86.6666666667%;
    }
    .offset-by-eleven.column,
    .offset-by-eleven.columns {
      margin-left: 95.3333333333%;
    }
    .offset-by-one-third.column,
    .offset-by-one-third.columns {
      margin-left: 34.6666666667%;
    }
    .offset-by-two-thirds.column,
    .offset-by-two-thirds.columns {
      margin-left: 69.3333333333%;
    }
    .offset-by-one-half.column,
    .offset-by-one-half.columns {
      margin-left: 52%;
    }
  }
  /* Typography
********************************************************************* */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
    margin-bottom: 2rem;
    font-weight: 300;
  }
  h1 {
    font-size: 4rem;
    line-height: 1.2;
    letter-spacing: -0.1rem;
  }
  h2 {
    font-size: 3.6rem;
    line-height: 1.25;
    letter-spacing: -0.1rem;
  }
  h3 {
    font-size: 3rem;
    line-height: 1.3;
    letter-spacing: -0.1rem;
  }
  h4 {
    font-size: 2.4rem;
    line-height: 1.35;
    letter-spacing: -0.08rem;
  }
  h5 {
    font-size: 1.8rem;
    line-height: 1.5;
    letter-spacing: -0.05rem;
  }
  h6 {
    font-size: 1.5rem;
    line-height: 1.6;
    letter-spacing: 0;
  }

  /* Larger than phablet */
  @media (min-width: 550px) {
    h1 {
      font-size: 5rem;
    }
    h2 {
      font-size: 4.2rem;
    }
    h3 {
      font-size: 3.6rem;
    }
    h4 {
      font-size: 3rem;
    }
    h5 {
      font-size: 2.4rem;
    }
    h6 {
      font-size: 1.5rem;
    }
  }
  p {
    margin-top: 0;
  }
  /* Links
********************************************************************* */
  a {
    color: #1eaedb;
  }
  a:hover {
    color: #0fa0ce;
  }
  /* About Section
********************************************************************* */

  #about {
    padding: 100px 0 50px 0;
    color: var(--white);
  }
  /* Skills Section
********************************************************************* */
  #skills {
    padding: 100px 0 100px 0;
    background-color: #f5f5f5;
  }
  .progressBar {
    margin-bottom: 26px;
    margin-bottom: 1.66em;
  }
  .progressBar h4 {
    font-size: 16px;
    text-transform: none;
    margin-bottom: 7px;
    margin-bottom: 0.33em;
  }
  .progressBarContainer {
    width: 100%;
    height: 8px;
    background: #e1e1e1;
    overflow: hidden;
  }
  .progressBarValue {
    height: 8px;
    float: left;
    background: #e55d87; /* Old browsers */
    background: -moz-linear-gradient(-45deg, #e55d87 0%, #5fc3e4 100%);
    background: -webkit-linear-gradient(-45deg, #e55d87 0%, #5fc3e4 100%);
    background: linear-gradient(135deg, #e55d87 0%, #5fc3e4 100%);
  }
  .value-00 {
    width: 0;
  }
  .value-10 {
    width: 10%;
  }
  .value-20 {
    width: 20%;
  }
  .value-30 {
    width: 30%;
  }
  .value-40 {
    width: 40%;
  }
  .value-50 {
    width: 50%;
  }
  .value-60 {
    width: 60%;
  }
  .value-70 {
    width: 70%;
  }
  .value-80 {
    width: 80%;
  }
  .value-90 {
    width: 90%;
  }
  .value-100 {
    width: 100%;
  }

  /* Lists
********************************************************************* */
  ul {
    list-style: circle inside;
  }
  ol {
    list-style: decimal inside;
  }
  ol,
  ul {
    padding-left: 0;
    margin-top: 0;
  }
  ul ul,
  ul ol,
  ol ol,
  ol ul {
    margin: 1.5rem 0 1.5rem 3rem;
    font-size: 90%;
  }
  li {
    margin-bottom: 1rem;
  }
  /* Spacing
********************************************************************* */
  button,
  .button {
    margin-bottom: 1rem;
  }
  input,
  textarea,
  select,
  fieldset {
    margin-bottom: 1.5rem;
  }
  pre,
  blockquote,
  dl,
  figure,
  table,
  p,
  ul,
  ol,
  form {
    margin-bottom: 2.5rem;
  }
  /* Utilities
********************************************************************* */
  .u-full-width {
    width: 100%;
    box-sizing: border-box;
  }
  .u-max-full-width {
    max-width: 100%;
    box-sizing: border-box;
  }
  .u-pull-right {
    float: right;
  }
  .u-pull-left {
    float: left;
  }
  /* Clearing
********************************************************************* */
  .container:after,
  .row:after,
  .u-cf {
    content: "";
    display: table;
    clear: both;
  }
  /* Misc
********************************************************************* */

  .icon {
    padding-right: 10px;
    color: #e55d87;
  }
  .block {
    width: 70px;
    height: 2px;
    background: #e55d87; /* Old browsers */
    background: -moz-linear-gradient(-45deg, #e55d87 0%, #5fc3e4 100%);
    background: -webkit-linear-gradient(-45deg, #e55d87 0%, #5fc3e4 100%);
    background: linear-gradient(135deg, #e55d87 0%, #5fc3e4 100%);
    margin-bottom: 50px;
  }
</style>
