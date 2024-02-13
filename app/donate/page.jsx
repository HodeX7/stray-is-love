"use client";
import { Form, Input, Button, ConfigProvider } from "antd";

const DonationForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    // Here you can implement your logic for handling the donation submission
    console.log("Received values:", values);
    // Clear the form fields after submission
    form.resetFields();
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item
        label="Enter donation amount:"
        name="donationAmount"
        rules={[{ required: true, message: "Please enter donation amount!" }]}
      >
        <Input type="number" placeholder="Enter amount" />
      </Form.Item>

      <Form.Item
        label="Your name:"
        name="name"
        rules={[{ required: true, message: "Please enter your name!" }]}
      >
        <Input placeholder="Enter your name" />
      </Form.Item>

      <Form.Item
        label="Your email:"
        name="email"
        rules={[
          { required: true, message: "Please enter your email!" },
          { type: "email", message: "Please enter a valid email address!" },
        ]}
      >
        <Input placeholder="Enter your email" />
      </Form.Item>

      <Form.Item>
        <ConfigProvider
          theme={{
            components: {
              Button: {
                colorBgContainer: "pink-500",
              },
            },
          }}
        >
          <Button className="bg-pink-500 " htmlType="submit">
            Donate Now
          </Button>
        </ConfigProvider>
      </Form.Item>
    </Form>
  );
};

const Donation = () => {
  return (
    <div className="mt-20 z-0 text-black h-screen w-1/2 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8">Make a Donation</h1>
      <div className=" max-w-md mx-auto">
        <DonationForm />
      </div>
    </div>
  );
};

export default Donation;
