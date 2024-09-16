import React, { useState } from 'react';
import Breadcrumb from '../Breadcrumbs/Breadcrumb';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Loader from '../Loader';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { DeleteModal } from '../Modal/DeleteModal';
import { useForm } from 'react-hook-form';
import {
  useAddSecurityGuardMutation,
  useGetSecurityGuardQuery,
} from '../../redux/rtk-query/community';
import SuccessMessage from '../Alert/SuccessMessage';
import ErrorMessage from '../Alert/ErrorMessage';

type AddType = {
  community_id: string;
  email: string;
  password: string;
  confirm_password: string;
};

const SecurityGuardComp: React.FC = () => {
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
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
    data: securityGuard,
    isError,
    isLoading,
  } = useGetSecurityGuardQuery(community_id);

  const [
    addSecurityGuard,
    {
      isSuccess: securitySuccess,
      isLoading: securityLoading,
      isError: securityError,
    },
  ] = useAddSecurityGuardMutation();

  function deleteHandler(id: any) {
    setDeleteModal(!deleteModal);
    setCurrentId(id);
  }

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<AddType>();

  const onSubmit: any = async (data: any) => {
    try {
      const response = await addSecurityGuard(data).unwrap();

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
      <Breadcrumb pageName="Security Guard" />
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

              <div className="mb-4">
                <label
                  htmlFor={`email`}
                  className="mb-2.5 text-base block text-black dark:text-white"
                >
                  Email <span className="text-meta-1">*</span>
                </label>
                <input
                  type="text"
                  id={`email`}
                  {...register(`email`, {
                    required: 'This field is required',
                    pattern: {
                      value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                      message: 'Invalid email formate',
                    },
                  })}
                  placeholder={`Enter email`}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
                {errors?.email && (
                  <p className="text-red-500">{errors?.email?.message}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor={`password`}
                  className="mb-2.5 text-base block text-black dark:text-white"
                >
                  Password <span className="text-meta-1">*</span>
                </label>
                <input
                  type="password"
                  id={`password`}
                  {...register(`password`, {
                    required: 'This field is required',
                    pattern: {
                      value: /^[^\s]{8,14}$/,
                      message: 'Password must be 8-14 characters',
                    },
                  })}
                  placeholder={`Enter password`}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
                {errors?.password && (
                  <p className="text-red-500">{errors?.password?.message}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor={`confirm_password`}
                  className="mb-2.5 text-base block text-black dark:text-white"
                >
                  Confirm Password <span className="text-meta-1">*</span>
                </label>
                <input
                  type="password"
                  id={`confirm_password`}
                  {...register(`confirm_password`, {
                    required: 'This field is required',
                    pattern: {
                      value: /^[^\s]{8,14}$/,
                      message: 'Confirm password must be 8-14 characters',
                    },
                  })}
                  placeholder={`Enter confirm password`}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
                {errors?.confirm_password && (
                  <p className="text-red-500">
                    {errors?.confirm_password?.message}
                  </p>
                )}
              </div>

              {
                <div className="w-fill flex justify-end mb-3">
                  <button
                    type="submit"
                    className="flex w-30 sm:w-52 mt-3 justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                  >
                    {!securityLoading ? 'Add' : <Loader />}
                  </button>
                </div>
              }

              {securitySuccess && showSuccessMessage && (
                <SuccessMessage
                  message={addSuccess}
                  setShowMessage={setShowSuccessMessage}
                />
              )}
              {addError && showErrorMessage && (
                <ErrorMessage
                  message={addError}
                  setShowMessage={setShowErrorMessage}
                />
              )}
            </form>
            <div id="number-list" className="xl:w-1/2 w-full mt-8">
              <table className="w-full table-auto mb-5">
                <thead>
                  <tr className="bg-gray-2 text-left dark:bg-meta-4 ">
                    <th className="min-w-[220px]  py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                      email
                    </th>
                    <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {securityGuard?.value?.map((guard: any, key: number) => (
                    <tr key={key}>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <p className="text-black dark:text-white">
                          {guard?.email}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <div className="flex items-center space-x-3.5">
                          <button
                            className="hover:text-primary bg-red-400 hover:bg-slate-100 rounded-full p-1"
                            onClick={() => deleteHandler(guard?.id)}
                            id="cross-button"
                          >
                            <RiDeleteBin6Line
                              size={20}
                              className="text-white"
                            />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            {deleteModal && (
              <DeleteModal
                name="Security Guard"
                setModal={setDeleteModal}
                id={currentId}
              />
            )}
          </div>
        </>
      )}
    </>
  );
};

export default SecurityGuardComp;
