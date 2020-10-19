import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import "./Occasion.css"

export const Occasion = () => (
    <>
      <Route render={() => {
        if (localStorage.getItem("occasion_user")) {
          return (
            <>
            <ApplicationViews />
          </>
        )
      } else {
        return <Redirect to="/login" />
      }
    }} />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
) 