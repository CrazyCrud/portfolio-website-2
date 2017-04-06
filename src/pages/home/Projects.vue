<template>
    <section class="main-section projects">
        <div class="main-section__container projects__container">
            <h2 class="main-section__headline projects__headline">{{projectsHeadline}}</h2>
            <div v-for="project in projects" class="project fade-in-element" id="js-fadeInElement">
                <h5 class="project__title">{{project.title}}</h5>
                <p class="project_type">{{project.type}}</p>
            </div>
            <router-link to="/projekte" class="button-link">
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
                projects: [
                    {
                        title: 'Latrinalia',
                        type: 'Web-Development',
                        copy: ''
                    },
                    {
                        title: 'Segelteam',
                        type: 'Web-Development',
                        copy: ''
                    }
                ]
            }
        }
    }
</script>

<style lang="scss">
    @import "~bourbon/app/assets/stylesheets/bourbon";
    @import "~bourbon-neat/core/neat";

    .project {
        position: relative;
        max-width: 78%;
        height: 260px;
        background-color: lightslategray;
    }

    .project:nth-child(even) {
        margin-right: - modular-scale(1);
        margin-left: auto;
     }

    .project:nth-child(odd) {
        margin-right: auto;
        margin-left: - modular-scale(1);
    }

    .project:last-of-type {
        margin-bottom: 0;
    }
</style>