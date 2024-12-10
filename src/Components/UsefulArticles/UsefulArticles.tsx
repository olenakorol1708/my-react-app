import React from 'react';
import './style.scss';

const UsefulArticles: React.FC = () => {
  return (
    <section className="article-block">
      <div className="article-subscription">
        <h4 className="article-title">
            Useful
          <span className="article-green">articles</span>
          <img className='article-star' alt= 'star'/>
        </h4>
      </div>
    </section>
  );
};

export default UsefulArticles;
