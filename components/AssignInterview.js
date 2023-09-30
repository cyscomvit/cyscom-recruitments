import { Form, Select, Button } from 'antd';
import { useState } from 'react';

export default function AssignInterview({ handleSubmit }) {
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8 },
  };

  const [form] = Form.useForm();
  const [day, setDay] = useState(21);

  const generateTimeOptions = (startHour, endHour, intervalMinutes) => {
    const options = [];
    const startTime = new Date(`1970-01-01 ${startHour}`);
    const endTime = new Date(`1970-01-01 ${endHour}`);

    while (startTime <= endTime) {
      const formattedTime = startTime.toLocaleTimeString([], {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      });

      options.push(
        <Select.Option
          key={formattedTime}
          style={{
            background: '#28126C',
          }}
          value={
            formattedTime.split(' ')[0] +
            ' ' +
            formattedTime.split(' ')[1].toUpperCase()
          }
        >
          {formattedTime.split(' ')[0] +
            ' ' +
            formattedTime.split(' ')[1].toUpperCase()}
        </Select.Option>
      );

      startTime.setMinutes(startTime.getMinutes() + intervalMinutes);
    }

    return options;
  };

  //   August 27
  const day1Slot1 = generateTimeOptions('10:00', '11:50', 10);
  const day1Slot2 = generateTimeOptions('13:30', '15:20', 10);
  const day1Slot3 = generateTimeOptions('15:50', '17:20', 10);
  const day1Slot4 = generateTimeOptions('18:30', '21:20', 10);

  //   August 28
  const day2Slot1 = generateTimeOptions('11:50', '13:20', 10);
  const day2Slot2 = generateTimeOptions('18:00', '19:20', 10);

  return (
    <div>
      <Form form={form} name='basic' onFinish={handleSubmit} {...layout}>
        <Form.Item
          name='dateAssign'
          label='Date Assign'
          rules={[
            { required: true, message: 'Please given an assigned date!' },
          ]}
        >
          <Select onChange={(e) => setDay(e)}>
            <Select.Option
              style={{
                background: '#28126C',
              }}
              value='27'
            >
              27 August, 2023
            </Select.Option>
            <Select.Option
              style={{
                background: '#28126C',
              }}
              value='28'
            >
              28 August, 2023
            </Select.Option>
            <Select.Option
              style={{
                background: '#28126C',
              }}
              value='31' // 31st August
            >
              31 August, 2023
            </Select.Option>
            <Select.Option
              style={{
                background: '#28126C',
              }}
              value='1' // 1st September
            >
              1 September, 2023
            </Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name='timeAssign'
          label='Time Assign'
          rules={[{ required: true, message: 'Please give an assigned time!' }]}
        >
          {day === '27' ? (
            <Select>
              {day1Slot1}
              {day1Slot2}
              {day1Slot3}
              {day1Slot4}
            </Select>
          ) : (
            <Select>
              {day2Slot1}
              {day2Slot2}
            </Select>
          )}
        </Form.Item>
        <Form.Item>
          <Button
            style={{ margin: '2%' }}
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
    </div>
  );
}
