import React from 'react';
import Wrapper from '../UI/Wrapper/Wrapper';
import TripleText from '../UI/TripleText/TripleText';
import Split from '../UI/Split/Split';
import styles from './Features.module.scss'
import img1 from '../../assets/featurewidget1.svg';
import img2 from '../../assets/featurewidget2.svg';
import img3 from '../../assets/featurewidget3.svg';
import cardImg1 from '../../assets/featureCard1.svg';
import cardImg2 from '../../assets/featureCard2.svg';
import cardImg3 from '../../assets/featureCard3.svg';

const Features = () => {
  const data = [
    {
      type: 'h2',
      paragraph: 'primary',
      element: <img src={cardImg1} alt="Card Icon" />,
      title: 'Kickstart an organization with your co-founders',
      text: 'It’s the early days, you just had a long conversation with two friends about a meaningful challenge that you’re all passionate about and have a potential solution for. You’re ready to embark the startup journey.',
			cardBlock: 'cardBlock',
    },
    {
      type: 'h2',
      paragraph: 'primary',
      element: <img src={cardImg2} alt="Card Icon" />,
      title: 'Onboard users, investors and advisors as you grow',
      text: 'You’ve bootstrapped and delivered an MVP, and some investors and advisors are interested in having a chat with you. As an Open Enterprise, you can onboard them seamlessly into your digital organization and align them with your success.',
			cardBlock: 'cardBlock',
    },
    {
      type: 'h2',
      paragraph: 'primary',
      element: <img src={cardImg3} alt="Card Icon" />,
      title: 'Engage highly committed contributors',
      text: 'You need talented people on-demand across various tasks that your full-time workforce can’t prioritize at the moment. As an Open Enterprise, you can easily fund tasks and have people apply to work on them in return for funds or shares.',
			cardBlock: 'cardBlock',
    },
  ];

  const textElements = data.map(element => (
    <TripleText key={element.title} {...element} />
  ));
  const featurewidgetUrls = [
    img1,
    img2,
    img3,
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
