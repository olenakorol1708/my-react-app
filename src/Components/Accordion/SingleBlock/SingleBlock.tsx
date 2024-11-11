import React, { useState } from 'react';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import './style.scss';

interface SingleBlockProps {
  id: number;
  number: string;
  title: string;
  text: string;
}
const SingleBlock: React.FC<SingleBlockProps> = ({ number, title, text }) => {
  const [showInfo, setShowInfo] = useState<boolean>(false);
  const [hasShadow, setHasShadow] = useState<boolean>(false);
  const addShadow = () => {
    setShowInfo(prevState => !prevState);
    setHasShadow(prevState => !prevState);
  };

  return (
    <div className="container">
      <section className={`accordion-block ${hasShadow ? 'shadow' : ''}`}>
        <header className="accordion-header">
          <div className="accordion-number">{number}</div>
          <button
            className={`accordion-icon ${showInfo ? 'active' : ''}`}
            onClick={addShadow}
          >
            {showInfo ? <ArrowUpOutlined /> : <ArrowDownOutlined />}{' '}
          </button>
        </header>
        <div className="accordion-text">
          <h2 className="accordion-title">{title}</h2>
          {showInfo && (
            <>
              <p className="accordion-description">{text}</p>
              <Button type="primary" className="view-work">
                View our work
              </Button>
            </>
          )}
        </div>
        <div className="underline"></div>
      </section>
    </div>
  );
};

export default SingleBlock;
