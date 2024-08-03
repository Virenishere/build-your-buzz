import React from 'react';

const Service2 = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 p-5 min-h-screen">
      <header className="bg-blue-500 text-white p-5 w-full text-center">
        <h1 className="text-2xl">Welcome to Figma to React</h1>
      </header>
      <div className="bg-white p-5 shadow-lg w-full max-w-2xl text-left mt-5">
        <p className="mb-3">
          This is a paragraph of content that you can style however you like. It is part of the main content area.
        </p>
        <p className="mb-3">
          Add more content here as needed to match your Figma design.
        </p>
        <button className="bg-blue-500 text-white border-none py-2 px-4 text-lg cursor-pointer transition duration-300 hover:bg-blue-700 mt-5">
          Click Me
        </button>
      </div>
    </div>
  );
};

export default Service2;
