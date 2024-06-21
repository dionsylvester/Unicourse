import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import UserNavBar from "../../src/components/layouts/UserNavbar";
import Footer from '../components/layouts/Footer';

const MyProfile = () => {
    const [profile, setProfile] = useState({
        username: 'Dion Sylvester',
        email: 'dionsyl@gmail.com',
        password: '********',
        website: '',
        instagram: '',
        linkedin: ''
    });

    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Profile Data:', profile);
        console.log('Image File:', image);
    };

    return (
        <div>
            <UserNavBar/>
            <div className="flex justify-between px-4 py-6">
                <div className="w-1/2">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Username:</label>
                            <input type="text" name="username" value={profile.username} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Email:</label>
                            <input type="email" name="email" value={profile.email} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Password:</label>
                            <input type="password" name="password" value={profile.password} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Website:</label>
                            <input type="url" name="website" value={profile.website} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Instagram:</label>
                            <input type="text" name="instagram" value={profile.instagram} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">LinkedIn:</label>
                            <input type="text" name="linkedin" value={profile.linkedin} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                        </div>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Save
                        </button>
                    </form>
                </div>
                <div className="w-1/2 pl-4">
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Image Preview:</label>
                        <div className="mt-1 border border-gray-300 rounded-md p-2 flex justify-center items-center h-40">
                            {imagePreview ? (
                                <img src={imagePreview} alt="Profile" className="h-full w-full object-cover rounded-md" />
                            ) : (
                                <FaUserCircle className="text-gray-400" size={100} />
                            )}
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Upload Image:</label>
                        <input type="file" onChange={handleImageChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
        
    );
};

export default MyProfile;
