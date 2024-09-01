// ProfileModal.jsx
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const CloseButton = styled.button`
  background-color: #f44336;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const ProfileModal = ({ student, onClose }) => {
  if (!student) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>Close</CloseButton>
        <h3>{student.name}</h3>
        <p>Email: {student.email || 'N/A'}</p>
        <p>Grade: {student.grade}</p>
        <p>Registration Number: {student.registrationNumber}</p>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ProfileModal;
