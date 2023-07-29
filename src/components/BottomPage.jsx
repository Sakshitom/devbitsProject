import React from 'react'

import { IoChevronForwardSharp } from 'react-icons/io5'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { IoLocationSharp } from 'react-icons/io5'
import { FaLinkedin, FaInstagram } from 'react-icons/fa'


const BottomPage = () => (

    <div className=' mt-20'>
        <footer className="bg-[#242A36] text-white py-10">
            <div className="flex flex-wrap flex-col justify-center md:flex-row md:justify-between">
                <div className="mx-4 mb-8 md:mb-0 flex flex-col items-center flex-1 w-full">
                    <a href="/home">
                    <img src="https://www.logogarden.com/wp-content/uploads/2020/09/mortgage-broker-logo-2.png" alt="Company Logo" className="h-20 w-auto mb-4" />
                    </a>
                    <div className="max-w-xs text-left ">
                        <p className="text-m overflow-hidden text-gray-400 pb-4" style={{ textOverflow: 'ellipsis' }}>
                            We pride ourselves on our commitment to exceptional customer service. We understand that our clients trust us with their financial futures, and we take that responsibility seriously. Our team is available to answer questions, provide guidance, and offer support whenever our clients need us.
                        </p>
                    </div>
                </div>
                <div className="mx-4 mb-8 md:mb-0 uppercase item-center flex-1 w-full">
                    <h4 className="text-lg mb-10 capitalize">Useful Links</h4>
                    <ul>
                        <li className="mb-2"><div className="inline-flex items-center font-bold">
                            <IoChevronForwardSharp className="mr-1" />
                            <span className="text-sm font-bold uppercase hover:scale-105 duration-200 hover:text-yellow-400 cursor-pointer"><a href='/home'>About us</a></span>
                        </div>
                        </li>
                        <li className="mb-2"><div className="inline-flex items-center font-bold">
                            <IoChevronForwardSharp className="mr-1" />
                            <span className="text-sm font-bold uppercase hover:scale-105 duration-200 hover:text-yellow-400 cursor-pointer"><a href='/investment'>Investment</a></span>
                        </div></li>
                       
                        <li className="mb-2 text-sm"><div className="inline-flex items-center font-bold">
                            <IoChevronForwardSharp className="mr-1" />
                            <span className="text-sm font-bold uppercase hover:scale-105 duration-200 hover:text-yellow-400 cursor-pointer"><a href='/loginpage'> Login</a></span>
                        </div></li>
                        <li className="mb-2 text-sm"><div className="inline-flex items-center font-bold">
                            <IoChevronForwardSharp className="mr-1" />
                            <span className="text-sm font-bold uppercase hover:scale-105 duration-200 hover:text-yellow-400 cursor-pointer"><a href='/dashboard'> Dashboard</a></span>
                        </div></li>
                    </ul>
                </div>
                <div className="mx-4 mb-8 md:mb-0 flex-1 w-full">
                    <h4 className="text-lg mb-4">Contact Us</h4>
                    <div className="inline-flex items-center font-bold mb-4 md:px-3">
                        <BsFillTelephoneFill className='mr-1' /> <a href="tel:1800-208-1234" className='hover:scale-105 duration-200 hover:text-yellow-400 font-bold '>1800-208-1234</a>

                    </div>

                    <div className="inline-flex items-center font-bold mb-4 md:px-3 ">
                        <IoLocationSharp className='mr-1' />
                        <p className='hover:scale-105 duration-200 hover:text-yellow-400 font-bold'>Welcome to cleveland</p>
                    </div>
                </div>
                <div className="mx-4 mb-8 md:mb-0 flex-1 w-full">
                    <h4 className="text-lg mb-4">Location</h4>
                    <div className="h-96 rounded-md overflow-hidden">
                        <iframe
                            className="w-full h-64 mt-4"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d153.42941900063306!2d-87.88367028885355!3d42.991381576513284!2m3!1f90!2f0!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x880517c51a8c660b%3A0x913ff5ad8b805963!2z4oCcV2VsY29tZSB0byBDbGV2ZWxhbmTigJ0gU2lnbg!5e1!3m2!1sen!2sin!4v1680265944450!5m2!1sen!2sin"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy">
                        </iframe>
                    </div>
                </div>
            </div>
            <div className="bg-gray-800 py-4 text-center">
                <div className="flex flex-col items-center justify-center">
                    <p className="text-white text-lg font-bold mb-2">
                        All Rights Reserved © {new Date().getFullYear()} heavy brokerage
                    </p>
                    <div className="flex flex-row items-center justify-center">
                        <p className="text-gray-400 text-sm">
                            Follow us on our socials:
                        </p>
                        <a href="https://www.linkedin.com/in/ojasvi-kun/" target="_blank" rel="noreferrer">
                            <FaLinkedin className="ml-2 text-gray-400 text-lg hover:text-blue-500 transition-colors duration-200" />
                        </a>
                        <a href="https://www.instagram.com/ojasvi_kun/" target="_blank" rel="noreferrer">
                            <FaInstagram className="ml-2 text-gray-400 text-lg hover:text-red-500 transition-colors duration-200" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
)

export default BottomPage