import React from 'react';
import AdminLayout from '../../layout/AdminLayout';
import PageTitle from '../../components/PageTitle';
import InComingVisitorsComp from '../../components/SecurityGuardComp/InComingVisitorsComp';

export const IncomingVisitors: React.FC = () => {
  return (
    <AdminLayout>
      <PageTitle title="Incoming Visitors | Home Access Manager" />
      <InComingVisitorsComp/>
    </AdminLayout>
  );
};
