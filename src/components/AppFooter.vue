<script>

export default {
    data() {
        return {
        }
    },
}
</script>

<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col">
                    <img src="src/img/mobile-light-pet-logo-2x-400x105.png" alt="">
                    <div class="address">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias impedit explicabo.

                    </div>
                </div>
                <div class="col">2</div>
                <div class="col">3</div>
                <div class="form">4</div>
            </div>
        </div>
        <div class="container">
            <nav>
                <ul class="footer-menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Home</a></li>

                </ul>
            </nav>

        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use 'src/style/partials/variables.scss' as *;
@import 'src/style/partials/mixins.scss';

footer {
    color: $bright;
    background-color: $dark-green;
    padding: 120px 0;
}

.row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 54px;

    .col {
        @include flex-col;
        gap: 30px;
    }
}

.footer-menu {
    @include flex-center;

    li {
        @include menu-txt;
        padding: 12px;
    }

    li:hover {
        color: $bright;
    }
}
</style>