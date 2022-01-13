import { Form, Input, Button, Select } from 'antd';

import { useState } from 'react';
const FormComponent = ({handleSubmit}) => {
  const departments = [
      'Technical',
      'Web Development',
      'Design',
      'Operations',
  ]
  //pick departments and add reason to apply to each
    const [chosenDepartments, setChosenDepartments] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [form] = Form.useForm();
    const layout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 8 },
      };
  return (
      <>
        <Select
            
            mode='multiple'
            allowClear
            style={{ width: '50%' , margin: '1%'}}
            placeholder='Select departments'
            onChange={(value) => {
                setErrorMessage('');
                setChosenDepartments(value);
            }}
        >
            {departments.map((department) => {
                return <Select.Option key={department} value={department}>{department}</Select.Option>
            })}
        </Select>
       <Form
            form={form}
            name="dynamic_form_nest_item"
            onFinish={handleSubmit}
            initialValues={{
                nestFields: [
                    {
                        name: '0',
                        reason: '',
                    },
                ],
            }}

       >
         {chosenDepartments.map(
             (department) => {
                    return (
                        <Form.Item
                            key={department}
                            name={[department, 'reason']}
                            label={`Reason to apply to ${department}`}
                            rules={[{ required: true, message: 'Please input your reason!' }]}
                        >
                            <Input.TextArea rows={4}
                            />
                        </Form.Item>
                    );
             }
            )}
            {errorMessage}
        <Form.Item>
            <Button style={{margin : "1%"}} type="primary" htmlType="submit" onClick={() => {
                if(chosenDepartments.length === 0) {
                    setErrorMessage('Please select at least one department');
                    return;
                }
                form.validateFields();
            }}>
                Submit
            </Button>
        </Form.Item>
       </Form>
    </>
  );
};

export default FormComponent;