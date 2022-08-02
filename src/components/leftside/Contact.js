import React from "react";
import "./Contact.css";

const Contact = ({phoneNumber, email, address}) => {
    return (
        <div className="contact">
            <span className="regular-text">{phoneNumber}</span>
            <span className="regular-text">{email}</span>
            <span className="regular-text">{address}</span>
        </div>
    );
}

export default Contact;