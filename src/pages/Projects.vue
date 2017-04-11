<template>
    <div class="page projects">
        <div class="projects__content-container projects-content-container">
            <div class="projects-content-container__copy projects-content-container-copy">
                Hier könnte </br><span class="projects-content-container-copy__animated-container animated rollIn"><span class="projects-content-container-copy__highlight">Ihr</span></span> Projekt stehen
            </div>
            <div class="projects-content-container__ps projects-content-container-ps">
                <span class="projects-content-container-ps__content">..hoffentlich bald</span>
            </div>
        </div>
        <main-footer>
        </main-footer>
    </div>
</template>

<script>
    import MainFooter from '../components/Footer.vue';

    export default {
        name: 'project',
        components: {MainFooter},
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
         }

         &__ps {
            margin-top: modular-scale(3);
            font-size: modular-scale(-1);
            text-align: center;
          }
    }

    .projects-content-container-copy {
        &__highlight {
            color: $secondary-color--light;
            display: inline-block;
            font-size: modular-scale(2);
             font-family: $pacifico;
        transform: rotate(-6deg) scale(1.25);
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
    }

</style>