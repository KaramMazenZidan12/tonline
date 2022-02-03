<template>
  <div class="container-fluid mt-2" id="containerq">
    <div
    data-aos="fade-up"
   data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center"
  >
    <img class="b1 mx-auto d-block" src="../../assets/baubles.png" />
  </div>

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
    <h1 class="subject text-center">Online Shopping</h1>
    <Rectangle />
    <Cards />
     </div>
    <Bigsale />
  </div>
</template>
<script>
import Rectangle from "@/components/Rectangle.vue";
import Cards from "@/components/home/Cards.vue";
import Bigsale from "@/components/home/Bigsale.vue";
export default {
  name: "Shopping",
  components: {
    Rectangle,
    Cards,
    Bigsale,
  },
};
</script>
<style  scoped>
#containerq {
  margin: 40px auto 40px;
  margin-top: -22px;
}
.subject {
  color: #dc0019;
  margin-top: -64px;
  font-size: 5vw;
  margin-left: -17px;
}

.b1 {
  height: 490px;
  width: 100%;
  margin-top: -32px;
}
@media screen and (max-width: 991px) {
  .subject {
    font-size: 6vw;
  }

  .b1 {
    height: 250px;
    width: 90%;
  }
}
</style>