import React from 'react';
import AdminLayout from '../../layout/AdminLayout';
import PageTitle from '../../components/PageTitle';
import LostItemDetailComp from '../../components/CommunityAlertComp/LostItemDetailComp';

export const LostItemDetail: React.FC = () => {
  return (
    <AdminLayout>
      <PageTitle title="Lost Item Detail | Home Access Manager" />
      <LostItemDetailComp />
    </AdminLayout>
  );
};
