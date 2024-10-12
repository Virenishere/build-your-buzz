import React, { useState, useEffect } from "react";
import contacting from "../../assets/contact.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        message: ''
    });

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 400,
            easing: 'ease-in-sine',
        });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Update this URL with your actual Vercel deployed endpoint
            const response = await axios.post('https://build-your-buzz-backend.vercel.app/send-email', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.status === 200) {
                alert('Email sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    number: '',
                    message: ''
                }); // Clear form fields after successful submission
            } else {
                alert('Failed to send email.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('There was an error sending the email. Please try again.');
        }
    };

    return (
        <section id='contact' className='w-[90%] m-auto flex lg:flex-row flex-col justify-between items-center gap-28 py-20'>
            <div className="lg:w-[50%] w-full">
                <img data-aos="zoom-in" data-aos-delay="200" src={contacting} alt="Contact" />
            </div>
            <div data-aos="zoom-in" data-aos-delay="400" className="lg:w-[50%] w-full flex flex-col justify-center items-start gap-8 bg-black lg:p-16 p-8 rounded-3xl">
                <h1 className="text-white text-[45px] font-semibold font-ubuntu">Let's talk about your project</h1>
                <form onSubmit={handleSubmit} className="w-full bg-transparent flex flex-col justify-center items-center gap-4">
                    <label htmlFor="name" className="sr-only">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full text-white bg-slate-900 px-6 py-4 rounded-lg border-none font-ubuntu"
                        placeholder="Enter your full name here"
                        required
                    />

                    <div className="w-full flex justify-center items-start gap-4">
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your valid email here"
                            className="w-full text-white bg-slate-900 px-6 py-4 rounded-lg border-none font-ubuntu"
                            required
                        />

                        <label htmlFor="number" className="sr-only">Mobile Number</label>
                        <input
                            type="tel"
                            id="number"
                            name="number"
                            value={formData.number}
                            onChange={handleChange}
                            placeholder="Enter your mobile number"
                            className="w-full text-white bg-slate-900 px-6 py-4 rounded-lg border-none font-ubuntu"
                            pattern="[0-9]{10}"
                            required
                        />
                    </div>

                    <label htmlFor="message" className="sr-only">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-slate-900 px-6 py-4 rounded-lg border-none text-white font-ubuntu"
                        placeholder="Enter your message"
                        rows="4"
                        required
                    ></textarea>

                    <button type="submit" className="bg-limegreen px-6 py-4 w-full rounded-md font-semibold text-md font-ubuntu">
                        Submit Now
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
