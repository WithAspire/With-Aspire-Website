import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ChevronDown, Facebook, Instagram, Linkedin, Mails, Phone, Twitter } from 'lucide-react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <>

      <header>

        <div className="top-header">
          <div className="container">
            <div className="inner-grid">
              <div className="social-icons">
                <a href="#"><Facebook size={15} /></a>
                <a href="#"><Instagram size={15} /></a>
                <a href="#"><Linkedin size={15} /></a>
                <a href="#"><Twitter size={15} /></a>
              </div>
              <div className="contact">
                <div className="block">
                  <div><Phone size={15} /></div>
                  <a href="tel:+910000000000">+91 0000000000</a>
                </div>
                <div className="block">
                  <div><Mails size={15} /></div>
                  <a href="mailto:info@withaspire.com">info@withaspire.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-header">
          <div className="container">
            <div className="inner-grid">
              <div className="logo">
                <Link to="/">
                  <img src="/logo.png" alt="..." />
                </Link>
              </div>
              <div className="link-block">
                <NavLink className="link-item" to="/">Home</NavLink>
                <div className="drop-block">
                  <div className="link-item">
                    <div>Company</div>
                    <div><ChevronDown size={15} /></div>
                  </div>
                  <div className="drop-list">
                    <NavLink to="/about-us">About Us</NavLink>
                    <NavLink to="/why-choose-us">Why Choose Us</NavLink>
                    <NavLink to="/career">Careers</NavLink>
                    <NavLink to="/our-team">Our Team</NavLink>
                    <NavLink to="/faq">FAQ</NavLink>
                  </div>
                </div>
                <NavLink className="link-item" to="/insight">Insights</NavLink>
                <div className="drop-block">
                  <div className="link-item">
                    <div>Services</div>
                    <div><ChevronDown size={15} /></div>
                  </div>
                  <div className="drop-list">
                    <NavLink to="/it-services">IT Services</NavLink>
                    <NavLink to="/web-development">Web Development</NavLink>
                    <NavLink to="/app-development">App Development</NavLink>
                    <NavLink to="/consultancy">Consultancy</NavLink>
                  </div>
                </div>
                <div className="drop-block">
                  <div className="link-item">
                    <div>Products</div>
                    <div><ChevronDown size={15} /></div>
                  </div>
                  <div className="drop-list">
                    <NavLink to="/employee-management">Employee Management System</NavLink>
                    <NavLink to="/human-resource-management">Human Resource Management System</NavLink>
                  </div>
                </div>
                <NavLink className="link-item" to="/contact">Contact Us</NavLink>
              </div>
            </div>
          </div>
        </div>

      </header>

    </>
  )
}
