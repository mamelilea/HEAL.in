import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import AuthPage from '../pages/AuthPage';
import LandingPage from '../pages/LandingPage'
import ArticlePage from '../pages/ArticlePage';
import ArticleDetail from '../components/article/Article';
import ErrorPage from '../pages/ErrorPage';

function router() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/auth' element={<AuthPage />} />
                <Route path='/article' element={<ArticlePage />} />
                <Route path='/article/:id' element={<ArticleDetail />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </Router>
    )
}

export default router
