import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import { LocationCard } from "./LocationCard"
import { useHistory } from "react-router-dom"
import { Button, Col, Container, Row } from "reactstrap"
import "./Location.css"

export const LocationList = () => {
    const { locations, getLocationEntries } = useContext(LocationContext)

    useEffect(() => {
        getLocationEntries()
    }, [])

    const history = useHistory()
    return (
        <>
            <Container className="bg-light overflow-auto h-15 border border-success rounded-top">
                <Button outline color="success" className="float-right" onClick={() => history.push("/location/create")}>
                    Add Location
            </Button>
                <h2 className="text-success"> Locations</h2>
            </Container>
            <Container className="bg-light overflow-auto h-25 border border-success rounded-bottom border-top-0">
                {
                    locations.map(location => {
                        return <LocationCard key={location.id} location={location} />

                    })
                }
            </Container>
        </>
    )
}