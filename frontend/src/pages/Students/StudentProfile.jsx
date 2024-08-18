import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  ProfileContainer,
  SidebarContainer,
  Content,
  ProfileHeader,
  ProfileDetails,
  ProfileLabel,
  ProfileInfo,
  EditButton,
  ProfileDetail,
  Label,
  Value,
  ProfileContent,
} from '../../styles/SettingsProfileStyles';

import StudentSidebar from './StudentSidebar';

function StudentProfile() {
  const studentInfo = {
    name: 'Laxman ',
    dob: '2001-09-08',
    email: 'laxman@gmail.com',
    phone: '714851241',
    address: 'B-122A , Near C.T Hospital, City ',
    qualification: 'Bachleor of Computer Application',
  };
  return (
    <ProfileContainer>
      <SidebarContainer>
        <StudentSidebar />
        <Content>
          <ProfileContent>
            <ProfileHeader>Profile</ProfileHeader>
            <ProfileDetail>
              <Label>Name:</Label>
              <Value>{studentInfo.name}</Value>
            </ProfileDetail>
            <ProfileDetail>
              <Label>Name:</Label>
              <Value>{studentInfo.dob}</Value>
            </ProfileDetail>
            <ProfileDetail>
              <Label>Email:</Label>
              <Value>{studentInfo.email}</Value>
            </ProfileDetail>
            <ProfileDetail>
              <Label>Phone:</Label>
              <Value>{studentInfo.qualification}</Value>
            </ProfileDetail>
            <ProfileDetail>
              <Label>Name:</Label>
              <Value>{studentInfo.address}</Value>
            </ProfileDetail>
          </ProfileContent>
        </Content>
      </SidebarContainer>
    </ProfileContainer>
  );
}

export default StudentProfile;
