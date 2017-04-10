<template>
    <div class="page contact">
        <div class="contact__content-container">
            <h3 class="page__headline contact__headline">Kontakt</h3>
            <div class="contact__form-container contact-form-container">
                <form class="contact-form">
                    <ui-textbox
                            class="contact-form__element"
                            required
                            floating-label
                            label="E-Mail"
                            placeholder="Ihre E-Mail Adresse"
                            v-model="mail">
                    </ui-textbox>
                    <ui-textbox
                            class="contact-form__element"
                            floating-label
                            label="Name"
                            placeholder="Ihr Name"
                            v-model="name">
                    </ui-textbox>
                    <ui-textbox
                            class="contact-form__element"
                            required
                            enforce-maxlength
                            floating-label
                            help="Maximal 256 Zeichen"
                            label="Ihre Nachricht"
                            placeholder="Ich habe diese megagute Idee..."

                            :multi-line="true"
                            :maxlength="256"

                            v-model="message"
                    ></ui-textbox>
                    <ui-button class="contact-form__element" color="default" size="normal">{{submitButton}}</ui-button>
                </form>
            </div>
        </div>
        <main-footer>
        </main-footer>
    </div>
</template>

<script>
    import MainFooter from '../components/Footer.vue';
    import UiButton from 'keen-ui/lib/UiButton';
    import UiTextbox from 'keen-ui/lib/UiTextbox';

    export default {
        name: 'contact',
        components: {UiTextbox, UiButton, MainFooter},
        data: function() {
            return {
                mail: '',
                name: '',
                message: '',
                submitButton: 'Absenden'
            }
        }
    }
</script>

<style lang="scss">
    @import "~bourbon/app/assets/stylesheets/bourbon";
    @import "~bourbon-neat/core/neat";

    .contact {
        &__content-container {
             max-width: 800px;
             $unitless: modular-scale(1)/1em;
             padding-left: $unitless + rem;
             padding-right: $unitless + rem;
             margin: 0 auto;
         }
    }

    .contact-form {
        &__element {
            margin-bottom: modular-scale(3) !important;
         }
    }
</style>