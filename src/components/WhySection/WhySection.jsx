import React from 'react'
import Wrapper from '../UI/Wrapper/Wrapper';
import Split from '../UI/Split/Split';
import TripleText from '../UI/TripleText/TripleText';
import TripleItems from '../UI/TripleItems/TripleItems';
import styles from './WhySection.module.scss'

const WhySection = () => {
	const TripleTextData = {
		type: 'h2',
		paragraph: 'primary',
		title: 'Reimagining what it means to work',
		text: 'Teams and communities using Open Enterprise fundamentally unlock a reality of work that reimagines how people engage in economic opportunity, meeting the demands and expectations of a modern organization.',
	};

	const techItems = [
    { 
			img: 'src/assets/techItem1.svg', 
			title: 'Modern workforce', 
			text : 'Multistakeholder governance aligns employees with the organization’s wider community.',
		},
		{ 
			img: 'src/assets/techItem2.svg', 
			title: 'Meritocratic by design', 
			text : 'Tokenized ownership aligns deeply committed individuals with the organization’s success.',
		},
		{ 
			img: 'src/assets/techItem3.svg', 
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