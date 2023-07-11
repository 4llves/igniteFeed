import { Post } from './Post'
import { Header } from './components/Header'

import './styles.css'

export function App() {

  return (
    <div>
      <Header />

      <Post
        author="Alves"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur alias incidunt tempora dignissimos nisi nemo quaerat quam temporibus hic, laborum esse nulla mollitia necessitatibus explicabo ex error earum, numquam rem."
      />
    </div>
  )
}

