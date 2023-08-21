import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, Error, Form, Input, Label, Title } from './AddingForm.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const schema = yup
  .object({
    name: yup
      .string()
      .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/)
      .required(),
    number: yup
      .string()
      .matches(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/)
      .required(),
  })
  .required();

export default function AddingForm({ addContact }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    addContact(data);
    reset();
  };

  return (
    <>
      <Title>Add new contact</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>
          Name
          <Input {...register('name')} placeholder="Enter name" />
          {errors.name && <Error>Name is required</Error>}
        </Label>
        <Label>
          Number
          <Input {...register('number')} placeholder="xxx-xxx-xx-xx" />
          {errors.number && <Error>Number is required</Error>}
        </Label>
        <Button type="submit">Add contact</Button>
        <ToastContainer />
      </Form>
    </>
  );
}
