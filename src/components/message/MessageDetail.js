import React, { useContext, useEffect, useState } from "react"
import { MessageContext } from "./MessageProvider"
import "./Message.css"
import { useParams, useHistory } from "react-router-dom"


export const MessageDetail = () => {
    const { deleteMessage, getMessageById } = useContext(MessageContext)
    const [message, setMessage] = useState({})
    const [user, setUser] = useState({})
    const { messageId } = useParams();
    const history = useHistory();

    useEffect(() => {
        
        getMessageById(messageId)
            .then((response) => {
                setMessage(response)
                setUser(response.user)
            })
    }, [])

    const Cancel = () => {
        history.push("/")
    }
    return (
        <section className="message">
            <h3 className="message__user">{message.user}</h3>
            <div className="message__content">{message.message}</div>
            

            
            <button onClick={
                () => {
                    deleteMessage(message.id)
                        .then(() => {
                            history.push("/")
                        })
                }}>Delete Message
         </button>
            <button onClick={() => {
                history.push(`/messages/edit/${message.id}`
                )
                
                    
                
            }}>Edit</button>

            <button className="btn btn-danger"
                onClick={event => {
                    event.preventDefault()
                    Cancel()

                }}>Cancel</button>

        </section>
    )
}