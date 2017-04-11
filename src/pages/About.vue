<template>
    <div class="page about">
        <div class="about__content-container">
            <h3 class="page__headline about__headline">Was ich biete</h3>
            <skills class="about__section"></skills>
            <h3 class="page__headline about__headline">Curriculum Vitae</h3>
            <resume class="about__section"></resume>
            <!--
            <h3 class="page__headline about__headline">Und sonst so</h3>
            <about-me class="about__section"></about-me>
            -->
        </div>
        <main-footer>
        </main-footer>
    </div>
</template>

<script>
    import MainFooter from '../components/Footer.vue';
    import AboutMe from './about/About.vue';
    import Resume from './about/Resume.vue';
    import Skills from './about/Skills.vue';

    export default {
        name: 'about',
        components: {MainFooter, AboutMe, Resume, Skills},
        data: function() {
            return {
                skills: [
                    {
                        title: `Webdesign`,
                        copy: []
                    },
                    {
                        title: `App-Etnwicklung`,
                        copy: []
                    },
                    {
                        title: `Usability & UX`,
                        copy: []
                    }
                ]
            }
        }
    }
</script>

<style lang="scss">
    @import "~bourbon/app/assets/stylesheets/bourbon";
    @import "~bourbon-neat/core/neat";

    @import "../scss/base/all";

    .about {
        &__section {
             margin-bottom: modular-scale(4);
         }
        &__content-container {
             max-width: $mq-1200;
             $unitless: modular-scale(1)/1em;
             padding-left: $unitless + rem;
             padding-right: $unitless + rem;
             margin: 0 auto;
         }

        &__resume, &__skills, &__me {

         }
        &__me {
            max-width: 42rem;
            margin: 0 auto;
         }
        &__skill {
             position: relative;
         }
    }
</style>