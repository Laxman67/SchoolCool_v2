import { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

import StudentSidebar from './StudentSidebar';
import {
  PerformanceContainer,
  Content,
  PerformanceHeader,
  SidebarContainer,
  PerformanceInfo,
  PerformanceGraphContainer,
  TotalMarks,
} from '../../styles/PerformanceStyles';

function StudentPerformance() {
  const studentPerformanceData = {
    month: ['Jan', 'feb', 'Mar', 'Apr', 'May', 'June'],
    marks: [90, 87, 84, 92, 90, 79],
    totalMarks: 520,
  };

  const lineChartData = {
    labels: studentPerformanceData.month,
    datasets: [
      {
        label: 'Performance Trends',
        fill: true,
        backgroundColor: '#007bff',
        borderColor: '#007bff',
        data: studentPerformanceData.marks,
      },
    ],
  };
  return (
    <PerformanceContainer>
      <SidebarContainer>
        <StudentSidebar />
      </SidebarContainer>
      <Content>
        <PerformanceHeader>Performance</PerformanceHeader>
        <PerformanceInfo>
          <PerformanceGraphContainer>
            <Line
              data={lineChartData}
              options={{
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                      },
                    },
                  ],
                },
              }}
            />
          </PerformanceGraphContainer>
          <TotalMarks>
            Total Marks:{' '}
            {studentPerformanceData.marks.reduce((acc, curr) => acc + curr, 0)}
          </TotalMarks>
        </PerformanceInfo>
      </Content>
    </PerformanceContainer>
  );
}

export default StudentPerformance;
