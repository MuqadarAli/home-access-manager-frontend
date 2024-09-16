import React from 'react';
import AdminLayout from '../../layout/AdminLayout';
import PageTitle from '../../components/PageTitle';
import SecurityGuardComp from '../../components/SecurityGuardComp';

export const SecurityGuard: React.FC = () => {
  return (
    <AdminLayout>
      <PageTitle title="Security Guard | Home Access Manager" />
      <SecurityGuardComp />
    </AdminLayout>
  );
};
