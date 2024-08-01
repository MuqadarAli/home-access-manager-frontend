import React from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { IoMdCheckmark } from 'react-icons/io';
import { RxCross2 } from 'react-icons/rx';
import { SlEye } from 'react-icons/sl';
import { Link, useNavigate } from 'react-router-dom';

const communities = [
  {
    name: 'Green Valley Community',
    communityType: 'Residential',
    description: 'A peaceful residential community surrounded by nature.',
    address: '123 Green Valley Rd',
    area: 'Green Valley',
    zip_code: '12345',
    admin: {
      name: 'John Doe',
      email: 'johndoe@greenvalley.com',
      phone: '555-123-4567',
    },
  },
  {
    name: 'Tech Hub Community',
    communityType: 'Commercial',
    description: 'A vibrant tech community with state-of-the-art facilities.',
    address: '456 Tech Park Ave',
    area: 'Tech District',
    zip_code: '67890',
    admin: {
      name: 'Jane Smith',
      email: 'janesmith@techhub.com',
      phone: '555-987-6543',
    },
  },
  {
    name: 'Cultural Arts Community',
    communityType: 'Cultural',
    description: 'A community focused on promoting arts and culture.',
    address: '789 Arts Center Blvd',
    area: 'Cultural Arts',
    zip_code: '11223',
    admin: {
      name: 'Emily Johnson',
      email: 'emilyjohnson@culturalarts.com',
      phone: '555-234-5678',
    },
  },
  {
    name: 'Fitness and Wellness Community',
    communityType: 'Recreational',
    description: 'A community dedicated to fitness and wellness activities.',
    address: '321 Wellness Way',
    area: 'Health District',
    zip_code: '33445',
    admin: {
      name: 'Michael Brown',
      email: 'michaelbrown@wellnesscommunity.com',
      phone: '555-345-6789',
    },
  },
  {
    name: 'Eco-Friendly Community',
    communityType: 'Sustainable',
    description: 'A community committed to sustainable living practices.',
    address: '654 Eco Lane',
    area: 'Green Zone',
    zip_code: '55667',
    admin: {
      name: 'Olivia Wilson',
      email: 'oliviawilson@ecofriendly.com',
      phone: '555-456-7890',
    },
  },
];

const ApproveCommunities: React.FC = () => {
  const navigate = useNavigate();

  const viewHandler = (community:any) => {
    navigate('/communities/community-detail', {state: {community}});
  };
  return (
    <>
      <Breadcrumb pageName="Approve Communities" />

      <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
          <div className="max-w-full overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-2 text-left dark:bg-meta-4">
                  <th className="min-w-[220px]  py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                    Name
                  </th>
                  <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white ">
                    Community Type
                  </th>
                  <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white">
                    Area
                  </th>
                  <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white">
                    Admin
                  </th>
                  <th className="py-4 px-4 font-medium text-black dark:text-white">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {communities.map((community, key) => (
                  <tr key={key}>
                    <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                      <p className="font-medium text-black dark:text-white">
                        {community.name}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {community.area}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {community.communityType}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {community.admin.name}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <div className="flex items-center space-x-3.5">
                        <button
                          className="hover:text-primary hover:bg-slate-100 rounded-full p-1"
                          id="mark-button"
                        >
                          <IoMdCheckmark size={20} />
                        </button>
                        <button
                          className="hover:text-primary hover:bg-slate-100 rounded-full p-1"
                          id="cross-button"
                        >
                          <RxCross2 size={20} />
                        </button>
                        <button
                          className="hover:text-primary hover:bg-slate-100 rounded-full p-1"
                          id="view-button"
                          onClick={() => viewHandler(community)}
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

export default ApproveCommunities;
