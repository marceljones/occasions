import React, { useContext, useState, useEffect } from "react"
import { LocationContext } from "../location/LocationProvider"
import "./Location.css"
import { useHistory, useParams } from 'react-router-dom';
import { Button } from "reactstrap"

export const LocationForm = () => {
    const { addLocation, getLocationById, updateLocation } = useContext(LocationContext)


    //for edit, hold on to state of article in this view
    const [location, setLocation] = useState({})
    //wait for data before button is active
    const [isLoading, setIsLoading] = useState(true);

    const { locationId } = useParams();
    const history = useHistory();

    //when field changes, update state. This causes a re-render and updates the view.
    //Controlled component
    const handleControlledInputChange = (e) => {
        //When changing a state object or array, 
        //always create a copy make changes, and then set state.
        const newLocation = { ...location }
        //article is an object with properties. 
        //set the property to the new value
        newLocation[e.target.name] = e.target.value
        //update state
        setLocation(newLocation)
    }

    // If articleId is in the URL, getArticleById
    useEffect(() => {
        if (locationId) {
            getLocationById(locationId)
                .then(location => {
                    setLocation(location)
                    setIsLoading(false)
                })
        } else {
            setIsLoading(false)
        }

    }, [])

    const constructLocationObject = () => {
        //disable the button - no extra clicks
        setIsLoading(true);
        if (locationId) {
            //PUT - update
            updateLocation({
                name: location.name,
                date: location.date,
                location: location.location,
                id: location.id,
                userId: parseInt(localStorage.occasion_user)

            })
                .then(() => history.push(`/location/detail/${location.id}`))
        } else {
            //POST - add
            addLocation({
                name: location.name,
                date: location.date,
                location: location.location,
                id: location.id,
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
        <form className="LocationForm">
            <Button outline color="secondary" close aria-label="Cancel"
                disabled={isLoading}
                onClick={location => {
                    location.prlocationDefault()
                    Cancel()
                }}></Button>

            <h2 className="locationForm__title">{locationId ? <>Edit Location</> : <>New Location</>}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="LocationTitle">Location Name: </label>
                    <input type="text" id="LocationName" name="name" required autoFocus className="form-control"
                        placeholder="Name"
                        onChange={handleControlledInputChange}
                        defaultValue={location.name} />
                </div>
            </fieldset >
            <fieldset>
                <div className="form-group">
                    <label htmlFor="locationDate">LocationDate:</label>
                    <input type="date" id="locationDate" name="date" required autoFocus className="form-control"
                        placeholder="Date"
                        onChange={handleControlledInputChange}
                        defaultValue={location.date} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="locationLocation">Location: </label>
                    <input type="text" id="locationLocation" name="location" required autoFocus className="form-control"
                        placeholder="Location"
                        onChange={handleControlledInputChange}
                        defaultValue={location.location} />
                </div>
            </fieldset >


            <Button outline color="secondary"
                disabled={isLoading}
                onClick={e => {
                    e.prlocationDefault() // Prlocation browser from submitting the form
                    constructLocationObject()
                }}>
                {locationId ? <>Save Location</> : <>Add Location</>}</Button>


        </form >
    )
}