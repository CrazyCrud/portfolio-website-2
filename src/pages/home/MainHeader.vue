<template>
    <header class="main-header">
        <div class="main-header__content-container main-section__content-container">
            <h1 class="main-header__headline main-header-headline">{{headerGreeting}}<span class="main-header-headline__name">{{headerName}}</span>.</br>
                {{headerSkills}}
            </h1>
            <div class="main-header__copy-container">
                <p class="main-header__copy">{{headerCopy}}</p>
                <router-link to="/ueber-mich" class="button-link">
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
                headerGreeting: `Hallo, ich bin `,
                headerName: `Constantin`,
                headerSkills: `Ich designe Webseiten und Apps.`,
                headerCopy: `Ich designe Anwendungen, die nutzbar sind und Spaß machen.
                    Vom Design, Programmieren und Testen mit echten Nutzern übernehme ich alles was ihr Produkt benötigt.`,
                headerButton: 'Was ich biete',
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
        &__content-container {

             padding-top: modular-scale(6);
             margin-bottom: modular-scale(8);

            @media screen and (min-width: $mq-900) {
                margin-left: 12.5%;
            }
         }

        &__headline {
            position: relative;
            margin: 0 0 modular-scale(-1) 0;
            padding: modular-scale(-1) 0;
            font-size: modular-scale(1) * 1.25;
        }
         &__copy-container {
            margin: 0 - modular-scale(1);
            padding: modular-scale(-1) modular-scale(1);
            color: $black;
          }
          &__copy {
            margin: 0;
            line-height: 1.5;
           }
    }

    .main-header-headline {
        &__name {

         }
    }
</style>