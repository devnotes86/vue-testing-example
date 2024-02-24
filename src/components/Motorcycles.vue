<script>


export default {
  components: {

  },
  props: {

  },
  data() {
    return {

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

}
</script>
<template>

  <p>Select motorcycle to display it's details</p>

  <div class="card">
    <ul>
      <li v-for="motorcycle of MOTORCYCLES" :key="motorcycle.id">
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
