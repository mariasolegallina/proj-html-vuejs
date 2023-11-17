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
                    link: '#',
                    arrow: true
                },
                {
                    name: "Shop",
                    link: '#',
                    arrow: true
                },
                {
                    name: "About",
                    link: '#',
                    arrow: false
                },
                {
                    name: "Blog",
                    link: '#',
                    arrow: false
                },
                {
                    name: "Contact",
                    link: '#',
                    arrow: false
                },
                {
                    name: "Shop by brand",
                    link: '#',
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