import React, { useState, createContext } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const AttendeeContext = createContext()

/*
 This component establishes what data can be used.
 */
export const AttendeeProvider = (props) => {
    const [attendees, setAttendees] = useState([])

    const getAttendees = () => {
        return fetch("http://localhost:8088/attendees?_expand=user")
            .then(res => res.json())
            .then(setAttendees)
    }

    const addAttendee = attendeeObj => {
        return fetch("http://localhost:8088/attendees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(attendeeObj)
        })
            .then(getAttendees)
    }
    const getAttendeeById = (id) => {
        return fetch(`http://localhost:8088/attendees/${id}?_expand=user`)
            .then(res => res.json())
    }

    const deleteAttendee = attendeeId => {
        return fetch(`http://localhost:8088/attendees/${attendeeId}`, {
            method: "DELETE"
        })
            .then(getAttendees)
    }

    const updateAttendee = attendee => {
        return fetch(`http://localhost:8088/attendees/${attendee.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(attendee)
        })
            .then(getAttendees)
    }

    /*
        Return a context provider which has the
        `attendee` state, the `addattendee` function,
        and the `getattendee` function as keys. This
        allows any child elements to access them.
    */
    return (
        <AttendeeContext.Provider value={{
            attendees, addAttendee, getAttendees, getAttendeeById, deleteAttendee, updateAttendee
        }}>
            {props.children}
        </AttendeeContext.Provider>
    )
}