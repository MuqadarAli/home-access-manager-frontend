import React from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { useLocation } from 'react-router-dom';
import { datetimeFormate } from '../../utils/datetimeFormate';

const LostItemDetailComp: React.FC = () => {
  const locationData = useLocation();
  const lostItem = locationData.state?.lostItem;

  return (
    <>
      <Breadcrumb pageName="Lost Item Detail" />

      <div className="grid grid-cols-5 gap-8">
        <div className="col-span-5 xl:col-span-3">
          <dl className="grid grid-cols-1 sm:grid-cols-2 overflow-hidden p-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className=" px-4 py-6 sm:col-span-1 sm:px-0">
              <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                Name
              </dt>
              <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                {lostItem?.name}
              </dd>
            </div>
            <div className=" px-4 py-6 sm:col-span-1 sm:px-0">
              <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                Town
              </dt>
              <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                {lostItem?.town}
              </dd>
            </div>
            <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
              <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                Vicinity
              </dt>
              <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                {lostItem?.vicinity}
              </dd>
            </div>
            <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
              <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                Lost Date
              </dt>
              <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                {datetimeFormate(lostItem?.lost_date)}
              </dd>
            </div>
            <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
              <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                User Name
              </dt>
              <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                {`${lostItem?.user?.first_name} ${lostItem?.user?.last_name}`}
              </dd>
            </div>

            <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
              <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                User Email
              </dt>
              <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                {lostItem?.user?.email}
              </dd>
            </div>
            <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
              <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                User Phone
              </dt>
              <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                {lostItem?.user?.primary_phone}
              </dd>
            </div>
            <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
              <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                Date Of Apply
              </dt>
              <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                {datetimeFormate(lostItem?.created_at)}
              </dd>
            </div>
          </dl>
        </div>
        <div className="col-span-5 xl:col-span-2">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Description
              </h3>
            </div>
            <div className="py-4 px-7">{lostItem?.description}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LostItemDetailComp;
