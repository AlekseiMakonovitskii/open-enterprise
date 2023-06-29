import React from 'react'
import styles from './Hero.module.scss'
import Split from '../UI/Split/Split'
import TripleText from '../UI/TripleText/TripleText';
import Button from '../UI/Button/Button';
import Scrollicon from '../UI/Scrollicon/Scrollicon';

const Hero = () => {
	const TripleTextData = {
		type: 'h1',
		paragraph: 'hero',
		element: <Button style={'light'}>Request early access</Button>,
		title: 'A new model for open collaboration',
		text: 'Run an organization where members get rewarded for their contributions with fractional ownership.',
	};



	const splitData = {
		section1: <TripleText {...TripleTextData}/>,
		section2: <img src='src/assets/hero-img.svg' alt="Hero Preview Imgae" />,
	};






	return (
		 <section className={styles.hero}>
		 	<Split {...splitData}/>
			<Scrollicon/>
			
		 </section>
	)
}

export default Hero