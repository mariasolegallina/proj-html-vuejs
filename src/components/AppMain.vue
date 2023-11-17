<script>
import MainHero from './partials/MainHero.vue';
import MainSqGallery4 from './partials/MainSqGallery4.vue';
import MainBgGallery from './partials/MainBgGallery.vue';
import MainBanner from './partials/MainBanner.vue';
import MainDoubleBanner from './partials/MainDoubleBanner.vue';
import MainSqGallery3 from './partials/MainSqGallery3.vue';


export default {
    components: {
        MainHero,
        MainSqGallery4,
        MainBgGallery,
        MainBanner,
        MainDoubleBanner,
        MainSqGallery3,
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
            productsInfo: {
                title: 'New products arrival',
                subtitle: 'Latest products',
                items: [
                    {
                        name: 'Colored Bed',
                        img: 'src/img/newarrival/product-8-400x400.jpg',
                        price: '$18.00',
                        newPrice: ''
                    },
                    {
                        name: 'Colorful ball set',
                        img: 'src/img/newarrival/product-2-400x400.jpg',
                        price: '$29.00',
                        newPrice: ''
                    },
                    {
                        name: 'Dog bone',
                        img: 'src/img/newarrival/product-3-400x400.jpg',
                        price: '$29.00',
                        newPrice: '$18.00'
                    },
                    {
                        name: 'Animal transport bag',
                        img: 'src/img/newarrival/product-4-400x400.jpg',
                        price: '$29.00',
                        newPrice: ''
                    },
                    {
                        name: 'Animal transport cage',
                        img: 'src/img/newarrival/product-5-400x400.jpg',
                        price: '$35.00',
                        newPrice: ''
                    },
                    {
                        name: 'Closable cat litter',
                        img: 'src/img/newarrival/product-10-400x400.jpg',
                        price: '$16.00',
                        newPrice: ''
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
    <MainSqGallery3 :newProducts="productsInfo" />
</template>

<style lang="scss" scoped></style>