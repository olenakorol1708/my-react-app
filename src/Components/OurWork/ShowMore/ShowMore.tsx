import React from 'react';
import { Button } from 'antd';
import dribbleLogo from '@/images/Homepage/work/dribbleLogo.svg';
import './style.scss';

const ShowMore: React.FC<{
  visibleItemsCount: number;
  setVisibleItemsCount: (count: number) => void;
  textButton?: string;
  isShowingAll: boolean;
}> = ({
  visibleItemsCount,
  setVisibleItemsCount,
  isShowingAll,
  textButton,
}) => {
  const handleShowMore = () => {
    setVisibleItemsCount(visibleItemsCount + 4);
  };

  const handleShowLess = () => {
    setVisibleItemsCount(4);
  };

  return (
    <div className="showMore-block">
      <div className="show-more">
        <Button
          type="text"
          className="show-button"
          onClick={isShowingAll ? handleShowLess : handleShowMore}
        >
          {textButton}
        </Button>
        <a href="https://dribbble.com/xrii_media" target="_blank">
          <img src={dribbleLogo} alt="dribble_logo" />
        </a>
      </div>
    </div>
  );
};

export default ShowMore;
