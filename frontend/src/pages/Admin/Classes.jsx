import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  ClassesContainer,
  Content,
  ClassesContent,
  ClassList,
  ClassItem,
  AddClassForm,
  AddClassInput,
  AddClassButton,
  ClassContainer,
  SidebarContainer,
  ClassHeader,
  GradeHeader,
} from '../../styles/ClassesStyles';
import SideBar from '../Admin/Sidebar';
import axios from 'axios';

let BACKEND_URL = import.meta.env.VITE_API_URL;

const Classes = () => {
  const [className, setClassName] = useState('');
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetchClasses();
  }, [className]);

  const fetchClasses = async () => {
    const response = await axios.get(`${BACKEND_URL}/classes`);
    setClasses(response.data.data);
  };

  const handleAddClass = async (e) => {
    e.preventDefault();

    if (className !== '') {
      try {
        const response = await axios.post(`${BACKEND_URL}/classes`, {
          grade: className,
        });
        setClassName('');
        toast.success('Data Added');

        console.log('Response data :', response.data.message);
      } catch (error) {
        console.log('Error While Feching Classes', error);
      }
    }
  };

  return (
    <>
      <ClassesContainer>
        <SideBar />
        <Content>
          <ToastContainer />
          <ClassesContent>
            <ClassHeader>Classes</ClassHeader>
            <AddClassForm onSubmit={handleAddClass}>
              <AddClassInput
                type='text'
                value={className}
                placeholder='Enter Class Name'
                onChange={(e) => {
                  setClassName(e.target.value);
                }}
                // {...register('class-name')}
              />
              <AddClassButton type='submit'>Add Class</AddClassButton>
            </AddClassForm>

            <ClassList>
              <div style={styles.classList}>
                {classes && classes.length > 0 ? (
                  classes.map((item, index) => (
                    <div key={index} style={styles.classItem}>
                      {item.grade}
                    </div>
                  ))
                ) : (
                  <p style={styles.noClasses}>No classes available</p>
                )}
              </div>
              );
            </ClassList>
          </ClassesContent>
        </Content>
      </ClassesContainer>
    </>
  );
};

const styles = {
  classList: {
    padding: '20px',
    maxWidth: '600px',
    margin: 'auto',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#fafafa',
  },
  classItem: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '10px',
    marginBottom: '10px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    fontSize: '16px',
    color: '#333',
  },
  noClasses: {
    textAlign: 'center',
    color: '#999',
  },
};

export default Classes;
