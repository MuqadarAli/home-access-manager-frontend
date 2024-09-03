import React, { useState } from 'react';
import Breadcrumb from '../Breadcrumbs/Breadcrumb';
import { IoMdCheckmark } from 'react-icons/io';
import { RxCross2 } from 'react-icons/rx';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useGetPendingAirbnbForCommunityQuery } from '../../redux/rtk-query/airbnb';
import Loader from '../Loader';
import { ApproveModal } from '../Modal/ApproveModal';
import { DisableModal } from '../Modal/DisableModal';

const PendingAirbnbComp: React.FC = () => {
  const [approveModal, setApproveModal] = useState<boolean>(false);
  const [disableModal, setDisableModal] = useState<boolean>(false);
  const [currentId, setCurrentId] = useState<string>('');
  const profile = useSelector(
    (state: RootState) => state.persistedReducer.auth.profile,
  );
  const community_id = profile?.community?.id;
  const {
    data: airbnbList,
    isError,
    isLoading,
  } = useGetPendingAirbnbForCommunityQuery(community_id);

  function approveHandler(id: any) {
    setApproveModal(!approveModal);
    setCurrentId(id);
  }

  function disableHandler(id: any) {
    setDisableModal(!disableModal);
    setCurrentId(id);
  }
  return (
    <>
      <Breadcrumb pageName="Pending Airbnb" />
      <div>{isLoading && <Loader />}</div>
      <div>
        {isError && (
          <p className="text-lg leading-6 font-medium text-red-500">
            System Failed
          </p>
        )}
      </div>
      {!isLoading && (
        <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <div className="max-w-full overflow-x-auto">
              <table className="w-full table-auto mb-5">
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
                  {airbnbList?.value?.map((airbnb: any, key: number) => (
                    <tr key={key}>
                      <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                        <p className=" text-black dark:text-white">
                          {airbnb?.first_name}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <p className="text-black dark:text-white">
                          {airbnb?.last_name}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <p className="text-black dark:text-white">
                          {airbnb?.from_date}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <p className="text-black dark:text-white">
                          {airbnb?.to_date}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <div className="flex items-center space-x-3.5">
                          <button
                            className="hover:text-primary bg-green-400 hover:bg-slate-100 rounded-full p-1"
                            id="mark-button"
                            onClick={() => {
                              approveHandler(airbnb?.id);
                            }}
                          >
                            <IoMdCheckmark size={20} className="text-white" />
                          </button>
                          <button
                            className="hover:text-primary bg-red-400 hover:bg-slate-100 rounded-full p-1"
                            id="cross-button"
                            onClick={() => {
                              disableHandler(airbnb?.id);
                            }}
                          >
                            <RxCross2 size={20} className="text-white" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {approveModal && (
            <ApproveModal
              name="Airbnb"
              setModal={setApproveModal}
              id={currentId}
            />
          )}
          {disableModal && (
            <DisableModal
              name="Airbnb"
              setModal={setDisableModal}
              id={currentId}
            />
          )}
        </div>
      )}
    </>
  );
};

export default PendingAirbnbComp;
