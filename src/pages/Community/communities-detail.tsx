import React from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { useLocation } from 'react-router-dom';

const CommunityDetail: React.FC = () => {
    const locationData = useLocation()
    const communityData = locationData.state?.community;    
    
  return (
    <>
      <Breadcrumb pageName="Community Detail" />

      <div className="overflow-hidden p-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="px-4 sm:px-0">
          <h3 className="text-lg font-semibold leading-7  text-black dark:text-white">
            Name
          </h3>
          <p className="mt-1 max-w-2xl text-lg leading-7 font-normal text-black dark:text-white">
            {communityData?.name}
          </p>
        </div>
        <div className="mt-6">
          <dl className="grid grid-cols-1 sm:grid-cols-2">
            <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
              <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                Community Type
              </dt>
              <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                {communityData?.communityType}
              </dd>
            </div>
            <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
              <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                Area
              </dt>
              <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
              {communityData?.area}
              </dd>
            </div>
            <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
              <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                Address
              </dt>
              <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
              {communityData?.address}
              </dd>
            </div>
            <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
              <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                Zip Code
              </dt>
              <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                {communityData?.zip_code}
              </dd>
            </div>
            <div className="border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">
              <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                Description
              </dt>
              <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
              {communityData?.description}
              </dd>
            </div>
            <div className="border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">
              <h3 className="text-lg font-semibold leading-7  text-black dark:text-white">
                Admin Name
              </h3>
              <p className="mt-1 max-w-2xl text-lg leading-7 font-normal text-black dark:text-white">
                {communityData?.admin?.name}
              </p>
            </div>
            <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
              <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                Email Address
              </dt>
              <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
              {communityData?.admin?.email}
              </dd>
            </div>
            <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
              <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                Phone Number
              </dt>
              <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
              {communityData?.admin?.phone}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
};

export default CommunityDetail;
