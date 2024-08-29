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

let BACKEND_URL = '';
if (import.meta.env.MODE === 'development') {
  BACKEND_URL = 'http://localhost:4000/api/v1';
  // console.log(BACKEND_URL);
} else {
  BACKEND_URL = import.meta.env.VITE_REACT_API_URL;
  // console.log(BACKEND_URL);
}

const Classes = () => {
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
                type="text"
                value={className}
                placeholder="Enter Class Name"
                onChange={(e) => {
                  setClassName(e.target.value);
                }}
                // {...register('class-name')}
              />
              <AddClassButton type="submit">Add Class</AddClassButton>
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
