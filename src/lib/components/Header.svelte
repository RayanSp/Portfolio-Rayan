<script>
    import { onMount } from 'svelte';

    let showOverlay = false;

    onMount(() => {
        const menuHideBtn = document.getElementById('menu-hide-btn');
        menuHideBtn.addEventListener('click', () => showOverlay = false); // Use Svelte's reactivity for overlay state
    });
</script>

<header>

 
<nav class="nav-menu">
    <div class="nav-container">
        <a href="/" class="nav-brand">Fatih G.</a>
        <button type="button" on:click={() => showOverlay = true}>  <i class="fas fa-bars"></i>
        </button>

        <div class="nav-overlay" class:show-overlay={showOverlay}> <div class="nav-overlay-container">
                <button type="button" id="menu-hide-btn">
                    <i class="fas fa-close"></i>
                </button>

                <ul class="nav-links">
                    <li><a href="/">home</a></li>
                    <li><a href="/">portfolio</a></li>
                    <li><a href="mailto:fkg061@gmail.com">contact</a></li>
                </ul>
                <ul class="nav-icons">
                    <li>
                        <a href="https://github.com/fatihg61">
                            <i class="fab fa-github"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</nav>   

<div class="header">Fatih Güler</div>

<div class="container">
    <div class="text-wrapper">
    <div class="text-1 text">Welcome</div>
    <div class="text-2 text">In</div>
    <div class="text-3 text">My</div>
    <div class="text-4 text">Portfolio</div>
    <div class="text-5 text">Enjoy!</div>
    <div class="text-6 text">Fatih Güler</div>
    <div class="text-7 text">Enjoy</div>
    <div class="text-8 text">Portfolio</div>
    <div class="text-9 text">My</div>
    <div class="text-10 text">In</div>
    <div class="text-11 text">Welcome</div>
    </div>
</div>
</header>  

<style>
    .header {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: "Monument Extended";
        text-transform: uppercase;
        font-size: 100px;
        z-index: -1;
    }
    
    .container {
        width: 100%;
        height: 100vh;
        margin: 0px auto;
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--background);
        animation: slide-out-container 4s cubic-bezier(0.97, 0.01, 0.36, 0.99) 2.8s;
        animation-fill-mode: forwards;
    }
    
    .text-wrapper {
        color: var(--white);
        position: absolute;
    }
    
    .text {
        font-family: "Monument Extended";
        font-weight: lighter;
        font-size: 54px;
    }
    
    .text-1,
    .text-3,
    .text-4,
    .text-8,
    .text-9,
    .text-11 {
        color: rgba(0, 0, 0, 0);
        -webkit-text-stroke: 1px var(--white);
    }
    
    @keyframes blink {
        0% {
            opacity: 0%;
        }
        1% {
            opacity: 100%;
        }
        99% {
            opacity: 100%;
        }
        100% {
            opacity: 0;
        }
    }
    
    .text-1 {
        animation: blink 0.8s linear 0.9s, blink 0.8s linear 2s;
        opacity: 0;
    }
    
    .text-2 {
        animation: blink 0.8s linear 0.8s, blink 0.8s linear 2.1s;
        opacity: 0;
    }
    
    .text-3 {
        animation: blink 0.8s linear 0.7s, blink 0.8s linear 2.2s;
        opacity: 0;
    }
    
    .text-4 {
        animation: blink 0.8s linear 0.6s, blink 0.8s linear 2.3s;
        opacity: 0;
    }
    
    .text-5 {
        animation: blink 0.8s linear 0.5s, blink 0.8s linear 2.4s;
        opacity: 0;
    }
    
    .text-6 {
        animation: blink 0.8s linear 0.4s, blink 0.8s linear 2.5s, slide-out 1s linear 3.2s;
        opacity: 0;
    }
    
    .text-7 {
        animation: blink 0.8s linear 0.5s, blink 0.8s linear 2.4s;
        opacity: 0;
    }
    
    .text-8 {
        animation: blink 0.8s linear 0.6s, blink 0.8s linear 2.3s;
        opacity: 0;
    }
    
    .text-9 {
        animation: blink 0.8s linear 0.7s, blink 0.8s linear 2.2s;
        opacity: 0;
    }
    
    .text-10 {
        animation: blink 0.8s linear 0.8s, blink 0.8s linear 2.1s;
        opacity: 0;
    }
    
    .text-11 {
        animation: blink 0.8s linear 0.9s, blink 0.8s linear 2s;
        opacity: 0;
    }
    
    @keyframes slide-out {
        0% {
            opacity: 0%;
        }
        1% {
            opacity: 100%;
        }
    
        19% {
            opacity: 100%;
        }
        20% {
            opacity: 0%;
        }
    
        39% {
            opacity: 0%;
        }
        40% {
            opacity: 100%;
        }
    
        59% {
            opacity: 100%;
        }
        60% {
            opacity: 0%;
        }
    
        79% {
            opacity: 0%;
        }
        80% {
            opacity: 100%;
        }
    
        100% {
            opacity: 100%;
        }
    }
    
    @keyframes slide-out-container {
        0% {
            height: 100vh;
        }
    
        40% {
            height: 100vh;
        }
    
        100% {
            height: 0%;
        }
    }
    
    @media (max-width: 990px) {
        .header {
            font-size: 24px;
        }
    
        .text {
            font-size: 24px;
        }
    }

    a{
    color: var(--white-color);
    text-decoration: none;
}
ul{
    list-style-type: none;
}
button{
    background-color: transparent;
    color: #fff;
    border: none;
    font-size: 30px;
    cursor: pointer;
    transition: all 300ms ease-in-out;
}
button:hover{
    opacity: 0.9;
}
.nav-brand{
    color: var(--white-color);
    font-size: 30px;
    font-weight: 500;
    letter-spacing: 2px;
}

