<script>

</script>

<header>
    
<div class="header-styling">
<h1>Rayan</h1>

<button class="menu-btn" popovertarget="menu">
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
        <g fill="#3f3f3f" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,256v-256h256v256z" id="bgRectangle"></path></g><g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M5,8c-0.72127,-0.0102 -1.39216,0.36875 -1.75578,0.99175c-0.36361,0.623 -0.36361,1.39351 0,2.01651c0.36361,0.623 1.0345,1.00195 1.75578,0.99175h40c0.72127,0.0102 1.39216,-0.36875 1.75578,-0.99175c0.36361,-0.623 0.36361,-1.39351 0,-2.01651c-0.36361,-0.623 -1.0345,-1.00195 -1.75578,-0.99175zM5,23c-0.72127,-0.0102 -1.39216,0.36875 -1.75578,0.99175c-0.36361,0.623 -0.36361,1.39351 0,2.01651c0.36361,0.623 1.0345,1.00195 1.75578,0.99175h40c0.72127,0.0102 1.39216,-0.36875 1.75578,-0.99175c0.36361,-0.623 0.36361,-1.39351 0,-2.01651c-0.36361,-0.623 -1.0345,-1.00195 -1.75578,-0.99175zM5,38c-0.72127,-0.0102 -1.39216,0.36875 -1.75578,0.99175c-0.36361,0.623 -0.36361,1.39351 0,2.01651c0.36361,0.623 1.0345,1.00195 1.75578,0.99175h40c0.72127,0.0102 1.39216,-0.36875 1.75578,-0.99175c0.36361,-0.623 0.36361,-1.39351 0,-2.01651c-0.36361,-0.623 -1.0345,-1.00195 -1.75578,-0.99175z"></path></g></g>
    </svg>
</button>
</div>
    <!-- svelte-ignore a11y-no-noninteractive-element-to-interactive-role -->
    <nav popover role="menu" id="menu">
        <button class="close-btn" popovertarget="menu" popovertargetaction="hide">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve">

                <defs>
                </defs>
                <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
                    <path d="M 3 90 c -0.768 0 -1.536 -0.293 -2.121 -0.879 c -1.172 -1.171 -1.172 -3.071 0 -4.242 l 84 -84 c 1.172 -1.172 3.07 -1.172 4.242 0 c 1.172 1.171 1.172 3.071 0 4.242 l -84 84 C 4.536 89.707 3.768 90 3 90 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: white; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                    <path d="M 87 90 c -0.768 0 -1.535 -0.293 -2.121 -0.879 l -84 -84 c -1.172 -1.171 -1.172 -3.071 0 -4.242 c 1.171 -1.172 3.071 -1.172 4.242 0 l 84 84 c 1.172 1.171 1.172 3.071 0 4.242 C 88.535 89.707 87.768 90 87 90 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: white; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                </g>
                </svg>
        </button>
        <ul>
            <li> <a href-="#">About</a></li>
            <li> <a href-="#">Skills</a></li>
            <li> <a href-="#">My Work</a></li>
            <li> <a href-="#">Contact</a></li>
        </ul>
    </nav>
    <div class="overlay" id="overlay"></div>
</header>

<style>

    .menu-btn {
        border: none;
        background: none;
        cursor: pointer;
        justify-self:flex-end;
        position: relative;
        margin-right: 2rem;
    }

    .header-styling {
        display: flex;
        justify-content: space-between;
        background: var(--c-container);
        margin: 2rem;
        border-radius: 15px;
    }

    nav {
        background: var(--c-container);
        border-radius: 25px 0px 0px 30px;
        color: var(--c-white);
        width: 19%;
        border: none;
        height: 100vh;
        left: auto;
        bottom: auto;
        box-shadow: -5px 5px 15px var(--c-lightblue);
        translate: 100% 0;
        transition: translate 0.5s, display 0.5s ease-out allow-discrete;

        &:popover-open {
            translate: 0 0;

            @starting-style {
                translate: 100% 0;
            }
        }
    }

    .close-btn {
        border: none;
        background: none;
        float: right;
        cursor: pointer;
        margin-right: 2rem;
        margin-top: 2rem;
    }

    svg {
        width: 50px;
        height: 50px;
    }


    ul {
        list-style-type: none;
        margin-top: 7em;
    }

    ul li {
        padding: 1em;
        align-items: center;
    }

    ul li a {
        font-size: 1.5em;
        text-decoration: none;
    }

    h1 {
        background-image: linear-gradient(to right, var(--c-white), var(--c-lightblue));
        -webkit-background-clip: text;
        color: transparent;
        font-size: 35px;
        line-height: 80px;
        padding-left: 2rem;
        font-weight: bolder;
    }

</style>