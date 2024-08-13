import React from 'react';
import services1 from '../../assets/service1.png';
import services2 from '../../assets/services2.png';
import services3 from '../../assets/services3.png';
import Servicestwo from '../servicesfile/Servicestwo';
import { Link } from "react-router-dom";

const servicesData = [
  {
    imgSrc: services1,
    title: 'Social Media Strategy Development',
    description: 'The wise man therefore always holds in these matters to this principle: similique sunt in culpa qui officia deserunt.',
    imgClass: 'w-50',
  },
  {
    imgSrc: services2,
    title: 'Content Creation and Management',
    description: 'The wise man therefore always holds in these matters to this principle: similique sunt in culpa qui officia deserunt.',
    imgClass: 'w-70 py-3 mx-2',
  },
  {
    imgSrc: services3,
    title: 'Community Engagement and Interaction',
    description: 'The wise man therefore always holds in these matters to this principle: similique sunt in culpa qui officia deserunt.',
    imgClass: 'w-30',
  },
];

const ServiceCard = ({ imgSrc, title, description, imgClass }) => (
  <div className="bg-gray-900 p-6 rounded-lg text-center transition-transform transform hover:scale-105">
    <div className={`text-4xl mb-4 ${imgClass}`}>
      <img src={imgSrc} alt={title} className="w-full" />
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="mb-4">{description}</p>
    <Link to="/contact"
      className="bg-limegreen text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-green-600 transition-colors duration-300 flex items-center justify-center space-x-2 mx-auto"
    >
      <span>Read More</span>
      <span className="text-xl">→</span>
    </Link>
  </div>
);

const CardSection = () => (
  <div className="bg-black text-white py-8">
    <div className="container mx-auto px-4 my-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
    <Servicestwo />
  </div>
);

export default CardSection;
