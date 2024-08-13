import { useState } from 'react';
import {
  AdminRegisterContainer,
  FormContainer,
  InputField,
  SubmitButton,
} from '../styles/AdminRegisterStyles';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

// const schema = () => {};

const AdminRegister = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log('Admin Register');
    console.log(data);
    reset();
  };
  return (
    <AdminRegisterContainer>
      <h2>Admin Register</h2>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <InputField
          type="email"
          placeholder="Email"
          // onChange={(e) => setEmail(e.target.value)}
          {...register('email')}
        />
        <InputField
          type="password"
          placeholder="Password"
          {...register('password')}
        />
        <SubmitButton to="/admin/dashboard"> Register</SubmitButton>
      </FormContainer>
    </AdminRegisterContainer>
  );
};

export default AdminRegister;
