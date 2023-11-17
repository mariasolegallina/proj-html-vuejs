<script>

export default {
    data() {
        return {
        }
    },
}
</script>

<template>
    <div class="container">
        <div class="header-info">
            <img class="logo" src="src/img/dark-pet-logo.png" alt="">
            <div class="searchbar">
                <input type="search">
                <font-awesome-icon icon="magnifying-glass" class="search-icon" />
            </div>
            <h5 class="text"><span>Questions?</span> Call us: 123.456.7890</h5>
        </div>
        <div class="icons">
            <font-awesome-icon icon="basket-shopping" />
            <font-awesome-icon icon="user" />
        </div>
    </div>
</template>
  
<style lang="scss" scoped>
@use 'src/style/partials/variables.scss' as *;
@import 'src/style/partials/mixins.scss';

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @include menu-txt;

    .header-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-basis: 75%;
        padding: 12px;

        .searchbar {
            position: relative;
            display: flex;
            align-items: center;
            min-width: 30%;

            input {
                @include input;
                background-color: $grey2;
                max-widthth: 370px;
            }

            .search-icon {
                position: absolute;
                left: 10px;
            }
        }

        .text {
            span {
                font-weight: 800;
            }
        }
    }

    .icons {
        @include flex-center;
        gap: 15px;
    }
}
</style>