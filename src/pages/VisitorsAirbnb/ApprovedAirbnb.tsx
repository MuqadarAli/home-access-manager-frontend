import React from 'react';
import AdminLayout from '../../layout/AdminLayout';
import PageTitle from '../../components/PageTitle';
import ApprovedAirbnbComp from '../../components/VisitorAirbnbComp/ApprovedAirbnbComp';

export const ApprovedAirbnb: React.FC = () => {
  return (
    <AdminLayout>
      <PageTitle title="Airbnb | Home Access Manager" />
      <ApprovedAirbnbComp />
    </AdminLayout>
  );
};
