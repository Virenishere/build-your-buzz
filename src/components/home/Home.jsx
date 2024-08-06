import React, { useState } from 'react';

const JobApplicationForm = () => {
  const [file, setFile] = useState(null);
  const [skills, setSkills] = useState('');
  const [experience, setExperience] = useState('');
  const [portfolio, setPortfolio] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

<<<<<<< HEAD
  const handleSkillsChange = (event) => {
    setSkills(event.target.value);
  };
=======
import clients from "../../assets/clients.png"
import business from "../../assets/business.jpg"
import Clients from '../Clients';
 


const Component = styled(Box)`
padding: 10px 5px;
background: #F2F2F2;
`
>>>>>>> 2d865d88759b910968868169087c935c7e6663e9

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

<<<<<<< HEAD
export default JobApplicationForm;
=======

               <section id='hero' className='w-[90%] m-auto flex lg:flex-row flex-col justify-between items-center gap-28 py-20 sm:px-20'>
               <div className='flex flex-col items-center gap-8'>
    <h1 data-aos="zoom-in" data-aos-delay="" className='text-black font-semibold lg:text-[90px] text-[65px] lg:leading-[100px] leading-[80px] font-ubuntu'>
    High Search Rankings
    </h1>

    <img src={business} alt='img'/>

    <p data-aos="zoom-in" data-aos-delay="400" className='font-ubuntu text-[20px] text-slate-700'>
    Achieving high search rankings is crucial for boosting your online visibility and attracting more organic traffic to your site. At Build Your Buzz, we specialize in implementing cutting-edge SEO strategies that propel your website to the top of search engine results pages (SERPs). Our approach includes comprehensive keyword research, on-page optimization, and high-quality link building to ensure your site not only ranks higher but also reaches the right audience. By focusing on the latest SEO trends and best practices, we help you stay ahead of the competition and make your brand more discoverable in a crowded digital landscape. Elevate your online presence and watch your business grow with our expert SEO solutions.
    </p>
 </div>                
            </section>


            <section id='hero' className='w-[90%] m-auto flex lg:flex-row flex-col justify-between items-center gap-28 py-20 sm:px-20'>
               <div className='flex flex-col items-center gap-8'>
    <h1 data-aos="zoom-in" data-aos-delay="" className='text-black font-semibold lg:text-[90px] text-[65px] lg:leading-[100px] leading-[80px] font-ubuntu'>
    Expertise
    </h1>

    <img src={business} alt='img'/>

    <p data-aos="zoom-in" data-aos-delay="400" className='font-ubuntu text-[20px] text-slate-700'>
    At Build Your Buzz, our expertise lies at the intersection of innovative digital strategies and proven marketing techniques. Our team of seasoned professionals brings a wealth of experience in various aspects of digital marketing, including search engine optimization (SEO), social media management, content creation, and data analytics. We pride ourselves on our deep understanding of market trends and consumer behavior, allowing us to craft tailored solutions that drive measurable results. Whether you’re looking to enhance your online presence, increase engagement, or achieve sustainable growth, our expertise ensures that your marketing efforts are both strategic and effective. Partner with us to leverage our knowledge and experience, and watch your brand thrive in the dynamic digital landscape.
    </p>
 </div>                
            </section>


            <section id='hero' className='w-[90%] m-auto flex lg:flex-row flex-col justify-between items-center gap-28 py-20 sm:px-20'>
               <div className='flex flex-col items-center gap-8'>
    <h1 data-aos="zoom-in" data-aos-delay="" className='text-black font-semibold lg:text-[90px] text-[65px] lg:leading-[100px] leading-[80px] font-ubuntu'>
    Complete Brand Control
    </h1>
    
    <img src={business} alt='img'/>

    <p data-aos="zoom-in" data-aos-delay="400" className='font-ubuntu text-[20px] text-slate-700'>
    Achieving complete brand control means having the ability to shape, manage, and enhance every aspect of your brand’s identity and presence across all digital platforms. At Build Your Buzz, we empower you with comprehensive tools and strategies to maintain a cohesive and impactful brand image. From crafting a distinctive brand voice and visual style to managing your online reputation and engagement, we ensure that every touchpoint reflects your brand’s core values and messaging. Our tailored approach provides you with the insights and control needed to adapt and evolve your brand strategy, ensuring consistency and alignment with your business goals. Take charge of your brand’s narrative and watch it resonate with your audience, all while reinforcing your market position with our expert support.
    </p>
 </div>                
            </section>
            <Clients/>
           
        </>
    )
}

export default Home;
>>>>>>> 2d865d88759b910968868169087c935c7e6663e9
