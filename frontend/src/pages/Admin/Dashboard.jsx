import { useState, useEffect } from 'react';
import axios from 'axios';

import Sidebar from './Sidebar';
import Annoucement from './Announcement';
import Performance from './Performance';

import {
  AdminDashboardContainer,
  Content,
  TopContent,
  BottomContent,
  Section,
  SectionTitle,
  Card,
  CardTitle,
  CardContainer,
  CardContent,
} from '../../styles/DashboardStyles';
const AdminDashboard = () => {
  const BACKEND_URL = 'http://localhost:4000/api/v1';
  const [isOpen, setIsOpen] = useState(true);
  const [events, setEvents] = useState([]);
  const [studentPerformance, setStudentPerformance] = useState([]);

  useEffect(() => {
    fetchEvents();
    fetchAnnoucements();
    fetchStudentPerformance();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/events`);
      // console.log(response.data.data);
      setEvents(response.data.data || []);
    } catch (error) {
      console.log(`Error Occured while fteching events ${error}`);
    }
  };
  const fetchAnnoucements = async () => {
    const response = await axios.get(`${BACKEND_URL}/announcement`);
    setEvents(response.data.data);
  };
  const fetchStudentPerformance = async () => {};

  console.log(events);
  console.log(events);
  return (
    <>
      <AdminDashboardContainer>
        <Content>
          <TopContent>
            <Section>
              <SectionTitle>Overview</SectionTitle>
              <CardContainer>
                <Card>
                  <CardTitle>Total Students</CardTitle>
                  <CardContent>500</CardContent>
                </Card>
                <Card>
                  <CardTitle>Total eacher</CardTitle>
                  <CardContent>50</CardContent>
                </Card>
                <Card>
                  <CardTitle>Total Classess</CardTitle>
                  <CardContent>20</CardContent>
                </Card>
              </CardContainer>
            </Section>
            <Section>
              <SectionTitle>All Events</SectionTitle>
            </Section>
          </TopContent>

          <BottomContent>
            <Performance />
            <Annoucement />
          </BottomContent>
        </Content>
      </AdminDashboardContainer>
    </>
  );
};

export default AdminDashboard;
