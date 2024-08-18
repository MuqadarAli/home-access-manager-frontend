import React from 'react';
import AdminLayout from '../../layout/AdminLayout';
import PageTitle from '../../components/PageTitle';
import PendingVisitorsComp from '../../components/VisitorAirbnbComp/PendingVisitorsComp';

export const PendingVisitors: React.FC = () => {
  return (
    <AdminLayout>
      <PageTitle title="Pending Visitors | Home Access Manager" />
      <PendingVisitorsComp />
    </AdminLayout>
  );
};
