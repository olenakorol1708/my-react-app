import React,{useEffect, useState} from 'react';
import DesktopForm from './DesktopForm/DesktopForm';
import MobileForm from './MobileForm/MobileForm';
import ModalWindow from './ModalWindow/ModalWindow';
import './registerForm.scss'
import './MobileForm/style.scss'

const RegisterForm:React.FC = () => {
  const [isMobile,setIsMobile] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    businessEmail: '',
    companyName: '',
  });
  const [isModalVisible, setIsModalVisible] = useState(false);

  const formFields = [
    { label: 'First Name', name: 'firstName', placeholder: 'Olivia Smith', rules: [{ required: true, message: 'Please input your name!' }, { min: 3, message: 'Name must be at least 3 characters long' }] },
    { label: 'Business Email', name: 'businessEmail', placeholder: 'business@gmail.com', rules: [{ required: true, message: 'Please input your email!' }, { type: 'email', message: 'The input is not valid E-mail!' }] },
    { label: 'Company Name', name: 'companyName', placeholder: 'Business Name', rules: [{ required: true, message: 'Please input your company name!' }, { min: 3, message: 'Company name must be at least 3 characters long' }] }
  ];

  useEffect (()=>{
    const handleResize = ()=>{
      setIsMobile(window.innerWidth<=768)
    }

    window.addEventListener('resize',handleResize);
    handleResize();

    return()=>window.removeEventListener('resize',handleResize)

  },[]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    const { value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values: any) => {
    console.log(values);
    setIsModalVisible(true);
  };

  return (
    <div className='register_page'>
    <div className={`form ${isModalVisible ? 'blur-background' : ''}`}>
        <div className="contact_us">
          <span className="contact_us_text">Contact</span>
          <span className="contact_us_text">us</span>
        </div>
      {isMobile ? (<MobileForm formData = {formData} handleInputChange = {handleInputChange} onFinish = {onFinish}  formFields = {formFields}/>) :
      (<DesktopForm formData = {formData} handleInputChange = {handleInputChange} onFinish = {onFinish} formFields = {formFields}/>)}
      <ModalWindow isModalVisible={isModalVisible} handleModalClose={handleModalClose} formFields = {formFields} />
    </div>
    </div>
  )
}

export default RegisterForm
