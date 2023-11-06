import { Navigate, Route, Routes } from 'react-router-dom'
import MarvelPage from '../heroes'
import DCPage from '../heroes'
import Login from '../auth'
import { Navbar } from './../ui';

const AppRouter = () => {
  return (
    <>
    <Navbar/>

    <Routes>
        <Route path='marvel' element={<MarvelPage/>}/>       
        <Route path='dc' element={<DCPage/>}/>  

        <Route path='login' element={<Login/>}/> 
        <Route path='/' element={<Navigate to="/marvel"/>}/> 
    </Routes>
    </>
  )
}

export default AppRouter