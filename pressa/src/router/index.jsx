import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { BizHaqimizda } from '../pages/Bizhaqimizda'
import { NotFound } from '../components/NotFound'
import { Login } from '../components/Login'
import { Register } from '../components/Register'
import { ElonBerish } from '../pages/Elon'
import { Admin } from '../pages/Admin'
import { Accepted } from '../pages/Accepted'
import { Canceled } from '../pages/cancelled'
import { SinglePage } from '../pages/SinglePage'

export const RouteWrapper = () => {
  return (
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/biz' element={<BizHaqimizda/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Register/>}/>
      <Route path='/elon' element={<ElonBerish/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/accepted' element={<Accepted/>}/>
      <Route path='/waiting' element={<Admin/>}/>
      <Route path='/canceled' element={<Canceled/>}/>
      <Route path='/single' element={<SinglePage/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}
