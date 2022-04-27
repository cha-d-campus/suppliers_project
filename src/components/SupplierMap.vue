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
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  data() {
    return {
      zoom: 12,
      path: "/images/",
      center: [45.19429156524638, 5.737591702212042],
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        suppliers: [
        {
          id: 1,
          latitude: 10,
          longitude: 10,
        },
        {
          id: 2,
          latitude: 11,
          longitude: 9.6,
        },
      ],
      marker: latLng(45.1850188,5.7316305),
    };
  },
};
</script>