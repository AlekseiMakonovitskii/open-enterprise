import React from 'react'
import { FaChevronDown } from 'react-icons/fa';
import styles from './Scrollicon.module.scss';

const Scrollicon = () => {
	return (
		<div className={styles.scrollicon}>
			<a href="#whysection"><FaChevronDown size={50}/></a>
			<p>Scroll down</p>
		</div>
	)
}

export default Scrollicon