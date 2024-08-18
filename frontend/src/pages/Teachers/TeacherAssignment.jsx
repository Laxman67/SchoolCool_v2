import { useState, useEffect } from 'react';
import TeacherSidebar from './TeacherSidebar';
import {
  AssignmentsContainer,
  Content,
  AssignmentsContent,
  AssignmentsHeader,
  AssignmentList,
  AssignmentItem,
  AddAssignmentForm,
  AddAssignmentInput,
  AddAssignmentTextArea,
  AddAssignmentButton,
  SidebarContainer,
  AssignmentCard,
  AssignmentTitle,
  AssignmentDescription,
  AssignmentButton,
  AssignmentDoneMessage,
} from '../../styles/AssignmentsStyles';

const TeacherAssignment = () => {
  return (
    <AssignmentsContainer>
      <TeacherSidebar />
      <Content>
        <AssignmentsContent>
          <AssignmentsHeader>Assignments</AssignmentsHeader>
          <>
            <AddAssignmentForm>
              <AddAssignmentInput
                type="text"
                placeholder="Enter Assignment Title"
              />
              <AddAssignmentTextArea placeholder="Enter Description" />

              <AddAssignmentInput type="text" placeholder=" Assignment Grade" />

              <AddAssignmentInput
                type="date"
                placeholder="Enter Assignment Deadline"
              />
              <AddAssignmentButton type="submit">
                Add Assignment
              </AddAssignmentButton>
            </AddAssignmentForm>
          </>

          <AssignmentList>
            <AssignmentsHeader>All Assignmnets</AssignmentsHeader>
          </AssignmentList>
        </AssignmentsContent>
      </Content>
    </AssignmentsContainer>
  );
};

export default TeacherAssignment;
