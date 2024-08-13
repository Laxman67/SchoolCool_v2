import { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';

import {
  TeachersContainer,
  Content,
  TeachersContent,
  TeachersHeader,
  TeacherList,
  TeacherItem,
  AddTeacherForm,
  AddTeacherInput,
  AddTeacherButton,
} from '../../styles/TeachersStyles';

const Teachers = () => {
  return (
    <TeachersContainer>
      <Sidebar />
      <TeachersContent>
        <TeachersHeader>Add Teachers</TeachersHeader>
        <TeachersHeader>
          <AddTeacherForm>
            <AddTeacherInput type="text" placeholder="Enter Teacher Name" />
            <AddTeacherInput type="email" placeholder="Enter Email" />
            <AddTeacherInput type="text" placeholder="Enter Subject" />
            <AddTeacherButton>Add Teacher</AddTeacherButton>
          </AddTeacherForm>

          <TeacherList>
            <TeacherItem>Teacher 1</TeacherItem>
            <TeacherItem>Teacher 2</TeacherItem>
            <TeacherItem>Teacher 3</TeacherItem>
            <TeacherItem>Teacher 4</TeacherItem>
          </TeacherList>
        </TeachersHeader>
      </TeachersContent>
    </TeachersContainer>
  );
};

export default Teachers;
