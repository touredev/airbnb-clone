<template>
  <div class="home">
    <Banner />
    <div class="d-flex pa-8">
      <v-card class="card">
        <v-img
          src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
        ></v-img>
        <div class="pa-5 rounded-lg">
          <h2 class="font-weight-medium">Online Experiences</h2>
          <h4 class="my-2 font-weight-light">
            Unique activities we can do together, led by a world of hosts.
          </h4>
        </div>
      </v-card>
      <v-card class="card">
        <v-img
          src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
        ></v-img>
        <div class="pa-5 rounded-lg">
          <h2 class="font-weight-medium">Unique stays</h2>
          <h4 class="my-2 font-weight-light">
            Spaces that are more than just a place to sleep.
          </h4>
        </div>
      </v-card>
      <v-card class="card">
        <v-img
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
        ></v-img>
        <div class="pa-5 rounded-lg">
          <h2 class="font-weight-medium">Entire homes</h2>
          <h4 class="my-2 font-weight-light">
            Comfortable private places, with room for friends or family.
          </h4>
        </div>
      </v-card>
    </div>
    <div class="d-flex pa-8">
      <NuxtLink
        v-for="home in homes"
        :key="home.objectID"
        :to="`/home/${home.objectID}`"
        style="text-decoration: none"
        ><HomeCard :home="home"
      /></NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $algolia }) {
    const response = await $algolia.getHomes()
    return { homes: response.json.hits }
  },
  head() {
    return {
      title: 'Homepage',
      meta: [
        {
          name: 'description',
          content: 'AirBnb Clone app built with Nuxt, Vuetify & Algolia',
          hid: 'description',
        },
      ],
    }
  },
}
</script>
<style>
.card {
  margin: 10px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 6px 18px -9px rgba(0, 0, 0, 0.75);
  transition: transform 100ms ease-in;
  cursor: pointer;
  max-width: 350px;
  height: 350px;
}

.card:hover {
  transform: scale(1.07);
}

.card > img {
  object-fit: fill;
  min-width: 300px;
  height: 250px;
  width: 100%;
}
</style>
