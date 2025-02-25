import React from 'react'
import Blogpost from "../Images/farmbox-delivery-push-blog-post-image-min.jpg";
import '../Styles/ourmission.css'

const OurMission = () => {
  return (
    <div>
      <section>
          <div class="BackImg border-4 border-top border-bottom border-warning ">
            <div class="row">
              <div class=" col-md-6 d-flex flex-column justify-content-center">
                <div class="card m-5">
                  <div class="BackimgTxt d-inline-block card-body">
                    <h1 class="text-center my-5">Our Mission</h1>
                    <h5 class="card-title mx-3">Supporting local farms</h5>
                    <p class="card-text mx-3 my-4">
                      We would not exist without our North Texas farmers. They
                      are the reason Farmbox got started! For the past 7 years,
                      we have built genuine relationships with the most
                      dedicated Texas farmers and makers in the region.
                    </p>
                    <h5 class="card-title mx-3">Sustainability</h5>
                    <p class="card-text mx-3 my-4">
                      We slash food miles by keeping it local. We always
                      purchase local first and expand out to find the best of
                      the best. When we have to expand further out to find items
                      not available locally, we partner with thoroughly-vetted
                      vendors that meet the same guidelines we apply to our
                      local producers.
                    </p>
                    <a class="MoreAboutUs d-flex align-items-center" href="#">
                      {" "}
                      <h4>More About Us &gt;</h4>{" "}
                    </a>
                  </div>
                  <div class="col-md-6 d-flex align-items-center">
                <div data-aos="flip-up">
                  <img
                    class="Blogpost img-fluid"
                    src={Blogpost}
                    alt="Blog Post"
                  />
                </div>
              </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>
    </div>
  )
}

export default OurMission
