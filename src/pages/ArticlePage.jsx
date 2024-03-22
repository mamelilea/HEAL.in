import React from 'react'
import ArticleCard from '../components/article/ArticleCard'
import Navbar from '../components/shared/Navbar'
import TemplatePage from '../components/layout/TemplatePage'

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
    },
    {
      id: 4,
      title: 'Lorem ipsum dolor sit amet.',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus',
      img: 'https://source.unsplash.com/random/'
    },
    {
      id: 5,
      title: 'Lorem ipsum dolor sit amet.',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus',
      img: 'https://source.unsplash.com/random/'
    },
  ]
  return (
    <>
      <div className='flex flex-col w-[97.9vw] overflow-x-hidden justify-center items-center font-plus-jakarta'>
        <Navbar />
        <TemplatePage title={'Article'} />
        <div className=' p-20 w-[80%] min-h-screen'>
          <h2 className='text-3xl -mt-20'>Popular Article</h2>
          <section className='my-16 w-full grid grid-cols-2 box-border gap-4 '>
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
