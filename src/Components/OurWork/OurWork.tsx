import React, { useState } from 'react';
import workData, { WorkData } from './data';
import { Tabs } from './Tabs';
import WorkGrid from './WorkGrid';
import { Category } from './Category';
import { ShowMore } from './ShowMore';
import './style.scss';

const OurWork: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Designs' | 'Case studies'>(
    'Designs'
  );

  const [activeDivisionButton, setActiveDivisionButton] =
    useState<string>('All');

  const [visibleItemsCount, setVisibleItemsCount] = useState<
    Record<string, number>
  >({
    'Designs-All': 4,
    'Designs-UI/UX design': 4,
    'Designs-Branding': 4,
    'Designs-Graphic design': 4,
    'Designs-3D modelling': 4,
    'Designs-Video production': 4,
    'Case studies-All': 4,
  });

  const currentKey: string = `${activeTab}-${activeDivisionButton}`;
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
  const filteredData: WorkData[] = workData.filter(item => {
    const matchesTabs = item.category === activeTab;
    const matchesCategories =
      activeDivisionButton.toLowerCase() === 'all' ||
      item.division?.toLowerCase() === activeDivisionButton.toLowerCase();

    return matchesTabs && matchesCategories;
  });

  const visibleData: WorkData[] = filteredData.slice(
    0,
    visibleItemsCount[currentKey] || 4
  );
  const isShowingAll: boolean =
    visibleItemsCount[currentKey] >= filteredData.length;

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
      <div>
        <WorkGrid visibleData={visibleData} activeTab={activeTab} />
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
