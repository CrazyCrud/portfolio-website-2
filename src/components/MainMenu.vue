<template>
    <nav>
        <div class="main-menu">
            <div class="main-menu__header">
                <div class="main-menu__branding main-menu-branding"><router-link to="/">Constantin</br>Lehenmeier</router-link></div>
                    <div class="main-menu__icon main-menu-icon" v-on:click="onClickMainMenuIcon" v-bind:class="{ 'main-menu-icon--opened': isOpen}">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul class="main-menu__items main-menu-items main-menu-items--desktop">
                        <li v-for="menuItem in menuItems" class="main-menu__item main-menu-item">
                            <router-link :to="menuItem.link">{{menuItem.text}}</router-link>
                        </li>
                    </ul>
            </div>
            <transition name="transition-fade">
                <div class="main-menu__overlay main-menu-overlay" v-show="isOpen">
                    <ul class="main-menu__items main-menu-items main-menu-items--mobile">
                        <li v-for="menuItem in menuItems" class="main-menu__item main-menu-item">
                            <router-link :to="menuItem.link">{{menuItem.text}}</router-link>
                        </li>
                    </ul>
                </div>
            </transition>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'main-menu',
        data: function () {
            return {
                isOpen: false,
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
        },
        methods: {
            onClickMainMenuIcon: function() {
                this.isOpen = !this.isOpen;
            }
        }
    }
</script>

<style lang="scss">
    @import "~bourbon/app/assets/stylesheets/bourbon";
    @import "~bourbon-neat/core/neat";
    @import "../scss/base/all";
    @import "../scss/layout/all";
    @import "../scss/utils/mixins";

    .transition-fade-enter{
        opacity: 0;
    }

    .main-menu {
        box-sizing: border-box;
        position: fixed;
        display: block;
        top: 0;
        left: 0;
        width: 100%;
        padding: 0 3rem;
        background-color: white;
        z-index: 100;

        &__header {

            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
             height: 80px;

         }

        &__branding {

        }

        &__icon {

        }

         &__overlay {
        display: block;
        width: 100%;
        height: 100%;
          }

         &__items {
        list-style: none;
        padding: 0;
        margin: 0;
          }

    }

    .main-menu-items {
        &--mobile {
            @include breakpoint(small) { display: none; };
         }

         &--desktop {
            display: none;
            @include breakpoint(small) { display: flex; };

            .main-menu-item {
                padding: modular-scale(-2) modular-scale(-1);
            }
          }
    }

    .main-menu-branding {

    }

    .main-menu-icon {
        position: relative;
        width: 65px;
        height: 45px;
        cursor: pointer;
        @include breakpoint(small) { display: none; };

        span {
            display: block;
            position: absolute;
            left: 0;
            width: 100%;
            height: 10px;
            border-radius: 9px;
            background-color: $black;
        }

        span:nth-child(1) {
            top: 0;
            transform-origin: left center;
            transition: all 0.2s;
        }

        span:nth-child(2) {
            top: 18px;
            transition: all 0.1s;
        }

        span:nth-child(3) {
            top: 36px;
            transform-origin: left center;
            transition: all 0.2s;
        }

        &--opened {
            span:nth-child(1) {
                transform: rotate(45deg);
                top: -3px;
                left: 8px;
            }

            span:nth-child(2) {
                opacity: 0;
            }

            span:nth-child(3) {
                transform: rotate(-45deg);
                top: 42px;
                left: 8px;
            }
         }
    }
</style>