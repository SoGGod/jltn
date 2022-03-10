import React, { useState } from 'react'
import { MenuOutlined } from '@ant-design/icons';
import { Drawer } from 'antd';
import { Menu } from 'antd';
import logo from '../../../img/logo.png'
import './style.css'
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

const Drawers = () => {
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    return (
        <>
            <MenuOutlined className='menuicon'
                onClick={showDrawer} />
            <Drawer title={<>
                <img src={logo} alt="map__logo" />
            </>} placement="left" width="270px"
                onClose={onClose} visible={visible}>
                <Menu
                    style={{ width: 226 }}
                    mode="inline"
                >
                    <Menu.Item key="1">
                        <Link to='/' onClick={onClose}>HOME</Link>
                    </Menu.Item>
                    <SubMenu key="sub1" id='sub-menu' title="About JALTAN">
                        <Menu.Item key="2a">
                            <Link to='/introduction-objectives' onClick={onClose}> Introduction & Objectives</Link>
                        </Menu.Item>
                        <Menu.Item key="2b">
                            <Link to='/what-jaltan-does' onClick={onClose}>What JALTAN does</Link>
                        </Menu.Item>
                        <Menu.Item key="2c">
                            <Link to='/event-coordinator' onClick={onClose}>Event Co-ordinator</Link>
                        </Menu.Item>
                        <Menu.Item key="2d">
                            <Link to='/impact-of-jalltan' onClick={onClose}>Impact Of JALTAN</Link>
                        </Menu.Item>
                        <Menu.Item key="2e">
                            <Link to='/how-jaltan-can-be-helpful' onClick={onClose}>How JALTAN can be helpful</Link>
                        </Menu.Item>
                        <Menu.Item key="2f">
                            <Link to='/japanese-language-necessary'onClick={onClose}>Japanese Language Importance</Link>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="3">
                        <Link to='/program' onClick={onClose}>Program</Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Link to='/news' onClick={onClose}>News</Link>
                    </Menu.Item>
                    <SubMenu key="sub2" id='sub-menu' title="Association">
                        <Menu.Item key="5a">
                            <Link to='/executive-committe' onClick={onClose}> Executive Committe</Link>
                        </Menu.Item>
                        <Menu.Item key="5b">
                            <Link to='/list-of-schools' onClick={onClose}>List Of Schools</Link>
                        </Menu.Item>
                        <Menu.Item key="5c">
                            <Link to='/event-coordinator' onClick={onClose}>Event Co-ordinator</Link>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9">
                        <Link to='/photo-gallery' onClick={onClose}>Photo Gallery</Link>
                    </Menu.Item>
                    <Menu.Item key="8">
                        <Link to='/contact-us' onClick={onClose}>Contact Us</Link>
                    </Menu.Item>
                </Menu>
            </Drawer>
        </>
    )
}

export default Drawers
