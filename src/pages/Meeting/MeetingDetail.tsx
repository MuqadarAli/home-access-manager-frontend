import React from 'react';
import AdminLayout from '../../layout/AdminLayout';
import PageTitle from '../../components/PageTitle';
import MeetingDetailComp from '../../components/MeetingComp/MeetingDetail';

export const MeetingDetail: React.FC = () => {
  return (
    <AdminLayout>
      <PageTitle title="Meeting Detail| Home Access Manager" />
      <MeetingDetailComp />
    </AdminLayout>
  );
};
