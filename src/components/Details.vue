<template>
<div v-if="show">
    <div>
        <img :src="car.thumbnail" :alt="`${car.brand} - ${car.model}`">
        <h3>{{car.brand}} - {{car.model}}</h3>
        <p>Tipo: {{car.type}}</p>
        <p>Precio: {{car.price}}</p>
        <article>
            <p>Rentador: {{car.rental.name}}</p>
        </article>
        <p>Capacity: {{car.capacity}}</p>
        <p>Rating: {{car.rating}}/5</p>
        <p>Doors: {{car.doors}}</p>
        <p>Color: {{car.color}}</p>
        <p>Kms: {{car.kms}}</p>
    </div>
</div>
</template>

<script>
export default {
  name: "Details",
  props: {
    show: Boolean,
    car: Object
  },
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #4aae9b;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}
</style>
