import React from 'react';
import AdminLayout from '../../layout/AdminLayout';
import PageTitle from '../../components/PageTitle';
import AlertComp from '../../components/CommunityAlertComp/AlertComp';

export const Alert: React.FC = () => {
  return (
    <AdminLayout>
      <PageTitle title="Alerts| Home Access Manager" />
      <AlertComp />
    </AdminLayout>
  );
};
