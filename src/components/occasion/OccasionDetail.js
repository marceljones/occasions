import React, { useContext, useEffect, useState } from "react"
import { OccasionContext } from "./OccasionProvider"
import "./Occasion.css"
import { useParams, useHistory } from "react-router-dom"

export const OccasionDetail = () => {
    const { getOccasionById, deleteOccasion } = useContext(OccasionContext)

    const [occasion, setOccasion] = useState({})
    const { occasionId } = useParams()
    const history = useHistory();

    useEffect(() => {
        getOccasionById(occasionId)
            .then((response) => {
                setOccasion(response)
            })
    }, [])

    return (
        <section className="occasion">
            <h3 className="occasion__name">{occasion.name}</h3>
            <div className="occasion__name">Name: {occasion.name}</div>
            <div className="occasion__date">Date: {occasion.date}</div>
            <div className="occasion__Location">Location: {occasion.location}</div>
            <button onClick={
                () => {
                    deleteOccasion(occasion.id)
                        .then(() => {
                            history.push("/")
                        })
                }}>Delete Entry
            </button>
            <button onClick={() => {
                history.push(`/occasion/edit/${occasion.id}`)
            }}>EEdit</button>
            <button onClick={() => history.push("/")}>
                Cancel
            </button>
            <button onClick={() => history.push("/")}>
                Add to My Occasions
            </button>
            
        </section>

    )
}