<template>
    <div class="page about">
        <h3 class="page__headline about__headline">Was ich biete</h3>
        <div v-for="skill in skills" class="about__skill about-skill">
            <ul class="about-skill__sub-skills sub-skills">
                <!--<li v-for="sub-skill in skill.copy" class="sub-skills_sub-skill sub-skill"></li>-->
            </ul>
        </div>
        <h3 class="page__headline about__headline">Über mich</h3>
        <div class="about__me about-me">
            <p class="about-me__copy">
                As a fun oriented person, I've taught myself front-end development, as well as attended courses in order to hone my design skills. With 3 years of professional experience in web design and development, I consider myself skilled enough to proudly present a selection of my projects. Additional skills of mine are video editing, photography editing and color correction.
            </p>
        </div>
        <div class="about__resume about-resume">

        </div>
        <main-footer>
        </main-footer>
    </div>
</template>

<script>
    import MainFooter from '../components/Footer.vue';
    import Badge from '../components/Badge.vue';

    export default {
        name: 'about',
        components: {MainFooter, Badge},
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

    .about {
        &__skill {
             position: relative;
         }
    }
</style>