<template>
  <v-card class="home__card">
    <img :src="home.images[0]" />
    <div class="home-card__info">
      <h3>{{ home.title }}</h3>
      <h4 class="font-weight-regular">
        {{ home.location.address }} {{ home.location.city }}
        {{ home.location.state }}
      </h4>
      <h4 class="font-weight-bold">${{ home.pricePerNight }} / night</h4>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    home: { type: Object, required: true },
  },
}
</script>
