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
        <div class="header-top">
            <div class="header-info">
                <div class="col">
                    <figure class="logo">
                        <img src="src/img/dark-pet-logo.png" alt="">
                    </figure>
                </div>
                <div class="col search-bar">
                    <div class="search-container">
                        <input type="search">
                        <font-awesome-icon icon="magnifying-glass" class="search-icon" />
                    </div>
                </div>
                <div class="col">
                    <span>Questions?</span>
                    <span>Call us: 123.456.7890</span>
                </div>
            </div>
            <div class="header-icons">
                <font-awesome-icon icon="basket-shopping" />
                <font-awesome-icon icon="user" />
            </div>
        </div>
    </div>
</template>
  
<style lang="scss" scoped>
@use 'src/style/partials/variables.scss' as *;
@import 'src/style/partials/mixins.scss';

.header-top {
    max-height: 70px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 25px 0;
}

.header-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 80%;
    gap: 10px;
    flex-grow: 1;

    .search-bar {
        // flex-grow: 1;
        display: flex;
        align-items: center;
    }

    .search-container {
        position: relative;
        display: flex;
        align-items: center;
    }

    input {
        border: 0.5px solid $grey0;
        @include input;
    }

    .search-icon {
        position: absolute;
        left: 10px;
        color: $grey0;
    }
}
</style>