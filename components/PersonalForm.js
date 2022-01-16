
import {
  Form,
  Input,
  Button,

  Select,

} from 'antd';

const PersonalForm = ({handleSubmit}) => {
    const layout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 8 },

      };
    const [form] = Form.useForm(); 
    //form for name, personal email , vit email , phone number, college year,course,registeration number,slot preference
    return (
        <Form
            form={form}
            style={{paddingTop: '3rem'}}
            {...layout}
            name="dynamic_form_nest_item"
            onFinish={handleSubmit}
            >
            <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: 'Please input your name!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="personalEmail"
                label="Personal Email"
                rules={[{ required: true, message: 'Please input your personal email!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="vitEmail"
                label="VIT Email"
                rules={[{ required: true, message: 'Please input your VIT email!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="phoneNumber"
                label="Phone Number"
                rules={[{ required: true, message: 'Please input your phone number!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="collegeYear"
                label="College Year"
                rules={[{ required: true, message: 'Please input your college year!' }]}
            >
                <Select>

                    <Select.Option value="2">2</Select.Option>
                    <Select.Option value="3">3</Select.Option>
                  
                </Select>
            </Form.Item>
            <Form.Item
                name="course"
                label="Course"
                rules={[{ required: true, message: 'Please input your course!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="registerationNumber"
                label="Registeration Number"
                rules={[{ required: true, message: 'Please input your registeration number!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="datePreference"
                label="Date Preference"
                rules={[{ required: true, message: 'Please input your date preference!' }]}
            >
                <Select>
                    <Select.Option value="1">1</Select.Option>
                    <Select.Option value="2">2</Select.Option>
                    <Select.Option value="3">3</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item
                name="timePreference"
                label="Time Preference"
                rules={[{ required: true, message: 'Please input your time preference!' }]}
            >
                <Select>
                    <Select.Option value="1">1</Select.Option>
                    <Select.Option value="2">2</Select.Option>
                    <Select.Option value="3">3</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item>
            <Button style={{margin : "2%"}} type="primary" htmlType="submit" onClick={() => {
                form.validateFields();
            }}>
                Submit
            </Button>
            </Form.Item>
        </Form>
    )
};

export default PersonalForm;

