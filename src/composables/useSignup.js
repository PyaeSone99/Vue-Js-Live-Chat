import { ref } from "vue"
import {auth} from '../firebase/config.js'

let error = ref(null)

let createAccount = async(email,password,displayName)=>{
    try{
        let res = await auth.createUserWithEmailAndPassword(email,password)
            if(!res){
            throw new Error("Cannot create a new user")
            }
        res.user.updateProfile({displayName : displayName})
        return res
      }catch(err){
        error.value = err.message
      }
}

let useSignUp = ()=>{
    return {error,createAccount}
}

export default useSignUp