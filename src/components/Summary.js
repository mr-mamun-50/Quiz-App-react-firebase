import React, { useMemo } from 'react'
import styles from '../styles/Summary.module.css'
import successImg from '../assets/images/success.png'
import useFetch from '../hooks/useFetch'
import loadingPlay from '../assets/images/loading_play_4.gif'

export default function Summary({ score, noq }) {

    const getKeyword = useMemo(() => {
        if ((score / (noq * 5)) * 100 < 50) {
            return "failed";
        } else if ((score / (noq * 5)) * 100 < 75) {
            return "good";
        } else if ((score / (noq * 5)) * 100 < 100) {
            return "very good";
        } else {
            return "excellent";
        }
    }, [score, noq]);

    const { loading, error, result } = useFetch(
        `https://api.pexels.com/v1/search?query=${getKeyword}&per_page=1`,
        "GET",
        { Authorization: process.env.REACT_APP_PEXELS_API_KEY }
    );

    const image = result ? result?.photos[0].src.medium : successImg;

    return (
        <div className={styles.summary}>
            <div className={styles.point}>
                <p className={styles.score}>
                    Your score is <br />
                    {score} out of {noq * 5}
                </p>
            </div>

            {loading && <img src={loadingPlay} alt="Loading your badge..." />}
            {error && <div>An error occured!</div>}

            {!loading && !error && (
                <div className={styles.badge}>
                    <img src={image} alt="Success" />
                </div>
            )}
        </div>
    )
}
