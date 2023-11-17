<script>

export default {
    data() {
        return {
        }
    },
}
</script>

<template>
    <div class="section">
        <div class="container">
            <h2>find the best aminal supplies</h2>
            <h3>New arrivals weekly</h3>
            <button>Learn more about us</button>
        </div>
    </div>
</template>
  
<style lang="scss" scoped>
@use 'src/style/partials/variables.scss' as *;
@import 'src/style/partials/mixins.scss';

.container {
    color: $bright;
    background-image: url(src/img/banner-3-2x-scaled.jpg);
    background-size: cover;
    padding-top: 170px;
    padding-bottom: 150px;
    @include flex-col;
    gap: 50px;
    align-items: center;
    text-align: center;

    h2 {
        @include title-1-uppercase
    }

    h3 {
        @include title-1
    }

    button {
        @include bright-btn;
    }
}
</style>