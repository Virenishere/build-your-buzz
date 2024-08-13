import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { styled } from "@mui/material";

// Images
import laptopimg from "../../assets/laptop.jpg";
import phoneimg from "../../assets/phonesocial.jpg";
import graphimg from "../../assets/graph.jpg";
import seoimg from "../../assets/seo.jpg";

const Image = styled('img')({
  width: '100%',
  height: '85vh',
  objectFit: 'cover',  // Ensure the image covers the container
});

const carouselItems = [
  { src: laptopimg, alt: 'laptop image' },
  { src: phoneimg, alt: 'phone image' },
  { src: graphimg, alt: 'graph image' },
  { src: seoimg, alt: 'seo image' },
];

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const Hero = () => {
  return (
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
    >
      {carouselItems.map((item, index) => (
        <div key={index}>
          <Image src={item.src} alt={item.alt} />
        </div>
      ))}
    </Carousel>
  );
}

export default Hero;
