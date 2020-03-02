import React from "react";

export default function Portfolio() {
  return (
    <section className="portfolio" id ="portfolio">
      <div className="container">
          <div className="section-heading">
              <h1>Portfolio</h1>
              <h6>View some of my work</h6>
          </div>
          <div className="portfolio-item">
          <div className="portfolio-img mr">
                  <img src="images/login-page.png" alt ="portfolio"/>
              </div>
          <div className="portfolio-description">
                <h6>Web Development</h6>
                <h6>Omnibiz CRM</h6>
                <p>
                        Lorem ipsum dolor sit amet, consecttur adipiscing elit
                        Lorem ipsum dolor sit amet, consecttur adipiscing elit

                    </p>
                    <a href="#" className="cta"> View Details</a>


              </div>
             
             

          </div>

          <div className="portfolio-item">
          <div className="portfolio-description mr">
                <h6>Web Development</h6>
                <h6>Blog Website</h6>
                <p>
                        Lorem ipsum dolor sit amet, consecttur adipiscing elit
                        Lorem ipsum dolor sit amet, consecttur adipiscing elit

                    </p>
                    <a href="#" className="cta"> View Details</a>

              </div>
              <div className="portfolio-img">
                  <img src="images/portitem2.jpeg" alt ="portfolio"/>
              </div>
             

          </div>

          <div className="portfolio-item">
          <div className="portfolio-img mr">
                  <img src="images/portitem3.jpeg" alt ="portfolio"/>
              </div>
          <div className="portfolio-description">
                <h6>Web Development</h6>
                <h6>Blog Website</h6>
                <p>
                        Lorem ipsum dolor sit amet, consecttur adipiscing elit
                        Lorem ipsum dolor sit amet, consecttur adipiscing elit

                    </p>
                    <a href="#" className="cta"> View Details</a>


              </div>
            
             

          </div>
      </div>
    </section>
  );
}
