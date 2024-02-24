<script>

import {mapGetters} from 'vuex';

export default {
  components: {

  },
  props: {

  },
  data() {
    return {
      selectedMotorcycle: null
    }
  },
  methods: {
  ...mapGetters(['motorcycles' ]),
  },

  mounted() {
    console.log('motorcycle id from route: ' + this.$route.params.id);

    if (this.$route.params.id !== null && this.$route.params.id !== undefined && this.$route.params.id !== '' ){
      const item = this.$store.getters['motorcycles'].find(m => m.id === +this.$route.params.id);
      if (item) {
        this.selectedMotorcycle = item;
      }
    }
  }
}
</script>
<template>

  <h1 class="warning" v-if="!selectedMotorcycle">

    <RouterLink to="/motorcycles">Select motorcycle first!</RouterLink>

  </h1>

  <div v-if="selectedMotorcycle">
    <h1>Details of: {{selectedMotorcycle.make}} {{selectedMotorcycle.model}}</h1>

    <div class="card">
      <ul>
        <li>Make: {{selectedMotorcycle.make}}</li>
        <li>Model: {{selectedMotorcycle.model}}</li>
        <li>Year: {{selectedMotorcycle.year}}</li>
        <li>CC: {{selectedMotorcycle.cc}}</li>
      </ul>
    </div>

    <p>
      <RouterLink to="/motorcycles">Return to motorcycles list</RouterLink>
    </p>

  </div>



</template>

<style scoped>
.warning {
  color: red;
  font-weight: bold;
}
ul {
  list-style-type: none;
}

li {
  text-align: start;
  font-size:2em;
}
</style>
