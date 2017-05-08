<template>
    <div>
        <img src="./assets/logo.png" width="100px" />
        <p>{{ msg }}</p>
        <input type="text" v-model="msg" />
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
