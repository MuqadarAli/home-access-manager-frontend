import React from 'react';
import AdminLayout from '../../layout/AdminLayout';
import PageTitle from '../../components/PageTitle';
import FoundItemComp from '../../components/CommunityAlertComp/FoundItemComp';

export const FoundItem: React.FC = () => {
  return (
    <AdminLayout>
      <PageTitle title="Found Items | Home Access Manager" />
      <FoundItemComp />
    </AdminLayout>
  );
};
