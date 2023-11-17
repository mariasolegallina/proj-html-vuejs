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
        <div class="container-fluid">
            <div class="banners-cont">
                <div class="banner b1">
                    <h2>find the best aminal supplies</h2>
                    <h3>Popular accessories</h3>
                    <button>View all toys accessories</button>
                </div>
                <div class="banner b2">
                    <h2>find the best aminal supplies</h2>
                    <h3>New food arrival</h3>
                    <button>View all food products</button>
                </div>
            </div>
            <div class="bg-icons">
                <ul class="container icons">
                    <li><font-awesome-icon class="icon" icon="fa-regular fa-map" />
                        <div class="text"> Find stores near you</div>
                    </li>
                    <li><font-awesome-icon class="icon" icon="fa-regular fa-map" />
                        <div class="text"> Find stores near you</div>
                    </li>
                    <li><font-awesome-icon class="icon" icon="fa-regular fa-map" />
                        <div class="text"> Find stores near you</div>
                    </li>
                    <li><font-awesome-icon class="icon" icon="fa-regular fa-map" />
                        <div class="text"> Find stores near you</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use 'src/style/partials/variables.scss' as *;
@import 'src/style/partials/mixins.scss';

.banners-cont {
    display: flex;

    .b1 {
        background-image: url(src/img/banner-8-2x.jpg);
    }

    .b2 {
        background-image: url(src/img/banner-9-2x.jpg);
    }

    .banner {
        color: $bright;
        background-size: cover;
        padding: 140px 0;
        @include flex-col;
        flex-grow: 1;
        gap: 50px;
        align-items: center;
        text-align: center;

        h2 {
            @include title-1-uppercase
        }

        h3 {
            @include title-2
        }

        button {
            @include bright-btn;
        }
    }
}

.bg-icons {
    background-color: $dark-green;
    @include bg-green-pattern;
}

.icons {
    color: $bright;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 54px;

    li {
        @include flex-col;
        align-items: center;
        justify-content: center;
        gap: 14px;
        aspect-ratio: 1 / 1;

        .icon {
            font-size: 40px;
        }

        .text {
            @include txt-1;
        }
    }
}
</style>