import React, { useState } from 'react';
import Breadcrumb from '../Breadcrumbs/Breadcrumb';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { SlEye } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';
import Loader from '../Loader';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { DeleteModal } from '../Modal/DeleteModal';
import { useGetAlertsForCommunityQuery } from '../../redux/rtk-query/alert';
import { useForm } from 'react-hook-form';
import {
  useAddEmergencyNumberMutation,
  useGetEmergencyNumbersQuery,
} from '../../redux/rtk-query/community';
import SuccessMessage from '../Alert/SuccessMessage';
import ErrorMessage from '../Alert/ErrorMessage';

type AddType = {
  type: string;
  community_id: string;
  number: string;
  personal_help: string;
  community_help: string;
  burglary: string;
  fire_alarm: string;
};

const AlertComp: React.FC = () => {
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [deleteEmergencyModal, setDeleteEmergencyModal] = useState<boolean>(false);
  const [currentId, setCurrentId] = useState<string>('');
  const [addError, setAddError] = useState<string>('');
  const [addSuccess, setAddSuccess] = useState<string>('');
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
  const profile = useSelector(
    (state: RootState) => state.persistedReducer.auth.profile,
  );
  const communityId = useSelector(
    (state: RootState) => state.persistedReducer.auth.community_id,
  );
  const community_id = profile?.community?.id || communityId;
  const {
    data: alerts,
    isError,
    isLoading,
  } = useGetAlertsForCommunityQuery(community_id);

  const { data: emergency } = useGetEmergencyNumbersQuery(community_id);

  const [
    addEmergency,
    {
      isSuccess: emergencySuccess,
      isLoading: emergencyLoading,
      isError: emergencyError,
    },
  ] = useAddEmergencyNumberMutation();

  const navigate = useNavigate();
  const viewHandler = (alert: any) => {
    navigate('/alerts/alert-detail', { state: { alert } });
  };

  function deleteHandler(id: any) {
    setDeleteModal(!deleteModal);
    setCurrentId(id);
  }

  function deleteEmergencyNumberHandler(id: any) {
    setDeleteEmergencyModal(!deleteModal);
    setCurrentId(id);
  }

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<AddType>();

  const types = [
    { value: 'personal help', id: '1' },
    { value: 'fire alarm', id: '2' },
    { value: 'burglary', id: '3' },
    { value: 'community help', id: '4' },
  ];

  const onSubmit: any = async (data: any) => {
    try {
      const response = await addEmergency(data).unwrap();
      if (response?.statusCode == 201 || response?.statusCode == 200) {
        setAddSuccess(response?.message);
        setShowSuccessMessage(true);
        reset();
      } else {
        setAddError(response?.message);
        setShowErrorMessage(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Breadcrumb pageName="Alert" />
      <div>{isLoading && <Loader />}</div>
      <div>
        {isError && (
          <p className="text-lg leading-6 font-medium text-red-500">
            System Failed
          </p>
        )}
      </div>
      {!isLoading && (
        <>
          <div
            id="alert-input"
            className="xl:flex  gap-5 rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1"
          >
            <form
              method="post"
              onSubmit={handleSubmit(onSubmit)}
              className="xl:w-1/2 w-full pb-5"
            >
              <input
                type="hidden"
                value={community_id}
                {...register(`community_id`)}
              />

              <div className="w-full mb-3">
                <div>
                  <label
                    htmlFor="type"
                    className="mb-3 text-base block text-black dark:text-white"
                  >
                    Type <span className="text-meta-1">*</span>
                  </label>

                  <div className="relative z-20 bg-white dark:bg-form-input">
                    <select
                      className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input ${'text-black dark:text-white'}`}
                      id="type"
                      {...register('type', {
                        required: 'This field is required',
                      })}
                    >
                      <option
                        value=""
                        // disabled
                        className="text-body text-base dark:text-bodydark"
                      >
                        Select community type
                      </option>
                      {types?.map((type: any) => (
                        <option
                          value={type?.value}
                          key={type?.id}
                          className="text-body text-base dark:text-bodydark"
                        >
                          {type?.value}
                        </option>
                      ))}
                    </select>

                    <span className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.8">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                            fill="#637381"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </div>
                  {errors?.type && (
                    <p className="text-red-500">{errors?.type?.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor={`number`}
                  className="mb-2.5 text-base block text-black dark:text-white"
                >
                  Number <span className="text-meta-1">*</span>
                </label>
                <input
                  type="text"
                  id={`number`}
                  {...register(`number`, {
                    required: 'This field is required',
                    pattern: {
                      value: /^.{1,40}$/,
                      message:
                        'The number must be no longer than 40 characters.',
                    },
                  })}
                  placeholder={`Enter number`}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
                {errors?.number && (
                  <p className="text-red-500">{errors?.number?.message}</p>
                )}
              </div>
              {
                <div className="w-fill flex justify-end mb-3">
                  <button
                    type="submit"
                    className="flex w-30 sm:w-52 mt-3 justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                  >
                    {!emergencyLoading ? 'Add' : <Loader />}
                  </button>
                </div>
              }

              {emergencySuccess && showSuccessMessage && (
                <SuccessMessage
                  message={addSuccess}
                  setShowMessage={setShowSuccessMessage}
                />
              )}
              {emergencyError && showErrorMessage && (
                <ErrorMessage
                  message={addError}
                  setShowMessage={setShowErrorMessage}
                />
              )}
            </form>
            <div id="number-list" className="xl:w-1/2 w-full mt-8">
              <table className="w-full table-auto mb-5">
                <thead>
                  <tr className="bg-gray-2 text-left dark:bg-meta-4">
                    <th className="min-w-[220px]  py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                      Type
                    </th>
                    <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white">
                      Number
                    </th>
                    <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {emergency?.value?.map((type: any, key: number) => (
                    <tr key={key} className="">
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark xl:pl-11">
                        <p className="text-black dark:text-white">
                          {type?.type}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <p className="text-black dark:text-white">
                          {type.number}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <button
                          className="hover:text-primary bg-red-400 hover:bg-slate-100 rounded-full p-1"
                          onClick={() => deleteEmergencyNumberHandler(type?.id)}
                          id="cross-button"
                        >
                          <RiDeleteBin6Line size={20} className="text-white" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
              <div className="max-w-full overflow-x-auto">
                <table className="w-full table-auto mb-5">
                  <thead>
                    <tr className="bg-gray-2 text-left dark:bg-meta-4">
                      <th className="min-w-[220px]  py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                        Type
                      </th>
                      <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white ">
                        Description
                      </th>
                      <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white">
                        User Name
                      </th>
                      <th className="py-4 px-4 font-medium text-black dark:text-white">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {alerts?.value?.map((alert: any, key: number) => (
                      <tr key={key}>
                        <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                          <p className=" text-black dark:text-white">
                            {alert?.type}
                          </p>
                        </td>
                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                          <p className="text-black dark:text-white">
                            {alert?.description}
                          </p>
                        </td>

                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                          <p className="text-black dark:text-white">
                            {`${alert?.user?.first_name} ${alert?.user?.last_name}`}
                          </p>
                        </td>
                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                          <div className="flex items-center space-x-3.5">
                            <button
                              className="hover:text-primary bg-red-400 hover:bg-slate-100 rounded-full p-1"
                              onClick={() => deleteHandler(alert?.id)}
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
                              onClick={() => viewHandler(alert)}
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
                name="Alert"
                setModal={setDeleteModal}
                id={currentId}
              />
            )}
            {deleteEmergencyModal && (
              <DeleteModal
                name="Emergency Number"
                setModal={setDeleteEmergencyModal}
                id={currentId}
              />
            )}
          </div>
        </>
      )}
    </>
  );
};

export default AlertComp;
