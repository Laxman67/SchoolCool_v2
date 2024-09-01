import { useState, useEffect } from 'react';
import SideBar from '../Admin/Sidebar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import ProfileModal from './ProfileModal'; // Import the ProfileModal component

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

let BACKEND_URL = import.meta.env.VITE_API_URL;

const Students = () => {
  const [newStudent, setNewStudent] = useState({
    name: '',
    registrationNumber: '',
    grade: '',
  });
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null); // State for selected student

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/students`);
      setStudents(response.data.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const handleAddStudent = async (e) => {
    e.preventDefault();

    if (newStudent.name && newStudent.registrationNumber && newStudent.grade) {
      try {
        await axios.post(`${BACKEND_URL}/students`, {
          name: newStudent.name,
          registrationNumber: newStudent.registrationNumber,
          grade: newStudent.grade,
        });

        setNewStudent({
          name: '',
          registrationNumber: '',
          grade: '',
        });

        toast.success('Student Added');
        fetchStudents(); // Refresh the student list
      } catch (error) {
        console.log('Error while adding student:', error);
        toast.error('Failed to add student');
      }
    } else {
      toast.error('Please fill in all fields');
    }
  };

  const handleStudentClick = (student) => {
    setSelectedStudent(student); // Set the selected student to display in the modal
  };

  const closeModal = () => {
    setSelectedStudent(null); // Close the modal
  };

  return (
    <StudentsContainer>
      <SideBar />
      <Content>
        <StudentsContent>
          <ToastContainer />
          <StudentsHeader>Add Student</StudentsHeader>
          <AddStudentForm onSubmit={handleAddStudent}>
            <AddStudentInput
              type='text'
              placeholder='Enter Student Name'
              value={newStudent.name}
              onChange={(e) =>
                setNewStudent((prev) => ({ ...prev, name: e.target.value }))
              }
            />
            <AddStudentInput
              type='text'
              placeholder='Enter Registration Number'
              value={newStudent.registrationNumber}
              onChange={(e) =>
                setNewStudent((prev) => ({
                  ...prev,
                  registrationNumber: e.target.value,
                }))
              }
            />
            <AddStudentInput
              type='text'
              placeholder='Enter Grade'
              value={newStudent.grade}
              onChange={(e) =>
                setNewStudent((prev) => ({ ...prev, grade: e.target.value }))
              }
            />
            <AddStudentButton>Add Student</AddStudentButton>
          </AddStudentForm>

          <StudentsHeader>Students List</StudentsHeader>
          <StudentList>
            {students.length > 0 ? (
              students.map((student, index) => (
                <StudentItem
                  key={index}
                  onClick={() => handleStudentClick(student)}
                >
                  <strong>{student.name}</strong> with Registration Number{' '}
                  <em>{student.registrationNumber}</em> in Grade{' '}
                  <em>{student.grade}</em>
                </StudentItem>
              ))
            ) : (
              <StudentItem>No students found</StudentItem>
            )}
          </StudentList>

          {/* Modal for displaying student profile */}
          {selectedStudent && (
            <ProfileModal student={selectedStudent} onClose={closeModal} />
          )}
        </StudentsContent>
      </Content>
    </StudentsContainer>
  );
};

export default Students;
