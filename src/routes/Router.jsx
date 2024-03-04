import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutes from '../components/routes/PrivateRoute'

// pages
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import Home from '../pages/Home'

function router() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} exact />``
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<RegisterPage />} />
            </Routes>
        </Router>
    )
}

export default router
