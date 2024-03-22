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
import EventDetails from '../components/event/EventDetails';
import Journaling from '../pages/JournalingPage'
import Breath from '../pages/BreathPage'
import VerificationPage from '../components/auth/VerificationPage';
import PaymentPage from '../pages/PaymentPage';
import JournalingDetail from '../components/journaling/JournalingDetail';

function router() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/auth' element={<AuthPage />} />
                <Route path='/video&podcast' element={<VideoPodcast />} />
                <Route path='/journaling' element={<Journaling />} />
                <Route path='/journaling/:id' element={<JournalingDetail />} />
                <Route path='/breath' element={<Breath />} />
                <Route path='/about' element={<LandingPage initialScrollToId="#about" />} />
                <Route path='/article' element={<ArticlePage />} />
                <Route path='/article/:id' element={<ArticleDetail />} />
                <Route path='/event' element={<Event />} />
                <Route path='/event/:id' element={<EventDetails />} />
                <Route path='/verify/:code' element={<VerificationPage />} />
                <Route path='/payment' element={<PaymentPage />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </Router>
    )
}

export default router
