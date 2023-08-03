import React from 'react';
import axios from 'axios';
import {useEffect,useState} from "react";

export default function Chatpage() {
    const [chats,setChats] = useState([]);

    const fetchChats= async()=>{
        const {data} = await axios.get("/api/chat");
        setChats(data);
        // console.log(data);
    };

    useEffect(()=>{
        fetchChats();
    },[]);

  return(
    <div>{chats.map(chat=>
        <div>{chat.chatName} </div>
    )}
    </div>
  ) 
}
