import { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import {
  PerformanceContainer,
  Content,
  PerformanceContent,
  PerformanceHeader,
  SchoolPerformance,
  IndividualPerformance,
} from '../../styles/PerformanceStyles';

const Performance = () => {
  // Sample  Data for Whole School Performance data
  const schoolPerformanceData = {
    averageScore: 85,
    totalStudent: 100,
  };

  const individualPerformanceData = [
    { studentId: 1, name: 'Laxman', score: 90 },
    { studentId: 2, name: 'Maya', score: 85 },
    { studentId: 3, name: 'Rahul', score: 92 },
    { studentId: 4, name: 'Priya', score: 88 },
    { studentId: 5, name: 'Amit', score: 79 },
    { studentId: 6, name: 'Sneha', score: 95 },
    { studentId: 7, name: 'Ravi', score: 81 },
    { studentId: 8, name: 'Anjali', score: 87 },
    { studentId: 9, name: 'Rohan', score: 93 },
    { studentId: 10, name: 'Kavya', score: 89 },
  ];

  return (
    <PerformanceContainer>
      <Sidebar />

      <Content>
        <PerformanceContent>
          <PerformanceHeader>School Peroformance </PerformanceHeader>
          <SchoolPerformance>
            <p>Average Data:{schoolPerformanceData.averageScore} </p>
            <p>Total Students: {schoolPerformanceData.totalStudent}</p>
          </SchoolPerformance>

          <PerformanceHeader>Individual Peroformance </PerformanceHeader>
          <IndividualPerformance>
            {/* Individuals Data */}
            {individualPerformanceData.map((student) => {
              return (
                <p key={student.id}>
                  {student.name} :{student.score}
                </p>
              );
            })}
          </IndividualPerformance>
        </PerformanceContent>
      </Content>
    </PerformanceContainer>
  );
};

export default Performance;
