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
        }
    },
}
</script>

<template>
    <header>
        <HeaderTop />
        <div class="header-nav">
            <HeaderNav />
        </div>
    </header>
</template>

<style lang="scss">
@use 'src/style/partials/variables.scss' as *;

.header-nav {
    border-top: 1px solid $grey2;
}
</style>