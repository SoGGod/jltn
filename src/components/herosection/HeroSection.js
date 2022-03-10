import React from 'react';
import './styles.css';

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
        <img src="./images/banner1.jpg" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="./images/banner2.jpg" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="./images/banner3.jpg" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="./images/banner3.jpg" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="./images/banner4.jpg" className="d-block w-100" alt="..." />
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