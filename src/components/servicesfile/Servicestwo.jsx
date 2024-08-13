import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faBullhorn,
  faChartBar,
  faPenNib,
  faDesktop,
  faShareAlt,
  faLightbulb,
  faVolumeUp,
} from '@fortawesome/free-solid-svg-icons';

const services = [
  { icon: faSearch, title: 'SEO', description: 'Find out more about our SEO services' },
  { icon: faBullhorn, title: 'PPC', description: 'Find out more about our PPC services' },
  { icon: faChartBar, title: 'Analytics', description: 'Find out more about our Analytics services' },
  { icon: faPenNib, title: 'Content', description: 'Find out more about our Content Marketing services' },
  { icon: faDesktop, title: 'Display', description: 'Sample text. Click to select the Text Element.' },
  { icon: faShareAlt, title: 'Social Media', description: 'Sample text. Click to select the Text Element.' },
  { icon: faLightbulb, title: 'Strategy', description: 'Sample text. Click to select the Text Element.' },
  { icon: faVolumeUp, title: 'Online PR', description: 'Sample text. Click to select the Text Element.' },
];

const ServiceCard = ({ icon, title, description }) => (
  <div className="text-center p-5 bg-gray-700 rounded-lg hover:bg-gray-600 transition duration-300">
    <FontAwesomeIcon icon={icon} className="text-4xl mb-4" />
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p>{description}</p>
  </div>
);

const Servicestwo = () => (
  <div className="bg-gray-800 text-white py-10">
    <div className="max-w-6xl mx-auto px-4">
      <h1 className="text-center text-3xl font-bold mb-10">Digital Marketing Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  </div>
);

export default Servicestwo;
