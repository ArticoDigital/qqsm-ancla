<template>
    <div id="wrapper">
        <audio id="error" autoplay   >
            <source src="@/assets/audio/correcto.mp3" type="audio/mpeg">
        </audio>
        <main class="row justify-center align-center">
            <figure>
                <router-link to="/game">
                    <img src="@/assets/images/imgganador.png" alt="">
                </router-link>
            </figure>
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

    .Logo-ancla {
        top: 0;
        left: 3rem;
        position: fixed;
        max-width: 17.5rem;
        z-index: 20;
    }

    .logo {
        margin: 0 2.5rem 0 6rem;
        max-width: 30rem
    }

    .Person-left {
        max-width: 16rem;
    }

    .Person-right {
        max-width: 19rem
    }
</style>
