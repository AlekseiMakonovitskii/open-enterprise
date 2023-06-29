import React from 'react'
import styles from './Button.module.scss'
import { useGlobalCOntext } from '../../../context/context'

const Button = ({children, style}) => {
	const {alert, handleAlert} = useGlobalCOntext();
	const disabled = alert;

	return (
		<button className={`${styles.button} ${styles[style]}`} onClick={() => handleAlert()} disabled={disabled}>{children}</button>
	)
}

export default Button