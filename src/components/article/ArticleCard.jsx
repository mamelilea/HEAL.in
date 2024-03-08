import React from 'react'
import { Link } from 'react-router-dom';

const ArticleCard = ({ title, img, text, id }) => {
    return (
        <Link to={`/article/${id}`} className='w-[45rem] h-max flex p-2 gap-4 items-center cursor-pointer'>
            <img src={img} alt={title} className='h-36 w-56' />
            <div className='max-w-[65%] gap-3 flex flex-col'>
                <h2 className='text-3xl font-semibold text-gray-700'>{title}</h2>
                <p className='text-xs'>{text}</p>
                <p className='text-xs text-gray-500'>15 menit lalu</p>
            </div>
        </Link>

    )
}

export default ArticleCard
