import { useState } from 'react'
import styles from './TwitterCard.module.css'

export function TwitterCard ({handle, name}) {
    const [isFollowing, setIsFollowing] = useState(false)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    
    return(
        <div className={styles.row}>
            <div className={styles.header} >
                <img className={styles.avatarImage} alt='random avatar' src='https://media.istockphoto.com/id/1443562748/es/foto/lindo-gato-de-jengibre.jpg?s=2048x2048&w=is&k=20&c=QIpy_S7C5mso3BgM23UtJOsioS8vPsRcb4XX1reJ70I='>
                </img>
                <div className={styles.headerDiv} >
                    <>
                        {name}
                    </>
                    <div className={styles.handle}>
                        @{handle}
                    </div>
                </div>
            </div>
            <button className={styles.button} onClick={() => setIsFollowing(!isFollowing)}>
                {text}
            </button>
        </div>
    )
}