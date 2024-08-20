import { useState, useEffect } from 'react';
import TeacherSidebar from './TeacherSidebar';
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

const TeacherExam = () => {
  return (
    <ExamChartContainer>
      <TeacherSidebar />
      <Content>
        <ExamHeader>Exam Details</ExamHeader>
        <ExamForm>
          <FormLabel>Name:</FormLabel>
          <FormInput type="text" required />
          <FormLabel>Registration No:</FormLabel>
          <FormInput type="text" required />
          <FormLabel>Class:</FormLabel>
          <FormInput type="text" required />
          {/* TODO select option */}
          {/* <select name="" id="">
            <option value="">select</option>
            <option value="Nursey">Nursey</option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select> */}
          <FormLabel>Marks:</FormLabel>
          <FormInput type="number" required />
          <AddButton type="submit">Add Result</AddButton>
        </ExamForm>
        <h2>Total Marks</h2>
        <h3> Exam Details</h3>
      </Content>
    </ExamChartContainer>
  );
};

export default TeacherExam;
