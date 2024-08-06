import React, { useState } from 'react';

const JobApplicationForm = () => {
  const [file, setFile] = useState(null);
  const [skills, setSkills] = useState('');
  const [experience, setExperience] = useState('');
  const [portfolio, setPortfolio] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSkillsChange = (event) => {
    setSkills(event.target.value);
  };

  const handleExperienceChange = (event) => {
    setExperience(event.target.value);
  };

  const handlePortfolioChange = (event) => {
    setPortfolio(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log('Selected file:', file);
    console.log('Skills:', skills);
    console.log('Experience:', experience);
    console.log('Portfolio URL:', portfolio);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Job Application for Digital Marketing</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="resume" className="block text-sm font-medium text-gray-700">Resume (PDF or DOCX)</label>
          <input
            type="file"
            id="resume"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-md file:text-sm file:font-medium file:bg-gray-100 hover:file:bg-gray-200"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="skills" className="block text-sm font-medium text-gray-700">Skills</label>
          <textarea
            id="skills"
            name="skills"
            rows="4"
            value={skills}
            onChange={handleSkillsChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="List your digital marketing skills, separated by commas"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Experience (in years)</label>
          <select
            id="experience"
            name="experience"
            value={experience}
            onChange={handleExperienceChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          >
            <option value="">Select experience level</option>
            <option value="0-1">0-1 year</option>
            <option value="2-3">2-3 years</option>
            <option value="4-5">4-5 years</option>
            <option value="6-10">6-10 years</option>
            <option value="10+">More than 10 years</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700">Portfolio URL</label>
          <input
            type="url"
            id="portfolio"
            name="portfolio"
            value={portfolio}
            onChange={handlePortfolioChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter the URL to your portfolio or personal website"
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-indigo-600 text-white font-bold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default JobApplicationForm;
