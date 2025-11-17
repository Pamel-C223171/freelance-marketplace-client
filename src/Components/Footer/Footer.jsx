import React from 'react';
import facebookimg from '../../assets/facebook.png'
import instagramimg from '../../assets/instagram.png'
import twitterimg from '../../assets/twitter.png'
import linkedinimg from '../../assets/linkedin.png'

const Footer = () => {
    return (
        <div className='bg-black'>
            <div className=' text-white w-11/12 mx-auto py-10 '>
                <div className='grid grid-cols-1 md:grid-cols-4 md:justify-items-center text-[#A1A1AA] border-b-1 border-b-gray-600 pb-7 gap-5'>
                    <div>
                        <div className='flex flex-col mb-5'>
                           
                            <a className="font-bold text-2xl mb-3">Freelance MarketPlace</a>
                            <p className='text-xs'>We’ve got the perfect tools for your success. Join us today and empower toward excellence.</p>
                        </div>
                       <div>
                        
                        <ul className='text-xs flex '>
                            <li className='flex items-center'><img className=' rounded-full w-[50px] h-[50px] mr-2' src={facebookimg} alt="" /></li>
                            <li className='flex items-center'><img className='bg-white rounded-full w-[40px] h-[40px] mr-2' src={twitterimg} alt="" /></li>
                            <li className='flex items-center'><img className=' rounded-full w-[50px] h-[50px] mr-2' src={linkedinimg} alt="" /></li>
                            <li className='flex items-center'><img className=' rounded-full w-[50px] h-[50px] mr-2' src={instagramimg} alt="" /></li>
                        </ul>
                    </div>
                    </div>
                    <div className=''>
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
                    
                </div>
                <p className='text-center mt-14 '>© 2025 Freelance MarketPlace All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;