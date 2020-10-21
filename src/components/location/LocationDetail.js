import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import { useParams, useHistory } from "react-router-dom"
import { Container, Card, Button, CardTitle, CardText } from 'reactstrap'


export const LocationDetail = () => {
    const { deleteLocation, getLocationById } = useContext(LocationContext)
    const [location, setLocation] = useState({})
    const { locationId } = useParams();
    const history = useHistory();

    useEffect(() => {
        getLocationById(locationId)
            .then((response) => {
                setLocation(response)
            })
    }, [])

    const Cancel = () => {
        history.push("/")
    }

    return (
        <Container>

            <Card body inverse color="success">
                <CardTitle>{location.title}</CardTitle>
                <CardTitle>Date: {location.date}</CardTitle>
                <CardTitle>Synopsis: {location.content}</CardTitle>
                <CardTitle>Posted by: {location.user?.username}</CardTitle>
                <CardTitle>Full Story: <a href={location.source}>Click Here</a></CardTitle>
            </Card>




            <div className="form__buttons">
                {location?.user?.id === parseInt(localStorage.getItem("occasion_user")) ?
                    <>
                        <Button color="warning" onClick={
                            () => {
                                deleteLocation(location.id)
                                    .then(() => {
                                        history.push("/")
                                    })
                            }}>Delete Location
         </Button>
                        <Button color="warning" onClick={() => {
                            history.push(`/locations/edit/${location.id}`)
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