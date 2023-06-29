import React from 'react'
import styles from './Alert.module.scss';
import emogi1 from '../../../assets/pcmanemoji.svg';
import emogi2 from '../../../assets/sadEmoji.svg';


const Alert = ({message}) => {
	return (
		<div className={styles.alert} >{message || `Oops, unknown error`}{message ? <img src={emogi1} alt='Sorry...'/> : <img src={emogi2} alt='Sorry...'/>}</div>
	)
}

export default Alert