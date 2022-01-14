import { Form, Input, Button, Space, Select } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
const { Option } = Select;
const PubResultComp = ({onSubmit}) => {

  const onFinish = values => {
    console.log('Received values of form: ', values);
    onSubmit(values.users);
  };

  return (
      <>
      <br></br>
      <br></br>
      <br></br>
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
                  <Input placeholder="Email" />
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
    </>
  );
};

export default PubResultComp;