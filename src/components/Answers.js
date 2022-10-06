import React, { Fragment } from 'react'
import styles from '../styles/Answers.module.css'
import CheckBox from './CheckBox'

export default function Answers({ options = [], handleChange, input }) {
    return (
        <div className={styles.answers}>
            {options.map((option, index) => (
                <Fragment key={index}>
                    {input ? (
                        <CheckBox className={styles.answer} text={option.title} value={index} checked={option.checked} onChange={(e) => handleChange(e, index)} />
                    ) : (
                        <CheckBox className={`${styles.answer} ${option.isCorrect ? styles.correct : option.checked ? styles.wrong : null}`}
                            text={option.title} value={index} defaultChecked={option.checked} disabled />
                    )}
                </Fragment>
            ))}
        </div>
    )
}
