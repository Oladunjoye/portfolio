import React from "react";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="profile-img">
          <img src="images/profile.jpg" />
        </div>
        <div className="about-details">
          <div className="about-heading">
            <h1>About</h1>
            <h6>Myself</h6>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ip
          </p>


          <div className="social-media">
          <ul className="nav-list">
            <li>
              <a href="#" className="icon-link">
                <i className="fa fa-facebook-square"></i>
              </a>
            </li>
            <li>
              <a href="#" className="icon-link">
                <i className="fa fa-twitter-square"></i>
              </a>
            </li>
            <li>
              <a href="#" className="icon-link">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
        </div>
     
      </div>
    </section>
  );
}
