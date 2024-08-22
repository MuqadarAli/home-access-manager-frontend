import React from 'react';
import AdminLayout from '../../layout/AdminLayout';
import PageTitle from '../../components/PageTitle';
import FoundItemDetailComp from '../../components/CommunityAlertComp/FoundItemDetailComp';

export const FoundItemDetail: React.FC = () => {
  return (
    <AdminLayout>
      <PageTitle title="Found Item Detail | Home Access Manager" />
      <FoundItemDetailComp />
    </AdminLayout>
  );
};
