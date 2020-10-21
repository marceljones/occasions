import React, { useState, createContext } from "react"

export const OccasionContext = createContext()

export const OccasionProvider = (props) => {
    const [occasions, setOccasions] = useState([])

    const getOccasionEntries = () => {
        return fetch("http://localhost:8088/occasions")
            .then(response => response.json())
            .then(setOccasions)
    }

    const addOccasion = occasionObj => {
        return fetch("http://localhost:8088/occasions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(occasionObj)
        })
            .then(getOccasionEntries)
    }

    const getOccasionById = (id) => {
        return fetch(`http://localhost:8088/occasions/${id}?_expand=user`)
            .then(res => res.json())
    }

    // const addToMyOccasions = occasionObj => {
    //     return fetch("http://localhost:8088/occasions.)
    // }
    const deleteOccasion = occasionId => {
        return fetch(`http://localhost:8088/occasions/${occasionId}`, {
            method: "DELETE"
        })
            .then(getOccasionEntries)
    }

    const updateOccasion = occasion => {
        return fetch(`http://localhost:8088/occasions/${occasion.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(occasion)
        })
            .then(getOccasionEntries)
    }


    return (
        <OccasionContext.Provider value={{
            occasions, getOccasionEntries, addOccasion, getOccasionById, deleteOccasion, updateOccasion
        }}>
            {props.children}
        </OccasionContext.Provider>
    )


}