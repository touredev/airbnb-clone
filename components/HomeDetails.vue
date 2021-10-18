<template>
  <div class="app-wrapper mx-auto">
    <v-row>
      <v-col cols="12" sm="6" md="7" class="home-details__infos pr-14">
        <h1
          class="font-weight-medium text-lg-h3 mb-8 dark--text"
          style="line-height: 2.5rem"
        >
          {{ home.title }}
        </h1>
        <div class="d-flex">
          <div
            class="text-lg-subtitle-1 text-decoration-underline primary--text"
          >
            <v-icon color="primary">mdi-map-marker-outline</v-icon>
            {{ home.location.address }} {{ home.location.city }}
            {{ home.location.state }} {{ home.location.country }}
          </div>
          <div class="text-lg-subtitle-2 pl-5">
            <v-icon color="secondary">mdi-star-circle</v-icon>
            {{ home.reviewValue }}
            <span class="secondary--text">({{ home.reviewCount }})</span>
          </div>
        </div>
        <div
          class="
            home-details__footer
            pt-12
            mt-14
            pb-18
            font-weight-medium
            text-h6
            secondary--text
          "
          v-html="detailsElts"
        ></div>
      </v-col>
      <v-col cols="12" sm="6" md="5" class="pl-14">
        <div class="mt-0 mb-10 text-h2 primary--text" style="line-height: 1">
          ${{ home.pricePerNight
          }}<span class="text-h4 dark--text" style="line-height: 2.5rem">
            / night</span
          >
        </div>
        <div class="app-search">
          <v-date-picker
            v-model="selectedDates"
            color="primary"
            header-color="primary"
            range
            full-width
            :min="new Date().toISOString().substr(0, 10)"
            :selected-items-text="dateRangeText"
          ></v-date-picker>
        </div>
        <v-btn
          color="primary"
          block
          x-large
          class="py-5 mt-5 rounded-lg text-xl-h6"
          elevation="3"
          >Request to book!</v-btn
        >
      </v-col>
    </v-row>
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
  data() {
    return {
      selectedDates: [],
    }
  },
  computed: {
    detailsElts() {
      const homeElts = [
        ['guests', 'guest'],
        ['bedrooms', 'room'],
        ['beds', 'bed'],
        ['bathrooms', 'bath'],
      ]
      const homeDetails = homeElts.map((item) => {
        return `${this.$utils.pluralize(this.home[item[0]], item[1])}`
      })
      return homeDetails.join(` &middot; `)
    },
    dateRangeText() {
      const checkInDate = new Date(this.selectedDates[0])
      const checkOutDate = new Date(this.selectedDates[1])
      return `${checkInDate.toDateString()} - ${checkOutDate.toDateString()}`
    },
  },
}
</script>
<style scoped>
.home-details__footer {
  border-top: 1px dashed #979797;
  line-height: 1.75rem;
}
</style>
