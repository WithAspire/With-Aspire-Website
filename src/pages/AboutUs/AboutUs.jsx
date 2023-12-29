import { Link } from 'react-router-dom'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import './AboutUs.css'

function AboutUs() {
    return (
        <>

            <BreadCrumb
                head="About Us"
                slogan="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla laborum repudiandae recusandae?"
            />

            <div id="about-us-page">

                <div className="software-innovation-block">
                    <div className="container">
                        <div className="inner-grid">
                            <div className="content-block">
                                <div className="slogan">
                                    WHAT WE OFFER
                                </div>
                                <div className="head">
                                    Your Partner for Software Innovation
                                </div>
                                <div className="content">
                                    WithAspire is the partner of choice for many of the world`s leading enterprises, SMEs and technology challengers. We help businesses elevate their value through custom software development, product design, QA and consultancy services.
                                </div>
                                <div className="content">
                                    <strong>
                                        We can help to maintain and modernize your IT infrastructure and solve various infrastructure-specific issues a business may face.
                                    </strong>
                                </div>
                            </div>
                            <div className="image-block">
                                <img src="/others/innovation.png" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="milestone-block">
                    <div className="container-fluid">
                        <div className="inner-grid">
                            <div className="block">
                                <div className="number">30+</div>
                                <div className="text">Active Clients</div>
                            </div>
                            <div className="block">
                                <div className="number">20+</div>
                                <div className="text">Projects Done</div>
                            </div>
                            <div className="block">
                                <div className="number">10+</div>
                                <div className="text">Team Advisors</div>
                            </div>
                            <div className="block">
                                <div className="number">2+</div>
                                <div className="text">Glorious Years</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="improve-innovate-block">
                    <div className="container">
                        <div className="inner-grid">
                            <div className="image-block">
                                <img src="/others/technology.png" alt="..." />
                            </div>
                            <div className="content-block">
                                <div className="slogan">
                                    TECHNOLOGY INDEX
                                </div>
                                <div className="head">
                                    Improve and Innovate with the Tech Trends
                                </div>
                                <div className="content">
                                    We hire and build your own remote dedicated development teams tailored to your specific needs.
                                </div>
                                <div className="progress-block">
                                    <div className="progress-head">
                                        <div className="text">Mobile Development</div>
                                        <div className="number">70%</div>
                                    </div>
                                    <div className="progress-bar progress-70"></div>
                                </div>
                                <div className="progress-block">
                                    <div className="progress-head">
                                        <div className="text">Web Development</div>
                                        <div className="number">90%</div>
                                    </div>
                                    <div className="progress-bar progress-90"></div>
                                </div>
                                <div className="progress-block">
                                    <div className="progress-head">
                                        <div className="text">UI/UX Development</div>
                                        <div className="number">60%</div>
                                    </div>
                                    <div className="progress-bar progress-60"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="more-about-us-block">
                    <div className="container">
                        <div className="inner-content">
                            <div className="head">
                                Lorem ipsum dolor sit.
                            </div>
                            <div className="content">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, aperiam a quasi laborum numquam animi, aliquid eaque maiores quisquam sit ducimus ullam. Facere eligendi tempore, porro natus libero exercitationem doloremque.
                            </div>
                            <div className="btn-bar">
                                <Link to="/contact">
                                    Give us a Message.
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default AboutUs
