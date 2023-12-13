import React from "react";
import Header from "../layout/header";
import Footer from "../layout/footer";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <Header />
      <div className="contactPage">
        <p>--- Contact Us ---</p>
        <h1>Contact For Any Query</h1>
        <form className="contactForm">
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
              />
            </div>
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Your Email"
            />
          </div>
          <div className="form-group">
            <textarea
              placeholder="Message"
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="5"
            ></textarea>
          </div>
          <div className="form-group">
            <input
              type="submit"
              className="form-control bg-primary"
            />
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
