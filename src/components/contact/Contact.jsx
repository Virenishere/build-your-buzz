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
            const response = await axios.post('http://localhost:500/send-email', formData, {
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
            alert('Error sending email.');
        }
    };

    return (
        <section id='contact' className='w-[90%] m-auto flex lg:flex-row flex-col justify-between items-center gap-28 py-20'>
            <div className="lg:w-[50%] w-full">
                <img data-aos="zoom-in" data-aos-delay="200" src={contacting} alt="Contact" />
            </div>
            <div data-aos="zoom-in" data-aos-delay="400" className="lg:w-[50%] w-full flex flex-col justify-center items-start gap-8 bg-black lg:p-16 p-8 rounded-3xl">
                <h1 className="text-white text-[45px] font-semibold font-ubuntu">Let's talk about your project</h1>
                <div id="form-box" className="w-full bg-transparent flex flex-col justify-center items-center gap-4">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full text-white bg-slate-900 px-6 py-4 rounded-lg border-none font-ubuntu"
                        placeholder="Enter your full name here"
                    />
                    <div className="w-full flex justify-center items-start gap-4">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your valid email here"
                            className="w-full text-white bg-slate-900 px-6 py-4 rounded-lg border-none font-ubuntu"
                        />
                        <input
                            type="number"
                            name="number"
                            value={formData.number}
                            onChange={handleChange}
                            placeholder="Enter your mobile number"
                            className="w-full text-white bg-slate-900 px-6 py-4 rounded-lg border-none font-ubuntu"
                        />
                    </div>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-slate-900 px-6 py-4 rounded-lg border-none text-white font-ubuntu"
                        placeholder="Enter your message"
                        rows="4"
                    ></textarea>
                    <button onClick={handleSubmit} className="bg-limegreen px-6 py-4 w-full rounded-md font-semibold text-md font-ubuntu">
                        Submit Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Contact;
