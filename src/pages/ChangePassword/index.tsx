import React from 'react';
import PageTitle from '../../components/PageTitle';
import DefaultLayout from '../../layout/DefaultLayout';
import SuperAdminChangePassComp from '../../components/ChangePasswordComp/SuperAdminChangePassComp';

export const SuperAdminChangePass: React.FC = () => {
  return (
    <DefaultLayout>
      <PageTitle title="Change Password | Home Access Manager" />
      <SuperAdminChangePassComp />
    </DefaultLayout>
  );
};
