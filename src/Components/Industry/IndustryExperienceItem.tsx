import { CheckOutlined } from '@ant-design/icons';
import './style.scss';

interface IndustryExperienceItemProps {
  title: string;
}

const IndustryExperienceItem: React.FC<IndustryExperienceItemProps> = ({
  title,
}) => {
  return (
    <li className="industry-name">
      <CheckOutlined aria-hidden="true" className="industry-icon" /> {title}
    </li>
  );
};

export default IndustryExperienceItem;
