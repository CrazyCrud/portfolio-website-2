<template>
    <div class="about__resume resume">
        <div class="resume__section resume-section">
            <div class="resume-section__headline-container"><h3 class="resume-section__headline">Ausbildung</h3></div>
            <div class="resume-section__content-container resume-section-content-container">
                <div class="resume-section__content resume-section-content">
                    <div class="resume-section-content__copy">
                        <h5 class="resume-section__degree">Master of Science Medieninformatik</h5>
                        <div class="resume-section__place">Universität Regensburg, 2016</div>
                        <p class="resume-section__copy">Der Master <em>Medienformatik</em> beinhaltete Vorlesungen und Projektarbeiten zu Interaktionstechnologien, interaktive Information- und Assistenzsysteme und Projektmanagement.</p>
                    </div>
                </div>
                <div class="resume-section__content resume-section-content">
                    <div class="resume-section-content__copy">
                        <h5 class="resume-section__degree">Bachelor of Arts Medieninformatik & Informationswissenschaft</h5>
                        <span class="resume-section__place">Universität Regensburg, 2014</span>
                        <p class="resume-section__copy">Im Bachelor <em>Medienformatik</em> wurden Kurse zu Software- und Webentwicklung sowie Usability Engineering & User-Experience Design angeboten.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="resume__section resume-section">
            <div class="resume-section__headline-container"><h3 class="resume-section__headline">Arbeit</h3></div>
            <div class="resume-section__content-container resume-section-content-container">
                <div class="resume-section__content resume-section-content">
                    <div class="resume-section-content__copy">
                        <h5 class="resume-section__degree">Freiberuflicher Webentwickler</h5>
                        <span class="resume-section__place">Bis heute</span>
                        <p class="resume-section__copy">Ich untersützte die <em>Universitätsbibliothek</em> Regensburg bei Projekten zur Neugestaltung der Webpräsenz.</p>
                    </div>
                </div>
                <div class="resume-section__content resume-section-content">
                    <div class="resume-section-content__copy">
                        <h5 class="resume-section__degree">Webentwickler</h5>
                        <div class="resume-section__place">myposter GmbH, März 2017</div>
                        <p class="resume-section__copy">Bei der Firma <a href="http://myposter.de/" target="_blank">myposter</a> war ich als Webentwickler tätig.</p>
                    </div>
                </div>
                <div class="resume-section__content resume-section-content">
                    <div class="resume-section-content__copy">
                        <a class="resume-section-content__link-file" href="./static/bewerbung_resume.pdf" target="_blank">
                            <ui-button class="resume-section__button" color="default" size="normal">{{resumeButton}}</ui-button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import UiButton from 'keen-ui/lib/UiButton';

    export default {
        name: 'resume',
        components: {UiButton},
        data: function() {
            return {
                resumeButton: 'Lebenslauf herunterladen'
            }
        }
    }
</script>

<style lang="scss">
    @import "~bourbon/app/assets/stylesheets/bourbon";
    @import "~bourbon-neat/core/neat";

    @import "../../scss/base/all";

    $grid--resume: (
        columns: 1,
        gutter: 0px,
    );

    $grid-resumme__content: (
        columns: 1,
        gutter: 20px
    );

    $grid--resume--desktop: (
        columns: 4,
        grutter: 20px,
        media: "(min-width: #{$mq-1200} )"
    );

    $grid-resumme__content--desktop: (
        columns: 3,
        gutter: 20px,
        media: "(min-width: #{$mq-1200})"
    );

    .resume {
         font-size: 1rem;
    }

    .resume-section {
        @include grid-container;

        margin-bottom: modular-scale(2);

        @include grid-media($grid--resume--desktop) {
            margin-left: -20px;
            margin-right: -20px;
        }
    }

    .resume-section {
    &__button {
        margin-top: modular-scale(3);
     }
        &__headline-container, &__content-container {
            @include grid-column(1, $grid--resume);
         }

        &__headline-container, &__content-container {
            @include grid-media($grid--resume--desktop) {
                @include grid-column(1);
            }
        }

        &__content-container {
            @include grid-media($grid--resume--desktop) {
                @include grid-column(3);
            }


         }

        &__headline {
            margin-top: 0;
            margin-bottom: modular-scale(1);
             $unitless: modular-scale(1)/1em;
             font-size: $unitless + rem;
            font-weight: 300;
         }

        &__content {
            @include grid-collapse($grid-resumme__content);
            @include grid-container($grid-resumme__content);

            margin-bottom: modular-scale(3) - modular-scale(-4);
         }

        &__degree {
            margin-top: 0;
            margin-bottom: modular-scale(-2);
            text-transform: uppercase;
             font-size: modular-scale(1) - modular-scale(-3);
             margin-bottom: 0;
         }

         &__place {
                color: $grey--medium;
              display: inline-block;
              margin-top: modular-scale(-3);
                font-size: modular-scale(1) - modular-scale(-3);
          }

          &__copy {
                margin-top: modular-scale(-1);
                line-height: 1.5;
                font-size: modular-scale(1) - modular-scale(-3);
           }

           &__date {
                display: inline-block;
                margin-top: modular-scale(-3);
                font-size: modular-scale(1) - modular-scale(-3);

                @media screen and (min-width: $mq-1200) {
                    text-align: center;
                }
            }
    }

    .resume-section-content {
        &__copy {
            @include grid-column(1, $grid-resumme__content);

            @include grid-media($grid-resumme__content--desktop) {
                @include grid-column(3);
            }
         }

    &__link-file{
        text-decoration: none;

        &:visited {
             text-decoration: none;
         }
     }

         &__date {
            color: $grey--medium;
            @include grid-column(1, $grid-resumme__content);

            @include grid-media($grid-resumme__content--desktop) {
                @include grid-column(1);
            }
          }
    }
</style>