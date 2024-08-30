import { Link, useLocation } from 'react-router-dom';
import Breadcrumb from '../Breadcrumbs/Breadcrumb';
import { datetimeFormate } from '../../utils/datetimeFormate';

const MeetingDetailComp = () => {
  const locationData = useLocation();
  const meeting = locationData.state?.meeting;
  return (
    <>
      <div className="mx-auto">
        <Breadcrumb pageName="Meeting Detail" />

        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-5 xl:col-span-3">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Meeting Information
                </h3>
              </div>
              <div className="px-7">
                <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row ">
                  <dl className="grid grid-cols-1 sm:grid-cols-2 w-full">
                    <div className=" px-4 py-6 sm:col-span-1 sm:px-0">
                      <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                        Title
                      </dt>
                      <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                        {meeting?.title}
                      </dd>
                    </div>
                    <div className=" px-4 py-6 sm:col-span-1 sm:px-0">
                      <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                        Platform
                      </dt>
                      <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                        {meeting?.platform}
                      </dd>
                    </div>
                    <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                      <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                        Date
                      </dt>
                      <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                        {datetimeFormate(meeting?.date)}
                      </dd>
                    </div>
                    <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                      <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                        Time
                      </dt>
                      <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                        {meeting?.time}
                      </dd>
                    </div>
                    <div className="border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">
                      <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                        Created Date
                      </dt>
                      <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                        {datetimeFormate(meeting?.created_date)}
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
                  Meeting Link
                </h3>
              </div>
              <div className="py-4 px-7">
                <Link
                  to={meeting?.link}
                  className="mt-1 text-lg leading-7 font-normal text-blue-600  hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600 sm:mt-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {meeting?.link}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MeetingDetailComp;
