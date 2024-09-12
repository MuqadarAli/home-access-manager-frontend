import React from 'react';
import AdminLayout from '../../layout/AdminLayout';
import PageTitle from '../../components/PageTitle';
import ApprovedWorkerComp from '../../components/VisitorAirbnbComp/ApprovedWorkerComp';

export const ApprovedWorker: React.FC = () => {
  return (
    <AdminLayout>
      <PageTitle title="Worker | Home Access Manager" />
      <ApprovedWorkerComp />
    </AdminLayout>
  );
};
