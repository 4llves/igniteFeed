import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'
import './global.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Alves"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ut placeat maxime assumenda dignissimos. Quae quis a magni! Esse officia cumque veritatis earum laudantium illum perferendis enim voluptatum asperiores dolore?"
          />

          <Post
            author="Jhonata"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ut placeat maxime assumenda dignissimos. Quae quis a magni! Esse officia cumque veritatis earum laudantium illum perferendis enim voluptatum asperiores dolore?"
          />
        </main>
      </div>
    </div>
  )
}
