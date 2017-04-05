<template>
    <section class="main-section education">
        <div class="main-section__container education__container education-container">
            <h2 class="main-section__headline education__headline">{{educationHeadline}}</h2>
            <div class="education__school education-school">
                <div class="education-school__icon-container icon-container-school">
                    <svg class="icon-container-school__icon-school icon-school">
                        <use xlink:href="#icon-school"></use>
                    </svg>
                </div>
                <p class="education-school__copy">
                    Angehende Promotion - Medieninformatik</br>
                    Master Sience - Medieninformatik
                </p>
            </div>
            <div class="education__work education-work">
                <div class="education-work__icon-container icon-container-work">
                    <svg class="icon-container-work__icon-work icon-work">
                        <use xlink:href="#icon-work"></use>
                    </svg>
                </div>
                <p class="education-work__copy">
                    Webentwickler - freiberuflich</br>
                    Webentwickler - myposter
                </p>
            </div>
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