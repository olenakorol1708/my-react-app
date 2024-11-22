import {
  Showcase,
  InfiniteSlider,
  Accordion,
  Industry,
} from '../../Components/index';
import { OurWork } from '../../Components/OurWork/index';
import { TasksCovered } from '../../Components/TasksCovered/index';
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
    </div>
  );
};

export default HomePage;
