import React, { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
// import { IoMdCheckmark } from 'react-icons/io';
import { RxCross2 } from 'react-icons/rx';
import { SlEye } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';
import { useGetApprovedCommunityQuery } from '../../redux/rtk-query/community';
import Loader from '../../components/Loader';
import { DisableModal } from '../../components/Modal/DisableModal';

const ApprovedCommunities: React.FC = () => {
  const [disableModal, setDisableModal] = useState<boolean>(false);
  const [currentId, setCurrentId] = useState<string>('');
  const navigate = useNavigate();
  const {
    data: communities,
    isError,
    isLoading,
  } = useGetApprovedCommunityQuery(undefined);

  const viewHandler = (community: any) => {
    navigate('/super-admin/communities/community-detail', { state: { community } });
  };

  function disableHandler(id: any) {
    setDisableModal(!disableModal);
    setCurrentId(id);
  }
  return (
    <>
      <Breadcrumb pageName="Approved Communities" />
      <div>{isLoading && <Loader />}</div>
      <div>
        {isError && (
          <p className="text-lg leading-6 font-medium text-red-500">
            System Failed
          </p>
        )}
      </div>
      <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
          <div className="max-w-full overflow-x-auto">
            <table className="w-full table-auto mb-5">
              <thead>
                <tr className="bg-gray-2 text-left dark:bg-meta-4">
                  <th className="min-w-[220px]  py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                    Name
                  </th>
                  <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white ">
                    Community Type
                  </th>
                  <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white">
                    City
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
                {communities?.value?.map((community: any, key: number) => (
                  <tr key={key}>
                    <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                      <p className="font-medium text-black dark:text-white">
                        {community?.name}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {community?.community_type?.name}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {community.city}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {community?.admin?.full_name}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <div className="flex items-center space-x-3.5">
                        <button
                          className="hover:text-primary bg-red-400 hover:bg-slate-100 rounded-full p-1"
                          id="cross-button"
                          onClick={() => {
                            disableHandler(community?.id);
                          }}
                        >
                          <RxCross2 size={20} className="text-white" />
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
        {disableModal && (
          <DisableModal
            name="Community"
            setModal={setDisableModal}
            id={currentId}
          />
        )}
      </div>
    </>
  );
};

export default ApprovedCommunities;
