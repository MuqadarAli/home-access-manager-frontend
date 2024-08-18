import React from 'react';
import AdminLayout from '../../layout/AdminLayout';
import PageTitle from '../../components/PageTitle';
import VisitorDetailComp from '../../components/VisitorAirbnbComp/VisitorDetailComp';

export const VisitorDetail: React.FC = () => {
  return (
    <AdminLayout>
      <PageTitle title="Visitor Detail | Home Access Manager" />
      <VisitorDetailComp />
    </AdminLayout>
  );
};
