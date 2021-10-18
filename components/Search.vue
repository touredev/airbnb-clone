<template>
  <v-card elevation="2">
    <div class="search">
      <v-row>
        <v-col cols="12" sm="6">
          <v-date-picker
            v-model="searchDates"
            elevation="2"
            color="primary"
            header-color="primary"
            range
          ></v-date-picker>
        </v-col>
        <v-col cols="12" sm="6">
          <h2 class="mb-3">
            Number of guests <v-icon> mdi-account-group </v-icon>
          </h2>
          <input min="0" value="2" type="number" />
          <v-btn class="search__button">Search Airbnb</v-btn>
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      searchDates: [],
    }
  },
}
</script>
<style>
.search {
  background-color: white;
  position: absolute;
  top: 35px;
  left: 25%;
  width: 50vw;
}

.search h2 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  left: 0;
}

.search input {
  padding: 20px;
  left: 0;
  height: 30px;
  border: none;
}

.search input:focus {
  outline-width: 0;
}

.search__button {
  margin-top: 1.5rem;
  margin-left: 2rem;
  text-align: center;
  text-transform: inherit !important;
  background-color: #ff7779 !important;
  color: white !important;
}

.search__button:hover {
  background-color: white !important;
  color: #ff7779 !important;
}
</style>
