import React from "react";
import "./Contact.css";

const Contact = ({phoneNumber, email, address}) => {
    return (
        <section className="contact">
            <p className="regular-text">{phoneNumber}</p>
            <p className="regular-text">{email}</p>
            <p className="regular-text">{address}</p>
        </section>
    );
}

export default Contact;