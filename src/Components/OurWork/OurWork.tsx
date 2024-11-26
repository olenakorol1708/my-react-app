import React, { useState } from 'react';
import workData from './data';
import { Tabs } from './Tabs';
import { Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { Category } from './Category';
import { ShowMore } from './ShowMore';
import './style.scss';

const OurWork: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Designs' | 'Case studies'>(
    'Designs'
  );
  const [activeDivisionButton, setActiveDivisionButton] =
    useState<string>('All');
  const [visibleItemsCount, setVisibleItemsCount] = useState<{
    [key: string]: number;
  }>({
    'Designs-All': 4,
    'Designs-UI/UX design': 4,
    'Designs-Branding': 4,
    'Designs-Graphic design': 4,
    'Designs-3D modelling': 4,
    'Designs-Video production': 4,
    'Case studies-All': 4,
  });

  const currentKey = `${activeTab}-${activeDivisionButton}`;
  const handleSetVisibleItemsCount = (count: number) => {
    setVisibleItemsCount(prevCounts => ({
      ...prevCounts,
      [currentKey]: count,
    }));
  };

  const handleTabChange = (newTab: 'Designs' | 'Case studies') => {
    setActiveTab(newTab);
    setActiveDivisionButton('All');
  };
  const filteredData = workData.filter(item => {
    const matchesTabs =
      activeTab === 'Designs'
        ? item.category === 'Designs'
        : item.category === 'Case studies';

    const matchesCategories =
      activeDivisionButton.toLowerCase() === 'all' ||
      (item.division &&
        item.division.toLowerCase() === activeDivisionButton.toLowerCase());

    return matchesTabs && matchesCategories;
  });

  const visibleData = filteredData.slice(0, visibleItemsCount[currentKey] || 4);
  const isShowingAll = visibleItemsCount[currentKey] >= filteredData.length;

  return (
    <section className="our-work">
      <h2 className="work-title">Our work</h2>
      <Tabs activeTab={activeTab} onTabChange={handleTabChange} />

      {activeTab === 'Designs' && (
        <Category
          activeDivisionButton={activeDivisionButton}
          setActiveDivisionButton={setActiveDivisionButton}
        />
      )}

      <div className="work-grid">
        {visibleData.map(item => (
          <div key={item.id} className="work-item">
            {item.type === 'image' ? (
              <>
                <img src={item.imageUrl} alt={item.division || 'Work'} />
                {activeTab === 'Case studies' && (
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

      {filteredData.length >= 4 && (
        <ShowMore
          visibleItemsCount={visibleItemsCount[currentKey] || 4}
          setVisibleItemsCount={handleSetVisibleItemsCount}
          isShowingAll={isShowingAll}
          textButton={
            activeTab === 'Case studies'
              ? isShowingAll
                ? 'Show less'
                : 'View case studies'
              : isShowingAll
                ? 'Show less'
                : 'Show more'
          }
        />
      )}
    </section>
  );
};

export default OurWork;
