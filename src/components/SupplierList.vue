<template>
  <div class="list">
    <h1>Liste des fournisseurs</h1>
    <div class="errorMsg" v-if="error === true">Erreur de chargement... dommage :/</div>
    <div v-else>
      <div v-if="loading">Requête en cours</div>
      <div v-else v-for="supplier in suppliers" :key="supplier.id">
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
</template>

<script>
import SupplierView from './SupplierView.vue'

export default {
  name: 'SupplierList',
  props: {
    suppliers: Array,
    error: Boolean,
    loading: Boolean
  },
  components: {
    SupplierView
  },
}
</script>

<style scoped>
  .errorMsg {
    color: red;
    font-weight: bold;
    font-size: 24px;
  }
</style>
