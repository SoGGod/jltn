import React from 'react'
import './style.css'
function AboutUsHome() {
  return (
    <div className="map-welcome pt-3">
      <div className="row w-100 p-3 p-md-3">
        <div className="col-lg-6 d-none d-lg-block">
          <div className="photo">
            <img src="./images/aboutushome.jpg" alt="welcome__image" className='w-100' />
          </div>
        </div>
        <div className="col-lg-6 col-md-12" >
          <div className="details-content ms-md-5">
            <div className="welcome-heading pt-md-5 mt-md-3 mt-lg-4 pb-3">
              <h3>About JALTAN</h3>
            </div>
            <div className="details">
              <p>
                Since its inception JALTAN has been playing vital role in unitutes of Nepal by
                conducting various activities. One of the major activities conducted by JALTAN
                is Japanese Language Proficiency test, which has been conducted in co-ordination
                with Embassy of Japan since 2000. Likewise, JALTAN has been actvely organizing japanese
                Language Speech Contest, Japanese Language Teachers' Seminar and etc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUsHome