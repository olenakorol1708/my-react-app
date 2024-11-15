import blackStar from '@/images/Homepage/blackStar.svg';
import { Button } from 'antd';
import IndustryExperienceItem from './IndustryExperienceItem';
import './style.scss';

interface ExperienceItem {
  id: number;
  title: string;
}
const Industry = () => {
  const experienceList: ExperienceItem[] = [
    { id: 1, title: 'Marketing' },
    { id: 2, title: 'Retail' },
    { id: 3, title: 'SaaS' },
    { id: 4, title: 'FinTech' },
    { id: 5, title: 'Sports' },
  ];
  return (
    <div className="industry">
      <div className="industry-experience">
        <h3 className="industry-title">
          <span>
            <img src={blackStar} className="blackStar" alt="star" />
            We have extensive
            <img src={blackStar} className="blackStar2" alt="star" />
          </span>
          <br />
          <span>industry experience</span>
        </h3>
        <Button type="primary" className="industry-button">
          View case studies
        </Button>
      </div>
      <ul className="industry-list">
        {experienceList.map(item => (
          <IndustryExperienceItem key={item.id} title={item.title} />
        ))}
      </ul>
    </div>
  );
};

export default Industry;
