<template>
    <div class="fb-app">
        <div class="fb-app-content">
            <div class="fb-app-logos-container">
                <img class="fb-app-logo" src="./assets/fusebox-logo.png" />
                <img class="fb-app-heart" src="./assets/heart.png" />
                <img class="fb-app-logo" src="./assets/vue-logo.png" />
            </div>
            <h1 class="fb-app-title title">{{ msg }}</h1>
            <input type="text" class="fb-app-input input" v-model="msg" />
        </div>
    </div>
</template>

<script>

    export default {
        name: 'app',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App with FuseBox'
            }
        }
    }

</script>
