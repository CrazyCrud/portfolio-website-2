<template>
    <footer class="main-footer">
        <div class="main-footer__logo">
            (づ￣3￣)づ
        </div>
        <div class="main-footer__content">
            <ul class="main-footer__menu main-footer-menu">
                <li v-for="menuItem in menuItems" class="main-footer-menu__item main-footer-menu-item">
                    <router-link :to="menuItem.link" class="main-footer-menu-item__link">{{menuItem.text}}</router-link>
                </li>
            </ul>
            <ul class="main-footer__social main-footer-social">
                <li class="main-footer-social__item"><a href="javascript:void(0)">
                    <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/facebook-logo-circle.png" alt="Facebook">
                </a>
                </li>
                <li class="main-footer-social__item"><a href="javascript:void(0)">
                    <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/twitter-logo-circle.png" alt="Twitter">
                </a>
                </li>
                <li class="main-footer-social__item">
                    <a href="javascript:void(0)">
                        <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/youtube-logo-circle.png" alt="YouTube">
                    </a></li>
            </ul>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'main-footer',
        data: function () {
            return {
                menuItems: [
                    {
                        link: "/was-ich-biete",
                        text: "Was ich biete"
                    },
                    {
                        link: "/ueber-mich",
                        text: "Über mich"
                    },
                    {
                        link: "/projekte",
                        text: "Projekte"
                    },
                    {
                        link: "/kontakt",
                        text: "Kontakt"
                    }
                ]
            }
        }
    }
</script>

<style lang="scss">
    @import "~bourbon/app/assets/stylesheets/bourbon";
    @import "~bourbon-neat/core/neat";

    @import "../scss/base/all";

    $base-spacing: 1.5em !default;
    $action-color: $primary-color--light !default;
    $medium-screen: 40em !default;
    $large-screen: 53.75em !default;
    $footer-background: $primary-color--medium;
    $footer-color: $white;
    $footer-link-color: $white;
    $footer-disclaimer-color: transparentize($footer-color, 0.6);

    .main-footer {
        background: $footer-background;
        display: inline-block;
        padding: $base-spacing;
        width: 100%;

        &__content {
            display: flex;
            align-items: center;
            justify-content: space-between;
         }

        &__logo {
            margin-bottom: 1em;
            margin-right: 1em;
            text-align: center;
        color: $white;
         /*
            @include media($large-screen) {
                float: left;
                margin-bottom: 0;
                }
                */
        }

        &__menu {
            line-height: 1.5em;
            margin: 0 0 1em 0;
            padding: 0;

            /*
            @include media($large-screen) {
                float: left;
                line-height: 1.8em;
                margin-bottom: 0;
                margin-left: 1em;
            }
            */
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

            img {
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
</style>