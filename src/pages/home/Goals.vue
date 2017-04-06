<template>
    <section class="main-section goals">
        <div class="main-section__container goals__container">
            <h2 class="main-section__headline goals__headline">{{goalsHeadline}}</h2>
            <p class="goals__copy">{{goalsCopy}}</p>
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
                goalsHeadline: 'Mein Ziel',
                goalsCopy: `Ich designe Anwendungen, die nutzbar sind und Spaß machen.
                Vom Design, Programmieren und Testen mit echten Nutzern übernehme ich alles was ihr Produkt benötigt.`
            }
        }
    }
</script>

<style lang="scss">
    @import "~bourbon/app/assets/stylesheets/bourbon";
    @import "~bourbon-neat/core/neat";
</style>