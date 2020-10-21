import React from "react"
import { Link } from "react-router-dom"
import { Card, CardBody, CardTitle, CardText, CardHeader } from "reactstrap"
import ToolkitProvider from 'react-bootstrap-table2-toolkit';

export const OccasionCard = ({ occasion }) => (
    <section className="occasion">
        <Card className="rounded bg-light clearfix">
            <CardHeader className="bg-success">
                <Link className="text-light" to={`/occasion/detail/${occasion.id}`}>
                    {occasion.name}
                </Link>
            </CardHeader>
            <CardBody>
                <CardTitle>Name: {occasion.name}</CardTitle>
                <CardText>Date: {occasion.date}</CardText>
                <CardText>Location: {occasion.location}</CardText>
            </CardBody>
        </Card>
    </section >
)