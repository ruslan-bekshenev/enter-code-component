import React from 'react';
import {Form, Input, Typography} from "antd";
import {useForm, Controller} from "react-hook-form";

const EnterCode = () => {
  const { control } = useForm({
    mode: 'onChange'
  })
  return (
    <>
      <Form>
        <Typography>
          Form
        </Typography>
        <Input />
        <Input />
        <Input />
        <Input />
      </Form>
    </>
  );
};

export default EnterCode;