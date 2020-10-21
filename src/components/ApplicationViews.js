import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { Container, Row, Col } from "reactstrap"

//Occasions//
import { OccasionProvider } from "./occasion/OccasionProvider"
import { OccasionDetail } from "./occasion/OccasionDetail"
import { OccasionForm } from "./occasion/OccasionForm"
import { OccasionList } from "./occasion/OccasionList"
//Locations//
import { LocationProvider } from "./location/LocationProvider"
import { LocationDetail } from "./location/LocationDetail"
import { LocationForm } from "./location/LocationForm"
import { LocationList } from "./location/LocationList"
//Attending//
import { AttendeeProvider } from "./attending/AttendeeProvider"
import { AttendeeDetail } from "./attending/AttendeeDetail"
import { AttendeeForm } from "./attending/AttendeeForm"
import { AttendeeList } from "./attending/AttendeeList"
//Reviews//
import { ReviewProvider } from "./reviews/ReviewProvider"
import { ReviewDetail } from "./reviews/ReviewDetail"
import { ReviewForm } from "./reviews/ReviewForm"
import { ReviewList } from "./reviews/ReviewList"
//Messages//
import { MessageProvider } from "./message/MessageProvider"
import { MessageDetail } from "./message/MessageDetail"
import { MessageForm } from "./message/MessageForm"
import { MessageList } from "./message/MessageList"


export const ApplicationViews = () => {
    return (
        <>


            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/*Render Attendee Dropdown Details */}
            <OccasionProvider>
                <Route exact path="/Occasion/">
                    <OccasionList />
                </Route>
            </OccasionProvider>

            <OccasionProvider>
                <Route exact path="/Occasion/detail/:OccasionId(\d+)">
                    <OccasionDetail />
                </Route>
            </OccasionProvider>

<OccasionProvider>
    <AttendeeProvider>
        <LocationProvider>
            <ReviewProvider>
                <Route exat path="/occasion/create">
                    <OccasionForm />
                </Route>
            </ReviewProvider>
        </LocationProvider>
    </AttendeeProvider>
</OccasionProvider>
<OccasionProvider>
    <AttendeeProvider>
        <LocationProvider>
            <ReviewProvider>
                <Route exat path="/occasion/edit">
                    <OccasionForm />
                </Route>
            </ReviewProvider>
        </LocationProvider>
    </AttendeeProvider>
</OccasionProvider>








            <AttendeeProvider>
                <Route exact path="/Attendees/detail/:AttendeeId(\d+)">
                    {/* <Home /> */}
                    <AttendeeDetail />
                </Route>
            </AttendeeProvider>

            {/*Render Attendee Form */}
            <AttendeeProvider>
                <Route exact path="/Attendees/create">
                    {/* <Home /> */}
                    <AttendeeForm />
                </Route>
            </AttendeeProvider>

            {/*Render the Edit Attendee */}
            <AttendeeProvider>
                <Route exact path="/Attendees/edit/:AttendeeId(\d+)">
                    {/* <Home /> */}
                    <AttendeeForm />
                </Route>
            </AttendeeProvider>


            <ReviewProvider>
                <Route exact path="/Reviews/detail/:ReviewId(\d+)">
                    {/* <Home /> */}
                    <ReviewDetail />
                </Route>
            </ReviewProvider>

            <ReviewProvider>
                <Route exact path="/Reviews/create">
                    {/* <Home /> */}
                    <ReviewForm />
                </Route>
            </ReviewProvider>


            <ReviewProvider>
                <Route exact path="/Reviews/edit/:ReviewId(\d+)">
                    {/* <Home /> */}
                    <ReviewForm />
                </Route>
            </ReviewProvider>



            <MessageProvider>
                <Route exact path="/messages/detail/:messageId(\d+)">
                    <MessageDetail />
                </Route>
            </MessageProvider>



            <MessageProvider>
                <Route exact path="/messages/edit/:messageId(\d+)">
                    <Home />
                    <MessageForm />
                </Route>
            </MessageProvider>

        </>
    )
}
