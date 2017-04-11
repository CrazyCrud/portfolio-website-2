<template>
    <div class="page projects">
        <div class="projects__content-container projects-content-container">
            <div class="projects-content-container__copy projects-content-container-copy">
                There will be <span class="projects-content-container-copy__animated-container"><span class="projects-content-container-copy__highlight">Work</span></span>
            </div>
            <div class="projects-content-container__ps projects-content-container-ps">
                <router-link to="/kontakt" class="button-link">
                    <ui-button class="projects-content-container-ps__button" color="default" size="normal">{{contactButton}}</ui-button>
                </router-link>
            </div>
        </div>
        <main-footer>
        </main-footer>
    </div>
</template>

<script>
    import UiButton from 'keen-ui/lib/UiButton';
    import MainFooter from '../components/Footer.vue';

    export default {
        name: 'project',
        components: {UiButton, MainFooter},
        data: function() {
            return {
                contactButton: 'Lassen Sie uns über Ihr Projekt reden'
            }
        }
    }
</script>

<style lang="scss">
    @import "~bourbon/app/assets/stylesheets/bourbon";
    @import "~bourbon-neat/core/neat";

    @import "../scss/base/all";



    .projects {

        &__content-container {
            font-size: 2rem;
             max-width: $mq-1200;
             $unitless: modular-scale(1)/1em;
             padding-left: $unitless + rem;
             padding-right: $unitless + rem;
             margin: 0 auto;
        margin-bottom: modular-scale(6);
         }
    }

    .projects-content-container {
        &__copy {
            text-align: center;
             margin-bottom: modular-scale(4);
         }

         &__ps {
            margin-top: modular-scale(3);
            font-size: modular-scale(-1);
            text-align: center;
          }
    }

    .projects-content-container-copy {
        &__highlight {
            // color: $secondary-color--light;
            //display: inline-block;
            //font-size: modular-scale(3) - modular-scale(-4);
             //font-family: $pacifico;
        //font-weight: 100;
        //transform: rotate(-6deg) scale(1.1);
            z-index: 10;
         }

         &__animated-container {
              display: inline-block;
          }
    }

    .projects-content-container-ps {
        &__content {
            color: $grey--medium;
            padding: modular-scale(-2) modular-scale(-1);
        border: 3px solid $primary-color--light;
         }

         &__button {


            &:hover {
                 animation: tada 1s;
             }
          }
    }

</style>