<template>
  <div class="py-15">
    <div class="app-wrapper mx-auto">
      <div class="app-testimonials">
        <div v-for="(review, index) in reviews" :key="index">
          <div class="d-flex align-center mb-5">
            <div>
              <img :src="review.reviewer.image" class="mr-2 rounded-pill" />
            </div>
            <div>
              <p class="font-weight-medium text-xl-h4">
                {{ review.reviewer.name }}
              </p>
              <p class="font-weight-medium text-sm-h4">
                {{ reviewDate(review.date) }}
              </p>
            </div>
          </div>
          <div class="app-testimonial-body">
            <ShortText :text="review.comment" :target="150" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
  methods: {
    reviewDate(dateStr) {
      return this.$utils.shortDate(dateStr)
    },
  },
}
</script>
<style scoped>
.app-testimonials {
  display: flex;
  flex-wrap: wrap;
}

.app-testimonials > div {
  margin-bottom: 60px;
  width: 1rem;
}

.app-testimonials > div:nth-child(odd) {
  padding-right: 1rem;
}

.app-testimonials > div:nth-child(even) {
  padding-left: 1rem;
}
.app-testimonial-body {
  background-image: url('/images/quote.svg');
  text-indent: 22px;
  background-repeat: no-repeat;
}
</style>
