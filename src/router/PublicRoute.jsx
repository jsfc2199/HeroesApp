/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { AuthContext } from '../auth'
import { Navigate } from 'react-router-dom'


const PublicRoute = ({children}) => {
   const{logged} =  useContext(AuthContext)

  return (!logged ? children : <Navigate to="/marvel"/>)
}

export default PublicRoute