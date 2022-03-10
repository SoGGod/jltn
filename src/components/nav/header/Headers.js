import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../img/logo.png'
import { Modal, Button} from 'antd';
import './style.css';
import Drawers from './Drawers';


const Headers = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <nav className="navbar">
            <Drawers/>
            <NavLink  to="/"><img src={logo} alt="map__logo" /></NavLink>
            <NavLink
                exact
                activeClassName="navbar__link--active"
                className="navbar__link"
                to="/"
            >
                Home
            </NavLink>
            <li className="dropdown">About JALTAN <i className="fas fa-chevron-down"></i>
                <ul className="drop-list">
                    <li><Link to='/introduction-objectives' className='d-flex slink'><i className="fas fa-chevron-right"></i> <span>Introduction & Objectives</span></Link></li>
                    <li><Link to='/what-jaltan-does' className='d-flex slink'><i className="fas fa-chevron-right"></i> <span>What JALTAN does</span></Link></li>
                    <li><Link to='/event-coordinator' className='d-flex slink'><i className="fas fa-chevron-right"></i> <span>Event Co-ordinator</span></Link></li>
                    <li><Link to='/impact-of-jalltan' className='d-flex slink'><i className="fas fa-chevron-right"></i> <span>Impact Of JALTAN</span></Link></li>
                    <li><Link to='/how-jaltan-can-be-helpful' className='d-flex slink'><i className="fas fa-chevron-right"></i> <span>How JALTAN can be helpful</span></Link></li>
                    <li><Link to='/japanese-language-necessary' className='d-flex slink'><i className="fas fa-chevron-right"></i> <span>Japanese Language Importance</span></Link></li>
                </ul>
            </li>
            <NavLink
                activeClassName="navbar__link--active"
                className="navbar__link"
                to="/program"
            >
                Program
            </NavLink>
            <NavLink
                activeClassName="navbar__link--active"
                className="navbar__link"
                to="/news"
            >
                News
            </NavLink>
            <li className="dropdown">Association <i className="fas fa-chevron-down"></i>
                <ul className="drop-list">
                    <li><Link to='/executive-committe' className='d-flex slink'><i className="fas fa-chevron-right"></i> <span>Executive Committe</span></Link></li>
                    <li><Link to='/list-of-schools' className='d-flex slink'><i className="fas fa-chevron-right"></i> <span>List of Schools</span></Link></li>
                    <li><Link to='/event-coordinator' className='d-flex slink'><i className="fas fa-chevron-right"></i> <span>Event Co-ordinator</span></Link></li>
                </ul>
            </li>
            <NavLink
                activeClassName="navbar__link--active"
                className="navbar__link"
                to="/photo-gallery"
            >
                Photo Gallery
            </NavLink>
            <NavLink
                activeClassName="navbar__link--active"
                className="navbar__link"
                to="/contact-us"
            >
                contact us
            </NavLink>
            {/* <div className='search-btn'>
                <Button type="primary" onClick={showModal}>
                    <i className="fas fa-search"></i>
                </Button>
                <Modal title={
                    <>
                        <input type='text' placeholder='Search' id='input' ></input>
                        <i className="fas fa-search" id='sicon' style={{ color: '#fff' }}></i>
                    </>
                } visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                </Modal>
            </div> */}
        </nav>)
};

export default Headers;
