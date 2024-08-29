import { useState, useEffect } from 'react';
import SideBar from '../Admin/Sidebar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

import {
  StudentsContainer,
  Content,
  StudentsContent,
  StudentsHeader,
  StudentList,
  StudentItem,
  AddStudentForm,
  AddStudentButton,
  AddStudentInput,
} from '../../styles/StudentsStyles';

let BACKEND_URL = '';
if (import.meta.env.MODE === 'development') {
  BACKEND_URL = 'http://localhost:4000/api/v1';
  // console.log(BACKEND_URL);
} else {
  BACKEND_URL = import.meta.env.VITE_REACT_API_URL;
  // console.log(BACKEND_URL);
}

const Students = () => {
  const [newStudent, setNewStudent] = useState({
    name: '',
    registrationNumber: '',
    grade: '',
  });
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const response = await axios.get(`${BACKEND_URL}/students`);
    setStudents(response.data.data);
    console.log(students);
  };

  const handleAddStudent = async (e) => {
    e.preventDefault();

    if (newStudent !== '') {
      try {
        const response = await axios.post(`${BACKEND_URL}/students`, {
          name: newStudent.name,
          registrationNumber: newStudent.registrationNumber,
          grade: newStudent.grade,
        });
        setNewStudent('');
        toast.success('Student Added');

        console.log('Response data :', response.data.message);
      } catch (error) {
        console.log('Error While Feching Classes', error);
      }
    }
  };

  console.log(students);

  return (
    <StudentsContainer>
      <SideBar />
      <Content>
        <StudentsContent>
          <ToastContainer />
          <StudentsHeader>Add Student</StudentsHeader>

          <StudentsContainer>
            <StudentsHeader>
              <AddStudentForm onSubmit={handleAddStudent}>
                <AddStudentInput
                  type="text"
                  placeholder="Enter Student Name"
                  value={newStudent.name}
                  onChange={(e) => {
                    setNewStudent((prev) => ({
                      ...prev,
                      name: e.target.value, // Update only the name property
                    }));
                  }}
                />
                <AddStudentInput
                  type="text"
                  placeholder="Enter Registration Number"
                  value={newStudent.registrationNumber}
                  onChange={(e) => {
                    setNewStudent((prev) => ({
                      ...prev,
                      registrationNumber: e.target.value, // Update only the name property
                    }));
                  }}
                />
                <AddStudentInput
                  type="text"
                  placeholder="Enter Grade "
                  value={newStudent.grade}
                  onChange={(e) => {
                    setNewStudent((prev) => ({
                      ...prev,
                      grade: e.target.value, // Update only the name property
                    }));
                  }}
                />

                <AddStudentButton>Add Student</AddStudentButton>
              </AddStudentForm>

              {/* TODO  Complete List of Students view*/}
              <StudentList>
                {students &&
                  students.map((student, index) => (
                    <StudentItem key={index}>
                      {student.name} with {student.grade} Grade
                    </StudentItem>
                  ))}
              </StudentList>
            </StudentsHeader>
          </StudentsContainer>
        </StudentsContent>
      </Content>
    </StudentsContainer>
  );
};

export default Students;
