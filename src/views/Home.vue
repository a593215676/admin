<template>
  <div class="home">
      3123213
  </div>
</template>

<script>
  export default {
    name: 'home',
      props:{

      },
    components: {

    },
    data(){
      return{

      }
    },
    methods: {

    },
    mounted () {
        this.$store.dispatch("getCity1");
    },
    computed: {
        // conts() {
        //     console.log(this.$store.state.conts.content);
        //     return this.$store.state.conts.content;
        // }

    }

  }
</script>

<style scoped lang="scss">

</style>
