import React, { useRef, useState } from 'react'
import styles from '../styles/MiniPlayer.module.css'
import ReactPlayer from 'react-player';

export default function MiniPlayer({ title, id }) {

    const buttonRef = useRef();
    const [status, setStatus] = useState(false);
    const videoURL = `https://youtube.com/watch?v=${id}`;

    function toggleMiniPlayer() {
        if (!status) {
            buttonRef.current.classList.remove(styles.floatingBtn);
            setStatus(true);
        } else {
            buttonRef.current.classList.add(styles.floatingBtn);
            setStatus(false);
        }
    }

    return (
        <div className={`${styles.miniPlayer} ${styles.floatingBtn}`} ref={buttonRef} onClick={toggleMiniPlayer}>
            <span className={`material-icons-outlined ${styles.open}`}> play_circle_filled </span>
            <span className={`material-icons-outlined ${styles.close}`} onClick={toggleMiniPlayer}> close </span>
            <ReactPlayer className={styles.player} url={videoURL} width="300px" height="168px" playing={status} controls />
            <p>{title}</p>
        </div >
    )
}
