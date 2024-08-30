import React from 'react';
import AdminLayout from '../../layout/AdminLayout';
import PageTitle from '../../components/PageTitle';
import AddMeetingComp from '../../components/MeetingComp/AddMeetingComp';

export const AddMeeting: React.FC = () => {
  return (
    <AdminLayout>
      <PageTitle title="Add Meeting | Home Access Manager" />
      <AddMeetingComp />
    </AdminLayout>
  );
};
