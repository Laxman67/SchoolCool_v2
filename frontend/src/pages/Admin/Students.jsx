import { useState, useEffect } from 'react';
import SideBar from '../Admin/Sidebar';
import axios from 'axios';

import {
  StudentsContainer,
  Content,
  StudentsContent,
  StudentsHeader,
  StudentList,
  StudentItem,
  AddStudentForm,
  AddStudentButton,
  AddStudentInput,
} from '../../styles/StudentsStyles';

const Students = () => {
  return (
    <StudentsContainer>
      <SideBar />
      <Content>
        <StudentsHeader>Add Student</StudentsHeader>

        <StudentsContainer>
          <StudentsHeader>
            <AddStudentForm>
              <AddStudentInput type="text" placeholder="Enter Student Name" />
              <AddStudentInput
                type="text"
                placeholder="Enter Registration Number"
              />
              <AddStudentInput type="text" placeholder="Enter Grade " />

              <AddStudentButton>Add Student</AddStudentButton>
            </AddStudentForm>

            {/* TODO  Complete List of Students view*/}
            <StudentList></StudentList>
          </StudentsHeader>
        </StudentsContainer>
      </Content>
    </StudentsContainer>
  );
};

export default Students;
