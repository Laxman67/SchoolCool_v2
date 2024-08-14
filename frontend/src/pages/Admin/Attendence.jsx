import { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import {
  AttendanceContainer,
  Content,
  AttendanceContent,
  AttendanceHeader,
  AttendanceList,
  AttendanceItem,
  StudentName,
  CheckboxLabel,
  Divider,
  SubmitButton,
  SidebarContainer,
  AttendanceDate,
  AttendanceStatus,
} from '../../styles/AttendanceStyles';

const Attendence = () => {
  return (
    <AttendanceContainer>
      <Sidebar />
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

export default Attendence;
