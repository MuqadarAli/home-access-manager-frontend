import React from 'react';
import AdminLayout from '../../layout/AdminLayout';
import PageTitle from '../../components/PageTitle';
import VehicleDetailComp from '../../components/VehicleComp/VehicleDetailComp';

export const VehicleDetail: React.FC = () => {
  return (
    <AdminLayout>
      <PageTitle title="Vehicle Detail | Home Access Manager" />
      <VehicleDetailComp />
    </AdminLayout>
  );
};
