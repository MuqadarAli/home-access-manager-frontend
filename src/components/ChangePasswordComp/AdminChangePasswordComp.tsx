import { useSelector } from 'react-redux';
import Breadcrumb from '../Breadcrumbs/Breadcrumb';
import { RootState } from '../../redux/store';
import { useForm } from 'react-hook-form';
import { useAdminChangePassMutation } from '../../redux/rtk-query/auth';
import SuccessMessage from '../Alert/SuccessMessage';
import ErrorMessage from '../Alert/ErrorMessage';
import { useState } from 'react';
import Loader from '../Loader';

type FormType = {
  id: string;
  old_password: string;
  new_password: string;
  confirm_password: string;
};

const AdminChangePassComp = () => {
  const [addError, setAddError] = useState<string | null>(null);
  const [addSuccess, setAddSuccess] = useState<string | null>(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
  const profile = useSelector(
    (state: RootState) => state.persistedReducer.auth.profile,
  );
  const [changePassword, { isLoading, isError, isSuccess }] =
    useAdminChangePassMutation();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormType>();

  const onSubmit: any = async (data: any) => {
    try {
      const response = await changePassword(data).unwrap();
      if (response?.statusCode == 200) {
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
      <div className="mx-auto max-full">
        <Breadcrumb pageName="Change Password" />
        <div>
          {isError && (
            <p className="text-lg leading-6 font-medium text-red-500">
              System Failed
            </p>
          )}
        </div>
        <div className="flex w-full px-10 justify-center gap-8">
          <div className="w-full xl:w-1/2">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Change Password
                </h3>
              </div>
              <div className="p-7">
                <form action="post" onSubmit={handleSubmit(onSubmit)} className='mb-3'>
                  <input
                    className="hidden"
                    {...register('id')}
                    value={profile?.id}
                  />
                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="old_password"
                    >
                      Old Password
                    </label>
                    <div className="relative">
                      <input
                        className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="password"
                        {...register('old_password', {
                          required: 'This field is required',
                          pattern: {
                            value: /^[^\s]{8,14}$/,
                            message: 'Old password must be 8-14 characters',
                          },
                        })}
                        id="old_password"
                        placeholder="Enter old password"
                      />
                      {errors?.old_password && (
                        <p className="text-red-500">
                          {errors?.old_password?.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="new_password"
                    >
                      New Password
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="password"
                      {...register('new_password', {
                        required: 'This field is required',
                        pattern: {
                          value: /^[^\s]{8,14}$/,
                          message: 'New password must be 8-14 characters',
                        },
                      })}
                      id="new_password"
                      placeholder="Enter new password"
                    />
                    {errors?.new_password && (
                      <p className="text-red-500">
                        {errors?.new_password?.message}
                      </p>
                    )}
                  </div>

                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="confirm_password"
                    >
                      Confirm Password
                    </label>
                    <div className="relative">
                      <input
                        className="w-full rounded border border-stroke bg-gray py-3 px-4.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="password"
                        {...register('confirm_password', {
                          required: 'This field is required',
                          pattern: {
                            value: /^[^\s]{8,14}$/,
                            message: 'Confirm password must be 8-14 characters',
                          },
                        })}
                        id="confirm_password"
                        placeholder="Enter confirm password"
                      ></input>
                      {errors?.confirm_password && (
                        <p className="text-red-500">
                          {errors?.confirm_password?.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-end gap-4.5">
                    <button
                      className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-90"
                      type="submit"
                      disabled={isLoading}
                    >
                      {!isLoading ? 'Save' : <Loader />}
                    </button>
                  </div>
                </form>
                {isSuccess && showSuccessMessage && addSuccess && (
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminChangePassComp;
