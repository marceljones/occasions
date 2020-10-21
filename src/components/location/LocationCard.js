import React from "react"
import { Link } from "react-router-dom"
import { Card, CardBody, CardTitle, CardText, CardHeader } from "reactstrap"

export const LocationCard = ({ location }) => (
    <section className="location">
        <Card className="rounded bg-light clearfix">
            <CardHeader className="bg-success">
                <Link className="text-light" to={`/location/detail/${location.id}`}>
                    {location.name}
                </Link>
            </CardHeader>
            <CardBody>
                <CardTitle>Name: {location.name}</CardTitle>
                <CardText>Date: {location.date}</CardText>
                <CardText>Location: {location.location}</CardText>
            </CardBody>
        </Card>
    </section >
)