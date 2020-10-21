import React, { useContext, useState, useEffect } from "react"
import { AttendeeContext } from "../attending/AttendeeProvider"
import { Button } from 'reactstrap'
import { useHistory, useParams } from 'react-router-dom';

export const AttendeeForm = () => {
    const { addAttendee, getAttendeeById, updateAttendee } = useContext(AttendeeContext)


    //for edit, hold on to state of attendee in this view
    const [attendee, setAttendees] = useState({})
    //wait for data before button is active
    const [isLoading, setIsLoading] = useState(true);

    const { attendeeId } = useParams();
    const history = useHistory();

    //when field changes, update state. This causes a re-render and updates the view.
    //Controlled component
    const handleControlledInputChange = (event) => {
        //When changing a state object or array, 
        //always create a copy make changes, and then set state.
        const newAttendee = { ...attendee }
        //attendee is an object with properties. 
        //set the property to the new value
        newAttendee[event.target.name] = event.target.value
        //update state
        setAttendees(newAttendee)
    }

    // If attendeeId is in the URL, getAttendeeById
    useEffect(() => {
        if (attendeeId) {
            getAttendeeById(attendeeId)
                .then(attendee => {
                    setAttendees(attendee)
                    setIsLoading(false)
                })
        } else {
            setIsLoading(false)
        }

    }, [])

    const constructAttendeeObject = () => {
        //disable the button - no extra clicks
        setIsLoading(true);
        if (attendeeId) {
            //PUT - update
            updateAttendee({
                date: attendee.date,
                id: attendee.id,
                name: attendee.name.userName,
                userId: parseInt(localStorage.occasion_user)

            })
                .then(() => history.push(`/attendees/detail/${attendee.id}`))
        } else {
            //POST - add
            addAttendee({
                date: attendee.date,
                id: attendee.id,
                name: attendee.name.userName,
                content: attendee.content,
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
        <form className="attendeeForm">
            <Button close aria-label="Cancel"
                disabled={isLoading}
                onClick={event => {
                    event.preventDefault()
                    Cancel()
                }}></Button>

            <h2 className="text-warning">{attendeeId ? <>Edit Attendee</> : <>Add Attendee</>}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="attendeeDate">Attendee Date:</label>
                    <input type="date" id="attendeeDate" name="date" required autoFocus className="form-control"
                        placeholder="Date"
                        onChange={handleControlledInputChange}
                        defaultValue={attendee.date} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="attendeeTitle">Attendee Title: </label>
                    <input type="text" id="attendeeTitle" name="title" required autoFocus className="form-control"
                        placeholder="Title"
                        onChange={handleControlledInputChange}
                        defaultValue={attendee.title} />
                </div>
            </fieldset >
            <fieldset>
                <div className="form-group">
                    <label htmlFor="attendeeContent">Attendee Synopsis: </label>
                    <input type="text" id="attendeeContent" name="content" required autoFocus className="form-control"
                        placeholder="Synopsis"
                        onChange={handleControlledInputChange}
                        defaultValue={attendee.content} />
                </div>
            </fieldset >
            <fieldset>
                <div className="form-group">
                    <label htmlFor="attendeeSource">Attendee Url: </label>
                    <input type="text" id="attendeeSource" name="source" required autoFocus className="form-control"
                        placeholder="URL"
                        onChange={handleControlledInputChange}
                        defaultValue={attendee.source} />
                </div>
            </fieldset >


            <button className="btn btn-warning"
                disabled={isLoading}
                onClick={event => {
                    event.preventDefault() // Prevent browser from submitting the form
                    constructAttendeeObject()
                }}>
                {attendeeId ? <>Save Attendee</> : <>Add Attendee</>}</button>

        </form >
    )
}