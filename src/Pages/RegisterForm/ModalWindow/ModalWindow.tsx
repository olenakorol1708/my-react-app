import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Modal } from 'antd';
import smile from '@/images/Homepage/smile.png';
import './style.scss'; // Move styles to SCSS

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
}

const ModalWindow: React.FC<ModalWindowProps> = ({ isModalVisible, handleModalClose }) => {
  const navigate = useNavigate();

  const handleOk = () => {
    handleModalClose();
  };

  // Navigate to another route after the modal closes
  const handleAfterClose = () => {
    navigate('/');
  };

  return (
    <Modal
      title={null}
      visible={isModalVisible}
      footer={null}
      centered
      onCancel={handleOk}
      afterClose={handleAfterClose} 
      getContainer={() => document.body}
    >
      <div className="modal-content">
        <img src={smile} alt="smile" className="modal-smile" />
        <h3>Thank you!</h3>
        <p>We have received your message and will be in contact shortly!</p>
        <Button
          type="primary"
          className="modal-button"
          onClick={handleOk}
        >
          Done
        </Button>
      </div>
    </Modal>
  );
};

export default ModalWindow;
