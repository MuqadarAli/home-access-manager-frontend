import React from 'react';
import PageTitle from '../../components/PageTitle';
import DefaultLayout from '../../layout/DefaultLayout';
import AddFeaturedComp from '../../components/FeaturedComp/AddFeaturedComp';

export const AddFeatured: React.FC = () => {
  return (
    <DefaultLayout>
      <PageTitle title="Add Featured | Home Access Manager" />
      <AddFeaturedComp />
    </DefaultLayout>
  );
};
