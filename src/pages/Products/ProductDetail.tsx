import React from 'react';
import AdminLayout from '../../layout/AdminLayout';
import PageTitle from '../../components/PageTitle';
import ProductDetailComp from '../../components/ProductComp/ProductDetailComp';

export const ProductDetail: React.FC = () => {
  return (
    <AdminLayout>
      <PageTitle title="Pending Products | Home Access Manager" />
      <ProductDetailComp />
    </AdminLayout>
  );
};
