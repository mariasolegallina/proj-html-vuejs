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
                    <img src="src/img/dark-pet-logo.png" alt="" class="logo">
                </div>
                <div class="col">
                    <input type="search">
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

.page-header {
    background-color: #3161e0;
    color: white;
    padding: 14px 0;
}

.header-top {
    max-height: 70px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;

}

.header-info {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
        display: block;
        max-height: fit-content;
        height: auto;
    }
}
</style>