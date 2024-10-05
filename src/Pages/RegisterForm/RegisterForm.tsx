import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import type { FormItemProps } from 'antd';
import ModalWindow from './ModalWindow/ModalWindow';
import './style.scss';

const MyFormItemContext = React.createContext<(string | number)[]>([]);

interface MyFormItemGroupProps {
  prefix: string | number | (string | number)[];
}

function toArr(
  str: string | number | (string | number)[]
): (string | number)[] {
  return Array.isArray(str) ? str : [str];
}

const MyFormItemGroup: React.FC<
  React.PropsWithChildren<MyFormItemGroupProps>
> = ({ prefix, children }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatPath = React.useMemo(
    () => [...prefixPath, ...toArr(prefix)],
    [prefixPath, prefix]
  );

  return (
    <MyFormItemContext.Provider value={concatPath}>
      {children}
    </MyFormItemContext.Provider>
  );
};

const MyFormItem = ({ name, ...props }: FormItemProps) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName =
    name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;

  return <Form.Item name={concatName} {...props} />;
};

const App: React.FC = () => {
  const [form] = Form.useForm();

  const [formData, setFormData] = useState({
    firstName: '',
    businessEmail: '',
    companyName: '',
  });
  const [errorName, setErrorName] = useState<string | null>(null);
  const [errorEmail, setErrorEmail] = useState<string | null>(null);
  const [errorCompany, setErrorCompany] = useState<string | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const validateForm = () => {
    let valid = true;

    if (!/^[\p{L}\d\s._-]+$/u.test(formData.firstName)) {
      setErrorName('Please enter only letters and the field cannot be empty');
      valid = false;
    } else {
      setErrorName(null);
    }

    if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
        formData.businessEmail
      )
    ) {
      setErrorEmail('Enter correct e-mail');
      valid = false;
    } else {
      setErrorEmail(null);
    }

    if (!/^[\p{L}\d\s,'&()-/:]+$/u.test(formData.companyName)) {
      setErrorCompany('Enter correct company name');
      valid = false;
    } else {
      setErrorCompany(null);
    }

    return valid;
  };

  const onFinish = () => {
    if (validateForm()) {
      console.log('Form submitted:', formData);

      form.resetFields();
      setIsModalVisible(true);
    } else {
      console.log('Form contains errors.');
    }
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    const { value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [field]: value,
    }));
  };
  const handleModalClose = () => {
    setIsModalVisible(false);
  };
  return (
    
    <div className={`form ${isModalVisible ? 'blur-background' : ''}`}>
      <div className="contact_us">
        <span className="contact_us_text">Contact</span>
        <span className="contact_us_text">us</span>
      </div>
      <Form
        form={form}
        name="form_item_path"
        layout="vertical"
        onFinish={onFinish}
      >
        <MyFormItemGroup prefix={['user']}>
          <MyFormItemGroup prefix={['name']}>
            <MyFormItem name="firstName" label="Name" required>
              <Input
                placeholder="Olivia Smith"
                value={formData.firstName}
                onChange={e => handleInputChange(e, 'firstName')}
              />
            </MyFormItem>
            {errorName && <span className="input-warning">{errorName}</span>}
            <MyFormItem name="businessEmail" label="Business email" required>
              <Input
                placeholder="example@business.com"
                value={formData.businessEmail}
                onChange={e => handleInputChange(e, 'businessEmail')}
              />
            </MyFormItem>
            {errorEmail && <span className="input-warning">{errorEmail}</span>}
          </MyFormItemGroup>

          <MyFormItem name="companyName" label="Company Name" required>
            <Input
              placeholder="XRii"
              value={formData.companyName}
              onChange={e => handleInputChange(e, 'companyName')}
            />
          </MyFormItem>
          {errorCompany && (
            <span className="input-warning">{errorCompany}</span>
          )}
        </MyFormItemGroup>

        <Button type="primary" block htmlType="submit">
          Submit
        </Button>
      </Form>
      <ModalWindow
        isModalVisible={isModalVisible}
        handleModalClose={handleModalClose}
      />

    </div>
  );
};

export default App;
