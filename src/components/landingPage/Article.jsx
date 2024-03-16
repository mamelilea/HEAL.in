import React from 'react'
import Button from '../ui/Button'
import img from '../../assets/LandingPage/Article/1.png'
import img2 from '../../assets/LandingPage/Article/2.png'
import img3 from '../../assets/LandingPage/Article/3.png'
import { useNavigate } from 'react-router-dom'


const ArticleCard = ({ img, title, desc }) => {
    return (
        <div className='w-1/3 h-max rounded-xl bg-white p-3 font-plus-jakarta border-solid border border-zinc-400'>
            <div className=''>
                <img src={img} alt={title} className='w-full h-[20.3rem] rounded-xl' />
                <h3 className='text-neutral-700 font-semibold h-10'>{title}</h3>
                <p>{desc}</p>
            </div>
            <Button type={"button"} children={"Read More -→"} className="Button px-7 py-2 bg-neutral-700 text-white rounded-3xl justify-start items-center inline-flex font-plus-jakarta border-0 hover:bg-zinc-600 hover:shadow-inner" disabled={false} />

        </div>
    )
}
const Article = () => {
    const navigate = useNavigate()
    return (
        <div className='w-full font-plus-jakarta h-max flex flex-col items-center box-border relative mt-10 mb-20'>
            <h2 className='text-4xl font-semibold text-neutral-700 relative'>
                Article
            </h2>
            <div className='w-full flex box-border gap-5 px-10'>
                <ArticleCard
                    img={img}
                    title="Cara Stay Sane di Dunia yang Sedikit Gila"
                    desc="Artikel ini akan membahas berbagai strategi praktis yang dapat membantu pengguna mengelola kecemasan sehari-hari, seperti latihan pernapasan, teknik relaksasi, atau metode pengalihan perhatian."
                />
                <ArticleCard
                    img={img2}
                    title="Mental Health Matters: Secrets to Thrive in Chaos"
                    desc="Artikel ini akan membahas berbagai strategi praktis yang dapat membantu pengguna mengelola kecemasan sehari-hari, seperti latihan pernapasan, teknik relaksasi, atau metode pengalihan perhatian."
                />
                <ArticleCard
                    img={img3}
                    title="Embracing Positivity in Every Situation"
                    desc="Artikel ini akan membahas berbagai strategi praktis yang dapat membantu pengguna mengelola kecemasan sehari-hari, seperti latihan pernapasan, teknik relaksasi, atau metode pengalihan perhatian."
                />
            </div>
            <Button type={"button"} children={"More Article --→"} className="h-5 w-36 mt-5 relative text-white text-[11px] font-medium Button px-7 py-5 bg-neutral-700 rounded-3xl justify-start items-center inline-flex font-plus-jakarta border-0 hover:bg-zinc-600 hover:shadow-inner " disabled={false} onClick={() => navigate('/article')}/>
        </div>
    )
}

export default Article
