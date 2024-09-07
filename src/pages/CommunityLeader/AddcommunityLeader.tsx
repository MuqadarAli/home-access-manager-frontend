import React from 'react';
import AdminLayout from '../../layout/AdminLayout';
import PageTitle from '../../components/PageTitle';
import AddCommunityLeaderComp from '../../components/CommunityLeaderComp/AddCommunityLeaderComp';

export const AddCommunityLeader: React.FC = () => {
  return (
    <AdminLayout>
      <PageTitle title="Add Community Leader| Home Access Manager" />
      <AddCommunityLeaderComp />
    </AdminLayout>
  );
};
