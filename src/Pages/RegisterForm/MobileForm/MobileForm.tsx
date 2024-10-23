import React from 'react';
import { Button, Form} from 'antd';
import FormField from '../FormField/FormField';
import '../registerForm.scss'
import './style.scss';

const MobileForm: React.FC<{ formData: any, handleInputChange: any, onFinish: any }> = ({ formData, handleInputChange, onFinish }) => {
  const formFields = [
    {
      label: 'First Name',
      name: 'firstName',
      placeholder: 'Olivia Smith',
      rules: [
        { required: true, message: 'Please input your name!' },
        { min: 3, message: 'Name must be at least 3 characters long' },
      ],
    },
    {
      label: 'Business Email',
      name: 'businessEmail',
      placeholder: 'business@gmail.com',
      rules: [
        { required: true, message: 'Please input your email!' },
        { type: 'email', message: 'The input is not valid E-mail!' },
      ],
    },
    {
      label: 'Company Name',
      name: 'companyName',
      placeholder: 'Business Name',
      rules: [
        { required: true, message: 'Please input your company name!' },
        { min: 3, message: 'Company name must be at least 3 characters long' },
      ],
    },
  ];
  return (
    <>

      <Form className="form-container" name="form_item_path" layout="vertical" onFinish={onFinish}>
        {formFields.map((field) => (
          <FormField
            key={field.name}
            label={field.label}
            name={field.name}
            value={formData[field.name]}
            handleChange={handleInputChange}
            placeholder={field.placeholder}
            rules={field.rules}
            isMobile={true}
          />
        ))}
        <Button type="primary" block htmlType="submit">
          Submit
        </Button>
      </Form>



    </>
  );
};

export default MobileForm;            