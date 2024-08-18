import { useState, useEffect } from 'react';
import axios from 'axios';

import StudentSidebar from './StudentSidebar';
import {
  AnnouncementContainer,
  Content,
  Title,
  AnnouncementForm,
  FormGroup,
  TextArea,
  Label,
  AnnouncementList,
  Button,
  AnnouncementItem,
  AnnouncementContent,
  SidebarContainer,
  AnnouncementHeader,
  AnnouncementTitle,
} from '../../styles/AnnouncementStyles';
function StudentAnnouncements() {
  return (
    <AnnouncementContainer>
      <SidebarContainer>
        <StudentSidebar />
        <Content>
          <AnnouncementContent>
            <AnnouncementHeader>Announcements</AnnouncementHeader>
            <AnnouncementList>
              {/* TODO we need to map through the annoucements */}
            </AnnouncementList>
          </AnnouncementContent>
        </Content>
      </SidebarContainer>
    </AnnouncementContainer>
  );
}

export default StudentAnnouncements;
