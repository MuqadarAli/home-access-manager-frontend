import React, { useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import {
  useAdminForgotPassMutation,
  useSuperAdminForgotPassMutation,
} from '../redux/rtk-query/auth';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthenticated } from '../redux/slice/auth';
import Loader from '../components/Loader';
import { RootState } from '../redux/store';
import ErrorMessage from '../components/Alert/ErrorMessage';
import SuccessMessage from '../components/Alert/SuccessMessage';

const ForgotPassword: React.FC = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  const [forgot, { isError, isLoading }] = useSuperAdminForgotPassMutation();
  const [adminForgot, { isError: adminError, isLoading: adminLoading }] =
    useAdminForgotPassMutation();
  const [loginError, setLoginError] = useState<string>('');
  const dispatch = useDispatch();
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
    },
  });

  const onSubmit: any = async (data: any) => {
    try {
      let response;
      if (name == 'admin') {
        response = await adminForgot(data).unwrap();
      }
      if (name == 'super-admin') {
        response = await forgot(data).unwrap();
      }
      if (response?.statusCode == 200) {
        setShowSuccessMessage(true);
        setTimeout(() => {
          navigate(`/reset-password/${name}`);
        }, 2000);
      } else {
        setShowErrorMessage(true);
        setLoginError(response?.message);
      }
    } catch (error) {
      dispatch(setAuthenticated(false));
      console.log(error);
    }
  };

  const isAuthenticated = useSelector(
    (state: RootState) => state.persistedReducer.auth.isAuthenticated,
  );

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }
  return (
    <>
      {/* <Breadcrumb pageName="Admin" /> */}

      <div className="rounded-sm border m-auto px-5 md:px-0 border-stroke flex justify-center w-full h-screen bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <div className="flex flex-wrap justify-center items-center px-5 w-full md:w-2/6  shadow-lg">
            <div className="w-full border-stroke dark:border-strokedark xl:w-11/12 ">
              <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
                <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                  Forgot Password
                </h2>

                <form
                  method="post"
                  onSubmit={handleSubmit(onSubmit)}
                  className="mb-3"
                >
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="mb-2.5 block font-medium text-black dark:text-white"
                    >
                      Email
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="email"
                        {...register('email', {
                          required: 'This field is requires',
                          pattern: {
                            value:
                              /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                            message: 'Invalid email formate',
                          },
                        })}
                        placeholder="Enter email"
                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />

                      <span className="absolute right-4 top-4">
                        <svg
                          className="fill-current"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="0.5">
                            <path
                              d="M19.2516 3.30005H2.75156C1.58281 3.30005 0.585938 4.26255 0.585938 5.46567V16.6032C0.585938 17.7719 1.54844 18.7688 2.75156 18.7688H19.2516C20.4203 18.7688 21.4172 17.8063 21.4172 16.6032V5.4313C21.4172 4.26255 20.4203 3.30005 19.2516 3.30005ZM19.2516 4.84692C19.2859 4.84692 19.3203 4.84692 19.3547 4.84692L11.0016 10.2094L2.64844 4.84692C2.68281 4.84692 2.71719 4.84692 2.75156 4.84692H19.2516ZM19.2516 17.1532H2.75156C2.40781 17.1532 2.13281 16.8782 2.13281 16.5344V6.35942L10.1766 11.5157C10.4172 11.6875 10.6922 11.7563 10.9672 11.7563C11.2422 11.7563 11.5172 11.6875 11.7578 11.5157L19.8016 6.35942V16.5688C19.8703 16.9125 19.5953 17.1532 19.2516 17.1532Z"
                              fill=""
                            />
                          </g>
                        </svg>
                      </span>
                    </div>
                    {errors?.email && (
                      <p className="text-red-500">{errors?.email?.message}</p>
                    )}
                  </div>

                  <div className="">
                    <button
                      type="submit"
                      className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                    >
                      {!isLoading || !adminLoading ? 'Submit' : <Loader />}
                    </button>
                  </div>
                </form>
                {isError ||
                  (adminError && <p className="text-red-500">Login Failed</p>)}
                {showErrorMessage && (
                  <ErrorMessage
                    message={loginError}
                    setShowMessage={setShowErrorMessage}
                  />
                )}
                {showSuccessMessage && (
                  <SuccessMessage
                    message={'Opt send successfully'}
                    setShowMessage={setShowSuccessMessage}
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

export default ForgotPassword;
