<template>
  <div>
    <h1>Carte des fournisseurs</h1>
    <l-map style="height: 600px" :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <div v-for="supplier in suppliers" :key="supplier.id">
        <l-marker :lat-lng="[supplier.latitude, supplier.longitude]"></l-marker>
      </div>
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import { latLng } from "leaflet";
import { Icon } from "leaflet";

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export default {
  name: "SupplierMap",
  props: {
    suppliers: Array,
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  data() {
    return {
      zoom: 12,
      path: "/images/",
      center: [45.1850188, 30],
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: latLng(45.1850188, 5.7316305),
    };
  },
mounted() {
  if(navigator.geolocation){
    let self = this;
       navigator.geolocation.getCurrentPosition(function(truc){
        self.center = [truc.coords.latitude, truc.coords.longitude];
      })
    }
  }
};
</script>