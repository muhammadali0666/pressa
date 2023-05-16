import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { BizHaqimizda } from '../pages/Bizhaqimizda'
import { NotFound } from '../components/NotFound'
import { Login } from '../components/Login'
import { Register } from '../components/Register'
import { ElonBerish } from '../pages/Elon'
import { Dashboard } from '../pages/Dashboard'

export const RouteWrapper = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/biz' element={<BizHaqimizda/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/elon' element={<ElonBerish/>}/>
      <Route path='/admin' element={<Dashboard/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}