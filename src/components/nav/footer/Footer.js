import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../img/logo.png'
import './style.css'

function Footer() {
    return (
        <div className='footer-main'>
        <footer>
        <div className="content">
          <div className="left box">
            <div className="upper">
            <img src={logo} className="w-50 logo-footer" />
            </div>
            <div className="lower">
              <div className="topic">Contact us</div>
              <div className="address">
                <a href="#"><i className="fas fa-home" />Bagbazar, Kathmandu</a>
              </div>
              <div className="phone">
                <a href="#"><i className="fas fa-phone-volume" />+977-01-1234567</a>
              </div>
              <div className="email">
                <a href="#"><i className="fas fa-envelope" />info@jaltan.org.np</a>
              </div>
            </div>
          </div>
          <div className="middle box">
            <div className="topic">About JALTAN</div>
            <div><a href="#">Introducation &amp; Objectives</a></div>
            <div><a href="#">What JALTAN does</a></div>
            <div><a href="#">Event Co-ordinator</a></div>
            <div><a href="#">Impact of JALTAN</a></div>
            <div><a href="#">How JALTAN can be helpful</a></div>
            <div><a href="#">Japanese Language Importance</a></div>
          </div>
          <div className="right box">
            <div className="topic">Subscribe To Newsletter</div>
            <form action="#">
              <input type="text" placeholder="Enter email address" />
              <input type="submit" name defaultValue="Send" />
              <div className="media-icons">
                <a href="#"><i className="fab fa-facebook-f" /></a>
                <a href="#"><i className="fab fa-instagram" /></a>
                <a href="#"><i className="fab fa-twitter" /></a>
                <a href="#"><i className="fab fa-youtube" /></a>
                <a href="#"><i className="fab fa-linkedin-in" /></a>
              </div>
            </form>
          </div>
        </div>
        <div className="bottom">
          <p>Copyright © 2022 <a href="#">JALTAN</a> All rights reserved</p>
        </div>
      </footer>
      </div>
    )
}

export default Footer