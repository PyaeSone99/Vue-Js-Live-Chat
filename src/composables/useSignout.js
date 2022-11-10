import { auth } from "@/firebase/config"
import { ref } from "vue"

let error = ref(null)

let signoutAccount =async ()=>{
    try{
        await auth.signOut()
    }catch(err){
        error.value = err.message
        console.log(error.value);
    }
}

let useSignout = ()=>{
    return {error,signoutAccount}
}

export default useSignout