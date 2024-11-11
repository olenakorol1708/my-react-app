import React, { useState } from 'react';
import { Form } from 'antd';
import SubmitButton from '../SubmitButton/SubmitButton';
import FormField from '../FormField/FormField';
import '../MobileForm/style.scss';

type LayoutType = Parameters<typeof Form>[0]['layout'];

const DesktopForm: React.FC<{
  formFields: any[];
  formData: any;
  handleInputChange: any;
  onFinish: any;
  loading: boolean;
}> = ({ formFields, formData, handleInputChange, onFinish, loading }) => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>('horizontal');

  const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
    setFormLayout(layout);
  };

  return (
    <div className="form-desktop">
      <Form
        onFinish={onFinish}
        className="form-container-desktop"
        layout={formLayout}
        form={form}
        initialValues={{ layout: formLayout }}
        onValuesChange={onFormLayoutChange}
        style={{ maxWidth: formLayout === 'inline' ? 'none' : 600 }}
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
            isMobile={false}
          />
        ))}
        <Form.Item>
          <SubmitButton loading={loading} />
        </Form.Item>
      </Form>
    </div>
  );
};

export default DesktopForm;
