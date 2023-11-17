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
            <div class="text">
                <div class="title">Browse by category</div>
                <div class="subtitle">Lorem ipsum dolor sit, amet consectetur adipisicing commodi rem asperiores, ipsam
                    vitae omnis esse ratione illum nisi quia. Libero, eum!</div>
            </div>
            <div class="products">
                <div class="col">
                    <figure>
                        <img src="src/img/product-9-400x400.jpg" alt="">
                    </figure>
                </div>
                <div class="col">
                    <figure>
                        <img src="src/img/product-9-400x400.jpg" alt="">
                    </figure>
                </div>
                <div class="col">
                    <figure>
                        <img src="src/img/product-9-400x400.jpg" alt="">
                    </figure>
                </div>
                <div class="col">
                    <figure>
                        <img src="src/img/product-9-400x400.jpg" alt="">
                    </figure>
                </div>
            </div>

        </div>
    </div>
</template>
  
<style lang="scss" scoped>
@use 'src/style/partials/variables.scss' as *;
@import 'src/style/partials/mixins.scss';

.container {
    padding-top: 54px;
    padding-bottom: 54px;
}

.text {
    @include flex-col;
}

.products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;

    .figure {
        aspect-ratio: 1;
    }
}
</style>