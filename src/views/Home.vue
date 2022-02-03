<template>
  <div class="home">
    <Banner />
    <br />
    <Shopping />

    <br />
        <div
    data-aos="zoom-in"
   data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center"
  >
    <h1 class="subject text-center">Gifts</h1>
    <Rectangle />
    <img src="../assets/christmas-3030279_1920.jpg" class="fg w-100 mt-2" />
      </div>
    <br />
    <Partners />
  </div>
</template>

<script>
import Banner from "@/components/home/Banner.vue";
import Shopping from "@/components/home/Shopping.vue";
import Partners from "@/components/home/Partners.vue";
import Rectangle from "@/components/Rectangle.vue";

export default {
  name: "Home",
  components: {
    Banner,
    Shopping,
    Partners,
    Rectangle,
  },
};
</script>
<style scoped>
.fg {
  margin-top: -40px;

  border-top: 2px solid #70a6be;
}
.subject {
  color: #dc0019;
  margin-top: -64px;
  font-size: 5vw;
  margin-left: -17px;
}
</style>
