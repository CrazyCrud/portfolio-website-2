<template>
    <div class="home">
        <main-header class="home__section home-section home-section--main-header"></main-header>
        <education class="home__section home-section home-section--education"></education>
        <projects class="home__section home-section home-section--projects"></projects>
        <goals class="home__section home-section home-section--goals"></goals>
        <contact class="home__section home-section home-section--contact"></contact>
    </div>
</template>

<script>
    import MainHeader from './home/MainHeader.vue';
    import Education from './home/Education.vue';
    import Projects from './home/Projects.vue';
    import Goals from './home/Goals.vue';
    import Contact from './home/Contact.vue';
    import UiButton from 'keen-ui/lib/UiButton';

    export default {
        name: 'home',
        components: {MainHeader, Education, Projects, Goals, Contact, UiButton},
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

    .home {
        &__section {
            margin-bottom: modular-scale(5);

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
        &__container {
             padding: 0 modular-scale(1);
             $unitless: modular-scale(1)/1em;
             font-size: $unitless + rem;
         }
        &__headline {
            text-align: center;
            font-size: modular-scale(2);
            margin-bottom: modular-scale(-1);
         }
    }
</style>