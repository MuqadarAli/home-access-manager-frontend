import React from 'react';
import AdminLayout from '../../layout/AdminLayout';
import PageTitle from '../../components/PageTitle';
import AlertDetailComp from '../../components/CommunityAlertComp/AlertDetailComp';

export const AlertDetail: React.FC = () => {
  return (
    <AdminLayout>
      <PageTitle title="Alert Detail| Home Access Manager" />
      <AlertDetailComp />
    </AdminLayout>
  );
};
