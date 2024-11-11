import React from 'react';
import { Form, Input } from 'antd';

const FormField: React.FC<{
  label: string;
  name: string;
  value: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, field: string) => void;
  placeholder: string;
  rules: any[];
  isMobile: boolean;
}> = ({ label, name, value, handleChange, placeholder, rules, isMobile }) => (
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
      style={{ width: '100%', backgroundColor: '#243843', color: 'white' }}
    />
  </Form.Item>
);

export default FormField;
