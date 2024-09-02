import { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  AssignmentsContainer,
  Content,
  AssignmentsContent,
  AssignmentsHeader,
  AssignmentList,
  AssignmentItem,
  AddAssignmentForm,
  AddAssignmentInput,
  AddAssignmentTextArea,
  AddAssignmentButton,
  SidebarContainer,
  AssignmentCard,
  AssignmentTitle,
  AssignmentDescription,
  AssignmentButton,
  AssignmentDoneMessage,
} from '../../styles/AssignmentsStyles';

let BACKEND_URL = import.meta.env.VITE_API_URL;

const Assignment = () => {
  const [newAssignment, setNewAssignment] = useState({
    title: '',
    description: '',
    grade: '',
    deadline: '',
  });
  const [assignment, setAssignment] = useState();

  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/assignments`);
      setAssignment(response.data.assignment);
      console.log(assignment);
    } catch (error) {
      toast.error('Error While Feching Assignments', error);
      console.error('Error fetching Assignments:', error);
    }
  };

  const handleAddAssignment = async (e) => {
    e.preventDefault();

    if (
      newAssignment.title &&
      newAssignment.description &&
      newAssignment.grade &&
      newAssignment.deadline
    ) {
      try {
        await axios.post(`${BACKEND_URL}/assignments`, {
          title: newAssignment.title,
          description: newAssignment.description,
          grade: newAssignment.grade,
          deadline: newAssignment.deadline,
        });

        // Resetting teacher to initial state after successful submission
        setNewAssignment({
          title: '',
          description: '',
          grade: '',
          deadline: '',
        });

        toast.success('Assignment Added');
        fetchAssignments(); // Refresh the teacher list
      } catch (error) {
        console.log('Error While Adding Asssignments', error);
        toast.error('Failed to add Assignments');
      }
    } else {
      toast.error('Please fill in all fields');
    }
  };
  return (
    <AssignmentsContainer>
      <Sidebar />
      <Content>
        <ToastContainer />
        <AssignmentsContent>
          <AssignmentsHeader>Assignments</AssignmentsHeader>
          <>
            <AddAssignmentForm onSubmit={handleAddAssignment}>
              <AddAssignmentInput
                type='text'
                placeholder='Enter Assignment Title'
                value={newAssignment.title}
                onChange={(e) =>
                  setNewAssignment((prev) => ({
                    ...prev,
                    title: e.target.value,
                  }))
                }
              />
              <AddAssignmentTextArea
                placeholder='Enter Description'
                value={newAssignment.description}
                onChange={(e) =>
                  setNewAssignment((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
              />

              <AddAssignmentInput
                type='text'
                placeholder=' Assignment Grade'
                value={newAssignment.grade}
                onChange={(e) =>
                  setNewAssignment((prev) => ({
                    ...prev,
                    grade: e.target.value,
                  }))
                }
              />

              <AddAssignmentInput
                type='date'
                placeholder='Enter Assignment DeadLine'
                value={newAssignment.deadline}
                onChange={(e) =>
                  setNewAssignment((prev) => ({
                    ...prev,
                    deadline: e.target.value,
                  }))
                }
              />
              <AddAssignmentButton type='submit'>
                Add Assignment
              </AddAssignmentButton>
            </AddAssignmentForm>
          </>

          <AssignmentList>
            <div style={styles.assignmentList}>
              {assignment && assignment.length > 0 ? (
                assignment.map(
                  ({ description, title, grade, deadline }, index) => (
                    <div key={index} style={styles.assignmentItem}>
                      <h3 style={styles.assignmentTitle}>{title}</h3>
                      <p style={styles.assignmentDescription}>
                        <strong>Description:</strong> {description}
                      </p>
                      <p style={styles.assignmentGrade}>
                        <strong>Grade:</strong> {grade}
                      </p>
                      <p style={styles.assignmentDeadline}>
                        <strong>Deadline:</strong> {deadline}
                      </p>
                    </div>
                  )
                )
              ) : (
                <p style={styles.noAssignments}>No assignments available</p>
              )}
            </div>
          </AssignmentList>
        </AssignmentsContent>
      </Content>
    </AssignmentsContainer>
  );
};

// Specific for Assignment that are displaying
const styles = {
  assignmentList: {
    padding: '20px',
    maxWidth: '600px',
  },
  assignmentItem: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    marginBottom: '15px',
    backgroundColor: '#fafafa',
    boxShadow: '2px 2px 7px rgba(0,0,0,.5),-2px -2px 0px white',
  },
  assignmentTitle: {
    color: '#4a90e2',
    margin: '0 0 10px 0',
  },
  assignmentDescription: {
    margin: '0 0 10px 0',
  },
  assignmentGrade: {
    margin: '0 0 10px 0',
  },
  assignmentDeadline: {
    margin: '0',
  },
  noAssignments: {
    textAlign: 'center',
    color: '#999',
  },
};

export default Assignment;
