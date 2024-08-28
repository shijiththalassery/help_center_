import React, { useState } from 'react';
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';


const Header = () => {
    const logo = "https://cdn.prod.website-files.com/5ff3926f03b3ba26b7d639cb/60c388bf3c3ae4d1d10653e7_Abstract_Wordmark-White.svg";

    // for moda openign and closing 
    const [showModal, setShowModal] = useState(false);

    // State to manage the visibility of the mobile menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('')


    //sending fucntion title and description to back end
    const sendData = async () => {
        const url = 'http://localhost:9000/cards'; 
        const data = {
            title,
            description
        };
      
        try {
          const response = await axios.post(url, data, {
            headers: {
              'Content-Type': 'application/json' 
            }
          });
          console.log(response)
          if(response.status === 200){
            toast.success('Information added successfully', { duration: 3000 });
          }
          if(response.status >= 400 && response.status <= 499){
            toast.error('Check your internet connection',{duration:3000})
          }else if(response.status >= 500){
            toast.error('Internal Server Error',{duration:3000})
          }
      
        } catch (error) {
            toast.error('Internal Server Error',{duration:3000})
            console.error('Error:', error.response ? error.response.data : error.message); 
        }
      };


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleSaveChanges = () => {
        if(title.trim() && description.trim()){
            sendData()
            setShowModal(false);
            setDescription("")
            setTitle("")
        }else{

            setShowModal(false);
            toast('Please fill in both title and description!', {
                icon: '⚠️',
                style: {
                    border: '1px solid #FFA500',
                    padding: '16px',
                    color: '#FFA500',
                },
            });
            return;
        }
       
    };
    return (

        <header className="bg-black text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-lg  flex">

                    <img src={logo} alt="MyLogo" className="h-7" /><p className=''>&nbsp; | &nbsp; Help center</p>

                </div>


                {/* Navigation Menu */}
                <nav className="hidden md:flex space-x-4">
                    <button
                        onClick={() => setShowModal(true)}
                        className='w-36 rounded-lg h-10 borer border white bg-zinc-900'>Submit a request</button>
                    {showModal ? (
                        <>
                            <div
                                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
                            >
                                <div className="relative  my-6 mx-auto max-w-4xl  w-1/2">
                                    {/*content*/}
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        {/*header*/}
                                        <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t text-center m-auto ">
                                            <h3 className="text-3xl font-semibold text-zinc-700 text-center m-auto">
                                                Add Card
                                            </h3>
                                            <button
                                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                onClick={() => setShowModal(false)}
                                            >
                                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                    ×
                                                </span>
                                            </button>
                                        </div>
                                        {/*body*/}
                                        <div className="relative p-6 flex-auto">
                                            <div className="mb-4">
                                                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                                                <input
                                                    id="title"
                                                    type="text"
                                                    value={title}
                                                    onChange={(e) => setTitle(e.target.value)}
                                                    className="w-full p-2 border border-gray-300 rounded-lg text-black"
                                                    placeholder="Enter title"
                                                />
                                            </div>

                                            {/* Description Textarea Field */}
                                            <div className="mb-4">
                                                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                                                <textarea
                                                    id="description"
                                                    value={description}
                                                    onChange={(e) => setDescription(e.target.value)}
                                                    className="w-full p-2 border border-gray-300 rounded-lg text-black"
                                                    placeholder="Enter description"
                                                    rows="4"
                                                />
                                            </div>
                                        </div>
                                        {/*footer*/}
                                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                            <button
                                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => setShowModal(false)}
                                            >
                                                Close
                                            </button>
                                            <button
                                                className="bg-gray-800 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={handleSaveChanges}
                                            >
                                                Create Option
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </>
                    ) : null}
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button
                        className="text-white focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                onClick={() => setShowModal(true)}
                className={`md:hidden mt-4 ${isMenuOpen ? 'block' : 'hidden'}`}
            >
                <nav>
                    <button
                        onClick={() => setShowModal(false)}
                        className='w-36 rounded-lg h-10 borer border white bg-zinc-900'>Submit a request</button>
                        {showModal ? (
                            <>
                                <div
                                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
                                >
                                    <div className="relative w-auto  my-6 mx-auto max-w-4xl border border-red-400 w-3/4">
                                        {/*content*/}
                                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none text-center">
                                            {/*header*/}
                                            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t text-center">
                                                <h3 className="text-3xl font-semibold text-zinc-700 text-center">
                                                    Add Card
                                                </h3>
                                                <button
                                                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                    onClick={() => setShowModal(false)}
                                                >
                                                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                        ×
                                                    </span>
                                                </button>
                                            </div>
                                            {/*body*/}
                                            <div className="relative p-6 flex-auto">
                                                <div className="mb-4">
                                                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                                                    <input
                                                        id="title"
                                                        type="text"
                                                        value={title}
                                                        onChange={(e) => setTitle(e.target.value)}
                                                        className="w-full p-2 border border-gray-300 rounded-lg text-black"
                                                        placeholder="Enter title"
                                                    />
                                                </div>
    
                                                {/* Description Textarea Field */}
                                                <div className="mb-4">
                                                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                                                    <textarea
                                                        id="description"
                                                        value={description}
                                                        onChange={(e) => setDescription(e.target.value)}
                                                        className="w-full p-2 border border-gray-300 rounded-lg text-black"
                                                        placeholder="Enter description"
                                                        rows="4"
                                                    />
                                                </div>
                                            </div>
                                            {/*footer*/}
                                            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                                <button
                                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                    type="button"
                                                    onClick={() => setShowModal(false)}
                                                >
                                                    Close
                                                </button>
                                                <button
                                                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                    type="button"
                                                    onClick={handleSaveChanges}
                                                    
                                                >
                                                Create Option   
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                            </>
                        ) : null}
                </nav>
            </div>
              <Toaster />
        </header>
    )
}

export default Header
