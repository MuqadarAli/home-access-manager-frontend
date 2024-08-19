import React from 'react';
import PageTitle from '../../components/PageTitle';
import AdminLayout from '../../layout/AdminLayout';
import AdminChangePassComp from '../../components/ChangePasswordComp/AdminChangePasswordComp';

export const AdminChangePass: React.FC = () => {
  return (
    <AdminLayout>
      <PageTitle title="Change Password | Home Access Manager" />
      <AdminChangePassComp />
    </AdminLayout>
  );
};