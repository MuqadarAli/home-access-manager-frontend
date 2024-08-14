import React from 'react';
import AdminLayout from '../../layout/AdminLayout';
import PageTitle from '../../components/PageTitle';
import ApprovedAirbnbComp from '../../components/VisitorAirbnbComp/ApprovedAirbnbComp';

export const ApprovedAirbnb: React.FC = () => {
  return (
    <AdminLayout>
      <PageTitle title="Approved Airbnb | Remote Access Manager" />
      <ApprovedAirbnbComp />
    </AdminLayout>
  );
};
