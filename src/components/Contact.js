import React from "react";

export default function Contact() {
  return (
    <section className="contact " id="contact">
      <div className="section-heading">
        <h1>Contact</h1>
        <h6>100% a11y and response</h6>
      </div>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" />

        <label htmlFor="name">Email</label>
        <input type="text" id="name" name="name" placeholder="Enter your email adress"/>

        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" name="subject" placeholder="Enter the subject of mail" />

        <label htmlFor="message">Message</label>
        
        <textarea type="text" id="message" name="message" rows="6" cols="50" />

        
      </form>
    </section>
  );
}
