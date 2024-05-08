import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Navbar from '../component/Navbar'
console.log("login page render")
const Login = () => {


  const {logout,user}=useAuth0()
  const handleLogout=()=>{
    console.log('logiout')
    logout({ logoutParams: { returnTo: window.location.origin } })
  }
  user.picture='https://1.bp.blogspot.com/-Cw51_m69_4M/XoSyJSJrYAI/AAAAAAAAp2E/Ll-1g-0htdkwmTzxkkOjIJUdqInEyrJpQCLcBGAsYHQ/s2560/avatar-5k-k8-3840x2160.jpg'
  console.log(user)
  user.nickname='mr satish'
  return (
    <>
<Navbar name={user.nickname||'mr wilson'} imgUrl={user.picture} onClick={handleLogout}/>
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
    <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">Shoes!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
  {/* <button className='btn' onClick={handleLogout}>logout</button> */}
    </>
  )
}

export default Login