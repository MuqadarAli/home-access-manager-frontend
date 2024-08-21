import React from 'react';
import AdminLayout from '../../layout/AdminLayout';
import PageTitle from '../../components/PageTitle';
import PendingVehiclesComp from '../../components/VehicleComp/PendingVehiclesComp';

export const PendingVehicles: React.FC = () => {
  return (
    <AdminLayout>
      <PageTitle title="Pending Vehicles | Home Access Manager" />
      <PendingVehiclesComp />
    </AdminLayout>
  );
};
