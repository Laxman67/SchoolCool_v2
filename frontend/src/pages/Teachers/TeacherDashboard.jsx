import { useState, useEffect } from 'react';
import TeacherSidebar from './TeacherSidebar';
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
  StudentDashboardContainer,
  TeacherDashboardContainer,
} from '../../styles/DashboardStyles';

const TeacherDashboard = () => {
  return (
    <AdminDashboardContainer>
      <TeacherSidebar />

      <Content>
        <Section>
          <SectionTitle>Overview</SectionTitle>
          <CardContainer>
            <Card>
              <CardTitle>Total Students</CardTitle>
              <CardContent>500</CardContent>
            </Card>
            <Card>
              <CardTitle>Total Teachers</CardTitle>
              <CardContent>21</CardContent>
            </Card>
            <Card>
              <CardTitle>Total Classes</CardTitle>
              <CardContent>49</CardContent>
            </Card>
          </CardContainer>
        </Section>
        <Section>
          <SectionTitle>Recent Activity </SectionTitle>
        </Section>
      </Content>
    </AdminDashboardContainer>
  );
};

export default TeacherDashboard;
