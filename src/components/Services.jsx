import React from 'react';
import services1 from '../assets/services1.png';
import services2 from '../assets/services2.png';
import services3 from '../assets/services3.png';
import Servicestwo from './Servicestwo';


const CardSection = () => {
  return (
    <div className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-900 p-6 rounded-lg text-center">
            <div className="text-4xl mb-4"><img src={services1} alt=""  className='w-50'/></div>
            <h3 className="text-xl font-bold mb-2">Social Media Strategy Development</h3>
            <p className="mb-4">The wise man therefore always holds in these matters to this principle:similique sunt in culpa qui officia deserunt</p>
            <a href="#" className="text-green-500 hover:underline">
              Read More <span className="ml-2">→</span>
            </a>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg text-center">
            <div className="text-4xl mb-4"><img src={services2} alt=""  className='w-64 py-4 mx-10'/></div>
            <h3 className="text-xl font-bold mb-2">Content Creation and Management</h3>
            <p className="mb-4">The wise man therefore always holds in these matters to this principle:similique sunt in culpa qui officia deserunt</p>
            <a href="#" className="text-green-500 hover:underline">
              Read More <span className="ml-2">→</span>
            </a>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg text-center">
            <div className="text-4xl mb-4"><img src={services3} alt="" className='w-30 ' /></div>
            <h3 className="text-xl font-bold mb-2">Community Engagement and Interaction</h3>
            <p className="mb-4">The wise man therefore always holds in these matters to this principle:similique sunt in culpa qui officia deserunt</p>
            <a href="#" className="text-green-500 hover:underline">
              Read More <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
      <Servicestwo />
    </div>
  );
};

export default CardSection;

