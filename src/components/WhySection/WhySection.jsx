import React from 'react'
import Wrapper from '../UI/Wrapper/Wrapper';
import Split from '../UI/Split/Split';
import TripleText from '../UI/TripleText/TripleText';
import TripleItems from '../UI/TripleItems/TripleItems';
import styles from './WhySection.module.scss'
import img1 from '../../assets/techItem1.svg'
import img2 from '../../assets/techItem2.svg'
import img3 from '../../assets/techItem3.svg'

const WhySection = () => {
	const TripleTextData = {
		type: 'h2',
		paragraph: 'primary',
		title: 'Reimagining what it means to work',
		text: 'Teams and communities using Open Enterprise fundamentally unlock a reality of work that reimagines how people engage in economic opportunity, meeting the demands and expectations of a modern organization.',
	};

	const techItems = [
    { 
			img: img1, 
			title: 'Modern workforce', 
			text : 'Multistakeholder governance aligns employees with the organization’s wider community.',
		},
		{ 
			img: img2, 
			title: 'Meritocratic by design', 
			text : 'Tokenized ownership aligns deeply committed individuals with the organization’s success.',
		},
		{ 
			img: img3, 
			title: 'Engineered for resilience', 
			text : 'Open Enterprise supports best practices in sociocratic management.',
		},
  ];

	const splitData = {
		section1: <TripleText {...TripleTextData}/>,
		section2: <TripleItems data={techItems} type='TechItem'/>,
		style: 'column',
	}

	return (
		<Wrapper>
			<div className={styles.whySection} id='whysection'>
				<Split {...splitData}/>
			</div>
		</Wrapper>
	)
}

export default WhySection