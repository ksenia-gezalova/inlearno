<template>
  <div class="table">
    <ul class="table__row table__row--header">
      <li>Идентификатор</li>
      <li>Название</li>
      <li>
        Координаты (широта,
        долгота)
      </li>
    </ul>
    <ul
      class="table__row table__row--body"
      v-for="item in items"
      :key="item.id"
      @click="openItem(item)"
    >
      <li>{{ item.id }}</li>
      <li>{{ item.model_name }}</li>
      <li
        v-if="(item.dealer.latitude === '' && item.dealer.longitude === '') || item.dealer.latitude == null && item.dealer.longitude == null"
      >-</li>
      <li v-else>lat: {{item.dealer.latitude}} long: {{ item.dealer.longitude }}</li>

      <span class="table__popup" v-if="currentItem === item">
        {{ item.model_name }}
        <img :src="item.images[0]" :alt="item.model_name">
        <span>
          Координаты (широта,
          долгота):
          <br>
          {{item.dealer.latitude}},{{ item.dealer.longitude }}
        </span>
      </span>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Table",
  methods: {
    openItem(item) {
      if (this.currentItem !== item) {
        this.$store.dispatch("setItem", item);
      } else {
        this.closeItem();
      }
    },
    closeItem() {
      this.$store.dispatch("setItem", null);
    }
  },
  computed: {
    items() {
      return this.$store.getters.items;
    },
    currentItem() {
      return this.$store.getters.currentItem;
    }
  },
  created() {
    this.$store.dispatch("getItems");
  }
};
</script>

<style lang="scss" scoped>
.table {
  width: 95%;
  margin: 20px auto;

  ul {
    list-style: none;
    padding: 10px 20px;
  }

  &__row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 0;
    &--header {
      background-color: #d8d8d8;
      color: #777;
    }

    &--body {
      cursor: pointer;
      border: 1px solid #cacaca;
      transition: all 0.3s;
      text-align: center;

      &:hover {
        border: 1px solid #000;
      }
    }
  }

  &__popup {
    position: fixed;
    background-color: #fff;
    color: #000;
    padding: 20px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #cacaca;
    border-radius: 2px;

    img {
      display: block;
      width: 200px;
    }
  }
}
</style>



