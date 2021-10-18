<template>
  <v-app class="d-flex" style="text-align: center">
    <NotFound v-if="error.statusCode === 404" :error="error"> </NotFound>
    <ServerError v-else :error="error"> </ServerError>
    <NuxtLink to="/"> Home page </NuxtLink>
  </v-app>
</template>
<script>
export default {
  name: 'NuxtError',
  layout: 'default',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
  head() {
    const title =
      this.error.statusCode === 404 ? '404 Not Found' : 'An error occurred'
    return {
      title,
    }
  },
}
</script>
