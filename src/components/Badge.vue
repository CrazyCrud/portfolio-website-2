<template>
    <div class="skill-badge">
        <div class="top">
            <div class="ring"></div>
            <div class="ring"></div>
            <div class="ring"></div>
        </div>
        <div class="text">{{title}}</div>
        <div class="bottom">
            <div class="ring"></div>
            <div class="ring"></div>
            <div class="ring"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'badge',
        props: ['title']
    }
</script>

<style lang="scss">
    @import "~bourbon/app/assets/stylesheets/bourbon";
    @import "~bourbon-neat/core/neat";

    @import "../scss/base/all";

    $circleWidth: 80px;

    .skill-badge {
        width: ($circleWidth)*2;
        margin: 0 auto;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    .top,
    .bottom {
        height: 60px;
        overflow: hidden;
        position: relative;
        width: $circleWidth;
        margin: 0 auto;
            .ring {
                border-radius: 100%;
                position: absolute;
                width: $circleWidth;
                height: $circleWidth;
                border: 3px solid #fff;
                border-width: 8px;
                background-color:  $black;
            }
            .ring:nth-child(2) {
                 border-width: 4px;
                 width: ($circleWidth)-16;
             }
            .ring:nth-child(3) {
                 border-width: 2px;
                 width: ($circleWidth)-31;
            }
    }
    .top {
        .ring:nth-child(1) {
             top: 0;
             left: 0;
         }
        .ring:nth-child(2) {
             top: 10px;
             left: 8px;
         }
        .ring:nth-child(3) {
             top: 20px;
             left: 16px;
        }
    }

    .bottom {
        .ring:nth-child(1) {
             bottom: 0;
             left: 0;
         }
        .ring:nth-child(2) {
             bottom: 10px;
             left: 8px;
         }
        .ring:nth-child(3) {
             bottom: 20px;
             left: 16px;
        }
    }

    .text {
        text-align: center;
        text-transform: uppercase;
        font-family: 'Raleway', sans-serif;
        font-size: 20px;
        font-weight: 900;
        color: $black;
        height: 55px;
        vertical-align: middle;
        display: table-cell;
        width: ($circleWidth)*2;
        position: relative;
        left: 7px;
        letter-spacing: 14px;
    }
    }
</style>