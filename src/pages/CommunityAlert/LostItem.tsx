import React from 'react';
import AdminLayout from '../../layout/AdminLayout';
import PageTitle from '../../components/PageTitle';
import LostItemComp from '../../components/CommunityAlertComp/LostItemComp';

export const LostItem: React.FC = () => {
  return (
    <AdminLayout>
      <PageTitle title="Lost Items | Home Access Manager" />
      <LostItemComp />
    </AdminLayout>
  );
};
