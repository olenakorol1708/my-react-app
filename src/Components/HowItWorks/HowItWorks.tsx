import React from 'react';
import GetStarted from '../GetStartedButton/GetStarted';
import image from '@/images/Homepage/unique-star.svg';
import steps from './steps';
import './style.scss';

const HowItWorks: React.FC = () => {
  return (
    <section className="works-block">
      <div className="container">
        <h2 className="works-title">
          How it&nbsp;
          <span className="Works-green"> works</span>
          <img src={image} className="unique-star" alt="unique-star" />
        </h2>
        <div className="works-steps">
          {steps.map(item => (
            <div className="works-info" key={item.id}>
              <span className="works-number">{item.blockNumber}</span>
              <h3 className="works-subtitle">{item.blockTitle}</h3>
              <p className="works-description">{item.blockDescription}</p>
            </div>
          ))}
        </div>
      </div>
      <GetStarted />
    </section>
  );
};

export default HowItWorks;
