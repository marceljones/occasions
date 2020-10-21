import React, { useState, createContext } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Message.css";

//This creates the MessageContext
export const MessageContext = createContext()

export const MessageProvider = props => {

    //This sets the state for messages
    const [ messages, setMessages ] = useState([])

    //This will get messages from the database
    const getMessages = () => {
        return fetch("http://localhost:8088/messages?_expand=user")
            .then(res => res.json())
            .then(setMessages)
    }

    //This will add a message to the database
    const addMessage = message => {
        return fetch("http://localhost:8088/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(message)
        })
        .then(getMessages)
    }

    const getMessageById = (id) => {
    return fetch(`http://localhost:8088/messages/${id}`)
        .then(res => res.json())
}


const deleteMessage = messageId => {
    return fetch(`http://localhost:8088/messages/${messageId}`, {
        method: "DELETE"
    })
        .then(getMessages)
}

const editMessage = messageObject => {
    return fetch(`http://localhost:8088/messages/${messageObject.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(messageObject)
    })
    .then(getMessages)
}


    //context provides messages and get messages
    return (
        <MessageContext.Provider value={{
            messages, getMessages, addMessage, editMessage, deleteMessage, getMessageById
        }}>
            {props.children}
        </MessageContext.Provider>
    )

}