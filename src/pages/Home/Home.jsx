import { Swiper, SwiperSlide } from 'swiper/react';
import './Home.css'
import { EffectFade, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>

      <div id="image-carousel">
        <Swiper
          spaceBetween={30}
          effect={'fade'}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[EffectFade, Autoplay]}
        >
          <SwiperSlide>
            <div className="slide-block">
              <div className="image">
                <img src="/slider/1.jpg" />
              </div>
              <div className="overlay-block">
                <div className="container">
                  <div className="inner-block">
                    <div className="title">
                      Lorem ipsum dolor sit.
                    </div>
                    <div className="content">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos quidem nam totam.
                    </div>
                    <div className="link-block">
                      <Link to="/about-us">Learn More</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-block">
              <div className="image">
                <img src="/slider/2.jpg" />
              </div>
              <div className="overlay-block">
                <div className="container">
                  <div className="inner-block">
                    <div className="title">
                      Lorem ipsum dolor sit.
                    </div>
                    <div className="content">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos quidem nam totam.
                    </div>
                    <div className="link-block">
                      <Link to="/about-us">Learn More</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-block">
              <div className="image">
                <img src="/slider/3.jpg" />
              </div>
              <div className="overlay-block">
                <div className="container">
                  <div className="inner-block">
                    <div className="title">
                      Lorem ipsum dolor sit.
                    </div>
                    <div className="content">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos quidem nam totam.
                    </div>
                    <div className="link-block">
                      <Link to="/about-us">Learn More</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <section className="customer-logos slider">
        <div className="slide"><img src="https://image.freepik.com/free-vector/luxury-letter-e-logo-design_1017-8903.jpg" /></div>
        <div className="slide"><img src="https://image.freepik.com/free-vector/3d-box-logo_1103-876.jpg" /></div>
        <div className="slide"><img src="https://image.freepik.com/free-vector/blue-tech-logo_1103-822.jpg" /></div>
        <div className="slide"><img src="https://image.freepik.com/free-vector/colors-curl-logo-template_23-2147536125.jpg" /></div>
        <div className="slide"><img src="https://image.freepik.com/free-vector/abstract-cross-logo_23-2147536124.jpg" /></div>
        <div className="slide"><img src="https://image.freepik.com/free-vector/football-logo-background_1195-244.jpg" /></div>
        <div className="slide"><img src="https://image.freepik.com/free-vector/background-of-spots-halftone_1035-3847.jpg" /></div>

      </section>

    </>
  )
}
