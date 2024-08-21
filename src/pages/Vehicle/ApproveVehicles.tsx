import React from 'react';
import AdminLayout from '../../layout/AdminLayout';
import PageTitle from '../../components/PageTitle';
import ApprovedVehiclesComp from '../../components/VehicleComp/ApprovedVehicleCpm';

export const ApprovedVehicles: React.FC = () => {
  return (
    <AdminLayout>
      <PageTitle title="Approved Vehicles | Home Access Manager" />
      <ApprovedVehiclesComp />
    </AdminLayout>
  );
};
