import React from 'react';
import blackStar from '@/images/Homepage/blackStar.svg';
import { Button } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import './style.scss';

const Industry = () => {
  const experienceList = [
    { id: 1, title: 'Marketing' },
    { id: 2, title: 'Retail' },
    { id: 3, title: 'SaaS' },
    { id: 4, title: 'FinTech' },
    { id: 5, title: 'Sports' },
  ];
  return (
    <div className="industry">
      <div className="industry-experience">
        <h3 className="industry-title">
          <img src={blackStar} className="blackStar" alt="star" />
          We have extensive
          <img src={blackStar} className="blackStar2" alt="star" />
          <br /> industry experience
        </h3>
        <Button type="primary" className="industry-button">
          View case studies
        </Button>
      </div>
      <div className="industry-list">
        {experienceList.map(item => (
          <li key={item.id} className="industry-name">
            <CheckOutlined className="industry-icon" /> {item.title}
          </li>
        ))}
      </div>
    </div>
  );
};

export default Industry;
