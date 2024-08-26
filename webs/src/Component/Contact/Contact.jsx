import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <>
      <section className="contact-banner position relative w-100">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12">
              <div className="contact-head">
              <h2 className="text-center">contact us</h2>
              </div>
             
            </div>
          </div>
        </div>
      </section>
      <section className="contact-part">
        <div className="container">
          <div className="content-section">
            <div className="crd1">
              <i className="fa-solid fa-phone fa-4x"></i>
              <h3>Phone</h3>
              <p>033-12345678</p>
            </div>
            <div className="crd1">
              <i className="fa-solid fa-location-dot fa-4x"></i>
              <h3>Location</h3>
              <p>31, Street Lane, Salt Lake</p>
            </div>
            <div className="crd1">
              <i className="fa-solid fa-clock fa-4x"></i>
              <h3>Time</h3>
              <p>Open-10:00A.M to Close-9:00 PM</p>
            </div>
            <div className="crd1">
              <i className="fa-solid fa-envelope fa-4x"></i>
              <h3>Email</h3>
              <p>allorg.org.in</p>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-message">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <form className="review-form">
                <h3>Leave A Message Here!</h3>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="inputName">Name</label>
                    <input type="name" className="form-control" id="inputName" />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="inputEmail4">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label for="inputMessage">Message</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputMessage"
                    placeholder="Leave your message here!"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
