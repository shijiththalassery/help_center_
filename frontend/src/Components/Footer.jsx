import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-black text-white py-16 px-4 min-h-[400px] ">
            <div className="container mx-auto flex flex-wrap justify-between  min-h-[250px] ">
                {/* Column 1 */}
                <div className="w-full md:w-1/5 mb-6 md:mb-0 text-left">
                    <h4 className="text-lg font-semibold mb-4">Abstract</h4>
                    <ul className="space-y-2">
                        <li>Brancher</li>
                    </ul>
                </div>

                {/* Column 2 */}
                <div className="w-full md:w-1/5 mb-6 md:mb-0 text-left">
                    <h4 className="text-lg font-semibold mb-4">Resources</h4>
                    <ul className="space-y-2">
                        <li>Blog</li>
                        <li>Help Center</li>
                        <li>Release Notes</li>
                        <li>Status</li>
                    </ul>
                </div>

                {/* Column 3 */}
                <div className="w-full md:w-1/5 mb-6 md:mb-0 text-left">
                    <h4 className="text-lg font-semibold mb-4">Community</h4>
                    <ul className="space-y-2">
                        <li>Twitter</li>
                        <li>LinkedIn</li>
                        <li>Facebook</li>
                        <li>Dribble</li>
                        <li>Podcast</li>
                    </ul>
                </div>

                {/* Column 4 */}
                <div className="w-full md:w-1/5 mb-6 md:mb-0 text-left">
                    <h4 className="text-lg font-semibold mb-4">Comapany</h4>
                    <ul className="space-y-2">
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Legal</li>
                        <li>Point 4</li>
                    </ul>
                    <div className='mt-6 text-left'>
                        <h4 className='text-lg font-semibold'>Contact Us</h4>
                        <ul className='space-y-2'>
                        <li>info@abstract.com</li>
                        </ul>
                    </div>
                </div>

                {/* Column 5 */}
                <div className="w-full md:w-1/5 flex flex-col items-center md:items-start ">
                    <div className="mb-4 mt-36">
                        {/* Logo */}
                        <img src="https://cdn.prod.website-files.com/5ff3926f03b3ba26b7d639cb/60c388bf3c3ae4d1d10653e7_Abstract_Wordmark-White.svg" alt="Logo" className="w-24 h-auto" />
                    </div>
                    <div className='text-left'>
                        <p className="text-sm">&copy; Copyright 2022</p>
                        <p className="text-sm">Abstract Studio Design, Inc</p>
                        <p className="text-sm">All rights reserved</p>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer
