import { useState, useEffect } from 'react';
import SideBar from '../Admin/Sidebar';
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
} from '../../styles/SettingsProfileStyles';

const SettingProfile = () => {
  return (
    <ProfileContainer>
      <SidebarContainer>
        <SideBar />
      </SidebarContainer>

      <Content>
        <ProfileHeader>Settings </ProfileHeader>
      </Content>
    </ProfileContainer>
  );
};

export default SettingProfile;
