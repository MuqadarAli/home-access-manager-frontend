import React from 'react';
import AdminLayout from '../../layout/AdminLayout';
import PageTitle from '../../components/PageTitle';
import PendingBusinessComp from '../../components/BusinessComp/PendingBusinessComp';

export const PendingBusiness: React.FC = () => {
  return (
    <AdminLayout>
      <PageTitle title="Pending Businesses | Home Access Manager" />
      <PendingBusinessComp />
    </AdminLayout>
  );
};
