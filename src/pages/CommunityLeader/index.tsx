import React from 'react';
import AdminLayout from '../../layout/AdminLayout';
import PageTitle from '../../components/PageTitle';
import CommunityLeaderComp from '../../components/CommunityLeaderComp';

export const CommunityLeader: React.FC = () => {
  return (
    <AdminLayout>
      <PageTitle title="Community Leader| Home Access Manager" />
      <CommunityLeaderComp />
    </AdminLayout>
  );
};
