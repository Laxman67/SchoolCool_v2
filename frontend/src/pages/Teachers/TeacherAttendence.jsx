import { useState, useEffect } from 'react';
import TeacherSidebar from './TeacherSidebar';

import {
  AttendanceContainer,
  Content,
  AttendanceContent,
  AttendanceHeader,
  AttendanceList,
  AttendanceItem,
  CheckboxLabel,
  SubmitButton,
  SidebarContainer,
} from '../../styles/AttendanceStyles';

const TeacherAttendence = () => {
  return (
    <AttendanceContainer>
      <TeacherSidebar />

      <Content>
        <AttendanceContent>
          <AttendanceHeader>Attendance</AttendanceHeader>
          <AttendanceList>
            <AttendanceItem>
              <CheckboxLabel for="present">Present:</CheckboxLabel>
              <input type="checkbox" id="present" />
            </AttendanceItem>
            <AttendanceItem>
              <CheckboxLabel for="absent">Absent:</CheckboxLabel>
              <input type="checkbox" id="absent" />
            </AttendanceItem>
            <AttendanceItem>
              <CheckboxLabel for="absent_apology">
                Absent with Apology:
              </CheckboxLabel>
              <input type="checkbox" id="absent_apology" />
            </AttendanceItem>
          </AttendanceList>
          <SubmitButton>Submit</SubmitButton>
        </AttendanceContent>
      </Content>
    </AttendanceContainer>
  );
};

export default TeacherAttendence;
