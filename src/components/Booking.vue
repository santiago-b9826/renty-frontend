<template>
    <div>
        <div class="list-group" v-for="listCars in listBooking" :key=listCars.id >

            <h5 class="car-title">{{listCars.brand}}</h5>
            <p class="card-text">Tipo: {{listCars.type}}</p>
            <p class="card-text">Modelo: {{listCars.model}}</p>
            <p class="card-text">Precio: ${{listCars.price}}</p>
            <div class="image">
                <td><img :src="listCars.thumbnail" /></td>
            </div>
            <div class="btn-detalle">
                <button href="/List"  class="btn btn-primary"  >Detalle</button>
            </div>
        </div>
    </div>
</template>

<script>
    import auth from "../services/auth";
    import Axios from "axios";

    export default {
        name: "Booking",
        data() {
            return {
                listBooking: [],
            };
        },
        created: function() {
            auth.user().getIdToken().then(value => {
                Axios.get(`https://api.myjson.com/bins/1ekwci/?tokenId=${value}`).then(response => {
                    this.listBooking = response.data;
                });
            });
        }
    }
</script>

<style scoped>
    .list-group{
        width: 1300px;
        height: 200px;
        border-radius: 10px;
        background-color: #e8e8e9;
        margin: 1rem;
        margin-left: 8.5%;
        position: relative;
    }
    .car-title{
        margin-top: 22px;
        font-family: "Lato", sans-serif;
        font-size: 40px;
        text-align: left;
        margin-left: 15%;

    }
    .card-text{

        font-family:'Raleway', sans-serif;;
        font-size: 16px;
        text-align: left;
        margin-left: 17%;
    }
</style>