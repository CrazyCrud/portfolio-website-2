<template>
    <section class="main-section projects">
        <div class="main-section__container projects__container">
            <h2 class="main-section__headline projects__headline">{{projectsHeadline}}</h2>
            <router-link to="/projekte">
                <ui-button color="primary" size="normal">{{projectsButton}}</ui-button>
            </router-link>
        </div>
    </section>
</template>

<script>
    import UiButton from 'keen-ui/lib/UiButton';

    export default {
        name: 'projects',
        components: {UiButton},
        data: function() {
            return {
                projectsHeadline: 'Projekte',
                projectsButton: 'Mehr Projekte',
            }
        }
    }
</script>

<style lang="scss">
    @import "~bourbon/app/assets/stylesheets/bourbon";
    @import "~bourbon-neat/core/neat";

    @import "../../scss/base/all";
    @import "../../scss/layout/all";
</style>