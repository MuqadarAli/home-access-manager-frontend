import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SuperAdminLogin';
import SignUp from './pages/Authentication/SignUp';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import DefaultLayout from './layout/DefaultLayout';
import Dashboard from './pages/Dashboard';
import CommunityDetail from './pages/Community/communities-detail';
import ApprovedCommunities from './pages/Community/approved-communities';
import PendingCommunities from './pages/Community/pending-communities';
import AddCommunity from './pages/Community/add-community';
import SuperAdminLogin from './pages/Authentication/SuperAdminLogin';
import ProfileDetail from './pages/ProfileDetail';
import Login from './pages/Authentication/Login';
import AdminLayout from './layout/AdminLayout';
import AdminDashboard from './pages/Dashboard/AdminDashboard';
import { PendingUsers } from './pages/Users/PendingUsers';
import { UserDetail } from './pages/Users/UserDetail';
import { ApprovedUsers } from './pages/Users/ApprovedUsers';
import { PendingVisitors } from './pages/VisitorsAirbnb/VisitorsPending';
import { VisitorDetail } from './pages/VisitorsAirbnb/VisitorDetail';
import { ApprovedVisitors } from './pages/VisitorsAirbnb/ApprovedVisitor';
import { PendingAirbnb } from './pages/VisitorsAirbnb/PendingAirbnb';
import { ApprovedAirbnb } from './pages/VisitorsAirbnb/ApprovedAirbnb';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    // <DefaultLayout>
    <Routes>
      <Route
        path="/"
        element={
          <>
            <PageTitle title="Login | Remote Access Manager" />
            <Login />
          </>
        }
      />
      <Route
        path="/login"
        element={
          <>
            <PageTitle title="Login | Remote Access Manager" />
            <SuperAdminLogin />
          </>
        }
      />
      <Route
        path="/super-admin/dashboard"
        element={
          <DefaultLayout>
            <PageTitle title="Dashboard | Remote Access Manager" />
            <Dashboard />
          </DefaultLayout>
        }
      />
      <Route
        path="/dashboard"
        element={
          <AdminLayout>
            <PageTitle title="Dashboard | Remote Access Manager" />
            <AdminDashboard />
          </AdminLayout>
        }
      />
      <Route
        path="/communities/pending-communities"
        element={
          <DefaultLayout>
            <PageTitle title="Community | Remote Access Manager" />
            <PendingCommunities />
          </DefaultLayout>
        }
      />
      <Route
        path="/communities/approved-communities"
        element={
          <DefaultLayout>
            <PageTitle title="Community | Remote Access Manager" />
            <ApprovedCommunities />
          </DefaultLayout>
        }
      />
      <Route
        path="/communities/community-detail"
        element={
          <DefaultLayout>
            <PageTitle title="Community Detail| Remote Access Manager" />
            <CommunityDetail />
          </DefaultLayout>
        }
      />
      <Route
        path="/communities/add-community"
        element={
          <DefaultLayout>
            <PageTitle title="Add Community | Remote Access Manager" />
            <AddCommunity />
          </DefaultLayout>
        }
      />
      <Route path="users/pending-users" element={<PendingUsers />} />
      <Route path="users/user-detail" element={<UserDetail />} />
      <Route path="users/approved-users" element={<ApprovedUsers />} />
      <Route path="/visitors-airbnb/pending-visitors" element={<PendingVisitors />} />
      <Route path="/visitors-airbnb/visitor-detail" element={<VisitorDetail />} />
      <Route path="/visitors-airbnb/approved-visitors" element={<ApprovedVisitors />} />
      <Route path="/visitors-airbnb/pending-airbnb" element={<PendingAirbnb />} />
      <Route path="/visitors-airbnb/approved-airbnb" element={<ApprovedAirbnb />} />
      <Route
        path="/calendar"
        element={
          <>
            <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
            <Calendar />
          </>
        }
      />
      {/* <Route
          path="/profile"
          element={
            <>
              <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Profile />
            </>
          }
        /> */}
      <Route
        path="/forms/form-elements"
        element={
          <>
            <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
            <FormElements />
          </>
        }
      />
      <Route
        path="/forms/form-layout"
        element={
          <>
            <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
            <FormLayout />
          </>
        }
      />
      <Route
        path="/tables"
        element={
          <>
            <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />
            <Tables />
          </>
        }
      />
      <Route
        path="/profile"
        element={
          <AdminLayout>
            <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
            <ProfileDetail />
          </AdminLayout>
        }
      />
      <Route
        path="/chart"
        element={
          <>
            <PageTitle title="Basic Chart | TailAdmin - Tailwind CSS Admin Dashboard Template" />
            <Chart />
          </>
        }
      />
      <Route
        path="/ui/alerts"
        element={
          <>
            <PageTitle title="Alerts | TailAdmin - Tailwind CSS Admin Dashboard Template" />
            <Alerts />
          </>
        }
      />
      <Route
        path="/ui/buttons"
        element={
          <>
            <PageTitle title="Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template" />
            <Buttons />
          </>
        }
      />
      <Route
        path="/auth/signin"
        element={
          <>
            <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" />
            <SignIn />
          </>
        }
      />
      <Route
        path="/auth/signup"
        element={
          <>
            <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
            <SignUp />
          </>
        }
      />
    </Routes>
    // </DefaultLayout>
  );
}

export default App;
