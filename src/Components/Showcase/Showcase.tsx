import { paths } from '@/Paths';
import message from '@/images/Homepage/message.webp';
import leftImage from '@/images/Homepage/homepageLeft.svg';
import rightImage from '@/images/Homepage/homepageRight.svg';
import titleImage from '@/images/Homepage/titleImg.svg';
import arrow from '@/images/Homepage/arrow.png';

import './showcase.scss';

import { useNavigate } from 'react-router-dom';

const Showcase: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(paths.REGISTER);
  };
  return (
    <section id="showcase">
      <div className="container">
        <div className="showcase_wrapper">
          <div className="showcase-img image1">
            <img src={leftImage} alt="image" />
          </div>
          <div className="showcase_content">
            <h2 className="showcase_title">
              Your all-in-one creative and <br />
              <span className="green_title">
                design thinking
                <img className="titleImg" src={titleImage} alt="Title Image" />
                <br /> agency
              </span>
            </h2>
          </div>

          <div className="showcase-img image2">
            <img src={rightImage} alt="image" />
          </div>
        </div>
        <div className="arrow_animation">
          <div className="main-arrow_animation">
            <svg width="250" height="250">
              <path id="curve" d="M 25 125 A 100 100 0 1 125 137 "></path>

              <image x="100" y="98" href={arrow} />
              <text className="text">
                <textPath href="#curve">
                  learn more * learn more * learn more * learn more * learn more
                  * learn more *
                </textPath>
              </text>
            </svg>
          </div>
          <div className="main-brief_desc">
            <p className="main-brief_text">
              {' '}
              As a creative design agency specializing in UI/UX, we are
              dedicated to remaining digital products for brands looking to
              refresh their identity.
            </p>
          </div>
        </div>
        <div className="message">
          <img
            className="message-icon"
            src={message}
            alt="Message-icon"
            onClick={handleNavigate}
          />
        </div>
      </div>
    </section>
  );
};

export default Showcase;
