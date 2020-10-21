import React, { useContext, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory, useParams } from "react-router-dom";
import { MessageContext } from "./MessageProvider";
import { Button } from "reactstrap"


export const MessageForm = (props) => {
  const { addMessage, getMessageById, editMessage } = useContext(
    MessageContext
  );

  const [messages, setMessage] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { messageId } = useParams();
  const history = useHistory();

  const handleControlledInputChange = (event) => {
    const newMessage = { ...messages };
    newMessage[event.target.name] = event.target.value;
    setMessage(newMessage);
  };

  useEffect(() => {
    if (messageId) {
      getMessageById(messageId).then((message) => {
        setMessage(message);
        setIsLoading(false);
      });
    } else {
      setIsLoading(false);
    }
  }, []);

  const constructNewMessage = () => {
    setIsLoading(true);
    if (messageId) {
        editMessage({
            id: (messages.id),
            message: messages.message,
            
            userId: messages.userId
        })
            .then(() => history.push(`/messages/detail/${messages.id}`))
    } else {
        addMessage({
            message: messages.message,
            
            userId: parseInt(localStorage.getItem('occasion_user'))
        })
            // .then(() => history.push())
    }
}

return (
    <form className="messageForm">
      
        <h2 className="messageForm__title">New Message</h2>
       
        <fieldset>
            <div className="form-group">
                <label htmlFor="messageMessage"> </label>
                <input type="text" id="message" name="message" required autoFocus className="form-control"
                    placeholder="Enter message here:"
                    onChange={handleControlledInputChange}
                    defaultValue={messages.name} 
                    />
            </div>
        </fieldset>
        
        <button type="saveMessage"
            className="btn btn-danger"
            
            disabled={isLoading}
            onClick={event => {
                event.preventDefault() 
                // Prevent browser from submitting the form
                constructNewMessage()
            }}>
            {messageId ? <>Save Message</> : <>Send Message</> }
            </button>
    </form>
)
}