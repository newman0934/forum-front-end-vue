<template>
  <div class="card">
    <div class="card-header">
      最新評論
    </div>
    <div class="card-body">
      <div v-for="comment in comments" :key="comment.id">
        <h4>
          <!-- TODO: change into router-link -->
          <a href="#"> {{ comment.Restaurant.name }} </a>
        </h4>
        <p>{{ comment.text }}</p>by
        <!-- TODO: change into router-link -->
        <a href="#"> {{ comment.User.name }} </a>
        at{{ comment.createdAt | fromNow }}
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
// 先將 moment 載入進來
import { fromNowFilter } from "./../utils/mixins";
export default {
  mixins: [fromNowFilter],
  name: 'NewestComments',

  props: {
    comments: {
      type: Array,
      required: true
    }
  }
}
</script>