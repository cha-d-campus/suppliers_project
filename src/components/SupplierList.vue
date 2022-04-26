<template>
  <div class="list">
    <h1>Liste des fournisseurs</h1>
    <SupplierView 
      :name = "name"
      :status="status"
      :checkedAt="checkedAt"
    />
  </div>
</template>

<script>
import SupplierView from './SupplierView.vue'

export default {
  name: 'SupplierList',
  components: {
    SupplierView
  },
  data() {
    return {
      name: "Raheem50",
      status: false, // est ce qu'il y a du stock
      checkedAt: new Date(), // date de la dernière mise à jour du stock
    }
  }
}
</script>
