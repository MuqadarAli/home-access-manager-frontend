import React from 'react';
import AdminLayout from '../../layout/AdminLayout';
import PageTitle from '../../components/PageTitle';
import AddedMeetingComp from '../../components/MeetingComp';

export const Meeting: React.FC = () => {
  return (
    <AdminLayout>
      <PageTitle title="Meeting | Home Access Manager" />
      <AddedMeetingComp />
    </AdminLayout>
  );
};
