import React from 'react';
import iconList from './iconList';
import smile1 from '@/images/Homepage/tasksCovered/smile1.svg';
import smile2 from '@/images/Homepage/tasksCovered/smileDown2.svg';
import smile3 from '@/images/Homepage/tasksCovered/smile 3.svg';
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
            <img src={smile1} className="smile" alt="smile" />
            <img src={smile2} className="smile" alt="smile" />
            <img src={smile3} className="smile" alt="smile" />
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
