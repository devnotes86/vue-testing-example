<script>


export default {
  components: {

  },
  props: {

  },
  data() {
    return {

      selectedMotorcycle: null,


      MOTORCYCLES: [
        {
          id: 1,
          make: 'BMW',
          model: 'S 1000 RR',
          year: 2023,
          cc: 999
        },
        {
          id: 2,
          make: 'Honda',
          model: 'CB600 Hornet',
          year: 2008,
          cc: 599
        },
        {
          id: 3,
          make: 'Ducati',
          model: 'Diavel',
          year: 2024,
          cc: 1158
        },
        {
          id: 4,
          make: 'Harley Davidson',
          model: 'Fat Boy 114',
          year: 2024,
          cc: 1868
        },
      ]
    }
  },
  methods:{

  },

  mounted() {
    console.log('motorcycle id from route: ' + this.$route.params.id);

    if (this.$route.params.id !== null && this.$route.params.id !== undefined && this.$route.params.id !== '' ){
      const item = this.MOTORCYCLES.find(m => m.id === +this.$route.params.id);
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
