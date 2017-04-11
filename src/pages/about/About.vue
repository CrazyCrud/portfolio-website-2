<template>
    <div class="about__me about-me">
        <p class="about-me__copy">I'm extremely passionate about technology and entertainment; my interests range from mobile hardware and Android software, to games. I'm a great fan of the Counter-Strike franchise, and have been playing it passionately for over a decade.</p>
        <p class="about-me__copy">I believe that every digital artist needs to have fitting music following their every pixel and byte. My music of choice is located on the deeper end of the spectrum.</p>
    </div>
</template>

<script>
    export default {
        name: 'about-me'
    }
</script>

<style lang="scss">
    @import "~bourbon/app/assets/stylesheets/bourbon";
    @import "~bourbon-neat/core/neat";

    @import "../../scss/base/all";
    @import "../../scss/utils/mixins";


    .about {
        &__me {
            font-size: 1rem;
            line-height: 1.5;
         }
    }

    .about-me {
        &__copy {

         }
    }

</style>