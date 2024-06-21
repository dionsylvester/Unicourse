import React, { useState } from 'react';
import { MdEmail, MdPhoneInTalk } from 'react-icons/md';
import UserNavBar from "../../src/components/layouts/UserNavbar";
import Footer from '../components/layouts/Footer';
import { FaInstagram } from 'react-icons/fa';

const ContactUs = () => {
    const [search, setSearch] = useState('');

    const faqs = [
        { question: "How to change my calendar?", answer: "Go to settings and select 'Calendar' to make changes." },
        { question: "How to chat with my mentor?", answer: "Use the 'Chat' feature from your dashboard to connect with your mentor." },
        { question: "How to change my profile picture?", answer: "Navigate to your profile settings and click on 'Change Picture'." },
        { question: "How to enroll in a course?", answer: "Browse courses and click 'Enroll' button on the course of your choice." },
        { question: "How to cancel a subscription?", answer: "Go to 'Billing & Plans' and select 'Cancel Subscription'." }
    ];

    return (
        <div>
            <UserNavBar/>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>
                <div className="mb-4">
                    <label htmlFor="topic" className="block text-sm font-medium text-gray-700">Select a Topic:</label>
                    <select id="topic" name="topic" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option>Audio & Video</option>
                        <option>Billing & Plans</option>
                        <option>Connection & Trouble</option>
                        <option>Bug & Error</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="search" className="block text-sm font-medium text-gray-700">Tell us what you need help with:</label>
                    <input
                        type="text"
                        id="search"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Search questions..."
                    />
                    <button className="mt-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                        Get Help
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white shadow p-4 rounded-lg">
                            <dt className="text-lg font-medium text-gray-900">{faq.question}</dt>
                            <dd className="mt-2 text-sm text-gray-500">{faq.answer}</dd>
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
        
    );
}

export default ContactUs;