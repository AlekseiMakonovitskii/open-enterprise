import React from 'react'
import styles from './Split.module.scss'

const Split = ({section1, section2, style}) => {
	return (
		<div className={`${styles.split} ${styles[style]}`}>
			<div className={styles.section1}>{section1}</div>
			<div className={styles.section2}>{section2}</div>
		</div>
	)
}

export default Split