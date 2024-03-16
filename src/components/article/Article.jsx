import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../shared/Navbar';
import ErrorPage from '../../pages/ErrorPage';

const articles = [
    { id: 1, title: "Article 1", img: "https://picsum.photos/200/300", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus.   Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. " },
    { id: 2, title: "Article 2", img: "https://source.unsplash.com/random", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus.natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus.   Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. " },
    { id: 3, title: "Article 2", img: "https://source.unsplash.com/random/", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus.natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus.   Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. " }
];


const ArticleDetail = () => {
    const { id } = useParams();
    const article = articles.find(article => article.id === parseInt(id));
    if (!article) {
        return (
            <ErrorPage />
        )

    }
    const { title, img, text } = article;

    return (
        <>
            <Navbar />
            <section className='px-10 w-screen h-max flex justify-center overflow-x-hidden'>
                <div className='flex flex-col gap-4 w-[80%] items-center'>
                    <h1 className='text-4xl'>{title}</h1>
                    <img src={img} alt={title} className='w-[50rem] h-[28rem]' />
                    <p className='w-[50rem] text-justify'>{text}</p>
                </div>
            </section>
        </>
    )
}

export default ArticleDetail
