import React, { useState } from 'react';
import Breadcrumb from '../Breadcrumbs/Breadcrumb';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { SlEye } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';
import Loader from '../Loader';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
// import { useGetFoundItemsForCommunityQuery } from '../../redux/rtk-query/foundItems';
import { DeleteModal } from '../Modal/DeleteModal';
import { useGetCommunityLeaderQuery } from '../../redux/rtk-query/communityLeader';

const CommunityLeaderComp: React.FC = () => {
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [currentId, setCurrentId] = useState<string>('');
  const profile = useSelector(
    (state: RootState) => state.persistedReducer.auth.profile,
  );
  const communityId = useSelector(
    (state: RootState) => state.persistedReducer.auth.community_id,
  );
  
  const community_id = profile?.community?.id || communityId;
  const {
    data: community_leader,
    isError,
    isLoading,
  } = useGetCommunityLeaderQuery(community_id);

  const navigate = useNavigate();
  const viewHandler = (communityLeader: any) => {
    navigate('/community-leader/detail', { state: { communityLeader } });
  };

  function deleteHandler(id: any) {
    setDeleteModal(!deleteModal);
    setCurrentId(id);
  }
  return (
    <>
      <Breadcrumb pageName="Community Leaders" />
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
                      Name
                    </th>
                    <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white ">
                      Email
                    </th>
                    <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white">
                      Role
                    </th>
                    <th className="py-4 px-4 font-medium text-black dark:text-white">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {community_leader?.value?.map((foundItem: any, key: number) => (
                    <tr key={key}>
                      <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                        <p className=" text-black dark:text-white">
                          {foundItem?.name}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <p className="text-black dark:text-white">
                          {foundItem?.email}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <p className="text-black dark:text-white">
                          {foundItem?.role}
                        </p>
                      </td>
                      
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <div className="flex items-center space-x-3.5">
                          <button
                            className="hover:text-primary bg-red-400 hover:bg-slate-100 rounded-full p-1"
                            onClick={() => deleteHandler(foundItem?.id)}
                            id="cross-button"
                          >
                            <RiDeleteBin6Line
                              size={20}
                              className="text-white"
                            />
                          </button>
                          <button
                            className="hover:text-primary hover:bg-slate-100 rounded-full p-1"
                            id="view-button"
                            onClick={() => viewHandler(foundItem)}
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
          {deleteModal && (
            <DeleteModal
              name="Community Leader"
              setModal={setDeleteModal}
              id={currentId}
            />
          )}
        </div>
      )}
    </>
  );
};

export default CommunityLeaderComp;
