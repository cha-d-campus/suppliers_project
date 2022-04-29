<template>
  <div class="list">
    <h1>Liste des fournisseurs</h1>
    <div class="errorMsg" v-if="error === true">
      Erreur de chargement... dommage :/
    </div>
    <div v-else>
      <div v-if="loading">Requête en cours</div>
      <div v-else>
        <input type="text" v-model="input" />
        <select v-model="filterStatus">
          <option value="*">Tous</option>
          <option value="1">OK</option>
          <option value="0">KO</option>
        </select>
        <div v-for="supplier in filterSuppliers" :key="supplier.id">
          <SupplierView
            :name="supplier.name"
            :status="supplier.status"
            :checkedAt="supplier.checkedAt"
            :error="error"
            :loading="loading"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// console.log(filterStatus)
import SupplierView from "./SupplierView.vue";

export default {
  name: "SupplierList",
  props: {
    suppliers: Array,
    error: Boolean,
    loading: Boolean,
  },
  components: {
    SupplierView,
  },
  data() {
    return {
      filterStatus: "*",
      input: null,
    };
  },
  computed: {
    filterSuppliers() {
      if (this.suppliers !== null) {
        let supplierFiltered = this.suppliers.filter((el) => {
          if (this.filterStatus === "*") {
            return true;
          }

          return el.status === Boolean(Number(this.filterStatus));
        });

        supplierFiltered = supplierFiltered.filter((el) => {

          if (this.input !== null) {
          return el.name.toLowerCase().startsWith(this.input);
          }
          return true;
        });
        return supplierFiltered;
      }

      return this.suppliers;
    },
  },
};
</script>

<style scoped>
.errorMsg {
  color: red;
  font-weight: bold;
  font-size: 24px;
}
</style>
