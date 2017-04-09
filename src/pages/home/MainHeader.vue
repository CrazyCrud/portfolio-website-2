<template>
    <header class="main-header">
        <div class="main-header__container">
            <h1 class="main-header__headline main-header-headline">{{headerHeadline}}<span class="main-header-headline__name">{{headerName}}</span>!</h1>
            <div class="main-header__copy-container">
                <p class="main-header__copy">{{headerCopy}}</p>
                <router-link to="/was-ich-biete" class="button-link">
                    <ui-button color="default" size="normal">{{headerButton}}</ui-button>
                </router-link>
            </div>
        </div>
    </header>
</template>

<script>
    import UiButton from 'keen-ui/lib/UiButton';

    export default {
        name: 'main-header',
        components: {UiButton},
        data: function() {
            return {
                headerHeadline: `Hallo, ich bin `,
                headerName: `Constantin`,
                headerCopy: `Ich designe Anwendungen, die nutzbar sind und Spaß machen.
                    Vom Design, Programmieren und Testen mit echten Nutzern übernehme ich alles was ihr Produkt benötigt.`,
                headerButton: 'Was ich kann',
            }
        },
        mounted: function() {

        }
    }
</script>

<style lang="scss">
    @import "~bourbon/app/assets/stylesheets/bourbon";
    @import "~bourbon-neat/core/neat";

    @import "../../scss/base/all";
    @import "../../scss/utils/mixins";

    .main-header {
        &__headline {
            position: relative;
            margin: 0 0 modular-scale(-1) 0;
            padding: modular-scale(-1) 0;
        }
         &__copy-container {
            margin: 0 - modular-scale(1);
            padding: modular-scale(-1) modular-scale(1);
            background-color: $primary-color--medium;
            color: $white;
          }
          &__copy {
            margin: 0;
            font-size: modular-scale(1);
        line-height: modular-scale(1);
           }
    }

    .main-header-headline {
        &__name {

         }
    }
</style>