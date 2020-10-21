import React, { useContext } from "react";
import { useHistory} from "react-router-dom"
import { ListGroupItem } from "reactstrap";
import { MessageContext} from "./MessageProvider"
import { Link } from "react-router-dom"
import "./Message.css";
import { Card, CardBody, CardTitle, CardText, CardHeader } from "reactstrap"
//create HTML for a single message
 
export const MessageCard = ({ message }) => (
  <section className="message">
      <Link className="success" to={`/messages/detail/${message.id}`}>
          <h3 className="message__content">{message.message}</h3>
      </Link>
      <div className="message__user">{message.user.username}</div>
  </section>
)