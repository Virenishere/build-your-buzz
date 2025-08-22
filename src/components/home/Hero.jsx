import React from 'react';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { styled } from "@mui/material";

// Images
import laptopimg from "../../assets/laptop.jpg";
import phoneimg from "../../assets/phonesocial.jpg";
import graphimg from "../../assets/graph.png";
import seoimg from "../../assets/seo.png";

// Styled component for the images
const ImageContainer = styled('div')({
  position: 'relative', // Allow positioning of child elements
  width: '100%',
  height: '85vh', // Maintain a consistent height for carousel items
  overflow: 'hidden', // Ensure images don't overflow their container
});

const Image = styled('img')({
  width: '100%',
  height: '100%', // Set height to 100% of the container
  objectFit: 'cover',  // Cover the entire container while maintaining aspect ratio
});

// Carousel items
const carouselItems = [
  { src: laptopimg, alt: 'laptop image' },
  { src: graphimg, alt: 'graph image' },
];

// Responsive settings for the carousel
const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

// Hero component
const Hero = () => {
  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2500}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        arrows={true}
      >
        {carouselItems.map((item, index) => (
          <ImageContainer key={index}>
            <Image src={item.src} alt={item.alt} />
          </ImageContainer>
        ))}
      </Carousel>

      {/* CSS Styles */}
      <style jsx>{`
        .carousel-container {
          position: relative;
          z-index: 1;
        }

        .react-multi-carousel-dot {
          z-index: 2;
        }

        .react-multi-carousel-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
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

        .react-multi-carousel-arrow--left {
          left: 10px;
        }

        .react-multi-carousel-arrow--right {
          right: 10px;
        }

        .custom-dot-list-style {
          position: absolute;
          bottom: 20px;
          width: 100%;
          display: flex;
          justify-content: center;
          z-index: 2;
        }

        .custom-dot-list-style .react-multi-carousel-dot {
          background-color: rgba(0, 0, 0, 0.5);
          border-radius: 50%;
          width: 10px;
          height: 10px;
          margin: 0 5px;
        }

        .custom-dot-list-style .react-multi-carousel-dot--active {
          background-color: #fff;
        }

        @media (max-width: 600px) {
          .react-multi-carousel-arrow {
            width: 30px;
            height: 30px;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
