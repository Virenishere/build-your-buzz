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
const Image = styled('img')({
  width: '100%',
  height: '85vh',
  objectFit: 'cover',  // Ensure the image covers the container
});

// Carousel items
const carouselItems = [
  { src: laptopimg, alt: 'laptop image' },
  { src: phoneimg, alt: 'phone image' },
  { src: graphimg, alt: 'graph image' },
  { src: seoimg, alt: 'seo image' },
];

// Responsive settings for the carousel
const responsive = {
  desktop: { breakpoint: { max: 1900, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

// Hero component
const Hero = () => {
  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2500}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        arrows={true} // Ensure arrows are shown
      >
        {carouselItems.map((item, index) => (
          <div key={index}>
            <Image src={item.src} alt={item.alt} />
          </div>
        ))}
      </Carousel>

      {/* CSS Styles */}
      <style jsx>{`
        .carousel-container {
          position: relative;
          z-index: 1; /* Ensure it’s above other content */
        }

        .react-multi-carousel-dot {
          z-index: 2; /* Ensure dots are above carousel items */
        }

        .react-multi-carousel-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          z-index: 2; /* Ensure arrows are above carousel items */
        }

        .react-multi-carousel-arrow--left {
          left: 10px; /* Adjust as needed */
        }

        .react-multi-carousel-arrow--right {
          right: 10px; /* Adjust as needed */
        }

        .react-multi-carousel-arrow .arrow-icon {
          color: #fff; /* White arrow icon */
          font-size: 20px; /* Adjust size as needed */
        }

        .custom-dot-list-style {
          position: absolute;
          bottom: 20px; /* Adjust the vertical positioning */
          width: 100%;
          display: flex;
          justify-content: center;
          z-index: 2; /* Ensure dots are above carousel items */
        }

        .custom-dot-list-style .react-multi-carousel-dot {
          background-color: rgba(0, 0, 0, 0.5); /* Dark dots */
          border-radius: 50%;
          width: 10px;
          height: 10px;
          margin: 0 5px;
        }

        .custom-dot-list-style .react-multi-carousel-dot--active {
          background-color: #fff; /* Highlighted dot color */
        }
      `}</style>
    </div>
  );
}

export default Hero;
