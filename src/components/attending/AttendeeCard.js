import React from "react"
import './Attendee.css'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from "react-router-dom"
import { Card, CardBody, CardTitle, CardText, CardHeader } from "reactstrap"

export const AttendeeCard = ({ attendee}) => (
    <section className="attendee">
        <Card className="rounded bg-light clearfix">
            <CardHeader className="bg-success">
                <Link className="text-light" to={`/attendee/detail/${attendee.id}`}>
                    {attendee.user.userName}
                </Link>
            </CardHeader>
            <CardBody>
                <CardTitle>Occasion: {attendee.occasionName}</CardTitle>
                <CardText>Date: {attendee.date}</CardText>
                <CardText>UserName: {attendee.user.userName}</CardText>
                {/*Would like to have a running total of attending on card  */}
            </CardBody>
        </Card>
    </section >
)