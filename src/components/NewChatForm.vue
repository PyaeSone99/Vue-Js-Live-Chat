<template>
  <form>
    <textarea placeholder="text message and hit enter to send" @keypress.enter="handleSubmit" v-model="message"></textarea>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import getUser from '@/composables/getUser';
import { timestamp } from '@/firebase/config';
import UseCollection from '../composables/UseCollection.js'
export default {
    setup(){
        let message = ref("");
        let {user} = getUser()
        let {error,addDoc} = UseCollection('message')
        let handleSubmit=()=>{
            let chat = {
                name : user.value.displayName,
                message : message.value,
                created_at : timestamp()
            }
            addDoc(chat)
            message.value ="";
        }

        return {message,handleSubmit}
    }
}
</script>

<style>
    form {
        margin: 10px;
    }
    textarea {
        width: 100%;
        max-width: 100%;
        margin-bottom: 6px;
        padding: 10px;
        box-sizing: border-box;
        border: 0;
        border-radius: 20px;
        font-family: inherit;
        outline: none;
    }
</style>