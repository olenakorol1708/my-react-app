import React from 'react';
import SingleBlock from './SingleBlock/SingleBlock';
import data from './SingleBlock/data';
import star from '@/images/Homepage/star.svg';
import './style.scss';

interface DataItem {
  id: number;
  number: string;
  title: string;
  text: string;
}

const Accordion: React.FC = () => {
  const accordionItem: DataItem[] = data;

  return (
    <div className="container">
      <header>
        <h2 className="title">
          <img src={star} className="star-img1" />
          <br />
          <span className="color-text1">We create world-class</span>
          <img src={star} className="star-img2"></img> <br />{' '}
          <span className="color-text2">
            {' '}
            digital products, web design,
            <br /> and branding.
          </span>
        </h2>
      </header>

      {accordionItem.map(item => (
        <SingleBlock
          key={item.id}
          id={item.id}
          number={item.number}
          title={item.title}
          text={item.text}
        />
      ))}
    </div>
  );
};

export default Accordion;
