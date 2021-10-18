<template>
  <div class="app-background-grey">
    <div class="app-wrapper mx-auto">
      <v-row class="mx-5 my-8 pa-5">
        <v-col cols="12" sm="6" md="7" class="pr-14 py-20 home-details__infos">
          <h2 class="app-subtitle secondary--text text-lg-h3">Description</h2>
          <div class="mt-8 dark--text text-lg-body-1 text-justify">
            {{ home.description }}
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="5" class="pl-14 py-20">
          <div
            v-for="(feature, index) in home.features"
            :key="index"
            class="
              text-lg-subtitle-1
              font-weight-medium
              primary
              py-3
              px-4
              d-inline-block
              mr-3
              mb-3
              rounded
            "
            style="color: #ffffff"
          >
            {{ feature }}
          </div></v-col
        >
      </v-row>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    home: {
      type: Object,
      required: true,
    },
  },
}
</script>
