import { Form, Input, Button, Select } from 'antd';
import { useState } from 'react';
import styles from '../styles/home/home.module.css';

const PersonalForm = ({ handleSubmit, values }) => {
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8 },
  };
  const [day, setDay] = useState(27); //default day is 27
  const [form] = Form.useForm();
  //form for name, personal email , vit email , phone number, college year,course,registeration number,slot preference

  const timeSlots = {
    27: [
      { value: 'Slot 1: 10:00 AM - 12:00 PM' },
      { value: 'Slot 2: 01:30 PM - 03:30 PM' },
      { value: 'Slot 3: 03:45 PM - 05:30 PM' },
      { value: 'Slot 4: 06:30 PM - 09:30 PM' },
      // More slots here
    ],
    28: [
      { value: 'Slot 1: 11:50 AM - 01:30 PM' },
      { value: 'Slot 2: 06:00 PM - 07:30 PM' },
      // More slots here
    ],
  };

  const handleDateChange = (selectedDay) => {
    setDay(selectedDay);
    form.setFieldsValue(['timePreference']);
  };

  return (
    <Form
      form={form}
      style={{ width: '100%', height: '100%', marginBottom: '-25px' }}
      name='dynamic_form_nest_item'
      onFinish={handleSubmit}
      initialValues={values}
    >
      <Form.Item
        name='name'
        rules={[{ required: true, message: 'Please input your name!' }]}
        style={{ margin: '10px auto', width: '50%', fontSize: '1.1rem' }}
      >
        <Input
          style={{ margin: '0px 20px', height: '40px' }}
          placeholder='Name'
          className={styles.input}
        />
      </Form.Item>
      <Form.Item
        name='personalEmail'
        rules={[
          {
            required: true,
            message: 'Please input your personal email in correct format!',
            type: 'email',
          },
        ]}
        style={{ margin: '10px auto', width: '50% ' }}
      >
        <Input
          style={{ margin: '0px 20px', height: '40px' }}
          placeholder='Personal Email ID'
          className={styles.input}
        />
      </Form.Item>
      <Form.Item
        name='vitEmail'
        rules={[
          {
            required: true,
            message: 'Please input your VIT email in correct format!',
            type: 'email',
          },
        ]}
        style={{ margin: '10px auto', width: '50% ' }}
      >
        <Input
          style={{ margin: '0px 20px', height: '40px' }}
          placeholder='VIT Email ID'
          className={styles.input}
        />
      </Form.Item>
      <Form.Item
        name='phoneNumber'
        rules={[{ required: true, message: 'Please input your phone number!' }]}
        style={{ margin: '10px auto', width: '50% ' }}
      >
        <Input
          style={{ margin: '0px 20px', height: '40px' }}
          placeholder='Phone Number'
          className={styles.input}
        />
      </Form.Item>
      <Form.Item
        name='collegeYear'
        rules={[{ required: true, message: 'Please input your college year!' }]}
        style={{ margin: '10px auto', width: '50% ' }}
      >
        <Select
          placeholder='College year'
          style={{ margin: '0px 20px', height: '40px' }}
          className={styles.input}
        >
          <Select.Option
            style={{
              background: '#28126C',
            }}
            value='1'
          >
            1st
          </Select.Option>
          <Select.Option
            style={{
              background: '#28126C',
            }}
            value='2'
          >
            2nd
          </Select.Option>
          <Select.Option
            style={{
              background: '#28126C',
            }}
            value='3'
          >
            3rd
          </Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        name='course'
        rules={[{ required: true, message: 'Please input your course!' }]}
        style={{ margin: '10px auto', width: '50% ' }}
      >
        <Input
          style={{ margin: '0px 20px', height: '40px' }}
          placeholder='Programme (e.g. CSE)'
          className={styles.input}
        />
      </Form.Item>
      <Form.Item
        name='registerationNumber'
        rules={[
          {
            required: true,
            message: 'Please input your registeration number!',
          },
        ]}
        style={{ margin: '10px auto', width: '50% ' }}
      >
        <Input
          style={{ margin: '0px 20px', height: '40px' }}
          placeholder='Registration Number'
          className={styles.input}
        />
      </Form.Item>
      <Form.Item
        name='datePreference'
        rules={[
          { required: true, message: 'Please input your date preference!' },
        ]}
        style={{ margin: '10px auto', width: '50% ' }}
      >
        <Select
          onChange={handleDateChange}
          className={styles.input}
          placeholder='Select your preferred date of interview'
          style={{ margin: '0px 20px', height: '40px' }}
        >
          <Select.Option
            style={{
              background: '#28126C',
            }}
            value='27' // 27th August
          >
            27 August, 2022
          </Select.Option>
          <Select.Option
            style={{
              background: '#28126C',
            }}
            value='28' // 28th August
          >
            28 August, 2022
          </Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        name='timePreference'
        rules={[
          { required: true, message: 'Please input your time preference' },
        ]}
        style={{ margin: '10px auto', width: '50% ' }}
      >
        <Select
          placeholder='Select your preferred time of interview'
          className={styles.input}
          style={{ color: '#fff', margin: '0px 20px', height: '40px' }}
        >
          {timeSlots[day].map((slot) => (
            <Select.Option
              key={slot.value}
              style={{
                background: '#28126C',
              }}
              value={slot.value}
            >
              {slot.label}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item style={{ width: '100%' }}>
        <Button
          style={{ margin: '10px auto', display: 'block' }}
          size='large'
          type='primary'
          htmlType='submit'
          onClick={() => {
            form.validateFields();
          }}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default PersonalForm;
