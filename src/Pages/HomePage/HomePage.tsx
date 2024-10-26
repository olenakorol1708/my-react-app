
import { NetComponent, Showcase, InfiniteSlider } from '../../Components/index';


const HomePage = () => {
  return (
    <div style = {{overflow:'hidden'}}>
      <NetComponent />
      <Showcase />
      <InfiniteSlider />
    </div>
  );
};

export default HomePage;
