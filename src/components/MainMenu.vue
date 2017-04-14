<template>
    <nav>
        <div class="main-menu">
            <div class="main-menu__header">
                    <div class="main-menu__branding main-menu-branding">
                        <router-link class="main-menu-branding__link" to="/">Constantin</br>Lehenmeier</router-link>
                    </div>
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
        </div>
        <div class="main-menu-overlay" v-bind:class="{'main-menu-overlay--opened': isOpen}">
            <ul class="main-menu__items main-menu-items main-menu-items--mobile">
                <li v-for="menuItem in menuItems" class="main-menu__item main-menu-item">
                    <router-link :to="menuItem.link" v-on:click.native="isOpen = false">{{menuItem.text}}</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    import Global from '../base/Global.js';

    export default {
        name: 'main-menu',
        data: function () {
            return {
                isOpen: false,
                menuItems: Global.menuItems
            }
        },
        watch: {
          '$route': function(newRoute, oldRoute) {
              this.isOpen = false;
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
        padding: 0 modular-scale(1);
        background-color: white;
        z-index: 1000;

        &__header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
             height: 80px;
         }

        &__branding {
             padding: .2rem .4rem;
             border: 2px solid black;
             background: $black;
             transition: background-color 0.3s;
             $unitless: modular-scale(-1)/1em;
             font-size: $unitless + rem;
            a {
                color: #9ee6cf !important;
            }

            &:hover {
                 background-color: $white--light;
             }
        }

        &__icon {

        }

         &__items {
                list-style: none;
                padding: 0;
                margin: 0;
          }

    }

    .main-menu-overlay {
        position: fixed;
        top: 0;
        left: 100%;
        width: 100%;
        height: 100%;
        z-index: 100;
        background-color: $white;
        transition: all 0.2s;

    @include breakpoint(small) { display: none; };

        &--opened {
            left: 0;
         }
    }

    .main-menu-items {
        &--mobile {
            @include breakpoint(small) { display: none; };
            position: absolute;
            left: 50%;
            transform: translate(-50%, 50%);
            font-size: modular-scale(2);

            .main-menu-item {
                margin-top: modular-scale(2);

                a {
                    color: $black;
                    text-decoration: none;
                    &:visited {
                        text-decoration: none;
                     }
                }
            }
         }

         &--desktop {
            display: none;
            @include breakpoint(small) { display: flex; };

            .main-menu-item {
                padding: modular-scale(-2) modular-scale(-1);

                a {
                    position: relative;
                    color: $grey--medium !important;
                }

                a.router-link-active {
                    color: $black !important;
                }

                a:hover {
                    &:after {
                         transform: translateY(0px);
                         opacity: 1;
                     }
                }

                a:after {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    width: 100%;
                    height: 4px;
                    background: rgba(0,0,0,0.1);
                    content: '';
                    opacity: 0;
                    transition: opacity 0.3s, transform 0.3s;
                    transform: translateY(10px);
                }
            }
          }
    }

    .main-menu-item {
        a {
            text-decoration: none;
        }
        a:visited {
            color: inherit;
        }
    }

    .main-menu-branding {
        &__link {
        text-decoration: none;
        text-transform: uppercase;
         }
    }

    .main-menu-icon {
        position: relative;
        width: 34px;
        height: 24px;
        cursor: pointer;
        @include breakpoint(small) { display: none; };

        span {
            display: block;
            position: absolute;
            left: 0;
            width: 100%;
            height: 6px;
            border-radius: 9px;
            background-color: $black;
        }

        span:nth-child(1) {
            top: 0;
            transform-origin: left center;
            transition: all 0.2s;
        }

        span:nth-child(2) {
            top: 11px;
            transition: all 0.1s;
        }

        span:nth-child(3) {
            top: 23px;
            transform-origin: left center;
            transition: all 0.2s;
        }

        &--opened {
            span:nth-child(1) {
                transform: rotate(45deg);
                top: -2px;
                left: 3px;
            }

            span:nth-child(2) {
                opacity: 0;
            }

            span:nth-child(3) {
                transform: rotate(-45deg);
                top: 22px;
                left: 3px;
            }
         }
    }
</style>