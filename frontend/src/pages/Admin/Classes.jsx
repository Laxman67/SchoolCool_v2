import { useState, useEffect } from 'react';
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
import SideBar from '../Admin/Sidebar';
import axios from 'axios';

const Classes = () => {
  return (
    <>
      <ClassesContainer>
        <SideBar />
        <Content>
          <ClassesContent>
            <ClassHeader>Classes</ClassHeader>
            <AddClassForm>
              <AddClassInput
                type="text"
                placeholder="Enter Class Name"
                // {...register('class-name')}
              />
              <AddClassButton type="submit">Add Class</AddClassButton>
            </AddClassForm>

            {/* All the classes */}
            <ClassList></ClassList>
          </ClassesContent>
        </Content>
      </ClassesContainer>
    </>
  );
};

export default Classes;
