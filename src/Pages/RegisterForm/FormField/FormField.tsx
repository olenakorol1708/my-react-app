import React from 'react';
import { Form, Input } from 'antd';

type FormFieldProps = {
  label: string;
  name: 'firstName' | 'businessEmail' | 'companyName';
  value: any;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    field: 'firstName' | 'businessEmail' | 'companyName'
  ) => void;
  placeholder: string;
  rules: any[];
  isMobile: boolean;
};

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  value,
  handleChange,
  placeholder,
  rules,
  isMobile,
}) => (
  <Form.Item
    label={label}
    name={name}
    rules={rules}
    {...(!isMobile && {
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
    })}
    labelAlign={!isMobile ? 'left' : undefined}
  >
    <Input
      value={value}
      onChange={e => handleChange(e, name)}
      placeholder={placeholder}
      className="form-input"
    />
  </Form.Item>
);

export default FormField;
