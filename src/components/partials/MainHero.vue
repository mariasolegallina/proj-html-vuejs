<script>

export default {
    data() {
        return {
        }
    },
}
</script>

<template>
    <div class="hero-section">
        <div class="hero__top">
            <div class="container">
                <div class="col">
                    <font-awesome-icon class="icon" icon="fa-regular fa-map" />
                    <span><b>International</b> Shipping Services</span>
                </div>
                <div class="col">
                    <font-awesome-icon class="icon" icon="fa-regular fa-map" />
                    <span><b>International</b> Shipping Services</span>
                </div>
                <div class="col">
                    <font-awesome-icon class="icon" icon="fa-regular fa-map" />
                    <span><b>International</b> Shipping Services</span>
                </div>
            </div>
        </div>
        <div class="hero__center">
            <div class="container">
                <h2>testo</h2>
            </div>
        </div>
        <div class="hero__bottom">
            <div class="container"></div>
        </div>
    </div>
</template>
  
<style lang="scss" scoped>
@use 'src/style/partials/variables.scss' as *;
@import 'src/style/partials/mixins.scss';

.hero-section {
    color: $bright;
    background-color: $dark-green;
}

.icon {
    font-size: 10px;
    margin-right: 5px;
}

.hero__top {
    @include flex-center;
    background-image: url('src/img/bg-transparent-3.png');
    background-repeat: repeat;
    min-height: 60px;

    .container {
        @include flex-center;
        gap: 20px;

        span {
            @include txt-1;
        }
    }
}

.hero__center {
    @include flex-center;
    background-image: url('src/img/banner-5-2x-scaled.jpg');
    background-size: cover;

    .container {
        padding-top: 200px;
        padding-bottom: 200px;
    }
}
</style>