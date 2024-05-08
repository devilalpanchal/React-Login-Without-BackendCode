import React from 'react'
import landing from '../assets/landing.svg'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import Login from './Login'

console.log("landing page redered")
const Landing = () => {
const {isLoading,user,loginWithRedirect,loginWithPopup,isAuthenticated,logout}=useAuth0()
const navigate=useNavigate()
  const  handleLogin=async()=>{
console.log('login')
await loginWithRedirect()
navigate('/login')
  }

  const handleLogout=()=>{
    console.log('logiout')
    logout({ logoutParams: { returnTo: window.location.origin } })
  }

  
 
  return (
  
<>
<section className='w-screen h-screen  flex items-center justify-center gap-6'>
{isAuthenticated?<Login/>:<div className='flex items-center gap-6'>
<button className='btn' onClick={handleLogin}>
    Login
  </button>

</div>}



</section>
</>
    

    

  )
}

export default Landing