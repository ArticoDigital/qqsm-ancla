<template>
    <div id="app">
        <audio autoplay loop>
            <source src="@/assets/audio/principal.mp3" type="audio/mpeg">
        </audio>
        <router-view></router-view>
    </div>
</template>

<style lang="scss">
    @import '~inuit-css/dist/inuit.css';

    body {
        background-image: url('~@/assets/images/back.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        height: 100vh;
    }
</style>
