import React from 'react';
import { Button } from 'antd';
import './style.scss';

const Category: React.FC<{
  activeDivisionButton: string;
  setActiveDivisionButton: (category: string) => void;
}> = ({ activeDivisionButton, setActiveDivisionButton }) => {
  return (
    <div className="buttons-block">
      <Button
        type="text"
        className={`category-title-button ${activeDivisionButton === 'All' ? 'active' : ''}`}
        onClick={() => setActiveDivisionButton('All')}
      >
        All
      </Button>
      <Button
        type="text"
        className={`category-title-button ${activeDivisionButton === 'UI/UX design' ? 'active' : ''}`}
        onClick={() => setActiveDivisionButton('UI/UX design')}
      >
        UI/UX design
      </Button>
      <Button
        type="text"
        className={`category-title-button ${activeDivisionButton === 'Branding' ? 'active' : ''}`}
        onClick={() => setActiveDivisionButton('Branding')}
      >
        Branding
      </Button>
      <Button
        type="text"
        className={`category-title-button ${activeDivisionButton === 'Graphic design' ? 'active' : ''}`}
        onClick={() => setActiveDivisionButton('Graphic design')}
      >
        Graphic design
      </Button>
      <Button
        type="text"
        className={`category-title-button ${activeDivisionButton === '3D modelling' ? 'active' : ''}`}
        onClick={() => setActiveDivisionButton('3D modelling')}
      >
        3D modelling
      </Button>

      <Button
        type="text"
        className={`category-title-button ${activeDivisionButton === 'Video production' ? 'active' : ''}`}
        onClick={() => setActiveDivisionButton('Video production')}
      >
        Video production
      </Button>
    </div>
  );
};

export default Category;
