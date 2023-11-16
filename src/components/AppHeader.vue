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
        <HeaderNav />
    </header>
</template>

<style lang="scss"></style>