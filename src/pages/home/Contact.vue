<template>
    <section class="main-section contact">
        <div class="main-section__container contact__container">
            <h2 class="main-section__headline contact__headline">{{contactHeadline}}</h2>
            <p class="contact__copy">{{contactCopy}}</p>
            <router-link to="/kontakt" class="button-link">
                <ui-button color="default" size="normal">{{contactButton}}</ui-button>
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
                contactCopy: `Lassen Sie uns über Ihr Projekt sprechen oder erzählen Sie mir ihren besten Witz.`,
                contactButton: 'Kontaktieren Sie mich'
            }
        }
    }
</script>

<style lang="scss">
    @import "~bourbon/app/assets/stylesheets/bourbon";
    @import "~bourbon-neat/core/neat";

    .main-section.contact {
        &__copy {
        margin-bottom: 0;
         }
    }
</style>