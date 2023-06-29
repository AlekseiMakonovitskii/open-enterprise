import React from 'react';
import Wrapper from '../UI/Wrapper/Wrapper';
import TripleText from '../UI/TripleText/TripleText';
import Split from '../UI/Split/Split';
import styles from './Features.module.scss'

const Features = () => {
  const data = [
    {
      type: 'h2',
      paragraph: 'primary',
      element: <img src="src/assets/featureCard1.svg" alt="Card Icon" />,
      title: 'Kickstart an organization with your co-founders',
      text: 'It’s the early days, you just had a long conversation with two friends about a meaningful challenge that you’re all passionate about and have a potential solution for. You’re ready to embark the startup journey.',
			cardBlock: 'cardBlock',
    },
    {
      type: 'h2',
      paragraph: 'primary',
      element: <img src="src/assets/featureCard2.svg" alt="Card Icon" />,
      title: 'Onboard users, investors and advisors as you grow',
      text: 'You’ve bootstrapped and delivered an MVP, and some investors and advisors are interested in having a chat with you. As an Open Enterprise, you can onboard them seamlessly into your digital organization and align them with your success.',
			cardBlock: 'cardBlock',
    },
    {
      type: 'h2',
      paragraph: 'primary',
      element: <img src="src/assets/featureCard3.svg" alt="Card Icon" />,
      title: 'Engage highly committed contributors',
      text: 'You need talented people on-demand across various tasks that your full-time workforce can’t prioritize at the moment. As an Open Enterprise, you can easily fund tasks and have people apply to work on them in return for funds or shares.',
			cardBlock: 'cardBlock',
    },
  ];

  const textElements = data.map(element => (
    <TripleText key={element.title} {...element} />
  ));
  const featurewidgetUrls = [
    'src/assets/featurewidget1.svg',
    'src/assets/featurewidget2.svg',
    'src/assets/featurewidget3.svg',
  ];
  const imageElements = featurewidgetUrls.map(image => (
    <img key={image} src={image} alt="widjet" />
  ));

  const splitData = [
    {
      section1: [textElements[0]],
      section2: [imageElements[0]],
    },
    {
      section1: [textElements[1]],
      section2: [imageElements[1]],
      style: 'reverse',
    },
    {
      section1: [textElements[2]],
      section2: [imageElements[2]],
    },
  ];

  return <Wrapper>
		<div className={styles.features} id='features'>
      {splitData.map(data => <Split key={Math.random()} {...data}/>)}
    </div>
	</Wrapper>;
};

export default Features;
