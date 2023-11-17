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
                    <img class="logo" src="src/img/mobile-light-pet-logo-2x-400x105.png" alt="">
                    <div class="address">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias impedit explicabo. Alias impedit
                        explicabo.

                    </div>
                </div>
                <div class="col">
                    <div class="title">Shop by brand</div>
                    <ul>
                        <li><a href="#">Bed</a></li>
                        <li><a href="#">Bed</a></li>
                        <li><a href="#">Bed</a></li>
                        <li><a href="#">Bed</a></li>
                    </ul>
                </div>
                <div class="col">
                    <div class="title">Useful links</div>
                    <ul>
                        <li><a href="#">Bed</a></li>
                        <li><a href="#">Bed</a></li>
                        <li><a href="#">Bed</a></li>
                        <li><a href="#">Bed</a></li>
                    </ul>
                </div>
                <div class="col form">
                    <div class="title">Subscribe to our newsletter</div>
                    <input type="text">
                    <button>Subscribe</button>
                </div>
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

        .title {
            @include txt-2;
            line-height: 28px;
        }

        .logo {
            max-width: 80%;

        }

        .address {
            @include txt-1;
            line-height: 24px;
        }

        ul {
            @include txt-1;
            @include flex-col;
            gap: 26px;
        }
    }

    .form {
        @include bg-mgreen-pattern;
        border-radius: 6px;
        padding: 28px 34px;

        input {
            @include input;
        }

        button {
            @include lgreen-btn;
        }
    }
}

.footer-menu {
    @include flex-center;

    li {
        @include menu-txt;
        padding: 12px;

        &:hover {
            color: $bright;
        }
    }
}
</style>