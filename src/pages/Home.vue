<template>
    <div>
        <main-header></main-header>
        <education></education>
        <projects></projects>
        <goals></goals>
        <contact></contact>
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

    @import "../scss/base/all";
    @import "../scss/layout/all";
</style>