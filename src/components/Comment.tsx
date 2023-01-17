import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({content, onDeleteComment }: CommentProps) {
  const [ likeCount, setLikeCount ] = useState(0);

function handleDeleteComment(){
  onDeleteComment(content);
}

function handleLikeComment() {
  setLikeCount(likeCount + 1);
}

  return (
    <div className={styles.Comment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/81511894?v=4" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Denise Schirmer</strong>
              <time title="10 de Janeiro ás 03:36h" dateTime="2023-01-10">
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