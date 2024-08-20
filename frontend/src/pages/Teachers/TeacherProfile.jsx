import { useState, useEffect } from 'react';
import TeacherSidebar from './TeacherSidebar';
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
} from '../../styles/SettingsProfileStyles';

const TeacherProfile = () => {
  const teacherInfo = {
    name: 'Sahil Chauhan',
    email: 'sahilchauhan@gmail.com',
    phone: '714851241',
    address: 'B-122A , Near C.T Hospital, City ',
    qualification: 'Master of Computer Application',
  };

  return (
    <ProfileContainer>
      <TeacherSidebar />

      <Content>
        <ProfileHeader>Profile Details </ProfileHeader>
        <ProfileDetails>
          <ProfileDetail>
            <ProfileLabel>Name:</ProfileLabel>
            <ProfileInfo>{teacherInfo.name}</ProfileInfo>
            <ProfileLabel>Email:</ProfileLabel>
            <ProfileInfo>{teacherInfo.email}</ProfileInfo>
            <ProfileLabel>Phone:</ProfileLabel>
            <ProfileInfo>{teacherInfo.phone}</ProfileInfo>
            <ProfileLabel>Address:</ProfileLabel>
            <ProfileInfo>{teacherInfo.address}</ProfileInfo>
            <ProfileLabel>Qualification:</ProfileLabel>
            <ProfileInfo>{teacherInfo.qualification}</ProfileInfo>
          </ProfileDetail>
          <EditButton>Update Profile</EditButton>
        </ProfileDetails>
      </Content>
    </ProfileContainer>
  );
};

export default TeacherProfile;
