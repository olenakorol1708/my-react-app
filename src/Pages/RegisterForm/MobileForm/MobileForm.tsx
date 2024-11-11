import React from 'react';
import { Form } from 'antd';
import FormField from '../FormField/FormField';
import SubmitButton from '../SubmitButton/SubmitButton';
import '../registerForm.scss';
import './style.scss';

const MobileForm: React.FC<{
  formFields: any[];
  formData: any;
  handleInputChange: any;
  onFinish: any;
  loading: boolean;
}> = ({ formFields, formData, handleInputChange, onFinish, loading }) => {
  return (
    <>
      <Form
        className="form-container"
        name="form_item_path"
        layout="vertical"
        onFinish={onFinish}
      >
        {formFields.map(field => (
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

        <SubmitButton loading={loading} />
      </Form>
    </>
  );
};

export default MobileForm;
