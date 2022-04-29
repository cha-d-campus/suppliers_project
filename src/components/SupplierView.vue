<template>
  <div>
    <!-- <h2>Fournisseur {{ name }}</h2>
    <h3 id="green" v-if="status">A du stock ? OK</h3>
    <h3 id="red" v-else>A du stock ? KO</h3>
    <h5>Date de relevé des stocks : {{ checkedAt.toLocaleString() }}</h5> -->
  
    <div class="container m-5">
      <div class="row justify-content-center m-5">
        <div class="card border border-dark border-2 col-6">
          <div>
            <div class="hello card-body">
              <h2 class="card-title">{{ name }}</h2>
              <h3 class="green card-subtitle mb-2" v-if="status">A du stock ? OK</h3>
              <h3 class="red card-subtitle mb-2" v-else>A du stock ? KO</h3>
              <h5 class="card-text">Date de relevé des stocks : {{ formatedDate }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as timeago from "timeago.js";
export default {
  name: "SupplierView",
  props: {
    name: String,
    status: Boolean,
    checkedAt: String,
  },
  
  computed: {
    formatedDate: function () {
      return timeago.format(this.checkedAt, "fr_FR");
    },
  },
};
</script>

<style scoped>
.red {
  color: red;
  font-weight: bold;
}

.green {
  color: rgb(129, 199, 25);
  font-weight: bold;
}

h5 {
  font-weight: bold;
}

.container {
  display: contents;
}
</style>