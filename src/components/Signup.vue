<template>
  <h2>Sign Up</h2>
  <form @submit.prevent="signup">
    <input type="text" placeholder="display name" v-model="displayName">
    <input type="email" placeholder="email" v-model="email" >
    <input type="password" placeholder="password" v-model="password">
    <div v-if="error" class="error">{{error}}</div>
    <button>Sign up</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useSignup from '../composables/useSignup'
export default {
  emits : ['enterChatroom'],
    setup(props,context){
        let displayName = ref("")
        let email = ref("")
        let password = ref("")
        let {error,createAccount} = useSignup()
        let signup = async ()=>{
          let res = await createAccount(email.value,password.value,displayName.value)
          if(res){
            context.emit('enterChatroom')
          }else{
            console.log(error.value );
          }
        } 
        return {displayName,email,password,signup,error}
    }
}
</script>

<style>

</style>