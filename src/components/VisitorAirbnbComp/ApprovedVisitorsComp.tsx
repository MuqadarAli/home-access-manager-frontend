import React from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { RxCross2 } from 'react-icons/rx';
import { SlEye } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';

const visitors = [
    {
      id: 1,
      first_name: "John",
      last_name: "Doe",
      date_of_visit: "2023-08-01",
      access_method: "walk in",
      email: "john.doe@example.com",
      address: "123 Maple Street",
      purpose_of_visit: "Meeting with HR",
      image: "path/to/image1.jpg"
    },
    {
      id: 2,
      first_name: "Jane",
      last_name: "Smith",
      date_of_visit: "2023-08-02",
      access_method: "drive in",
      email: "jane.smith@example.com",
      address: "456 Oak Avenue",
      purpose_of_visit: "Business consultation",
      image: "path/to/image2.jpg"
    },
    {
      id: 3,
      first_name: "Alice",
      last_name: "Johnson",
      date_of_visit: "2023-08-03",
      access_method: "walk in",
      email: "alice.johnson@example.com",
      address: "789 Pine Road",
      purpose_of_visit: "Job interview",
      image: "path/to/image3.jpg"
    },
    {
      id: 4,
      first_name: "Bob",
      last_name: "Brown",
      date_of_visit: "2023-08-04",
      access_method: "drive in",
      email: "bob.brown@example.com",
      address: "101 Spruce Blvd",
      purpose_of_visit: "Product demonstration",
      image: "path/to/image4.jpg"
    }
  ];
    

const ApprovedVisitorsComp: React.FC = () => {
  const navigate = useNavigate();

  const viewHandler = (visitor:any) => {
    navigate('/visitors-airbnb/visitor-detail', {state: {visitor}});
  };
  return (
    <>
      <Breadcrumb pageName="Approved Visitors" />

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
                    Date Of Visit
                  </th>
                  <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white">
                    Access Method
                  </th>
                  <th className="py-4 px-4 font-medium text-black dark:text-white">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {visitors?.map((visitor, key) => (
                  <tr key={key}>
                    <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                      <p className="font-medium text-black dark:text-white">
                        {visitor.first_name}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {visitor.last_name}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {visitor.date_of_visit}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {visitor.access_method}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <div className="flex items-center space-x-3.5">
                        {/* <button
                          className="hover:text-primary bg-green-400 hover:bg-slate-100 rounded-full p-1"
                          id="mark-button"
                        >
                          <IoMdCheckmark size={20} className='text-white'/>
                        </button> */}
                        <button
                          className="hover:text-primary bg-red-400 hover:bg-slate-100 rounded-full p-1"
                          id="cross-button"
                        >
                          <RxCross2 size={20} className='text-white'/>
                        </button>
                        <button
                          className="hover:text-primary hover:bg-slate-100 rounded-full p-1"
                          id="view-button"
                          onClick={() => viewHandler(visitor)}
                        >
                          <SlEye size={20} />
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

export default ApprovedVisitorsComp;
