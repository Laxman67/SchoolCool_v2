import { useState } from 'react';
import {
  TeacherSignInContainer,
  FormContainer,
  InputField,
  SubmitButton,
} from '../styles/TeacherSignInStyles';
// import { toast } from 'react-toastify';

function TeacherSignin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    console.log('Admin SigIn ', { email, password });
  };
  return (
    <TeacherSignInContainer>
      <h2>Teachers Register</h2>
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
        <SubmitButton to="/teachers/dashboard" onClick={handleSignIn}>
          Sign In
        </SubmitButton>
      </FormContainer>
    </TeacherSignInContainer>
  );
}

export default TeacherSignin;
