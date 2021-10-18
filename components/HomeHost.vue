<template>
  <div class="app-background-grey">
    <div class="app-wrapper py-15">
      <div class="d-flex align-center mb-5">
        <div>
          <img :src="user.image" class="mr-5 rounded-lg" style="width: 6rem" />
        </div>
        <div>
          <div class="font-weight-medium text-xl-bod-1">{{ user.name }}</div>
          <div class="font-weight-medium text-sm-body-1 mb-5">
            Joined in {{ userJoiningDate }}
          </div>
          <div class="d-flex justify-space-between align-center">
            <div class="text-xl-body-1 mr-8">
              <v-icon color="#ff7779">mdi-star</v-icon
              >{{ user.reviewCount }} reviews
            </div>
          </div>
        </div>
      </div>
      <div class="text-xl-body-1 pl-6">
        <v-icon color="#ff7779">mdi-medal</v-icon>{{ user.description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  computed: {
    userJoiningDate() {
      return this.$utils.shortDate(this.user.joined)
    },
  },
}
</script>
<style scoped>
.app-background-grey {
  background: '#F6F8FB';
}
</style>
