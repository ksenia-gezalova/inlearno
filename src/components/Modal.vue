<template>
  <div>
    <span class="table__popup">
      {{ item.model_name }}
      <img :src="item.images[0]" :alt="item.model_name">
      <span>
        Координаты (широта,
        долгота):
        <br>
        {{item.dealer.latitude}},{{ item.dealer.longitude }}
      </span>
    </span>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: ["item"]
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
