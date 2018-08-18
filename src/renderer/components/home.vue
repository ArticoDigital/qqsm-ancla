<template>
    <div id="wrapper">
        <main class="row justify-center align-center">
            <figure class="Logo-ancla">
                <img src="@/assets/images/logoancla.png" alt="">
            </figure>
            <header></header>
            <div class="row Home-content">
                <figure class="Person-left">
                    <img src="@/assets/images/personaje01ancla.png" alt="">
                </figure>
                <div class="logo">
                    <img src="@/assets/images/logoganaconseguridad.png" alt="">
                    <router-link to="/game">
                        <img src="~@/assets/images/btnstart.png" alt="electron-vue">
                    </router-link>
                </div>
                <figure class="Person-right">
                    <img src="@/assets/images/personaje02ancla.png" alt="">
                </figure>
            </div>
            <footer></footer>
        </main>
    </div>
</template>


<style scoped>
    main {
        height: 100vh
    }

    header {
        background: url("~@/assets/images/bordesuperiorancla.png") no-repeat center;
        background-size: cover;
        height: 10.5rem;
        width: 100%;
        position: fixed;
        top: 0;
    }

    footer {
        background: url("~@/assets/images/bordeinferiorancla.png") no-repeat center;
        background-size: cover;
        height: 10.5rem;
        width: 100%;
        position: fixed;
        bottom: 0;
    }

    .Home-content {
        z-index: 2;
        position: relative;
    }
    .Logo-ancla{
        top:0;
        left: 3rem;
        position: fixed;
        max-width: 17.5rem;
        z-index: 20;
    }

    .logo {
        margin: 0 2.5rem 0 6rem;
        max-width: 30rem
    }
    .Person-left{
        max-width: 16rem;
    }
    .Person-right{
        max-width: 19rem
    }
</style>
