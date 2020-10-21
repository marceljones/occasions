import React, { useContext, useEffect } from "react"
import { AttendeeContext } from "./AttendeeProvider"
import { AttendeeCard } from "./AttendeeCard"
import { useHistory } from "react-router-dom"
import { Button, Col, Container, Row } from "reactstrap"
import "./Attendee.css"

export const AttendeeList = () => {
    const {attendees, getAttendees} = useContext(AttendeeContext)

    useEffect(() => {
        getAttendees()
    }, [])

    const history = useHistory()
    return (
        <>
            <Container className="bg-light overflow-auto h-15 border border-success rounded-top">
                <Button outline color="success" className="float-right" onClick={() => history.push("/attendee/create")}>
                    Add Attendee
            </Button>
                <h2 className="text-success"> Attendees</h2>
            </Container>
            {/* <Container className="bg-light overflow-auto h-25 border border-success rounded-bottom border-top-0"> */}
                {/* {
                    attendees.map(attendee => {
                        return <AttendeeCard key={attendee.id} attendee={attendee} />

                    })
                } */}
            {/* </Container> */}
        </>
    )
}