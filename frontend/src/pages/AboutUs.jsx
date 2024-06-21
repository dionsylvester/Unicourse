import React from 'react';
import UserNavBar from "../../src/components/layouts/UserNavbar";
import Footer from '../components/layouts/Footer';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div>
            <UserNavBar/>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6">
                        <h2 className="text-lg leading-6 font-medium text-gray-900">About Unicourse</h2>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">Revolutionizing Learning Ecosystem</p>
                    </div>
                    <div className="border-t border-gray-200">
                        <dl>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Tagline</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    A Trillion Possibilities - Never Stop Learning - Seek Learning and Skills Development
                                </dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Description</dt>
                                <dd className="mt-1 text-sm text-gray-900">
                                Welcome to Unicourse, where we are pushing the boundaries of traditional education through our interactive and universally accessible online courses. Our mission is to make learning limitless, which is why we have meticulously designed a platform that welcomes and supports learners from every background and every corner of the globe.
                                <br /><br />
                                At Unicourse, we are at the forefront of revolutionizing the learning ecosystem with a trillion possibilities. Our commitment to continuous innovation allows us to expand what's possible in education, creating a dynamic environment where traditional constraints are removed. Our courses are meticulously crafted not just to educate, but also to ignite a lifelong passion for knowledge and self-improvement.
                                <br /><br />
                                Each course is developed by experts in their fields, integrating the latest advancements in educational technology to provide engaging, effective, and personalized learning experiences. Whether you're looking to advance your career, start a new one, or simply expand your knowledge on a topic of interest, Unicourse makes it possible in a few clicks.
                                <br /><br />
                                Join us on this transformative journey and never stop learning. At Unicourse, every click opens a door to a world of infinite learning opportunities. Explore new subjects, acquire coveted skills, and connect with a global community of learners and educators. Here, your educational aspirations don't have to wait — they're actively encouraged and nurtured.
                                <br /><br />
                                Our platform isn’t just about delivering content—it's about fostering a vibrant community where learners can interact, share, and collaborate. With real-time discussions, peer-to-peer feedback, and interactive webinars, learning becomes a collective adventure. By integrating these community-driven features, Unicourse ensures that education is not only about acquiring knowledge but also about building relationships and understanding diverse perspectives.
                                <br /><br />
                                We also believe in the power of education to bring about positive change. That's why we partner with organizations around the world to ensure that for every course you take, we can extend learning opportunities to underserved communities, making education a tool for equity and social justice.
                                <br /><br />
                                Embark on your educational journey with Unicourse today and experience the power of learning without limits. Whether you're seeking professional development, personal enrichment, or academic advancement, Unicourse is your gateway to achieving your goals with flexibility and support at your fingertips. Dive into our expansive library of courses and discover how learning can be as boundless as your curiosity.
                                </dd>
                            </div>
                            <div className="px-4 py-5 bg-gray-50 sm:px-6">
                            <Link to="/course"
                                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Explore Courses
                            </Link>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default AboutUs;
