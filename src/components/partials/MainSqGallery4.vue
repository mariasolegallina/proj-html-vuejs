<script>

export default {
    props: ['categories'],
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
                <div class="title">{{ categories.title }}</div>
                <div class="subtitle">{{ categories.title }}</div>
            </div>
            <div class="products">
                <div v-for="(category, index) in categories.items" :key="index" class="col">
                    <figure><a :href="category.link">
                            <img :src="category.img" alt="">
                        </a>
                    </figure>
                    <h6 class="category"><a :href="category.link">{{ category.name }} ({{ category.products.length }})</a>
                    </h6>
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

.products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;

    .col {

        .figure {
            aspect-ratio: 1;

            img {
                object-fit: cover;
            }
        }

        .category {
            @include txt-2;
            text-align: center;
            padding: 16px;
        }

    }
}
</style>