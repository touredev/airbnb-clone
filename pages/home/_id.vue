<template>
  <v-container>
    <HomeGallery :images="home.images" />
    <HomeDetails :home="home" />
    <HomeDescription :home="home" />
    <HomeMap :home="home" />
    <HomeHost :user="user" />
  </v-container>
</template>

<script>
const isBrowser = typeof window !== 'undefined'
let Icon
let leaflet
if (isBrowser) {
  leaflet = require('leaflet')
  Icon = leaflet.Icon
  delete Icon.Default.prototype._getIconUrl
  Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  })
}

export default {
  async asyncData({ params, $algolia, error }) {
    const responses = await Promise.all([
      $algolia.getHome(params.id),
      $algolia.getUserByHomeId(params.id),
    ])

    const badResponse = responses.find((response) => !response.ok)
    if (badResponse)
      return error({
        statusCode: badResponse.status,
        message: badResponse.statusText,
      })

    return {
      home: responses[0].json,
      user: responses[1].json.hits[0],
    }
  },
  head() {
    return {
      title: this.home.title,
      link: [
        {
          rel: 'stylesheet',
          href: 'https://unpkg.com/leaflet@1.6.0/dist/leaflet.css',
        },
      ],
    }
  },
}
</script>
