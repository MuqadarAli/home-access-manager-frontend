import React from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { useLocation } from 'react-router-dom';
import { datetimeFormate } from '../../utils/datetimeFormate';

const FoundItemDetailComp: React.FC = () => {
  const locationData = useLocation();
  const foundItem = locationData.state?.foundItem;

  return (
    <>
      <Breadcrumb pageName="Found Item Detail" />

      <div className="grid grid-cols-5 gap-8">
        <div className="col-span-5 xl:col-span-3">
          <dl className="grid grid-cols-1 sm:grid-cols-2 overflow-hidden p-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className=" px-4 py-6 sm:col-span-1 sm:px-0">
              <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                Name
              </dt>
              <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                {foundItem?.name}
              </dd>
            </div>
            <div className=" px-4 py-6 sm:col-span-1 sm:px-0">
              <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                Town
              </dt>
              <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                {foundItem?.town}
              </dd>
            </div>
            <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
              <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                Vicinity
              </dt>
              <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                {foundItem?.vicinity}
              </dd>
            </div>
            <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
              <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                Found Date
              </dt>
              <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                {datetimeFormate(foundItem?.found_date)}
              </dd>
            </div>

            <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
              <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                Recover Place
              </dt>
              <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                {foundItem?.recover_place}
              </dd>
            </div>
            <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
              <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                Recovered Address
              </dt>
              <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                {foundItem?.recovered_address}
              </dd>
            </div>
            <div className="border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">
              <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                Recovered By
              </dt>
              <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                {foundItem?.recovered_by}
              </dd>
            </div>
            <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
              <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                User Name
              </dt>
              <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                {`${foundItem?.user?.first_name} ${foundItem?.user?.last_name}`}
              </dd>
            </div>

            <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
              <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                User Email
              </dt>
              <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                {foundItem?.user?.email}
              </dd>
            </div>
            <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
              <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                User Phone
              </dt>
              <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                {foundItem?.user?.primary_phone}
              </dd>
            </div>
            <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
              <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                Date Of Apply
              </dt>
              <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                {datetimeFormate(foundItem?.created_at)}
              </dd>
            </div>
          </dl>
        </div>
        <div className="col-span-5 xl:col-span-2">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">Image</h3>
            </div>
            {foundItem?.image_url && (
              <div className="p-7">
                <img
                  alt="product-image"
                  src={foundItem?.image_url}
                  className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border border-dashed border-primary bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5"
                ></img>
              </div>
            )}
          </div>
          {
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Description
                </h3>
              </div>
              <div className="py-4 px-7">{foundItem?.description}</div>
            </div>
          }
        </div>
      </div>
    </>
  );
};

export default FoundItemDetailComp;
