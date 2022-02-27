import { Form, Alert, Button, Space, Select } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
const { Option } = Select;
import { useState } from 'react';
import unPublish from '../Firebase/UnPublish';
import finalPublish from '../Firebase/FinalPublish';
const PubResultComp = ({onSubmit , allEmails}) => {
  const [submitting, setSubmitting] = useState(false);

  const onFinish = values => {
    setSubmitting(true);
    onSubmit(values.users);
    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
  };

  return (
      <div style={{paddingTop:"5rem"}}>
      {submitting ? <Alert message = {"Publishing Results.. Click Refresh to see changes"} type='info'></Alert> : null}
      <h1>Publish Results here</h1>
    <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
      <Form.List name="users">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                <Form.Item
                  {...restField}
                  name={[name, 'email']}
                  rules={[{ required: true, message: 'Missing first name' }]}
                >
                  <Select style={{"width": "30rem"}} mode='multiple' placeholder = 'Email'>
                    {allEmails.map((email) => {
                        return <Option key={email} value={email}>{email}</Option>
                    })}
                    </Select>
                </Form.Item>
               <Form.Item
                    name = {[name, 'departmentsSelected']}
                    {...restField}
                    rules={[{ required: true, message: 'Missing department' }]}
               >
               <Select style={{width:"30rem"}} mode = 'multiple' placeholder="Departments">
                    <Option value="Technical">Technical</Option>
                    <Option value="Web Development">Web Development</Option>
                    <Option value="Design">Design</Option>
                    <Option value="Operations">Operations</Option>
               </Select>
               </Form.Item>
                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add Member
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
        <div style={{
            display: 'flex',
            flexDirection: "column",
            columnGap: "1rem",
            
        }}>
        <Button style={{
          width: "10rem",
        }} type="primary" onClick={unPublish}>
      UnPublish
    </Button>
    <Button style={{
      marginTop: "1rem",
      width: "40rem",
    }} type="primary" onClick={finalPublish}>
      Final Publish ! ! !  Caution that this will reject all candidates who have not been selected already.
    </Button>
        </div>
    </div>
  );
};

export default PubResultComp;