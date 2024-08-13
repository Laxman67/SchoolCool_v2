import {
  ChooseUserContainer,
  UserSection,
  Title,
  Button,
} from '../styles/ChooseUserStyles';

import { Link } from 'react-router-dom';

const ChooseUser = () => {
  return (
    <div>
      <ChooseUserContainer>
        <UserSection>
          <Title>Admin</Title>
          <Button to="/admin-signin">Login as Admin</Button>
        </UserSection>
        <UserSection>
          <Title>Students</Title>
          <Button to="/students-signin">Login as Students</Button>
        </UserSection>
        <UserSection>
          <Title>Teacher</Title>
          <Button to="/teachers-signin">Login as Teacher</Button>
        </UserSection>
      </ChooseUserContainer>
    </div>
  );
};

export default ChooseUser;
