import React from 'react';
import { Button } from 'antd';
import './style.scss';

const Tabs: React.FC<{
  activeTab: 'Designs' | 'Case studies';
  onTabChange: (tab: 'Designs' | 'Case studies') => void;
}> = ({ activeTab, onTabChange }) => {
  return (
    <div className="section-tabs">
      <Button
        className={`section-button tab1 ${activeTab === 'Designs' ? 'active' : ''}`}
        onClick={() => onTabChange('Designs')}
      >
        Designs
      </Button>
      <Button
        className={`section-button tab2 ${activeTab === 'Case studies' ? 'active' : ''}`}
        onClick={() => onTabChange('Case studies')}
      >
        Case studies
      </Button>
    </div>
  );
};

export default Tabs;
