<template>
    <div id="app">
        <Header/>
        <router-view></router-view>
        <Footer id="footer" :author="author"/>
       <!-- <img alt="Renty logo" src="./assets/Fondo.jpg">-->
    </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Header,
    Footer
  },
  data: function(){
      return {
          author: "Vue team"
      }
  }
};
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  width: 100%;
}
</style>
