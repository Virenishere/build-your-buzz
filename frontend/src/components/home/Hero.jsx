import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import { styled } from "@mui/material";

// Images
import laptopimg from "../../assets/laptop.jpg";
import phoneimg from "../../assets/phonesocial.jpg";
import graphimg from "../../assets/graph.png";
import seoimg from "../../assets/seo.png";

// Styled component for the images
const ImageContainer = styled('div')({
  position: 'relative',
  width: '100%',
  height: '85vh',
  overflow: 'hidden',
});

const Image = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

// Carousel items
const carouselItems = [
  { src: laptopimg, alt: 'laptop image' },
  { src: graphimg, alt: 'graph image' },
];

// Hero component
const Hero = () => {
  // Settings for the slick slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Slider {...settings}>
        {carouselItems.map((item, index) => (
          <ImageContainer key={index}>
            <Image src={item.src} alt={item.alt} />
          </ImageContainer>
        ))}
      </Slider>

      {/* CSS Styles */}
      <style jsx>{`
        .slick-arrow {
          background-color: rgba(0, 0, 0, 0.5);
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          z-index: 2;
        }

        .slick-arrow.slick-prev {
          left: 10px;
        }

        .slick-arrow.slick-next {
          right: 10px;
        }

        .slick-dots {
          position: absolute;
          bottom: 20px;
          width: 100%;
          display: flex;
          justify-content: center;
          z-index: 2;
        }

        .slick-dots li button {
          background-color: rgba(0, 0, 0, 0.5);
          border-radius: 50%;
          width: 10px;
          height: 10px;
          margin: 0 5px;
        }

        .slick-dots li.slick-active button {
          background-color: #fff;
        }

        @media (max-width: 600px) {
          .slick-arrow {
            width: 30px;
            height: 30px;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
