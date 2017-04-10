<template>
    <div class="about__skills skills">
        <div class="flex-boxes">
            <a href="javascript:void(0)" class="flex-box flex-box-big">
                <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_square.png" alt="">
                <h1 class="flex-title">Webdesign</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad nostrum, libero! Laborum distinctio necessitatibus voluptates eaque officiis, unde illo, earum voluptatum rerum, reiciendis ipsa ex dolorem a dicta, maxime aliquam.</p>
            </a>
            <a href="javascript:void(0)" class="flex-box">
                <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_square.png" alt="">
                <h1 class="flex-title">SEO</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae quis ipsum, officia, aperiam tenetur dolor molestiae voluptate perferendis dolorem vel ex, unde fugit blanditiis sapiente.</p>
            </a>
            <a href="javascript:void(0)" class="flex-box flex-box-big">
                <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_square.png" alt="">
                <h1 class="flex-title">Usability & UX</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum molestiae fugiat tenetur fugit atque dignissimos, fugiat natus vitae.</p>
            </a>
            <a href="javascript:void(0)" class="flex-box">
                <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_square.png" alt="">
                <h1 class="flex-title">Product Design</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo obcaecati in provident illo.</p>
            </a>
            <a href="javascript:void(0)" class="flex-box">
                <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_square.png" alt="">
                <h1 class="flex-title">Interfac Design</h1>
                <p>Lorem ipsum dolor sit amet, elit. Rem, illum.</p>
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