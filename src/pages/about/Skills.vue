<template>
    <div class="about__skills skills">
        <div class="flex-boxes skills__skills-container skills-container">
            <a href="javascript:void(0)" class="flex-box skills-container__skill skill">
                <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_square.png" alt="">
                <h1 class="flex-title skill__title">Webdesign</h1>
                <p class="skill_text">Ihre Ideen sollen individuell ohne Baukasten-Verfahren umgesetzt werden. Dinge wie die Performanz und eine angenehme Bedienbarkeit auf allen Geräten stehen dabei im Vordergrund.</p>
            </a>
            <a href="javascript:void(0)" class="flex-box skills-container__skill skill">
                <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_square.png" alt="">
                <h1 class="flex-title skill__title">Search Engine Optimization</h1>
                <p>Strukturierter Inhalte und eindeutige Schlüsselwörter helfen Ihrer Seite durch Suchmaschinen gefunden zu werden.</p>
            </a>
            <a href="javascript:void(0)" class="flex-box skills-container__skill skill">
                <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_square.png" alt="">
                <h1 class="flex-title skill__title">Usability & UX</h1>
                <p>Zwischen Ihrer Anwendung und dem Nutzer soll eine persönliche Beziehung entstehen. Dazu gehört eine intuitive Bedienung, sinnvolle Informationsstruktur und Liebe zum Detail.</p>
            </a>
            <a href="javascript:void(0)" class="flex-box skills-container__skill skill">
                <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_square.png" alt="">
                <h1 class="flex-title skill__title">UI-Design</h1>
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

    .skills {
        &__skills-container {
             clear: both;
             display: flex;
             flex-wrap: wrap;
             justify-content: center;
             text-align: center;
         }
    }

    .skill {
        box-shadow: rgb(221, 221, 221) 0px 0px 1px inset, rgb(225, 225, 225) 0px 2px 4px;
        display: block;
        box-sizing: border-box;
        cursor: default;
        background: rgb(247, 247, 247);
        border-radius: 3px;
        flex: 0 0 100%;
        height: auto;
        margin: 0.4em 1%;
        padding: 2em 2em 3em;
        text-decoration: none;
        transition: all 0.2s ease-in-out;

        @media screen and (min-width: 700px) {
            flex-basis: 48%;
            height: 300px;
        }

        &__title {
             color: rgba(29, 29, 29, 0.7);
             font-size: 1.2em;
             margin-bottom: 0.5em;
         }

         &__text {
              color: rgba(29, 29, 29, 0.6);
              line-height: 1.5em;
              margin: auto;
          }
    }

</style>