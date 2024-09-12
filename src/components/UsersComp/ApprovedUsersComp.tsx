import React, { useState, useEffect } from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { SlEye } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';
import {
  useGetApprovedUsersForCommunityQuery,
  useUserDisableByAdminMutation,
} from '../../redux/rtk-query/user';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import Loader from '../Loader';
// import { DisableModal } from '../Modal/DisableModal';

const ApprovedUsersComp: React.FC = () => {
  const profile = useSelector(
    (state: RootState) => state.persistedReducer.auth.profile,
  );
  const communityId = useSelector(
    (state: RootState) => state.persistedReducer.auth.community_id,
  );
  const community_id = profile?.community?.id || communityId;
  // const [disableModal, setDisableModal] = useState<boolean>(false);
  // const [currentId, setCurrentId] = useState<string>('');
  const [toggleStates, setToggleStates] = useState<{ [key: string]: boolean }>(
    {},
  );

  const {
    data: users,
    isError,
    isLoading,
  } = useGetApprovedUsersForCommunityQuery(community_id);
  const [disableUser, { isError: userError }] = useUserDisableByAdminMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (users) {
      const newToggleStates = users?.value?.reduce(
        (acc: any, user: any) => ({
          ...acc,
          [user?.id]: user?.account_status || false, // Adjust based on your data structure
        }),
        {},
      );
      setToggleStates(newToggleStates);
    }
  }, [users]);

  const handleToggle = async (userId: string) => {
    const prevState = toggleStates[userId];
    setToggleStates((prev) => ({
      ...prev,
      [userId]: !prevState,
    }));

    try {
      await disableUser({ id: userId }); // API call to disable the user
      // Refetch or handle success response
    } catch (error) {
      setToggleStates((prev) => ({
        ...prev,
        [userId]: prevState,
      }));
    }
  };

  const viewHandler = (user: any) => {
    navigate('/users/user-detail', { state: { user } });
  };

  // function disableHandler(id: any) {
  //   setDisableModal(!disableModal);
  //   setCurrentId(id);
  // }

  return (
    <>
      <Breadcrumb pageName="Approved Users" />
      <div>{isLoading && <Loader />}</div>
      <div>
        {isError ||
          (userError && (
            <p className="text-lg leading-6 font-medium text-red-500">
              System Failed
            </p>
          ))}
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
                      Email
                    </th>
                    <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white">
                      User Type
                    </th>
                    <th className="py-4 px-4 font-medium text-black dark:text-white">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users?.value?.map((user: any, key: number) => (
                    <tr key={key}>
                      <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                        <p className="text-black dark:text-white">
                          {user?.first_name}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <p className="text-black dark:text-white">
                          {user?.last_name}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <p className="text-black dark:text-white">
                          {user?.email}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <p className="text-black dark:text-white">
                          {user?.user_type}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <div className="flex items-center space-x-3.5">
                          <div>
                            <label
                              htmlFor={`toggle-${key}`}
                              className="flex cursor-pointer select-none items-center"
                            >
                              <div className="relative">
                                <input
                                  type="checkbox"
                                  id={`toggle-${key}`}
                                  className="sr-only"
                                  checked={toggleStates[user?.id]}
                                  onChange={() => handleToggle(user?.id)}
                                />
                                <div className="block h-8 w-14 rounded-full bg-meta-9 dark:bg-[#5A616B]"></div>
                                <div
                                  className={`dot absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition ${
                                    toggleStates[user?.id]
                                      ? '!right-1 !translate-x-full !bg-primary dark:!bg-white'
                                      : ''
                                  }`}
                                >
                                  {/* Placeholder for toggle icons */}
                                </div>
                              </div>
                            </label>
                          </div>
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
          {/* {disableModal && (
            <DisableModal
              name="User"
              setModal={setDisableModal}
              id={currentId}
            />
          )} */}
        </div>
      )}
    </>
  );
};

export default ApprovedUsersComp;
