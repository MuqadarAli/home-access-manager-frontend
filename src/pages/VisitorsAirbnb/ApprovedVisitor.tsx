import React from 'react';
import AdminLayout from '../../layout/AdminLayout';
import PageTitle from '../../components/PageTitle';
import ApprovedUsersComp from '../../components/UsersComp/ApprovedUsersComp';

export const ApprovedVisitors: React.FC = () => {
  return (
    <AdminLayout>
      <PageTitle title="Approved Visitors | Remote Access Manager" />
      <ApprovedUsersComp />
    </AdminLayout>
  );
};
