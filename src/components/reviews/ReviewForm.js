import React, { useContext, useState, useEffect } from "react"
import { ReviewContext } from "../reviews/ReviewProvider"
import "./Review.css"
import { useHistory, useParams } from 'react-router-dom';
import { Button } from "reactstrap"

export const ReviewForm = () => {
    const { addReview, getReviewById, updateReview } = useContext(ReviewContext)


    //for edit, hold on to state of article in this view
    const [review, setReview] = useState({})
    //wait for data before button is active
    const [isLoading, setIsLoading] = useState(true);

    const { reviewId } = useParams();
    const history = useHistory();

    //when field changes, update state. This causes a re-render and updates the view.
    //Controlled component
    const handleControlledInputChange = (e) => {
        //When changing a state object or array, 
        //always create a copy make changes, and then set state.
        const newReview = { ...review }
        //article is an object with properties. 
        //set the property to the new value
        newReview[e.target.name] = e.target.value
        //update state
        setReview(newReview)
    }

    // If articleId is in the URL, getArticleById
    useEffect(() => {
        if (reviewId) {
            getReviewById(reviewId)
                .then(review => {
                    setReview(review)
                    setIsLoading(false)
                })
        } else {
            setIsLoading(false)
        }

    }, [])

    const constructReviewObject = () => {
        //disable the button - no extra clicks
        setIsLoading(true);
        if (reviewId) {
            //PUT - update
            updateReview({
                name: review.name,
                date: review.date,
                location: review.location,
                id: review.id,
                userId: parseInt(localStorage.occasion_user)

            })
                .then(() => history.push(`/review/detail/${review.id}`))
        } else {
            //POST - add
            addReview({
                name: review.name,
                date: review.date,
                location: review.location,
                id: review.id,
                userId: parseInt(localStorage.occasion_user)
            })
                .then(() => history.push("/"))
        }
    }
    // Function for cancel button
    const Cancel = () => {
        history.push("/")
    }


    return (
        <form className="ReviewForm">
            <Button outline color="secondary" close aria-label="Cancel"
                disabled={isLoading}
                onClick={review => {
                    review.prreviewDefault()
                    Cancel()
                }}></Button>

            <h2 className="reviewForm__title">{reviewId ? <>Edit review</> : <>New review</>}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="ReviewTitle">Review Name: </label>
                    <input type="text" id="ReviewName" name="name" required autoFocus className="form-control"
                        placeholder="Name"
                        onChange={handleControlledInputChange}
                        defaultValue={review.name} />
                </div>
            </fieldset >
            <fieldset>
                <div className="form-group">
                    <label htmlFor="reviewDate">Review Date:</label>
                    <input type="date" id="reviewDate" name="date" required autoFocus className="form-control"
                        placeholder="Date"
                        onChange={handleControlledInputChange}
                        defaultValue={review.date} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="reviewLocation">Location: </label>
                    <input type="text" id="reviewLocation" name="location" required autoFocus className="form-control"
                        placeholder="Location"
                        onChange={handleControlledInputChange}
                        defaultValue={review.location} />
                </div>
            </fieldset >


            <Button outline color="secondary"
                disabled={isLoading}
                onClick={e => {
                    e.prreviewDefault() // Prreview browser from submitting the form
                    constructReviewObject()
                }}>
                {reviewId ? <>Save Review</> : <>Add Review</>}</Button>


        </form >
    )
}