import PostCard from '../PostCard/PostCard'
import style from './Main.module.css'
import { posts } from '../../posts.js'
import Tags from '../tags/Tags.jsx'
import { useState } from 'react'
import Button from '../Button/Button.jsx'

export default function Main() {

  const [publishedPosts, setPublishedPosts ] = useState(posts.filter((post) => post.published === true ))
  const tags = []

  posts.forEach(post => {

    const postTags = post.tags
    console.log(postTags)

    postTags.forEach((tag) => {
      if(!tags.includes(tag)) {
        tags.push(tag)
      }
      // !tags.includes(tag) && tags.push(tag)
    })

  })


  return (
    <main>
      <section className={style.section}>
        <div className="container">
          <form action="">
            <input type="text" placeholder='Titolo del post' />
            <Button />
          </form>
        </div>
        <div className="container">
          <h1 className={style.section_title}>Il mio blog</h1>
        </div>
        <div className="container">
          <Tags className={style.tags_centered } tags={tags} />
        </div>
        <div className="container">
          <div className="row">
            { publishedPosts.map((el) => (
              <div key={el.id} className="col-4">
                <PostCard post={el} />
              </div>
            ))}          
          </div>
        </div>
      </section>
    </main>
  )
}