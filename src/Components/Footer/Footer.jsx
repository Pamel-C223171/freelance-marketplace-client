import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className='bg-black text-white py-10 '>
                <div className='grid grid-cols-1 px-4 md:grid-cols-5 gap-5 max-w-[1200px] w-11/12 mx-auto text-[#A1A1AA] border-b-1 border-b-gray-600 pb-7'>
                    <div>
                        <div className='flex items-center mb-3'>
                            {/* <img className='h-[35px] w-[35px] mr-2' src={logoimg} alt="" /> */}
                            <a className="font-bold text-xl">Freelance MarketPlace</a>
                        </div>
                        <p className='text-xs'>Kids Toy is a platform or app designed for children, where various types of toys are displayed and available for purchase. It focuses on educational and recreational toys for kids.</p>
                    </div>
                    <div className='md:ml-14'>
                        <h3 className='text-xl font-medium text-white mb-3'>Company</h3>
                        <ul className='text-xs space-y-3'>
                            <li>About Us</li>
                            <li>Our Mission</li>
                            <li>Contact Saled</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-xl font-medium text-white mb-3'>Services</h3>
                        <ul className='text-xs space-y-3'>
                            <li>Apps & Services</li>
                            <li>Customer Stories</li>
                            <li>Download Apps</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-xl font-medium text-white mb-3'>Information</h3>
                        <ul className='text-xs space-y-3'>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                            <li>Join Us</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-xl font-medium text-white mb-3'>Social Links</h3>
                        <ul className='text-xs space-y-3'>
                            <li className='flex items-center'><img className='bg-white rounded-full w-[15px] h-[15px] mr-2' src="" alt="" />@Kids-Toy</li>
                            <li className='flex items-center'><img className='bg-white rounded-full w-[15px] h-[15px] mr-2' src="" alt="" />@Kids-Toy</li>
                            <li className='flex items-center'><img className='bg-white rounded-full w-[15px] h-[15px] mr-2' src="" alt="" />@Kids-Toy</li>
                            <li className='flex items-center'><img className='bg-white rounded-full w-[15px] h-[15px] mr-2' src="" alt="" />support@kidstoy.com</li>
                        </ul>
                    </div>
                </div>
                <p className='text-center mt-14 '>© 2025 Kids-Toy All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;