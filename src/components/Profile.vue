<template>
    <div v-if="user">
        <h1>Bienvenido</h1>
        <img :src="user.photoURL" width="100"> <br>
        <h3>{{user.displayName}}</h3>
        <p>{{user.email}}</p>
        <button @click="logOut">Cerrar sesión</button>
    </div>
</template>

<script>
    import auth from './../services/auth'

    export default {
        name: 'profile',
        computed: {
            user() {
                return this.$store.getters['user/user']
            }
        },
        methods: {
            logOut() {
                auth.logout()
            }
        }
    }
</script>

<style scoped>

</style>