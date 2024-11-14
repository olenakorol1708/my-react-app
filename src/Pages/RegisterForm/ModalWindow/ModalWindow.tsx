import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Modal } from 'antd';
import paths from '../../../Paths/paths';

import smile from '@/images/Homepage/smile.png';
import sad from '@/images/Homepage/sad.webp';
import './style.scss';

interface FormField {
  label: string;
  name: string;
  placeholder: string;
  rules: { required?: boolean; min?: number; message: string }[];
}

interface ModalWindowProps {
  isModalVisible: boolean;
  handleModalClose: () => void;
  formFields?: FormField[];
  isSuccessful: boolean | null;
}
const ModalWindow: React.FC<ModalWindowProps> = ({
  isModalVisible,
  handleModalClose,
  isSuccessful = null,
}) => {
  const navigate = useNavigate();

  const handleOk = () => {
    handleModalClose();
    navigate(paths.HOME);
  };

  return (
    <Modal
      title={null}
      open={isModalVisible}
      footer={null}
      centered
      onCancel={handleOk}
      getContainer={() => document.body}
    >
      <div className="modal-content">
        <img
          src={isSuccessful ? smile : sad}
          alt="smile"
          className="modal-smile"
        />
        <h3>{isSuccessful ? 'Thank you!' : 'Submission failed'}</h3>
        <p>
          {isSuccessful
            ? 'We have received your message and will be in contact shortly!'
            : 'Try again later'}
        </p>
        <Button type="primary" className="modal-button" onClick={handleOk}>
          {isSuccessful ? 'Done' : 'Try again later'}
        </Button>
      </div>
    </Modal>
  );
};

export default ModalWindow;
