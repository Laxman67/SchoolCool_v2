import { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

let BACKEND_URL = import.meta.env.VITE_API_URL;

const Exam = () => {
  const [newExam, setNewExam] = useState({
    name: '',
    registrationNumber: '',
    grade: '',
    marks: '',
  });
  const [examData, setExamData] = useState([]);
  useEffect(() => {
    fetchExams();
  }, []);

  const fetchExams = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/exam`);
      setExamData(response.data.exam);
      console.log(examData);
    } catch (error) {
      toast.error('Error While Feching Exams', error);
      console.error('Error fetching Exams:', error);
    }
  };

  const handleAddExam = async (e) => {
    e.preventDefault();

    if (
      newExam.name &&
      newExam.registrationNumber &&
      newExam.grade &&
      newExam.marks
    ) {
      try {
        await axios.post(`${BACKEND_URL}/exam`, {
          name: newExam.name,
          registrationNumber: newExam.registrationNumber,
          grade: newExam.grade,
          marks: newExam.marks,
        });

        // Resetting teacher to initial state after successful submission
        setNewExam({
          name: '',
          registrationNumber: '',
          grade: '',
          marks: '',
        });

        toast.success('Exam Added');
        fetchExams(); // Refresh the teacher list
      } catch (error) {
        console.log('Error While Adding Exam', error);
        toast.error('Failed to add Exams');
      }
    } else {
      toast.error('Please fill in all fields');
    }
  };

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
          <ToastContainer />
          <ExamHeader>Exam Details </ExamHeader>
          <ExamForm onSubmit={handleAddExam}>
            <FormLabel for='name'>Name :</FormLabel>
            <FormInput
              type='text'
              required
              id='name'
              value={newExam.name}
              onChange={(e) =>
                setNewExam((prev) => ({
                  ...prev,
                  name: e.target.value,
                }))
              }
            />
            <FormLabel for='regd_num'>Registration Number :</FormLabel>
            <FormInput
              type='text'
              required
              id='regd_num'
              value={newExam.registrationNumber}
              onChange={(e) =>
                setNewExam((prev) => ({
                  ...prev,
                  registrationNumber: e.target.value,
                }))
              }
            />
            <FormLabel for='grade'>Grade :</FormLabel>
            <FormInput
              type='text'
              required
              id='grade'
              value={newExam.grade}
              onChange={(e) =>
                setNewExam((prev) => ({
                  ...prev,
                  grade: e.target.value,
                }))
              }
            />
            <FormLabel for='marks'>Marks :</FormLabel>
            <FormInput
              type='number'
              required
              id='marks'
              value={newExam.marks}
              onChange={(e) =>
                setNewExam((prev) => ({
                  ...prev,
                  marks: e.target.value,
                }))
              }
            />

            <AddButton type='submit'>Add Exam</AddButton>
          </ExamForm>

          <h2>Total Marks :</h2>
          <h3>Exam Details :{calculateTotalMarks(examData)} </h3>

          <>
            {/* Exam Result  */}
            <div style={styles.examResult}>
              {examData && examData.length > 0 ? (
                examData.map((exam, index) => (
                  <div key={index} style={styles.examItem}>
                    <p style={styles.examDetail}>
                      <strong>Name:</strong> {exam.name}
                    </p>
                    <p style={styles.examDetail}>
                      <strong>Registration Number:</strong>{' '}
                      {exam.registrationNumber}
                    </p>
                    <p style={styles.examDetail}>
                      <strong>Grade:</strong> {exam.grade}
                    </p>
                    <p style={styles.examDetail}>
                      <strong>Marks:</strong> {exam.marks}
                    </p>
                  </div>
                ))
              ) : (
                <p style={styles.noResults}>No exam results available</p>
              )}
            </div>
          </>
        </Content>
      </SidebarContainer>
    </ExamContainer>
  );
};

const styles = {
  examResult: {
    padding: '20px',
    width: '400px',
    margin: '10px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#fafafa',
  },
  examItem: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    margin: '5px',
  },
  examDetail: {
    margin: '0 0 10px 0',
    fontSize: '16px',
    color: '#333',
  },
  noResults: {
    textAlign: 'center',
    color: '#999',
  },
};

export default Exam;
