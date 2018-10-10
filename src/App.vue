<template>
  <div id="app">
    <div class="grid-container">
      <Header class="grid-item" />
      <Filters class="filter grid-item"/>
      <Footer  id="footer"/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Filters from './components/Filters.vue'

export default {
  name: 'app',
  components: {
    Header,
    Footer,
    Filters
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
}

#footer{
position:absolute;
   bottom:0;
   width:100%;
   height:60px;   /* Height of the footer */
   background-color:  rgb(201, 209, 211);
}
.grid-container {
  display: grid;
  grid-column-gap: 50px;
  grid-row-gap: 50px;
  grid-template-columns: 2;
  padding: 10px;
}
.grid-item {
  padding: 20px;
  text-align: center;
}
.filter{
  margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%)
}
</style>
