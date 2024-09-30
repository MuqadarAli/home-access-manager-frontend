import React from 'react';
import AdminLayout from '../../layout/AdminLayout';
import PageTitle from '../../components/PageTitle';
import VisitorsMenuComp from '../../components/SecurityGuardComp/VisitorsMenuComp';

export const VisitorsMenu: React.FC = () => {
  return (
    <AdminLayout>
      <PageTitle title="Visitors Cards | Home Access Manager" />
      <VisitorsMenuComp />
    </AdminLayout>
  );
};
