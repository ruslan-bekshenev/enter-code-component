import React from 'react';
import {Form, Input} from "antd";
import {useForm} from "react-hook-form";

const EnterCode = () => {
  const {} = useForm({
    mode: 'onChange'
  })
  return (
    <Form>
      <Input />
      <Input />
      <Input />
      <Input />
    </Form>
  );
};

export default EnterCode;