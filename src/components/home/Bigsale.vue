<template>
  <div
    data-aos="fade-right"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center"
  >
    <section class="section-products mt-5">
      <div class="container">
        <div class="header">
          <h1 class="subject text-center">Big Sale</h1>
          <Rectangle />
        </div>
        <div class="row justify-content-center text-center">
          <div class="col-md-8 col-lg-6"></div>
        </div>
        <div class="row">
          <!-- Single Product -->
          <div class="container">


            <carousel :items-to-show="1">
            
                <div
                  class="col-md-6 col-sm-12"
                  v-for="prod in Sales"
                  :key="prod.id"
                >
                  <div id="product-1" class="single-product">
                    <div class="part-1" >
                         <img
            class="img-1 w-75 h-100"
             :src="require('../../assets/Sale/' + prod.image + '.jpg')"
            alt="test"
            title="test"
          />
                     
                    </div>
                    <div class="part-2">
                      <h3 class="product-title">{{ prod.title }}</h3>
                      <h4 class="product-old-price">{{ prod.price }} $</h4>
                      <h4 class="product-price">{{ prod.prices }} $</h4>
                    </div>
                  </div>
                </div>
            

              <template #addons>
                <navigation />
              </template>
            </carousel>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Rectangle from "@/components/Rectangle.vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel,  Navigation } from "vue3-carousel";
export default {
  name: "Bigsale",
  components: {
    Rectangle,
    Carousel,
  

    Navigation,
  },
  computed: {
    Sales() {
      return this.$store.getters["sales/Sales"];
    },
  },
};
</script>
<style scoped>
.subject {
  color: #dc0019;
  margin-top: -64px;
  font-size: 5vw;
  margin-left: -17px;
}
.product-old-price{
  color: #dc0019;
  padding-left: 2rem;
}

a,
a:hover {
  text-decoration: none;
  color: inherit;
}

.section-products {
  padding: 80px 0 54px;
}

.section-products .header {
  margin-bottom: 50px;
}

.section-products .header h3 {
  font-size: 1rem;
  color: #fe302f;
  font-weight: 500;
}

.section-products .header h2 {
  font-size: 2.2rem;
  font-weight: 400;
  color: #444444;
}

.section-products .single-product {
  margin-bottom: 26px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.section-products .single-product .part-1 {
  position: relative;
  height: 290px;
  max-height: 290px;
  margin-bottom: 20px;
  overflow: hidden;
}


.section-products .single-product .part-1 .discount,
.section-products .single-product .part-1 .new {
  position: absolute;
  top: 15px;
  left: 20px;
  color: #ffffff;
  background-color: #fe302f;
  padding: 2px 8px;
  text-transform: uppercase;
  font-size: 0.85rem;
}

.section-products .single-product .part-1 .new {
  left: 0;
  background-color: #444444;
}

.section-products .single-product .part-1 ul {
  position: absolute;
  bottom: -41px;
  left: 20px;
  margin: 0;
  padding: 0;
  list-style: none;
  opacity: 0;
  transition: bottom 0.5s, opacity 0.5s;
}

.section-products .single-product:hover .part-1 ul {
  bottom: 30px;
  opacity: 1;
}

.section-products .single-product .part-1 ul li {
  display: inline-block;
  margin-right: 4px;
}

.section-products .single-product .part-1 ul li a {
  display: inline-block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  background-color: #ffffff;
  color: #444444;
  text-align: center;
  box-shadow: 0 2px 20px rgb(50 50 50 / 10%);
  transition: color 0.2s;
}

.section-products .single-product .part-1 ul li a:hover {
  color: #fe302f;
}

.section-products .single-product .part-2 .product-title {
  font-size: 1rem;
}

.section-products .single-product .part-2 h4 {
  display: inline-block;
  font-size: 1rem;
}

.section-products .single-product .part-2 .product-old-price {
  position: relative;
  padding: 0 7px;
  margin-right: 2px;
  opacity: 0.6;
}

.section-products .single-product .part-2 .product-old-price::after {
  position: absolute;
  content: "";
  top: 50%;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #444444;
  transform: translateY(-50%);
}
.single-product {
  width: 100% !important;
}
</style>
