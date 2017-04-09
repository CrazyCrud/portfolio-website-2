<template>
    <section class="main-section education">
        <div class="main-section__container education__container education-container">
            <h2 class="main-section__headline education__headline">{{educationHeadline}}</h2>
            <div class="education__school education-school">
                <div class="education-school__icon-container education-icon-container education-container__icon-container icon-container-school">
                    <svg class="icon-container-school__icon-school icon-school education-icon-container__icon">
                        <use xlink:href="#icon-school"></use>
                    </svg>
                </div>
                <dl class="education-container__copy education-school__copy">
                    <dt><strong>Angehende Promotion</strong></dt>
                    <dd>Medieninformatik</dd>
                    <dt><strong>Master Sience</strong></dt>
                    <dd>Medieninformatik</dd>
                </dl>
            </div>
            <div class="education__work education-work">
                <div class="education-work__icon-container education-container__icon-container education-icon-container icon-container-work">
                    <svg class="icon-container-work__icon-work icon-work education-icon-container__icon">
                        <use xlink:href="#icon-work"></use>
                    </svg>
                </div>
                <dl class="education-container__copy education-work__copy">
                    <dt><strong>Freiberuflich</strong></dt>
                    <dd>Webentwickler</dd>
                    <dt><strong>myposter</strong></dt>
                    <dd>Webentwickler</dd>
                </dl>
            </div>
            <router-link to="/ueber-mich" class="button-link">
                <ui-button color="default" size="normal">{{educationButton}}</ui-button>
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
    @import "../../scss/components/all";
    @import "../../scss/layout/all";
    @import "../../scss/utils/mixins";
    @import "../../scss/utils/functions";

    .education-container {
        &__icon-container {
            text-align: center;
        display: none;
         }

         &__copy {
              width: 100%;
              overflow: hidden;
              padding: 0;
              margin: 0;
                font-size: modular-scale(-1);

                dt {
                    float: left;
                    width: 50%;
                    margin: 0;
                    margin-top: modular-scale(-1);
                    padding-right: modular-scale(-5);
                    text-align: right;
                }
                dd {
                    float: left;
                    width: 50%;
                    padding-left: modular-scale(-5);
                    margin: 0;
                    margin-top: modular-scale(-1);
                }
          }
    }

    .education-school {
        margin-bottom: modular-scale(3);
    }

    .education-icon-container {
        &__icon {
            fill: $primary-color--medium;
         }
    }
</style>