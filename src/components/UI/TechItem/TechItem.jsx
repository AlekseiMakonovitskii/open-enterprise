import React from 'react'
import styles from './TechItem.module.scss'

const TechItem = ({img, title, text}) => {
	return (
		<div className={styles.techItem}>
			<img src={img} alt="logo" loading=" lazy"/>
			<h3>{title}</h3>
			<p>{text}</p>
		</div>
	)
}

export default TechItem