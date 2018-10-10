<template>
  <div class="card">
  <h5 class="card-header">Featured</h5>
  <div class="card-body">
    <div class='input-group date' id='datetimepicker1'>
        <input type='text' class="form-control" />
        <span class="input-group-addon">
            <span class="glyphicon glyphicon-calendar"></span>
        </span>
    </div>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</template>

<script>
export default {
  name: "Filters",
  props: {
    msg: String
  }
};

 $(function () {
                $('#datetimepicker1').datetimepicker();
            });
</script>