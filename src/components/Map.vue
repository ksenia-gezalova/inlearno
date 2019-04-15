<template>
  <div class="map">
    <yandex-map
      :coords="[55.7536232, 37.6199775]"
      zoom="10"
      style="width: 100%; height: 600px;"
      :cluster-options="{
    1: {clusterDisableClickZoom: true}
  }"
      :behaviors="['drag', 'multiTouch']"
      :controls="['zoomControl']"
      map-type="map"
    >
      <ymap-marker
        v-for="item in items"
        :key="item.id"
        marker-id="item.id"
        marker-type="circle"
        :coords="[item.dealer.latitude, item.dealer.longitude]"
        circle-radius="1000"
        :hint-content="item.model_name"
        :marker-fill="{color: '#000000', opacity: 0.4}"
        :marker-stroke="{color: '#ff0000', width: 3}"
        :balloon="{header: item.dealer.name, body: item.dealer.address, footer: item.dealer.url}"
      ></ymap-marker>
      <!--  <ymap-marker
        v-for="(item) in items"
        :key="item.id"
        marker-id="1"
        marker-type="placemark"
        :coords="[item.dealer.latitude, item.dealer.longitude]"
        :balloonTemplate(coords)="balloonTemplate"
      ></ymap-marker>-->
    </yandex-map>
  </div>
</template>

<script>
export default {
  name: "Map",
  /*  data() {
    return {
      placemarks: [
        {
          coords: [55.7536232, 37.6199775],
          properties: {}, // define properties here
          options: {}, // define options here
          clusterName: "1",
          callbacks: { click: function() {} }
        }
      ]
    };
  }, */
  computed: {
    items() {
      return this.$store.getters.items;
    },
    balloonTemplate() {
      return `
      <h1 class="red">Hi, everyone!</h1>
      <p>I am here: ${this.coords}</p>
      <img src="http://via.placeholder.com/350x150">
    `;
    }
  },
  created() {
    this.$store.dispatch("getItems");
  }
};
</script>

<style lang="scss" scoped>
.red {
  color: red;
}
</style>
