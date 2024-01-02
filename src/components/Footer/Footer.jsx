import { ArrowUpRight, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import './Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>

            <footer>

                <div className="top-footer">
                    <div className="container">
                        <div className="inner-grid">
                            <div className="text">
                                <div>Heard</div>
                                <div>Enough?</div>
                            </div>
                            <div className="main-text">
                                <div>Contact Us</div>
                            </div>
                            <div className="redirect">
                                <ArrowUpRight />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bottom-footer">
                    <div className="container">
                        <div className="inner-grid">
                            <div className="about">
                                <div className="head">
                                    <div>ABOUT</div>
                                </div>
                                <div className="text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, repudiandae cumque. Earum odit non molestiae. Neque corrupti iusto ratione reprehenderit.
                                </div>
                            </div>
                            <div className="quick-link">
                                <div className="head">
                                    <div>QUICK LINKS</div>
                                </div>
                                <div className="links">
                                    <Link to="/it-services">IT Services</Link>
                                    <Link to="/web-development">Web Development</Link>
                                    <Link to="/app-development">App Development</Link>
                                    <Link to="/consultancy">Consultancy</Link>
                                </div>
                            </div>
                            <div className="information">
                                <div className="head">
                                    <div>INFORMATION</div>
                                </div>
                                <div className="links">
                                    <Link to="/">Terms & Conditions</Link>
                                    <Link to="/">Privacy Policy</Link>
                                </div>
                            </div>
                            <div className="connect">
                                <div className="head">
                                    <div>CONNECT WITH US</div>
                                </div>
                                <div className="social">
                                    <a href="#"><Facebook size={15} /></a>
                                    <a href="#"><Instagram size={15} /></a>
                                    <a href="#"><Linkedin size={15} /></a>
                                    <a href="#"><Twitter size={15} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright">
                    Copyright © 2023 With Aspire. All Rights Reserved.
                </div>

            </footer>

        </>
    )
}
