import { auth } from "@/firebase/config"
import { ref } from "vue"

let error = ref(null)

let signIn = async (email,password)=>{
    try{
        let res = await auth.signInWithEmailAndPassword(email,password)
        if(!res){
            throw new Error("Cannot Login in")
        }
        return res;
    }catch(err){
        error.value = err.message
    }
}


let useLogin = ()=>{
    return {error,signIn}
}

export default useLogin