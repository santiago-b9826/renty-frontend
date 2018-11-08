<template>
    <div>
        <h1>Inicio sesión</h1>
        <div id="firebaseui-auth-container"></div>
    </div>
</template>

<script>
    import auth from './../services/auth'
    export default {
        name: "Login",
        mounted() {
            auth.authForm('#firebaseui-auth-container')
        }
    }
</script>

<style scoped>
    @import "../../node_modules/firebaseui/dist/firebaseui.css";
</style>