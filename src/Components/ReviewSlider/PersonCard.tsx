import React from 'react';
import './style.scss';

interface Review {
  rate: number;
  starUrl: string;
  text: string;
  imageUrl: string;
  personName: string;
  personTitle: string;
}
const PersonCard: React.FC<{ review: Review; className?: string }> = ({
  review,
  className = '',
}) => {
  if (!review) return null;
  return (
    <div className={`clients-card ${className}`}>
      <div className="clients-rate-block">
        <div className="rate-number">{review.rate.toFixed(1)}</div>
        <div className="rate-stars">
          {Array.from({ length: Math.min(review.rate, 5) }).map((_, i) => (
            <img key={i} src={review.starUrl} alt="star" className="star" />
          ))}
        </div>
      </div>
      <div className="review-underline"></div>
      <p className="review-text">{review.text}</p>
      <div className="profile">
        <div className="profile-img">
          <img src={review.imageUrl} alt={`${review.personName}'s profile`} />
        </div>
        <div className="profile-info">
          <span className="review-name">{review.personName}</span>
          <span className="review-title">{review.personTitle}</span>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