.nav-menu{
    background-color: var(--background);
}
.nav-container{
    max-width: 1600px;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.nav-overlay{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--shark-color);
    padding: 60px;
    opacity: 0;
    visibility: hidden;
    transition: all 300ms ease-in-out;
}

/* show overlay js */
.show-overlay{
    opacity: 1;
    visibility: visible;
}

.nav-overlay-container{
    background-color: var(--background);
    max-width: 1200px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.2);
    position: relative;
}
#menu-hide-btn{
    position: absolute;
    right: -20px;
    top: -20px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    border-radius: 50%;
    background-color: var(--white-color);
    color: var(--background);
}
.nav-links li{
    margin: 16px 0;
    position: relative;
}
.nav-links li::before, .nav-links li::after{
    content: "";
    position: absolute;
    width: 0;
    height: 3px;
    background-color: var(--pink-color);
    opacity: 0;
    transition: all 300ms ease-in-out;
}
.nav-links li::before{
    top: 0;
    left: 0;
}
.nav-links li::after{
    bottom: 0;
    right: 0;
}
.nav-links li:hover::before, .nav-links li:hover::after{
    width: 75%;
    opacity: 1;
}
.nav-links li a{
    text-transform: uppercase;
    font-size: 40px;
    letter-spacing: 6px;
    font-weight: 700;
    transition: all 300ms ease-in-out;
}
.nav-links li:hover a{
    color: var(--pink-color);
}
.nav-icons{
    display: flex;
    align-items: center;
    margin-top: 20px;
}
.nav-icons li{
    border: 1px solid var(--grey-color);
    width: 35px;
    height: 35px;
    margin: 0 5px;
    line-height: 35px;
    border-radius: 50%;
    transition: all 300ms ease-in-out;
}
.nav-icons li:hover{
    background-color: var(--pink-color);
    border-color: var(--pink-color);
}

@media(max-width: 600px){
    .nav-links li a{
        font-size: 22px;
    }
    .nav-overlay{
        padding: 30px;
    }
}
</style>