<template>
    <section class="main-section projects">
        <div class="main-section__container projects__container">
            <h2 class="main-section__headline projects__headline">{{projectsHeadline}}</h2>
            <div v-for="project in projects" class="project hide-me">
                <div class="project__content-container">
                    <div class="project__link project-link"></div>
                    <h5 class="project__title">{{project.title}}</h5>
                    <p class="project__type">{{project.type}}</p>
                </div>
            </div>
            <router-link to="/projekte" class="button-link">
                <ui-button color="default" size="normal">{{projectsButton}}</ui-button>
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

    @import "../../scss/base/all";

    .project {
        position: relative;
        max-width: 60%;
        height: 260px;
        color: white;
        background-color: $primary-color--dark;
        margin-bottom: modular-scale(2);

        &__content-container {
            display: flex;
            flex-direction: column;
             height: 100%;
             justify-content: center;
             align-items: center;
         }

        &__title {
            font-size: modular-scale(1);
         }

         &__type {
              font-size: modular-scale(-1);
            text-transform: uppercase;
          }

          &__link {
                width: 44px;
                height: 44px;
                position: absolute;
               top: -22px;
        background-color: $white--light;
           }
    }

    .project:nth-child(even) {
        margin-right: - modular-scale(1);
        margin-left: auto;

        .project-link {
             left: -22px;
         }
     }

    .project:nth-child(odd) {
        margin-right: auto;
        margin-left: - modular-scale(1);

        .project-link {
             right: -22px;
         }
    }

    .project:last-of-type {
        margin-bottom: 0;
    }
</style>