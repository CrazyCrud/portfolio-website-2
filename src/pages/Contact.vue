<template>
    <div class="page contact">
        <div class="contact__content-container">
            <h3 class="page__headline contact__headline">Kontakt</h3>
            <div class="contact__form-container contact-form-container">
                <form class="contact-form" v-on:submit.prevent="onSubmit">
                    <ui-textbox
                            :disabled="formSubmitted"
                            :invalid="!isValidMail"
                            class="contact-form__element"
                            floating-label
                            label="E-Mail"
                            placeholder="Ihre E-Mail Adresse"
                            v-model="email">
                    </ui-textbox>
                    <ui-textbox
                            :disabled="formSubmitted"
                            class="contact-form__element"
                            floating-label
                            label="Name"
                            placeholder="Ihr Name"
                            v-model="name">
                    </ui-textbox>
                    <ui-textbox
                            :disabled="formSubmitted"
                            class="contact-form__element"
                            enforce-maxlength
                            floating-label
                            help="Maximal 256 Zeichen"
                            label="Ihre Nachricht"
                            placeholder="Ich habe diese megagute Idee..."

                            :multi-line="true"
                            :maxlength="256"

                            v-model="message"
                    ></ui-textbox>
                    <ui-checkbox :disabled="formSubmitted" value="human" v-model="human" name="human" label="Ich bin kein Roboter...oder Scientologe"></ui-checkbox>
                    <ui-alert @dismiss="warningAlert = false" type="warning" v-show="warningAlert">
                        Sind Sie sicher dass Sie ein Roboter sind?
                    </ui-alert>
                    <ui-button :disabled="formSubmitted" class="contact-form__element contact-form__submit" color="default" size="normal">{{submitButton}}</ui-button>

                    <ui-alert @dismiss="successAlert = false" type="success" v-show="successAlert">
                        Okilly dokilly, danke für Ihre Nachricht!
                    </ui-alert>
                    <ui-alert @dismiss="errorAlert = false" type="error" v-show="errorAlert">
                        Leider ist Ihre Nachricht irgendwo stecken geblieben. Versuchen Sie es bitte bald wieder :(
                    </ui-alert>
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
    import UiAlert from 'keen-ui/lib/UiAlert';
    import UiTextbox from 'keen-ui/lib/UiTextbox';
    import UiCheckbox from 'keen-ui/lib/UiCheckbox';

    const $ = require('jquery');

    export default {
        name: 'contact',
        components: {UiTextbox, UiButton, UiAlert, UiCheckbox, MainFooter},
        data: function() {
            return {
                email: '',
                name: '',
                message: '',
                human: false,
                submitButton: 'Absenden',
                isValidMail: true,
                formSubmitted: false,
                successAlert: false,
                warningAlert: false,
                errorAlert: false,
                emailRegex: /^([a-zA-Z0-9_.+-]+)\@([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,4})$/
            }
        },
        methods: {
            onSubmit: function() {
                this.successAlert = false;
                this.warningAlert = false;
                this.errorAlert = false;

                const email = $.trim(this.email);
                const message = $.trim(this.message);

                this.isValidMail = this.emailRegex.test(email);

                if(! this.isValidMail) {
                    return;
                }

                if(! this.human) {
                    this.warningAlert = true;
                    return;
                }

                const request = $.ajax({
                    url: 'php/send_mail.php',
                    type: 'POST',
                    dataType: 'json',
                    data: `email=${email}&message=${message}`
                });

                request.done((response, textStatus, jqXHR) => {
                    this.formSubmitted = true;
                    this.warningAlert = this.errorAlert = false;
                    this.successAlert = true;
                });

                request.fail((jqXHR, textStatus, errorThrown) => {
                    this.formSubmitted = false;
                    this.successAlert = this.warningAlert = false;
                    this.errorAlert = true;

                    console.error(
                            "Der bößartige, bößartige Fehler ist: "+
                            textStatus, errorThrown
                    );
                });
            }
        }
    }
</script>

<style lang="scss">
    @import "~bourbon/app/assets/stylesheets/bourbon";
    @import "~bourbon-neat/core/neat";

    @import "../scss/base/all";

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

         &__submit {
            margin-top: modular-scale(1.5);
        width: 100%;

            @media screen and (min-width: $mq-600) {
                width: auto;
            }
          }
    }
</style>