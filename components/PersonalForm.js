import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  TimePicker,
} from 'antd';

const PersonalForm = ({handleSubmit}) => {
    const [form] = Form.useForm(); 
    //form for name, personal email , vit email , phone number, college year,course,registeration number,slot preference
    return (
        <Form
            form={form}
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
                name="slotPreference"
                label="Slot Preference"
                rules={[{ required: true, message: 'Please input your slot preference!' }]}
            >
                <DatePicker></DatePicker>
                <TimePicker></TimePicker>
            </Form.Item>
            <Form.Item>
            <Button type="primary" htmlType="submit" onClick={() => {
               
                form.validateFields();
            }}>
                Submit
            </Button>
            </Form.Item>
        </Form>
    )
};

export default PersonalForm;

