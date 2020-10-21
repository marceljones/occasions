import React, { useContext, useEffect, useState } from "react"
import { MessageContext } from "./MessageProvider"
import { MessageCard } from "./MessageCard"
import { MessageForm } from "./MessageForm"
import { Button, Col, Container, Row } from "reactstrap"
import { useHistory } from "react-router-dom"
import "./Message.css";

export const MessageList = () => {
    const { messages, getMessages } = useContext(MessageContext)

    useEffect(() => {
        getMessages()
    }, [])

    const history = useHistory()
    return (
        <>
            <Container className="bg-light overflow-auto h-15 border border-danger rounded-top">
                {/* <Button outline color="success" className="float-right" onClick={() => history.push("")}> */}
                    
            {/* </Button> */}
                <h2 className="text-danger"> Messages</h2>
            </Container>
            <Container className="bg-light overflow-auto h-25 border border-danger rounded-bottom border-top-0">
                {
                    messages.map(message => {
                        return <MessageCard key={message.id} user={message.user.name} message={message} />
 
                    })
                }
            </Container>
        </>
    )
            }