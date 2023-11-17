<script>
import MainHero from './partials/MainHero.vue';
import MainSqGallery4 from './partials/MainSqGallery4.vue';
import MainBgGallery from './partials/MainBgGallery.vue';
import MainBanner from './partials/MainBanner.vue';
import MainDoubleBanner from './partials/MainDoubleBanner.vue';


export default {
    components: {
        MainHero,
        MainSqGallery4,
        MainBgGallery,
        MainBanner,
        MainDoubleBanner,
    },
    data() {
        return {
            prodCategories: {
                title: 'Browse by category',
                subtitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing commodi rem asperiores, ipsam vitae omnis esse ratione illum nisi quia.Libero, eum!',
                items: [
                    {
                        name: 'Bed',
                        img: 'src/img/product-9-400x400.jpg',
                        link: '#',
                        products: ['cuccia'],
                    },
                    {
                        name: 'Food',
                        img: 'src/img/product-3-400x400.jpg',
                        link: '#',
                        products: ['pappa', 'pappe', 'pappone', 'pappette', 'pappine', 'pappissime'],
                    },
                    {
                        name: 'Toys',
                        img: 'src/img/product-2-400x400.jpg',
                        link: '#',
                        products: ['palla', 'ramo', 'osso', 'ruota', 'ciabatta', 'tappeto'],
                    },
                    {
                        name: 'Transport',
                        img: 'src/img/product-4-400x400.jpg',
                        link: '#',
                        products: ['borsa', 'trasportino', 'guinzaglio'],
                    },
                ],
            },
        }
    },

}
</script>

<template>
    <MainHero />
    <MainSqGallery4 :categories="prodCategories" />
    <MainBgGallery />
    <MainBanner />
    <MainDoubleBanner />
</template>

<style lang="scss" scoped></style>