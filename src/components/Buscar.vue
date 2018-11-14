<template>
<div  class="container">
    
      <p class="h1">Renty</p>
     <p class="h2">Consigue tu auto al mejor precio. Reserva ya en Renty.com</p>
  
        <div class="panel-defoutl">
        <form name="Form-search">
            <div class="form-row">
                <div class="form-group col-md-6">
                   <label for="typecar">Tipo de vehiculo</label>
                        <select id="typecar" class="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                       </select>
                </div>
                    <div class="form-group col-md-6">
                         <label for="pickup-point">Pickup point</label>
                        <select id="pickup-point" class="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                       </select>
                    </div>
                    <div class="form-group col-md-6">
                         <label for="date-start">Fecha inicio</label>
                            
                                <input id='date-start' type="date" class="form-control">
                            
                    </div>
                    <div class="form-group col-md-6">
                        <label for="date-finish">Fecha fin</label>                            
                        <input id='date-finish' type="date" class="form-control">                            
                    </div>
            </div>
        </form>
          <button id="btn-Buscar" type="button" class="btn btn-primary">Buscar</button>
        </div>
  </div>



   
</template>

<script>



export default {
  name: "Buscar",
  components: {},
  methods: {
    SearchRenty: function() {
      
    },
  }
  
};
</script>

<style scoped>
.container {
  width: 600px;
  text-align: left;
  background-color: blue;
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
  opacity: 0.8;
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
}

.container {
  font-family: "Raleway", sans-serif;
  width: 60%;
  background: #12223d;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  margin-top: 120px;
  margin-bottom: 80px;
  background-color: #12223d; /* o background-color:#000000; */
  opacity: 0.7;
  color: #fff;
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
