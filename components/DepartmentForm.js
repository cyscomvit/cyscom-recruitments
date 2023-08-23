import { Form, Input, Button, Select } from 'antd';

import { useState } from 'react';
const FormComponent = ({ handleSubmit, values }) => {
  const departments = [
    'Development (Web-Dev and Open Source Projects)',
    'Technical (CTF and Projects)',
    'Design ',
    'Event Management',
    'Content ',
    'Social media',
  ];

  const departmentQuestions = {
    'Development (Web-Dev and Open Source Projects)': [
      'Why do you want to join the Development team and what are your skills?',
      'Drop a link of your GitHub profile',
    ],
    'Technical (CTF and Projects)': [
      'Why do you want to join the Technical team and what are your skills?',
      'Do you have any experience in CTFs? (Yes/No)',
    ],
    'Design ': [
      'Why do you want to join the Design team?',
      'What are your skills? (Canva, Photoshop, After Effects, etc.)',
      'Drop a link of your work (Google Drive - enable link sharing with (anyone with the link))',
    ],
    'Event Management': ['Why do you want to join the Event Management team?'],
    'Content ': [
      'Why do you want to join the Content team?',
      'Drop a link of your works (blogs, articles, etc.)',
    ],
    'Social media': ['Why do you want to join the Social Media team?'],
  };

  //pick departments and add reason to apply to each
  const [chosenDepartments, setChosenDepartments] = useState(
    Object.keys(values)
  );
  const [errorMessage, setErrorMessage] = useState('');
  const [form] = Form.useForm();
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8 },
  };

  const validateForm = () => {
    if (chosenDepartments.length === 0) {
      setErrorMessage('Please select at least one department');
      return;
    }
    form.validateFields();
    form.submit();
  };

  return (
    <div style={{ width: '95%', margin: '0 auto' }}>
      <p>Choose department</p>
      <Select
        defaultValue={chosenDepartments}
        mode='multiple'
        allowClear
        style={{ width: '50%', margin: '10px 0px' }}
        placeholder='Select departments'
        onChange={(value) => {
          setErrorMessage('');
          setChosenDepartments(value);
        }}
      >
        {departments.map((department) => {
          return (
            <Select.Option key={department} value={department}>
              {department}
            </Select.Option>
          );
        })}
      </Select>
      <Form
        form={form}
        name='dynamic_form_nest_item'
        onFinish={handleSubmit}
        initialValues={values}
      >
        {chosenDepartments.map((department) => (
          <div key={department}>
            <h2>{department}</h2>
            {departmentQuestions[department] &&
              departmentQuestions[department].map((question, index) => (
                <Form.Item
                  key={`question-${department}-${index}`}
                  name={[department, `question${index}`]}
                  rules={[
                    {
                      required: true,
                      message: 'Please answer the question!',
                    },
                  ]}
                >
                  <Input.TextArea
                    rows={1}
                    style={{ width: '50%' }}
                    placeholder={question}
                  />
                </Form.Item>
              ))}
          </div>
        ))}
        {errorMessage}
        <Form.Item>
          <Button
            style={{ margin: '0 auto' }}
            type='primary'
            onClick={() => {
              validateForm();
            }}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Button
        style={{ margin: '0px 0px', width: '7rem' }}
        size='medium'
        type='primary'
        onClick={() => history.back()}
      >
        Edit Details
      </Button>
    </div>
  );
};

export default FormComponent;
