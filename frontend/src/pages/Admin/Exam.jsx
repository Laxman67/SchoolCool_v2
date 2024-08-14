import { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';

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
const Exam = () => {
  let examData = [
    { id: 1, marks: 10 },
    { id: 2, marks: 10 },
    { id: 3, marks: 20 },
  ];
  const calculateTotalMarks = (examData) => {
    let total = 0;
    for (let i = 0; i < examData.length; i++) {
      total += examData[i].marks;
    }
    return total;
  };
  return (
    <ExamContainer>
      <SidebarContainer>
        <Sidebar />
        <Content>
          <ExamHeader>Exam Details </ExamHeader>
          <ExamForm>
            <FormLabel for="name">Name :</FormLabel>
            <FormInput type="text" required id="name" />
            <FormLabel for="regd_num">Registration Number :</FormLabel>
            <FormInput type="text" required id="regd_num" />
            <FormLabel for="marks">Marks :</FormLabel>
            <FormInput type="number" required id="marks" />

            <AddButton type="submit">Add Exam</AddButton>
          </ExamForm>

          <h2>Total Marks :</h2>
          <h3>Exam Details :{calculateTotalMarks(examData)} </h3>
          <ul></ul>
        </Content>
      </SidebarContainer>
    </ExamContainer>
  );
};

export default Exam;
