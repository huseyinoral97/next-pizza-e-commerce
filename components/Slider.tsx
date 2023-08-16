"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div>
      <Slider {...settings} className="focus:outline-none">
        <div>
          <img src="slide-1.jpeg" alt="Slide 1" />
        </div>
        <div>
          <img src="slide-2.jpeg" alt="Slide 2" />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
