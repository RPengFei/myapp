<template>
  <div>
    <myhader></myhader> 
    <router-view></router-view>
  </div>
</template>
<script>
import myhader from "../components/Header";
export default {
  components:{
    myhader
  }
  
}
</script>
