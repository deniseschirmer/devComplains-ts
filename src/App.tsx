
import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';


import styles from './App.module.css';

import './global.css' 

const posts = [
  {
    id: 1,
    author: {
      avatarUrl:'https://avatars.githubusercontent.com/u/81511894?v=4',
      name: 'Denise Schirmer',
      role: 'Front-end Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera,'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-01-14 05:44:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl:'https://avatars.githubusercontent.com/u/84814641?v=4',
      name: 'Felipe Gomes',
      role: 'Front-end Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera,'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-01-10 10:34:00'),
  },
]


export function App() {
  return (
    <div>
    <Header />

    <div className={styles.wrapper}>
     <Sidebar />
      <main>
       {posts.map(post => {
        return (
          <Post 
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
          />
        )

       })}
      </main>
    </div>
    </div>
  )
}


