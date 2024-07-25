import "react-slideshow-image/dist/styles.css";
import logo1 from "../../assets/images/logo1.png";
import logo2 from "../../assets/images/logo2.png";
import logo3 from "../../assets/images/logo3.png";
import logo4 from "../../assets/images/logo4.png";
import logo5 from "../../assets/images/logo5.png";
import logo6 from "../../assets/images/logo6.png";
const slideImages = [
  {
    url: logo1,
  },
  {
    url: logo2,
  },
  {
    url: logo3,
  },
  {
    url: logo4,
  },
  {
    url: logo5,
  },
  {
    url: logo6,
  },
];

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "../../assets/css/slider.css";
// import "swiper/css/navigation";

const SliderLogo = function () {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={5}
      loop={true}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
          centeredSlides: true,
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
      }}
    >
      {slideImages.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <img src={slide.url} alt={index} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
export default SliderLogo;
