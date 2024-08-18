import { useState, useEffect } from 'react';
import TeacherSidebar from './TeacherSidebar';
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
import { SidebarContainer } from '../../styles/SidebarStyles';

const TeacherStudents = () => {
  return (
    <StudentsContainer>
      <TeacherSidebar />
      <Content>
        <StudentsContent></StudentsContent>
        <StudentsHeader>Students</StudentsHeader>
        <StudentList>{/* Class students */}</StudentList>
      </Content>
    </StudentsContainer>
  );
};

export default TeacherStudents;
