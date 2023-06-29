import React from 'react';
import styles from './TripleItems.module.scss';
import TechItem from '../TechItem/TechItem';
import CardContent from '../CardContent/CardContent';

const TripleItems = ({data, type }) => {

  return (
    <div className={styles.tripleItems}>
			{type === 'TechItem' && data.map(item => <TechItem key={item.title} {...item}/>)}
      {type === 'CardContent' && data.map(item => <CardContent key={item.title} {...item}/>)}
    </div>
  );
};

export default TripleItems;
