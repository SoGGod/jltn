import React from 'react'
import './style.css'
import Manish from '../../img/manish Shrestha.jpg'
import Rajendnra from '../../img/rajenrda KC.jpg'
import Sanjay from '../../img/Sanjay Shrestha.jpg'
import Bijaylal from '../../img/Bijay lal Singh.jpg'
import Ravi from '../../img/Ravi Shrestha.jpg'
import Sunil from '../../img/Sunil Narayan Joshi.jpg'
import Aruna from '../../img/Sruna Shakaya.jpg'
import Bikram from '../../img/Bikram Jugiju Shrestha.jpg'
import Lilabd from '../../img/Lal Bd Bista.jpg'
import Prajan from '../../img/Prajan Shrestha.jpg'
import Purnakaji from '../../img/Purna kaji.jpg'
const Teams = () => {
  return (
    <div className="meet-our-team pt-5 pb-3 pb-md-5">
    <div className="team-header pb-4">
      <h3>Executive Board Members, 2021/2023</h3>
    </div>
    <div className="team-section">
      <div className="team">
        <div className="team-card">
          <div className="img">
            <img src={Manish} alt="team__img" />
          </div>
          <div className="team-content pt-3">
            <h5>Manish Shrestha</h5>
            <b><p> President</p></b>
            <p style={{marginTop:'-10px'}}> Topa International Education Center</p>
          </div>
        </div>

        <div className="team-card">
          <div className="img">
            <img src={Rajendnra} alt="team__img" />
          </div>
          <div className="team-content pt-3">
            <h5>Rajendra K.C</h5>
            <b><p> Vice President</p></b>
            <p style={{marginTop:'-10px'}}> Yokohama Japanese Language Academy</p>
          </div>
        </div>

        <div className="team-card">
          <div className="img">
            <img src={Sanjay} alt="team__img" />
          </div>
          <div className="team-content pt-3">
            <h5>Sanjay Shrestha</h5>
            <b><p>Vice President</p></b>
            <p style={{marginTop:'-10px'}}> Nozomi Japanese Language School</p>
          </div>
        </div>

        <div className="team-card">
          <div className="img">
            <img src={Bijaylal} alt="team__img" />
          </div>
          <div className="team-content pt-3">
            <h5>Bijay Lal Singh</h5>
            <b><p> General Secretary</p></b>
            <p style={{marginTop:'-10px'}}> Asian Language Institute</p>
          </div>
        </div>

        <div className="team-card">
          <div className="img">
            <img src={Ravi} alt="team__img" />
          </div>
          <div className="team-content pt-3">
            <h5>Ravi Shrestha</h5>
            <b><p> Joint Secretary</p></b>
            <p style={{marginTop:'-10px'}}> Ajisai Nepal Educational Foundation</p>
          </div>
        </div>

        <div className="team-card">
          <div className="img">
            <img src={Sunil} alt="team__img" />
          </div>
          <div className="team-content pt-3">
            <h5>Sunil Narayan Joshi</h5>
            <b><p> Treasurer</p></b>
            <p style={{marginTop:'-10px'}}> Yala Japanese Language Institute</p>
          </div>
        </div>

        <div className="team-card">
          <div className="img">
            <img src={Aruna} alt="team__img" />
          </div>
          <div className="team-content pt-3">
            <h5>Aruna Shakya</h5>
            <b><p> Joint Treasurer</p></b>
            <p style={{marginTop:'-10px'}}> Japanese Language & Education Culture Center</p>
          </div>
        </div>

        <div className="team-card">
          <div className="img">
            <img src={Bikram} alt="team__img" />
          </div>
          <div className="team-content pt-3">
            <h5>Bikram Jugiju Shrestha</h5>
            <b><p> Executive Member</p></b>
            <p style={{marginTop:'-10px'}}> Quality Circle Educational Institute</p>
          </div>
        </div>

        <div className="team-card">
          <div className="img">
            <img src={Lilabd} alt="team__img" />
          </div>
          <div className="team-content pt-3">
            <h5>Lila Bahadur Bista</h5>
            <b><p> Executive Member</p></b>
            <p style={{marginTop:'-10px'}}> Nepal Japanese International Education School</p>
          </div>
        </div>

        <div className="team-card">
          <div className="img">
            <img src={Prajan} alt="team__img" />
          </div>
          <div className="team-content pt-3">
            <h5>Prajan Shrestha</h5>
            <b><p> Executive Member</p></b>
            <p style={{marginTop:'-10px'}}> Hizasi Japanese Language Institute</p>
          </div>
        </div>

        <div className="team-card">
          <div className="img">
            <img src={Purnakaji} alt="team__img" />
          </div>
          <div className="team-content pt-3">
            <h5>Purna Kaji Prajapati</h5>
            <b><p> IPP</p></b>
            <p style={{marginTop:'-10px'}}> Bishwo Bhasa Campus</p>
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