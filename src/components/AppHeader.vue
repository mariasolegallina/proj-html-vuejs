<script>
import HeaderTop from './partials/HeaderTop.vue';
import HeaderNav from './partials/HeaderNav.vue';

export default {
    components: {
        HeaderTop,
        HeaderNav,
    },
    data() {
        return {
            menuItems: [
                {
                    name: "Home",
                    arrow: true
                },
                {
                    name: "Shop",
                    arrow: true
                },
                {
                    name: "About",
                    arrow: false
                },
                {
                    name: "Blog",
                    arrow: false
                },
                {
                    name: "Contact",
                    arrow: false
                },
                {
                    name: "Shop by brand",
                    arrow: true
                }
            ],

        }
    },
}
</script>

<template>
    <header>
        <HeaderTop />
        <div class="header-nav">
            <HeaderNav :headerMenu="menuItems" />
        </div>
    </header>
</template>

<style lang="scss">
@use 'src/style/partials/variables.scss' as *;

.header-nav {
    border-top: 1px solid $grey2;
}
</style>