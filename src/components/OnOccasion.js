import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { Login } from "./auth/Login"
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Register } from "./auth/Register"
import "./OnOccasion.css"
import { NavBar } from "./NavBar";

export const OnOccasion = () => (
    <>
      <Route render={() => {
        if (localStorage.getItem("occasion_user")) {
          return (
            <>
            <NavBar />
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