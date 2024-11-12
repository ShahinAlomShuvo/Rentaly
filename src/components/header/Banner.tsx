import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade"; // Import fade effect CSS

import sliderOne from "../../assets/images/Banner/1.jpg";
import sliderTwo from "../../assets/images/Banner/2.jpg";
import sliderThree from "../../assets/images/Banner/3.jpg";
import SearchForm from "../form/searchForm/SeachForm";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Banner = () => {
  const slides = [
    {
      img: sliderOne,
    },
    {
      img: sliderTwo,
    },
    {
      img: sliderThree,
    },
  ];

  return (
    <div className="relative">
      {/* Swiper Slider */}
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        effect="fade"
        speed={3000}
        allowTouchMove={false}
        fadeEffect={{ crossFade: true }}
        className="h-[100vh] w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              <img
                src={slide.img}
                alt="Slide image"
                className="object-fill md:object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Centered Content inside the black opacity div */}
      <div className="absolute inset-0 flex   items-center   justify-center z-20">
        <div className="w-full max-w-4xl  md:h-auto p-10 bg-black bg-opacity-0 md:bg-opacity-60 md:rounded-md text-white text-center">
          {/* Banner Text */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Find Your Perfect Ride
            </h1>
            <p className="text-xl text-gray-400">
              Explore our wide range of vehicles for any occasion
            </p>
          </div>

          {/* Search Form */}
          <div className="hidden md:block">
            <SearchForm />
          </div>

          {/* Button */}
          <div className="px-4">
            <Link to="/booking">
              <Button className="bg-primaryColor hover:shadow-primaryColor hover:bg-primaryColor font-semibold w-full">
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
