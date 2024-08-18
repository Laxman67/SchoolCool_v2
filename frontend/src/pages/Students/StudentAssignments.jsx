import { useState, useEffect } from 'react';
import axios from 'axios';

import StudentSidebar from '../Students/StudentSidebar';
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

function StudentAssignments() {
  return (
    <AssignmentsContainer>
      <SidebarContainer>
        <StudentSidebar />
      </SidebarContainer>
      <Content>
        <h1>Assignments</h1>
      </Content>
    </AssignmentsContainer>
  );
}

export default StudentAssignments;
