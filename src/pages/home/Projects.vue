<template>
    <section class="main-section main-section__projects main-section-projects">
        <div class="main-section-projects__container">
            <svg class="main-section-projects__triangle">
                <use xlink:href="#triangle--half"></use>
            </svg>
            <div class="main-section__content-container main-section-projects__content-container">
                <h2 class="main-section__headline main-section-projects__headline">{{projectsHeadline}}</h2>
                    <div class="main-section-projects__projects-container">
                        <div v-for="(project, index) in projects" class="main-section-project" v-bind:class="project.classAttr">
                            <div class="main-section-project__content-container main-section-project-content-container hide-me">
                                <div class="main-section-project__link main-section-project-link" v-bind:class="{ 'main-section-project-link--inactive': !project.active }">
                                    <a :href="project.link" target="_blank">
                                        <svg class="link-icon main-section-project-link__icon">
                                            <use xlink:href="#icon-follow--left"></use>
                                        </svg>
                                    </a>
                                </div>
                                <h5 class="main-section-project__title">{{project.title}}</h5>
                                <p class="main-section-project__copy">{{project.copy}}</p>
                                <p class="main-section-project__type">{{project.type}}</p>
                            </div>
                        </div>
                    </div>
                <router-link to="/projekte" class="button-link">
                    <ui-button color="default" size="normal">{{projectsButton}}</ui-button>
                </router-link>
            </div>
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
                projectsHeadline: 'Referenzen',
                projectsButton: 'Mehr Projekte',
                projects: [
                    {
                        classAttr: 'main-section-project--latrinalia',
                        title: 'Latrinalia',
                        type: 'Web-Development',
                        link: 'http://www.sueddeutsche.de/bayern/forschungsobjekt-toilette-kritzeleien-an-der-klotueren-1.1949629',
                        copy: 'Die responsive Web-App ermöglicht das Hochladen, Bewerten und Kommentieren von Bildern über Toiletten-Grafiti.',
                        active: true
                    },
                    {
                        classAttr: 'main-section-project--segelteam',
                        title: 'Segelteam',
                        type: 'Web-Development',
                        link: 'http://seoul-way-7442.pancakeapps.com/',
                        copy: 'Die Umsetzung eines Designs zu einer imaginären Seite, das auf allen Geräten ansprechend aussieht.',
                        active: true
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

    $grid-projects: (
        columns: 1,
        gutter: 20,
    );

    $grid-projects--tablet-up: (
        columns: 2,
        gutter: 2rem,
         media: "(min-width: #{$mq-1100} )"
    );

    .main-section-projects {

    &__container {
        position: relative;
        background-color: $white--light;
        padding-bottom: modular-scale(6);
     }

        &__content-container {
        z-index: 10;
         max-width: none;
            @media screen and (min-width: $mq-900) {
                margin-left: 12.5%;
                margin-right: 12.5%;
            }
         }

        &__triangle {
            position: absolute;
            fill: $white--light;
            width: 100%;
             top: -181px;
             height: 300px;
        z-index: 1;
        pointer-events: none;
         }


        &__projects-container {
            @include grid-container;
         @include grid-collapse($grid-projects);
            @include grid-media($grid-projects--tablet-up) {
                @include grid-collapse($grid-projects--tablet-up);
            }
         }

        .button-link {
            @media screen and (min-width: $mq-900) {

            }
        }
    }

    .main-section-project {
        @include grid-column(1, $grid-projects);

        @include grid-media($grid-projects--tablet-up) {
            @include grid-column(1);
        }

        margin-top: modular-scale(3);
        font-size: 1rem;
        background-size: cover;
        padding-top: modular-scale(2);
        padding-bottom: modular-scale(1);



        &__content-container {
            box-sizing: border-box;
             position: relative;
             max-width: 80%;
             height: 260px;
            padding: modular-scale(1) modular-scale(2);
             color: $white;
             background-color: $primary-color--medium;
            display: flex;
            flex-direction: column;
             justify-content: space-between;
             align-items: center;

            @media screen and (min-width: $mq-600) {
                height: 290px;
            }

            @media screen and (min-width: $mq-1200) {
                height: 300px;
                padding: modular-scale(-1);
                max-width: none;
            }

            @media screen and (min-width: $mq-1500) {
                height: 330px;
                max-width: 86%;
            }
         }

        &__title {
            font-size: modular-scale(2);
            font-weight: 300;
         }

         &__type {
              font-size: modular-scale(1);
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

           &--latrinalia {
                background: url('/static/projekt-latrinalia.jpg');
            }

            &--segelteam {
                 background: url('/static/projekt-segelteam.jpg');
             }


    }

    .main-section-project:nth-child(even) {

        .main-section-project-content-container {
             margin-left: auto;
             margin-right: 0;

    @media screen and (min-width: $mq-900) {
        margin-left: auto;
        margin-right: auto;
    }
         }



        .main-section-project-link {
             left: -22px;
         }
     }

    .main-section-project:nth-child(odd) {

    .main-section-project-content-container {
            margin-right: auto;
        margin-left: 0;


        @media screen and (min-width: $mq-900) {
            margin-left: auto;
            margin-right: auto;
        }
             }

        .main-section-project-link {
             right: -22px;

            @media screen and (min-width: $mq-1100){
                right: 0;
                left: -22px;
            }

            &__icon {
                 transform: scaleX(-1);

                @media screen and (min-width: $mq-1100){
                    transform: scaleX(1);
                }
             }
         }
    }

    .main-section-project-content-container {
        box-shadow: 1px 1px 5px transparentize($black, 0.2);
    }

    .main-section-project:last-of-type {
        margin-bottom: 0;
    }

    .main-section-project-link {
        cursor: pointer;
        box-shadow: 1px 1px 7px transparentize($black--light, .75);
        &__icon {
        fill: $primary-color--light;
        position: relative;
        left: 6px;
        top: 6px;
             width: 32px;
             height: 32px;
         }

            &--inactive {
            cursor: default;
            svg {
                fill: $grey--light;
            }
        }

        &:hover {
            animation: swing 1s;
         }
    }


</style>