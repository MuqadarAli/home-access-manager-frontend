import { Link, useLocation } from 'react-router-dom';
import Breadcrumb from '../Breadcrumbs/Breadcrumb';
import { datetimeFormate } from '../../utils/datetimeFormate';

const BusinessDetailComp = () => {
  const locationData = useLocation();
  const business = locationData.state?.business;
  return (
    <>
      <div className="mx-auto">
        <Breadcrumb pageName="Business Detail" />

        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-5 xl:col-span-3">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Business Information
                </h3>
              </div>
              <div className="px-7">
                <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row ">
                  <dl className="grid grid-cols-1 sm:grid-cols-2 w-full">
                    <div className=" px-4 py-6 sm:col-span-1 sm:px-0">
                      <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                        Name
                      </dt>
                      <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                        {business?.name}
                      </dd>
                    </div>
                    <div className=" px-4 py-6 sm:col-span-1 sm:px-0">
                      <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                        Type
                      </dt>
                      <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                        {business?.type}
                      </dd>
                    </div>
                    <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                      <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                        Slogan
                      </dt>
                      <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                        {business?.slogan}
                      </dd>
                    </div>
                    <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                      <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                        Primary Phone
                      </dt>
                      <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                        {business?.primary_phone}
                      </dd>
                    </div>
                    <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                      <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                        Secondary Phone
                      </dt>
                      <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                        {business?.secondary_phone}
                      </dd>
                    </div>
                    <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                      <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                        X Link
                      </dt>
                      <Link
                        to={business?.x}
                        className="mt-1 text-lg leading-7 font-normal text-blue-600  hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600 sm:mt-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {business?.x}
                      </Link>
                    </div>
                    <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                      <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                        Facebook Link
                      </dt>
                      <Link
                        to={business?.x}
                        className="mt-1 text-lg leading-7 font-normal text-blue-600  hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600 sm:mt-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {business?.facebook}
                      </Link>
                    </div>
                    <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                      <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                        Instagram Link
                      </dt>
                      <Link
                        to={business?.instagram}
                        className="mt-1 text-lg leading-7 font-normal text-blue-600  hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600 sm:mt-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {business?.x}
                      </Link>
                    </div>
                    <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                      <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                        User Name
                      </dt>
                      <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                        {`${business?.user?.first_name} ${business?.user?.last_name}`}
                      </dd>
                    </div>
                    <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                      <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                        Email
                      </dt>
                      <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                        {business?.user?.email}
                      </dd>
                    </div>

                    <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                      <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                        Date Of Apply
                      </dt>
                      <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                        {datetimeFormate(business?.created_at)}
                      </dd>
                    </div>
                    <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                      <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                        Date Of Approval
                      </dt>
                      <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                        {datetimeFormate(business?.approval_date)}
                      </dd>
                    </div>
                    <div className="border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">
                      <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                        Description
                      </dt>
                      <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                        {business?.description}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-5 xl:col-span-2">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Business Image
                </h3>
              </div>
              <div className="p-7">
                <img
                  alt="product-image"
                  src={business?.image_url}
                  className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border border-dashed border-primary bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5"
                ></img>
              </div>
            </div>
            {business?.message && (
              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                  <h3 className="font-medium text-black dark:text-white">
                    Message
                  </h3>
                </div>
                <div className="py-4 px-7">{business?.message}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessDetailComp;
