<template>
  <div class="row">
    <div class="col-md-12 mb-3">
      <h1>{{restaurant.name}}</h1>
      <p class="badge badge-secondary mt-1 mb-3">{{restaurant.categoryName}}</p>
    </div>
    <div class="col-lg-4">
      <img class="img-responsive center-block" :src="restaurant.image" style="width: 250px;margin-bottom: 25px;"/>
      <div class="contact-info-wrap">
        <ul class="list-unstyled">
          <li>
            <strong>Opening Hour:</strong>
            {{restaurant.openingHours}}
          </li>
          <li>
            <strong>Tel:</strong>
            {{restaurant.tel}}
          </li>
          <li>
            <strong>Address:</strong>
            {{restaurant.address}}
          </li>
        </ul>
      </div>
    </div>
    <div class="col-lg-8">
      <p>{{ restaurant.description }}</p>
      <router-link class="btn btn-primary btn-border mr-2" :to="{name: 'restaurant-dashboard', params:{id:restaurant.id}}">Dashboard</router-link>

      <button v-if="restaurant.isFavorited" type="button" class="btn btn-danger btn-border mr-2" @click.stop.prevent="addFavorited(restaurant.id)">移除最愛</button>
      <button v-else type="button" class="btn btn-primary btn-border mr-2" @click.stop.prevent="removeFavorited(restaurant.id)">加到最愛</button>
      <button v-if="restaurant.isLiked" type="button" class="btn btn-danger like mr-2" @click.stop.prevent="addLiked(restaurant.id)">Unlike</button>
      <button v-else type="button" class="btn btn-primary like mr-2" @click.stop.prevent="removeLiked(restaurant.id)">Like</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "RestaurantDetail",

  props: {
    initialRestaurant: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      restaurant: this.initialRestaurant
    };
  },
  watch:{
    initialRestaurant(restaurant){
      this.restaurant = {
        ...this.restaurant,
        ...restaurant
      }
    }
  },
  methods: {
    addFavorited() {
      this.restaurant = {
        ...this.restaurant,
        isFavorited: true
      };
    },
    removeFavorited() {
      this.restaurant = {
        ...this.restaurant,
        isFavorited: false
      };
    },
    addLiked() {
      this.restaurant = {
        ...this.restaurant,
        isLiked: true
      };
    },
    removeLiked() {
      this.restaurant = {
        ...this.restaurant,
        isLiked: false
      };
    }
  }
};
</script>

<style scoped>
.col-lg-8 p,
.contact-info-wrap li,
.contact-info-wrap strong {
  font-family: serif;
  font-size: 17px;
}
</style>