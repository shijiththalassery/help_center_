import './style.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { debounce } from 'lodash';
import toast, { Toaster } from 'react-hot-toast';

const Body = () => {
    const [cardData, setCardData] = useState([]);
    const [query, setQuery] = useState('');


    const fetchResults = debounce(async (searchQuery) => {
        try {
            let response;
            if (searchQuery) {

                response = await axios.get(`http://localhost:9000/cards/${searchQuery}`);
            } else {
                // If  there is no search query, fetch all data
                response = await axios.get('http://localhost:9000/cards');
            }
            if (response.status === 200) {
                console.log(response,'this is responce')
                setCardData(response.data);
            } else {
                toast.error('Something went wrong, please try again.', { duration: 3000 });
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }, 300);

    useEffect(() => {
        fetchResults(query);
    }, [query]);



    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* First Section */}
            <div className="bg-gray-300 w-full flex flex-col justify-center items-center py-8 min-h-[250px]">
                <h1 className="text-5xl f text-gray-800 mb-4">How can we help?</h1>
                <input
                    type="text"
                    value={query}
                    onChange={handleChange}
                    placeholder="Search..."
                    className="w-full max-w-md p-2 pl-10 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <svg className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 17l-5-5 5-5m6 10l5-5-5-5"></path>
                </svg>

            </div>
            {/* Second Section with Cards */}
            <div className="w-full bg-white py-8 px-4 mt-[-1px] ">
                <div className="w-full max-w-screen-lg mx-auto px-0 mt-12">
                    {/* Card Container */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 px-4">
                        {cardData.length > 0 ? (
                            cardData.map((card, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-200 rounded-lg shadow-md border-2 mx-auto mb-8 h-36 overflow-y-auto border-gray-300"
                                    style={{ width: 'calc(100% - 100px)' }}
                                >
                                    <h3 className="pt-2 pl-4 pr-4 text-lg font-bold text-gray-700 text-left">{card.title}</h3>
                                    <div className="h-0.5 bg-gray-300"></div>
                                    <p className="p-4 pb-2 pr-4 pt-2 text-gray-700 text-left">{card.description}</p>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 flex justify-center items-center">
                                <img
                                    src="https://static.vecteezy.com/system/resources/previews/023/914/428/original/no-document-or-data-found-ui-illustration-design-free-vector.jpg" // Replace with the path to your "No Data" image
                                    alt="No Data"
                                    className="w-2/3 h-2/3 object-contain"
                                />
                            </div>
                        )}
                    </div>

                </div>
            </div>
            <Toaster />
        </div>
    )
}

export default Body
