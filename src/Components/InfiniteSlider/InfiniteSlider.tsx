import logo1 from '@/images/InfinitiveLogoCarousel/logo1.svg';
import logo2 from '@/images/InfinitiveLogoCarousel/logo2.svg';
import logo3 from '@/images/InfinitiveLogoCarousel/logo3.svg';
import logo4 from '@/images/InfinitiveLogoCarousel/logo4.svg';
import logo5 from '@/images/InfinitiveLogoCarousel/logo5.svg';
import logo6 from '@/images/InfinitiveLogoCarousel/logo6.svg';

import './style.scss';

const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

const InfiniteSlider: React.FC = () => {
  return (
    <div className="wrapper">
      {logos.map((logo, index) => (
        <div key={index} className={`item item${index + 1}`}>
          <img src={logo} alt={`logo${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default InfiniteSlider;
