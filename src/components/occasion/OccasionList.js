import React, { useContext, useEffect } from "react"
import { OccasionContext } from "./OccasionProvider"
import { OccasionCard } from "./OccasionCard"
import { useHistory } from "react-router-dom"
import { Button, Col, Container, Row } from "reactstrap"
import "./Occasion.css"

export const OccasionList = () => {
    const { occasions, getOccasionEntries } = useContext(OccasionContext)

    useEffect(() => {
        getOccasionEntries()
    }, [])

    const history = useHistory()
    return (
        <>
            <Container className="bg-light overflow-auto h-15 border border-success rounded-top">
                <Button outline color="success" className="float-right" onClick={() => history.push("/occasion/create")}>
                    Add Occasion
            </Button>
            <Button outline color="success" className="float-right" onClick={() => history.push("/occasion/create")}>
                    View My Occasions
            </Button>
                <h2 className="text-success"> Occasions</h2>
            </Container>
            <Container className="bg-light overflow-auto h-25 border border-success rounded-bottom border-top-0">
                {
                    occasions.map(occasion => {
                        return <OccasionCard key={occasion.id} occasion={occasion} />

                    })
                }
            </Container>
        </>
    )
}