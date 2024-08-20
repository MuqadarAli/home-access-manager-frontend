import React from 'react';
import AdminLayout from '../../layout/AdminLayout';
import PageTitle from '../../components/PageTitle';
import PendingProductsComp from '../../components/ProductComp/PendingProducts';

export const PendingProducts: React.FC = () => {
  return (
    <AdminLayout>
      <PageTitle title="Pending Products | Home Access Manager" />
      <PendingProductsComp />
    </AdminLayout>
  );
};
