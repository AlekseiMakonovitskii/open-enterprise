import React from 'react'
import styles from './Alert.module.scss';


const Alert = ({message}) => {
	return (
		<div className={styles.alert} >{message || `Oops, unknown error`}{message ? <img src='src/assets/pcmanemoji.svg' alt='Sorry...'/> : <img src='src/assets/sadEmoji.svg' alt='Sorry...'/>}</div>
	)
}

export default Alert