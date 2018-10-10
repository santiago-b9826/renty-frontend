<template>
  <nav class="nav navbar ">
    <a class="navbar-brand" href="#">RENTY</a>
    <form class="form-inline">
     
      <a class="navbar-brand" href="#">Registrarse/Ingresar</a>
    </form>
</nav>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav{
  background-color:  #12223D;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
