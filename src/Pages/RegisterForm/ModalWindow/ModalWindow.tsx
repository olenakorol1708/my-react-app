import React from 'react';
import {useNavigate} from 'react-router-dom';
import { Button, Modal } from 'antd';
import smile from '@/images/Homepage/smile.png';
import './style.scss';
interface ModalWindowProps{
    isModalVisible:boolean,
    handleModalClose:()=> void;
}
    

const ModalWindow: React.FC<ModalWindowProps> = ({ isModalVisible,  handleModalClose }) => {
    const navigate = useNavigate();
  
    const handleOk = () => {
        handleModalClose(); 
      navigate('/');
    };
  
    return (
      <Modal
        title={null}
        visible={isModalVisible}
        footer={null}
        centered
        onCancel={handleOk}
        getContainer={() => document.body}
      >
        <div style={{ textAlign: 'center' }}>
          <img
            src={smile}
            alt="smile"
            style={{ width: '50px', marginBottom: '10px' }}
          />
          <h3>Thank you!</h3>
          <p>We have received your message and will be in contact shortly!</p>
          <Button
            type="primary"
            style={{ width: '100%', backgroundColor: '#c3f00f', marginTop: '2rem', color: '#121c22' }}
            onClick={handleOk}
          >
            Done
          </Button>
        </div>
      </Modal>
    );
  };
  
  export default ModalWindow;

