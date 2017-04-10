<template>
    <div class="home">
        <main-header class="home__section home-section home-section--main-header"></main-header>
        <projects class="home__section home-section home-section--projects"></projects>
        <contact class="home__section home-section home-section--contact"></contact>
        <main-footer>
        </main-footer>
    </div>
</template>

<script>
    import MainHeader from './home/MainHeader.vue';
    import MainFooter from '../components/Footer.vue';
    import Education from './home/Education.vue';
    import Projects from './home/Projects.vue';
    import Goals from './home/Goals.vue';
    import Contact from './home/Contact.vue';
    import UiButton from 'keen-ui/lib/UiButton';

    export default {
        name: 'home',
        components: {MainHeader, MainFooter, Education, Projects, Goals, Contact, UiButton},
        data: function() {
            return {
                goalsHeadline: 'Mein Ziel',
                contactHeadline: 'Kontakt',
                contactButton: 'Kontaktieren Sie mich'
            }
        }
    }
</script>

<style lang="scss">
    @import "~bourbon/app/assets/stylesheets/bourbon";
    @import "~bourbon-neat/core/neat";

    @import "../scss/base/all";

    .home {
        &__section {
            margin-bottom: modular-scale(6);

        .ui-button {
            margin-top: modular-scale(4);
        }
         }

    }

    .home-section {

    }

    .main-header {
        &__container {
             $unitless: modular-scale(1)/1em;
             font-size: $unitless + rem;
             padding: 0 modular-scale(1);
         }
    }

    .main-section {
        &__content-container {
             max-width: $mq-900;
             padding: 0 modular-scale(1);
             $unitless: modular-scale(1)/1em;
             font-size: $unitless + rem;

            @media screen and (min-width: $mq-900) {
                margin-left: 12.5%;
                margin-right: 12.5%;
            }
         }

        &__headline {
            text-align: center;
            font-size: modular-scale(1);
            margin-bottom: modular-scale(-1);
         }
    }
</style>