import React, { useState } from 'react';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import reviews from './reviews';
import quotes from '@/images/Homepage/reviews/quotes.svg';
import './style.scss';

const ReviewSlider: React.FC = () => {
  const [index, setIndex] = useState<number>(0);

  if (reviews.length === 0) {
    return <p>No reviews available</p>;
  }

  const review = reviews[index];

  const nextPerson = () => {
    setIndex(prevIndex => (prevIndex + 1) % reviews.length);
  };

  const prevPerson = () => {
    setIndex(prevIndex => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="review">
      <div className="review-slider">
        <div className="review-title-block">
          <img src={quotes} alt="quotes" />
          <h3 className="clients-say">
            What our <span className="clients-green">clients say</span>
          </h3>
          <div>
            <Button onClick={prevPerson}>
              <LeftOutlined />
            </Button>
            <Button onClick={nextPerson}>
              <RightOutlined />
            </Button>
          </div>
        </div>
        <div className="clients-card">
          <div className="clients-rate">
            <div className="rate-number">{review.rate.toFixed(1)}</div>
            <div className="rate-stars">
              {Array.from({ length: Math.min(review.rate, 5) }).map((_, i) => (
                <img key={i} src={review.starUrl} alt="star" className="star" />
              ))}
            </div>
          </div>
          <div className="underline"></div>
          <p className="review-text">{review.text}</p>
          <div className="profile">
            <div className="profile-img">
              <img
                src={review.imageUrl}
                alt={`${review.personName}'s profile`}
              />
            </div>
            <div className="profile-info">
              <span className="review-name">{review.personName}</span>
              <span className="review-title">{review.personTitle}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ReviewSlider;
