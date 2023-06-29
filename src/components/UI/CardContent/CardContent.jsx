import React from 'react'
import styles from './CardContent.module.scss'

const CardContent = ({title, text,  autText, date}) => {
	return (
		<div className={styles.cardcontent}>
			<h3 className={styles.title}>{title}</h3>
			<p className={styles.text}>{text}</p>
			<div className={styles.footer}>
				<div className={styles.aut}>
					<p className={styles.autText}>{autText}</p>
				</div>
					<p className={styles.date}>{date}</p>
			</div>
		</div>
	)
}

export default CardContent