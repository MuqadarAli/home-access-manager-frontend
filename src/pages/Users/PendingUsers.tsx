import React from 'react';
import AdminLayout from '../../layout/AdminLayout';
import PageTitle from '../../components/PageTitle';
import PendingUsersComp from '../../components/UsersComp/PendingUsersComp';

export const PendingUsers: React.FC = () => {
  return (
    <AdminLayout>
      <PageTitle title="Pending Users | Remote Access Manager" />
      <PendingUsersComp />
    </AdminLayout>
  );
};
