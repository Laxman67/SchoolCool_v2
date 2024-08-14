import { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
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

const Announcement = () => {
  return (
    <AnnouncementContainer>
      <Sidebar />
      <Content>
        <AnnouncementContent>
          <Title>Announcements</Title>
          <AnnouncementForm>
            <FormGroup>
              <Label htmlFor="annoucement_name">Announcement : </Label>
              <textarea
                id="annoucement_name"
                cols="50"
                rows="4"
                placeholder="Annoucement"
              ></textarea>
            </FormGroup>
            <Button type="submit">Send Annoucement</Button>
          </AnnouncementForm>
        </AnnouncementContent>

        {/* To Display Annoucements  */}
        <h2>Annoucements </h2>
        <AnnouncementList></AnnouncementList>
      </Content>
    </AnnouncementContainer>
  );
};

export default Announcement;
