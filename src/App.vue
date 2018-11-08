<template>
    <div id="app">
        <Header/>
        <router-view></router-view>
        <Footer id="footer"/>
    </div>
</template>

<script>
    import Header from './components/Header.vue'
    import Footer from './components/Footer.vue'

    export default {
        name: 'app',
        components: {
            Header,
            Footer
        }
    }
</script>

<style>
    #app {
        text-align: center;
        color: #2c3e50;
    }

    #footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 60px; /* Height of the footer */
        background-color: rgb(201, 209, 211);
    }
</style>
