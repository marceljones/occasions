import React, { useContext, useEffect } from "react"
import { ReviewContext } from "./ReviewProvider"
import { ReviewCard } from "./ReviewCard"
import { useHistory } from "react-router-dom"
import { Button, Col, Container, Row } from "reactstrap"
import "./Review.css"

export const ReviewList = () => {
    const { reviews, getReview } = useContext(ReviewContext)

    useEffect(() => {
        // getReview();
    }, [])

    const history = useHistory()
    return (
        <>
            <Container className="bg-light overflow-auto h-15 border border-success rounded-top">
                <Button outline color="success" className="float-right" onClick={() => history.push("/review/create")}>
                    Add Review
            </Button>
                <h2 className="text-success"> Reviews</h2>
            </Container>
            <Container className="bg-light overflow-auto h-25 border border-success rounded-bottom border-top-0">
                {
                    reviews.map(review => {
                        return <ReviewCard key={review.id} review={review} />

                    })
                }
            </Container>
        </>
    )
}