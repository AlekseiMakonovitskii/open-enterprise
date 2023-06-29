import React from 'react';
import Wrapper from '../UI/Wrapper/Wrapper';
import Split from '../UI/Split/Split';
import TripleItems from '../UI/TripleItems/TripleItems';
import TripleText from '../UI/TripleText/TripleText';
import Button from '../UI/Button/Button';

import styles from './Contribute.module.scss'

const Contribute = () => {
  const TripleTextData = {
    type: 'h2',
    paragraph: 'primary',
    title: 'Help us improve Open Enterprise',
    text: 'As an Open Enterprise ourselves, we are actively looking for new talent to join our mission of improving and delivering the Open Enterprise model to the world. Apply for open tasks and earn a stake in our success.',
  };

  const cardContent = [
    {
      title: 'Ideate a list of features based on the Sociocracy model',
      text: 'We’re looking for someone interested in business theory and research that’ll help us bridge the gap between our s...',
      autText: '5 AUT',
      date: 'Apply by May 15',
    },
    {
      title: 'Update documentation with FAQs',
      text: 'Review our community chat for the most frequently asked questions and document answers for our product docs.',
      autText: '10 AUT',
      date: 'Apply by May 18',
    },
    {
      title: 'Tutorial video series',
      text: 'Create a series of video tutorials that cover everything from start to finish on using Open Enterprise.',
      autText: '40 AUT',
      date: 'Apply by May 20',
    },
  ];

  const splitData = {
    section1: <TripleText {...TripleTextData} />,
    section2: (
      <TripleItems data={cardContent} type='CardContent'>
        <Button style={'dark'}>View more</Button>
      </TripleItems>
    ),
    style: 'column',
  };

  return (
    <Wrapper>
      <div className={styles.contribute} id='contribute'>
				<Split {...splitData}/>
				
					<Button style='dark'>View more</Button>
				
			</div>
    </Wrapper>
  );
};

export default Contribute;
