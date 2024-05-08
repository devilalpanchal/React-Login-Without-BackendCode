
// import './App.css'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Landing from './pages/Landing'
// // import Signup from './pages/Signup'
// // import Dashboard from './pages/Dashboard'
// import { Suspense, lazy } from 'react'
// import Loading from './component/Loading'
// // import Login from lazy('./pages/Login')
// const Login =lazy(()=>import('./pages/Login'))
// const Signup=lazy(()=>import('./pages/Signup'))
// const Dashboard=lazy(()=>import('./pages/Dashboard'))



// function App() {


//   return (
// <BrowserRouter>

// <Routes>
// <Route path='/' element={<Landing/>}/>
// <Route path='/login' element={<Suspense fallback={<Loading/>}><Login/></Suspense>}/>
// <Route path='/signup' element={<Suspense fallback={<Loading/>}><Signup/></Suspense>}/>
// <Route path='/dashboard' element={<Suspense fallback={<Loading/>}><Dashboard/></Suspense>}/>
// </Routes>

// </BrowserRouter>
//   )
// }

// export default App


// import createContext

// valriable=createContext()

// <variable.provoder value={}>

// <app/>

// </>

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Landing from "./pages/Landing"
import Signup from "./pages/Signup"

const App = () => {
  return (
   <BrowserRouter>
<Routes>
<Route path='/login' element={<Login/>}/>
<Route path='/' element={<Landing/>}/>
<Route path='/signup' element={<Signup/>}/>

</Routes>
   </BrowserRouter>
  )
}

export default App