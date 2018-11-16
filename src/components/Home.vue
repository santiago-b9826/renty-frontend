<template >

   <div  class="container">     
 
    
    <p class="h1">Renty</p>
     <p class="h2">Consigue tu auto al mejor precio. Reserva ya en Renty.com</p>  
        <div class="panel-defoutl">
          <Form></Form>
          <Buscar ></Buscar>
        </div>
  </div>

</template>

<script>
 import Form from './Form.vue'
import Buscar from './Buscar.vue'


export default {
  name: "Home",
  components:{
    Buscar,
     Form
  },

  

};
</script>

<style scoped>
.container {
  width: 60%;
  height: 380px;
  text-align: left;  
  font-family: "Raleway", sans-serif; 
  background: #12223d; 
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  margin-top: 10px;
  margin-bottom: 80px;
  opacity: 0.7;
  color: #fff;
}
.contact100-form-title {
  width: 100%;
  position: relative;
  z-index: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 64px 15px 64px 15px;
  background-color: #13171b;
  opacity: 1;
}

.h1 {
  font-family: "Lato", sans-serif;
  font-size: 40px;
  color: #fff;
  line-height: 1.2;
  text-align: center;
  padding-bottom: 7px;
  opacity: 1;
  margin-top: 25px;
}

.h2 {
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  color: #fff;
  line-height: 1.5;
  text-align: center;
  opacity: 1;
}

.panel-defoutl {
  width: 93%;
  background: #12223d;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  margin: 2rem;
  margin-left: 7.5%;
}

.btn-primary {
  background-color: #2dc4bb;
  color: #fff;
  border-color: #2dc4bb;
  margin-left: 87%;
  margin-top: 5px;
  margin-bottom: 5px;

  text-align: center;
}
</style>
