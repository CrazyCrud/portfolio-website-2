<template>
    <div id="app">
        <main-menu></main-menu>
        <main class="main">
            <transition name="transition-router">
                <router-view>

                </router-view>
            </transition>
        </main>
    </div>
</template>

<script>
    import MainMenu from './components/MainMenu';
    import Utility from './modules/Utility';

    export default {
        name: 'app',
        components: {MainMenu},

        mounted: function() {
            Utility.setupFadeIn();
        }
    }
</script>

<style lang="scss">
    @import "~bourbon/app/assets/stylesheets/bourbon";
    @import "~bourbon-neat/core/neat";

    @import "./scss/base/all";
    @import "./scss/layout/all";
    @import "./scss/utils/mixins";

    @include fadeIn();


    #app {
        .transition-router-enter-active, .transition-router-leave-active {
            transition: opacity .5s;
        }

        .transition-router-enter, .transition-router-leave {
            opacity: .5s;
        }

        .main {
            margin-top: 80px;
        }
    }
</style>
