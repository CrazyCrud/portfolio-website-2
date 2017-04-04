<template>
    <div id="app">
        <main-menu></main-menu>
        <transition name="transition-router">
            <router-view>

            </router-view>
        </transition>
    </div>
</template>

<script>
    import MainMenu from './components/MainMenu';

    export default {
        name: 'app',
        components: {MainMenu}
    }
</script>

<style lang="scss">
    @import "~bourbon/app/assets/stylesheets/bourbon";
    @import "~bourbon-neat/core/neat";
    @import "./scss/base/all";
    @import "./scss/layout/all";

    #app {
        .transition-router-enter-active, .transition-router-leave-active {
            transition: opacity .5s;
        }

        .transition-router-enter, .transition-router-leave {
            opacity: .5s;
        }
    }
</style>
