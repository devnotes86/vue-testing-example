<script>
import {mapGetters} from 'vuex';

export default {
  components: {

  },
  props: {

  },
  data() {
    return {


    }
  },
  methods: {
    ...mapGetters(['motorcycles' ]),
  }

}
</script>
<template>

  <p>Select motorcycle to display it's details</p>

  <div class="card">
    <ul>
      <li v-for="motorcycle of this.$store.getters['motorcycles']" :key="motorcycle.id">
        <RouterLink :to="'/motorcycles/' + motorcycle.id">{{motorcycle.make}} {{motorcycle.model}}</RouterLink>

      </li>
    </ul>
  </div>


</template>

<style scoped>
ul {
  list-style-type: none;
}

li {
  text-align: start;
  font-size:3em;
}
</style>
