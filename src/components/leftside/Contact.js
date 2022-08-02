import React from "react";
import "./Contact.css";

const Contact = ({phoneNumber, email, address}) => {
    return (
        <section className="contact">
            <p>{phoneNumber}</p>
            <p>{email}</p>
            <p>{address}</p>
        </section>
    );
}

export default Contact;