<template>
    <div class="fb-app">
        <div class="fb-app-content">
            <img class="fb-app-logo" src="./assets/logo.png" width="100px" />
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
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }

</script>
