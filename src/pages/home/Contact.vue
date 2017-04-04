<template>
    <section class="main-section contact">
        <div class="main-section__container contact__container">
            <h2 class="main-section__headline contact__headline">{{contactHeadline}}</h2>
            <router-link to="/kontakt">
                <ui-button color="primary" size="normal">{{contactButton}}</ui-button>
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
                contactButton: 'Kontaktieren Sie mich'
            }
        }
    }
</script>

<style lang="scss">
    @import "~bourbon/app/assets/stylesheets/bourbon";
    @import "~bourbon-neat/core/neat";

    @import "../../scss/base/all";
    @import "../../scss/layout/all";
</style>