import { useState, useEffect } from 'react';
import axios from 'axios';

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
  const url = `${import.meta.env.VITE_BACKEND_URL}/api/v1`;
  const BACKEND_URL = url || 'http://localhost:4000/api/v1';

  const [isOpen, setIsOpen] = useState(true);
  const [annoucements, setAnnoucements] = useState([]);
  const [studentPerformance, setStudentPerformance] = useState([]);

  useEffect(() => {
    // fetchEvents();

    fetchAnnoucements();
    fetchStudentPerformance();
  }, []);

  // const fetchEvents = async () => {
  //   try {
  //     const response = await axios.get(`${BACKEND_URL}/events`);
  //     // console.log(response.data.data);
  //     setAnnoucements(response.data.data || []);
  //   } catch (error) {
  //     console.log(`Error Occured while fteching events ${error}`);
  //   }
  // };

  const fetchAnnoucements = async () => {
    const response = await axios.get(`${BACKEND_URL}/announcement`);
    setAnnoucements(response.data.data);
  };

  const fetchStudentPerformance = async () => {
    const response = await axios.get(`${BACKEND_URL}/students`);
    setStudentPerformance(response.data.data);
  };

  // TODO remove it
  console.log(annoucements);
  console.log(studentPerformance);
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
            <Performance studentPerformance={studentPerformance} />
            <Annoucement annoucements={annoucements} />
          </BottomContent>
        </Content>
      </AdminDashboardContainer>
    </>
  );
};

export default AdminDashboard;
