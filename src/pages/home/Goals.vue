<template>
    <section class="main-section goals">
        <div class="main-section__container goals__container">
            <h2 class="main-section__headline goals__headline">{{goalsHeadline}}</h2>
        </div>
    </section>
</template>

<script>
    import UiButton from 'keen-ui/lib/UiButton';

    export default {
        name: 'goals',
        components: {UiButton},
        data: function() {
            return {
                goalsHeadline: 'Mein Ziel'
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