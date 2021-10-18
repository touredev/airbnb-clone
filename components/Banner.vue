<template>
  <div class="banner mb-4">
    <div class="banner__search">
      <Search v-if="showSearch" />
      <v-btn class="banner__searchButton" outlined @click="setShowSearch">{{
        searchBtnText
      }}</v-btn>
    </div>
    <div class="banner__info">
      <h1>Get out and stretch your imagination</h1>
      <h5>
        Plan a different kind of getaway to uncover the hidden gems near you.
      </h5>
      <v-btn outlined>Explore Nearby</v-btn>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showSearch: false,
    }
  },
  computed: {
    searchBtnText() {
      return this.showSearch ? 'Hide' : 'Search Dates'
    },
  },
  methods: {
    setShowSearch() {
      this.showSearch = !this.showSearch
    },
  },
}
</script>
<style>
.banner {
  background: url('/images/banner-cover.jpg') center center;
  height: 50vh;
  position: relative;
  z-index: 5;
}

.banner__info {
  background-color: black !important;
  color: white !important;
  padding-top: 25px;
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 30px;
  width: 300px;
}

.banner__search {
  display: flex;
  flex-direction: column;
}

.banner__searchButton {
  background-color: white !important;
  font-weight: 900 !important;
  text-transform: inherit !important;
  color: #ff7779 !important;
}

.banner__info > button {
  background-color: #ff7779 !important;
  color: white;
  text-transform: inherit;
  margin-top: 20px;
  font-weight: 600;
}

.banner__info > button:hover {
  background-color: white !important;
  color: #ff7779 !important;
}

.banner__info > h5 {
  margin-top: 10px;
}
</style>
