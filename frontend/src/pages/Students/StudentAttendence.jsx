import { useState, useEffect } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
import StudentSidebar from './StudentSidebar';
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

function StudentAttendence() {
  const attendence = [
    { id: 1, date: '2025-04-01', present: true },
    { id: 2, date: '2025-04-01', present: true },
    { id: 3, date: '2025-04-01', present: false },
    { id: 4, date: '2025-04-01', present: true },
    { id: 5, date: '2025-04-01', present: false },
    { id: 6, date: '2025-04-01', present: true },
    { id: 7, date: '2025-04-01', present: true },
    { id: 8, date: '2025-04-01', present: false },
  ];
  return (
    <AttendanceContainer>
      <SidebarContainer>
        <StudentSidebar />
      </SidebarContainer>
      <Content>
        <AttendanceContent>
          <AttendanceHeader>Attendance Records</AttendanceHeader>
          <AttendanceList>
            {attendence.map(({ id, date, present }) => {
              return (
                <AttendanceItem key={id}>
                  <AttendanceDate>{date}</AttendanceDate>
                  <AttendanceStatus>
                    {present ? (
                      <Link
                        to={`/studentView/${id}`}
                        style={{
                          textDecoration: 'none',
                          backgroundColor: 'green',
                          color: 'white',
                          padding: '5px 8px',
                          borderRadius: '5px',
                          fontWeight: '600',
                          cursor: 'Pointer',
                        }}
                      >
                        Present
                      </Link>
                    ) : (
                      <Link
                        to={`/studentView/${id}`}
                        style={{
                          backgroundColor: 'red',
                          color: 'white',
                          textDecoration: 'none',
                          padding: '5px 8px',
                          borderRadius: '5px',
                          fontWeight: '600',
                          cursor: 'Pointer',
                        }}
                      >
                        {' '}
                        Absent
                      </Link>
                    )}
                  </AttendanceStatus>
                </AttendanceItem>
              );
            })}
          </AttendanceList>
        </AttendanceContent>
      </Content>
    </AttendanceContainer>
  );
}

export default StudentAttendence;
