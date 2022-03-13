import React from 'react';
import './styles.css';
import Banner1 from '../../img/banner1.jpg'
import Banner2 from '../../img/banner2.jpg'
import Banner3 from '../../img/banner3.jpg'
import Banner4 from '../../img/banner4.jpg'

const HeroSection = () => {

    return  <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={3} aria-label="Slide 4" />
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={Banner1} className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src={Banner2} className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src={Banner3} className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src={Banner4} className="d-block w-100" alt="..." />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
};

export default HeroSection;
