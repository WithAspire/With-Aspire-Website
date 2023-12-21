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

    </>
  )
}
