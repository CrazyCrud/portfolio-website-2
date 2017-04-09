<template>
    <div class="page skills">
        <h3 class="page__headline skills__headline"></h3>
        <div class="skills__skill">
            <h4 class="skill__headline"></h4>
            <ul></ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'skills',
        data: function() {
            return {
                skills: [
                    {
                        title: `Webdesign`,
                        copy: ``
                    }
                ]
            }
        }
    }
</script>

<style lang="scss">
    @import "~bourbon/app/assets/stylesheets/bourbon";
    @import "~bourbon-neat/core/neat";
</style>