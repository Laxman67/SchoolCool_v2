import { useState, useEffect } from 'react';
import { AiFillCaretLeft } from 'react-icons/ai';

// BS Icons
import {
  BsGraphUp,
  BsPeople,
  BsBook,
  BsPerson,
  BsGraphDown,
  BsCalendar,
  BsGear,
  BsChatDots,
} from 'react-icons/bs';

// import logo from '../../assets/Logo.jpeg';
import {
  SidebarContainer,
  SidebarHeader,
  SidebarNav,
  SidebarNavItem,
  StyledLink,
  SidebarIcon,
  Logo,
  ToggleButton,
  ToggleIcon,
} from '../../styles/SidebarStyles';

const TeaceherSidebar = () => {
  const [isopen, setisopen] = useState(true);
  const toggleSidebar = () => {
    setisopen(!isopen);
  };

  return (
    <SidebarContainer style={{ width: isopen ? '250px' : '80px' }}>
      <SidebarHeader>
        <Logo src={'logo'} alt="logo" />
      </SidebarHeader>
      <SidebarNav>
        <SidebarNavItem>
          <BsGraphUp />
          <StyledLink to="/teacher/dashboard">Dashboard</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <BsPeople />
          <StyledLink to="/teacher/classes">Classes</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <BsPerson />
          <StyledLink to="/teacher/students">Students</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <BsPerson />
          <StyledLink to="/teacher/teachers">Teachers</StyledLink>
        </SidebarNavItem>

        <SidebarNavItem>
          <BsBook />
          <StyledLink to="/teacher/assignments">Assignments</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <BsBook />
          <StyledLink to="/teacher/exam">Exams</StyledLink>
        </SidebarNavItem>

        <SidebarNavItem>
          <SidebarIcon>
            <BsGraphDown />
          </SidebarIcon>
          <StyledLink to="/teacher/performance">Performance</StyledLink>
        </SidebarNavItem>

        <SidebarNavItem>
          <SidebarIcon>
            <BsCalendar />
          </SidebarIcon>
          <StyledLink to="/teacher/attendence">Attendence</StyledLink>
        </SidebarNavItem>

        <SidebarNavItem>
          <SidebarIcon>
            <BsChatDots />
          </SidebarIcon>
          <StyledLink to="/teacher/events">Events</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon>
            <BsChatDots />
          </SidebarIcon>
          <StyledLink to="/teacher/communication">Announcements</StyledLink>
        </SidebarNavItem>

        <SidebarNavItem>
          <SidebarIcon>
            <BsGear />
          </SidebarIcon>
          <StyledLink to="/teacher/settings">Setting and Profile</StyledLink>
        </SidebarNavItem>
        <ToggleButton
          onClick={() => {
            toggleSidebar();
          }}
        >
          <ToggleIcon isopen={toString(isopen)}>
            <AiFillCaretLeft />
          </ToggleIcon>
        </ToggleButton>
      </SidebarNav>
    </SidebarContainer>
  );
};

export default TeaceherSidebar;
