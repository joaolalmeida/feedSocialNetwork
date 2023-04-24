import { format, formatDistanceToNow } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"

import { Avatar } from "./Avatar"
import { Comment } from "./Comment"

import styles from "./Post.module.css"
import { FormEvent, useState, ChangeEvent, InvalidEvent } from "react"

interface Author {
  name: string
  role: string
  avatarUrl: string
}

interface Content {
  type: 'paragraph' | 'link' | 'link#',
  content: string
}

 export interface PostType {
  id: number
  author: Author
  publishedAt: Date
  content: Content[]
}

interface PostProps {
 post: PostType
}


export function Post({ post }: PostProps) {
  // para nao ficar repetindo props em todos os componentes colocar as propriedades que estao dentro do props e entre {}

  const [comments, setComments] = useState([
    //estado = variaveis que eu quero que o componente monitore
    "Post muito bacana, hein?!",
  ])

  const [newCommentText, setNewCommentText] = useState('') // para limpar a text area apos escrever o comentario

  const publishedDateFormatted = format(
    post.publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  ) // 11 de Maio às 08:13h (aspas simples nas outras letras que nao sao padrao da biblioteca de data)

  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault() //Para evitar o padrao do html de reiniciar a pagina
    setComments([...comments, newCommentText]) //forma para adicionar mais um comentario
    setNewCommentText('')
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("") //voltar a retornar quando o usuario escrever algo
    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!") //mensagem para campo obrigatorio
  }

  function deleteComment(commentToDelete: string) { //funcao para excluir um comentario
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment != commentToDelete
    })

    setComments(commentsWithoutDeletedOne)
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src={post.author.avatarUrl} />{" "}
          {/* passar a proprierade hasBorder sem o true o react entente que ela é true mesmo assim */}
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={post.publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
        {/* Colocando title passando o mouse aparece o horario da publicação */}
      </header>
      <div className={styles.content}>
        {/* estrutura para pular linha a cada paragrafo do content no app.jsx */}
        {post.content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === "link") {
            return (<p key={line.content}><a href="#">{line.content}</a></p>
            )
          } else if (line.type === "link#") {
            return (
              <span key={line.content}>
                <a href="">{line.content}</a>
              </span>
            )
          }
        })}
      </div>
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment" // colocar name para poder vincular com a const newCommentText
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required //para nao permitir postar um comentario sem algo escrito
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>  {/*impedir que o usuario clique no botao*/}
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment} //Chamando a funcao como propriedade para deletar um comentario
            />
          ) 
        })}
      </div>
    </article>
  )
}
 