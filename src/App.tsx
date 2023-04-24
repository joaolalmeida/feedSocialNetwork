//JSX = JavaScript + XML (HTML)

//import Button from './Post'
import { Header } from './components/Header';
import { Post, PostType } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css';

import './global.css';

//author: { avatar_url: "", name: "", role: ""}
//publishedAt: Date
//content: String

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/joaolalmeida.png",
      name: "Joao Almeida",
      role: "Front-end Developer ",
    },
    content: [
      //nao retornar html puro do back-end para evitar vulnerabilidade como por exemplo tag <p>
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "front-end" },
      { type: "link#", content: "#novoprojeto" },
      { type: "link#", content: "#react" },
      { type: "link#", content: "#typescript" },
    ],
    publishedAt: new Date("2023-04-01 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/Gustag0d.png",
      name: "Gustavo Moraski",
      role: "Back-end Developer",
    },
    content: [
      //nao retornar html puro do back-end para evitar vulnerabilidade como por exemplo tag <p>
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Trabalhe com paixão e comprometimento, e o sucesso será uma consequência natural do seu esforço.",
      },
      { type: "link", content: "Back-end" },
      { type: "link#", content: "#novoprojeto" },
      { type: "link#", content: "#react" },
      { type: "link#", content: "#typescript" },
    ],
    publishedAt: new Date("2023-04-03 20:00:00"),
  },
]

export function App() {
  return (
    //<h1>Teste</h1>
    <div>
      <Header />
      {/* Mais de um elemento precisa estar dentro de uma div por exemplo */}

       <div className={styles.wrapper}> {/*Colocar no proprio APP para ficar melhor para incluir os modulos criados */}
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id} 
                post={post}
                // author={post.author}
                // content={post.content}
                // publishedAt={post.publishedAt}
              />
            ) 
          })}
        </main>
      </div>
    </div>
  )
}

//export default App
