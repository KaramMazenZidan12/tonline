<template>
  <li>
    <div>
      <img :src="require('../assets/Cards/' + image + '.jpg')" :alt="title" />
    
    </div>
    <div>
      <h3>{{ title }}</h3>
      <div class="item__data ">
        <div class="font-weight-bold" >
          Price per Item:
          <strong>${{ price }}</strong>
        </div>
        <div class="font-weight-bold">
          Quantity:
          <strong>{{ qty }}</strong>
        </div>
      </div>
      <div class="item__total">Total: ${{ itemTotal }}</div>
      <button @click="remove">Remove</button>
    </div>
  </li>
</template>

<script>
export default {

  props: ['prodId', 'title', 'image', 'price', 'qty'],
  computed: {
    itemTotal() {
      return (this.price * this.qty).toFixed(2);
    }
  },
  methods: {
    remove() {
  this.$store.dispatch('cart/removeFromCart',{productId:this.prodId})
    }
  }
};
</script>

<style scoped>
li {
  margin: 1rem auto;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  text-align: center;
  max-width: 25rem;
  color:white;
  text-shadow: 1px 1px 2px black;
    background-image:url("../assets/christmas.png");
    background-position: center;
}

img {
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  object-fit: cover;
}

.item__data {
  display: flex;
  justify-content: space-between;
}

.item__total {
  font-weight: bold;
  margin: 1rem 0;
  border-top: 1px solid #474747;
  border-bottom: 1px solid #474747;
  padding: 0.25rem 0;
  width: auto;
}

button {
  font: inherit;
   text-shadow: 1px 1px 2px black;
  border: 1px solid  #dc0019;
  background-color:  #dc0019;
  color: white;
  border-radius: 30px;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
}

button:hover,
button:active {
  background-color: #70a6be;
  border-color: #70a6be;
}
strong{

  color:#dc0019;
}
h3{

color:white;
}
</style>