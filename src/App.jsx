import './App.css'
import Counter from './Component/Counter/Counter'
import Auth from './Component/Auth/Auth'
import Header from './Component/Header'
import UserProfile from './Component/UserProfile'
import { useDispatch, useSelector } from 'react-redux'
import Layout from './Component/Layout/Layout'
import Cart from './Component/Cart/Cart'
import Products from './Component/Shop/Products'
import {Routes , Route} from 'react-router-dom'

function App() {
  const login =  useSelector((state)=>state.auth.isLogedIn)
  const dispatch = useDispatch()

  

  // <div className="App">
  // <Counter/>
  
  //  </div>
  return (
    <>
    <Header />
    {login && <Routes>
      <Route path='/' element={<UserProfile/>}></Route>
      <Route path='/sales' element={<Layout/>} ></Route>
    </Routes>}
      {! login &&<Auth />}
         {/* {login && <UserProfile/>} */}
    </>
  )
}

export default App
