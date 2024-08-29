import { useLocation } from 'react-router-dom';
import Breadcrumb from '../Breadcrumbs/Breadcrumb';
import { datetimeFormate } from '../../utils/datetimeFormate';

const AlertDetailComp = () => {
  const locationData = useLocation();
  const alert = locationData.state?.alert;
  return (
    <>
      <div className="mx-auto">
        <Breadcrumb pageName="Alert Detail" />

        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-5 xl:col-span-3">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Alert Information
                </h3>
              </div>
              <div className="px-7">
                <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row ">
                  <dl className="grid grid-cols-1 sm:grid-cols-2 w-full">
                    <div className=" px-4 py-6 sm:col-span-1 sm:px-0">
                      <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                        Type
                      </dt>
                      <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                        {alert?.type}
                      </dd>
                    </div>
                    <div className=" px-4 py-6 sm:col-span-1 sm:px-0">
                      <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                        User Name
                      </dt>
                      <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                        {`${alert?.user?.first_name} ${alert?.user?.last_name}`}
                      </dd>
                    </div>
                    <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                      <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                        Primary Phone
                      </dt>
                      <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                        {alert?.user?.primary_phone}
                      </dd>
                    </div>
                    <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                      <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                        Email
                      </dt>
                      <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                        {alert?.user?.email}
                      </dd>
                    </div>
                    <div className="border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">
                      <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                        Date Of Created
                      </dt>
                      <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                        {datetimeFormate(alert?.created_date)}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          {alert?.image && (
            <div className="col-span-5 xl:col-span-2">
              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                  <h3 className="font-medium text-black dark:text-white">
                    Image
                  </h3>
                </div>
                <div className="p-7">
                  <img
                    alt="product-image"
                    src={alert?.image_url}
                    className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border border-dashed border-primary bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5"
                  ></img>
                </div>
              </div>
            </div>
          )}
          {alert?.description && (
            <div className="col-span-5 xl:col-span-2">
              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                  <h3 className="font-medium text-black dark:text-white">
                    Description
                  </h3>
                </div>
                <div className="p-7">
                  <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                    {alert?.description}
                  </dd>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AlertDetailComp;
