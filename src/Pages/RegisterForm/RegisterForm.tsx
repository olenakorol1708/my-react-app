import React, { useEffect, useState } from 'react';
import { Form } from 'antd';
import FormField from '../RegisterForm/FormField/FormField';
import SubmitButton from '../RegisterForm/SubmitButton/SubmitButton';
import ModalWindow from './ModalWindow/ModalWindow';
import './registerForm.scss';

const RegisterForm: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [formData, setFormData] = useState({
    firstName: '',
    businessEmail: '',
    companyName: '',
  });
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState<boolean | null>(null);

  type FormFieldKey = keyof typeof formData;

  const formFields: {
    label: string;
    name: FormFieldKey;
    placeholder: string;
    rules: { required: boolean; message: string }[];
  }[] = [
    {
      label: 'First Name',
      name: 'firstName',
      placeholder: 'Olivia Smith',
      rules: [{ required: true, message: 'Please input your name!' }],
    },
    {
      label: 'Business Email',
      name: 'businessEmail',
      placeholder: 'business@gmail.com',
      rules: [{ required: true, message: 'Please input your email!' }],
    },
    {
      label: 'Company Name',
      name: 'companyName',
      placeholder: 'Business Name',
      rules: [{ required: true, message: 'Please input your company name!' }],
    },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: FormFieldKey
  ) => {
    setFormData(prevData => ({ ...prevData, [field]: e.target.value }));
  };

  const onFinish = async (values: any) => {
    setLoading(true);
    console.log(values);

    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSuccessful(Math.random() > 0.5);
    setLoading(false);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    setIsSuccessful(null);
  };
  return (
    <div className={`register-page ${isModalVisible ? 'blur-background' : ''}`}>
      <div className="register-page__contact-us">
        <span className="register-page__contact-us-text">Contact</span>
        <span className="register-page__contact-us-text">us</span>
      </div>
      <Form
        className={`form-container ${isMobile ? 'form-mobile' : 'form-desktop'}`}
        name="register_form"
        layout={isMobile ? 'vertical' : 'horizontal'}
        onFinish={onFinish}
      >
        {formFields.map(field => (
          <FormField
            key={field.name}
            label={field.label}
            name={field.name}
            placeholder={field.placeholder}
            rules={field.rules}
            value={formData[field.name]}
            handleChange={handleInputChange}
            isMobile={isMobile}
          />
        ))}
        <SubmitButton loading={loading} />
      </Form>
      <ModalWindow
        isModalVisible={isModalVisible}
        isSuccessful={isSuccessful}
        handleModalClose={handleModalClose}
        formFields={formFields}
      />
    </div>
  );
};

export default RegisterForm;
