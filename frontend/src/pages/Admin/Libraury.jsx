import { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';

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

const Libraury = () => {
  return (
    <LibraryContainer>
      <Sidebar />
      <Content>
        <Title>Library Management</Title>
        <AddBookForm>
          <h2>Add New Book</h2>

          <FormGroup>
            <label htmlFor="title">Title : </label>
            <input type="text" id="title" name="title" />
          </FormGroup>
          <FormGroup>
            <label htmlFor="author">Author : </label>
            <input type="text" id="author" name="author" />
          </FormGroup>
          <Button type="submit">Add Book</Button>
        </AddBookForm>

        <BookList>
          <BookItem>i</BookItem>
        </BookList>
      </Content>
    </LibraryContainer>
  );
};

export default Libraury;
