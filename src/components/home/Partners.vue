<template>
  <div class="home-demo">
    <h1 class="subject text-center mt-2">Partners</h1>
    <Rectangle />
    <div class="owl-carousel owl-theme mt-2">
      <img
        v-for="p in partners"
        :key="p"
        :src="require('../../assets/OWL/' + p + '.png')"
        class="b mx-auto d-block"
      />
    </div>
  </div>
</template>

<script>
import Rectangle from "@/components/Rectangle.vue";
export default {
  name: "Partners",
  components: {
    Rectangle,
  },
  data() {
    return {
      partners: [1, 2, 3, 4, 5, 6],
    };
  },
};
</script>
<style  scoped>
.subject {
  color: #dc0019;
  margin-top: -64px;
  font-size: 5vw;
  margin-left: -17px;
}
.b {
  width: 50% !important;
  height: 20%;
}
</style>