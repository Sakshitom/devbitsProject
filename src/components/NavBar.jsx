import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../assets/plainlogo.png'
import Whitelogo from '../assets/logo.png'
import { useAuth0 } from "@auth0/auth0-react";


const NavBar = () => {

  const [nav, setNav] = useState(false)
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();



  return (
    
    <div className="flex justify-between items-center w-full h-20 px-4 text-black">
      <div className=' w-16'>
        <a href='/home'>
          <img src="https://www.logogarden.com/wp-content/uploads/2020/09/mortgage-broker-logo-2.png" alt="logo" className='cursor-pointer' />
          </a>
      </div>

      <ul className='hidden md:flex text-black'>
        <li className='px-4 cursor-pointer uppercase font-small
        hover:scale-105 duration-200 hover:text-yellow-400 focus:text-yellow-400'><a href="/" alt="hehe">About us</a></li>
        <li className='px-4 cursor-pointer uppercase font-small
        hover:scale-105 duration-200  hover:text-yellow-400 focus:text-yellow-400'><a href='/dashboard' alt="dashboard">Dashboard</a></li>
        <li className='px-4 cursor-pointer uppercase font-small
        hover:scale-105 duration-200  hover:text-yellow-400 focus:text-yellow-400'><a href='/investment' alt="dashboard">investments</a></li>
         {isAuthenticated ?(
      <li className='px-4 cursor-pointer uppercase font-small
        hover:scale-105 duration-200  hover:text-yellow-400 focus:text-yellow-400'>    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
        Log Out
      </button></li>

    ):
    (
          <li className='px-4 cursor-pointer uppercase font-small
        hover:scale-105 duration-200  hover:text-yellow-400 focus:text-yellow-400'>  <button onClick={() => loginWithRedirect()}>Log In</button></li>
     
    )}
       
        
  

      </ul>


      <div
        onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 md:hidden'>
        {nav ? <FaTimes size={30} color="white" /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className='flex flex-col items-left text-left absolute top-0 left-0 w-full h-screen bg-stone-800 text-white'>
          <li className='w-28 ml-11'><img src="https://www.logogarden.com/wp-content/uploads/2020/09/mortgage-broker-logo-2.png" alt="logo" /></li>
          <li className='cursor-pointer uppercase font-small
              hover:scale-105 duration-200 py-2 px-20 mt-20 focus:text-yellow-400'><a href='/' alt="home">About us</a></li>
          <li className=' cursor-pointer uppercase font-small
              hover:scale-105 duration-200 py-2 px-20 focus:text-yellow-400'><a href='/dashboard' alt="Dashboard">Dashboard</a></li>
          <li className='px-20 py-2 cursor-pointer uppercase font-small
              hover:scale-105 duration-200 focus:text-yellow-400'> <button onClick={() => loginWithRedirect()}>Log IN</button></li>
           <li className='px-20 py-2 cursor-pointer uppercase font-small
              hover:scale-105 duration-200 focus:text-yellow-400'>   <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
              Log Out
            </button> </li>
          <li className='px-20 py-2 cursor-pointer uppercase font-small
             hover:scale-105 duration-200 focus:text-yellow-400'><a href='/investment'>Investment</a> </li>


        </ul>
      )}



    </div>
  )
}

export default NavBar