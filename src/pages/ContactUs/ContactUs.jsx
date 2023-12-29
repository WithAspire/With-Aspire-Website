import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import './ContactUs.css'

function ContactUs() {
    return (
        <>

            <BreadCrumb
                head="Contact Us"
                slogan="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla laborum repudiandae recusandae?"
            />

            <div id="contact-us-page">

                <div className="top-container">
                    <div className="form-container">
                        <div className="head-block">
                            <div className="head">Contact Form</div>
                            <div className="slogan">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </div>
                        </div>
                        <div className="form-block">
                            <div className="group-input">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" />
                            </div>
                            <div className="group-input">
                                <label htmlFor="email">E-Mail</label>
                                <input type="email" name="email" />
                            </div>
                            <div className="group-input">
                                <label htmlFor="number">Phone Number</label>
                                <input type="number" name="number" />
                            </div>
                            <div className="group-input">
                                <label htmlFor="subject">Subject</label>
                                <input type="text" name="subject" />
                            </div>
                            <div className="group-input">
                                <label htmlFor="message">Message</label>
                                <textarea name="message"></textarea>
                            </div>
                            <div className="btn-bar">
                                <button>Submit</button>
                            </div>
                        </div>
                    </div>
                    <div className="detail-container">
                        <div className="head">
                            <div>Have a Project in Mind?</div>
                            <div>Discuss.</div>
                        </div>
                        <div className="contact-info">
                            <div className="title">Contact Info</div>
                            <div>Kanera dev road, Sagar, Amet, Madhya Pradesh, 470002</div>
                            <div>+91 0000000000</div>
                            <div>info@withaspire.com</div>
                        </div>
                    </div>
                </div>

                <div className="map-container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.4096650992688!2d78.73548297484733!3d23.804027286716412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3978d512bcec57c3%3A0x4b69187fa293cbe5!2sThe%20Heritage%20Conventions!5e0!3m2!1sen!2sin!4v1703867364497!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </div>

        </>
    )
}

export default ContactUs
