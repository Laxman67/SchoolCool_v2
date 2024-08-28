import { useState, useEffect } from 'react';
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

const Classes = () => {
  const BACKEND_URL =
    'http://localhost:4000/api/v1' || import.meta.env.VITE_REACT_API_URL;
  const [className, setClassName] = useState('');
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetchClasses();
  }, []);

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
          <ClassesContent>
            <ClassHeader>Classes</ClassHeader>
            <AddClassForm>
              <AddClassInput
                type="text"
                value={className}
                placeholder="Enter Class Name"
                onChange={(e) => {
                  setClassName(e.target.value);
                }}
                // {...register('class-name')}
              />
              <AddClassButton
                type="submit"
                onClick={(e) => {
                  handleAddClass(e);
                }}
              >
                Add Class
              </AddClassButton>
            </AddClassForm>

            {/* All the classes */}
            <ClassList></ClassList>
          </ClassesContent>
        </Content>
      </ClassesContainer>
    </>
  );
};

export default Classes;
