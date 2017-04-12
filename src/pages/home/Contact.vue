<template>
    <section class="main-section main-section__contact main-section-contact">
        <div class="main-section__content-container main-section-contact__content-container">
            <h2 class="main-section__headline main-section-contact__headline">{{contactHeadline}}</h2>
            <p class="main-section-contact__copy">{{contactCopy}}</p>
            <router-link to="/kontakt" class="button-link">
                <ui-button class="main-section-contact__button" color="default" size="normal">{{contactButton}}</ui-button>
            </router-link>
        </div>
    </section>
</template>

<script>
    import UiButton from 'keen-ui/lib/UiButton';

    export default {
        name: 'contact',
        components: {UiButton},
        data: function() {
            return {
                contactHeadline: 'Kontakt',
                contactCopy: `Lassen Sie uns über Ihr Projekt sprechen oder empfehlen Sie mir Ihre Lieblingsmusik.`,
                contactButton: 'Lassen Sie uns reden'
            }
        }
    }
</script>

<style lang="scss">
    @import "~bourbon/app/assets/stylesheets/bourbon";
    @import "~bourbon-neat/core/neat";

    @import "../../scss/base/all";
    @import "../../scss/utils/variables";

    .main-section-contact {
        &__copy {
            margin-bottom: 0;
             max-width: $mq-1200;
         }

         &__button {
            &:hover {
                 animation: tada 1s;
             }
          }

    &__content-container {
        max-width: none;
     }
    }

    .main-section {


        &__contact-container {
            margin: 0 auto;
         }
    }
</style>