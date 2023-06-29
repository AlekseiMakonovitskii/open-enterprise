import React from 'react'
import Wrapper from '../UI/Wrapper/Wrapper'
import styles from './Footer.module.scss'
import { useGlobalCOntext } from '../../context/context'

const Footer = () => {
	const {alert, handleAlert} = useGlobalCOntext();
	const navData = [
		'Documentation',
		'GitHub',
		'Twitter',
		'Contact us'
	];

	const currentDate = () => {
		const date = new Date();
		return date.getFullYear();		
	}

	const disableElement = () => {
		return;
	}

	const func = !alert ? handleAlert : disableElement;

	return (
		<Wrapper>
			<footer className={styles.footer}>
				<h2 className={styles.logo}>Open Enterprise</h2>
				<h3 className={styles.author}>Aleksei Makonovitskii {currentDate()}</h3>
				<ul className={styles.nav}>
					{navData.map(el => <li key={el} onClick={() => func()}><a>{el}</a></li>)}
				</ul>
			</footer>
		</Wrapper>
	)
}

export default Footer