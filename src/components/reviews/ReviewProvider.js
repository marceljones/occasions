import React, { useState, createContext } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const ReviewContext = createContext()

/*
 This component establishes what data can be used.
 */
export const ReviewProvider = (props) => {
    const [reviews, setReviews] = useState([])

    const getReviews = () => {
        return fetch("http://localhost:8088/reviews?_expand=user")
            .then(res => res.json())
            .then(setReviews)
    }

    const addReview = review => {
        return fetch("http://localhost:8088/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(review)
        })
            .then(getReviews)
    }
    const getReviewById = (id) => {
        return fetch(`http://localhost:8088/reviews/${id}?_expand=user`)
            .then(res => res.json())
    }

    const deleteReview = reviewId => {
        return fetch(`http://localhost:8088/reviews/${reviewId}`, {
            method: "DELETE"
        })
            .then(getReviews)
    }

    const updateReview = review => {
        return fetch(`http://localhost:8088/reviews/${review.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(review)
        })
            .then(getReviews)
    }

    /*
        Return a context provider which has the
        `review` state, the `addReview` function,
        and the `getReview` function as keys. This
        allows any child elements to access them.
    */
    return (
        <ReviewContext.Provider value={{
            reviews, addReview, getReviews, getReviewById, deleteReview, updateReview
        }}>
            {props.children}
        </ReviewContext.Provider>
    )
}