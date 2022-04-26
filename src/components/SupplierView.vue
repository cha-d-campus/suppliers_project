<template>
  <div>
    <h2>Fournisseur {{ name }}</h2>
    <h3 id="green" v-if="status">A du stock ? OK</h3>
    <h3 id="red" v-else>A du stock ? KO</h3>
    <h5>Date de relevé des stocks : {{ checkedAt.toLocaleString() }}</h5>
  </div>
</template>

<script>
export default {
  name: "SupplierView",
  props: {
    name: String,
    status: Boolean,
    checkedAt: Date,
  },
};
</script>

<style scoped>
h3{
  color: red;
  font-weight: bold;
}

#green {
  color: rgb(129, 199, 25);
  font-weight: bold;
}

h5 {
    font-weight: bold;
}
</style>