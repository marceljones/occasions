import React from "react"
import { Link } from "react-router-dom"
import { Card, CardBody, CardTitle, CardText, CardHeader } from "reactstrap"

export const ReviewCard = ({ review }) => (
    <section className="review">
        <Card className="rounded bg-light clearfix">
            <CardHeader className="bg-success">
                <Link className="text-light" to={`/review/detail/${review.id}`}>
                    {review.name}
                </Link>
            </CardHeader>
            <CardBody>
                <CardTitle>Name: {review.name}</CardTitle>
                <CardText>Date: {review.date}</CardText>
                <CardText>Location: {review.location}</CardText>
            </CardBody>
        </Card>
    </section >
)