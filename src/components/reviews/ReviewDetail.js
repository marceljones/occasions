import React, { useContext, useEffect, useState } from "react"
import { ReviewContext } from "./ReviewProvider"
import "./Review.css"
import { useParams, useHistory } from "react-router-dom"

export const ReviewDetail = () => {
    const { getReviewById, deleteReview } = useContext(ReviewContext)

    const [review, setReview] = useState({})
    const { reviewId } = useParams()
    const history = useHistory();

    useEffect(() => {
        getReviewById(reviewId)
            .then((response) => {
                setReview(response)
            })
    }, [])

    return (
        <section className="review">
            <h3 className="review__name">{review.name}</h3>
            <div className="review__name">Name: {review.name}</div>
            <div className="review__date">Date: {review.date}</div>
            <div className="review__Location">Location: {review.location}</div>
            <button onClick={
                () => {
                    deleteReview(review.id)
                        .then(() => {
                            history.push("/")
                        })
                }}>Delete Entry
            </button>
            <button onClick={() => {
                history.push(`/review/edit/${review.id}`)
            }}>Edit</button>
            <button onClick={() => history.push("/")}>
                Cancel
            </button>
        </section>

    )
}