import { Form, Input, Button, Select } from 'antd';

import { useState } from 'react';
const FormComponent = ({ handleSubmit , values}) => {
    const departments = [
        'Technical',
        'Web Development',
        'Design',
        'Operations',
    ]
    //pick departments and add reason to apply to each
    const [chosenDepartments, setChosenDepartments] = useState(Object.keys(values));
    const [errorMessage, setErrorMessage] = useState('');
    const [form] = Form.useForm();
    const layout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 8 },
    };
    return (
        <div style={{ width: '95%', margin: '0 auto' }}>
            <p>Enter department</p>
            <Select
                defaultValue={chosenDepartments}
                mode='multiple'
                allowClear
                style={{ width: '50%', margin: '10px 0px'}}
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
                initialValues={values}

            >
                {chosenDepartments.map(
                    (department) => {
                        return (
                            <>
                                <p>Why do you want to join the {department} team?</p>
                                    <Form.Item
                                        key={department}
                                        name={[department, 'reason']}
                                        rules={[{ required: true, message: 'Please input your reason!' }]}
                                    >
                                        <Input.TextArea rows={1} style={{ width: '50%' }} />

                                    </Form.Item>
                                </>
                                );
             }
            )}
                                {errorMessage}
                                <Form.Item>
                                    <Button style={{ margin: "0 auto" }} type="primary" htmlType="submit" onClick={() => {
                                        if (chosenDepartments.length === 0) {
                                            setErrorMessage('Please select at least one department');
                                            return;
                                        }
                                        form.validateFields();
                                    }}>
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Form>
    </div>
    );
};

export default FormComponent;