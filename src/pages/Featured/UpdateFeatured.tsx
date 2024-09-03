import React from 'react';
import PageTitle from '../../components/PageTitle';
import DefaultLayout from '../../layout/DefaultLayout';
import UpdateFeaturedComp from '../../components/FeaturedComp/UpdateFeaturedComp';

export const UpdateFeatured: React.FC = () => {
  return (
    <DefaultLayout>
      <PageTitle title="Update Featured | Home Access Manager" />
      <UpdateFeaturedComp />
    </DefaultLayout>
  );
};
