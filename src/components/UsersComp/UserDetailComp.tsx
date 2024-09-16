import React from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { useLocation } from 'react-router-dom';
import { datetimeFormate } from '../../utils/datetimeFormate';

const UserDetailComp: React.FC = () => {
  const locationData = useLocation();
  const user = locationData.state?.user;

  return (
    <>
      <Breadcrumb pageName="User Detail" />

      <div className=" grid grid-cols-5 gap-8 ">
        <div className="col-span-5 xl:col-span-3">
          <dl className="grid grid-cols-1 sm:grid-cols-2 overflow-hidden p-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className=" px-4 py-6 sm:col-span-1 sm:px-0">
              <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                First Name
              </dt>
              <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                {user?.first_name}
              </dd>
            </div>
            <div className=" px-4 py-6 sm:col-span-1 sm:px-0">
              <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                Last Name
              </dt>
              <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                {user?.last_name}
              </dd>
            </div>
            <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
              <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                Email Address
              </dt>
              <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                {user?.email}
              </dd>
            </div>
            <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
              <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                User Type
              </dt>
              <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                {user?.user_type}
              </dd>
            </div>

            <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
              <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                Address
              </dt>
              <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                {user?.address}
              </dd>
            </div>
            <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
              <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                Phone Number
              </dt>
              <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                {user?.primary_phone}
              </dd>
            </div>

            <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
              <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                Lot Number
              </dt>
              <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                {user?.house_number}
              </dd>
            </div>
            <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
              <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                Postal Code
              </dt>
              <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                {user?.postal_code}
              </dd>
            </div>
            <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
              <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                Date Of Apply
              </dt>
              <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                {datetimeFormate(user?.created_at)}
              </dd>
            </div>
            <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
              <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                Date Of Approval
              </dt>
              <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                {user?.approval_date
                  ? datetimeFormate(user?.approval_date)
                  : ''}
              </dd>
            </div>
          </dl>
        </div>
        <div className="col-span-5 xl:col-span-2">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">Image</h3>
            </div>
            {user?.image_url && (
              <div className="p-7">
                <img
                  alt="user-image"
                  src={user?.image_url}
                  className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border border-dashed border-primary bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5"
                ></img>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetailComp;
