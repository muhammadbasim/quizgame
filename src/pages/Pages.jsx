import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminHome from "../pages/home/AdminHome"
import AdminResult from "../pages/result/AdminResult"
import AdminSetting from "../pages/setting/AdminSetting"
import AdminLogin from "../pages/login/AdminLogin"
import AddQuiz from "../pages/addquiz/AddQuiz"
import AdminCategories from '../components/categories/AdminCategories'
import UserProgress from '../components/progress/UserProgress'

const Pages = () => {
  return (
    <Routes>
    <Route path='/' element={<AdminHome/>}/>
    <Route path='/results' element={<AdminResult/>}/>
    <Route path='/settings' element={<AdminSetting/>}/>
    <Route path='/login' element={<AdminLogin/>}/>
    <Route path='/QuizForm' element={<AddQuiz/>}/>
    <Route path='/AdminCategories' element={<AdminCategories/>}/>
    <Route path='/UserProgress' element={<UserProgress />}/>
    
    </Routes>
  )
}

export default Pages;

