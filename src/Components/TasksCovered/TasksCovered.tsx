import React from 'react';
import imageArr from './imageList';
import iconList from './iconList';

import './style.scss';

const TasksCovered: React.FC = () => {
  return (
    <div className="container">
      <section className="section-task">
        <h2 className="title-task">
          We've got all
          <br /> your
          <span className="title-task-word"> covered</span>
          <span className="smile-group">
            {imageArr.map(item => (
              <img
                key={item.id}
                src={item.imageUrl}
                alt={item.imageTitle}
                className="smile"
              />
            ))}
          </span>
        </h2>
        <ul className="icon-grid">
          {iconList.map(item => (
            <li key={item.id} className="icon-list">
              <img
                className="icon-img"
                src={item.imageUrl}
                alt={item.iconTitle}
              />
              <span className="icon-title">{item.iconTitle}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default TasksCovered;
