import React from 'react';
import { WorkData } from './data';
import { RightOutlined } from '@ant-design/icons';

import { Button } from 'antd';
import './style.scss';

const WorkGrid: React.FC<{ visibleData: WorkData[]; activeTab: string }> = ({
  visibleData,
  activeTab,
}) => {
  const isCaseStudies = activeTab === 'Case studies';
  return (
    <div className="work-grid">
      {visibleData.map(item => (
        <div key={item.id} className="work-item">
          {item.type === 'image' ? (
            <>
              <img src={item.imageUrl} alt={item.division || 'Work'} />
              {isCaseStudies && (
                <>
                  <h3 className="sub-title">{item.subTitle}</h3>
                  <h2 className="section-title">{item.sectionTitle}</h2>
                  <p className="section-text">{item.text}</p>
                  <Button type="text" className="view-case-button">
                    View case study{' '}
                    <RightOutlined className="icon-arrow-right" />
                  </Button>
                </>
              )}
            </>
          ) : (
            <>
              <video controls>
                <source src={item.videoUrl} type="video/mp4" />
                <p>Your browser does not support the video tag.</p>
              </video>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default WorkGrid;
