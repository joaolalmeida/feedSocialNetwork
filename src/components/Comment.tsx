import { ThumbsUp, Trash } from "phosphor-react"
import { Avatar } from "./Avatar"

import styles from "./Comment.module.css"
import { useState } from "react"

interface CommentProps {
  content: string
  onDeleteComment: (comment: string) => void //vazio
}


export function Comment({ content, onDeleteComment }: CommentProps) {

  const [likeCount, setLikeCount] = useState(0) //iniciar os likes com 0

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() { //funcao para adicionar um like ao clicar
    setLikeCount((state) => {
      return state + 1
    })
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}  //{/* Criando uma proprierade chamada hasBorder para tirar a borda deste elemento em especifico */}
        src="https://github.com/joaolalmeida.png"
        alt=""
        />  

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>João Almeida</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
