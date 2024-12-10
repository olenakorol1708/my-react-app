import {
  Accordion,
  Industry,
  InfiniteSlider,
  OurWork,
  Showcase,
  TasksCovered,
  HowItWorks,
  ReviewSlider,
} from '@/Components';

import './HomePage.scss';
import net from '@/images/Homepage/net.svg';

const HomePage = () => {
  return (
    <div className="homepage hidden-overflow">
      <div className="background-image">
        {' '}
        <img src={net} />{' '}
      </div>
      <Showcase />
      <InfiniteSlider />
      <Accordion />
      <Industry />
      <OurWork />
      <TasksCovered />
      <ReviewSlider />
      <HowItWorks />
    </div>
  );
};

export default HomePage;
