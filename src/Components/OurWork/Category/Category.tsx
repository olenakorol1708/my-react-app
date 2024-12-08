import React from 'react';
import { Button } from 'antd';
import './style.scss';

const Category: React.FC<{
  activeDivisionButton: string;
  setActiveDivisionButton: (category: string) => void;
}> = ({ activeDivisionButton, setActiveDivisionButton }) => {
  const categories = [
    'All',
    'UI/UX design',
    'Branding',
    'Graphic design',
    '3D modelling',
    'Video production',
  ];

  return (
    <div className="buttons-block">
      {categories.map(category => (
        <Button
          key={category}
          type="text"
          className={`category-title-button ${activeDivisionButton === category ? 'active' : ''}`}
          onClick={() => setActiveDivisionButton(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default Category;
