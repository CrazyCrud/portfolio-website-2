<template>
    <div id="app" class="animated fadeIn">
        <main-menu></main-menu>
        <main class="main">
            <transition name="transition-router-fade">
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
        watch: {
            '$route': function() {
                window.scrollTo(0,0);
            }
        },
        mounted: function() {
            Utility.setupFadeIn();
        }
    }
</script>

<style lang="scss">
    @import "~bourbon/app/assets/stylesheets/bourbon";
    @import "~bourbon-neat/core/neat";

    @import "./scss/base/all";
    @import "./scss/components/all";
    @import "./scss/layout/all";
    @import "./scss/utils/mixins";
    @import "./scss/utils/functions";
    @import "./scss/utils/variables";
    @import "./scss/vendors/animate";


    #app {
        min-height: 100%;
        background-color: $primary-color--medium;

        .transition-router-fade-enter-active, .transition-router-fade-leave-active {
            transition: opacity .5s;
        }

        .transition-router-fade-enter, .transition-router-fade-leave-to {
            opacity: 0;
        }

        .main {
            margin-top: em(80, strip-unit($font-size--s)) + modular-scale(3);
            background-color: $white;

            .page {
                &__headline {
                     text-align: center;
                     font-size: modular-scale(2);
                     margin-bottom: modular-scale(-1);
                 }
            }


        }

        .button-link {
            text-decoration: none;
        }
    }

    /*
    #app:after {
        content: "";
        display: block;
        height: $footer-height;
    }
    */
</style>
