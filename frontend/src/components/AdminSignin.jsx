import { useState } from 'react';
import {
  AdminSignInContainer,
  FormContainer,
  InputField,
  SubmitButton,
} from '../styles/AdminSignInStyles';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';

const AdminSignin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    console.log('Admin SigIn ', { email, password });
  };
  return (
    <AdminSignInContainer>
      <h2>Admin Sign In</h2>
      <FormContainer>
        <InputField
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <SubmitButton to="/admin/dashboard" onClick={handleSignIn}>
          Sign In
        </SubmitButton>
      </FormContainer>
    </AdminSignInContainer>
  );
};

export default AdminSignin;
