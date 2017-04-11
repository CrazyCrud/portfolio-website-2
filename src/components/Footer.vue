<template>
    <footer class="main-footer">
        <div class="main-footer__content-container">
            <svg class="main-footer__triangle">
                <use xlink:href="#triangle"></use>
            </svg>

            <div class="main-footer__content">
                <ul class="main-footer__menu main-footer-menu">
                    <li v-for="menuItem in menuItems" class="main-footer-menu__item main-footer-menu-item">
                        <router-link :to="menuItem.link" class="main-footer-menu-item__link">{{menuItem.text}}</router-link>
                    </li>
                </ul>
                <ul class="main-footer__social main-footer-social">
                    <li class="main-footer-social__item main-footer-social-item"><a href="javascript:void(0)">
                        <svg class="main-footer-social-item__icon">
                            <use xlink:href="#icon-linkedin"></use>
                        </svg>
                    </a>
                    </li>
                    <li class="main-footer-social__item main-footer-social-item"><a href="javascript:void(0)">
                        <svg class="main-footer-social-item__icon main-footer-social-item-icon--xing">
                            <use xlink:href="#icon-xing"></use>
                        </svg>
                    </a>
                    </li>
                </ul>
            </div>
            <div class="main-footer__logo main-footer-logo">
                (☞ﾟ∀ﾟ)☞
            </div>
        </div>
    </footer>
</template>

<script>
    import Global from '../base/Global.js';

    export default {
        name: 'main-footer',
        data: function () {
            return {
                menuItems: Global.menuItems
            }
        }
    }
</script>

<style lang="scss">
    @import "~bourbon/app/assets/stylesheets/bourbon";
    @import "~bourbon-neat/core/neat";

    @import "../scss/base/all";
    @import "../scss/utils/variables";

    $base-spacing: 1.5em !default;
    $action-color: $primary-color--light !default;
    $medium-screen: 40em !default;
    $large-screen: 53.75em !default;
    $footer-background: $primary-color--medium;
    $footer-color: $white;
    $footer-link-color: $white;
    $footer-disclaimer-color: transparentize($footer-color, 0.6);

    .main-footer {

        &__content-container {
             position: relative;
             height: $footer-height;
             background: $footer-background;
             display: inline-block;
             width: 100%;
             margin-top: modular-scale(4);
             padding-bottom: modular-scale(2);
             left: 0;
             bottom: 0;

            @media screen and (min-width: $mq-600) {
                height: $footer-height--tablet-up;
            }

            @media screen and (min-width: $mq-1200) {
                height: $footer-height--desktop-up;
            }
         }

        &__triangle {
            fill: $white;
                width: 100%;
                height: 40px;
                margin-bottom: modular-scale(3);
             }

        &__content {
            display: flex;
            align-items: center;
            justify-content: space-between;
        max-width: $mq-900;
            margin: 0 auto;
            padding: 0 modular-scale(5);
         }

        &__logo {
            margin-right: 1em;
            text-align: center;
            color: $white;
        }

        &__menu {
            line-height: 1.5em;
            margin: 0 0 1em 0;
            padding: 0;
        }

        &__secondary-items {
         /*
            @include media($large-screen) {
                float: right;
            }
            */

            li {
                font-size: 0.8em;
            }

            .main-footer-social {
                margin: 1em 0 0 0;

                /*
                @include media($large-screen) {
                    float: right;
                    margin-top: 0;
                }
                */
            }
        }
    }

    .main-footer-social {
    list-style: none;
        &__item {
             float: left;
             font-size: 1em;
             line-height: 0;
             margin: 0;
             padding-right: 0.7em;

            &:last-child {
                 padding-right: 0;
             }

            svg {
                height: 1.6em;
                opacity: 0.7;
                padding: 1px;

            &:focus,
            &:hover {
                 opacity: 1;
             }
         }
        }
    }

    .main-footer-menu-item {
        list-style: none;
        padding-right: 1em;

    /*
        @include media($large-screen) {
            display: inline;
            text-align: left;
        }
        */
        &__link {
             color: $footer-link-color;
             text-decoration: none;
         }
    }

    .main-footer-logo {
        cursor: default;
        user-select: none;
        &:hover {
             animation: bounce 1s;
         }
    }

    .main-footer-social-item {
        &__icon {
            width: 1.6em;
         }
    }

    .main-footer-social-item-icon {
        &--xing {
            width: 1.5em;
         }
    }
</style>