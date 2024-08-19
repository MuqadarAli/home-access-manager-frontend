import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

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
import { IsAuth } from './components/IsAuth';
import { SuperAdminChangePass } from './pages/ChangePassword';
import { AdminChangePass } from './pages/ChangePassword/AdminChangePass';
import AdminProfile from './pages/AdminProfile';

function App() {
  // const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 1000);
  // }, []);

  return (
    // <DefaultLayout>
    <Routes>
      <Route
        path="/"
        element={
          <>
            <PageTitle title="Login | Home Access Manager" />
            <Login />
          </>
        }
      />
      <Route
        path="/login"
        element={
          <>
            <PageTitle title="Login | Home Access Manager" />
            <SuperAdminLogin />
          </>
        }
      />
      <Route
        path="/super-admin/dashboard"
        element={
          <IsAuth>
            <DefaultLayout>
              <PageTitle title="Dashboard | Home Access Manager" />
              <Dashboard />
            </DefaultLayout>
          </IsAuth>
        }
      />
      <Route
        path="/dashboard"
        element={
          <IsAuth>
            <AdminLayout>
              <PageTitle title="Dashboard | Home Access Manager" />
              <AdminDashboard />
            </AdminLayout>
          </IsAuth>
        }
      />
      <Route
        path="/communities/pending-communities"
        element={
          <IsAuth>
            <DefaultLayout>
              <PageTitle title="Community | Home Access Manager" />
              <PendingCommunities />
            </DefaultLayout>
          </IsAuth>
        }
      />
      <Route
        path="/communities/approved-communities"
        element={
          <IsAuth>
            <DefaultLayout>
              <PageTitle title="Community | Home Access Manager" />
              <ApprovedCommunities />
            </DefaultLayout>
          </IsAuth>
        }
      />
      <Route
        path="/communities/community-detail"
        element={
          <IsAuth>
            <DefaultLayout>
              <PageTitle title="Community Detail| Home Access Manager" />
              <CommunityDetail />
            </DefaultLayout>
          </IsAuth>
        }
      />
      <Route
        path="/communities/add-community"
        element={
          <IsAuth>
            <DefaultLayout>
              <PageTitle title="Add Community | Home Access Manager" />
              <AddCommunity />
            </DefaultLayout>
          </IsAuth>
        }
      />
      <Route
        path="/super-admin/change-password"
        element={
          <IsAuth>
            <SuperAdminChangePass />
          </IsAuth>
        }
      />
      <Route
        path="/change-password"
        element={
          <IsAuth>
            <AdminChangePass />
          </IsAuth>
        }
      />
      <Route path="users/pending-users" element={<PendingUsers />} />
      <Route path="users/user-detail" element={<UserDetail />} />
      <Route path="users/approved-users" element={<ApprovedUsers />} />
      <Route
        path="/visitors-airbnb/pending-visitors"
        element={<PendingVisitors />}
      />
      <Route
        path="/visitors-airbnb/visitor-detail"
        element={<VisitorDetail />}
      />
      <Route
        path="/visitors-airbnb/approved-visitors"
        element={<ApprovedVisitors />}
      />
      <Route
        path="/visitors-airbnb/pending-airbnb"
        element={<PendingAirbnb />}
      />
      <Route
        path="/visitors-airbnb/approved-airbnb"
        element={<ApprovedAirbnb />}
      />
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
        path="/super-admin/profile"
        element={
          <IsAuth>
            <DefaultLayout>
              <PageTitle title="Profile | Home Access Manager" />
              <ProfileDetail />
            </DefaultLayout>
          </IsAuth>
        }
      />
      <Route
        path="/profile"
        element={
          <IsAuth>
            <AdminLayout>
              <PageTitle title="Profile | Home Access Manager" />
              <AdminProfile />
            </AdminLayout>
          </IsAuth>
        }
      />
      <Route
        path="/chart"
        element={
          <>
            <PageTitle title="Basic Chart |  Home Access Manager" />
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
