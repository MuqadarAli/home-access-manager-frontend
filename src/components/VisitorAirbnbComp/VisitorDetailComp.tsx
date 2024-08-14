import React from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { useLocation } from 'react-router-dom';

const VisitorDetailComp: React.FC = () => {
    const locationData = useLocation()
    const visitor = locationData.state?.visitor;        
    
  return (
    <>
      <Breadcrumb pageName="Visitor Detail" />

      <div className="overflow-hidden p-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        
        <div className="">
          <dl className="grid grid-cols-1 sm:grid-cols-2">
            <div className=" px-4 py-6 sm:col-span-1 sm:px-0">
              <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                First Name
              </dt>
              <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                {visitor?.first_name}
              </dd>
            </div>
            <div className=" px-4 py-6 sm:col-span-1 sm:px-0">
              <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                Last Name
              </dt>
              <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
              {visitor?.last_name}
              </dd>
            </div>
           
            <div className="border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">
              <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                Address
              </dt>
              <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
              {visitor?.address}
              </dd>
            </div>
            <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
              <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                Email Address
              </dt>
              <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
              {visitor?.email}
              </dd>
            </div>
            <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
              <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                Purpose Of Visit
              </dt>
              <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                {visitor?.purpose_of_visit}
              </dd>
            </div>
            
            <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
              <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                Date of Visit
              </dt>
              <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
              {visitor?.date_of_visit}
              </dd>
            </div>
            <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
              <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                Access Method
              </dt>
              <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                {visitor?.access_method}
              </dd>
            </div>
            
          </dl>
        </div>
      </div>
    </>
  );
};

export default VisitorDetailComp;
