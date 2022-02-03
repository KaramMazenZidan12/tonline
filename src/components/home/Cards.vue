<template>
  <div class="row justify-content-center">
    <div class="col-md-3 col-sm-12 p-sm-3" id="col"  v-for="prod in Products"
        :key="prod.id">
      <div class="ecard">
        <div class="card-head">
          <img
            class="img-1"
             :src="require('../../assets/Cards/' + prod.image + '.jpg')"
            alt="test"
            title="test"
          />

          <label class="like-switch">
            <input type="checkbox" />
            <i class="outline far fa-heart"></i>
            <i class="filled fas fa-heart"></i>
          </label>

          <button class="add-btn" @click="addToCart(prod.id,prod.image,prod.title,prod.price)">Add to Cart</button>
        </div>
        <div class="card-body">
          <h3 class="name">{{ prod.title }}</h3>
          <div class="price">
            <span class="sale">{{ prod.price }}</span>
            <span>$25.00</span>
          </div>
          <div class="review">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
            <span class="review-count">(16)</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Cards",
    computed :{

    Products(){
      return this.$store.getters['prods/products']
    }
  },
  methods:{

       addToCart(a,b,c,d) {
      this.$store.dispatch('cart/addToCart',{
        id: a,
        image: b,
        title: c,
        price: d,
      });
    },
  }
};
</script>
<style scoped>
.col-md-4,
.col-sm-12 {
  padding-bottom: 15px;
  width: 80%;
}

.ecard {
  background-color: #fff;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 30px;
}

/** Cabecera de card **/
.card-head {
  cursor: pointer;
  padding-bottom: 100%;
  position: relative;
}
.card-head * {
  position: absolute;
}
.card-head img {
  transition: 0.5s;
  width: 100%;
  border-radius: 25px;
  border-color: #dc0019;
}

.card-head:hover .add-btn {
  display: block;
}

.card-head .add-btn {
  background-color: #70a6be;
  border-radius: 3px;
  border: none;
  color: #fff;
  cursor: pointer;
  display: none;
  font-size: 12px;
  font-weight: bold;
  left: 50%;
  padding: 15px;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
}
.card-head .add-btn:hover {
  background-color: #dc0019;
}

/** Like switch **/
.outline,
.filled {
  color: #70a6be;
  font-size: 25px;
  left: 15px;
  top: 15px;
}
.outline,
.filled:hover {
  color: #dc0019;
}

.like-switch {
  cursor: pointer;
}
.like-switch input {
  display: none;
}
.like-switch .filled {
  display: none;
}
.like-switch input:checked + button .outline {
  display: none;
}
.like-switch input:checked + button .outline + .filled {
  display: inline;
}

/** Cuerpo de card **/
.card-body {
  font-size: 12px;
  padding: 10px;
  text-align: center;
}
.card-body .name {
  font-weight: normal;
  margin: 0;
  font-size: 14px;
  line-height: 16px;
}
.card-body .price {
  color: #dc0019;
  margin: 10px 0;
}
.card-body .price .sale {
  color: #000;
  text-decoration: line-through;
}
.card-body .review i {
  color: #dc0019;
}
.card-body .review .review-count {
  font-weight: 300;
}
</style>
