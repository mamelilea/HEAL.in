import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../shared/Navbar';
import ErrorPage from '../../pages/ErrorPage';
import TemplatePage from '../layout/TemplatePage';
import ArticleList from './ArticleList';

const articles = [
    { id: 1, title: "Kesehatan Mental (Mental Health): Penyebab & Cara Menjaganya", img: "https://picsum.photos/200/300", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus.   Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. " },
    { id: 2, title: "Kesehatan Mental (Mental Health): Penyebab & Cara Menjaganya", img: "https://source.unsplash.com/random", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus.natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus.   Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. " },
    { id: 3, title: "Kesehatan Mental (Mental Health): Penyebab & Cara Menjaganya", img: "https://source.unsplash.com/random/", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus.natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus.   Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. " },
    { id: 4, title: "Kesehatan Mental (Mental Health): Penyebab & Cara Menjaganya", img: "https://source.unsplash.com/random/", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus.natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus.   Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. " },
    { id: 5, title: "Kesehatan Mental (Mental Health): Penyebab & Cara Menjaganya", img: "https://source.unsplash.com/random/", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus.natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus.   Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. " },

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
            <div className='w-[97.9vw] font-plus-jakarta'>
                <Navbar />
                <TemplatePage title={"Article Detail"} />
                <h1 className='text-4xl ml-20 w-4/6'>{title}</h1>
                <section className='w-full h-max flex gap-4 box-border px-20 justify-center'>
                    <div className='flex flex-col gap-4 w-4/6'>
                        <img src={img} alt={title} className='w-[50rem] h-[28rem] rounded-xl' />
                        <p className='w-[50rem] text-justify'>{text}</p>

                    </div>
                    <div className='w-2/6 h-max pl-4'>
                        <h4 className='text-blue-500'>Artikel Terkait</h4>
                        <ArticleList articles={articles} />
                    </div>
                </section>
            </div>
        </>
    )
}

export default ArticleDetail
