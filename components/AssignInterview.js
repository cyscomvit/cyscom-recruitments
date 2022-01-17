import { Form ,Select , Button } from "antd";

export default function AssignInterview({ handleSubmit }) {
    const layout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 8 },

      };
      
    const [form] = Form.useForm();
  return (
    <div>
      <Form form={form} name="basic" onFinish={handleSubmit} {...layout}>
        <Form.Item
          name="dateAssign"
          label="Date Assign"
          rules={[
            { required: true, message: "Please given an assigned date!"},
          ]}
        >
          <Select>
            <Select.Option
              style={{
                background: "#28126C",
              }}
              value="1"
            >
              1
            </Select.Option>
            <Select.Option
              style={{
                background: "#28126C",
              }}
              value="2"
            >
              2
            </Select.Option>
            <Select.Option
              style={{
                background: "#28126C",
              }}
              value="3"
            >
              3
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
          <Select>
            <Select.Option
              style={{
                background: "#28126C",
              }}
              value="1"
            >
              1
            </Select.Option>
            <Select.Option
              style={{
                background: "#28126C",
              }}
              value="2"
            >
              2
            </Select.Option>
            <Select.Option
              style={{
                background: "#28126C",
              }}
              value="3"
            >
              3
            </Select.Option>
          </Select>
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
