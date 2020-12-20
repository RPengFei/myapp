<template>
    <div>
        登录注册
        <div ></div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name:'Login',
    data(){
        return{

        }
    },
    mounted(){
        axios.get('https://picsum.photos/200/300').then(res=>{
            console.log(res);
        })
    }
}
</script>
<style lang="less" scoped>
    
</style>