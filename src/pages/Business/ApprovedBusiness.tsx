import React from 'react';
import AdminLayout from '../../layout/AdminLayout';
import PageTitle from '../../components/PageTitle';
import ApprovedBusinessComp from '../../components/BusinessComp/ApprovedBusinessComp';

export const ApprovedBusiness: React.FC = () => {
  return (
    <AdminLayout>
      <PageTitle title="Approved Businesses | Home Access Manager" />
      <ApprovedBusinessComp />
    </AdminLayout>
  );
};
