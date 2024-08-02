import React from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { IoMdCheckmark } from 'react-icons/io';
import { RxCross2 } from 'react-icons/rx';
import { SlEye } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';

const users = [
    {
      id: 1,
      first_name: "John",
      last_name: "Doe",
      email: "john.doe@example.com",
      phone_number: "123-456-7890",
      address: "123 Maple Street",
      postal_code: "12345",
      house_number: "123",
      join_date: "",
      created_date: "2021-01-05"
    },
    {
      id: 2,
      first_name: "Jane",
      last_name: "Smith",
      email: "jane.smith@example.com",
      phone_number: "987-654-3210",
      address: "456 Oak Avenue",
      postal_code: "67890",
      house_number: "456",
      join_date: "",
      created_date: "2021-02-10"
    },
    {
      id: 3,
      first_name: "Alice",
      last_name: "Johnson",
      email: "alice.johnson@example.com",
      phone_number: "555-555-5555",
      address: "789 Pine Road",
      postal_code: "11223",
      house_number: "789",
      join_date: "",
      created_date: "2021-03-15"
    },
    {
      id: 4,
      first_name: "Bob",
      last_name: "Brown",
      email: "bob.brown@example.com",
      phone_number: "222-222-2222",
      address: "101 Spruce Blvd",
      postal_code: "22134",
      house_number: "101",
      join_date: "",
      created_date: "2021-04-20"
    }
  ];
    

const PendingUsersComp: React.FC = () => {
  const navigate = useNavigate();

  const viewHandler = (user:any) => {
    navigate('/users/user-detail', {state: {user}});
  };
  return (
    <>
      <Breadcrumb pageName="Pending Users" />

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
                    Email
                  </th>
                  <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white">
                    Phone Number
                  </th>
                  <th className="py-4 px-4 font-medium text-black dark:text-white">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {users?.map((user, key) => (
                  <tr key={key}>
                    <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                      <p className="font-medium text-black dark:text-white">
                        {user.first_name}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {user.last_name}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {user.email}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {user.phone_number}
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
                        <button
                          className="hover:text-primary hover:bg-slate-100 rounded-full p-1"
                          id="view-button"
                          onClick={() => viewHandler(user)}
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

export default PendingUsersComp;
