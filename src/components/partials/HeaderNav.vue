<script>

export default {
    data() {
        return {
        }
    },
}
</script>

<template>
    <nav class="container">
        <ul class="nav-menu">
            <li class="nav-menu__item"><a href="#">Home<font-awesome-icon class="arrow" icon="angle-down" /></a></li>
            <li class="nav-menu__item"><a href="#">Shop<font-awesome-icon class="arrow" icon="angle-down" /></a></li>
            <li class="nav-menu__item"><a href="#">About</a></li>
            <li class="nav-menu__item"><a href="#">Blog</a></li>
            <li class="nav-menu__item"><a href="#">Contact</a></li>
            <li class="nav-menu__item"><a href="#">Shop by brand<font-awesome-icon class="arrow" icon="angle-down" /></a>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
@use 'src/style/partials/variables.scss' as *;
@import 'src/style/partials/mixins.scss';


.nav-menu {
    display: flex;
    @include flex-center;

    a {
        @include menu-txt;
        display: block;
        padding: 0 16px;
        line-height: 60px;

        .arrow {
            margin: 0 4px;
            font-size: 10px;
        }
    }

    a:hover {
        color: $dark;
    }
}
</style>
