import React from 'react';
import AdminLayout from '../../layout/AdminLayout';
import PageTitle from '../../components/PageTitle';
import BusinessDetailComp from '../../components/BusinessComp/BusinessDetailComp';

export const BusinessDetail: React.FC = () => {
  return (
    <AdminLayout>
      <PageTitle title="Business Detail | Home Access Manager" />
      <BusinessDetailComp />
    </AdminLayout>
  );
};
