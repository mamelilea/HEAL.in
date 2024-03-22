import React, { useEffect, useState } from 'react'
import Navbar from '../components/shared/Navbar'
import TemplatePage from '../components/layout/TemplatePage'
import Button from '../components/ui/Button'
import axios from 'axios'
import Random from '../assets/LandingPage/VideoPodcast/1.png'


const playIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="#3b82f6" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-blue-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
        </svg>
    )
}

const pauseIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 stroke-blue-500">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>

    )
}

const VideoPodcastPage = () => {
    // get video
    const [videos, setVideos] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            axios.get('https://heal-in-501fb50a416c.herokuapp.com/api/video/all', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(response => {
                    setVideos(response.data.data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error fetching videos:', error);
                    setLoading(false);
                });
        } else {
            console.error('No access token found');
            setLoading(false);
        }
    }, []);


    // get podcast
    const [podcasts, setPodcasts] = useState([]);
    const [loadingPod, setLoadingPod] = useState(true);
    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            axios.get('https://heal-in-501fb50a416c.herokuapp.com/api/podcast/all', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(response => {
                    setPodcasts(response.data.data);
                    setLoadingPod(false);
                })
                .catch(error => {
                    console.error('Error fetching podcasts:', error);
                    setLoadingPod(false);
                });
        } else {
            console.error('No access token found');
            setLoadingPod(false);
        }
    }, []);


    // tab checked
    const [activeTab, setActiveTab] = useState('video');
    const mainVideo = videos.length > 0 ? videos[0] : null;
    const mainPodcast = podcasts.length > 0 ? podcasts[0] : null;


    // repeat the first video 3 times
    const repeatedVideos = Array.from({ length: 3 }, () => mainVideo);
    const repeatedPodcasts = Array.from({ length: 7 }, () => mainPodcast);

    const [isPlaying, setIsPlaying] = useState(false);

    const toggleAudio = () => {
        const audio = document.getElementById('audio');
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    // pilih video di list
    const handlePlayButtonClick = (video) => {
        console.log('Playing video:', video);
    };

    const handlePlayButtonClickPod = (podcast) => {
        console.log('Playing podcast:', podcast);
    };




    return (
        <div className='flex flex-col items-center   font-plus-jakarta'>
            <Navbar />
            <TemplatePage title={'Video & Podcast'} />
            <div role="tablist" className="tabs tabs-bordered w-full">
                <input type="radio" name="my_tabs_2" role="tab" className="tab border-0 checked:bg-blue-200" aria-label="Video" checked={activeTab === 'video'} onChange={() => setActiveTab('video')} />
                <div role="tabpanel" className={`tab-content rounded-box p-6 flex flex-col ${activeTab === 'video' ? 'block' : 'hidden'}`}>
                    {/* main content */}
                    <div className=' w-full h-max relative' onClick={() => handlePlayButtonClick(mainVideo)}>
                        {mainVideo && !loading ? (
                            <div className=' w-full h-max relative'>
                                <video controls className='w-full rounded-xl'>
                                    <source src={mainVideo.link} type='video/mp4' />
                                    Your browser does not support the video tag.
                                </video>
                                <h2 className='absolute top-0 left-5 text-white'>{mainVideo.title}</h2>
                            </div>
                        ) : (
                            <h2>sebentar yah</h2>
                        )}
                    </div>
                    {/* list content */}
                    <div className='w-full mt-20'>
                        <h2>Latest Episode</h2>
                        <div className='w-full flex box-border gap-3 '>
                            {loading ? (
                                <div>Loading...</div>
                            ) : (
                                repeatedVideos.map((video, index) => (

                                    <div className='w-1/3' key={index} onClick={() => handlePlayButtonClick(video)}>
                                        <video controls className='w-full rounded-xl'>
                                            <source src={Random} type='video/mp4' />
                                            Your browser does not support the video tag.
                                        </video>
                                        <h5 className='mt-3 text-gray-700'>{video.title}</h5>
                                        <Button children={<>{playIcon()} Play This Episode</>} className={"flex items-center justify-center w-max text-blue-600 font-bold bg-transparent border-none -ml-2"} />
                                    </div>

                                ))
                            )}
                        </div>
                    </div>
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab  border-0 checked:bg-blue-200" aria-label="Podcast" checked={activeTab === 'podcast'} onChange={() => setActiveTab('podcast')} />
                <div role="tabpanel" className={`tab-content rounded-box p-6 ${activeTab === 'podcast' ? 'block' : 'hidden'}`}>
                    {/* main content */}
                    <div className=' w-full h-max relative'>
                        {mainPodcast && !loadingPod ? (
                            <div className=' w-full h-[30rem] relative rounded-xl '>
                                <button onClick={toggleAudio} style={{ backgroundImage: `url(${mainPodcast.thumbnail})`, backgroundColor: 'rgba(0, 0, 0, 0.5)' }} className=" absolute top-0 left-0 w-full h-full flex items-center justify-center rounded-xl border-none">
                                    {isPlaying ? pauseIcon() : playIcon()}
                                </button>
                                <audio id="audio" src={mainPodcast.link} />
                                <h2 className='absolute top-0 left-5 text-white'>{mainPodcast.title}</h2>
                            </div>
                        ) : (
                            <h2>sebentar yah</h2>
                        )}
                    </div>
                    {/* list content */}
                    <div className='w-full mt-20'>
                        <h2>Latest Episode</h2>
                        <div className='w-full flex box-border gap-3 '>
                            {loadingPod ? (
                                <div>Loading...</div>
                            ) : (
                                <div className='carousel box-border carousel-center rounded-box w-[80rem]'>
                                    <div className='carousel-item gap-4'>
                                        {repeatedPodcasts.map((podcast, index) => (
                                            <div className="w-80" key={index} onClick={() => handlePlayButtonClickPod(podcast)}>
                                                <img src={podcast.thumbnail} alt="" className='w-full' />
                                                <h5 className="mt-3 text-gray-700">{podcast.title}</h5>
                                                <Button children={<>{playIcon()} Play This Episode</>} className={"flex items-center justify-center w-max text-blue-600 font-bold bg-transparent border-none -ml-2"} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default VideoPodcastPage
