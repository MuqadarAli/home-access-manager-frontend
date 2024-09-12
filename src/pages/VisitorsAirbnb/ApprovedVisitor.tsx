import React from 'react';
import AdminLayout from '../../layout/AdminLayout';
import PageTitle from '../../components/PageTitle';
import ApprovedVisitorsComp from '../../components/VisitorAirbnbComp/ApprovedVisitorsComp';

export const ApprovedVisitors: React.FC = () => {
  return (
    <AdminLayout>
      <PageTitle title="Visitors | Home Access Manager" />
      <ApprovedVisitorsComp />
    </AdminLayout>
  );
};
