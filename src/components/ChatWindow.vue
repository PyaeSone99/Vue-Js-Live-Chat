<template>
    <div class="chat-window">
        <div class="messages" ref="msgBox">
            <div class="single" v-for="singleMessage in formattedMessage" :key="singleMessage.id">
                <span class="created-at">{{singleMessage.created_at}}</span>
                <span class="name">{{singleMessage.name}}</span>
                <span class="message"> {{singleMessage.message}} </span>
            </div>
        </div>
    </div>
</template>

<script>
import { db } from '@/firebase/config'
import { ref } from '@vue/reactivity'
import {formatDistanceToNow} from 'date-fns'
import { computed, onUpdated } from '@vue/runtime-core'
export default {
    setup(){
        let allMessage = ref([])
        let formattedMessage = computed(()=>{
            return allMessage.value.map((msg)=>{
                let formatTime = formatDistanceToNow(msg.created_at.toDate())
                return { ...msg,created_at:formatTime}
            })
        })
        db.collection('message').orderBy('created_at').onSnapshot((snap)=>{
            let results=[]
            snap.docs.forEach((doc)=>{
                let document = {...doc.data(),id : doc.id}
                // if(doc.data().created_at){
                //     results.push(document)
                // }
                doc.data().created_at && results.push(document)
            })
            allMessage.value = results
        })
        //auto scrolling feature
        let msgBox = ref(null)
        onUpdated(()=>{
            msgBox.value.scrollTop=msgBox.value.scrollHeight
        })
        return {allMessage,formattedMessage,msgBox}
    }
}
</script>

<style>
    .chat-window {
        background: #fafafa;
        padding: 30px 20px;
    }
    .single {
        margin: 18px 0;
    }
    .created-at {
        display: block;
        color: #999;
        font-size: 12px;
        margin-bottom: 4px;
    }
    .name {
        font-weight: bold;
        margin-right: 6px;
    }
    .messages {
        max-height: 400px;
        overflow: auto;
    }
</style>