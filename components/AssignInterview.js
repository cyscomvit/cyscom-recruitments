import { Form, Select, Button } from "antd";
import { useState } from 'react';

export default function AssignInterview({ handleSubmit }) {
    const layout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 8 },

    };

    const [form] = Form.useForm();
    const [day, setDay] = useState(21);
    return (
        <div>
            <Form form={form} name="basic" onFinish={handleSubmit} {...layout}>
                <Form.Item
                    name="dateAssign"
                    label="Date Assign"
                    rules={[
                        { required: true, message: "Please given an assigned date!" },
                    ]}
                >
                    <Select onChange={e => setDay(e)}>
                        <Select.Option
                            style={{
                                background: "#28126C",
                            }}
                            value="21"
                        >
                            21
                        </Select.Option>
                        <Select.Option
                            style={{
                                background: "#28126C",
                            }}
                            value="22"
                        >
                            22
                        </Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="timeAssign"
                    label="Time Assign"
                    rules={[
                        { required: true, message: "Please give an assigned time!" },
                    ]}
                >
                    {day === '21' ?
                        <Select>
                            <Select.Option style={{
                                background: "#28126C"
                            }} value="19:00 - 20:30">19:00 - 20:30</Select.Option>
                        </Select>
                        :
                        <Select>
                            <Select.Option style={{
                                background: "#28126C"
                            }} value="11:00- 13:00">11:00- 13:00</Select.Option>
                            <Select.Option style={{
                                background: "#28126C"
                            }} value="16:00 - 18:00">16:00 - 18:00</Select.Option>
                        </Select>
                    }
                </Form.Item>
                <Form.Item>
                    <Button
                        style={{ margin: "2%" }}
                        type="primary"
                        htmlType="submit"
                        onClick={() => {
                            form.validateFields();
                        }}
                    >
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}
