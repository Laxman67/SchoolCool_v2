import {
  Navbar,
  Logo,
  NavigationLinks,
  NavLink,
  ButtonsContainer,
  LoginButton,
  GuestButton,
  HomeContainer,
  SchoolInfo,
  SchoolImage,
  Title,
  AdminRegisterLink,
  LoremTextContainer,
} from '../styles/styles';
import background from '../assets/indian-group-college.png';
import logo from '../assets/logo.jpeg';
import { LoremIpsum } from 'lorem-ipsum';

import { Link, useNavigate } from 'react-router-dom';

const lorem = new LoremIpsum();

const Home = () => {
  const navigate = useNavigate();
  const loremText = lorem.generateParagraphs(1);

  const handleClick = () => {
    navigate('/choose-user');
  };
  return (
    <>
      <Navbar>
        <Logo src={logo} alt="Logo" />
        <NavigationLinks>
          <NavLink href="#">About Us </NavLink>
          <NavLink href="#">Products</NavLink>
          <NavLink href="#">Contact us</NavLink>
        </NavigationLinks>
        <ButtonsContainer>
          <LoginButton onClick={handleClick}>Sign In</LoginButton>
          <GuestButton onClick={handleClick}>Guest Login</GuestButton>
        </ButtonsContainer>
      </Navbar>
      <HomeContainer>
        <SchoolInfo>
          <Title>School Management System</Title>
          <LoremTextContainer>
            <p>{loremText}</p>
          </LoremTextContainer>
          <AdminRegisterLink>Admin Register</AdminRegisterLink>
        </SchoolInfo>
        <SchoolImage src={background} alt="Students " />
      </HomeContainer>
    </>
  );
};

export default Home;
