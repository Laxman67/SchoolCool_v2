import { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
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

const Assignment = () => {
  return (
    <AssignmentsContainer>
      <Sidebar />
      <Content>
        <AssignmentsContent>
          <AssignmentsHeader>Assignments</AssignmentsHeader>
          <AddAssignmentForm>
            <AddAssignmentForm>
              <AddAssignmentInput
                type="text"
                placeholder="Enter Assignment Title"
              />
              <AddAssignmentTextArea placeholder="Enter Description" />

              <AddAssignmentInput type="text" placeholder=" Assignment Grade" />

              <AddAssignmentInput
                type="date"
                placeholder="Enter Assignment DeadLine"
              />
              <AddAssignmentButton type="submit">
                Add Assignment
              </AddAssignmentButton>
            </AddAssignmentForm>
          </AddAssignmentForm>
        </AssignmentsContent>
      </Content>
    </AssignmentsContainer>
  );
};

export default Assignment;
