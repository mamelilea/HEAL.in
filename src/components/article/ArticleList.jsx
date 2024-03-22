import React from 'react'
import { Link } from 'react-router-dom'

const ArticleList = ({ articles }) => {
    return (

        <div className="flex flex-col gap-4">
            {articles.map(article => (
                <Link key={article.id} to={`/article/${article.id}`} className="text-black no-underline">
                    <div key={article.id} className=" p-4 rounded-md flex gap-2">
                        <div className='w-4/6'>
                            <h3 className="text-sm font-medium">{article.title}</h3>
                        </div>
                        <div className='w-2/6'>
                            <img src={article.img} alt={article.title} className="w-32 h-20 object-cover rounded-md" />
                        </div>
                    </div>
                </Link>
            ))}
        </div>

    )
}

export default ArticleList
