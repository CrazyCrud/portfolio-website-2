<template>
    <div class="page skills">
        <h3 class="page__headline skills__headline">Was ich biete</h3>
        <div class="skills__skill">
            <h4 class="skill__headline"></h4>
            <ul></ul>
        </div>
        <h3 class="page__headline about__headline">Über mich</h3>
        <div class="about__me about-me">
            <p class="about-me__copy"></p>
        </div>
        <div class="about__resume about-resume">

        </div>
        <main-footer>
        </main-footer>
    </div>
</template>

<script>
    import MainFooter from '../components/Footer.vue';

    export default {
        name: 'skills',
        components: {MainFooter},
        data: function() {
            return {
                skills: [
                    {
                        title: `Webdesign`,
                        copy: ``
                    }
                ]
            }
        }
    }
</script>

<style lang="scss">
    @import "~bourbon/app/assets/stylesheets/bourbon";
    @import "~bourbon-neat/core/neat";
</style>