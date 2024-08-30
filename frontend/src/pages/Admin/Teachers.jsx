import { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  TeachersContainer,
  TeachersContent,
  TeachersHeader,
  TeacherList,
  TeacherItem,
  AddTeacherForm,
  AddTeacherInput,
  AddTeacherButton,
} from '../../styles/TeachersStyles';

let BACKEND_URL = '';
if (import.meta.env.MODE === 'development') {
  BACKEND_URL = 'http://localhost:4000/api/v1';
} else {
  BACKEND_URL = import.meta.env.VITE_REACT_API_URL;
}

const Teachers = () => {
  const [newTeacher, setNewTeacher] = useState({
    name: '',
    email: '',
    subject: '',
  });
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetchTeacher();
  }, []);

  const fetchTeacher = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/teachers`);
      setTeachers(response.data.data);
    } catch (error) {
      console.error('Error fetching Teacher:', error);
    }
  };

  const handleAddTeacher = async (e) => {
    e.preventDefault();

    if (newTeacher.name && newTeacher.email && newTeacher.subject) {
      try {
        await axios.post(`${BACKEND_URL}/teachers`, {
          name: newTeacher.name,
          email: newTeacher.email,
          subject: newTeacher.subject,
        });

        // Resetting teacher to initial state after successful submission
        setNewTeacher({
          name: '',
          email: '',
          subject: '',
        });

        toast.success('Teacher Added');
        fetchTeacher(); // Refresh the teacher list
      } catch (error) {
        console.log('Error While Adding Teacher', error);
        toast.error('Failed to add Teacher');
      }
    } else {
      toast.error('Please fill in all fields');
    }
  };

  return (
    <TeachersContainer>
      <Sidebar />
      <TeachersContent>
        <ToastContainer />
        <TeachersHeader>Add a New Teacher</TeachersHeader>
        <AddTeacherForm onSubmit={handleAddTeacher}>
          <AddTeacherInput
            type='text'
            placeholder='Enter Teacher Name'
            value={newTeacher.name}
            onChange={(e) =>
              setNewTeacher((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          <AddTeacherInput
            type='email'
            placeholder='Enter Email'
            value={newTeacher.email}
            onChange={(e) =>
              setNewTeacher((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <AddTeacherInput
            type='text'
            placeholder='Enter Subject'
            value={newTeacher.subject}
            onChange={(e) =>
              setNewTeacher((prev) => ({ ...prev, subject: e.target.value }))
            }
          />
          <AddTeacherButton>Add Teacher</AddTeacherButton>
        </AddTeacherForm>

        <TeachersHeader>Teachers List</TeachersHeader>
        <TeacherList>
          {teachers.length > 0 ? (
            teachers.map((teacher, index) => (
              <TeacherItem key={index}>
                <strong>{teacher.name}</strong> teaches{' '}
                <em>{teacher.subject}</em> (
                <a href={`mailto:${teacher.email}`}>{teacher.email}</a>)
              </TeacherItem>
            ))
          ) : (
            <TeacherItem>No teachers found</TeacherItem>
          )}
        </TeacherList>
      </TeachersContent>
    </TeachersContainer>
  );
};

export default Teachers;
