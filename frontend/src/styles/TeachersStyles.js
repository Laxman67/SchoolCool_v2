import styled from 'styled-components';

// Define color variables for a consistent color scheme
const colors = {
  primary: '#4CAF50', // A pleasing green color for primary actions
  secondary: '#f3f3f3', // Light gray background color for sections
  accent: '#FFC107', // Accent color for highlights or important elements
  text: '#333', // Dark gray text color
  border: '#ddd', // Light border color for subtle separation
  white: '#fff', // White color for backgrounds and text
};

// Define typography variables for consistent font styling
const typography = {
  header: '24px',
  subheader: '20px',
  body: '16px',
  fontFamily: "'Roboto', sans-serif", // Use a modern and readable font
};

export const TeachersContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.secondary};
  padding: 20px;
  min-height: 100vh;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px;
  font-family: ${typography.fontFamily};
`;

export const TeachersContent = styled.div`
  padding: 20px;
  margin-left: 0;

  @media (min-width: 768px) {
    margin-left: 15%;
  }
`;

export const TeachersHeader = styled.h2`
  font-size: ${typography.header};
  color: ${colors.text};
  margin-bottom: 20px;
  border-bottom: 2px solid ${colors.accent};
  padding-bottom: 10px;
`;

export const TeacherList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const TeacherItem = styled.li`
  background-color: ${colors.white};
  border-radius: 8px;
  padding: 15px 25px;
  margin-bottom: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const AddTeacherForm = styled.form`
  margin-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const AddTeacherInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid ${colors.border};
  border-radius: 4px;
  font-size: ${typography.body};
`;

export const AddTeacherButton = styled.button`
  padding: 10px 20px;
  background-color: ${colors.primary};
  color: ${colors.white};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: ${typography.body};
  transition: background-color 0.3s ease, transform 0007bff.2s ease;

  &:hover {
    background-color: #007bff; /* Darker shade of green */
    transform: translateY(-2px);
  }
`;
