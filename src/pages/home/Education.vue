<template>
    <section class="main-section education">
        <div class="main-section__container education__container education-container">
            <h2 class="main-section__headline education__headline">{{educationHeadline}}</h2>
            <div class="education__school education-school">
                <div class="education-school__icon-container education-container__icon-container icon-container-school">
                    <svg class="icon-container-school__icon-school icon-school">
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
                <div class="education-work__icon-container education-container__icon-container icon-container-work">
                    <svg class="icon-container-work__icon-work icon-work">
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

    .education-container {
        &__icon-container {
            text-align: center;
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
                    padding-right: modular-scale(-2);
                    margin: 0;
                    text-align: right;
                }
                dd {
                    float: left;
                    width: 50%;
                    padding-left: modular-scale(-2);
                    margin: 0;
                }
          }
    }

    .education-school {
        margin-bottom: modular-scale(3);
    }
</style>