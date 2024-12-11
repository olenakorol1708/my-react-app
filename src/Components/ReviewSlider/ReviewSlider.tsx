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
  const nextReview = reviews[(index + 1) % reviews.length];

  const handleNextClick = () => {
    setIndex(prevIndex => (prevIndex + 1) % reviews.length);
  };

  const handlePrevClick = () => {
    setIndex(prevIndex => (prevIndex - 1 + reviews.length) % reviews.length);
  };
  const goToSlide = (slideIndex: number) => {
    setIndex(slideIndex);
  };
  return (
    <section className="review">
      <div className="review-slider">
        <div className="review-title-block">
          <img src={quotes} alt="quotes" />
          <h3 className="clients-say">
            What our <span className="clients-green">clients say</span>
          </h3>
          <div className="review-button">
            <Button onClick={handlePrevClick}>
              <LeftOutlined />
            </Button>
            <Button onClick={handleNextClick}>
              <RightOutlined />
            </Button>
          </div>
        </div>
        <div className="clients-cards-container">
          <div className="clients-card current ">
            <div className="clients-rate-block">
              <div className="rate-number">{review.rate.toFixed(1)}</div>
              <div className="rate-stars">
                {Array.from({ length: Math.min(review.rate, 5) }).map(
                  (_, i) => (
                    <img
                      key={i}
                      src={review.starUrl}
                      alt="star"
                      className="star"
                    />
                  )
                )}
              </div>
            </div>
            <div className="review-underline"></div>
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
          <div className="clients-card next">
            <div className="clients-rate-block">
              <div className="rate-number">{nextReview.rate.toFixed(1)}</div>
              <div className="rate-stars">
                {Array.from({ length: Math.min(nextReview.rate, 5) }).map(
                  (_, i) => (
                    <img
                      key={i}
                      src={nextReview.starUrl}
                      alt="star"
                      className="star"
                    />
                  )
                )}
              </div>
            </div>
            <div className="review-underline"></div>
            <p className="review-text">{nextReview.text}</p>
            <div className="profile">
              <div className="profile-img">
                <img
                  src={nextReview.imageUrl}
                  alt={`${nextReview.personName}'s profile`}
                />
              </div>
              <div className="profile-info">
                <span className="review-name">{nextReview.personName}</span>
                <span className="review-title">{nextReview.personTitle}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pagination">
          {reviews.map((_, i) => (
            <span
              key={i}
              className={`pagination-dot ${i === index ? 'active' : ''}`}
              onClick={() => goToSlide(i)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ReviewSlider;
