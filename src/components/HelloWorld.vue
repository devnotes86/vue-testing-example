<script setup lang="ts">

defineProps<{ msg: string }>()

</script>


<template>
  <h1 id="pageTitle">{{ msg }}</h1>

  <div class="card">
    <RouterLink to="/motorcycles">Show list of Motorcycles</RouterLink>
  </div>


</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
