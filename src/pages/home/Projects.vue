<template>
    <section class="main-section projects">
        <div class="main-section__container projects__container">
            <h2 class="main-section__headline projects__headline">{{projectsHeadline}}</h2>
            <div v-for="(project, index) in projects" class="project">
                <div class="project__content-container project-content-container hide-me">
                    <div class="project__link project-link">
                        <svg class="link-icon project-link__icon">
                            <use xlink:href="#icon-follow--left"></use>
                        </svg>
                    </div>
                    <h5 class="project__title">{{project.title}}</h5>
                    <p class="project__copy">{{project.copy}}</p>
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
                        copy: 'Someday is not a fucking day of the week. Why are you fucking reading all of this? Get back to.'
                    },
                    {
                        title: 'Segelteam',
                        type: 'Web-Development',
                        copy: 'Someday is not a fucking day of the week. Why are you fucking reading all of this? Get back to.'
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
        margin-top: modular-scale(3);
        background: url('https://placeimg.com/640/480/tech');
        background-size: cover;
    padding-top: modular-scale(2);
    padding-bottom: modular-scale(1);

        &__content-container {
        box-sizing: border-box;
             position: relative;
             max-width: 80%;
             height: 260px;
        padding: modular-scale(-2);
             color: white;
             background-color: darken($primary-color--medium, 20%);
            display: flex;
            flex-direction: column;
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
               display: block;
                width: 44px;
                height: 44px;
                position: absolute;
               top: -22px;
        background-color: $white--light;
           }
    }

    .project:nth-child(even) {
        margin-right: - modular-scale(1);
        margin-left: - modular-scale(1);

        .project-content-container {
             margin-left: auto;
             margin-right: 0;
         }

        .project-link {
             left: -22px;
         }
     }

    .project:nth-child(odd) {
        margin-right: - modular-scale(1);
        margin-left: - modular-scale(1);

    .project-content-container {
            margin-right: auto;
        margin-left: 0;
         }

        .project-link {
             right: -22px;

            &__icon {
                 transform: scaleX(-1);
             }
         }
    }

    .project:last-of-type {
        margin-bottom: 0;
    }

    .project-link {
        &__icon {
        fill: $primary-color--dark;
        position: relative;
        left: 6px;
        top: 6px;
             width: 32px;
             height: 32px;
         }
    }
</style>