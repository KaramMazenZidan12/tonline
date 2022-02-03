<template>
<navbar></navbar>

   <router-view/>

 <br>
 
<button onclick="scrollToTop()" class="btn">
              <i class="fa fa-angle-double-up" aria-hidden="true"></i>
              </button>
              <br>
 <Footer/>
</template>
<script>
import navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default({
  name: 'App',
  components: {
    navbar,Footer
  }
})
AOS.init();
</script>
<style scoped>
.btn{
float:right;
}
</style>


