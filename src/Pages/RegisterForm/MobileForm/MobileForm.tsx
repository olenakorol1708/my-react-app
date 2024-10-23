import React from 'react';
import { Button, Form} from 'antd';
import FormField from '../FormField/FormField';
import '../registerForm.scss'
import './style.scss';

const MobileForm: React.FC<{formFields:any[]; formData: any, handleInputChange: any, onFinish: any }> = ({ formFields, formData, handleInputChange, onFinish }) => {
 
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