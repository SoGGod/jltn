import React from 'react'
import './style.css'
const Teams = () => {
  return (
    <div className="meet-our-team pt-5 pb-3 pb-md-5">
    <div className="team-header pb-4">
      <h3>Meet Our Team</h3>
    </div>
    <div className="team-section">
      <div className="team">
        <div className="team-card">
          <div className="img">
            <img src="./images/punakaji.jpg" alt="team__img" />
          </div>
          <div className="team-content pt-3">
            <h5>Puna Kaji Prajapati</h5>
            <p>President</p>
          </div>
        </div>
        <div className="team-card">
          <div className="img">
            <img src="./images/manish.jpg" alt="team__img" />
          </div>
          <div className="team-content pt-3">
            <h5>Manish Shrestha</h5>
            <p>Vice President</p>
          </div>
        </div>
        <div className="team-card">
          <div className="img">
            <img src="./images/rajendra.jpg" alt="team__img" />
          </div>
          <div className="team-content pt-3">
            <h5>Rajendra K.C</h5>
            <p>Vice President</p>
          </div>
        </div>
        <div className="team-card">
          <div className="img">
            <img src="./images/sanjay.jpg" alt="team__img" />
          </div>
          <div className="team-content pt-3">
            <h5>Sanjay Shrestha</h5>
            <p>General Secretary</p>
          </div>
        </div>
      </div>
    </div>
    <div className='location-map'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.57808693839!2d85.31691386487337!3d27.70417064713467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19075849239d%3A0x4ddaddd1271c3890!2sBagbazar%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1646382058315!5m2!1sen!2snp" 
     className='w-100' height={400} style={{ border: 0 }} allowFullScreen loading="lazy" ></iframe>
    </div>
  </div>
  )
}

export default Teams