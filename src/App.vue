<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
  data() {
    return {
      fListItems1: [
        {
          name: "Bed",
          link: '#',
        },
        {
          name: "Food",
          link: '#',
        },
        {
          name: "Toys",
          link: '#',
        },
        {
          name: "Transport",
          link: '#',
        },
      ],
      fListItems2: [
        {
          name: "My account",
          link: '#',
        },
        {
          name: "Orders",
          link: '#',
        },
        {
          name: "Checkout",
          link: '#',
        },
        {
          name: "Cart",
          link: '#',
        },
      ],
      fMenu: [
        {
          name: "Home",
          link: '#',
        },
        {
          name: "About",
          link: '#',
        },
        {
          name: "Blog",
          link: '#',
        },
        {
          name: "Contact",
          link: '#',
        },
        {
          name: "Shop",
          link: '#',
        },
      ],

    }
  }
}

</script>

<template>
  <AppHeader />
  <AppMain />
  <AppFooter :footerList1="fListItems1" :footerList2="fListItems2" :footerMenu="fMenu" />
</template>

<style lang="scss">
@use './style/general.scss';
</style>
