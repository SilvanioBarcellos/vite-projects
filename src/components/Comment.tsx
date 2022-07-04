import { Trash } from 'phosphor-react';
import { ThumbsUp } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

interface CommentProps{
   content: string;
   onDeleteComment: (comment: string)=> void;
}


export function Comment({content, onDeleteComment}: CommentProps) {
     const [likeCount, setLikeCount] = useState(0);

   
    
    function handleDeleteComment () {
        onDeleteComment(content);
    }
    
    function handleLikeComment() {
        setLikeCount(likeCount + 1);
    }


    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/94394835?v=4" />
           
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div  className={styles.authorAndTime}>
                            <strong>Estefania Vago</strong>
                            <time title='02 de julho às 13:43h'  dateTime='2022-07-02 13:43:00'>Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentário'>
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