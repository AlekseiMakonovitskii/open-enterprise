import React from 'react';
import styles from './TripleText.module.scss';

const TripleText = ({type, paragraph, element, title, text, cardBlock}) => {
	return (
		<div className={`${styles.tripleText} ${cardBlock && styles[cardBlock]}`}>
		{type === 'h1' ? <h1>{title}</h1> : <h2>{title}</h2>}
		{paragraph === 'hero' ? <p className={styles.hero}>{text}</p> : <p className={styles.primary}>{text}</p>}
		{element && element}
		</div>
	)
}

export default TripleText