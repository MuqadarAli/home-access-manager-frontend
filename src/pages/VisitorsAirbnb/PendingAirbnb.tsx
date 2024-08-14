import React from 'react';
import AdminLayout from '../../layout/AdminLayout';
import PageTitle from '../../components/PageTitle';
import PendingAirbnbComp from '../../components/VisitorAirbnbComp/PendingAirbnbComp';

export const PendingAirbnb: React.FC = () => {
  return (
    <AdminLayout>
      <PageTitle title="Pending Airbnb | Remote Access Manager" />
      <PendingAirbnbComp />
    </AdminLayout>
  );
};
