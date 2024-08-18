import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  LibraryContainer,
  Content,
  Title,
  AddBookForm,
  FormGroup,
  Label,
  Input,
  Button,
  BookList,
  BookItem,
  BookTitle,
  BookAuthor,
  ActionButton,
  SidebarContainer,
  LibraryHeader,
  BorrowButton,
} from '../../styles/LibraryStyles';

import StudentSidebar from './StudentSidebar';

function StudentLibraury() {
  return (
    <LibraryContainer>
      <SidebarContainer>
        <StudentSidebar />
      </SidebarContainer>
      <Content>
        <LibraryHeader>Library</LibraryHeader>
        <BookList></BookList>
      </Content>
    </LibraryContainer>
  );
}

export default StudentLibraury;
