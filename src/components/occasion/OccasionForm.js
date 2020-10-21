import React, { useContext, useState, useEffect } from "react"
import { OccasionContext } from "../occasion/OccasionProvider"
import "./Occasion.css"
import { useHistory, useParams } from 'react-router-dom';
import { Button } from "reactstrap"

export const OccasionForm = () => {
    const { addOccasion, getOccasionById, updateOccasion } = useContext(OccasionContext)


    //for edit, hold on to state of occasion in this view
    const [occasion, setOccasion] = useState({})
    //wait for data before button is active
    const [isLoading, setIsLoading] = useState(true);

    const { occasionId } = useParams();
    const history = useHistory();

    //when field changes, update state. This causes a re-render and updates the view.
    //Controlled component
    const handleControlledInputChange = (e) => {
        //When changing a state object or array, 
        //always create a copy make changes, and then set state.
        const newOccasion = { ...occasion }
        //occasion is an object with properties. 
        //set the property to the new value
        newOccasion[e.target.name] = e.target.value
        //update state
        setOccasion(newOccasion)
    }

    // If occasionId is in the URL, getoccasionById
    useEffect(() => {
        if (occasionId) {
            getOccasionById(occasionId)
                .then(occasion => {
                    setOccasion(occasion)
                    setIsLoading(false)
                })
        } else {
            setIsLoading(false)
        }

    }, [])

    const construcOccasionObject = () => {
        //disable the button - no extra clicks
        setIsLoading(true);
        if (occasionId) {
            //PUT - update
            updateOccasion({
                name: occasion.name,
                date: occasion.date,
                location: occasion.location,
                id: occasion.id,
                userId: parseInt(localStorage.occasion_user)

            })
                .then(() => history.push(`/occasion/detail/${occasion.id}`))
        } else {
            //POST - add
            addOccasion({
                name: occasion.name,
                date: occasion.date,
                location: occasion.location,
                id: occasion.id,
                userId: parseInt(localStorage.occasion_user)
            })
                .then(() => history.push("/occasion"))
        }
    }
    // Function for cancel button
    const Cancel = () => {
        history.push("/")
    }
//Function to add occasion to myOccasion

let addToMyList = [];

const addToMyOccasionList = () => {
    const userName = userName.current.value
    setIsLoading(true);
        if (occasionId.userName === userName) {
            addToMyList({
                name: occasion.name,
                date: occasion.date,
                location: occasion.location
            })
     
            .then(() => history.push("/"))
}
}

    return (
        <form className="OccasionForm">
            <Button outline color="secondary" close aria-label="Cancel"
                disabled={isLoading}
                onClick={occasion => {
                    occasion.preventDefault()
                    Cancel()
                }}></Button>

            <h2 className="occasionForm__title">{occasionId ? <>Edit Occasion</> : <>New Occasion</>}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="OccasionTitle">Occasion Name: </label>
                    <input type="text" id="OccasionName" name="name" required autoFocus className="form-control"
                        placeholder="Name"
                        onChange={handleControlledInputChange}
                        defaultValue={occasion.name} />
                </div>
            </fieldset >
            <fieldset>
                <div className="form-group">
                    <label htmlFor="occasionDate">Occasion Date:</label>
                    <input type="date" id="occasionDate" name="date" required autoFocus className="form-control"
                        placeholder="Date"
                        onChange={handleControlledInputChange}
                        defaultValue={occasion.date} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="occasionHost">Occasion Host: </label>
                    <input type="text" id="occasionHost" name="host" required autoFocus className="form-control"
                        placeholder="Host"
                        onChange={handleControlledInputChange}
                        defaultValue={occasion.host} />
                </div>
            </fieldset >
            <fieldset>
                <div className="form-group">
                    <label htmlFor="occasionLocation">Host City: </label>
                    <input type="text" id="occasionLocation" name="location" required autoFocus className="form-control"
                        placeholder="Location"
                        onChange={handleControlledInputChange}
                        defaultValue={occasion.location} />
                </div>
            </fieldset >


            <Button outline color="secondary"
                disabled={isLoading}
                onClick={e => {
                    e.preventDefault() // Prevent browser from submitting the form
                    construcOccasionObject()
                }}>
                {occasionId ? <>Save Occasion</> : <>Add Occasion</>}</Button>


        </form >
    )
}