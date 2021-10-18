<template>
  <v-container>
    <div class="app-wrapper">
      <div class="app-gallery">
        <div
          v-for="image in images"
          :key="image"
          :style="`background-image: url(${image})`"
        ></div>
      </div>
    </div>
  </v-container>
</template>
<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
}
</script>
<style scoped>
.app-gallery {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-template-rows: 280px 280px;
  gap: 1.5rem;
}

.app-gallery > div {
  background-size: cover;
}

.app-gallery > div:nth-child(1) {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
  border-top-left-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
}

.app-gallery > div:nth-child(2) {
  grid-column: 3 / 4;
}

.app-gallery > div:nth-child(3) {
  grid-column: 3 / 4;
  border-top-right-radius: 1.5rem;
}

.app-gallery > div:nth-child(4) {
  grid-column: 3 / 4;
  grid-row: 2 / 3;
}

.app-gallery > div:nth-child(5) {
  grid-column: 4 / 5;
  grid-row: 2 / 3;
  border-bottom-right-radius: 1.5rem;
}
</style>
