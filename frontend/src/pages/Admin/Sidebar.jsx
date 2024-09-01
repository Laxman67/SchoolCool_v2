import { useState, useEffect } from 'react';
import { AiFillCaretLeft } from 'react-icons/ai';

// BS Icons
import {
  BsGraphUp,
  BsPeople,
  BsPerson,
  BsFileText,
  BsBook,
  BsGraphDown,
  BsCalendar,
  BsGear,
  BsChatDots,
  BsCalendarEvent,
  BsQuestionSquare,
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

const Sidebar = () => {
  const [isopen, setisopen] = useState(true);
  const toggleSidebar = () => {
    setisopen(!isopen);
  };

  return (
    <SidebarContainer style={{ width: isopen ? '250px' : '80px' }}>
      <SidebarHeader>
        <Logo src={'https://cdn-icons-png.flaticon.com/256/1063/1063385.png'} />
      </SidebarHeader>
      <SidebarNav>
        <SidebarNavItem>
          <BsGraphUp />
          <StyledLink to="/admin/dashboard">Dashboard</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <BsPeople />
          <StyledLink to="/admin/classes">Classes</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <BsPerson />
          <StyledLink to="/admin/students">Students</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <BsPeople />
          <StyledLink to="/admin/teachers">Teachers</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <BsBook />
          <StyledLink to="/admin/assignments">Assignments</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <BsBook />
          <StyledLink to="/admin/exam">Exams</StyledLink>
        </SidebarNavItem>

        <SidebarNavItem>
          <SidebarIcon>
            <BsGraphDown />
          </SidebarIcon>
          <StyledLink to="/admin/performance">Performance</StyledLink>
        </SidebarNavItem>

        <SidebarNavItem>
          <SidebarIcon>
            <BsCalendar />
          </SidebarIcon>
          <StyledLink to="/admin/attendence">Attendence</StyledLink>
        </SidebarNavItem>

        <SidebarNavItem>
          <SidebarIcon>
            <BsBook />
          </SidebarIcon>
          <StyledLink to="/admin/library">Library</StyledLink>
        </SidebarNavItem>

        <SidebarNavItem>
          <SidebarIcon>
            <BsChatDots />
          </SidebarIcon>
          <StyledLink to="/admin/communication">Announcements</StyledLink>
        </SidebarNavItem>

        <SidebarNavItem>
          <SidebarIcon>
            <BsCalendarEvent />
          </SidebarIcon>
          <StyledLink to="/admin/events">Events and Calender</StyledLink>
        </SidebarNavItem>

        <SidebarNavItem>
          <SidebarIcon>
            <BsGear />
          </SidebarIcon>
          <StyledLink to="/admin/settings">Setting and Profile</StyledLink>
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

export default Sidebar;
