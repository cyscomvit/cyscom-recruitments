
import {
    Form,
    Input,
    Button,

    Select,

} from 'antd';
import { useState } from 'react';

const PersonalForm = ({ handleSubmit }) => {
    const layout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 8 },
    };
    const [day, setDay] = useState(21);
    const [form] = Form.useForm();
    //form for name, personal email , vit email , phone number, college year,course,registeration number,slot preference
    return (
        <Form
            form={form}
            style={{width: '100%', height: '100%', marginBottom: '-25px'}}
            name="dynamic_form_nest_item"
            onFinish={handleSubmit}
        >
            <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: 'Please input your name!' }]}
                style={{ margin: '10px auto', width: '50%', fontSize: '1.1rem' }}
            >
                <Input style={{ margin: '0px 20px' }} />
            </Form.Item>
            <Form.Item
                name="personalEmail"
                label="Personal Email"
                rules={[{ required: true, message: 'Please input your personal email!' }]}
                style={{ margin: '10px auto', width: '50% ' }}
            >
                <Input style={{ margin: '0px 20px' }} />
            </Form.Item>
            <Form.Item
                name="vitEmail"
                label="VIT Email"
                rules={[{ required: true, message: 'Please input your VIT email!' }]}
                style={{ margin: '10px auto', width: '50% ' }}
            >
                <Input style={{ margin: '0px 20px' }} />
            </Form.Item>
            <Form.Item
                name="phoneNumber"
                label="Phone Number"
                rules={[{ required: true, message: 'Please input your phone number!' }]}
                style={{ margin: '10px auto', width: '50% ' }}
            >
                <Input style={{ margin: '0px 20px' }} />
            </Form.Item>
            <Form.Item
                name="collegeYear"
                label="College Year"
                rules={[{ required: true, message: 'Please input your college year!' }]}
                style={{ margin: '10px auto', width: '50% ' }}
            >
                <Select >

                    <Select.Option style={{
                        background: "#28126C"
                    }} value="2">2</Select.Option>
                    <Select.Option style={{
                        background: "#28126C"
                    }} value="3">3</Select.Option>

                </Select>
            </Form.Item>
            <Form.Item
                name="course"
                label="Programme"
                rules={[{ required: true, message: 'Please input your course!' }]}
                style={{ margin: '10px auto', width: '50% ' }}
            >
                <Input style={{ margin: '0px 20px' }} />
            </Form.Item>
            <Form.Item
                name="registerationNumber"
                label="Registeration Number"
                rules={[{ required: true, message: 'Please input your registeration number!' }]}
                style={{ margin: '10px auto', width: '50% ' }}
            >
                <Input style={{ margin: '0px 20px' }} />
            </Form.Item>
            <Form.Item
                name="datePreference"
                label="Date Preference"
                rules={[{ required: true, message: 'Please input your date preference!' }]}
                style={{ margin: '10px auto', width: '50% ' }}
            >
                <Select onChange={e => setDay(e)}>
                    <Select.Option style={{
                        background: "#28126C"
                    }} value="21">21</Select.Option>
                    <Select.Option style={{
                        background: "#28126C"
                    }} value="22">22</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item
                name="timePreference"
                label="Time Preference"
                rules={[{ required: true, message: 'Please input your time preference!' }]}
                style={{ margin: '10px auto', width: '50% ' }}
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
            <Form.Item style={{ width: '100%' }}>
                <Button style={{ margin: "10px auto", display: 'block' }} size='large' type="primary" htmlType="submit" onClick={() => {
                    form.validateFields();
                }}>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
};

export default PersonalForm;

