import React from 'react'
import Wrapper from '../UI/Wrapper/Wrapper'
import styles from './Request.module.scss';
import Split from '../UI/Split/Split';
import Button from '../UI/Button/Button';
import TripleText from '../UI/TripleText/TripleText';

const Request = () => {
	const TripleTextData = {
		type: 'h2',
		paragraph: 'primary',
		element: <Button style={'light'}>Request early access</Button>,
		title: 'Start an Open Enterprise',
		text: 'If you can’t wait to run a new or existing organization on Open Enterprise and are willing to explore and navigate the beta, we’d love to get you started.',
	};

	const splitData = {
		section1: <TripleText {...TripleTextData}/>,
		section2: <img src='src/assets/requestImg.png' alt="Request Preview Imgae" />,
	};


	return (
		<Wrapper>
			<div className={styles.request} id='request'>
				<Split {...splitData}/>
			</div>
		</Wrapper>
	)
}

export default Request