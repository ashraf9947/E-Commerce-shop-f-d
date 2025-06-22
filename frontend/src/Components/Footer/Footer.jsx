import React from 'react'
import { Link } from 'react-router-dom'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer' style={{
      backgroundColor: '#f0f0f0',
      minHeight: '100px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
    }}>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>CINDERELLA</p>
      </div>
      <ul className="footer-links">
        <li><Link to="/">Shop</Link></li>
        <li><Link to="/mens">Men</Link></li>
        <li><Link to="/womens">Women</Link></li>
        <li><Link to="/kids">Kids</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
            <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icon-container">
            <img src={pintester_icon} alt="" />
        </div>
        <div className="footer-icon-container">
            <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @2025 -All Right Reserve.</p>
      </div>
    </div>
  )
}

export default Footer
