import React from 'react'
import { Link } from 'react-router-dom';

const ArticleCard = ({ title, img, text, id }) => {
    return (
        <Link to={`/article/${id}`} className='w-[45rem] font-plus-jakarta h-max flex p-2 gap-4 items-center cursor-pointer no-underline'>
            <img src={img} alt={title} className='h-36 w-56' />
            <div className='max-w-[40%] -mt-12 flex h-32 flex-col'>
                <h2 className='text-2xl font-semibold text-gray-700'>{title}</h2>
                <p className='text-xs text-gray-900 -mt-5'>{text}</p>
                <p className='text-xs text-gray-300 mt-0'>15 menit lalu</p>
            </div>
        </Link>

    )
}

export default ArticleCard
