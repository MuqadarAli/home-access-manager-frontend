import { useLocation } from 'react-router-dom';
import Breadcrumb from '../Breadcrumbs/Breadcrumb';
import { datetimeFormate } from '../../utils/datetimeFormate';

const CommunityLeaderDetailComp = () => {
  const locationData = useLocation();
  const communityLeader = locationData.state?.communityLeader;
  return (
    <>
      <div className="mx-auto">
        <Breadcrumb pageName="Community Leader Detail" />

        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-5 xl:col-span-3">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Community Leader Information
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
                        {communityLeader?.name}
                      </dd>
                    </div>
                    <div className=" px-4 py-6 sm:col-span-1 sm:px-0">
                      <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                        Role
                      </dt>
                      <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                        {communityLeader?.role}
                      </dd>
                    </div>
                    <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                      <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                        Email
                      </dt>
                      <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                        {communityLeader?.email}
                      </dd>
                    </div>
                    <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                      <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                        Created Date
                      </dt>
                      <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                        {datetimeFormate(communityLeader?.created_at)}
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
                Image
              </h3>
            </div>
            {communityLeader?.image_url && <div className="p-7">
              <img
                alt="user-image"
                src={communityLeader?.image_url}
                className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border border-dashed border-primary bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5"
              ></img>
            </div>}
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default CommunityLeaderDetailComp;
