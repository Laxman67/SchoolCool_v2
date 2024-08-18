import { useState, useEffect, useRef, createRef } from 'react';
import axios from 'axios';
import StudentSidebar from './StudentSidebar';
import { Line, Doughnut } from 'react-chartjs-2';

import {
  ExamContainer,
  SidebarContainer,
  Content,
  ExamHeader,
  ExamForm,
  FormLabel,
  FormInput,
  AddButton,
  ExamResultsContainer,
  ExamSubject,
  ExamResult,
  ExamChartContainer,
} from '../../styles/ExamStyles';
function StudentExam() {
  const studentExamData = {
    subjects: ['Math', 'Science', 'English', 'History', 'Economic'],
    result: [80, 75, 79, 92, 98],
  };

  // Bar Char Data
  const barChartData = {
    labels: studentExamData.subjects,
    datasets: [
      {
        labels: 'Exaam Results',
        backgroundColor: '#007bff',
        boderColor: '#007bff',
        boderWidth: '3px ',
        fill: 'true',
        hoverBackgroundColor: '#0056b3',
        borderColor: '#0056b3',
        data: studentExamData.result,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        type: 'linear',
        beginAtZero: true,
        max: 100,
      },
    },
  };
  return (
    <ExamChartContainer>
      <SidebarContainer>
        <StudentSidebar />
      </SidebarContainer>
      <Content>
        <ExamHeader>Exam Results</ExamHeader>
        <ExamResultsContainer>
          {studentExamData.subjects.map((subject, index) => (
            <div key={index}>
              <ExamSubject>{subject}</ExamSubject>
              <ExamResult>Score: {studentExamData.result[index]}%</ExamResult>
            </div>
          ))}
          <ExamChartContainer>
            <Line data={barChartData} options={chartOptions} />
          </ExamChartContainer>
        </ExamResultsContainer>
      </Content>
    </ExamChartContainer>
  );
}

export default StudentExam;
