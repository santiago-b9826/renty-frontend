<template>
<div>  

<div class="card" > 
<div class="container"> 
    <div class="panel-defoutl">
    <p class="h1">Renty</p>
    <p class="h2">Consigue tu auto al mejor precio. Reserva ya en Renty.com</p>
    <form name="Form-search">
            <div class="form-row">
                <div class="form-group col-md-6">
                   <label class="label" for="typecar">Tipo de vehiculo</label>
                        <select  id="typecar" class="form-control">
                        <option class="select" selected>Choose...</option>
                        <option>...</option>
                       </select>
                </div>
                    <div class="form-group col-md-6">
                         <label class="label" for="pickup-point">Pickup point</label>
                        <select id="pickup-point" class="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                       </select>
                    </div>
                    <div class="form-group col-md-6">
                        <label class="label" for="date-start">Fecha inicio</label>    
                        <input id='date-start' type="date" class="form-control">
                            
                    </div>
                    <div class="form-group col-md-6">
                        <label class="label" for="date-finish">Fecha fin</label>                            
                        <input id='date-finish' type="date" class="form-control">                            
                    </div>
            </div>
        </form>    

    <div class="btn-buscar"> <Buscar :SearchRenty="SearchRenty" ></Buscar>  </div>
         
  </div>
  </div>
</div>
<div class="list">
    <div class="list-group" v-for="carFromList in listCars" :key=carFromList.id >  
    <h5 class="car-title">{{carFromList.brand}}</h5>
    <p class="card-text">Tipo: {{carFromList.type}}</p>
    <p class="card-text">Modelo: {{carFromList.model}}</p>
    <p class="card-text">Precio: ${{carFromList.price}}</p> 
    <div class="image">
      <td><img :src="carFromList.thumbnail" /></td>
    </div>      
    <div class="btn-detalle">
      <button  class="btn btn-primary" @click="clickForDetail(carFromList)">Detalle</button>  
    </div> 
  </div>
</div>
<Details :show="showDetail" :car="specificCar"/>
</div>
</template>

<script>
import Form from "./Form.vue";
import Buscar from "./Buscar.vue";
import Axios from "axios";
import Details from "./Details.vue";
export default {
  name: "Home",
  components: {
    Buscar,
    Form,
    Details
  },
  data() {
    return {
      showDetail: false,
      specificCar: {}
    };
  },
  methods: {
    clickForDetail(car) {
      this.showDetail = !this.showDetail;
      this.specificCar = car;
    }
  }
};
</script>

<style scoped>
.container {
  height: 400px;
  text-align: left;
  margin-left: 8.5%;
  margin-top: -5px;
  font-family: "Raleway", sans-serif;
  background: #12223d;
  overflow: hidden;
  position: relative;
  color: #fff;
}

.h1 {
  font-family: "Lato", sans-serif;
  font-size: 40px;
  color: #fff;
  line-height: 1.2;
  text-align: center;
  padding-bottom: 7px;
  margin-right: 10%;
  opacity: 1;
  margin-top: 25px;
}
.h2 {
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  color: #fff;
  line-height: 1.5;
  text-align: center;
  margin-right: 10%;
  opacity: 1;
}
.btn-primary {
  width: 140px;
  background-color: #2dc4bb;
  color: #fff;
  border-color: #2dc4bb;
  margin-left: 87%;
  margin-top: 5px;
  margin-bottom: 5px;
  text-align: center;
}
.panel-defoutl {
  width: 93%;
  background: #12223d;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  margin: 1rem;
  margin-left: 35px;
}
.card {
  width: 70%;
  height: 350px;
  text-align: left;
  background-color: #12223d;
  opacity: 0.8;
  margin-top: 5px;
  margin-left: 15%;
  font-family: "Raleway", sans-serif;
  background: #12223d;
  overflow: hidden;
  color: #fff;
  border-radius: 10px;
}
.btn-buscar {
  margin-right: 6%;
}
.card-availability {
  width: 1100px;
  height: 200px;
  background-color: #12223d;
  margin-left: 6%;
  margin-bottom: 15px;
}
.list-group {
  width: 1400px;
  height: 210px;
  border-radius: 10px;
  background-color: #e8e8e9;
  margin-top: 15px;
  margin-left: 8.5%;
  position: relative;
}
.car-title {
  margin-top: 22px;
  font-family: "Lato", sans-serif;
  font-size: 40px;
  text-align: left;
  margin-left: 15%;
}
.card-text {
  font-family: "Raleway", sans-serif;
  font-size: 16px;
  text-align: left;
  margin-left: 17%;
}
.btn-detalle {
  position: absolute;
  margin-left: 900px;
  margin-bottom: 80%;
  margin-top: 80px;
}
.image {
  position: absolute;
  margin-left: 600px;
  margin-bottom: 80%;
  margin-top: 20px;
}

.list {
  margin-top: 5rem;
  margin-left: -40px;
}

.label {
  color: #fff;
  font-family: "Raleway", sans-serif;
}
.form-control {
  height: 33px;
  width: 380px;
}
.select {
  font-family: "Raleway", sans-serif;
}
</style>