import React, { useContext, useEffect, useState } from "react"
import { AttendeeContext } from "./AttendeeProvider"
import { useParams, useHistory } from "react-router-dom"
import { Container, Card, Button, CardTitle, CardText } from 'reactstrap'


export const AttendeeDetail = () => {
    const { deleteAttendee, getAttendeeById } = useContext(AttendeeContext)
    const [attendee, setAttendee] = useState({})
    const { attendeeId } = useParams();
    const history = useHistory();

    useEffect(() => {
        getAttendeeById(attendeeId)
            .then((response) => {
                setAttendee(response)
            })
    }, [])

    const Cancel = () => {
        history.push("/")
    }

    return (
        <Container>

            <Card body inverse color="success">
                <CardTitle>{attendee.title}</CardTitle>
                <CardTitle>Date: {attendee.date}</CardTitle>
                <CardTitle>Synopsis: {attendee.content}</CardTitle>
                <CardTitle>Posted by: {attendee.user?.username}</CardTitle>
                <CardTitle>Full Story: <a href={attendee.source}>Click Here</a></CardTitle>
            </Card>




            <div className="form__buttons">
                {attendee?.user?.id === parseInt(localStorage.getItem("occasion_user")) ?
                    <>
                        <Button color="warning" onClick={
                            () => {
                                deleteAttendee(attendee.id)
                                    .then(() => {
                                        history.push("/")
                                    })
                            }}>Delete Attendee
         </Button>
                        <Button color="warning" onClick={() => {
                            history.push(`/attendees/edit/${attendee.id}`)
                        }}>Edit</Button>
                    </>
                    : null}

                <Button color="warning" className="float-right"
                    onClick={event => {
                        event.preventDefault()
                        Cancel()

                    }}>X</Button>
            </div>

        </Container>
    )
}