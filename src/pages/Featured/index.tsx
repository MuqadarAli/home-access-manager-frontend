import React from 'react';
import PageTitle from '../../components/PageTitle';
import FeaturedComp from '../../components/FeaturedComp';
import DefaultLayout from '../../layout/DefaultLayout';

export const Featured: React.FC = () => {
  return (
    <DefaultLayout>
      <PageTitle title="Featured | Home Access Manager" />
      <FeaturedComp />
    </DefaultLayout>
  );
};
