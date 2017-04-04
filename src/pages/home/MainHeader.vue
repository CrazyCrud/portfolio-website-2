<template>
    <header class="main-header">
        <div class="main-header__headline">{{headerHeadline}}</div>
        <p class="main-header__copy">{{headerCopy}}</p>
        <router-link to="/was-ich-biete">
            <ui-button color="primary" size="normal">{{headerButton}}</ui-button>
        </router-link>
    </header>
</template>

<script>
    import UiButton from 'keen-ui/lib/UiButton';

    export default {
        name: 'main-header',
        components: {UiButton},
        data: function() {
            return {
                headerHeadline: 'Hallo, ich bin Constantin!',
                headerCopy: 'Ich designe Anwendungen, die nutzbar sind und Spaß machen.Vom Design, Programmieren und Testen mit echten Nutzern übernehme ich alles was ihr Produkt benötigt.',
                headerButton: 'Was ich kann',
            }
        }
    }
</script>

<sstyle lang="scss">
    @import "~bourbon/app/assets/stylesheets/bourbon";
    @import "~bourbon-neat/core/neat";

    @import "../../scss/base/all";
    @import "../../scss/layout/all";
</sstyle>