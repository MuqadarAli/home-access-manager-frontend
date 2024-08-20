import React from 'react';
import AdminLayout from '../../layout/AdminLayout';
import PageTitle from '../../components/PageTitle';
import ApprovedProductsComp from '../../components/ProductComp/ApprovedProductsComp';

export const ApprovedProducts: React.FC = () => {
  return (
    <AdminLayout>
      <PageTitle title="Approved Products | Home Access Manager" />
      <ApprovedProductsComp />
    </AdminLayout>
  );
};
