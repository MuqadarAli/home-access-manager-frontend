import React, { useState, useEffect } from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { SlEye } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';
import {
  useCommunityDisableMutation,
  useGetApprovedCommunityQuery,
} from '../../redux/rtk-query/community';
import Loader from '../../components/Loader';
import { useDispatch } from 'react-redux';
import { setCommunityId } from '../../redux/slice/auth';
// import { DisableModal } from '../../components/Modal/DisableModal';

const ApprovedCommunities: React.FC = () => {
  // const [disableModal, setDisableModal] = useState<boolean>(false);
  // const [currentId, setCurrentId] = useState<string>('');
  const [toggleStates, setToggleStates] = useState<{ [key: string]: boolean }>(
    {},
  );
  const dispatch = useDispatch();
  const [disableCommunity, { isError: communityError }] =
    useCommunityDisableMutation();

  const navigate = useNavigate();
  const {
    data: communities,
    isLoading,
    isError,
    refetch,
  } = useGetApprovedCommunityQuery(undefined);

  useEffect(() => {
    // Set initial toggle states based on the communities fetched
    if (communities) {
      const newToggleStates = communities?.value?.reduce(
        (acc: any, community: any) => ({
          ...acc,
          [community.id]: !community?.isDisable,
        }),
        {},
      );
      setToggleStates(newToggleStates);
    }
  }, [communities]);

  const viewHandler = (community: any) => {
    navigate('/super-admin/communities/community-detail', {
      state: { community },
    });
  };

  const navigateToAdminDashboardHandler = (community_id: string) => {
    dispatch(setCommunityId(community_id));
    navigate('/dashboard');
  };

  // const disableHandler = (id: any) => {
  //   setDisableModal(!disableModal);
  //   setCurrentId(id);
  // };

  const handleToggle = async (community_id: string) => {
    const prevState = toggleStates[community_id];
    setToggleStates((prevStates) => ({
      ...prevStates,
      [community_id]: !prevState,
    }));

    const res = await disableCommunity({ id: community_id });
    if (res.error) {
      // Handle failure: revert toggle state
      setToggleStates((prevStates) => ({
        ...prevStates,
        [community_id]: prevState,
      }));
    } else {
      refetch(); // Optional: refetch data to keep UI in sync with server
    }
  };

  return (
    <>
      <Breadcrumb pageName="Approved Communities" />
      <div>{isLoading && <Loader />}</div>
      <div>
        {(isError || communityError) && (
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
                    <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white">
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
                      <td
                        className="border-b border-[#eee] cursor-pointer hover:bg-slate-50 py-5 px-4 pl-9 dark:border-strokedark xl:pl-11"
                        onClick={() =>
                          navigateToAdminDashboardHandler(community?.id)
                        }
                      >
                        <p className="font-medium hover:text-primary text-black dark:text-white">
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
                                  checked={
                                    toggleStates[community?.id] !== undefined
                                      ? toggleStates[community?.id]
                                      : !community?.isDisable
                                  }
                                  onChange={() => handleToggle(community?.id)}
                                />
                                <div className="block h-8 w-14 rounded-full bg-meta-9 dark:bg-[#5A616B]"></div>
                                <div
                                  className={`dot absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition ${
                                    (toggleStates[community?.id] !== undefined
                                      ? toggleStates[community?.id]
                                      : !community?.isDisable) &&
                                    '!right-1 !translate-x-full !bg-primary dark:!bg-white'
                                  }`}
                                >
                                  {/* icons for toggle */}
                                </div>
                              </div>
                            </label>
                          </div>
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
          {/* {disableModal && (
            <DisableModal
              name="Community"
              setModal={setDisableModal}
              id={currentId}
            />
          )} */}
        </div>
      )}
    </>
  );
};

export default ApprovedCommunities;
