<script>

export default {
    props: ['headerMenu'],
    data() {
        return {

        }
    },
    mounted() {
        // console.log('prova', this.headerMenu)
    }
}  
</script>

<template>
    <nav class="container">
        <ul class="nav-menu">
            <li v-for="(menuItem, index) in headerMenu" :key=index class="nav-menu__item"><a href="#">{{ menuItem.name
            }}<font-awesome-icon v-if="menuItem.arrow === true" class="arrow" icon="angle-down" /></a>
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
