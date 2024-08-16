import { useState, useEffect } from 'react';
import axios from 'axios';

import StudentSidebar from '../../pages/Students/StudentSidebar';

import {
  Content,
  TopContent,
  BottomContent,
  Section,
  SectionTitle,
  Card,
  CardTitle,
  CardContainer,
  CardContent,
  StudentDashboardContainer,
} from '../../styles/DashboardStyles';

const StudentDashboard = () => {
  return (
    <StudentDashboardContainer>
      <StudentSidebar />
      <Content>
        <Section>
          <SectionTitle>Overview</SectionTitle>
          <CardContainer>
            <Card>
              <CardTitle>Assignments</CardTitle>
              <CardContent>5</CardContent>
            </Card>
            <Card>
              <CardTitle>Performance </CardTitle>
              <CardContent>530</CardContent>
            </Card>
            <Card>
              <CardTitle>Term</CardTitle>
              <CardContent>2</CardContent>
            </Card>
          </CardContainer>
        </Section>

        <Section>
          <SectionTitle>Recent Activity</SectionTitle>
        </Section>

        <Section>
          <SectionTitle>Upcoming Event</SectionTitle>
        </Section>
      </Content>
    </StudentDashboardContainer>
  );
};

export default StudentDashboard;
