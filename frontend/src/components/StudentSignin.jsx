import { useState } from 'react';
import {
  StudentSignInContainer,
  FormContainer,
  InputField,
  SubmitButton,
} from '../styles/StudentSignInStyles';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

// const schema = () => {};

const StudentSignin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    console.log('Admin SigIn ', { email, password });
  };
  return (
    <StudentSignInContainer>
      <h2>Student SignIn</h2>
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
        <SubmitButton to="/students/dashboard" onClick={handleSignIn}>
          Sign In
        </SubmitButton>
      </FormContainer>
    </StudentSignInContainer>
  );
};

export default StudentSignin;
