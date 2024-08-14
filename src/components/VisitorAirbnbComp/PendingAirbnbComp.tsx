import React from 'react';
import Breadcrumb from '../Breadcrumbs/Breadcrumb';
import { IoMdCheckmark } from 'react-icons/io';
import { RxCross2 } from 'react-icons/rx';

const airbnbs = [
    {
      id: 1,
      first_name: "Emily",
      last_name: "Watson",
      from_date: "2024-08-10",
      to_date: "2024-08-15"
    },
    {
      id: 2,
      first_name: "Michael",
      last_name: "Brown",
      from_date: "2024-09-01",
      to_date: "2024-09-05"
    },
    {
      id: 3,
      first_name: "Sophia",
      last_name: "Davis",
      from_date: "2024-10-12",
      to_date: "2024-10-20"
    },
    {
      id: 4,
      first_name: "James",
      last_name: "Taylor",
      from_date: "2024-11-22",
      to_date: "2024-11-28"
    },
    {
      id: 5,
      first_name: "Olivia",
      last_name: "Martinez",
      from_date: "2024-12-05",
      to_date: "2024-12-12"
    }
  ];
   

const PendingAirbnbComp: React.FC = () => {

  return (
    <>
      <Breadcrumb pageName="Pending Airbnb" />

      <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
          <div className="max-w-full overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-2 text-left dark:bg-meta-4">
                  <th className="min-w-[220px]  py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                    First Name
                  </th>
                  <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white ">
                    Last Name
                  </th>
                  <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white">
                    From Date
                  </th>
                  <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white">
                    To Date
                  </th>
                  <th className="py-4 px-4 font-medium text-black dark:text-white">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {airbnbs?.map((airbnb, key) => (
                  <tr key={key}>
                    <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                      <p className="font-medium text-black dark:text-white">
                        {airbnb.first_name}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {airbnb.last_name}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {airbnb.from_date}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {airbnb.to_date}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <div className="flex items-center space-x-3.5">
                        <button
                          className="hover:text-primary bg-green-400 hover:bg-slate-100 rounded-full p-1"
                          id="mark-button"
                        >
                          <IoMdCheckmark size={20} className='text-white'/>
                        </button>
                        <button
                          className="hover:text-primary bg-red-400 hover:bg-slate-100 rounded-full p-1"
                          id="cross-button"
                        >
                          <RxCross2 size={20} className='text-white'/>
                        </button>
                       
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default PendingAirbnbComp;
