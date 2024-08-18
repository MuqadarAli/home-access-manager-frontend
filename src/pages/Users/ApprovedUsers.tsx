import React from 'react';
import AdminLayout from '../../layout/AdminLayout';
import PageTitle from '../../components/PageTitle';
import ApprovedUsersComp from '../../components/UsersComp/ApprovedUsersComp';

export const ApprovedUsers: React.FC = () => {
  return (
    <AdminLayout>
      <PageTitle title="Approved Users | Home Access Manager" />
      <ApprovedUsersComp />
    </AdminLayout>
  );
};
