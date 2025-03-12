import { useState } from 'react'
import { postsApi } from './../../../shared/api/posts-api'
import styles from './../../../../src/styles/common.module.scss'
import { Button } from './../../../shared/ui/button/Button'

export function RandomPost() {
  const [postTitle, setPostTitle] = useState<string | null>(null)

  const fetchRandomPost = async () => {
    try {
      const post = await postsApi.getRandomPost()
      setPostTitle(post.title)
    } catch (error) {
      console.error('Ошибка загрузки поста:', error)
    }
  }

  return (
    <div className={styles.container}>
      <h1>Рандомный пост</h1>
      <Button label="Получить" onClick={fetchRandomPost} />
      {postTitle && <h2>{postTitle}</h2>}
    </div>
  )
}
