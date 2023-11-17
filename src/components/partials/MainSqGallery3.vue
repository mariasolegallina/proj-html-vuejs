<script>

export default {
    props: ['newProducts'],
    data() {
        return {
        }
    },
}
</script>

<template>
    <div class="section">
        <div class="container">
            <div class="text">
                <div class="title">{{ newProducts.title }}</div>
                <div class="subtitle">{{ newProducts.subtitle }}</div>
            </div>

            <div class="new-products">
                <div v-for="(product, index) in newProducts.items" :key="index" class="col">
                    <figure><a href="#">
                            <div class="prod-img">
                                <div v-if="product.newPrice !== ''" class="sticker">Sale!</div>
                                <img :src="product.img" alt="">
                            </div>
                        </a>
                    </figure>
                    <h6 class="product-name"><a href="#">{{ product.name }}</a>
                    </h6>
                    <p class="price" v-if="product.newPrice === ''">
                        {{ product.price }}
                    </p>
                    <p v-else>
                        <span class="price-old">{{ product.price }}</span> <span class="price">{{ product.newPrice }}</span>
                    </p>
                </div>
            </div>

        </div>
    </div>
</template>
  
<style lang="scss" scoped>
@use 'src/style/partials/variables.scss' as *;
@import 'src/style/partials/mixins.scss';

.container {
    @include flex-col;
    align-items: center;
}

.text {
    @include flex-col;
    max-width: 50%;
    text-align: center;
    margin-bottom: 54px;

    .title {
        @include title-2;
    }

    .subtitle {
        @include txt-1;
    }
}

.new-products {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    row-gap: 24px;

    .col {
        text-align: center;

        .prod-img {
            position: relative;
        }

        .sticker {
            color: $bright;
            background-color: green;
            border-radius: 50%;
            padding: 4px 8px;
            position: absolute;
            top: 20px;
            left: 20px;
        }

        .figure {
            aspect-ratio: 1;

            img {
                object-fit: cover;
            }
        }

        .product-name {
            @include txt-2;
            padding: 16px 0 10px;
        }

        .price {
            @include txt-1;

            &-old {
                @include txt-1;
                color: $grey1;
                text-decoration: line-through;
            }
        }

    }
}
</style>