<template>
  <div>
    {{msg}}
    <router-view/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: 'hello world333'
    }
  },
  mounted() {
    console.log('id==',this.$route.params.user)
  }
  
}
</script>
<style lang="" scoped>
div {
  color: red;
}
  
</style>