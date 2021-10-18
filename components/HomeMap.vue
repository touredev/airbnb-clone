<template>
  <v-main>
    <div class="app-wrapper py-12 mx-auto">
      <h2 class="pb-6 app-subtitle secondary--text pl-8 text-lg-h3">
        Location
      </h2>
      <p class="mt-6 body-1 pl-8 font-weight-medium dark--text">
        {{ home.location.address }}
        {{ home.location.city }}
        {{ home.location.state }}
        {{ home.location.country }}
      </p>
      <div class="map mx-15 my-5">
        <client-only>
          <l-map
            ref="homeMap"
            :center="center"
            zoom="16"
            :options="{ scrollWheelZoom: false }"
          >
            <l-tile-layer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <l-marker :lat-lng="marker">
              <l-popup>
                <div class="info-container">
                  <div class="info-name">{{ home.location.address }}</div>
                  <div class="info-confirmed">
                    City: {{ home.location.city }}<br />
                    State: {{ home.location.state }}<br />
                    Country: {{ home.location.country }}
                  </div>
                </div>
              </l-popup>
            </l-marker>
          </l-map>
        </client-only>
      </div>
    </div>
  </v-main>
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
      center: [],
      marker: [],
    }
  },
  mounted() {
    this.center = [this.home._geoloc.lat, this.home._geoloc.lng]
    this.marker = [this.home._geoloc.lat, this.home._geoloc.lng]
  },
}
</script>
<style scoped>
.map {
  height: 500px;
  max-width: 90%;
  background-color: white;
  padding: 1rem;
  border-radius: 20px;
  margin-top: 16px;
  box-shadow: 0 0 8px -4px rgba(0, 0, 0, 0.5);
}

.info-name {
  font-size: 20px;
  font-weight: bold;
  color: #555;
}

.info-container {
  width: 150px;
}

.info-confirmed {
  font-size: 16px;
  margin-top: 5px;
}
</style>
