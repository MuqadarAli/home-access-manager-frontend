import React from 'react';
import AdminLayout from '../../layout/AdminLayout';
import PageTitle from '../../components/PageTitle';
import CommunityLeaderDetailComp from '../../components/CommunityLeaderComp/CommunityLeaderDetailComp';

export const CommunityLeaderDetail: React.FC = () => {
  return (
    <AdminLayout>
      <PageTitle title="Community Leader Detail | Home Access Manager" />
      <CommunityLeaderDetailComp />
    </AdminLayout>
  );
};
