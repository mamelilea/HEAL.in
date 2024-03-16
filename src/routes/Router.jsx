import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import AuthPage from '../pages/AuthPage';
import LandingPage from '../pages/LandingPage'
import ArticlePage from '../pages/ArticlePage';
import ArticleDetail from '../components/article/Article';
import ErrorPage from '../pages/ErrorPage';
import VideoPodcast from '../pages/VideoPodcastPage';
import Event from '../pages/EventPage';
import Journaling from '../pages/JournalingPage'
import Breath from '../pages/BreathPage'

function router() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/auth' element={<AuthPage />} />
                <Route path='/video&podcast' element={<VideoPodcast />} />
                <Route path='/event' element={<Event />} />
                <Route path='/journaling' element={<Journaling />} />
                <Route path='/breath' element={<Breath />} />
                <Route path='/article' element={<ArticlePage />} />
                <Route path='/article/:id' element={<ArticleDetail />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </Router>
    )
}

export default router
