import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ChooseUserContainer = styled.div`
  margin: 0;
  background: url(https://st.depositphotos.com/1705350/4917/v/450/depositphotos_49172079-stock-illustration-back-to-school-background.jpg)
    no-repeat;

  z-index: 1;
  background-size: cover;

  display: flex;
  max-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: beige;
  padding-top: 10%;
  max-height: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
  }
`;

export const UserSection = styled.div`
  text-align: center;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3), -0px -0px 5px white;
  background-color: beige;
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #ff4500; /* Admin: Orange color */

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Button = styled(Link)`
  background-color: #90ee90; /* Student: Light green color */
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 10px;
  text-decoration: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #7cfc00; /* Darker shade of green on hover */
  }

  @media screen and (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;
