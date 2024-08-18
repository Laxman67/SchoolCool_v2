import { useState, useEffect } from 'react';
import TeacherSidebar from './TeacherSidebar';
import {
  ClassesContainer,
  Content,
  ClassesContent,
  ClassList,
  ClassItem,
  AddClassForm,
  AddClassInput,
  AddClassButton,
  ClassContainer,
  SidebarContainer,
  ClassHeader,
  GradeHeader,
} from '../../styles/ClassesStyles';

const TeacherClasses = () => {
  return (
    <ClassContainer>
      <SidebarContainer>
        <TeacherSidebar />
      </SidebarContainer>
      <Content>
        <ClassesContent>
          <ClassHeader>Classes</ClassHeader>
          <ClassList>{/* TODO  class list */}</ClassList>
        </ClassesContent>
      </Content>
    </ClassContainer>
  );
};

export default TeacherClasses;
