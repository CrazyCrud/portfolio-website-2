<template>
    <section class="main-section education">
        <div class="main-section__container education__container">
            <h2 class="main-section__headline education__headline">{{educationHeadline}}</h2>
            <router-link to="/ueber-mich">
                <ui-button color="primary" size="normal">{{educationButton}}</ui-button>
            </router-link>
        </div>
    </section>
</template>

<script>
    import UiButton from 'keen-ui/lib/UiButton';

    export default {
        name: 'education',
        components: {UiButton},
        data: function() {
            return {
                educationHeadline: 'Ausbildung',
                educationButton: 'Mein Lebenslauf',
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