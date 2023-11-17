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
        <!-- hero top -->
        <div class="hero__top">
            <div class="container">
                <div cla ss="col">
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
        <!-- hero center -->
        <div class="hero__center">
            <div class="container">
                <div class="text-container">
                    <h2>find the best aminal supplies</h2>
                    <h3>We know animals are a part of your family, let us help take care of them.</h3>
                    <button>Learn more about us</button>
                </div>
            </div>
        </div>
        <!-- hero bottom -->
        <div class="hero__bottom">
            <div class="container">
                <img src="src/img/food-transparent-5-400x223.png" alt="">
                <div class="text-container">
                    <p class="text"><b>Get 25$ OFF your first purchase of our homemade pet food!</b></p>
                    <a href="#" class="link">Visit the shop</a>
                </div>
            </div>
        </div>
    </div>
</template>
  
<style lang="scss" scoped>
@use 'src/style/partials/variables.scss' as *;
@import 'src/style/partials/mixins.scss';

.hero-section {
    color: $bright;
    background-color: $dark-green;
    margin-bottom: 54px;
}

.icon {
    font-size: 10px;
    margin-right: 5px;
}

.hero__top,
.hero__bottom {
    @include bg-green-pattern;
}

.hero__top {
    padding: 20px 0;

    .container {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;

        span {
            @include txt-1;
        }
    }
}

.hero__center {
    background-image: url('src/img/banner-5-2x-scaled.jpg');
    background-size: cover;

    .container {
        padding-top: 200px;
        padding-bottom: 200px;

        .text-container {
            @include flex-col;
            align-items: flex-start;
            max-width: 50%;
            gap: 50px;

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
    }
}

.hero__bottom {
    .container {
        display: flex;
        justify-content: center;
        align-items: end;

        img {
            width: 140px;
            // vertical-align: middle;
        }

        .text-container {
            @include txt-2;
            @include flex-center;
            gap: 15px;
            padding: 60px;

            .link {
                text-decoration: underline;
            }
        }

    }
}
</style>