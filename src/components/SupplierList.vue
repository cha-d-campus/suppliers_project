<template>
  <div class="list">
    <h1>Liste des fournisseurs</h1>
    <div v-for="supplier in suppliers" :key="supplier.id">
      <SupplierView
        :name="supplier.name"
        :status="supplier.status"
        :checkedAt="supplier.checkedAt"
      />
    </div>
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
      suppliers: [
    {
      id: 1,
      name: "Fournisseur 1 ?",
      status: true,
      checkedAt: new Date('April 26, 2022 10:34:10')
    },
    {
      id: 2,
      name: "Fournisseur 2",
      status: false,
      checkedAt: new Date('April 25, 2022 15:34:10')
    }
  ]
    }
  }
}
</script>
