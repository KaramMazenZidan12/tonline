<template>
  <span class="badge" :class="['badge--' + mode, {nml: n}]">
    <slot></slot>
  </span>
</template>

<script>
export default {
  props: ['mode', 'n']
}
</script>

<style scoped>
.badge {
  display: inline-block;
  padding: 0.15rem 1.25rem;
  background-color: #ccc;
  color: red;
  margin: 0 10rem;
  border-radius: 30px;
}


.badge--highlight {
  background-color: #dc0019;
  color: white;
  margin-left: 7px;
}

.badge--elegant {
  background-color: #70a6be;
  color: white;
}
</style>