import React from 'react';
import {
  ChooseUserContainer,
  UserSection,
  Title,
  Button,
} from '../styles/ChooseUserStyles';

const ChooseUser = () => {
  const users = [
    {
      title: 'Admin',
      path: '/admin-signin',
      imgUrl:
        'https://img.icons8.com/?size=100&id=68733&format=png&color=000000',
    },
    {
      title: 'Students',
      path: '/students-signin',
      imgUrl:
        'https://img.icons8.com/?size=100&id=SaAHZ2DGgNNZ&format=png&color=000000',
    },
    {
      title: 'Teacher',
      path: '/teachers-signin',
      imgUrl:
        'https://img.icons8.com/?size=100&id=owZ150JlNlBu&format=png&color=000000',
    },
  ];

  return (
    <ChooseUserContainer>
      {users.map((user) => (
        <UserSection key={user.title}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <img src={user.imgUrl} />
            <Title>{user.title}</Title>
          </div>
          <Button to={user.path}>Login as {user.title}</Button>
        </UserSection>
      ))}
    </ChooseUserContainer>
  );
};

export default ChooseUser;
