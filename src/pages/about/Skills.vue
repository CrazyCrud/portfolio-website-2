<template>
    <div class="about__skills skills">
        <div class="flex-boxes">
            <a href="javascript:void(0)" class="flex-box">
                <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_square.png" alt="">
                <h1 class="flex-title">Webdesign</h1>
                <p>Ihre Ideen sollen individuell ohne Baukasten-Verfahren umgesetzt werden. Dinge wie die Performanz und eine angenehme Bedienbarkeit auf allen Geräten stehen dabei im Vordergrund.</p>
            </a>
            <a href="javascript:void(0)" class="flex-box">
                <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_square.png" alt="">
                <h1 class="flex-title">SEO</h1>
                <p>Strukturierter Inhalte und eindeutige Schlüsselwörter helfen Ihrer Seite durch Suchmaschinen gefunden zu werden.</p>
            </a>
            <a href="javascript:void(0)" class="flex-box flex-box-big">
                <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_square.png" alt="">
                <h1 class="flex-title">Usability & UX</h1>
                <p>Zwischen Ihrer Anwendung und dem Nutzer soll eine persönliche Beziehung entstehen. Dazu gehört eine intuitive Bedienung, sinnvolle Informationsstruktur und Liebe zum Detail.</p>
            </a>
            <a href="javascript:void(0)" class="flex-box">
                <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_square.png" alt="">
                <h1 class="flex-title">UI-Design</h1>
                <p>Zur Gestaltung von Anwendungen gehört ein übersichtliches Layout, ein gelungenes Zusammenspiel von Farben und die Wahl passender Schriftarten.</p>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'skills'
    }
</script>

<style lang="scss">
    @import "~bourbon/app/assets/stylesheets/bourbon";
    @import "~bourbon-neat/core/neat";

    @import "../../scss/base/all";
    @import "../../scss/utils/mixins";

    @include flexbox-items(3px, $white--light, $black);

    .about {
        &__skills {

         }
    }


</style>