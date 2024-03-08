import React from 'react'
import ArticleCard from '../components/article/ArticleCard'
import Navbar from '../components/shared/Navbar'

const ArticlePage = () => {
  const articles = [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet.',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus',
      img: 'https://picsum.photos/200/300'
    },
    {
      id: 2,
      title: 'Lorem ipsum dolor sit amet.',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus',
      img: 'https://source.unsplash.com/random'
    },
    {
      id: 3,
      title: 'Lorem ipsum dolor sit amet.',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus',
      img: 'https://source.unsplash.com/random/'
    }
  ]
  return (
    <>
    <Navbar />
    <div className=' w-screen flex justify-center'>
      <div className='bg-slate-200 p-20 w-[80%] min-h-screen'>
        <h1 className='text-4xl font-semibold'>Article</h1>
        <section className='my-16 flex flex-col gap-4'>
          {articles.map(article => (
            <ArticleCard key={article.id} id={article.id} img={article.img} title={article.title} text={article.text} />
          ))}
        </section>
      </div>
    </div>
    </>
  )
}

export default ArticlePage
