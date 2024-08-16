import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ChooseUser from './components/ChooseUser';
import AdminSignIn from './components/AdminSignin';
import TeacherSignIn from './components/TeacherSignIn';
import StudentSignin from './components/StudentSignin';

import AdminDashboard from './pages/Admin/Dashboard';
import Classes from './pages/Admin/Classes';
import Exam from './pages/Admin/Exam';
import Attendence from './pages/Admin/Attendence';
import Performance from './pages/Admin/Performance';
import Teachers from './pages/Admin/Teachers';
import Students from './pages/Admin/Students';
import Assignments from './pages/Admin/Assignment';
import Library from './pages/Admin/Libraury';
import EventCalender from './pages/Admin/EventCalender';
import SettingProfile from './pages/Admin/SettingProfile';
import Communication from './pages/Admin/Communication';
import Announcement from './pages/Admin/Announcement';
import './index.css';

import StudentDashboard from './pages/Students/StudentDashboard';
import StudentAnnouncements from './pages/Students/StudentAnnouncements';
import StudentAssignments from './pages/Students/StudentAssignments';
import StudentClasses from './pages/Students/StudentClasses';
import StudentExam from './pages/Students/StudentExam';
import StudentLibraury from './pages/Students/StudentLibraury';
import StudentPerformance from './pages/Students/StudentPerformance';
import StudentProfile from './pages/Students/StudentProfile';
import StudentAttendence from './pages/Students/StudentAttendence';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/choose-user" element={<ChooseUser />} />

        {/* All the Signin Pages */}

        <Route exact path="/admin-signin" element={<AdminSignIn />} />
        <Route exact path="/students-signin" element={<StudentSignin />} />
        <Route exact path="/teachers-signin" element={<TeacherSignIn />} />

        {/* All the  Dahboard Routes */}

        <Route exact path="/admin/dashboard" element={<AdminDashboard />} />

        {/* Admin Sections here */}
        <Route exact path="/admin/classes" element={<Classes />} />
        <Route exact path="/admin/exam" element={<Exam />} />
        <Route exact path="/admin/attendence" element={<Attendence />} />
        <Route exact path="/admin/performance" element={<Performance />} />
        <Route exact path="/admin/teachers" element={<Teachers />} />
        <Route exact path="/admin/students" element={<Students />} />
        <Route exact path="/admin/assignments" element={<Assignments />} />
        <Route exact path="/admin/library" element={<Library />} />
        <Route exact path="/admin/communication" element={<Announcement />} />
        <Route exact path="/admin/events" element={<EventCalender />} />
        <Route exact path="/admin/settings" element={<SettingProfile />} />

        {/* Student Routes Section here */}
        <Route path="/students/dashboard" element={<StudentDashboard />} />
        <Route path="/students/classes" element={<StudentClasses />} />
        <Route path="/students/assignments" element={<StudentAssignments />} />
        <Route path="/students/exam" element={<StudentExam />} />
        <Route path="/students/performance" element={<StudentPerformance />} />
        <Route path="/students/attendence" element={<StudentAttendence />} />
        <Route path="/students/library" element={<StudentLibraury />} />

        <Route
          path="/students/communication"
          element={<StudentAnnouncements />}
        />
        <Route path="/students/settings" element={<StudentProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
